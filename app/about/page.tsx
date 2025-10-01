'use client'

// app/about/page.tsx
import AboutHeroSection from "@/components/aboutPage/AboutHeroSection";
import TeamQuoteSection from "@/components/aboutPage/TeamQuoteSection";
import VisionMissionSection from "@/components/aboutPage/VisionMissionSection";
import MessageFromCEOSection from "@/components/aboutPage/MessageFromCEOSection";
import TeamSection from "@/components/aboutPage/TeamSection";
import SiteMapFooter from "@/components/aboutPage/SiteMapFooter";
import DetailedFooter from "@/components/aboutPage/DetailedFooter";
import React from "react";

import GenericHero from "@/components/shared/GenericHero";
import AboutHERO from "@/public/assets/aboutPage/AboutHERO.png"; // Your specific background image


export default function AboutUsPage() {
  // Add local state and handlers for search functionality
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };
  const handleSearchClick = () => {
    // You can add scroll or other logic here if needed
  };

  return (
    <div className="overflow-hidden">
      {/* <AboutHeroSection
        onSearchClick={handleSearchClick}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      /> */}

         <GenericHero 
        title="About Us" 
        subtitle="Know Who We Are" 
        backgroundImage={AboutHERO}
        activePage="About"
      />

      <main>
        <TeamQuoteSection />
        <VisionMissionSection />
        <MessageFromCEOSection />
        <TeamSection />
      </main>

      <footer>
        <SiteMapFooter />
        <DetailedFooter />
      </footer>
    </div>
  );
}