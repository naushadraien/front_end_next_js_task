import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/lib/providers/react-query-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ReduxProvider from "@/lib/providers/redux-provider";
import { ModalProvider } from "@/lib/providers/modal-provider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OnlineStore",
  description: "OnlineStore",
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
