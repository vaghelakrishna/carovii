export type CarouselFormat = "portrait" | "square";

const INSTAGRAM: Record<CarouselFormat, { width: number; height: number }> = {
  portrait: { width: 1080, height: 1350 },
  square: { width: 1080, height: 1080 },
};

export const splitImage = (file: File, slides: number, format: CarouselFormat): Promise<string[]> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onerror = reject;
    img.onload = () => {
      const { width: tw, height: th } = INSTAGRAM[format];
      const totalWidth = tw * slides;

      const canvas = document.createElement("canvas");
      canvas.width = totalWidth;
      canvas.height = th;

      const ctx = canvas.getContext("2d");
      if (!ctx) { URL.revokeObjectURL(url); reject(new Error("Canvas not supported")); return; }

      const ir = img.width / img.height;
      const cr = totalWidth / th;
      const [dw, dh, ox, oy] = ir > cr
        ? [th * ir, th, -(th * ir - totalWidth) / 2, 0]
        : [totalWidth, totalWidth / ir, 0, -(totalWidth / ir - th) / 2];

      ctx.drawImage(img, ox, oy, dw, dh);
      URL.revokeObjectURL(url);

      const slices: string[] = [];
      for (let i = 0; i < slides; i++) {
        const sc = document.createElement("canvas");
        sc.width = tw;
        sc.height = th;
        const sctx = sc.getContext("2d");
        if (!sctx) continue;
        sctx.drawImage(canvas, i * tw, 0, tw, th, 0, 0, tw, th);
        slices.push(sc.toDataURL("image/png", 1));
      }

      resolve(slices);
    };

    img.src = url;
  });
