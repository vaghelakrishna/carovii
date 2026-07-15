import { useState } from "react";

import UploadPanel from "./VideoMaker/UploadPanel";
import SettingsPanel from "./VideoMaker/SettingsPanel";
import PreviewPanel from "./VideoMaker/PreviewPanel";

const VideoMaker = () => {
  // Upload
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  // Settings
  const [direction, setDirection] = useState<"horizontal" | "vertical">(
    "horizontal"
  );

  const [duration, setDuration] = useState(8);

  // Output
  const [videoUrl, setVideoUrl] = useState("");

  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    // Generate video logic later
    console.log({
      image,
      direction,
      duration,
    });

    setLoading(true);

    // temporary fake loading
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}

        <div className="mb-10 text-center">
          <h2 className="font-['Fraunces'] text-4xl font-black text-slate-900 md:text-5xl">
            Carousel Video Maker
          </h2>

          <p className="mt-3 text-slate-500">
            Turn your carousel into a smooth scrolling video.
          </p>
        </div>

        {/* Panels */}

        <div className="grid gap-6 lg:grid-cols-3">
          <UploadPanel
            image={image}
            preview={preview}
            setImage={setImage}
            setPreview={setPreview}
          />

          <SettingsPanel
            direction={direction}
            duration={duration}
            setDirection={setDirection}
            setDuration={setDuration}
          />

          <PreviewPanel
            loading={loading}
            videoUrl={videoUrl}
          />
        </div>

        {/* Generate Button */}

        <div className="mt-10 flex justify-center">
          <button
            onClick={handleGenerate}
            disabled={!image || loading}
            className="
              rounded-2xl
              bg-violet-600
              px-8
              py-4
              text-white
              font-semibold
              transition
              hover:bg-violet-700
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {loading ? "Generating..." : "Generate Video"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoMaker;