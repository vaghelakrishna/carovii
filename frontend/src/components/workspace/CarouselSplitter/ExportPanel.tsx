import { Archive, Download, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import Card from "../ui/Card";
// import SectionTitle from "../ui/SectionTitle";
import { useWorkspaceStore } from "../../store/workspaceStore";

const ExportPanel = () => {
  const { slices, processing } = useWorkspaceStore();

  const hasSlides = slices.length > 0;

  const handleDownload = () => {
    // TODO:
    // Download ZIP using JSZip
  };

  return (
    <Card className="p-6">
      {/* <SectionTitle number={4} title="Export" /> */}

      <div className="mt-6 rounded-[28px] border border-[#ECEAF3] bg-[#FCFBFF] p-6">

        {/* Icon */}

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-violet-100">
          <Archive
            size={28}
            className="text-violet-600"
          />
        </div>

        {/* Title */}

        <h3 className="mt-5 text-center text-xl font-bold text-slate-900">
          Download Your Carousel
        </h3>

        <p className="mt-2 text-center text-sm leading-6 text-slate-500">
          Export all generated slides as a ZIP file
          ready to upload to Instagram.
        </p>

        {/* Stats */}

        <div className="mt-8 grid grid-cols-2 gap-4">

          <div className="rounded-2xl border border-[#ECEAF3] bg-white p-4">

            <p className="text-xs uppercase tracking-wide text-slate-400">
              Slides
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              {slices.length}
            </p>

          </div>

          <div className="rounded-2xl border border-[#ECEAF3] bg-white p-4">

            <p className="text-xs uppercase tracking-wide text-slate-400">
              Status
            </p>

            <div className="mt-2 flex items-center gap-2">

              <ShieldCheck
                size={18}
                className="text-emerald-500"
              />

              <span className="font-semibold text-emerald-600">
                Ready
              </span>

            </div>

          </div>

        </div>

        {/* Download */}

        <motion.button
          whileTap={{ scale: 0.98 }}
          whileHover={{ y: -2 }}
          disabled={!hasSlides || processing}
          onClick={handleDownload}
          className="
            mt-8
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-violet-600
            to-fuchsia-600
            py-4
            font-semibold
            text-white
            shadow-lg
            transition
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          <Download size={20} />

          {processing
            ? "Preparing..."
            : "Download ZIP"}
        </motion.button>

        <p className="mt-4 text-center text-xs text-slate-400">
          Files are processed locally in your browser.
        </p>

      </div>
    </Card>
  );
};

export default ExportPanel;