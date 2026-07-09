export type CarouselFormat = "portrait" | "square";

const INSTAGRAM = {
  portrait: {
    width: 1080,
    height: 1350,
  },

  square: {
    width: 1080,
    height: 1080,
  },
};

export const splitImage = (
  file: File,
  slides: number,
  format: CarouselFormat
): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      const target = INSTAGRAM[format];

      const totalWidth = target.width * slides;
      const totalHeight = target.height;

      const canvas = document.createElement("canvas");

      canvas.width = totalWidth;
      canvas.height = totalHeight;

      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject("Canvas not supported");
        return;
      }

      const imageRatio = img.width / img.height;
      const canvasRatio = totalWidth / totalHeight;

      let drawWidth = totalWidth;
      let drawHeight = totalHeight;

      let offsetX = 0;
      let offsetY = 0;

      if (imageRatio > canvasRatio) {
        drawHeight = totalHeight;
        drawWidth = drawHeight * imageRatio;

        offsetX = -(drawWidth - totalWidth) / 2;
      } else {
        drawWidth = totalWidth;
        drawHeight = drawWidth / imageRatio;

        offsetY = -(drawHeight - totalHeight) / 2;
      }

      ctx.drawImage(
        img,
        offsetX,
        offsetY,
        drawWidth,
        drawHeight
      );

      const slices: string[] = [];

      for (let i = 0; i < slides; i++) {
        const sliceCanvas = document.createElement("canvas");

        sliceCanvas.width = target.width;
        sliceCanvas.height = target.height;

        const sliceCtx = sliceCanvas.getContext("2d");

        if (!sliceCtx) continue;

        sliceCtx.drawImage(
          canvas,
          i * target.width,
          0,
          target.width,
          target.height,
          0,
          0,
          target.width,
          target.height
        );

        slices.push(
          sliceCanvas.toDataURL("image/png", 1)
        );
      }

      resolve(slices);
    };

    img.onerror = reject;

    img.src = URL.createObjectURL(file);
  });
};