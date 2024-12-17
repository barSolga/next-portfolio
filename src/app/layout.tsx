import Footer from "@/components/Footer";
import "./globals.scss";
import NavBar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700", "900"]
});

export const metadata: Metadata = {
  title: "bsolga.dev - Portfolio",
  description: "Software Developer with 5 years of expirience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html >
  );
}
