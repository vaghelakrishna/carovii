import Hero from "./components/hero/Hero";
import UploadPanel from "./components/workspace/UploadPanel";
import SettingsPanel from "./components/workspace/SettingsPanel";
import PreviewPanel from "./components/workspace/PreviewPanel";
// import WhatsNewCarousel from "./components/workspace/WhatsNewCarousel"
import FreeTemplates from "./templates/FreeTemplates";
function App() {
  return (
    <div className="min-h-screen bg-[#FAF9FF] overflow-x-hidden">

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-300/20 blur-[120px] md:h-[650px] md:w-[650px] md:blur-[160px]" />

        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-pink-300/20 blur-[90px] md:h-[500px] md:w-[500px] md:blur-[140px]" />

        <div className="absolute left-0 top-1/2 h-[250px] w-[250px] rounded-full bg-sky-300/20 blur-[80px] md:h-[450px] md:w-[450px] md:blur-[140px]" />
      </div>

      <Hero />

      <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">

        <div
          className="
            grid
            gap-6

            grid-cols-1

            lg:grid-cols-2

            xl:grid-cols-3
          "
        >
          {/* Upload */}
          <div className="order-1">
            <UploadPanel />
          </div>

          {/* Settings */}
          <div className="order-2">
            <SettingsPanel />
          </div>

          {/* Preview */}
          <div className="order-3 xl:col-span-1 lg:col-span-2">
            <PreviewPanel />
          </div>

        </div>

      </main>
      <FreeTemplates />
      {/* <WhatsNewCarousel /> */}
    </div>
  );
}

export default App;