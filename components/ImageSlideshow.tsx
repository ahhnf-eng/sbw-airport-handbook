"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

type ImageSlideshowProps = {
  images: string[]
  interval?: number
  className?: string
}

export default function ImageSlideshow({
  images,
  interval = 5000,
  className = "",
}: ImageSlideshowProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className={`relative h-full w-full ${className}`}>
      {/* IMAGES */}
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Slideshow image"
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* DOT INDICATOR — CENTER OF IMAGE */}
      <div className="pointer-events-auto absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-3 w-3 rounded-full border border-white transition-all ${
              i === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
