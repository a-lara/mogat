import type { Metadata } from "next";
import { Poppins, Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Juan José Mogat – JJMogat – Belkitsch",
  description: "Docente universitario, investigador interdisciplinar y artista plástico y visual multidisciplinar. Obra que abarca desde la producción literaria, la ilustración y la fotografía hasta la escultura, la instalación, el uso de nuevas tecnologías y la pintura.",
  keywords: ["arte", "artista", "pintura", "escultura", "instalación", "belkitsch", "arte contemporáneo", "Málaga", "Sevilla", "Berlín"],
  authors: [{ name: "Juan José Mogat" }],
  openGraph: {
    title: "Juan José Mogat – JJMogat – Belkitsch",
    description: "Artista plástico y visual multidisciplinar",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${poppins.variable} ${roboto.variable} ${playfair.variable} font-poppins antialiased bg-black text-white`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
