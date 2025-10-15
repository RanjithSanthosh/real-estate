





"use client";
import ConsultationModal from "../shared/ConsultationModal";
import { useState, useRef, useEffect } from "react";
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
import heroImage from "./assets/Hero.png";
import logoImage from "./assets/logo.png";
import { useUI } from "../../app/context/UIContext";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface HeroProps {
  onSearchClick: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function Hero({
  onSearchClick,
  searchTerm,
  onSearchChange,
}: HeroProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Separate states for city dropdowns
  const [isNavbarCityDropdownOpen, setIsNavbarCityDropdownOpen] = useState(false);
  const [isSearchBarCityDropdownOpen, setIsSearchBarCityDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("All Cities");

  const [isPropertyDropdownOpen, setIsPropertyDropdownOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  // Separate refs
  const navbarCityDropdownRef = useRef<HTMLDivElement>(null);
  const searchBarCityDropdownRef = useRef<HTMLDivElement>(null);
  const propertyDropdownRef = useRef<HTMLDivElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);

  const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
  const properties = [
    "Luxury Villa",
    "2BHK Apartment",
    "3BHK Flat",
    "Beachside House",
    "Farm Land",
  ];

  const {
    openLoginModal,
    openFilterModal,
    openOfferModal,
    openConsultationModal,
    isConsultationModalOpen,
    closeConsultationModal,
  } = useUI();

  // Handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Navbar city dropdown
      if (
        navbarCityDropdownRef.current &&
        !navbarCityDropdownRef.current.contains(event.target as Node)
      ) {
        setIsNavbarCityDropdownOpen(false);
      }

      // Search bar city dropdown
      if (
        searchBarCityDropdownRef.current &&
        !searchBarCityDropdownRef.current.contains(event.target as Node)
      ) {
        setIsSearchBarCityDropdownOpen(false);
      }

      // Property dropdown
      if (
        propertyDropdownRef.current &&
        !propertyDropdownRef.current.contains(event.target as Node)
      ) {
        setIsPropertyDropdownOpen(false);
      }

      // Resources dropdown
      if (
        resourcesDropdownRef.current &&
        !resourcesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const resourceLinks = [
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

  const handleScrollToSearch = () => {
    onSearchClick();
    setTimeout(() => {
      searchBarRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.95 },
  };

  const heroTextContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const heroTextItemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const searchButtonContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 1.5 },
    },
  };

  const searchButtonVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <div className="relative h-[70vh] min-h-[600px] lg:h-screen">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.1], rotate: [0, -1], x: [0, -30] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <Image
            src={heroImage}
            alt="Beautiful modern house"
            fill
            style={{ objectFit: "cover" }}
            className="z-0"
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

      {/* Navbar */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-6 py-4 flex justify-between items-center text-white"
        >
          <div>
            <Image className="" src={logoImage} alt="Home Konnect Logo" />
          </div>

          <div className="hidden lg:flex items-center gap-8 font-medium">
            {/* Navbar Cities Dropdown */}
            <motion.div
              whileHover={{ y: -2 }}
              className="relative"
              ref={navbarCityDropdownRef}
            >
              <button
                onClick={() => setIsNavbarCityDropdownOpen(!isNavbarCityDropdownOpen)}
                className="flex items-center gap-2"
              >
                {selectedCity}
                <motion.div
                  animate={{ rotate: isNavbarCityDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>
              <AnimatePresence>
                {isNavbarCityDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-xl z-40 origin-top"
                  >
                    <ul className="py-1 text-gray-700">
                      {cities.map((city) => (
                        <li key={city}>
                          <button
                            onClick={() => {
                              setSelectedCity(city);
                              setIsNavbarCityDropdownOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {city}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <Link
              href="/home"
              className="bg-white text-gray-700 px-4 py-2 rounded-3xl"
            >
              Home
            </Link>
            <Link href="/about" className="hover:text-green-300">
              About
            </Link>
            <Link href="/contact" className="hover:text-green-300">
              Contact Us
            </Link>
            <Link href="/blogs" className="hover:text-green-300">
              Blog
            </Link>
            <Link href="/careers" className="hover:text-green-300">
              Careers
            </Link>

            {/* Resources Dropdown */}
            <motion.div
              whileHover={{ y: -2 }}
              className="relative"
              ref={resourcesDropdownRef}
            >
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center gap-2 hover:text-green-300"
              >
                Resources
                <motion.div
                  animate={{ rotate: isResourcesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>
              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-40 origin-top-right"
                  >
                    <ul className="py-1 text-gray-700">
                      {resourceLinks.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            onClick={() => setIsResourcesOpen(false)}
                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={openConsultationModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 border px-4 py-2 rounded-3xl font-medium"
            >
              <Phone size={16} /> Call Us
            </motion.button>

            <motion.button
              onClick={handleScrollToSearch}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hidden md:block p-2 hover:bg-white/20 rounded-full"
            >
              <Search size={20} />
            </motion.button>
            <motion.button
            
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hidden md:block p-2 hover:bg-white/20 rounded-full"
            >
              
               <Link href="/favorites" className="hover:text-green-300">
              <Heart size={20} />
            </Link>
            </motion.button>
            <motion.button
              onClick={openLoginModal}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <User size={22} className="cursor-pointer" />
            </motion.button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Hero Section */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.div
          variants={heroTextContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.p
            variants={heroTextItemVariants}
            className="text-green-400 font-semibold text-lg mb-2"
          >
            0% Brokerage - 100% Delight
          </motion.p>
          <motion.h1
            variants={heroTextItemVariants}
            className="text-4xl md:text-6xl font-bold leading-tight mt-2 mb-2"
          >
            Connecting To Your <br /> Dream Home
          </motion.h1>
          <motion.p
            variants={heroTextItemVariants}
            className="text-lg text-gray-200 font-semibold"
          >
            Chennai's Most Trusted Real Estate Agency
          </motion.p>
        </motion.div>
      </div>

      {/* Search Bar Section */}
      <div
        ref={searchBarRef}
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 w-[90%] lg:w-3/4 max-w-4xl"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: [0, -12, 0], opacity: 1 }}
          transition={{
            y: { duration: 4, repeat: Infinity, repeatType: "mirror" },
            opacity: { duration: 0.6, delay: 1.2 },
          }}
        >
          <div className="bg-white rounded-full shadow-2xl p-2 flex flex-col md:flex-row items-center gap-2 relative">
            {/* Search Bar City Dropdown */}
            <div
              ref={searchBarCityDropdownRef}
              className="relative flex items-center gap-2 w-full md:w-auto md:border-r pr-4 pl-4 py-2 md:py-0 cursor-pointer"
            >
              <MapPin className="text-gray-400" size={20} />
              <button
                onClick={() => setIsSearchBarCityDropdownOpen(!isSearchBarCityDropdownOpen)}
                className="font-semibold text-gray-700 flex items-center gap-1"
              >
                {selectedCity}
                <ChevronDown size={16} className="text-gray-400" />
              </button>

              <AnimatePresence>
                {isSearchBarCityDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-40 z-30"
                  >
                    <ul className="text-gray-700 text-sm py-1">
                      {cities.map((city) => (
                        <li key={city}>
                          <button
                            className="w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={() => {
                              setSelectedCity(city);
                              setIsSearchBarCityDropdownOpen(false);
                            }}
                          >
                            {city}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Property Input */}
            <div
              ref={propertyDropdownRef}
              className="relative flex-grow w-full"
            >
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by property name or type..."
                className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-gray-800 placeholder:text-gray-500"
                value={searchTerm}
                onFocus={() => setIsPropertyDropdownOpen(true)}
                onChange={(e) => onSearchChange(e.target.value)}
              />

              <AnimatePresence>
                {isPropertyDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 z-30"
                  >
                    <ul className="text-gray-700 text-sm py-1">
                      {properties.map((p) => (
                        <li key={p}>
                          <button
                            className="w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={() => {
                              onSearchChange(p);
                              setIsPropertyDropdownOpen(false);
                            }}
                          >
                            {p}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Buttons */}
            <motion.div
              variants={searchButtonContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2 p-2 md:p-0"
            >
              <motion.button
                variants={searchButtonVariants}
                onClick={openFilterModal}
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-green-500 text-white rounded-full"
              >
                <SlidersHorizontal size={20} />
              </motion.button>
              <motion.button
                variants={searchButtonVariants}
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-green-500 text-white rounded-full"
              >
                <Settings2 size={20} />
              </motion.button>
              <motion.button
                variants={searchButtonVariants}
                onClick={onSearchClick}
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-green-500 text-white rounded-full"
              >
                <Search size={20} />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}






// "use client";

// import { useState, useRef, useEffect, useCallback } from "react";
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
// import { motion, AnimatePresence, Variants } from "framer-motion";

// import ConsultationModal from "../shared/ConsultationModal";
// import { useUI } from "../../app/context/UIContext";
// import heroImage from "./assets/Hero.png";
// import logoImage from "./assets/logo.png";

// // --- Constants ---
// const CITIES = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
// const PROPERTIES = [
//   "Luxury Villa",
//   "2BHK Apartment",
//   "3BHK Flat",
//   "Beachside House",
//   "Farm Land",
// ];
// const RESOURCE_LINKS = [
//   { label: "Home buyer's guide", href: "/guides/home-buyers" },
//   { label: "FAQ", href: "/faq" },
//   { label: "Pricing", href: "/pricing" },
//   { label: "EMI Calculator", href: "/emi-calculator" },
//   { label: "Vastu Tips", href: "/vastu-tips" },
//   { label: "NRI Services", href: "/nri-services" },
//   { label: "Terms of use", href: "/terms-of-use" },
//   { label: "Sitemap", href: "/sitemap" },
//   { label: "Privacy Policy", href: "/privacy-policy" },
// ];

// // --- Animation Variants ---
// const dropdownVariants: Variants = {
//   hidden: { opacity: 0, y: -10, scale: 0.95 },
//   visible: { opacity: 1, y: 0, scale: 1 },
//   exit: { opacity: 0, y: -10, scale: 0.95 },
// };

// const heroTextContainerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2, delayChildren: 0.3 },
//   },
// };

// const heroTextItemVariants: Variants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
// };

// const searchButtonContainerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, delayChildren: 1.5 },
//   },
// };

// const searchButtonVariants: Variants = {
//   hidden: { scale: 0, opacity: 0 },
//   visible: { scale: 1, opacity: 1 },
// };

// // --- Custom Hook for handling clicks outside multiple elements ---
// const useClickOutside = (
//   refs: React.RefObject<HTMLElement>[],
//   handler: () => void,
// ) => {
//   useEffect(() => {
//     const listener = (event: MouseEvent | TouchEvent) => {
//       // If the click is inside any of the provided refs, do nothing
//       if (refs.some(ref => ref.current?.contains(event.target as Node))) {
//         return;
//       }
//       handler();
//     };
//     document.addEventListener("mousedown", listener);
//     document.addEventListener("touchstart", listener);
//     return () => {
//       document.removeEventListener("mousedown", listener);
//       document.removeEventListener("touchstart", listener);
//     };
//   }, [refs, handler]);
// };

// // --- Mobile Navigation Component ---
// function MobileNav({ 
//   isOpen, 
//   onClose,
//   selectedCity,
//   onCityChange,
//   openConsultationModal
// }: { 
//   isOpen: boolean; 
//   onClose: () => void;
//   selectedCity: string;
//   onCityChange: (city: string) => void;
//   openConsultationModal: () => void;
// }) {
//   const [isResourcesOpen, setIsResourcesOpen] = useState(false);
//   const [isCitiesOpen, setIsCitiesOpen] = useState(false);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//             onClick={onClose}
//           />
          
//           {/* Sidebar */}
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
//             className="fixed top-0 right-0 h-full w-80 max-w-full bg-white z-50 flex flex-col lg:hidden"
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center p-6 border-b">
//               <Image src={logoImage} alt="Home Konnect Logo" width={140} height={32} />
//               <button onClick={onClose} className="p-2">
//                 <X size={24} className="text-gray-600" />
//               </button>
//             </div>

//             {/* Navigation Content */}
//             <div className="flex-1 overflow-y-auto">
//               <nav className="flex flex-col p-6">
//                 {/* Cities Dropdown */}
//                 <div className="mb-6">
//                   <button
//                     onClick={() => setIsCitiesOpen(!isCitiesOpen)}
//                     className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800 mb-2"
//                   >
//                     <span>{selectedCity}</span>
//                     <ChevronDown 
//                       size={20} 
//                       className={`transition-transform duration-300 ${isCitiesOpen ? 'rotate-180' : ''}`}
//                     />
//                   </button>
//                   <AnimatePresence>
//                     {isCitiesOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="overflow-hidden"
//                       >
//                         <div className="pl-4 space-y-2">
//                           {CITIES.map((city) => (
//                             <button
//                               key={city}
//                               onClick={() => {
//                                 onCityChange(city);
//                                 setIsCitiesOpen(false);
//                               }}
//                               className="block w-full text-left py-2 text-gray-600 hover:text-green-600"
//                             >
//                               {city}
//                             </button>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* Main Links */}
//                 <Link href="/home" onClick={onClose} className="py-3 text-lg font-semibold text-gray-800 border-b">
//                   Home
//                 </Link>
//                 <Link href="/about" onClick={onClose} className="py-3 text-lg font-semibold text-gray-800 border-b">
//                   About
//                 </Link>
//                 <Link href="/contact" onClick={onClose} className="py-3 text-lg font-semibold text-gray-800 border-b">
//                   Contact Us
//                 </Link>
//                 <Link href="/blogs" onClick={onClose} className="py-3 text-lg font-semibold text-gray-800 border-b">
//                   Blog
//                 </Link>
//                 <Link href="/careers" onClick={onClose} className="py-3 text-lg font-semibold text-gray-800 border-b">
//                   Careers
//                 </Link>

//                 {/* Resources Dropdown */}
//                 <div className="border-b">
//                   <button
//                     onClick={() => setIsResourcesOpen(!isResourcesOpen)}
//                     className="flex justify-between items-center w-full py-3 text-left text-lg font-semibold text-gray-800"
//                   >
//                     <span>Resources</span>
//                     <ChevronDown 
//                       size={20} 
//                       className={`transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`}
//                     />
//                   </button>
//                   <AnimatePresence>
//                     {isResourcesOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="overflow-hidden"
//                       >
//                         <div className="pl-4 space-y-2 pb-3">
//                           {RESOURCE_LINKS.map((link) => (
//                             <Link
//                               key={link.href}
//                               href={link.href}
//                               onClick={onClose}
//                               className="block py-2 text-gray-600 hover:text-green-600"
//                             >
//                               {link.label}
//                             </Link>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* Call Us Button for Mobile */}
//                 <button
//                   onClick={() => {
//                     openConsultationModal();
//                     onClose();
//                   }}
//                   className="flex items-center justify-center gap-2 mt-6 bg-green-500 text-white py-3 px-6 rounded-full font-semibold"
//                 >
//                   <Phone size={20} /> Call Us
//                 </button>
//               </nav>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }

// // --- Main Hero Component ---
// interface HeroProps {
//   onSearchClick: () => void;
//   searchTerm: string;
//   onSearchChange: (term: string) => void;
// }

// export default function Hero({ onSearchClick, searchTerm, onSearchChange }: HeroProps) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [selectedCity, setSelectedCity] = useState("Chennai");

//   const dropdownRefs = {
//     navbarCity: useRef<HTMLDivElement>(null),
//     searchBarCity: useRef<HTMLDivElement>(null),
//     property: useRef<HTMLDivElement>(null),
//     resources: useRef<HTMLDivElement>(null),
//   };
  
//   const searchBarRef = useRef<HTMLDivElement>(null);
//   const {
//     openLoginModal, 
//     openFilterModal, 
//     openConsultationModal, 
//     isConsultationModalOpen, 
//     closeConsultationModal, 
//     openOfferModal
//   } = useUI();

//   const closeAllDropdowns = useCallback(() => setActiveDropdown(null), []);
//   useClickOutside(Object.values(dropdownRefs), closeAllDropdowns);

//   const handleDropdownToggle = (dropdownName: string) => {
//     setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
//   };

//   const handleCityChange = (city: string) => {
//     setSelectedCity(city);
//     closeAllDropdowns();
//   };
  
//   const handleScrollToSearch = () => {
//     onSearchClick();
//     setTimeout(() => {
//       searchBarRef.current?.scrollIntoView({ 
//         behavior: "smooth", 
//         block: "center" 
//       });
//     }, 100);
//   };

//   // Close mobile menu when window is resized to desktop
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setIsMenuOpen(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

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

//       {/* Consultation Modal */}
//       {isConsultationModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           <ConsultationModal onClose={closeConsultationModal} />
//         </div>
//       )}

//       {/* Mobile Navigation */}
//       <MobileNav 
//         isOpen={isMenuOpen} 
//         onClose={() => setIsMenuOpen(false)}
//         selectedCity={selectedCity}
//         onCityChange={handleCityChange}
//         openConsultationModal={openConsultationModal}
//       />

//       {/* Desktop Navbar */}
//       <header className="absolute top-0 left-0 right-0 z-30">
//         <motion.nav
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center text-white"
//         >
//           {/* Logo */}
//           <Link href="/" className="flex-shrink-0">
//             <Image 
//               src={logoImage} 
//               alt="Home Konnect Logo" 
//               width={160} 
//               height={36}
//               className="w-32 sm:w-40"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-8 font-medium">
//             {/* Cities Dropdown */}
//             <motion.div
//               whileHover={{ y: -2 }}
//               className="relative"
//               ref={dropdownRefs.navbarCity}
//             >
//               <button
//                 onClick={() => handleDropdownToggle("navbarCity")}
//                 className="flex items-center gap-2 hover:text-green-300 transition-colors"
//               >
//                 {selectedCity}
//                 <motion.div
//                   animate={{ rotate: activeDropdown === "navbarCity" ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <ChevronDown size={16} />
//                 </motion.div>
//               </button>
//               <AnimatePresence>
//                 {activeDropdown === "navbarCity" && (
//                   <motion.div
//                     variants={dropdownVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     transition={{ duration: 0.2 }}
//                     className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-xl z-40 origin-top"
//                   >
//                     <ul className="py-1 text-gray-700">
//                       {CITIES.map((city) => (
//                         <li key={city}>
//                           <button
//                             onClick={() => handleCityChange(city)}
//                             className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
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
//               className="bg-white text-gray-700 px-4 py-2 rounded-3xl hover:bg-gray-100 transition-colors"
//             >
//               Home
//             </Link>
//             <Link href="/about" className="hover:text-green-300 transition-colors">
//               About
//             </Link>
//             <Link href="/contact" className="hover:text-green-300 transition-colors">
//               Contact Us
//             </Link>
//             <Link href="/blogs" className="hover:text-green-300 transition-colors">
//               Blog
//             </Link>
//             <Link href="/careers" className="hover:text-green-300 transition-colors">
//               Careers
//             </Link>

//             {/* Resources Dropdown */}
//             <motion.div
//               whileHover={{ y: -2 }}
//               className="relative"
//               ref={dropdownRefs.resources}
//             >
//               <button
//                 onClick={() => handleDropdownToggle("resources")}
//                 className="flex items-center gap-2 hover:text-green-300 transition-colors"
//               >
//                 Resources
//                 <motion.div
//                   animate={{ rotate: activeDropdown === "resources" ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <ChevronDown size={16} />
//                 </motion.div>
//               </button>
//               <AnimatePresence>
//                 {activeDropdown === "resources" && (
//                   <motion.div
//                     variants={dropdownVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-40 origin-top-right"
//                   >
//                     <ul className="py-1 text-gray-700">
//                       {RESOURCE_LINKS.map((link) => (
//                         <li key={link.label}>
//                           <Link
//                             href={link.href}
//                             onClick={closeAllDropdowns}
//                             className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
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

//           {/* Action Buttons */}
//           <div className="flex items-center gap-2 sm:gap-4">
//             <motion.button
//               onClick={openConsultationModal}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="hidden sm:flex items-center gap-2 border border-white px-4 py-2 rounded-3xl font-medium hover:bg-white/10 transition-colors"
//             >
//               <Phone size={16} /> Call Us
//             </motion.button>

//             <motion.button
//               onClick={openOfferModal}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors"
//             >
//               <Gift size={20} />
//             </motion.button>

//             <motion.button
//               onClick={handleScrollToSearch}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors"
//             >
//               <Search size={20} />
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors"
//             >
//               <Link href="/favorites">
//                 <Heart size={20} />
//               </Link>
//             </motion.button>

//             <motion.button
//               onClick={openLoginModal}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="p-2 hover:bg-white/20 rounded-full transition-colors"
//             >
//               <User size={22} />
//             </motion.button>

//             <button
//               onClick={() => setIsMenuOpen(true)}
//               className="lg:hidden p-2 hover:bg-white/20 rounded-full transition-colors"
//             >
//               <Menu size={24} />
//             </button>
//           </div>
//         </motion.nav>
//       </header>

//       {/* Hero Content */}
//       <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
//         <motion.div
//           variants={heroTextContainerVariants}
//           initial="hidden"
//           animate="visible"
//           className="flex flex-col items-center max-w-4xl"
//         >
//           <motion.p
//             variants={heroTextItemVariants}
//             className="text-green-400 font-semibold text-lg mb-2"
//           >
//             0% Brokerage - 100% Delight
//           </motion.p>
//           <motion.h1
//             variants={heroTextItemVariants}
//             className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-2 mb-2"
//           >
//             Connecting To Your <br /> Dream Home
//           </motion.h1>
//           <motion.p
//             variants={heroTextItemVariants}
//             className="text-lg md:text-xl text-gray-200 font-semibold mt-4"
//           >
//             Chennai's Most Trusted Real Estate Agency
//           </motion.p>
//         </motion.div>
//       </div>

//       {/* Search Bar Section */}
//       <div
//         ref={searchBarRef}
//         className="absolute -bottom-20 left-1/2 -translate-x-1/2 z-20 w-[90%] lg:w-3/4 max-w-4xl"
//       >
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{
//             y: { duration: 0.8, ease: "easeOut" },
//             opacity: { duration: 0.6, delay: 1.2 },
//           }}
//         >
//           <div className="bg-white rounded-2xl md:rounded-full shadow-2xl p-4 flex flex-col md:flex-row items-center gap-3 relative">
//             {/* City Dropdown */}
//             <div
//               ref={dropdownRefs.searchBarCity}
//               className="relative flex items-center gap-2 w-full md:w-auto md:border-r border-gray-200 pr-4 pl-3 py-2 md:py-0 cursor-pointer"
//             >
//               <MapPin className="text-gray-400 flex-shrink-0" size={20} />
//               <button
//                 onClick={() => handleDropdownToggle("searchBarCity")}
//                 className="font-semibold text-gray-700 flex items-center gap-1 text-sm md:text-base"
//               >
//                 {selectedCity}
//                 <ChevronDown size={16} className="text-gray-400" />
//               </button>

//               <AnimatePresence>
//                 {activeDropdown === "searchBarCity" && (
//                   <motion.div
//                     variants={dropdownVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-40 z-30"
//                   >
//                     <ul className="text-gray-700 text-sm py-1">
//                       {CITIES.map((city) => (
//                         <li key={city}>
//                           <button
//                             className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
//                             onClick={() => handleCityChange(city)}
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

//             {/* Property Search Input */}
//             <div
//               ref={dropdownRefs.property}
//               className="relative flex-grow w-full"
//             >
//               <Search
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                 size={20}
//               />
//               <input
//                 type="text"
//                 placeholder="Search by property name or type..."
//                 className="w-full pl-10 pr-4 py-3 md:py-2 bg-transparent border-none focus:ring-0 text-gray-800 placeholder:text-gray-500 text-sm md:text-base"
//                 value={searchTerm}
//                 onFocus={() => handleDropdownToggle("property")}
//                 onChange={(e) => onSearchChange(e.target.value)}
//               />

//               <AnimatePresence>
//                 {activeDropdown === "property" && (
//                   <motion.div
//                     variants={dropdownVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 z-30 max-h-60 overflow-y-auto"
//                   >
//                     <ul className="text-gray-700 text-sm py-1">
//                       {PROPERTIES.map((p) => (
//                         <li key={p}>
//                           <button
//                             className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
//                             onClick={() => {
//                               onSearchChange(p);
//                               closeAllDropdowns();
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

//             {/* Action Buttons */}
//             <motion.div
//               variants={searchButtonContainerVariants}
//               initial="hidden"
//               animate="visible"
//               className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-start"
//             >
//               <motion.button
//                 variants={searchButtonVariants}
//                 onClick={openFilterModal}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors flex-shrink-0"
//                 title="Filters"
//               >
//                 <SlidersHorizontal size={20} />
//               </motion.button>
//               <motion.button
//                 variants={searchButtonVariants}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors flex-shrink-0"
//                 title="Settings"
//               >
//                 <Settings2 size={20} />
//               </motion.button>
//               <motion.button
//                 variants={searchButtonVariants}
//                 onClick={onSearchClick}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors flex-shrink-0"
//                 title="Search"
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