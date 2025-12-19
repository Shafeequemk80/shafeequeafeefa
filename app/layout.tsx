import "./globals.css";
import type { Metadata } from "next";
import {
  Cinzel_Decorative,
  Great_Vibes,
  Montserrat,
  Amiri,
} from "next/font/google";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-montserrat",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-amiri",
});

export const metadata: Metadata = {
  title: "The Union of Two Souls - Wedding Invitation",
  description: "Shafeeque & Afeefa's Wedding Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${greatVibes.variable} ${montserrat.variable} ${amiri.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
