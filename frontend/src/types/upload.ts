export type UploadType = "image" | "video";

export interface UploadedFile {
  file: File | null;
  type: UploadType | null;
  preview: string | null;
}