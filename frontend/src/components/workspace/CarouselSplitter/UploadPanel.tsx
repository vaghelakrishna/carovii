import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { RefreshCw, Image as ImageIcon } from "lucide-react";
import Card from "../../ui/Card";
import uploadImage from "../../../assets/icons/photoandcamera.png";
import { useWorkspaceStore } from "../../../store/workspaceStore";

const UploadPanel = () => {
  const { file, preview, setFile, setPreview, setFileType, reset } = useWorkspaceStore();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const uploaded = acceptedFiles[0];
      if (!uploaded) return;
      if (preview) URL.revokeObjectURL(preview);
      setFile(uploaded);
      setPreview(URL.createObjectURL(uploaded));
      setFileType(uploaded.type.startsWith("video/") ? "video" : "image");
    },
    [preview, setFile, setPreview, setFileType]
  );

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    multiple: false,
    noClick: true,
    accept: { "image/*": [], "video/*": [] },
  });

  const formatSize = (bytes: number) =>
    bytes < 1024 * 1024
      ? `${(bytes / 1024).toFixed(1)} KB`
      : `${(bytes / 1024 / 1024).toFixed(2)} MB`;

  return (
    <Card className="overflow-hidden rounded-2xl p-5 shadow-sm mt-20">
      <div {...getRootProps()} className="mt-4 rounded-2xl transition-all duration-300">
        <input {...getInputProps()} />
        {!preview ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative overflow-hidden rounded-[28px] border-2 border-dashed border-[#E7E3F4] bg-white px-4 py-4 text-center transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#FCFBFF] to-white" />
            <div className="relative z-10">
              <h3 className="text-[28px] font-bold tracking-tight text-slate-900">Create New Carousel</h3>
              <div className="mx-auto mb-4 flex h-35 w-35 items-center justify-center">
                <img src={uploadImage} alt="Upload" className="h-full w-full object-contain" />
              </div>
              <p className="mt-3 text-[15px] leading-7 text-slate-500">Drag photos here</p>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); open(); }}
                className="mt-4 rounded-xl bg-[#6D4AFF] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.03] hover:bg-[#5E3CF6]"
              >
                Select from computer
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4">
            <div className="overflow-hidden rounded-2xl border border-[#ECEAF3] bg-white shadow-sm">
              <img src={preview} alt="Preview" className="h-52 w-full bg-[#F8F8FC] object-contain" />
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl border border-[#ECEAF3] bg-white p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100">
                  <ImageIcon size={18} className="text-violet-600" />
                </div>
                <div>
                  <h4 className="max-w-[150px] truncate text-[13px] font-semibold text-slate-900">{file?.name}</h4>
                  <p className="text-[11px] text-slate-500">{file && formatSize(file.size)}</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700">Ready</span>
            </div>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); open(); }}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              <RefreshCw size={16} /> Replace File
            </button>
            <button
              type="button"
              onClick={() => { if (preview) URL.revokeObjectURL(preview); reset(); }}
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