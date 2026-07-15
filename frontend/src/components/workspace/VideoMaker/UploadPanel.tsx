import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, RefreshCw, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

interface UploadPanelProps {
  image: File | null;
  preview: string;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  setPreview: React.Dispatch<React.SetStateAction<string>>;
}

const UploadPanel = ({
  image,
  preview,
  setImage,
  setPreview,
}: UploadPanelProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (!file) return;

      if (preview) {
        URL.revokeObjectURL(preview);
      }

      const url = URL.createObjectURL(file);

      setImage(file);
      setPreview(url);
    },
    [preview, setImage, setPreview]
  );

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: false,
    noClick: true,
    onDrop,
  });

  const removeImage = () => {
    if (preview) URL.revokeObjectURL(preview);

    setImage(null);
    setPreview("");
  };

  return (
    <div className="rounded-3xl border border-[#ECEAF3] bg-white p-5 shadow-sm">
      <h3 className="mb-5 text-xl font-bold text-slate-900">
        Upload Image
      </h3>

      <div {...getRootProps()}>
        <input {...getInputProps()} />

        {!preview ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              flex
              h-[430px]
              cursor-pointer
              flex-col
              items-center
              justify-center
              rounded-[32px]
              border-2
              border-dashed
              border-[#F4D23C]
              bg-[#FFF7CC]
              text-center
              transition
              hover:border-yellow-400
            "
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow">
              <UploadCloud
                size={34}
                className="text-yellow-500"
              />
            </div>

            <h2 className="mt-6 text-3xl font-black text-slate-900">
              Upload Image
            </h2>

            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
              Drag & drop your carousel image here or choose it from your
              computer.
            </p>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                open();
              }}
              className="
                mt-8
                rounded-full
                bg-black
                px-7
                py-3
                font-medium
                text-white
                transition
                hover:scale-105
              "
            >
              Select Image
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="overflow-hidden rounded-[28px] border bg-[#FAFAFA]">
              <img
                src={preview}
                alt=""
                className="h-[430px] w-full object-contain"
              />
            </div>

            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  open();
                }}
                className="
                  flex-1
                  rounded-xl
                  bg-violet-600
                  py-3
                  font-medium
                  text-white
                  transition
                  hover:bg-violet-700
                "
              >
                <span className="flex items-center justify-center gap-2">
                  <RefreshCw size={18} />
                  Replace
                </span>
              </button>

              <button
                onClick={removeImage}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  transition
                  hover:bg-red-50
                "
              >
                <Trash2
                  size={18}
                  className="text-red-500"
                />
              </button>
            </div>

            {image && (
              <p className="mt-4 truncate text-center text-sm text-slate-500">
                {image.name}
              </p>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default UploadPanel;