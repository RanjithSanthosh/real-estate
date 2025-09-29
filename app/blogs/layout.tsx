'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";




// ✅ 1. Import your footer components
import DetailedFooter from '@/components/aboutPage/DetailedFooter'; 
import SiteMapFooter from '@/components/homePage/SiteMapFooter';
import BlogHeroSection from '@/components/blog/blogHeroSection';

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Add local state and handlers for search functionality
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };
  const handleSearchClick = () => {
    // You can add scroll or other logic here if needed
  };

  return (
    <>
      <BlogHeroSection
        onSearchClick={handleSearchClick}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      {children}
      {/* ✅ 2. Place your footer components here */}
      <SiteMapFooter />
      <DetailedFooter />
    </>
  );
}