"use client";
import Image from "next/image";
import { useState } from "react";

interface ProductImageProps {
  image: string;
  title: string;
  fill?: boolean;
}

function ProductImage({ image, title, fill }: ProductImageProps) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: fill ? "100%" : "0",
        }}
      >
        <Image
          src={image}
          alt={title}
          layout={fill ? "fill" : "responsive"}
          objectFit="contain"
          loading="eager"
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </>
  );
}

export default ProductImage;
