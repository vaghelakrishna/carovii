import UploadPanel from "./UploadPanel";
import SettingsPanel from "./SettingsPanel";
import PreviewPanel from "./PreviewPanel";
import ExportPanel from "./ExportPanel";
import Container from "../layout/Container";

const Workspace = () => {
  return (
    <section className="pb-24">

      <Container>

        <div className="rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">

          <div className="grid gap-8 p-8 lg:grid-cols-12">

            <div className="lg:col-span-4">

              <UploadPanel />

              <div className="h-6" />

              <SettingsPanel />

            </div>

            <div className="lg:col-span-8">

              <PreviewPanel />

              <div className="h-6" />

              <ExportPanel />

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default Workspace;