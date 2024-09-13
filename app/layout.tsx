import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

import "./globals.css";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LuxeAura",
  description: "LuxeAura Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
