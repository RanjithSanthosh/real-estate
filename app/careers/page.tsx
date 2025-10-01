'use client';
import React from 'react'
import AboutHeroSection from '@/components/careers/careersHeroSection';
import JobResults from '@/components/careers/JobResults';
import SiteMapFooter from "@/components/aboutPage/SiteMapFooter";
import DetailedFooter from "@/components/aboutPage/DetailedFooter";

import GenericHero from "@/components/shared/GenericHero";
import AboutHERO from "@/public/assets/aboutPage/AboutHERO.png"; // Your specific background image


const page = () => {
  // Add local state and handlers for search functionality
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };
  const handleSearchClick = () => {
    // You can add scroll or other logic here if needed
  };

  return (
    <div>
      {/* <AboutHeroSection
        onSearchClick={handleSearchClick}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      /> */}

 <GenericHero 
        title="Careers" 
        subtitle="Come grow with us" 
        backgroundImage={AboutHERO}
        activePage="Careers"
      />


      <JobResults/>
      <footer>
        <SiteMapFooter />
        <DetailedFooter />
      </footer>
    </div>
  )
}

export default page
