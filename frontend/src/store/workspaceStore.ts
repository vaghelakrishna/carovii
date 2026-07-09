import { create } from "zustand";

export type FileType = "image" | "video" | null;
export type CarouselFormat = "portrait" | "square";

interface WorkspaceStore {
  file: File | null;
  preview: string | null;
  fileType: FileType;

  slides: number;
  format: CarouselFormat;

  slices: string[];

  processing: boolean;

  setFile: (file: File | null) => void;
  setPreview: (preview: string | null) => void;
  setFileType: (type: FileType) => void;

  setSlides: (slides: number) => void;
  setFormat: (format: CarouselFormat) => void;

  setSlices: (slices: string[]) => void;

  setProcessing: (processing: boolean) => void;

  reset: () => void;
}

export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
  file: null,
  preview: null,
  fileType: null,

  slides: 5,
  format: "portrait",

  slices: [],

  processing: false,

  setFile: (file) => set({ file }),

  setPreview: (preview) => set({ preview }),

  setFileType: (fileType) => set({ fileType }),

  setSlides: (slides) => set({ slides }),

  setFormat: (format) => set({ format }),

  setSlices: (slices) => set({ slices }),

  setProcessing: (processing) => set({ processing }),

  reset: () =>
    set({
      file: null,
      preview: null,
      fileType: null,

      slides: 5,
      format: "portrait",

      slices: [],

      processing: false,
    }),
}));