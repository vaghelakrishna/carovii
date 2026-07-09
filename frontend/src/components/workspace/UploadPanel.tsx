const UploadPanel = () => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">

      <h2 className="text-lg font-semibold">
        Upload
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Images or Videos
      </p>

      <div className="mt-6 flex h-64 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-white">

        <div className="text-center">

          <div className="text-5xl">
            📤
          </div>

          <p className="mt-4 font-medium">
            Drag & Drop
          </p>

          <p className="mt-2 text-sm text-slate-400">
            PNG • JPG • WEBP • MP4
          </p>

        </div>

      </div>

    </div>
  );
};

export default UploadPanel;