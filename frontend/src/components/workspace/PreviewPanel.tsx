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
    <Card className="flex h-[500px] flex-col rounded-2xl p-5 shadow-sm">
      {/* <SectionTitle number={3} title="Carousel Preview" /> */}

      {!preview ? (
        <div className="mt-5 flex flex-1 flex-col items-center justify-center rounded-2xl border border-[#ECEAF3] bg-[#FCFBFF]">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-100">
            <ImageIcon
              size={28}
              className="text-violet-600"
            />
          </div>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            Nothing to preview
          </h3>

          <p className="mt-2 max-w-[280px] text-center text-sm leading-6 text-slate-500">
            Upload an image or video and your Instagram
            carousel will appear here.
          </p>

        </div>
      ) : (
        <>
          {/* Preview */}

          <div className="mt-5 flex-1 overflow-hidden">

            <div className="flex h-full gap-4 overflow-x-auto overflow-y-hidden pb-4 scroll-smooth">

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
                    y: -4,
                  }}
                  transition={{
                    duration: .25,
                  }}
                  className="group relative h-[250px] w-[180px] flex-shrink-0 overflow-hidden rounded-2xl border border-[#ECEAF3] bg-white shadow-sm"
                >
                  <img
                    src={slice}
                    alt={`Slide ${index + 1}`}
                    className="h-full w-full object-cover"
                  />

                  {/* Hover */}

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">

                    <button
                      onClick={() =>
                        downloadImage(slice, index)
                      }
                      className="translate-y-4 rounded-xl bg-white p-2.5 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <Download
                        size={16}
                        className="text-slate-700"
                      />
                    </button>

                  </div>

                  {/* Number */}

                  <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold backdrop-blur">
                    {index + 1}
                  </div>

                </motion.div>
              ))}

            </div>

          </div>

          {/* Bottom */}

          <button
            className="
        mt-5
        rounded-xl
        bg-gradient-to-r
        from-violet-600
        to-fuchsia-600
        py-3
        text-sm
        font-semibold
        text-white
        shadow-md
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