import { motion } from "framer-motion";
import { Minus, Plus, RectangleVertical, Square } from "lucide-react";
import { useEffect } from "react";
import { splitImage } from "../../utils/canvas";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import { useWorkspaceStore } from "../../store/workspaceStore";

const SettingsPanel = () => {
  const {
    file,
    fileType,
    slides,
    setSlides,
    format,
    setFormat,
    processing,
    setSlices,
  } = useWorkspaceStore();
  const decreaseSlides = () => {
    if (slides > 2) {
      setSlides(slides - 1);
    }
  };

  const increaseSlides = () => {
    if (slides < 10) {
      setSlides(slides + 1);
    }
  };

  useEffect(() => {
    const generatePreview = async () => {
      if (!file) return;

      if (fileType !== "image") return;

      const result = await splitImage(
        file,
        slides,
        format
      );

      setSlices(result);
    };

    generatePreview();
  }, [
    file,
    fileType,
    slides,
    format,
    setSlices,
  ]);

  return (
    <Card className="p-6">
      <SectionTitle
        number={2}
        title="Carousel Settings"
      />

      {/* Slides */}
      <div className="mt-8">

        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-800">
            Number of Slides
          </h3>

          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
            2 - 10
          </span>
        </div>

        <div className="flex items-center justify-center gap-6 rounded-3xl border border-[#ECEAF3] bg-[#FCFBFF] p-5">

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={decreaseSlides}
            disabled={slides === 2}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ECEAF3] bg-white shadow-sm transition hover:bg-violet-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Minus size={20} />
          </motion.button>

          <motion.span
            key={slides}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="min-w-[50px] text-center text-5xl font-black text-slate-900"
          >
            {slides}
          </motion.span>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={increaseSlides}
            disabled={slides === 10}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-md transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Plus size={20} />
          </motion.button>

        </div>

      </div>

      {/* Format */}

      <div className="mt-8">

        <h3 className="mb-3 text-sm font-semibold text-slate-800">
          Export Format
        </h3>

        <div className="grid grid-cols-2 gap-3">

          <button
            onClick={() => setFormat("portrait")}
            className={`rounded-2xl border p-4 transition ${format === "portrait"
                ? "border-violet-500 bg-violet-50"
                : "border-[#ECEAF3] bg-white hover:bg-slate-50"
              }`}
          >
            <RectangleVertical
              className="mx-auto"
              size={28}
            />

            <p className="mt-3 font-semibold">
              Portrait
            </p>

            <span className="text-xs text-slate-500">
              1080 × 1350
            </span>
          </button>

          <button
            onClick={() => setFormat("square")}
            className={`rounded-2xl border p-4 transition ${format === "square"
                ? "border-violet-500 bg-violet-50"
                : "border-[#ECEAF3] bg-white hover:bg-slate-50"
              }`}
          >
            <Square
              className="mx-auto"
              size={28}
            />

            <p className="mt-3 font-semibold">
              Square
            </p>

            <span className="text-xs text-slate-500">
              1080 × 1080
            </span>
          </button>

        </div>

      </div>

      {/* Status */}

      <div className="mt-8 rounded-2xl border border-[#ECEAF3] bg-[#FCFBFF] p-4">

        {processing ? (
          <div className="flex items-center gap-2 text-sm text-violet-700">
            <div className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
            Generating carousel...
          </div>
        ) : (
          <div className="flex items-center gap-2 text-sm text-emerald-700">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            Ready
          </div>
        )}

      </div>
    </Card>
  );
};

export default SettingsPanel;