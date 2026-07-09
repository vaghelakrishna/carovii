import UploadCard from "./UploadCard";
import SettingsCard from "./SettingsCard";
import PreviewCard from "./PreviewCard";
import ExportCard from "./ExportCard";
import Container from "../layout/Container";

const Workspace = () => {
  return (
    <section className="pb-24">
      <Container>

        <div className="rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_30px_100px_rgba(15,23,42,.08)]">

          <div className="grid gap-8 lg:grid-cols-12">

            <div className="space-y-6 lg:col-span-4">

              <UploadCard />

              <SettingsCard />

            </div>

            <div className="space-y-6 lg:col-span-8">

              <PreviewCard />

              <ExportCard />

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default Workspace;