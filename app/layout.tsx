import type { Metadata } from "next";
import "@/styles/globals.css";
import localFont from "next/font/local";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// Load the local font (corrected path without the dot)
const exquisiteCorpse = localFont({
  src: [
    {
      path: "../public/fonts/Exquisite Corpse.ttf",
      weight: "500",
    },
  ],
  variable: "--font-exq",
});

const acme = localFont({
  src: "../public/fonts/Acme-Regular.ttf",
  weight: "400",
  variable: "--font-acme",
});
const zombified = localFont({
  src: "../public/fonts/Zombified.ttf",
  weight: "400",
  variable: "--font-zombie",
});

const shlop = localFont({
  src: "../public/fonts/shlop rg.otf",
  weight: "400",
  variable: "--font-shlop",
});
const mickey = localFont({
  src: "../public/fonts/MickeyMousePersonalUseRegular-mLRAG.otf",
  weight: "400",
  variable: "--font-mickey",
});

export const metadata: Metadata = {
  title: "FADE",
  description: "A reset to a new dream",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exquisiteCorpse.variable} ${acme.variable} ${zombified.variable} ${shlop.variable} ${mickey.variable} `}
      >
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
