



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
//   User,
//   Gift 
// } from "lucide-react";
// import { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// // import { ChevronDown, Phone, Heart, UserCircle2, Menu, X } from 'lucide-react';
// import React from "react";

// // Make sure your logo path is correct
// // import logoImage from '../../public/assets/logo.png';
// import OfferModal from '../shared/OfferModal';
// import logoImage from "../homePage/assets/logo.png";
// import AboutHERO from "../../public/assets/aboutPage/AboutHERO.png";

// import { useUI } from "../../app/context/UIContext";


// interface HeroProps {
//   onSearchClick: () => void;
//   searchTerm: string;
//   onSearchChange: (term: string) => void;
// }


// export default function AboutHeroSection({
//   onSearchClick,
//   searchTerm,
//   onSearchChange,
// }: HeroProps) {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isCityDropdownOpen, setIsCityDropdownOpen] = React.useState(false);

//   const cityDropdownRef = React.useRef<HTMLDivElement>(null);
//   const [selectedCity, setSelectedCity] = useState("All Cities");
//   const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];

//   const { openLoginModal, openFilterModal, openOfferModal, isOfferModalOpen, closeOfferModal } = useUI();

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         cityDropdownRef.current &&
//         !cityDropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsCityDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative h-[55vh] min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-b-[40px] shadow-lg">
//       {" "}
//       {/* ✅ Rounded bottom corners */}
//       {/* Background Image */}
//       <Image
//         src={AboutHERO}
//         alt="City skyline behind modern building"
//         fill
//         style={{ objectFit: "cover" }}
//         className="z-0 brightness-[0.7]" // ✅ Slightly adjusted brightness
//         priority
//       />
//       <div className="absolute inset-0 bg-black/30 z-10" />{" "}
//       {/* ✅ Dark overlay slightly adjusted */}
//       {/* Header */}
//       <header className="absolute top-0 left-0 right-0 z-30">
//         <nav className="container mx-auto px-6 py-4 flex justify-between items-center text-white">
//           <div className="flex items-center gap-6">
//             <div className="">
//               {/* <div className="flex items-center gap-2">
//                   <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center font-bold text-white text-lg">
//                     HK
//                   </div>
//                   <span className="font-bold text-xl">Home Konnect</span>
//                 </div> */}
//               <Image className="" src={logoImage} alt="Home Konnect Logo" />
//             </div>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center gap-8 font-medium">
//             {" "}
//             {/* ✅ Gap adjusted */}
//             <div className="relative" ref={cityDropdownRef}>
//               <button
//                 onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
//                 className="flex items-center gap-2 hover:text-green-300 transition-colors"
//               >
//                 {selectedCity}
//                 <ChevronDown
//                   size={16}
//                   className={`transition-transform duration-300 ${
//                     isCityDropdownOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {isCityDropdownOpen && (
//                 <div className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-xl z-40">
//                   <ul className="py-1 text-gray-700">
//                     {cities.map((city) => (
//                       <li key={city}>
//                         <button
//                           onClick={() => {
//                             setSelectedCity(city);
//                             setIsCityDropdownOpen(false);
//                           }}
//                           className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//                         >
//                           {city}
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//             <Link
//               href="/home"
//               className="hover:text-green-300 transition-colors"
//             >
//               Home
//             </Link>
//             <Link
//               href="/about"
//               className="hover:text-green-300 transition-colors"
//             >
//               About
//             </Link>
//             <Link
//               href="/contact"
//               className="bg-white rounded-3xl text-gray-700 backdrop-blur-sm px-4 py-2 border border-gray-200 hover:border-gray-300 transition-colors"
//             >
//               Contact Us
//             </Link>
//             <Link
//               href="/blogs"
//               className="hover:text-green-300 transition-colors"
//             >
//               Blog
//             </Link>
//             <Link
//               href="/careers"
//               className="hover:text-green-300 transition-colors"
//             >
//               Careers
//             </Link>
//           </div>

//           {/* Right side icons and call */}

//           <div className="flex items-center gap-4 ">
//             <button className="hidden sm:flex items-center gap-2 border backdrop-blur-sm px-4 py-2 rounded-3xl font-medium">
//               <Phone size={16} /> Call Us{" "}
//               <Image
//                 src="/assets/indiaFlag.png" // Path from the 'public' folder
//                 alt="India flag"
//                 width={20} // Set the desired width
//                 height={15} // Set the desired height
//                 className="ml-1"
//               />
//             </button>
//             {/* <button className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors"><Gift  size={20} /></button> */}
//             <button
//               onClick={openOfferModal}
//               className="p-2 hover:bg-white/20 rounded-full transition-colors"
//             >
//               <Gift size={20} className="text-white" />
//             </button>

//             <button
//               onClick={onSearchClick}
//               className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors"
//             >
//               <Search size={20} />
//             </button>
//             <button className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors">
//               <Heart size={20} />
//             </button>
//             {/* <button className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors"><User size={20} /></button> */}
//             <button onClick={openLoginModal}>
//               <User size={22} className="cursor-pointer hover:text-green-600" />
//             </button>

//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="lg:hidden p-2 hover:bg-white/20 rounded-full"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {/* Mobile Menu Overlay */}
//           {isMenuOpen && (
//             <div className="absolute top-full right-6 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4 flex flex-col gap-4 lg:hidden">
//               <Link
//                 href="/home"
//                 className="hover:text-green-300 transition-colors"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/about"
//                 className="hover:text-green-300 transition-colors"
//               >
//                 About
//               </Link>
//               <Link
//                 href="/contact"
//                 className="hover:text-green-300 transition-colors"
//               >
//                 Contact Us
//               </Link>
//               <Link
//                 href="/blogs"
//                 className="hover:text-green-300 transition-colors"
//               >
//                 Blog
//               </Link>
//               <Link
//                 href="/careers"
//                 className="hover:text-green-300 transition-colors"
//               >
//                 Careers
//               </Link>
//               <a
//                 href="#"
//                 className="sm:hidden flex items-center gap-2 hover:text-green-600"
//               >
//                 <Phone size={16} /> Call Us
//               </a>
//               <a
//                 href="#"
//                 className="md:hidden flex items-center gap-2 hover:text-green-600"
//               >
//                 <Heart size={16} /> Wishlist
//               </a>
//               <a
//                 href="#"
//                 className="md:hidden flex items-center gap-2 hover:text-green-600"
//               >
//                 <UserCircle2 size={16} /> Profile
//               </a>
//             </div>
//           )}
//         </nav>
//       </header>
//       {/* Hero Content (About Us text) */}
//       <div className="relative z-20 flex flex-col justify-center h-full text-white px-6 md:px-12">
//         {" "}
//         {/* ✅ Left aligned, added padding */}
//         <div className="container mx-auto">
//           {" "}
//           {/* ✅ Constrain content width */}
//           <h1 className="text-5xl md:text-6xl font-bold mb-2">Contact Us</h1>
//           <p className="text-xl text-gray-200">Let Us Connect</p>
//           {/* Render OfferModal with blurred background when openOfferModal is triggered */}
//           {isOfferModalOpen && (
//             <>
//               <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md transition-all"></div>
//               <OfferModal onClose={closeOfferModal} />
//             </>
//           )}
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
  Heart,
  Menu,
  X,
  User,
  Gift 
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

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
}: HeroProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const cityDropdownRef = useRef<HTMLDivElement>(null);
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];

  const { openLoginModal, openOfferModal, isOfferModalOpen, closeOfferModal } = useUI();

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

  // Animation Variants
  const contentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.5 },
    },
  };

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.95 },
  };

  return (
    <div className="relative h-[55vh] min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-b-[40px] shadow-lg">
      <motion.div
        className="absolute inset-0"
        animate={{ scale: 1.05, x: -10 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <Image
          src={AboutHERO}
          alt="City skyline behind modern building"
          fill
          style={{ objectFit: "cover" }}
          className="z-0 brightness-[0.7]"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/30 z-10" />

      <header className="absolute top-0 left-0 right-0 z-30">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="container mx-auto px-6 py-4 flex justify-between items-center text-white"
        >
          <div className="flex items-center gap-6">
            <Image className="" src={logoImage} alt="Home Konnect Logo" />
          </div>

          <div className="hidden lg:flex items-center gap-8 font-medium">
            <motion.div className="relative" ref={cityDropdownRef}>
              <button
                onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                className="flex items-center gap-2"
              >
                {selectedCity}
                <motion.div animate={{ rotate: isCityDropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={16} />
                </motion.div>
              </button>
              <AnimatePresence>
                {isCityDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-xl z-40 origin-top"
                  >
                    <ul className="py-1 text-gray-700">
                      {cities.map((city) => (
                        <li key={city}><button onClick={() => { setSelectedCity(city); setIsCityDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">{city}</button></li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}><Link href="/home" className="hover:text-green-300 transition-colors">Home</Link></motion.div>
            <motion.div whileHover={{ y: -2 }}><Link href="/about" className="hover:text-green-300 transition-colors">About</Link></motion.div>
            <motion.div whileHover={{ y: -2 }}><Link href="/contact" className="bg-white rounded-3xl text-gray-700 px-4 py-2 border border-transparent">Contact Us</Link></motion.div>
            <motion.div whileHover={{ y: -2 }}><Link href="/blogs" className="hover:text-green-300 transition-colors">Blog</Link></motion.div>
            <motion.div whileHover={{ y: -2 }}><Link href="/careers" className="hover:text-green-300 transition-colors">Careers</Link></motion.div>
          </div>

          <div className="flex items-center gap-4 ">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden sm:flex items-center gap-2 border backdrop-blur-sm px-4 py-2 rounded-3xl font-medium">
              <Phone size={16} /> Call Us{" "}
              <Image src="/assets/indiaFlag.png" alt="India flag" width={20} height={15} className="ml-1" />
            </motion.button>
            <motion.button onClick={openOfferModal} whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }} className="p-2 hover:bg-white/20 rounded-full">
              <Gift size={20} className="text-white" />
            </motion.button>
            <motion.button onClick={onSearchClick} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="hidden md:block p-2 hover:bg-white/20 rounded-full">
              <Search size={20} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="hidden md:block p-2 hover:bg-white/20 rounded-full">
              <Heart size={20} />
            </motion.button>
            <motion.button onClick={openLoginModal} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <User size={22} className="cursor-pointer hover:text-green-300" />
            </motion.button>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2">
              <AnimatePresence mode="wait">
                <motion.div key={isMenuOpen ? "x" : "menu"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-full right-6 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4 flex flex-col gap-4 lg:hidden origin-top-right"
              >
                <Link href="/home" className="hover:text-green-600">Home</Link>
                <Link href="/about" className="hover:text-green-600">About</Link>
                <Link href="/contact" className="font-semibold text-green-600">Contact Us</Link>
                <Link href="/blogs" className="hover:text-green-600">Blog</Link>
                <Link href="/careers" className="hover:text-green-600">Careers</Link>
                <a href="#" className="flex items-center gap-2 hover:text-green-600 pt-2 border-t mt-2"><Phone size={16} /> Call Us</a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>

      <div className="relative z-20 flex flex-col justify-center h-full text-white px-6 md:px-12">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-2">Contact Us</motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-200">Let Us Connect</motion.p>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOfferModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center"
            >
              <OfferModal onClose={closeOfferModal} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}