import React from 'react'
import Careers from '@/components/careers/careersHeroSection';
import JobResults from '@/components/careers/JobResults';
import SiteMapFooter from "@/components/aboutPage/SiteMapFooter";
import DetailedFooter from "@/components/aboutPage/DetailedFooter";

const page = () => {
  return (
    <div>
      <Careers/>
      <JobResults/>
       <footer>
              <SiteMapFooter />
              <DetailedFooter />
            </footer>
    </div>
  )
}

export default page
