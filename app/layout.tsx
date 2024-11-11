//1st level layout wrapping around clerkprovider
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider, useUser } from "@clerk/nextjs";
//import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";


//defining fonts
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
 // const { user } = useUser(); // Get the authenticated user
  //const router = useRouter();
  //const isLandingPage = router.pathname === '/';
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <Header/>
      
          
        
        <div>{children}</div>
        {/* we use flex-1 saying to use up all the space leaving starting space for sidebar */}
       
      </body>
    </html>
    </ClerkProvider>
  );
}
