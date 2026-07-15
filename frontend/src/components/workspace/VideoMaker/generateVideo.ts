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

  recorder.start(100);

  const start = performance.now();

  // ============================================
  // Part 2 starts from here
  // ============================================

  return new Promise((resolve) => {

    recorder.onstop = () => {
      const blob = new Blob(chunks, {
        type: "video/webm",
      });
      URL.revokeObjectURL(img.src);
      resolve(URL.createObjectURL(blob));
    };

    // Rendering Part 2

    function render(now: number) {
      const elapsed = (now - start) / 1000;


      const progress = Math.min(elapsed / duration, 1);
      // const rawProgress = Math.min(elapsed / duration, 1);

      // Ease In Out Cubic
      // const progress =
      //   rawProgress < 0.5
      //     ? 4 * rawProgress * rawProgress * rawProgress
      //     : 1 - Math.pow(-2 * rawProgress + 2, 3) / 2;

      ctx.clearRect(0, 0, viewportWidth, viewportHeight);

      if (direction === "horizontal") {
        // Smooth left → right
        const sourceX = Math.round(progress * maxScrollX);

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        ctx.drawImage(
          img,
          sourceX,
          0,
          viewportWidth,
          viewportHeight,
          0,
          0,
          viewportWidth,
          viewportHeight
        );
      } else {
        // Smooth top → bottom
        const sourceY = Math.round(progress * maxScrollY);

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        ctx.drawImage(
          img,
          0,
          sourceY,
          viewportWidth,
          viewportHeight,
          0,
          0,
          viewportWidth,
          viewportHeight
        );
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


