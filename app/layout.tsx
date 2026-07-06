import type { Metadata } from "next";
import {
  Playfair_Display,
  Manrope,
  Caveat,
} from "next/font/google";

import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-title",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-text",
});

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-letter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "С Днём рождения, Машуля ❤️",
  description: "Подарок для Машули",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${playfair.variable} ${manrope.variable} ${caveat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}