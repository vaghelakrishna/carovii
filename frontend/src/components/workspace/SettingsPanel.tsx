const SettingsPanel = () => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">

      <h2 className="text-lg font-semibold">
        Carousel Settings
      </h2>

      <div className="mt-6">

        <p className="mb-3 text-sm font-medium">
          Format
        </p>

        <div className="flex gap-3">

          <button className="rounded-xl bg-indigo-600 px-4 py-2 text-white">
            Portrait
          </button>

          <button className="rounded-xl border px-4 py-2">
            Square
          </button>

        </div>

      </div>

      <div className="mt-8">

        <p className="mb-3 text-sm font-medium">
          Slides
        </p>

        <input
          type="range"
          min="2"
          max="10"
          defaultValue="5"
          className="w-full"
        />

      </div>

    </div>
  );
};

export default SettingsPanel;