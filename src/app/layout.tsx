import Footer from "@/client-components/main-components/Footer";
import Navbar from "@/client-components/main-components/Navbar";
import Image from "next/image";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chronicles of Valor",
  description:
    "Explore historical timelines, famous generals, and significant events in history.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/vietnamese_generals/lam_son_vs_minh_02.jpg"
          as="image"
          fetchPriority="high"
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col relative">
        <div className="fixed inset-0 z-[-1]">
          <Image
            src="/other_images/japan-cities.jpg"
            alt="Background"
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
            fetchPriority="low"
          />
        </div>
        <Navbar />
        <main className="flex-grow mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
