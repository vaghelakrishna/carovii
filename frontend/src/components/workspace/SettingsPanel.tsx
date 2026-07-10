import { motion } from "framer-motion";
import { Minus, Plus, RectangleVertical, Square } from "lucide-react";
import { useEffect } from "react";
import { splitImage } from "../../utils/canvas";
import Card from "../ui/Card";
// import SectionTitle from "../ui/SectionTitle";
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
  <Card className="rounded-2xl p-5 shadow-sm">
  {/* <SectionTitle number={2} title="Carousel Settings" /> */}

  {/* Slides */}

  <div className="mt-5">

    <div className="mb-3 flex items-center justify-between">
      <h3 className="text-xl font-medium text-slate-800">
        Number of Slides
      </h3>

      <span className="rounded-full bg-violet-100 px-2.5 py-1 text-[11px] font-medium text-violet-700">
        2 – 10
      </span>
    </div>

    <div className="flex items-center justify-between rounded-2xl border border-[#ECEAF3] bg-[#FCFBFF] px-4 py-2">

      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={decreaseSlides}
        disabled={slides === 2}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ECEAF3] bg-white transition hover:bg-violet-50 disabled:opacity-40"
      >
        <Minus size={16} />
      </motion.button>

      <motion.span
        key={slides}
        initial={{ scale: .8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="min-w-[40px] text-center text-3xl font-bold text-slate-900"
      >
        {slides}
      </motion.span>

      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={increaseSlides}
        disabled={slides === 10}
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white transition hover:bg-violet-700 disabled:opacity-40"
      >
        <Plus size={16} />
      </motion.button>

    </div>

  </div>

  {/* Format */}

  <div className="mt-6">

    <h3 className="mb-3 text-sm font-medium text-slate-800">
      Export Format
    </h3>

    <div className="grid grid-cols-2 gap-3">

      <button
        onClick={() => setFormat("portrait")}
        className={`rounded-xl border p-3 transition ${
          format === "portrait"
            ? "border-violet-500 bg-violet-50"
            : "border-[#ECEAF3] bg-white hover:bg-slate-50"
        }`}
      >
        <RectangleVertical
          size={22}
          className="mx-auto text-violet-600"
        />

        <p className="mt-2 text-sm font-semibold">
          Portrait
        </p>

        <span className="text-[11px] text-slate-500">
          1080 × 1350
        </span>

      </button>

      <button
        onClick={() => setFormat("square")}
        className={`rounded-xl border p-3 transition ${
          format === "square"
            ? "border-violet-500 bg-violet-50"
            : "border-[#ECEAF3] bg-white hover:bg-slate-50"
        }`}
      >
        <Square
          size={22}
          className="mx-auto text-violet-600"
        />

        <p className="mt-2 text-sm font-semibold">
          Square
        </p>

        <span className="text-[11px] text-slate-500">
          1080 × 1080
        </span>

      </button>

    </div>

  </div>

  {/* Status */}

  <div className="mt-6 rounded-xl border border-[#ECEAF3] bg-[#FCFBFF] px-4 py-3">

    {processing ? (
      <div className="flex items-center gap-2 text-sm text-violet-700">
        <div className="h-2 w-2 animate-pulse rounded-full bg-violet-500" />
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