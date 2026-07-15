import { ArrowDown, ArrowRight } from "lucide-react";

interface Props {
  direction: "horizontal" | "vertical";
  duration: number;

  setDirection: React.Dispatch<
    React.SetStateAction<"horizontal" | "vertical">
  >;

  setDuration: React.Dispatch<
    React.SetStateAction<number>
  >;
}

const SettingsPanel = ({
  direction,
  duration,
  setDirection,
  setDuration,
}: Props) => {
  return (
    <div className="rounded-3xl border border-[#ECEAF3] bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900">
        Video Settings
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Customize how your carousel video will scroll.
      </p>

      {/* Direction */}

      <div className="mt-8">
        <label className="mb-3 block text-sm font-semibold text-slate-700">
          Scroll Direction
        </label>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setDirection("horizontal")}
            className={`
              rounded-2xl
              border
              p-5
              transition
              ${direction === "horizontal"
                ? "border-violet-600 bg-violet-50"
                : "border-[#ECEAF3] hover:border-violet-300"
              }
            `}
          >
            <ArrowRight
              className="mx-auto"
              size={32}
            />

            <p className="mt-3 font-semibold">
              Horizontal
            </p>
          </button>

          <button
            onClick={() => setDirection("vertical")}
            className={`
              rounded-2xl
              border
              p-5
              transition
              ${direction === "vertical"
                ? "border-violet-600 bg-violet-50"
                : "border-[#ECEAF3] hover:border-violet-300"
              }
            `}
          >
            <ArrowDown
              className="mx-auto"
              size={32}
            />

            <p className="mt-3 font-semibold">
              Vertical
            </p>
          </button>
        </div>
      </div>

      {/* Duration */}

      <div className="mt-10">
        <div className="mb-3 flex items-center justify-between">
          <label className="text-sm font-semibold text-slate-700">
            Video Duration
          </label>

          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
            {duration}s
          </span>
        </div>

        <input
          type="range"
          min={5}
          max={30}
          step={1}
          value={duration}
          onChange={(e) =>
            setDuration(Number(e.target.value))
          }
          className="w-full accent-violet-600"
        />

        <div className="mt-2 flex justify-between text-xs text-slate-400">
          <span>5s</span>
          <span>30s</span>
        </div>
      </div>

      {/* Speed */}

      <div className="mt-10">
        <label className="mb-3 block text-sm font-semibold text-slate-700">
          Scroll Speed
        </label>

        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-[#F8F8FC] py-3 text-center text-sm font-medium">
            Slow
          </div>

          <div className="rounded-xl border border-violet-500 bg-violet-50 py-3 text-center text-sm font-semibold text-violet-700">
            Medium
          </div>

          <div className="rounded-xl bg-[#F8F8FC] py-3 text-center text-sm font-medium">
            Fast
          </div>
        </div>
      </div>

      {/* Info */}

      <div className="mt-10 rounded-2xl bg-[#F8F8FC] p-4">
        <p className="text-sm leading-6 text-slate-600">
          ✨ Your video will smoothly auto-scroll through the uploaded
          carousel and export as an MP4 ready for Instagram Reels, Stories,
          or Posts.
        </p>
      </div>
    </div>
  );
};

export default SettingsPanel;