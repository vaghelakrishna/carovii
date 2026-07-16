import JSZip from "jszip";
import { saveAs } from "file-saver";

export const downloadZip = async (images: string[]) => {
  const zip = new JSZip();
  await Promise.all(
    images.map(async (url, i) => {
      const blob = await fetch(url).then((r) => r.blob());
      zip.file(`slide-${i + 1}.png`, blob);
    })
  );
  saveAs(await zip.generateAsync({ type: "blob" }), "carovii-carousel.zip");
};
