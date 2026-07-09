import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { ImagePlus, Trash2 } from "lucide-react";

import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import { useWorkspace } from "../../context/WorkspaceContext";

const UploadPanel = () => {
  const {
    preview,
    fileType,
    setFile,
    setPreview,
    setFileType,
  } = useWorkspace();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
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
      } else if (uploaded.type.startsWith("video/")) {
        setFileType("video");
      }
    },
    [preview, setFile, setPreview, setFileType]
  );

  const { getRootProps, getInputProps, isDragActive, open } =
    useDropzone({
      onDrop,
      noClick: true,
      multiple: false,
      accept: {
        "image/*": [],
        "video/*": [],
      },
    });

  const removeFile = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setFile(null);
    setPreview(null);
    setFileType(null);
  };

  return (
    <Card className="p-6">
      <SectionTitle number={1} title="Upload" />

      <div
        {...getRootProps()}
        className={`relative overflow-hidden rounded-3xl border-2 border-dashed p-8 transition-all duration-300 ${isDragActive
            ? "border-violet-500 bg-violet-50"
            : "border-slate-200 hover:border-violet-400 hover:bg-slate-50"
          }`}
      >
        <input {...getInputProps()} />

        {preview ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="overflow-hidden rounded-2xl bg-slate-100">
              {fileType === "image" ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="h-80 w-full object-cover"
                />
              ) : (
                <video
                  src={preview}
                  controls
                  className="h-80 w-full object-cover"
                />
              )}
            </div>

            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  open();
                }}
                className="flex-1 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700"
              >
                Replace
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile();
                }}
                className="flex items-center justify-center rounded-xl bg-red-500 px-5 text-white transition hover:bg-red-600"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </motion.div>
        ) : (
          <>
            <div className="absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-300/20 blur-3xl" />

            <div className="relative flex h-48 items-center justify-center">
              <motion.div
                animate={{
                  rotate: -8,
                  y: [0, -8, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="absolute left-10 top-10 h-24 w-20 rounded-2xl bg-gradient-to-br from-violet-200 to-violet-100 shadow-xl"
              />

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                }}
                className="z-10 flex h-28 w-24 items-center justify-center rounded-3xl bg-white shadow-2xl"
              >
                <ImagePlus
                  size={38}
                  className="text-violet-600"
                />
              </motion.div>

              <motion.div
                animate={{
                  rotate: 8,
                  y: [0, -8, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="absolute right-10 top-10 h-24 w-20 rounded-2xl bg-gradient-to-br from-sky-200 to-blue-100 shadow-xl"
              />
            </div>

            <div className="mt-3 text-center">
              <h3 className="text-xl font-bold text-slate-900">
                Drag & Drop Image or Video
              </h3>

              <p className="mt-2 text-slate-500">
                or click below to browse your computer
              </p>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  open();
                }}
                className="mt-7 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
              >
                Browse Files
              </button>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {["PNG", "JPG", "WEBP", "MP4", "MOV"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </Card>
  );
};

export default UploadPanel;