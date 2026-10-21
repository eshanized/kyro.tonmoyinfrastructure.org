"use client";

import { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";

interface OwnerAvatarProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  size?: number;
  className?: string;
}

export function OwnerAvatar({
  src,
  fallbackSrc = "/assets/owner-github.jpg",
  alt,
  size = 112,
  className = "",
}: OwnerAvatarProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!hasError ? (
        <Image
          src={imgSrc}
          alt={alt}
          width={size}
          height={size}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={() => {
            if (imgSrc !== fallbackSrc) {
              setImgSrc(fallbackSrc);
            } else {
              setHasError(true);
            }
          }}
          priority
          unoptimized
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-surface text-emerald-400">
          <User className="h-10 w-10" />
        </div>
      )}
    </div>
  );
}
