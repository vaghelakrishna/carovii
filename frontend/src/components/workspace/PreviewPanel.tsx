const PreviewPanel = () => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">

      <div className="flex items-center justify-between">

        <h2 className="text-lg font-semibold">
          Preview
        </h2>

        <span className="text-sm text-slate-500">
          No file selected
        </span>

      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">

        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="aspect-[4/5] rounded-2xl border border-slate-200 bg-white"
          />
        ))}

      </div>

    </div>
  );
};

export default PreviewPanel;