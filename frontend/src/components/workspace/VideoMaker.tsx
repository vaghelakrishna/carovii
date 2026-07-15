import { useState } from "react";

import UploadPanel from "./VideoMaker/UploadPanel";
import SettingsPanel from "./VideoMaker/SettingsPanel";
import PreviewPanel from "./VideoMaker/PreviewPanel";

import { generateVideo } from "./VideoMaker/generateVideo";

const VideoMaker = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  const [direction, setDirection] = useState<
    "horizontal" | "vertical"
  >("horizontal");

  const [duration, setDuration] = useState(10);

  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleGenerate = async () => {
    if (!image) return;

    setLoading(true);

    if (videoUrl) {
      URL.revokeObjectURL(videoUrl);
      setVideoUrl("");
    }

    try {
      const url = await generateVideo({
        image,
        direction,
        duration,
      });

      setVideoUrl(url);
    } catch (err) {
      console.error(err);
      alert("Failed to generate video.");
    }

    setLoading(false);
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5">
        {/* Panels */}

        <div className="grid gap-7 lg:grid-cols-3">
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
              rounded-full
              bg-violet-600
              px-10
              py-4
              text-lg
              font-semibold
              text-white
              transition
              hover:bg-violet-700
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {loading
              ? "Generating..."
              : "Generate Video"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoMaker;