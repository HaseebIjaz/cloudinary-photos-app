"use client";
import { CldUploadButton, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function Home() {
  const [imageId, setImageId] = useState('khovasd4v5k5nm7rpcsu');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton uploadPreset="cqyqeg2v" 
      onSuccess={(results,widget) => {
        // console.log({results,widget})
        setImageId((results.info as CloudinaryUploadWidgetInfo).public_id);
      }}
      />
      {imageId && <CldImage
        width="960"
        height="600"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
        cartoonify
        tint="70:blue:purple"
      />}
    </main>
  );
}
