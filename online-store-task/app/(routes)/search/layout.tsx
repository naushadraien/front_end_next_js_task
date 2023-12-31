import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search the Best Deals at OnlineStore | Find Products Easily",
  description:
    "Discover a wide range of products and amazing deals on the OnlineStore search page. Search effortlessly and find exactly what you need.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
