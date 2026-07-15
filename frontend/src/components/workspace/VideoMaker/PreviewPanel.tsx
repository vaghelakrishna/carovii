import {
  Download,
  Sparkles,
  LoaderCircle,
  Video,
} from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  loading: boolean;
  videoUrl: string;
}

const PreviewPanel = ({
  loading,
  videoUrl,
}: Props) => {
  return (
    <div className="rounded-3xl border border-[#ECEAF3] bg-white p-6 shadow-sm">
      {/* Heading */}

      <h3 className="text-xl font-bold text-slate-900">
        Preview
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Your generated carousel video will appear here.
      </p>

      {/* Preview Box */}

      <div
        className="
          mt-6
          flex
          h-[430px]
          items-center
          justify-center
          overflow-hidden
          rounded-[28px]
          border
          border-[#ECEAF3]
          bg-[#FAFAFC]
        "
      >
        {/* Loading */}

        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <LoaderCircle
              size={55}
              className="mx-auto animate-spin text-violet-600"
            />

            <h4 className="mt-6 text-xl font-bold text-slate-900">
              Generating Video...
            </h4>

            <p className="mt-2 text-sm text-slate-500">
              Please wait a few seconds.
            </p>
          </motion.div>
        )}

        {/* Empty */}

        {!loading && !videoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-8 text-center"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-violet-100">
              <Video
                size={34}
                className="text-violet-600"
              />
            </div>

            <h4 className="mt-6 text-2xl font-bold text-slate-900">
              No Preview Yet
            </h4>

            <p className="mt-3 leading-7 text-slate-500">
              Upload your carousel image and click
              <span className="font-semibold text-violet-600">
                {" "}
                Generate Video
              </span>{" "}
              to preview it here.
            </p>
          </motion.div>
        )}

        {/* Video */}

        {!loading && videoUrl && (
          <motion.video
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            controls
            className="h-full w-full object-contain"
            src={videoUrl}
          />
        )}
      </div>

      {/* Bottom Buttons */}

      {!loading && videoUrl && (
        <div className="mt-6 space-y-3">
          <a
            href={videoUrl}
            download="carovii-video.webm"
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-violet-600
              py-3.5
              font-semibold
              text-white
              transition
              hover:bg-violet-700
            "
          >
            <Download size={18} />
            Download Video
          </a>

          <button
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-[#ECEAF3]
              py-3.5
              font-medium
              transition
              hover:bg-[#FAFAFC]
            "
          >
            <Sparkles size={18} />
            Generate Again
          </button>
        </div>
      )}

      {/* Footer Tip */}

      {!loading && (
        <div className="mt-6 rounded-2xl bg-[#F8F8FC] p-4">
          <p className="text-sm leading-6 text-slate-600">
            💜 Exported videos are optimized for Instagram Reels, Stories and
            Posts.
          </p>
        </div>
      )}
    </div>
  );
};

export default PreviewPanel;