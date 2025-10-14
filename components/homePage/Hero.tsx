





// "use client";
// import ConsultationModal from "../shared/ConsultationModal";
// import { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   ChevronDown,
//   Phone,
//   Search,
//   MapPin,
//   SlidersHorizontal,
//   Settings2,
//   Heart,
//   User,
//   Menu,
//   X,
//   Gift,
// } from "lucide-react";
// import heroImage from "./assets/Hero.png";
// import logoImage from "./assets/logo.png";
// import { useUI } from "../../app/context/UIContext";
// import { motion, AnimatePresence, Variants } from "framer-motion";

// interface HeroProps {
//   onSearchClick: () => void;
//   searchTerm: string;
//   onSearchChange: (term: string) => void;
// }

// export default function Hero({
//   onSearchClick,
//   searchTerm,
//   onSearchChange,
// }: HeroProps) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Separate states for city dropdowns
//   const [isNavbarCityDropdownOpen, setIsNavbarCityDropdownOpen] = useState(false);
//   const [isSearchBarCityDropdownOpen, setIsSearchBarCityDropdownOpen] = useState(false);
//   const [selectedCity, setSelectedCity] = useState("All Cities");

//   const [isPropertyDropdownOpen, setIsPropertyDropdownOpen] = useState(false);
//   const [isResourcesOpen, setIsResourcesOpen] = useState(false);

//   // Separate refs
//   const navbarCityDropdownRef = useRef<HTMLDivElement>(null);
//   const searchBarCityDropdownRef = useRef<HTMLDivElement>(null);
//   const propertyDropdownRef = useRef<HTMLDivElement>(null);
//   const resourcesDropdownRef = useRef<HTMLDivElement>(null);
//   const searchBarRef = useRef<HTMLDivElement>(null);

//   const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
//   const properties = [
//     "Luxury Villa",
//     "2BHK Apartment",
//     "3BHK Flat",
//     "Beachside House",
//     "Farm Land",
//   ];

//   const {
//     openLoginModal,
//     openFilterModal,
//     openOfferModal,
//     openConsultationModal,
//     isConsultationModalOpen,
//     closeConsultationModal,
//   } = useUI();

//   // Handle clicks outside dropdowns
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       // Navbar city dropdown
//       if (
//         navbarCityDropdownRef.current &&
//         !navbarCityDropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsNavbarCityDropdownOpen(false);
//       }

//       // Search bar city dropdown
//       if (
//         searchBarCityDropdownRef.current &&
//         !searchBarCityDropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsSearchBarCityDropdownOpen(false);
//       }

//       // Property dropdown
//       if (
//         propertyDropdownRef.current &&
//         !propertyDropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsPropertyDropdownOpen(false);
//       }

//       // Resources dropdown
//       if (
//         resourcesDropdownRef.current &&
//         !resourcesDropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsResourcesOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const resourceLinks = [
//     { label: "Home buyer's guide", href: "/guides/home-buyers" },
//     { label: "FAQ", href: "/faq" },
//     { label: "Pricing", href: "/pricing" },
//     { label: "EMI Calculator", href: "/emi-calculator" },
//     { label: "Vastu Tips", href: "/vastu-tips" },
//     { label: "NRI Services", href: "/nri-services" },
//     { label: "Terms of use", href: "/terms-of-use" },
//     { label: "Sitemap", href: "/sitemap" },
//     { label: "Privacy Policy", href: "/privacy-policy" },
//   ];

//   const handleScrollToSearch = () => {
//     onSearchClick();
//     setTimeout(() => {
//       searchBarRef.current?.scrollIntoView({
//         behavior: "smooth",
//         block: "center",
//       });
//     }, 100);
//   };

//   const dropdownVariants: Variants = {
//     hidden: { opacity: 0, y: -10, scale: 0.95 },
//     visible: { opacity: 1, y: 0, scale: 1 },
//     exit: { opacity: 0, y: -10, scale: 0.95 },
//   };

//   const heroTextContainerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 },
//     },
//   };

//   const heroTextItemVariants: Variants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
//   };

//   const searchButtonContainerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 1.5 },
//     },
//   };

//   const searchButtonVariants: Variants = {
//     hidden: { scale: 0, opacity: 0 },
//     visible: { scale: 1, opacity: 1 },
//   };

//   return (
//     <div className="relative h-[70vh] min-h-[600px] lg:h-screen">
//       {/* Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute inset-0"
//           animate={{ scale: [1, 1.1], rotate: [0, -1], x: [0, -30] }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             repeatType: "mirror",
//             ease: "easeInOut",
//           }}
//         >
//           <Image
//             src={heroImage}
//             alt="Beautiful modern house"
//             fill
//             style={{ objectFit: "cover" }}
//             className="z-0"
//             priority
//           />
//         </motion.div>
//       </div>

//       <div className="absolute inset-0 bg-black/50 z-10" />

//       {isConsultationModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           <ConsultationModal onClose={closeConsultationModal} />
//         </div>
//       )}

//       {/* Navbar */}
//       <header className="absolute top-0 left-0 right-0 z-30">
//         <motion.nav
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="container mx-auto px-6 py-4 flex justify-between items-center text-white"
//         >
//           <div>
//             <Image className="" src={logoImage} alt="Home Konnect Logo" />
//           </div>

//           <div className="hidden lg:flex items-center gap-8 font-medium">
//             {/* Navbar Cities Dropdown */}
//             <motion.div
//               whileHover={{ y: -2 }}
//               className="relative"
//               ref={navbarCityDropdownRef}
//             >
//               <button
//                 onClick={() => setIsNavbarCityDropdownOpen(!isNavbarCityDropdownOpen)}
//                 className="flex items-center gap-2"
//               >
//                 {selectedCity}
//                 <motion.div
//                   animate={{ rotate: isNavbarCityDropdownOpen ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <ChevronDown size={16} />
//                 </motion.div>
//               </button>
//               <AnimatePresence>
//                 {isNavbarCityDropdownOpen && (
//                   <motion.div
//                     variants={dropdownVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     transition={{ duration: 0.2 }}
//                     className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-xl z-40 origin-top"
//                   >
//                     <ul className="py-1 text-gray-700">
//                       {cities.map((city) => (
//                         <li key={city}>
//                           <button
//                             onClick={() => {
//                               setSelectedCity(city);
//                               setIsNavbarCityDropdownOpen(false);
//                             }}
//                             className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//                           >
//                             {city}
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>

//             <Link
//               href="/home"
//               className="bg-white text-gray-700 px-4 py-2 rounded-3xl"
//             >
//               Home
//             </Link>
//             <Link href="/about" className="hover:text-green-300">
//               About
//             </Link>
//             <Link href="/contact" className="hover:text-green-300">
//               Contact Us
//             </Link>
//             <Link href="/blogs" className="hover:text-green-300">
//               Blog
//             </Link>
//             <Link href="/careers" className="hover:text-green-300">
//               Careers
//             </Link>

//             {/* Resources Dropdown */}
//             <motion.div
//               whileHover={{ y: -2 }}
//               className="relative"
//               ref={resourcesDropdownRef}
//             >
//               <button
//                 onClick={() => setIsResourcesOpen(!isResourcesOpen)}
//                 className="flex items-center gap-2 hover:text-green-300"
//               >
//                 Resources
//                 <motion.div
//                   animate={{ rotate: isResourcesOpen ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <ChevronDown size={16} />
//                 </motion.div>
//               </button>
//               <AnimatePresence>
//                 {isResourcesOpen && (
//                   <motion.div
//                     variants={dropdownVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-40 origin-top-right"
//                   >
//                     <ul className="py-1 text-gray-700">
//                       {resourceLinks.map((link) => (
//                         <li key={link.label}>
//                           <Link
//                             href={link.href}
//                             onClick={() => setIsResourcesOpen(false)}
//                             className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//                           >
//                             {link.label}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           </div>

//           <div className="flex items-center gap-4">
//             <motion.button
//               onClick={openConsultationModal}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="hidden sm:flex items-center gap-2 border px-4 py-2 rounded-3xl font-medium"
//             >
//               <Phone size={16} /> Call Us
//             </motion.button>

//             <motion.button
//               onClick={handleScrollToSearch}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="hidden md:block p-2 hover:bg-white/20 rounded-full"
//             >
//               <Search size={20} />
//             </motion.button>
//             <motion.button
            
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="hidden md:block p-2 hover:bg-white/20 rounded-full"
//             >
              
//                <Link href="/favorites" className="hover:text-green-300">
//               <Heart size={20} />
//             </Link>
//             </motion.button>
//             <motion.button
//               onClick={openLoginModal}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <User size={22} className="cursor-pointer" />
//             </motion.button>
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="lg:hidden p-2"
//             >
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={isMenuOpen ? "x" : "menu"}
//                   initial={{ rotate: -90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: 90, opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                 </motion.div>
//               </AnimatePresence>
//             </button>
//           </div>
//         </motion.nav>
//       </header>

//       {/* Hero Section */}
//       <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
//         <motion.div
//           variants={heroTextContainerVariants}
//           initial="hidden"
//           animate="visible"
//           className="flex flex-col items-center"
//         >
//           <motion.p
//             variants={heroTextItemVariants}
//             className="text-green-400 font-semibold text-lg mb-2"
//           >
//             0% Brokerage - 100% Delight
//           </motion.p>
//           <motion.h1
//             variants={heroTextItemVariants}
//             className="text-4xl md:text-6xl font-bold leading-tight mt-2 mb-2"
//           >
//             Connecting To Your <br /> Dream Home
//           </motion.h1>
//           <motion.p
//             variants={heroTextItemVariants}
//             className="text-lg text-gray-200 font-semibold"
//           >
//             Chennai's Most Trusted Real Estate Agency
//           </motion.p>
//         </motion.div>
//       </div>

//       {/* Search Bar Section */}
//       <div
//         ref={searchBarRef}
//         className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 w-[90%] lg:w-3/4 max-w-4xl"
//       >
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: [0, -12, 0], opacity: 1 }}
//           transition={{
//             y: { duration: 4, repeat: Infinity, repeatType: "mirror" },
//             opacity: { duration: 0.6, delay: 1.2 },
//           }}
//         >
//           <div className="bg-white rounded-full shadow-2xl p-2 flex flex-col md:flex-row items-center gap-2 relative">
//             {/* Search Bar City Dropdown */}
//             <div
//               ref={searchBarCityDropdownRef}
//               className="relative flex items-center gap-2 w-full md:w-auto md:border-r pr-4 pl-4 py-2 md:py-0 cursor-pointer"
//             >
//               <MapPin className="text-gray-400" size={20} />
//               <button
//                 onClick={() => setIsSearchBarCityDropdownOpen(!isSearchBarCityDropdownOpen)}
//                 className="font-semibold text-gray-700 flex items-center gap-1"
//               >
//                 {selectedCity}
//                 <ChevronDown size={16} className="text-gray-400" />
//               </button>

//               <AnimatePresence>
//                 {isSearchBarCityDropdownOpen && (
//                   <motion.div
//                     variants={dropdownVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-40 z-30"
//                   >
//                     <ul className="text-gray-700 text-sm py-1">
//                       {cities.map((city) => (
//                         <li key={city}>
//                           <button
//                             className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                             onClick={() => {
//                               setSelectedCity(city);
//                               setIsSearchBarCityDropdownOpen(false);
//                             }}
//                           >
//                             {city}
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Property Input */}
//             <div
//               ref={propertyDropdownRef}
//               className="relative flex-grow w-full"
//             >
//               <Search
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                 size={20}
//               />
//               <input
//                 type="text"
//                 placeholder="Search by property name or type..."
//                 className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-gray-800 placeholder:text-gray-500"
//                 value={searchTerm}
//                 onFocus={() => setIsPropertyDropdownOpen(true)}
//                 onChange={(e) => onSearchChange(e.target.value)}
//               />

//               <AnimatePresence>
//                 {isPropertyDropdownOpen && (
//                   <motion.div
//                     variants={dropdownVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 z-30"
//                   >
//                     <ul className="text-gray-700 text-sm py-1">
//                       {properties.map((p) => (
//                         <li key={p}>
//                           <button
//                             className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                             onClick={() => {
//                               onSearchChange(p);
//                               setIsPropertyDropdownOpen(false);
//                             }}
//                           >
//                             {p}
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Buttons */}
//             <motion.div
//               variants={searchButtonContainerVariants}
//               initial="hidden"
//               animate="visible"
//               className="flex items-center gap-2 p-2 md:p-0"
//             >
//               <motion.button
//                 variants={searchButtonVariants}
//                 onClick={openFilterModal}
//                 whileHover={{ scale: 1.1 }}
//                 className="p-3 bg-green-500 text-white rounded-full"
//               >
//                 <SlidersHorizontal size={20} />
//               </motion.button>
//               <motion.button
//                 variants={searchButtonVariants}
//                 whileHover={{ scale: 1.1 }}
//                 className="p-3 bg-green-500 text-white rounded-full"
//               >
//                 <Settings2 size={20} />
//               </motion.button>
//               <motion.button
//                 variants={searchButtonVariants}
//                 onClick={onSearchClick}
//                 whileHover={{ scale: 1.1 }}
//                 className="p-3 bg-green-500 text-white rounded-full"
//               >
//                 <Search size={20} />
//               </motion.button>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }





"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Phone,
  Search,
  MapPin,
  SlidersHorizontal,
  Settings2,
  Heart,
  User,
  Menu,
  X,
  Gift,
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

import ConsultationModal from "../shared/ConsultationModal";
import { useUI } from "../../app/context/UIContext";
import heroImage from "./assets/Hero.png";
import logoImage from "./assets/logo.png";

// --- Constants (Moved outside the component for performance) ---
const CITIES = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
const PROPERTIES = [
  "Luxury Villa",
  "2BHK Apartment",
  "3BHK Flat",
  "Beachside House",
  "Farm Land",
];
const RESOURCE_LINKS = [
  { label: "Home buyer's guide", href: "/guides/home-buyers" },
  { label: "FAQ", href: "/faq" },
  { label: "Pricing", href: "/pricing" },
  { label: "EMI Calculator", href: "/emi-calculator" },
  { label: "Vastu Tips", href: "/vastu-tips" },
  { label: "NRI Services", href: "/nri-services" },
  { label: "Terms of use", href: "/terms-of-use" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

// --- Animation Variants ---
const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.95 },
};

// --- Custom Hook for handling clicks outside an element ---
const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

// --- Mobile Navigation Component ---
function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const mobileNavVariants: Variants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "tween", ease: "easeInOut" } },
    exit: { x: "100%", transition: { type: "tween", ease: "easeInOut" } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={mobileNavVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed top-0 right-0 h-full w-full max-w-sm bg-gray-800/90 backdrop-blur-sm z-40 p-6 flex flex-col lg:hidden"
        >
          <div className="flex justify-between items-center mb-10">
            <Image src={logoImage} alt="Home Konnect Logo" width={150} />
            <button onClick={onClose} className="text-white">
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col gap-6 text-white text-lg font-medium">
            <Link href="/home" onClick={onClose}>Home</Link>
            <Link href="/about" onClick={onClose}>About</Link>
            <Link href="/contact" onClick={onClose}>Contact Us</Link>
            <Link href="/blogs" onClick={onClose}>Blog</Link>
            <Link href="/careers" onClick={onClose}>Careers</Link>
            <details>
              <summary className="cursor-pointer">Resources</summary>
              <ul className="pl-4 mt-2 flex flex-col gap-3 text-base">
                {RESOURCE_LINKS.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} onClick={onClose} className="hover:text-green-300">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </details>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- Main Hero Component ---
interface HeroProps {
  onSearchClick: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function Hero({ onSearchClick, searchTerm, onSearchChange }: HeroProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState("All Cities");

  const dropdownRefs = {
    navbarCity: useRef<HTMLDivElement>(null),
    searchBarCity: useRef<HTMLDivElement>(null),
    property: useRef<HTMLDivElement>(null),
    resources: useRef<HTMLDivElement>(null),
  };

  const {
    openLoginModal,
    openFilterModal,
    openConsultationModal,
    isConsultationModalOpen,
    closeConsultationModal,
  } = useUI();
  
  const searchBarRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  const closeAllDropdowns = useCallback(() => setActiveDropdown(null), []);
  useClickOutside(dropdownRefs.navbarCity, closeAllDropdowns);
  useClickOutside(dropdownRefs.searchBarCity, closeAllDropdowns);
  useClickOutside(dropdownRefs.property, closeAllDropdowns);
  useClickOutside(dropdownRefs.resources, closeAllDropdowns);

  const handleDropdownToggle = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };
  
  const handleScrollToSearch = () => {
    onSearchClick();
    setTimeout(() => {
      searchBarRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  return (
    <div className="relative h-[85vh] min-h-[650px] lg:h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.1], rotate: [0, -1] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        >
          <Image
            src={heroImage}
            alt="Beautiful modern house"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-black/50 z-10" />

      {isConsultationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <ConsultationModal onClose={closeConsultationModal} />
        </div>
      )}

      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center text-white"
        >
          <Link href="/">
            <Image src={logoImage} alt="Home Konnect Logo" width={180} height={40} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 font-medium">
            <div ref={dropdownRefs.navbarCity} className="relative">
              <button onClick={() => handleDropdownToggle("navbarCity")} className="flex items-center gap-2">
                {selectedCity}
                <motion.div animate={{ rotate: activeDropdown === "navbarCity" ? 180 : 0 }}>
                  <ChevronDown size={16} />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeDropdown === "navbarCity" && (
                  <motion.ul variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" className="absolute top-full mt-2 w-48 bg-white text-gray-700 rounded-lg shadow-xl z-40 py-1">
                    {CITIES.map((city) => (
                      <li key={city}>
                        <button
                          onClick={() => {
                            setSelectedCity(city);
                            closeAllDropdowns();
                          }}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          {city}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            <Link href="/home" className="bg-white text-gray-700 px-4 py-2 rounded-3xl">Home</Link>
            <Link href="/about" className="hover:text-green-300">About</Link>
            <Link href="/contact" className="hover:text-green-300">Contact Us</Link>
             <Link href="/blogs" className="hover:text-green-300">Blog</Link>
            <Link href="/careers" className="hover:text-green-300">Careers</Link>
            <div ref={dropdownRefs.resources} className="relative">
                <button onClick={() => handleDropdownToggle('resources')} className="flex items-center gap-2 hover:text-green-300">
                    Resources
                    <motion.div animate={{ rotate: activeDropdown === 'resources' ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown size={16} />
                    </motion.div>
                </button>
                <AnimatePresence>
                    {activeDropdown === 'resources' && (
                        <motion.ul variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" className="absolute top-full right-0 mt-2 w-56 bg-white text-gray-700 rounded-lg shadow-xl z-40 py-1">
                            {RESOURCE_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} onClick={closeAllDropdowns} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={openConsultationModal} className="hidden sm:flex items-center gap-2 border px-4 py-2 rounded-full font-medium">
              <Phone size={16} /> Call Us
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleScrollToSearch} className="hidden md:block p-2 hover:bg-white/20 rounded-full">
              <Search size={20} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="hidden md:block p-2 hover:bg-white/20 rounded-full">
              <Link href="/favorites"><Heart size={20} /></Link>
            </motion.button>
            <motion.button onClick={openLoginModal} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <User size={22} />
            </motion.button>
            <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2">
              <Menu size={24} />
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }} className="flex flex-col items-center">
          <motion.p variants={heroTextItemVariants} className="text-green-400 font-semibold text-lg mb-2">0% Brokerage - 100% Delight</motion.p>
          <motion.h1 variants={heroTextItemVariants} className="text-4xl md:text-6xl font-bold leading-tight mt-2 mb-2">Connecting To Your <br /> Dream Home</motion.h1>
          <motion.p variants={heroTextItemVariants} className="text-lg text-gray-200 font-semibold">Chennai's Most Trusted Real Estate Agency</motion.p>
        </motion.div>
      </div>
      
      {/* Search Bar */}
      <div ref={searchBarRef} className="absolute -bottom-24 md:-bottom-16 left-1/2 -translate-x-1/2 z-20 w-[90%] lg:w-3/4 max-w-4xl">
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ opacity: { duration: 0.6, delay: 1.2 } }}>
          <div className="bg-white rounded-2xl md:rounded-full shadow-2xl p-3 flex flex-col md:flex-row items-center gap-2 relative">
            <div ref={dropdownRefs.searchBarCity} className="relative flex items-center gap-2 w-full md:w-auto md:border-r pr-4 pl-4 py-2 md:py-0 cursor-pointer">
              <MapPin className="text-gray-400" size={20} />
              <button onClick={() => handleDropdownToggle("searchBarCity")} className="font-semibold text-gray-700 flex items-center gap-1">
                {selectedCity}
                <ChevronDown size={16} className="text-gray-400" />
              </button>
              <AnimatePresence>
                {activeDropdown === "searchBarCity" && (
                  <motion.ul variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-40 z-30 py-1">
                    {CITIES.map((city) => (
                      <li key={city}>
                        <button
                          onClick={() => {
                            setSelectedCity(city);
                            closeAllDropdowns();
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                          {city}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <div ref={dropdownRefs.property} className="relative flex-grow w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by property name or type..."
                className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-gray-800"
                value={searchTerm}
                onFocus={() => handleDropdownToggle("property")}
                onChange={(e) => onSearchChange(e.target.value)}
              />
              <AnimatePresence>
                {activeDropdown === "property" && (
                  <motion.ul variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 z-30 py-1">
                    {PROPERTIES.map((p) => (
                      <li key={p}>
                        <button
                          onClick={() => {
                            onSearchChange(p);
                            closeAllDropdowns();
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                          {p}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-2 p-2 md:p-0 w-full md:w-auto justify-evenly">
              <motion.button onClick={openFilterModal} whileHover={{ scale: 1.1 }} className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-full">
                <SlidersHorizontal size={20} />
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-full">
                <Settings2 size={20} />
              </motion.button>
              <motion.button onClick={onSearchClick} whileHover={{ scale: 1.1 }} className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-full">
                <Search size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Added these variants here for clarity in the Hero Content section
const heroTextItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};