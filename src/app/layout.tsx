import Head from "next/head";
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
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Chronicles of Valor" />
        <meta
          property="og:description"
          content="Explore historical timelines, famous generals, and significant events in history."
        />
        <meta property="og:image" content="/other_images/japan-cities.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:site_name" content="Chronicles of Valor" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chronicles of Valor" />
        <meta
          name="twitter:description"
          content="Explore historical timelines, famous generals, and significant events in history."
        />
        <meta name="twitter:image" content="/other_images/japan-cities.jpg" />
      </Head>
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
