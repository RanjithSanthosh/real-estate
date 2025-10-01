// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { 
//   FaPhoneAlt, FaChevronDown, FaSearch, FaUser, FaShoppingBag, 
//   FaEnvelope, FaWhatsapp, FaComments
// } from 'react-icons/fa';
// // import eteImage from "./assets/ETEproperty.png";
// // A simple SVG placeholder for the logo
// const HomeKonnectLogo = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M50 0L0 25V75L50 100L100 75V25L50 0ZM85 66.25L50 84.375L15 66.25V33.75L50 15.625L85 33.75V66.25Z" fill="currentColor"/>
//   </svg>
// );

// const ContactInfoCard: React.FC<{ icon: React.ReactNode; line1: string; line2?: string }> = ({ icon, line1, line2 }) => (
//     <div className="bg-gray-50/80 rounded-lg p-6 flex flex-col items-center justify-center text-center h-48 border border-gray-200/50 hover:shadow-xl transition-shadow duration-300">
//         <div className="text-yellow-500">{icon}</div>
//         <p className="mt-4 font-semibold text-gray-700">{line1}</p>
//         {line2 && <p className="text-sm text-gray-500">{line2}</p>}
//     </div>
// );

// export default function ContactPage() {
//     return (
//         <main>
//             {/* Header & Hero Section */}
//             <div className="relative">
//                 <header className="absolute top-0 left-0 right-0 z-20 text-white">
//                     <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//                         <div className="flex items-center gap-3">
//                             <HomeKonnectLogo className="h-12 w-12"/>
//                              <div>
//                                 <h1 className="text-xl font-bold tracking-wider">HOME KONNECT</h1>
//                                 <p className="text-xs opacity-80">Connecting to your dream home</p>
//                             </div>
//                         </div>
//                         <nav className="hidden lg:flex items-center space-x-8 text-sm">
//                             <a href="#" className="flex items-center py-2">All Cities <FaChevronDown className="w-4 h-4 ml-1" /></a>
//                             <Link href="/home" className="py-2 hover:text-gray-300">Home</Link>
//                             <Link href="/about" className="py-2 hover:text-gray-300">About</Link>
//                             {/* Example of active state for the current page */}
//                             <Link href="/contact" className="py-2 font-semibold border-b-2 border-white">Contact Us</Link>
//                         </nav>
//                         <div className="flex items-center space-x-4">
//                             <a href="#" className="hidden md:flex items-center border border-white/50 py-2 px-4 rounded-full hover:bg-white/10 transition text-sm">
//                                 <FaPhoneAlt className="w-4 h-4 mr-2"/> Call Us 
//                                 <Image src="https://flagcdn.com/in.svg" alt="India Flag" width={20} height={20} className="w-5 h-5 ml-2 rounded-full object-cover"/>
//                             </a>
//                             <div className="flex items-center space-x-4">
//                                 <a href="#"><FaShoppingBag className="w-6 h-6"/></a>
//                                 <a href="#"><FaSearch className="w-6 h-6"/></a>
//                                 <a href="#"><FaUser className="w-6 h-6"/></a>
//                             </div>
//                         </div>
//                     </div>
//                 </header>
                
//                 <div className="relative h-[450px] text-white overflow-hidden rounded-b-3xl">
//                     <Image src="https://picsum.photos/1920/500?image=1011" alt="People connecting" layout="fill" objectFit="cover" className="absolute inset-0"/>
//                     <div className="absolute inset-0 bg-black/50"></div>
//                     <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
//                         <h2 className="text-5xl font-bold">Contact Us</h2>
//                         <p className="text-lg mt-2">Let us connect</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Contact Info Section */}
//             <section className="py-20">
//                 <div className="container mx-auto px-6">
//                     <div className="text-center mb-12">
//                          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
//                     </div>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//                         <ContactInfoCard icon={<FaEnvelope className="w-10 h-10"/>} line1="enquiry@homekonnect.com"/>
//                         <ContactInfoCard icon={<FaPhoneAlt className="w-10 h-10"/>} line1="+91 9940366555"/>
//                         <ContactInfoCard icon={<FaWhatsapp className="w-10 h-10"/>} line1="Click to WhatsApp"/>
//                         <ContactInfoCard icon={<FaComments className="w-10 h-10"/>} line1="Chat With Us anytime"/>
//                     </div>
//                 </div>
//             </section>
            
//             {/* Corporate Office & Form */}
//             <section className="pb-20">
//                  <div className="container mx-auto px-6">
//                     <div className="text-center mb-12">
//                          <h2 className="text-3xl font-bold text-gray-800">Corporate Office</h2>
//                     </div>
//                     <div className="grid lg:grid-cols-2 gap-12 items-start">
//                         <div>
//                             {/* <Image src={eteImage} width={600} height={600} className="w-full h-auto rounded-lg shadow-md"/> */}
//                         </div>
//                         <form className="space-y-6">
//                             <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"/>
//                             <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"/>
//                             <div className="flex">
//                                 <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-md">91 +</span>
//                                 <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500"/>
//                             </div>
//                             <div className="grid sm:grid-cols-2 gap-6">
//                                 <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white appearance-none" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}>
//                                     <option>Select Reason to Contact</option>
//                                 </select>
//                                  <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white appearance-none" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}>
//                                     <option>Select Property Zoning</option>
//                                 </select>
//                                 <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white appearance-none" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}>
//                                     <option>Select Property Type</option>
//                                 </select>
//                                 <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white appearance-none" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}>
//                                     <option>Select City</option>
//                                 </select>
//                             </div>
//                             <textarea placeholder="Message" rows={5} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
//                             <div className="flex items-center gap-2">
//                                 <input id="terms" type="checkbox" className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500"/>
//                                 <label htmlFor="terms" className="text-sm text-gray-600">I agree to the terms and conditions.</label>
//                             </div>
//                              <div className="text-center">
//                                 <button type="submit" className="bg-green-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-green-700 transition-colors">Submit</button>
//                             </div>
//                         </form>
//                     </div>
//                  </div>
//             </section>
//         </main>
//     );
// };






'use client'
// app/about/page.tsx
import ContactHeroSection from "@/components/contactPage/ContactHeroSection";
import ContactPage from "@/components/contactPage/ContactPage";
import AboutHeroSection from "@/components/aboutPage/AboutHeroSection";
import TeamQuoteSection from "@/components/aboutPage/TeamQuoteSection";
import VisionMissionSection from "@/components/aboutPage/VisionMissionSection";
import MessageFromCEOSection from "@/components/aboutPage/MessageFromCEOSection";
import TeamSection from "@/components/aboutPage/TeamSection";
import SiteMapFooter from "@/components/aboutPage/SiteMapFooter";
import DetailedFooter from "@/components/aboutPage/DetailedFooter";
import React from "react";


import GenericHero from "@/components/shared/GenericHero";
import ContactHERO  from "@/public/assets/aboutPage/AboutHERO.png"; // Your specific background image


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
      {/* <ContactHeroSection
        onSearchClick={handleSearchClick}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      /> */}


        <GenericHero 
        title="Contact Us" 
        subtitle="Let Us Connect" 
        backgroundImage={ContactHERO}
        activePage="Contact Us"
      />

      <main>
        {/* <TeamQuoteSection />
        <VisionMissionSection />
        <MessageFromCEOSection />
        <TeamSection /> */}
        <ContactPage />
      </main>

      <footer>
        <SiteMapFooter />
        <DetailedFooter />
      </footer>
    </div>
  );
}