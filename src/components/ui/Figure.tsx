'use client'

import { useLightbox } from './ImageLightbox'

export default function Figure({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const { openLightbox } = useLightbox()
  return (
    <figure className="m-0">
      <img
        src={src}
        alt={alt}
        onClick={() => openLightbox(src, alt)}
        className="w-full h-48 object-cover rounded-xl cursor-pointer"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-[11px] text-muted/50">{caption}</figcaption>
      )}
    </figure>
  )
}
