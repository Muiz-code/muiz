import type { Metadata } from "next";
// import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTrasition from "@/components/PageTrasition";
import StairsTransition from "@/components/StairsTransition";

export const metadata: Metadata = {
  title: "Muiz Owolabi | Frontend Developer",
  description:
    "This is Muiz Owolabi's portfolio website, showcasing his work and skills as a frontend developer.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased px-2 md:px-[180px]`}>
        <StairsTransition />
        <Header />
        <PageTrasition>{children}</PageTrasition>
      </body>
    </html>
  );
}
