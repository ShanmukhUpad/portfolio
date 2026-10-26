import type { Metadata } from "next";
import Script from "next/script";
import { Archivo_Narrow, Public_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RevealObserver } from "@/components/ui/RevealObserver";

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Shanmukh Upadhyayula · CS + GIS",
  description:
    "CS and GIS student at UIUC building software for urban planning, from computer vision on aerial imagery to spatial analysis of city data.",
  keywords: [
    "Shanmukh Upadhyayula",
    "CS",
    "GIS",
    "UIUC",
    "AR/VR",
    "Urban Planning",
    "HCI",
    "Software Engineer",
  ],
  authors: [{ name: "Shanmukh Upadhyayula" }],
  openGraph: {
    title: "Shanmukh Upadhyayula · CS + GIS",
    description:
      "CS and GIS student at UIUC building software for urban planning, from computer vision on aerial imagery to spatial analysis of city data.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanmukh Upadhyayula · CS + GIS",
    description:
      "CS and GIS student at UIUC building software for urban planning, from computer vision on aerial imagery to spatial analysis of city data.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivoNarrow.variable} ${publicSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* Gates the hidden starting states of the motion layer: no script, no hiding */}
        <Script id="js-flag" strategy="beforeInteractive">
          {`document.documentElement.classList.add('js')`}
        </Script>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
