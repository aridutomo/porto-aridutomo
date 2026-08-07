import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ari Dwi Utomo | Full Stack & Mobile Developer",
  description:
    "Portfolio of Ari Dwi Utomo - Experienced Full Stack Developer specializing in ASP.NET, Golang, NextJS, Flutter, and modern web & mobile technologies.",
  keywords: [
    "Full Stack Developer",
    "Mobile Developer",
    "Flutter Developer",
    "ASP.NET",
    "Golang",
    "NextJS",
    "Flutter",
    "Dart",
    "Web Developer",
    "Indonesia",
  ],
  authors: [{ name: "Ari Dwi Utomo" }],
  alternates: {
    canonical: "https://aridutomo.anaki.id",
    types: {
      "application/rss+xml": "https://aridutomo.anaki.id/rss.xml",
    },
  },
  openGraph: {
    title: "Ari Dwi Utomo | Full Stack & Mobile Developer",
    description:
      "Experienced Full Stack Developer specializing in ASP.NET, Golang, NextJS, Flutter, and modern web & mobile technologies.",
    type: "website",
    url: "https://aridutomo.anaki.id",
  },
};

// Runs before paint to avoid a theme flash (FOUC). Default is light.
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=document.documentElement;if(s==='dark'){d.classList.add('dark')}else{d.classList.remove('dark')}}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <GoogleAnalytics />
      <body
        className={`${geistSans.variable} ${jetbrainsMono.variable} bg-background text-foreground font-sans antialiased overflow-x-hidden`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
