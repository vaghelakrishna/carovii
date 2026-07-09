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
    <Card className="overflow-hidden p-6">
      <SectionTitle number={1} title="Upload" />

      <div
        {...getRootProps()}
        className={`mt-6 rounded-[28px] border transition-all duration-300 ${isDragActive
            ? "border-violet-400 bg-violet-50"
            : "border-[#ECEAF3] bg-[#FCFBFF]"
          }`}
      >
        <input {...getInputProps()} />

        {!preview ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative overflow-hidden p-8"
          >
            {/* Decorative blobs */}
            <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-pink-100 blur-2xl" />
            <div className="absolute -right-10 bottom-0 h-28 w-28 rounded-full bg-violet-100 blur-2xl" />

            {/* Cute Illustration */}
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="mx-auto flex h-36 w-36 items-center justify-center rounded-[32px] bg-white shadow-lg"
            >
              <div className="relative">
                <div className="absolute -left-3 -top-3 text-xl">✨</div>
                <div className="absolute -right-3 bottom-0 text-lg">⭐</div>

                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-xl">
                  <UploadCloud size={36} />
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900">
                Drop your image or video
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Drag & drop your file here or choose it
                <br />
                from your computer.
              </p>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  open();
                }}
                className="mt-7 rounded-2xl bg-violet-600 px-7 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-700"
              >
                Choose File
              </button>

              <p className="mt-6 text-xs text-slate-400">
                Supports PNG, JPG, WEBP, MP4 & MOV
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-5"
          >
            {/* Preview */}
            <div className="overflow-hidden rounded-3xl border border-[#ECEAF3] bg-white shadow-sm">
              {fileType === "image" ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="h-80 w-full bg-[#F8F8FC] object-contain"
                />
              ) : (
                <video
                  src={preview}
                  controls
                  className="h-80 w-full bg-black object-contain"
                />
              )}
            </div>

            {/* File Info */}
            <div className="mt-5 flex items-center justify-between rounded-2xl border border-[#ECEAF3] bg-white p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100">
                  {fileType === "image" ? (
                    <ImageIcon
                      size={22}
                      className="text-violet-600"
                    />
                  ) : (
                    <Video
                      size={22}
                      className="text-violet-600"
                    />
                  )}
                </div>

                <div>
                  <h4 className="max-w-[180px] truncate text-sm font-semibold text-slate-900">
                    {file?.name}
                  </h4>

                  <p className="mt-1 text-xs text-slate-500">
                    {file && formatSize(file.size)}
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                Ready
              </span>
            </div>

            {/* Replace Button */}
            <button
              type="button"
              onClick={replaceFile}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-600 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-700"
            >
              <RefreshCw size={18} />
              Replace File
            </button>

            {/* Optional Remove */}
            <button
              type="button"
              onClick={removeFile}
              className="mt-3 w-full text-sm font-medium text-slate-500 transition hover:text-red-500"
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