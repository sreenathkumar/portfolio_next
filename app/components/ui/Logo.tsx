'use client'

import Image from "next/image"

function Logo({ url, width, height, alt }: { url: string, width: number, height: number, alt: string }) {
  return (
    <Image className="h-14"
      src={url}
      alt={alt}
      width={width}
      height={height}
    />
  )
}

export default Logo