import { ChevronLeft, ChevronRight, Download, ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

// import Card from "../ui/Card";
// import SectionTitle from "../ui/SectionTitle";
import { useWorkspaceStore } from "../../store/workspaceStore";
import { useRef } from "react";

const PreviewPanel = () => {
  const { slices, preview } = useWorkspaceStore();

  const downloadImage = (src: string, index: number) => {
    const link = document.createElement("a");

    link.href = src;
    link.download = `carovii-slide-${index + 1}.png`;
    link.click();
  };

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -220,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 220,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex h-[490px] ">
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

            <div className="relative rounded-[28px] border border-[#ECEAF3] bg-[#FCFBFF] p-8">

              <h2 className="text-center text-2xl font-bold text-slate-900">
                Your carousel is ready
              </h2>

              <p className="mt-2 text-center text-sm text-slate-500">
                Download individual slides or export everything as ZIP.
              </p>

              {/* Left Button */}

              {slices.length > 3 && (
                <button
                  onClick={scrollLeft}
                  className="
      absolute
      left-4
      top-1/2
      z-20
      -translate-y-1/2
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      border-[#ECEAF3]
      bg-white
      shadow-lg
      transition
      hover:scale-105
    "
                >
                  <ChevronLeft size={20} />
                </button>
              )}

              {/* Right Button */}

              {slices.length > 3 && (
                <button
                  onClick={scrollRight}
                  className="
      absolute
      right-4
      top-1/2
      z-20
      -translate-y-1/2
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      border-[#ECEAF3]
      bg-white
      shadow-lg
      transition
      hover:scale-105
    "
                >
                  <ChevronRight size={20} />
                </button>
              )}

              {/* Slides */}

              <div
                ref={scrollRef}
                className="
      mt-10
      flex
      gap-2
      scroll-smooth
      pb-4
      px-2
      scrollbar-hide
      overflow-x-hidden
    "
              >
                {slices.map((slice, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="flex-shrink-0"
                  >
                    <div className="overflow-hidden rounded-2xl border border-[#ECEAF3] bg-white shadow-sm">

                      <img
                        src={slice}
                        className="h-44 w-32 object-cover"
                      />

                    </div>

                    <button
                      onClick={() => downloadImage(slice, index)}
                      className="
            mx-auto
            mt-4
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-[#ECEAF3]
            bg-white
            shadow-sm
            transition
            hover:border-violet-300
            hover:bg-violet-50
          "
                    >
                      <Download size={16} />
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Download All */}

              <button
                className="
      mx-auto
      mt-8
      flex
      rounded-xl
      bg-violet-600
      px-8
      py-3.5
      font-semibold
      text-white
      shadow-lg
      transition
      hover:bg-violet-700
    "
              >
                Download All as ZIP
              </button>

            </div>
        </>
      )}
    </div>
  );
};

export default PreviewPanel;