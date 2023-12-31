import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your OnlineStore Cart: Convenient Shopping & Easy Checkout",
  description:
    "Review and manage items in your OnlineStore cart. Enjoy seamless shopping and quick checkout for your favorite products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
