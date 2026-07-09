import Hero from "./components/hero/Hero";
import UploadPanel from "./components/workspace/UploadPanel";
import SettingsPanel from "./components/workspace/SettingsPanel";
import PreviewPanel from "./components/workspace/PreviewPanel";

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9FF]">

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

        <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-300/20 blur-[160px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-[140px]" />

        <div className="absolute left-0 top-1/2 h-[450px] w-[450px] rounded-full bg-sky-300/20 blur-[140px]" />

      </div>

      <Hero />

      <main className="mx-auto max-w-[1550px] px-6 pb-24">

        <div className="grid gap-6 xl:grid-cols-[340px_300px_minmax(0,1fr)]">

          {/* Upload */}

          <div>
            <UploadPanel />
          </div>

          {/* Settings */}

          <div>
            <SettingsPanel />
          </div>

          {/* Preview */}

          <div>
            <PreviewPanel />
          </div>

        </div>

      </main>

    </div>
  );
}

export default App;