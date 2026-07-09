import JSZip from "jszip";
import { saveAs } from "file-saver";

export const downloadZip = async (images: string[]) => {
  const zip = new JSZip();

  for (let i = 0; i < images.length; i++) {
    const response = await fetch(images[i]);
    const blob = await response.blob();

    zip.file(`slide-${i + 1}.png`, blob);
  }

  const content = await zip.generateAsync({
    type: "blob",
  });

  saveAs(content, "carovii-carousel.zip");
};

export const downloadSingle = async (
  image: string,
  index: number
) => {
  const response = await fetch(image);

  const blob = await response.blob();

  saveAs(blob, `slide-${index + 1}.png`);
};