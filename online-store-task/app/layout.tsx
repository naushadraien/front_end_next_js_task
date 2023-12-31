import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ModalProvider } from "@/lib/providers/modal-provider";
import QueryProvider from "@/lib/providers/react-query-provider";
import ReduxProvider from "@/lib/providers/redux-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Explore a Variety of Quality Products at OnlineStore | Best Deals",
  description:
    "Discover a diverse range of high-quality products at competitive prices on OnlineStore. Find what you need and enjoy great deals!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <ReduxProvider>
            <Navbar />
            <ModalProvider />
            <ToastContainer position="top-right" hideProgressBar />
            {children}
            <Footer />
          </ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
