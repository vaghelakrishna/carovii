import { Download, ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import { useWorkspaceStore } from "../../store/workspaceStore";

const PreviewPanel = () => {
  const { slices, preview } = useWorkspaceStore();

  const downloadImage = (src: string, index: number) => {
    const link = document.createElement("a");

    link.href = src;
    link.download = `carovii-slide-${index + 1}.png`;

    link.click();
  };

  return (
    <Card className="flex h-full flex-col p-6">
      <SectionTitle
        number={3}
        title="Carousel Preview"
      />

      {!preview ? (
        <div className="mt-6 flex flex-1 flex-col items-center justify-center rounded-[28px] border border-[#ECEAF3] bg-[#FCFBFF] p-10">

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-violet-100">

            <ImageIcon
              size={42}
              className="text-violet-600"
            />

          </div>

          <h3 className="mt-6 text-xl font-bold text-slate-900">
            Nothing to preview
          </h3>

          <p className="mt-3 max-w-xs text-center text-sm leading-6 text-slate-500">
            Upload an image or video and we'll generate
            beautiful Instagram carousel slides.
          </p>

        </div>
      ) : (
        <>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3">

            {slices.map((slice, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group relative overflow-hidden rounded-3xl border border-[#ECEAF3] bg-white shadow-sm"
              >
                <img
                  src={slice}
                  alt={`Slide ${index + 1}`}
                  className="aspect-[4/5] w-full object-cover"
                />

                {/* Overlay */}

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/20">

                  <button
                    onClick={() =>
                      downloadImage(slice, index)
                    }
                    className="translate-y-3 rounded-2xl bg-white p-3 opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <Download
                      size={18}
                      className="text-slate-700"
                    />
                  </button>

                </div>

                {/* Number */}

                <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold backdrop-blur">
                  {index + 1}
                </div>

              </motion.div>
            ))}

          </div>

          {/* Bottom */}

          <button
            className="
            mt-6
            rounded-2xl
            bg-gradient-to-r
            from-violet-600
            to-fuchsia-600
            py-4
            font-semibold
            text-white
            shadow-lg
            transition
            hover:-translate-y-0.5
          "
          >
            Download ZIP
          </button>
        </>
      )}
    </Card>
  );
};

export default PreviewPanel;