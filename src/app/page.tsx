"use client";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton uploadPreset="cqyqeg2v" 
      // onSuccess={}
      />
      <CldImage
        width="960"
        height="600"
        src="wfbrdxpxo9pyqfsu4pt7"
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  );
}
