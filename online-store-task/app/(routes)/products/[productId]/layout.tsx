import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Name - Buy Online at OnlineStore | Best Price & Quality",
  description:
    "Explore product details, reviews, and offers. Purchase the best quality product at the best price from OnlineStore.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
