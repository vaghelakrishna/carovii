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
  const isVideo = image.type.startsWith("video/");

  let media: HTMLImageElement | HTMLVideoElement;

  let mediaWidth = 0;
  let mediaHeight = 0;

  // -----------------------------
  // Load Image / Video
  // -----------------------------

  if (isVideo) {
    const video = document.createElement("video");

    video.src = URL.createObjectURL(image);
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.crossOrigin = "anonymous";

    await new Promise<void>((resolve, reject) => {
      video.onloadedmetadata = () => resolve();
      video.onerror = () =>
        reject(new Error("Failed to load video"));
    });

    await video.play();

    media = video;
    mediaWidth = video.videoWidth;
    mediaHeight = video.videoHeight;
  } else {
    const img = new Image();

    img.src = URL.createObjectURL(image);

    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () =>
        reject(new Error("Failed to load image"));
    });

    media = img;
    mediaWidth = img.naturalWidth;
    mediaHeight = img.naturalHeight;
  }

  // -----------------------------
  // Detect Carousel Slides
  // -----------------------------

  const slideWidth = mediaHeight * (4 / 5);

  const detectedSlides = Math.max(
    1,
    Math.round(mediaWidth / slideWidth)
  );

  // -----------------------------
  // Canvas
  // -----------------------------

  const canvas = document.createElement("canvas");

  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("Canvas not supported");
  }

  const ctx: CanvasRenderingContext2D = context;

  let viewportWidth = 1080;
  let viewportHeight = 1350;

  if (direction === "horizontal") {
    viewportHeight = mediaHeight;
    viewportWidth = Math.round(
      mediaWidth / detectedSlides
    );
  } else {
    viewportWidth = mediaWidth;
    viewportHeight = Math.round(
      mediaHeight / detectedSlides
    );
  }

  canvas.width = viewportWidth;
  canvas.height = viewportHeight;

  const maxScrollX = Math.max(
    0,
    mediaWidth - viewportWidth
  );

  const maxScrollY = Math.max(
    0,
    mediaHeight - viewportHeight
  );

  // -----------------------------
  // Recorder
  // -----------------------------

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
      stream.getTracks().forEach((track) => track.stop());

      if (isVideo) {
        (media as HTMLVideoElement).pause();
      }

      const blob = new Blob(chunks, {
        type: "video/webm",
      });

      URL.revokeObjectURL((media as any).src);

      resolve(URL.createObjectURL(blob));
    };

    recorder.onerror = (e) => reject(e);

    recorder.start(100);

    function render(now: number) {
      const elapsed = (now - start) / 1000;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      // Sync uploaded video playback
      if (isVideo) {
        const video = media as HTMLVideoElement;

        if (video.duration > 0) {
          video.currentTime =
            progress * video.duration;
        }
      }

      ctx.clearRect(
        0,
        0,
        viewportWidth,
        viewportHeight
      );

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      if (direction === "horizontal") {
        const sourceX = Math.round(
          progress * maxScrollX
        );

        ctx.drawImage(
          media,
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
        const sourceY = Math.round(
          progress * maxScrollY
        );

        ctx.drawImage(
          media,
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