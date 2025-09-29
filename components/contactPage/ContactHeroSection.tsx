// // components/aboutPage/AboutHeroSection.tsx
// "use client";
// import Link from "next/link";
// import {
//   ChevronDown,
//   Phone,
//   Search,
//   MapPin,
//   SlidersHorizontal,
//   Settings2,
//   ArrowRight,
//   Heart,
//   UserCircle2,
//   Menu,
//   X,
//   User
// } from "lucide-react";
// import { useState, useRef, useEffect } from "react";
// import Image from 'next/image';
// // import { ChevronDown, Phone, Heart, UserCircle2, Menu, X } from 'lucide-react';
// import React from 'react';

// // Make sure your logo path is correct
// // import logoImage from '../../public/assets/logo.png';
// import logoImage from '../homePage/assets/logo.png';
// import AboutHERO from '../../public/assets/aboutPage/AboutHERO.png';

// export default function AboutHeroSection() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//     const [isCityDropdownOpen, setIsCityDropdownOpen] = React.useState(false);

//     const cityDropdownRef = React.useRef<HTMLDivElement>(null);
//   const [selectedCity, setSelectedCity] = useState("All Cities");
//     const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];

//       useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//           if (
//             cityDropdownRef.current &&
//             !cityDropdownRef.current.contains(event.target as Node)
//           ) {
//             setIsCityDropdownOpen(false);
//           }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//           document.removeEventListener("mousedown", handleClickOutside);
//         };
//       }, []);

//   return (
//     <div className="relative h-[55vh] min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-b-[40px] shadow-lg"> {/* ✅ Rounded bottom corners */}
//       {/* Background Image */}
//       <Image
//         src={AboutHERO}
//         alt="City skyline behind modern building"
//         fill
//         style={{ objectFit: "cover" }}
//         className="z-0 brightness-[0.7]" // ✅ Slightly adjusted brightness
//         priority
//       />
//       <div className="absolute inset-0 bg-black/30 z-10" /> {/* ✅ Dark overlay slightly adjusted */}

//       {/* Header */}
//       <header className="absolute top-0 left-0 right-0 z-30">
//         <nav className="container mx-auto px-6 py-4 flex justify-between items-center text-white">
//           <div className="flex items-center gap-6">
//               <div className="">
//                 {/* <div className="flex items-center gap-2">
//                   <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center font-bold text-white text-lg">
//                     HK
//                   </div>
//                   <span className="font-bold text-xl">Home Konnect</span>
//                 </div> */}
//                  <Image
//                  className=""
//                     src={logoImage}
//                     alt="Home Konnect Logo"
//                   />
//               </div>

//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center gap-8 font-medium"> {/* ✅ Gap adjusted */}
//                 <div className="relative" ref={cityDropdownRef}>
//                   <button
//                     onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
//                     className="flex items-center gap-2 bg-white rounded-3xl text-gray-700 backdrop-blur-sm px-4 py-2 border border-gray-200 hover:border-gray-300 transition-colors"
//                   >
//                     {selectedCity}
//                     <ChevronDown
//                       size={16}
//                       className={`transition-transform duration-300 ${isCityDropdownOpen ? "rotate-180" : ""}`}
//                     />
//                   </button>
//                   {isCityDropdownOpen && (
//                     <div className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-xl z-40">
//                       <ul className="py-1 text-gray-700">
//                         {cities.map((city) => (
//                           <li key={city}>
//                             <button
//                               onClick={() => {
//                                 setSelectedCity(city);
//                                 setIsCityDropdownOpen(false);
//                               }}
//                               className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//                             >
//                               {city}
//                             </button>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//       <Link href="/home" className="hover:text-green-300 transition-colors">Home</Link>
//                 <Link href="/about" className="hover:text-green-300 transition-colors">About</Link>
//                 <Link href="/contact" className="hover:text-green-300 transition-colors">Contact Us</Link>
//                 <Link href="/blogs" className="hover:text-green-300 transition-colors">Blog</Link>
//                 <Link href="/careers" className="hover:text-green-300 transition-colors">Careers</Link>
//           </div>

//           {/* Right side icons and call */}
//               <div className="flex items-center gap-4 ">
//                            <button className="hidden sm:flex items-center gap-2 border backdrop-blur-sm px-4 py-2 rounded-3xl font-medium">
//                              <Phone size={16} /> Call Us{" "}
//                              <Image
//                                src="/assets/indiaFlag.png" // Path from the 'public' folder
//                                alt="India flag"
//                                width={20} // Set the desired width
//                                height={15} // Set the desired height
//                                className="ml-1"
//                              />
//                            </button>
//                 <button className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors"><Heart size={20} /></button>
//                 <button className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors"><UserCircle2 size={20} /></button>
//                 <button className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors"><User size={20} /></button>

//                 {/* Hamburger Menu Button */}
//                 <button
//                   onClick={() => setIsMenuOpen(!isMenuOpen)}
//                   className="lg:hidden p-2 hover:bg-white/20 rounded-full"
//                 >
//                   {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//               </div>

//           {/* Mobile Menu Overlay */}
//           {isMenuOpen && (
//             <div className="absolute top-full right-6 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4 flex flex-col gap-4 lg:hidden">
// <Link href="/home" className="hover:text-green-300 transition-colors">Home</Link>
//                 <Link href="/about" className="hover:text-green-300 transition-colors">About</Link>
//                 <Link href="/contact" className="hover:text-green-300 transition-colors">Contact Us</Link>
//                 <Link href="/blogs" className="hover:text-green-300 transition-colors">Blog</Link>
//                 <Link href="/careers" className="hover:text-green-300 transition-colors">Careers</Link>
//               <a href="#" className="sm:hidden flex items-center gap-2 hover:text-green-600"><Phone size={16}/> Call Us</a>
//               <a href="#" className="md:hidden flex items-center gap-2 hover:text-green-600"><Heart size={16}/> Wishlist</a>
//               <a href="#" className="md:hidden flex items-center gap-2 hover:text-green-600"><UserCircle2 size={16}/> Profile</a>
//             </div>
//           )}
//         </nav>
//       </header>

//       {/* Hero Content (About Us text) */}
//       <div className="relative z-20 flex flex-col justify-center h-full text-white px-6 md:px-12"> {/* ✅ Left aligned, added padding */}
//         <div className="container mx-auto"> {/* ✅ Constrain content width */}
//           <h1 className="text-5xl md:text-6xl font-bold mb-2">Contact Us</h1>
//           <p className="text-xl text-gray-200">Let Us Connect</p>
//         </div>
//       </div>
//     </div>
//   );
// }





// components/aboutPage/AboutHeroSection.tsx
"use client";
import Link from "next/link";
import {
  ChevronDown,
  Phone,
  Search,
  MapPin,
  SlidersHorizontal,
  Settings2,
  ArrowRight,
  Heart,
  UserCircle2,
  Menu,
  X,
  User,
  Gift 
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
// import { ChevronDown, Phone, Heart, UserCircle2, Menu, X } from 'lucide-react';
import React from "react";

// Make sure your logo path is correct
// import logoImage from '../../public/assets/logo.png';
import OfferModal from '../shared/OfferModal';
import logoImage from "../homePage/assets/logo.png";
import AboutHERO from "../../public/assets/aboutPage/AboutHERO.png";

import { useUI } from "../../app/context/UIContext";


interface HeroProps {
  onSearchClick: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}


export default function AboutHeroSection({
  onSearchClick,
  searchTerm,
  onSearchChange,
}: HeroProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = React.useState(false);

  const cityDropdownRef = React.useRef<HTMLDivElement>(null);
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];

  const { openLoginModal, openFilterModal, openOfferModal, isOfferModalOpen, closeOfferModal } = useUI();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cityDropdownRef.current &&
        !cityDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCityDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative h-[55vh] min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-b-[40px] shadow-lg">
      {" "}
      {/* ✅ Rounded bottom corners */}
      {/* Background Image */}
      <Image
        src={AboutHERO}
        alt="City skyline behind modern building"
        fill
        style={{ objectFit: "cover" }}
        className="z-0 brightness-[0.7]" // ✅ Slightly adjusted brightness
        priority
      />
      <div className="absolute inset-0 bg-black/30 z-10" />{" "}
      {/* ✅ Dark overlay slightly adjusted */}
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-6">
            <div className="">
              {/* <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center font-bold text-white text-lg">
                    HK
                  </div>
                  <span className="font-bold text-xl">Home Konnect</span>
                </div> */}
              <Image className="" src={logoImage} alt="Home Konnect Logo" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 font-medium">
            {" "}
            {/* ✅ Gap adjusted */}
            <div className="relative" ref={cityDropdownRef}>
              <button
                onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                className="flex items-center gap-2 hover:text-green-300 transition-colors"
              >
                {selectedCity}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    isCityDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isCityDropdownOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-xl z-40">
                  <ul className="py-1 text-gray-700">
                    {cities.map((city) => (
                      <li key={city}>
                        <button
                          onClick={() => {
                            setSelectedCity(city);
                            setIsCityDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          {city}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Link
              href="/home"
              className="hover:text-green-300 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-green-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="bg-white rounded-3xl text-gray-700 backdrop-blur-sm px-4 py-2 border border-gray-200 hover:border-gray-300 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/blogs"
              className="hover:text-green-300 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/careers"
              className="hover:text-green-300 transition-colors"
            >
              Careers
            </Link>
          </div>

          {/* Right side icons and call */}

          <div className="flex items-center gap-4 ">
            <button className="hidden sm:flex items-center gap-2 border backdrop-blur-sm px-4 py-2 rounded-3xl font-medium">
              <Phone size={16} /> Call Us{" "}
              <Image
                src="/assets/indiaFlag.png" // Path from the 'public' folder
                alt="India flag"
                width={20} // Set the desired width
                height={15} // Set the desired height
                className="ml-1"
              />
            </button>
            {/* <button className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors"><Gift  size={20} /></button> */}
            <button
              onClick={openOfferModal}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <Gift size={20} className="text-white" />
            </button>

            <button
              onClick={onSearchClick}
              className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <Search size={20} />
            </button>
            <button className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors">
              <Heart size={20} />
            </button>
            {/* <button className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors"><User size={20} /></button> */}
            <button onClick={openLoginModal}>
              <User size={22} className="cursor-pointer hover:text-green-600" />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-white/20 rounded-full"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="absolute top-full right-6 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4 flex flex-col gap-4 lg:hidden">
              <Link
                href="/home"
                className="hover:text-green-300 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-green-300 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-green-300 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/blogs"
                className="hover:text-green-300 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/careers"
                className="hover:text-green-300 transition-colors"
              >
                Careers
              </Link>
              <a
                href="#"
                className="sm:hidden flex items-center gap-2 hover:text-green-600"
              >
                <Phone size={16} /> Call Us
              </a>
              <a
                href="#"
                className="md:hidden flex items-center gap-2 hover:text-green-600"
              >
                <Heart size={16} /> Wishlist
              </a>
              <a
                href="#"
                className="md:hidden flex items-center gap-2 hover:text-green-600"
              >
                <UserCircle2 size={16} /> Profile
              </a>
            </div>
          )}
        </nav>
      </header>
      {/* Hero Content (About Us text) */}
      <div className="relative z-20 flex flex-col justify-center h-full text-white px-6 md:px-12">
        {" "}
        {/* ✅ Left aligned, added padding */}
        <div className="container mx-auto">
          {" "}
          {/* ✅ Constrain content width */}
          <h1 className="text-5xl md:text-6xl font-bold mb-2">Contact Us</h1>
          <p className="text-xl text-gray-200">Let Us Connect</p>
          {/* Render OfferModal with blurred background when openOfferModal is triggered */}
          {isOfferModalOpen && (
            <>
              <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md transition-all"></div>
              <OfferModal onClose={closeOfferModal} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
