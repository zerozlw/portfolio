"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageLightboxProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export function ImageLightbox({
  src,
  alt,
  width = 1200,
  height = 675,
  className,
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "cursor-pointer rounded-lg border border-border transition-opacity hover:opacity-90",
          className
        )}
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div
          className="fixed inset- z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            className="max-h-[90vh] max-w-full rounded-lg object-contain"
          />
          <button
            className="absolute right-6 top-6 text-white/80 transition-colors hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
