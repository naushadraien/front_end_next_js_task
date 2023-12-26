"use client";
import { Tab } from "@headlessui/react";
import Image from "next/image";
interface GalleryProps {
  image: string;
}
const Gallery: React.FC<GalleryProps> = ({ image }) => {
  return (
    <Tab.Group as="div" className="flex">
      <Tab.Panels className="aspect-square w-full">
        <div className="relative aspect-square sm:rounded-lg overflow-hidden">
          <Image
            src={image}
            fill
            alt="Product Image"
            className="object-contain object-center"
          />
        </div>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
