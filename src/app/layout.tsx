import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import toast, { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "BIT24HR",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-maincolor">
      <body className="font-poppinsRegular bg-maincolor">
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
