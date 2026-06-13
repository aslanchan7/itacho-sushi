import type { Metadata } from "next";
import { Gabarito, Geist, Geist_Mono, Syne, Gothic_A1 } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';

const gabarito = Gabarito({ subsets: ['latin'], variable: '--font-gabarito' })

const syne = Syne({ subsets: ['latin'], variable: '--font-syne' })

const centuryGothic = localFont({
  src: [
    { path: '../public/fonts/centurygothic.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/centurygothic_bold.ttf', weight: '700', style: 'normal' }
  ],
  variable: '--font-century-gothic'
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Itacho Sushi",
  description: "Premium All You Can Eat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={
        `${geistSans.variable} 
        ${geistMono.variable} 
        ${gabarito.variable} 
        ${syne.variable} 
        ${centuryGothic.variable} 
        h-full antialiased`
      }
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
