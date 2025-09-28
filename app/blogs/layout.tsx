import type { Metadata } from "next";
import { Inter } from "next/font/google";


// ✅ 1. Import your footer components
import DetailedFooter from '@/components/aboutPage/DetailedFooter'; 
import SiteMapFooter from '@/components/homePage/SiteMapFooter';
import BlogHeroSection from '@/components/blog/blogHeroSection';

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
   
        <BlogHeroSection />
        {children}
        
        {/* ✅ 2. Place your footer components here */}
        <SiteMapFooter />
        <DetailedFooter />
   </>


      
      
    
  );
}