import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import {
  UploadCloud,
  RefreshCw,
  Image as ImageIcon,
  Video,
} from "lucide-react";

import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

import { useWorkspaceStore } from "../../store/workspaceStore";
import { splitImage } from "../../utils/canvas";

const UploadPanel = () => {
  const {
    file,
    preview,
    fileType,
    slides,
    format,
    setFile,
    setPreview,
    setFileType,
    setSlices,
    reset,
  } = useWorkspaceStore();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const uploaded = acceptedFiles[0];

      if (!uploaded) return;

      if (preview) {
        URL.revokeObjectURL(preview);
      }

      const previewUrl = URL.createObjectURL(uploaded);

      setFile(uploaded);
      setPreview(previewUrl);
      

      if (uploaded.type.startsWith("image/")) {
        setFileType("image");

        // const slices = await splitImage(
        //   uploaded,
        //   slides,
        //   format
        // );

        // setSlices(slices);
      }

      if (uploaded.type.startsWith("video/")) {
        setFileType("video");
      }
    },
    [
      preview,
      slides,
      format,
      setFile,
      setPreview,
      setFileType,
      setSlices,
    ]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    open,
  } = useDropzone({
    onDrop,
    multiple: false,
    noClick: true,
    accept: {
      "image/*": [],
      "video/*": [],
    },
  });

  const replaceFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    open();
  };

  const removeFile = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    reset();
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }

    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  };

  return (
    <Card className="overflow-hidden rounded-2xl p-5 shadow-sm">
      <SectionTitle number={1} title="Upload" />

      <div
        {...getRootProps()}
        className={`mt-4 rounded-2xl border transition-all duration-300 ${isDragActive
            ? "border-violet-400 bg-violet-50"
            : "border-[#ECEAF3] bg-[#FCFBFF]"
          }`}
      >
        <input {...getInputProps()} />

        {!preview ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative overflow-hidden p-5"
          >
            {/* Glow */}
            <div className="absolute -left-8 -top-8 h-20 w-20 rounded-full bg-pink-100 blur-2xl" />
            <div className="absolute -right-8 bottom-0 h-24 w-24 rounded-full bg-violet-100 blur-2xl" />

            {/* Upload Icon */}
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-md"
            >
              <div className="relative">
                <span className="absolute -left-2 -top-2 text-sm">
                  ✨
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
                  <UploadCloud size={24} />
                </div>

                <span className="absolute -bottom-2 -right-2 text-xs">
                  ⭐
                </span>
              </div>
            </motion.div>

            {/* Text */}

            <div className="mt-5 text-center">
              <h3 className="text-lg font-semibold text-slate-900">
                Upload your file
              </h3>

              <p className="mt-2 text-sm leading-5 text-slate-500">
                Drag & drop an image or video
                <br />
                or browse from your computer
              </p>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  open();
                }}
                className="mt-5 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700"
              >
                Browse Files
              </button>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {["PNG", "JPG", "WEBP", "MP4", "MOV"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-slate-500 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4"
          >
            {/* Preview */}

            <div className="overflow-hidden rounded-2xl border border-[#ECEAF3] bg-white shadow-sm">
              {fileType === "image" ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="h-52 w-full bg-[#F8F8FC] object-contain"
                />
              ) : (
                <video
                  src={preview}
                  controls
                  className="h-52 w-full bg-black object-contain"
                />
              )}
            </div>

            {/* File Info */}

            <div className="mt-4 flex items-center justify-between rounded-xl border border-[#ECEAF3] bg-white p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100">
                  {fileType === "image" ? (
                    <ImageIcon
                      size={18}
                      className="text-violet-600"
                    />
                  ) : (
                    <Video
                      size={18}
                      className="text-violet-600"
                    />
                  )}
                </div>

                <div>
                  <h4 className="max-w-[150px] truncate text-[13px] font-semibold text-slate-900">
                    {file?.name}
                  </h4>

                  <p className="text-[11px] text-slate-500">
                    {file && formatSize(file.size)}
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700">
                Ready
              </span>
            </div>

            {/* Buttons */}

            <button
              type="button"
              onClick={replaceFile}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              <RefreshCw size={16} />
              Replace File
            </button>

            <button
              type="button"
              onClick={removeFile}
              className="mt-2 w-full text-sm font-medium text-slate-500 transition hover:text-red-500"
            >
              Remove file
            </button>
          </motion.div>
        )}
      </div>
    </Card>
  );

};

export default UploadPanel;