import { useState } from "react";
import type { UploadedFile } from "../types/upload";

export const useUpload = () => {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile>({
    file: null,
    type: null,
    preview: null,
  });

  return {
    uploadedFile,
    setUploadedFile,
  };
};