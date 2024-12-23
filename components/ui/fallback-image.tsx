'use client'

import { useState } from 'react'

interface FallbackImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string
}

export function FallbackImage({ 
  src, 
  alt, 
  fallbackSrc = '/placeholder.png',
  className,
  ...props 
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(fallbackSrc)}
    />
  )
} 