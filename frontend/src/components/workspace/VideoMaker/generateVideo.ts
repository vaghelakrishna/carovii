// src/utils/generateVideo.ts

export interface GenerateVideoOptions {
  image: File;
  direction: "horizontal" | "vertical";
  duration: number;
}

export async function generateVideo({
  image,
  direction,
  duration,
}: GenerateVideoOptions): Promise<string> {
  // ---------- Load Image ----------

  const img = new Image();

  img.src = URL.createObjectURL(image);

  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => reject(new Error("Failed to load image"));
  });


  // Auto detect number of carousel slides (Instagram portrait 4:5)
  const slideWidth = img.naturalHeight * (4 / 5);

  const detectedSlides = Math.max(
    1,
    Math.round(img.naturalWidth / slideWidth)
  );
  // ---------- Canvas ----------

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;

  if (!ctx) {
    throw new Error("Canvas not supported");
  }

  // Instagram single slide viewport

  let viewportWidth = 1080;
  let viewportHeight = 1350;

  if (direction === "horizontal") {
    viewportHeight = img.naturalHeight;
    viewportWidth = Math.round(img.naturalWidth / detectedSlides);
  } else {
    viewportWidth = img.naturalWidth;
    viewportHeight = Math.round(img.naturalHeight / detectedSlides);
  }

  canvas.width = viewportWidth;
  canvas.height = viewportHeight;

  // ---------- Scroll Limits ----------

  const maxScrollX = Math.max(
    0,
    img.naturalWidth - viewportWidth
  );

  const maxScrollY = Math.max(
    0,
    img.naturalHeight - viewportHeight
  );

  // ---------- Recorder ----------
  const FPS = 60;

  const stream = canvas.captureStream(FPS);

  const mimeType = MediaRecorder.isTypeSupported(
    "video/webm;codecs=vp9"
  )
    ? "video/webm;codecs=vp9"
    : MediaRecorder.isTypeSupported(
      "video/webm;codecs=vp8"
    )
      ? "video/webm;codecs=vp8"
      : "video/webm";

  const recorder = new MediaRecorder(stream, {
    mimeType,
  });

  const chunks: Blob[] = [];

  recorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      chunks.push(event.data);
    }
  };

  const start = performance.now();

  return new Promise((resolve, reject) => {

    recorder.onstop = () => {
      stream.getTracks().forEach((t) => t.stop());
      const blob = new Blob(chunks, { type: "video/webm" });
      URL.revokeObjectURL(img.src);
      resolve(URL.createObjectURL(blob));
    };

    recorder.onerror = (e) => reject(e);

    recorder.start(100);

    function render(now: number) {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      ctx.clearRect(0, 0, viewportWidth, viewportHeight);

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      if (direction === "horizontal") {
        const sourceX = Math.round(progress * maxScrollX);
        ctx.drawImage(img, sourceX, 0, viewportWidth, viewportHeight, 0, 0, viewportWidth, viewportHeight);
      } else {
        const sourceY = Math.round(progress * maxScrollY);
        ctx.drawImage(img, 0, sourceY, viewportWidth, viewportHeight, 0, 0, viewportWidth, viewportHeight);
      }

      if (progress < 1) {
        requestAnimationFrame(render);
      } else {
        recorder.stop();
      }
    }

    requestAnimationFrame(render);
  });
}


