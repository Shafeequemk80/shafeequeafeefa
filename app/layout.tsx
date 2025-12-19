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
  title: "Shafeeque & Afeefa - Wedding Invitation",
  description: "Shafeeque & Afeefa's Wedding Invitation",

  icons: {
    icon: "/favicon.webp",
    apple: "/favicon.webp",
  },

  openGraph: {
    title: "Shafeeque & Afeefa - Wedding Invitation",
    description:
      "Join us in celebrating the wedding of Shafeeque & Afeefa",
    images: [
      {
        url: "/home.png",
        width: 1200,
        height: 630,
        alt: "Shafeeque & Afeefa Wedding Invitation",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shafeeque & Afeefa - Wedding Invitation",
    description:
      "Join us in celebrating the wedding of Shafeeque & Afeefa",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${greatVibes.variable} ${montserrat.variable} ${amiri.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
