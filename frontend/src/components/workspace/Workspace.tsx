import UploadPanel from "./UploadPanel";
import SettingsPanel from "./SettingsPanel";
import PreviewPanel from "./PreviewPanel";

import Container from "../layout/Container";

const Workspace = () => {
  return (
    <section className="pb-24">
      <Container>
        <div className="rounded-[32px] border border-[#ECEAF3] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.08)]">

          <div className="grid gap-8 xl:grid-cols-[340px_300px_minmax(0,1fr)]">

            <UploadPanel />

            <SettingsPanel />

            <PreviewPanel />

          </div>

        </div>
      </Container>
    </section>
  );
};

export default Workspace;