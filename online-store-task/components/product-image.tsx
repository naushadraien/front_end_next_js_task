"use client";
import Image from "next/image";
import { useState } from "react";

interface ProductImageProps {
  image: string;
  title: string;
  fill?: boolean;
}

function ProductImage({ image, title, fill }: ProductImageProps) {
  // const [loading, setLoading] = useState(true);

  return (
    <>
      {fill ? (
        <Image
          src={image}
          alt={title}
          fill
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 `}
          // onLoadingComplete={() => setLoading(false)}
        />
      ) : (
        <Image
          src={image}
          alt={title}
          width={400}
          height={1000}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75`}
          // onLoadingComplete={() => setLoading(false)}
        />
      )}
    </>
  );
}

export default ProductImage;
