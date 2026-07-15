import UploadPanel from "../components/workspace/CarouselSplitter/UploadPanel";
import Hero from "../components/hero/Hero";
import Footer from "../components/layout/Footer";
import { useWorkspaceStore } from "../store/workspaceStore";
import SettingsPanel from "../components/workspace/CarouselSplitter/SettingsPanel";
import PreviewPanel from "../components/workspace/CarouselSplitter/PreviewPanel";
import FreeTemplates from "../templates/FreeTemplates";
import FAQSection from "../components/layout/FAQSection";
import VideoMaker from "../components/workspace/VideoMaker";

const Home = () => {
    const { preview } = useWorkspaceStore();
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAF9FF]">

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-300/20 blur-[160px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-[140px]" />

        <div className="absolute left-0 top-1/2 h-[450px] w-[450px] rounded-full bg-sky-300/20 blur-[140px]" />
      </div>

      <Hero />

      <main className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">

        {/* BEFORE UPLOAD */}

        {!preview ? (
          <div className="mx-auto max-w-3xl">
            <UploadPanel />
          </div>
        ) : (
          /* AFTER UPLOAD */

          <div
            className="
              grid
              gap-6
              grid-cols-1
              lg:grid-cols-2
              xl:grid-cols-3
            "
          >
            <div>
              <UploadPanel />
            </div>

            <div>
              <SettingsPanel />
            </div>

            <div className="lg:col-span-2 xl:col-span-1">
              <PreviewPanel />
            </div>
          </div>
        )}
      </main>

      {/* <WhatsNewCarousel /> */}
      <FreeTemplates />
<VideoMaker/>
      <FAQSection />

      <Footer />
    </div>
  );
};

export default Home;