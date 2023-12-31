import { ProductType } from "@/types";
import { MetadataRoute } from "next";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return [
    ...data.map((slug: ProductType) => ({
      url: `https://fakestoreapi.com/products/${slug.id}`,
      lastModified: new Date(),
    })),
  ];
}
