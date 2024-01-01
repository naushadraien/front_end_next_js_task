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

  const commonClasses = `object-contain duration-700 ease-in-out group-hover:opacity-75 ${
    loading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
  }`;

  return (
    <>
      {fill ? (
        <div style={{ position: "relative", paddingTop: "100%" }}>
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="contain"
            className={commonClasses}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
      ) : (
        <div style={{ width: "400px", height: "1000px", position: "relative" }}>
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="contain"
            className={commonClasses}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
      )}
    </>
  );
}

export default ProductImage;
