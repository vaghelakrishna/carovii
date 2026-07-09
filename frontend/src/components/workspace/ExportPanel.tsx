const ExportPanel = () => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">

      <h2 className="text-lg font-semibold">
        Export
      </h2>

      <button
        disabled
        className="mt-6 w-full rounded-2xl bg-slate-900 py-4 font-semibold text-white opacity-50"
      >
        Download ZIP
      </button>

    </div>
  );
};

export default ExportPanel;