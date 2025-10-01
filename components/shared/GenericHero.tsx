



// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import Image, { StaticImageData } from 'next/image';
// import Link from 'next/link';
// import { motion, AnimatePresence, Variants } from 'framer-motion';
// import { ChevronDown, Phone, Search, Heart, User, Gift, Menu, X, MapPin, SlidersHorizontal, Settings2 } from 'lucide-react';
// import { useUI } from '../../app/context/UIContext';
// import logoImage from "@/components/homePage/assets/logo.png";

// // Define the props the component will accept
// interface GenericHeroProps {
//   title: string;
//   subtitle: string;
//   backgroundImage: StaticImageData | string;
//   activePage: 'Home' | 'About' | 'Contact Us' | 'Blog' | 'Careers';
//   showSearchBar?: boolean;
//   onSearchClick?: () => void;
//   onHeaderSearchClick?: () => void;
//   searchTerm?: string;
//   onSearchChange?: (term: string) => void;
//   searchBarRef?: React.RefObject<HTMLDivElement>;
// }

// export default function GenericHero({
//   title,
//   subtitle,
//   backgroundImage,
//   activePage,
//   showSearchBar = false,
//   onSearchClick = () => {},
//   onHeaderSearchClick = () => {},
//   searchTerm = '',
//   onSearchChange = () => {},
//   searchBarRef,
// }: GenericHeroProps) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
//   // ✅ State and ref for the city dropdown are now back inside this component
//   const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
//   const cityDropdownRef = useRef<HTMLDivElement>(null);
//   const [selectedCity, setSelectedCity] = useState("All Cities");
//   const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];

//   const { openLoginModal, openOfferModal, openFilterModal, openConsultationModal } = useUI();

//   // ✅ useEffect to handle closing the dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target as Node)) {
//         setIsCityDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Animation variants
//   const contentVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } } };
//   const itemVariants: Variants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.5 } } };
//   const dropdownVariants: Variants = { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 } };

//   const navLinks = ["Home", "About", "Contact Us", "Blog", "Careers"];
//   const navHrefs = ["/home", "/about", "/contact", "/blogs", "/careers"];

//   return (
//     <div className={`relative overflow-hidden shadow-lg ${showSearchBar ? 'h-screen' : 'h-[55vh] min-h-[450px] rounded-b-[40px]'}`}>
//       <motion.div className="absolute inset-0" animate={{ scale: 1.05 }} transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}>
//         <Image src={backgroundImage} alt={`${title} background`} fill style={{ objectFit: 'cover' }} className="z-0 brightness-[0.7]" priority />
//       </motion.div>
//       <div className="absolute inset-0 bg-black/40 z-10" />

//       {/* Header */}
//       <header className="absolute top-0 left-0 right-0 z-30">
//         <motion.nav
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//           className="container mx-auto px-6 py-4 flex justify-between items-center text-white"
//         >
//           <Link href="/home">
//             <Image src={logoImage} alt="Home Konnect Logo" width={170} height={37} />
//           </Link>
          
//           <div className="hidden lg:flex items-center gap-8 font-medium">
//             {/* ✅ The "All Cities" dropdown is now here */}
//             <motion.div className="relative" ref={cityDropdownRef}>
//               <button onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)} className="flex items-center gap-2">
//                 {selectedCity}
//                 <motion.div animate={{ rotate: isCityDropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
//                   <ChevronDown size={16} />
//                 </motion.div>
//               </button>
//               <AnimatePresence>
//                 {isCityDropdownOpen && (
//                   <motion.div
//                     variants={dropdownVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-xl z-40 origin-top"
//                   >
//                     <ul className="py-1 text-gray-700">
//                       {cities.map((city) => (
//                         <li key={city}>
//                           <button
//                             onClick={() => { setSelectedCity(city); setIsCityDropdownOpen(false); }}
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

//             {/* Navigation Links */}
//             {navLinks.map((link, index) => (
//               <motion.div key={link} whileHover={{ y: -2 }}>
//                 <Link
//                   href={navHrefs[index]}
//                   className={`${activePage === link ? 'bg-white text-gray-700' : 'hover:text-green-300'} px-4 py-2 rounded-full transition-colors`}
//                 >
//                   {link}
//                 </Link>
//               </motion.div>
//             ))}
//           </div>

//           <div className="flex items-center gap-4">
//             <motion.button onClick={openConsultationModal} whileHover={{ scale: 1.05 }} className="hidden sm:flex items-center gap-2 border border-white/50 backdrop-blur-sm px-4 py-2 rounded-full font-medium">
//               <Phone size={16} /> Call Us
//             </motion.button>
//             <motion.button onClick={openOfferModal} whileHover={{ scale: 1.1 }}><Gift size={20} /></motion.button>
//             <motion.button onClick={onHeaderSearchClick} whileHover={{ scale: 1.1 }}><Search size={20} /></motion.button>
//             <motion.button whileHover={{ scale: 1.1 }}><Heart size={20} /></motion.button>
//             <motion.button onClick={openLoginModal} whileHover={{ scale: 1.1 }}><User size={22} /></motion.button>
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2"><Menu size={24} /></button>
//           </div>
//         </motion.nav>
//       </header>

//       {/* Hero Content */}
//       <div className="relative z-20 flex flex-col justify-center h-full text-white px-6 md:px-12">
//         <motion.div variants={contentVariants} initial="hidden" animate="visible" className="container mx-auto">
//           <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-2">{title}</motion.h1>
//           <motion.p variants={itemVariants} className="text-xl text-gray-200">{subtitle}</motion.p>
//         </motion.div>
//       </div>

//       {/* Search Bar (Only for Homepage) */}
//       {showSearchBar && (
//         <div ref={searchBarRef} className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 w-[90%] lg:w-3/4 max-w-4xl">
//           <div className="bg-white rounded-full shadow-2xl p-2 flex flex-col md:flex-row items-center gap-2">
//             <div className="flex items-center gap-2 w-full md:w-auto md:border-r pr-4 pl-4 py-2 md:py-0">
//               <MapPin className="text-gray-400" size={20} />
//               <button className="font-semibold text-gray-700">{selectedCity}</button>
//               <ChevronDown className="text-gray-400" size={16} />
//             </div>
//             <div className="relative flex-grow w-full">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search by property name or type..."
//                 className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-gray-800"
//                 value={searchTerm}
//                 onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
//               />
//             </div>
//             <div className="flex items-center gap-2 p-2 md:p-0">
//               <button onClick={openFilterModal} className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600"><SlidersHorizontal size={20} /></button>
//               <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600"><Settings2 size={20} /></button>
//               <button onClick={onSearchClick} className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600"><Search size={20} /></button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }





// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import Image, { StaticImageData } from 'next/image';
// import Link from 'next/link';
// import { motion, AnimatePresence, Variants } from 'framer-motion';
// import { usePathname, useRouter } from 'next/navigation';
// import { ChevronDown, Phone, Search, Heart, User, Gift, Menu, X, MapPin, SlidersHorizontal, Settings2 } from 'lucide-react';
// import { useUI } from '../../app/context/UIContext';
// import logoImage from "@/components/homePage/assets/logo.png";

// interface GenericHeroProps {
//   title: string;
//   subtitle: string;
//   backgroundImage: StaticImageData | string;
//   activePage: 'Home' | 'About' | 'Contact Us' | 'Blog' | 'Careers';
//   showSearchBar?: boolean;
//   onSearchClick?: () => void;
//   onHeaderSearchClick?: () => void;
//   searchTerm?: string;
//   onSearchChange?: (term: string) => void;
//   searchBarRef?: React.RefObject<HTMLDivElement>;
// }

// export default function GenericHero({
//   title,
//   subtitle,
//   backgroundImage,
//   activePage,
//   showSearchBar = false,
//   onSearchClick = () => {},
//   onHeaderSearchClick = () => {},
//   searchTerm = '',
//   onSearchChange = () => {},
//   searchBarRef,
// }: GenericHeroProps) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const isHomePage = pathname === '/home';

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
//   const cityDropdownRef = useRef<HTMLDivElement>(null);
//   const [selectedCity, setSelectedCity] = useState("All Cities");
//   const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
//   const { openLoginModal, openOfferModal, openFilterModal, openConsultationModal } = useUI();

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target as Node)) {
//         setIsCityDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);
  
//   const contentVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } } };
//   const itemVariants: Variants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.5 } } };
//   const dropdownVariants: Variants = { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 } };

//   const navLinks = ["Home", "About", "Contact Us", "Blog", "Careers"];
//   const navHrefs = ["/home", "/about", "/contact", "/blogs", "/careers"];

//   return (
//     <div className={`relative overflow-hidden shadow-lg ${showSearchBar ? 'h-screen' : 'h-[55vh] min-h-[450px] rounded-b-[40px]'}`}>
//       <motion.div className="absolute inset-0" animate={{ scale: 1.05 }} transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}>
//         <Image src={backgroundImage} alt={`${title} background`} fill style={{ objectFit: 'cover' }} className="z-0 brightness-[0.7]" priority />
//       </motion.div>
//       <div className="absolute inset-0 bg-black/40 z-10" />

//       <header className="absolute top-0 left-0 right-0 z-30">
//         <motion.nav
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//           className="container mx-auto px-6 py-4 flex justify-between items-center text-white"
//         >
//           <Link href="/home">
//             <Image src={logoImage} alt="Home Konnect Logo" width={170} height={37} />
//           </Link>
          
//           <div className="hidden lg:flex items-center gap-8 font-medium">
//             <motion.div className="relative" ref={cityDropdownRef}>
//               <button onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)} className="flex items-center gap-2">
//                 {selectedCity}
//                 <motion.div animate={{ rotate: isCityDropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
//                   <ChevronDown size={16} />
//                 </motion.div>
//               </button>
//               <AnimatePresence>
//                 {isCityDropdownOpen && (
//                   <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-xl z-40 origin-top">
//                     <ul className="py-1 text-gray-700">
//                       {cities.map((city) => (
//                         <li key={city}>
//                           <button onClick={() => { setSelectedCity(city); setIsCityDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">{city}</button>
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>

//             {navLinks.map((link, index) => (
//               <motion.div key={link} whileHover={{ y: -2 }}>
//                 <Link
//                   href={navHrefs[index]}
//                   className={`${activePage === link ? 'bg-white text-gray-700' : 'hover:text-green-300'} px-4 py-2 rounded-full transition-colors`}
//                 >
//                   {link}
//                 </Link>
//               </motion.div>
//             ))}
//           </div>

//           <div className="flex items-center gap-4">
//             <motion.button onClick={openConsultationModal} whileHover={{ scale: 1.05 }} className="hidden sm:flex items-center gap-2 border border-white/50 backdrop-blur-sm px-4 py-2 rounded-full font-medium">
//               <Phone size={16} /> Call Us
//             </motion.button>
//             <motion.button onClick={openOfferModal} whileHover={{ scale: 1.1 }}><Gift size={20} /></motion.button>
//             <motion.button 
//               onClick={isHomePage ? onHeaderSearchClick : () => router.push('/home?view=list')}
//               whileHover={{ scale: 1.1 }}
//             >
//               <Search size={20} />
//             </motion.button>
//             <motion.button whileHover={{ scale: 1.1 }}><Heart size={20} /></motion.button>
//             <motion.button onClick={openLoginModal} whileHover={{ scale: 1.1 }}><User size={22} /></motion.button>
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2"><Menu size={24} /></button>
//           </div>
//         </motion.nav>
//       </header>

//       <div className="relative z-20 flex flex-col justify-center h-full text-white px-6 md:px-12">
//         <motion.div variants={contentVariants} initial="hidden" animate="visible" className="container mx-auto">
//           <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-2">{title}</motion.h1>
//           <motion.p variants={itemVariants} className="text-xl text-gray-200">{subtitle}</motion.p>
//         </motion.div>
//       </div>

//       {showSearchBar && (
//         <div ref={searchBarRef} className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 w-[90%] lg:w-3/4 max-w-4xl">
//           <div className="bg-white rounded-full shadow-2xl p-2 flex flex-col md:flex-row items-center gap-2">
//             <div className="flex items-center gap-2 w-full md:w-auto md:border-r pr-4 pl-4 py-2 md:py-0">
//               <MapPin className="text-gray-400" size={20} />
//               <button className="font-semibold text-gray-700">{selectedCity}</button>
//               <ChevronDown className="text-gray-400" size={16} />
//             </div>
//             <div className="relative flex-grow w-full">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search by property name or type..."
//                 className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-gray-800"
//                 value={searchTerm}
//                 onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
//               />
//             </div>
//             <div className="flex items-center gap-2 p-2 md:p-0">
//               <button onClick={openFilterModal} className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600"><SlidersHorizontal size={20} /></button>
//               <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600"><Settings2 size={20} /></button>
//               <button onClick={onSearchClick} className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600"><Search size={20} /></button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, Phone, Search, Heart, User, Gift, Menu, X, MapPin, SlidersHorizontal, Settings2 } from 'lucide-react';
import { useUI } from '../../app/context/UIContext';
import logoImage from "@/components/homePage/assets/logo.png";

interface GenericHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: StaticImageData | string;
  activePage: 'Home' | 'About' | 'Contact Us' | 'Blog' | 'Careers';
  showSearchBar?: boolean;
  onSearchClick?: () => void;
  onHeaderSearchClick?: () => void;
  searchTerm?: string;
  onSearchChange?: (term: string) => void;
  searchBarRef?: React.RefObject<HTMLDivElement>;
}

export default function GenericHero({
  title,
  subtitle,
  backgroundImage,
  activePage,
  showSearchBar = false,
  onSearchClick = () => {},
  onHeaderSearchClick = () => {},
  searchTerm = '',
  onSearchChange = () => {},
  searchBarRef,
}: GenericHeroProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === '/home';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const cityDropdownRef = useRef<HTMLDivElement>(null);
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
  const { openLoginModal, openOfferModal, openFilterModal, openConsultationModal } = useUI();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target as Node)) {
        setIsCityDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const contentVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } } };
  const itemVariants: Variants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.5 } } };
  const dropdownVariants: Variants = { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 } };

  const navLinks = ["Home", "About", "Contact Us", "Blog", "Careers"];
  const navHrefs = ["/home", "/about", "/contact", "/blogs", "/careers"];

  return (
    <div className={`relative overflow-hidden shadow-lg ${showSearchBar ? 'h-screen' : 'h-[55vh] min-h-[450px] rounded-b-[40px]'}`}>
      <motion.div className="absolute inset-0" animate={{ scale: 1.05 }} transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}>
        <Image src={backgroundImage} alt={`${title} background`} fill style={{ objectFit: 'cover' }} className="z-0 brightness-[0.7]" priority />
      </motion.div>
      <div className="absolute inset-0 bg-black/40 z-10" />

      <header className="absolute top-0 left-0 right-0 z-30">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="container mx-auto px-6 py-4 flex justify-between items-center text-white"
        >
          <Link href="/home">
            <Image src={logoImage} alt="Home Konnect Logo" width={170} height={37} />
          </Link>
          
          <div className="hidden lg:flex items-center gap-8 font-medium">
            <motion.div className="relative" ref={cityDropdownRef}>
              <button onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)} className="flex items-center gap-2">
                {selectedCity}
                <motion.div animate={{ rotate: isCityDropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={16} />
                </motion.div>
              </button>
              <AnimatePresence>
                {isCityDropdownOpen && (
                  <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-xl z-40 origin-top">
                    <ul className="py-1 text-gray-700">
                      {cities.map((city) => (
                        <li key={city}>
                          <button onClick={() => { setSelectedCity(city); setIsCityDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">{city}</button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {navLinks.map((link, index) => (
              <motion.div key={link} whileHover={{ y: -2 }}>
                <Link
                  href={navHrefs[index]}
                  className={`${activePage === link ? 'bg-white text-gray-700' : 'hover:text-green-300'} px-4 py-2 rounded-full transition-colors`}
                >
                  {link}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button onClick={openConsultationModal} whileHover={{ scale: 1.05 }} className="hidden sm:flex items-center gap-2 border border-white/50 backdrop-blur-sm px-4 py-2 rounded-full font-medium">
              <Phone size={16} /> Call Us
            </motion.button>
            <motion.button onClick={openOfferModal} whileHover={{ scale: 1.1 }}><Gift size={20} /></motion.button>
            <motion.button 
              onClick={isHomePage ? onHeaderSearchClick : () => router.push('/home?view=list')}
              whileHover={{ scale: 1.1 }}
            >
              <Search size={20} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }}><Heart size={20} /></motion.button>
            <motion.button onClick={openLoginModal} whileHover={{ scale: 1.1 }}><User size={22} /></motion.button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2"><Menu size={24} /></button>
          </div>
        </motion.nav>
      </header>

      <div className="relative z-20 flex flex-col justify-center h-full text-white px-6 md:px-12">
        <motion.div variants={contentVariants} initial="hidden" animate="visible" className="container mx-auto">
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-2">{title}</motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-200">{subtitle}</motion.p>
        </motion.div>
      </div>

      {showSearchBar && (
        <div ref={searchBarRef} className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 w-[90%] lg:w-3/4 max-w-4xl">
          <div className="bg-white rounded-full shadow-2xl p-2 flex flex-col md:flex-row items-center gap-2">
            <div className="flex items-center gap-2 w-full md:w-auto md:border-r pr-4 pl-4 py-2 md:py-0">
              <MapPin className="text-gray-400" size={20} />
              <button className="font-semibold text-gray-700">{selectedCity}</button>
              <ChevronDown className="text-gray-400" size={16} />
            </div>
            <div className="relative flex-grow w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by property name or type..."
                className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-gray-800"
                value={searchTerm}
                onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 p-2 md:p-0">
              <button onClick={openFilterModal} className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600"><SlidersHorizontal size={20} /></button>
              <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600"><Settings2 size={20} /></button>
              <button onClick={onSearchClick} className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600"><Search size={20} /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}