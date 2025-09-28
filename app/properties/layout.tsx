import type { Metadata } from "next";
import { Inter } from "next/font/google";


// ✅ 1. Import your footer components
import DetailedFooter from '@/components/aboutPage/DetailedFooter'; 
import SiteMapFooter from '@/components/homePage/SiteMapFooter';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Konnect",
  description: "Your dream home, connected.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<>

{children}

{/* ✅ 2. Place your footer components here */}
<SiteMapFooter />
<DetailedFooter />
</>
   
  );
}