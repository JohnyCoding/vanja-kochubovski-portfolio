import type { Metadata } from "next";
import { Play, Press_Start_2P, Orbitron } from "next/font/google";
import "./globals.css";

const play = Play({
  weight: ["400", "700"],
  variable: "--font-play",
  subsets: ["latin"],
});

const pressStart = Press_Start_2P({
  weight: "400",
  variable: "--font-press-start-2p",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vanja Kochubovski",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${play.variable} ${pressStart.variable} ${orbitron.variable} max-w-[100%] overflow-x-hidden font-orbitron antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
