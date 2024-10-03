import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "IDEAVAULT",
  description: "A collaboration tool for all.",
  
  icons: [
    {
      rel: 'icon',
      url: '/images/logo_dark.png',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      url: '/images/brainstorming.png',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <Header/>
        <div>{/* SIDEBAR */}

        <div>{children}</div>
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
