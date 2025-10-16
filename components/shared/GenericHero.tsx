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
//               onClick={isHomePage ? onHeaderSearchClick : () => router.push('/searchF')}
//               whileHover={{ scale: 1.1 }}
//             >
//               <Search size={20} />
//             </motion.button>
//             {/* <motion.button whileHover={{ scale: 1.1 }}><Heart size={20} /></motion.button> */}
//                         <motion.button

//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           className="hidden md:block p-2 hover:bg-white/20 rounded-full"
//                         >

//                            <Link href="/favorites" className="hover:text-green-300">
//                           <Heart size={20} />
//                         </Link>
//                         </motion.button>
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




// "use client";

// import React, { useState, useRef, useEffect, useCallback } from "react";
// import Image, { StaticImageData } from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { useRouter } from "next/navigation";
// import {
//   ChevronDown,
//   Phone,
//   Search,
//   Heart,
//   User,
//   Gift,
//   Menu,
//   X,
//   MapPin,
//   SlidersHorizontal,
//   Settings2,
// } from "lucide-react";
// import { useUI } from "../../app/context/UIContext";
// import logoImage from "@/components/homePage/assets/logo.png";

// // --- Constants ---
// const CITIES = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
// const NAV_LINKS = [
//   { label: "Home", href: "/home" },
//   { label: "About", href: "/about" },
//   { label: "Contact Us", href: "/contact" },
//   { label: "Blog", href: "/blogs" },
//   { label: "Careers", href: "/careers" },
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

// // --- Custom Hook ---
// const useClickOutside = (
//   refs: React.RefObject<HTMLElement>[],
//   handler: () => void
// ) => {
//   useEffect(() => {
//     const listener = (event: MouseEvent | TouchEvent) => {
//       if (refs.some((ref) => ref.current?.contains(event.target as Node))) {
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

// // --- Mobile Navigation ---
// function MobileNav({
//   isOpen,
//   onClose,
//   activePage,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
//   activePage: string;
// }) {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ x: "100%" }}
//           animate={{ x: 0 }}
//           exit={{ x: "100%" }}
//           transition={{ type: "tween", ease: "easeInOut" }}
//           className="fixed top-0 right-0 h-full w-full max-w-sm bg-gray-800/90 backdrop-blur-sm z-50 p-6 flex flex-col lg:hidden"
//         >
//           <div className="flex justify-end mb-10">
//             <button onClick={onClose} className="text-white">
//               <X size={28} />
//             </button>
//           </div>
//           <nav className="flex flex-col gap-6 text-white text-xl font-medium">
//             {NAV_LINKS.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 onClick={onClose}
//                 className={
//                   activePage === link.label
//                     ? "text-green-300"
//                     : "hover:text-green-300"
//                 }
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <details className="group">
//               <summary className="flex justify-between items-center cursor-pointer list-none">
//                 <span>Resources</span>
//                 <ChevronDown
//                   size={20}
//                   className="transition-transform duration-300 group-open:rotate-180"
//                 />
//               </summary>
//               <ul className="pl-4 mt-2 flex flex-col gap-4 text-lg font-normal">
//                 {RESOURCE_LINKS.map((link) => (
//                   <li key={link.href}>
//                     <Link
//                       href={link.href}
//                       onClick={onClose}
//                       className="hover:text-green-300"
//                     >
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </details>
//           </nav>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// // --- Main Component ---
// interface GenericHeroProps {
//   title: string;
//   subtitle: string;
//   backgroundImage: StaticImageData | string;
//   activePage:
//     | "Home"
//     | "About"
//     | "Contact Us"
//     | "Blog"
//     | "Careers"
//     | "Resources";
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
//   searchTerm = "",
//   onSearchChange = () => {},
//   searchBarRef,
// }: GenericHeroProps) {
//   const router = useRouter();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [selectedCity, setSelectedCity] = useState("All Cities");

//   const cityDropdownRef = useRef<HTMLDivElement>(null);
//   const resourcesDropdownRef = useRef<HTMLDivElement>(null);

//   const {
//     openLoginModal,
//     openOfferModal,
//     openFilterModal,
//     openConsultationModal,
//   } = useUI();

//   const closeAllDropdowns = useCallback(() => setActiveDropdown(null), []);
//   useClickOutside([cityDropdownRef, resourcesDropdownRef], closeAllDropdowns);

//   const handleDropdownToggle = (name: string) => {
//     setActiveDropdown(activeDropdown === name ? null : name);
//   };

//   const heroHeightClass = showSearchBar
//     ? "h-[85vh] min-h-[650px] lg:h-screen"
//     : "h-[55vh] min-h-[450px] rounded-b-[40px]";

//   return (
//     <div className={`relative overflow-hidden shadow-lg ${heroHeightClass}`}>
//       <motion.div
//         className="absolute inset-0"
//         animate={{ scale: 1.05 }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           repeatType: "mirror",
//           ease: "easeInOut",
//         }}
//       >
//         <Image
//           src={backgroundImage}
//           alt={`${title} background`}
//           fill
//           style={{ objectFit: "cover" }}
//           className="z-0 brightness-[0.7]"
//           priority
//         />
//       </motion.div>
//       <div className="absolute inset-0 bg-black/40 z-10" />

//       <MobileNav
//         isOpen={isMenuOpen}
//         onClose={() => setIsMenuOpen(false)}
//         activePage={activePage}
//       />

//       <header className="absolute top-0 left-0 right-0 z-30">
//         <motion.nav
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//           className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center text-white"
//         >
//           <Link href="/home">
//             <Image
//               src={logoImage}
//               alt="Home Konnect Logo"
//               width={170}
//               height={37}
//             />
//           </Link>

//           <div className="hidden lg:flex items-center gap-8 font-medium">
//             <div className="relative" ref={cityDropdownRef}>
//               <button
//                 onClick={() => handleDropdownToggle("city")}
//                 className="flex items-center gap-2"
//               >
//                 {selectedCity}
//                 <motion.div
//                   animate={{ rotate: activeDropdown === "city" ? 180 : 0 }}
//                 >
//                   <ChevronDown size={16} />
//                 </motion.div>
//               </button>
//               <AnimatePresence>
//                 {activeDropdown === "city" && (
//                   <motion.ul
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className="absolute top-full mt-2 w-48 bg-white text-gray-700 rounded-lg shadow-xl z-40 py-1"
//                   >
//                     {CITIES.map((city) => (
//                       <li key={city}>
//                         <button
//                           onClick={() => {
//                             setSelectedCity(city);
//                             closeAllDropdowns();
//                           }}
//                           className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//                         >
//                           {city}
//                         </button>
//                       </li>
//                     ))}
//                   </motion.ul>
//                 )}
//               </AnimatePresence>
//             </div>

//             {NAV_LINKS.map((link) => (
//               <motion.div key={link.href} whileHover={{ y: -2 }}>
//                 <Link
//                   href={link.href}
//                   className={`${
//                     activePage === link.label
//                       ? "bg-white text-gray-700"
//                       : "hover:text-green-300"
//                   } px-4 py-2 rounded-full transition-colors`}
//                 >
//                   {link.label}
//                 </Link>
//               </motion.div>
//             ))}

//             <div className="relative" ref={resourcesDropdownRef}>
//               <button
//                 onClick={() => handleDropdownToggle("resources")}
//                 className={`flex items-center gap-2 ${
//                   activePage === "Resources"
//                     ? "text-green-300"
//                     : "hover:text-green-300"
//                 }`}
//               >
//                 Resources
//                 <motion.div
//                   animate={{ rotate: activeDropdown === "resources" ? 180 : 0 }}
//                 >
//                   <ChevronDown size={16} />
//                 </motion.div>
//               </button>
//               <AnimatePresence>
//                 {activeDropdown === "resources" && (
//                   <motion.ul
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className="absolute top-full right-0 mt-2 w-56 bg-white text-gray-700 rounded-lg shadow-xl z-40 py-1"
//                   >
//                     {RESOURCE_LINKS.map((link) => (
//                       <li key={link.label}>
//                         <Link
//                           href={link.href}
//                           onClick={closeAllDropdowns}
//                           className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//                         >
//                           {link.label}
//                         </Link>
//                       </li>
//                     ))}
//                   </motion.ul>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 sm:gap-4">
//             <motion.button
//               onClick={openConsultationModal}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="hidden sm:flex items-center gap-2 border px-4 p-1 rounded-3xl font-medium"
//             >
//               <Phone size={16} /> Call Us
//             </motion.button>
//             <motion.button
//               onClick={openOfferModal}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="p-2 hover:bg-white/20 rounded-full"
//             >
//               <Gift size={20} />
//             </motion.button>
//             <motion.button
//               onClick={
//                 showSearchBar ? onHeaderSearchClick : () => router.push("/search")
//               }
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="p-2 hover:bg-white/20 rounded-full"
//             >
//               <Search size={20} />
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="p-2 hover:bg-white/20 rounded-full"
//             >
//               <Link href="/favorites">
//                 <Heart size={20} />
//               </Link>
//             </motion.button>
//             <motion.button
//               onClick={openLoginModal}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <User size={22} />
//             </motion.button>
//             <button
//               onClick={() => setIsMenuOpen(true)}
//               className="lg:hidden p-2"
//             >
//               <Menu size={24} />
//             </button>
//           </div>
//         </motion.nav>
//       </header>

//       <div className="relative z-20 flex flex-col justify-center h-full text-white px-6 md:px-12">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
//           className="container mx-auto"
//         >
//           <motion.h1
//             variants={{
//               hidden: { y: 20, opacity: 0 },
//               visible: { y: 0, opacity: 1 },
//             }}
//             className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2"
//           >
//             {title}
//           </motion.h1>
//           <motion.p
//             variants={{
//               hidden: { y: 20, opacity: 0 },
//               visible: { y: 0, opacity: 1 },
//             }}
//             className="text-lg sm:text-xl text-gray-200"
//           >
//             {subtitle}
//           </motion.p>
//         </motion.div>
//       </div>

//       {showSearchBar && (
//         <div
//           ref={searchBarRef}
//           className="absolute -bottom-24 md:-bottom-16 left-1/2 -translate-x-1/2 z-20 w-[90%] lg:w-3/4 max-w-4xl"
//         >
//           <div className="bg-white rounded-2xl md:rounded-full shadow-2xl p-3 flex flex-col md:flex-row items-center gap-2">
//             <div className="flex items-center gap-2 w-full md:w-auto md:border-r pr-4 pl-4 py-2 md:py-0">
//               <MapPin className="text-gray-400" size={20} />
//               <span className="font-semibold text-gray-700">
//                 {selectedCity}
//               </span>
//             </div>
//             <div className="relative flex-grow w-full">
//               <Search
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                 size={20}
//               />
//               <input
//                 type="text"
//                 placeholder="Search by property name or type..."
//                 className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-gray-800"
//                 value={searchTerm}
//                 onChange={(e) =>
//                   onSearchChange && onSearchChange(e.target.value)
//                 }
//               />
//             </div>
//             <div className="flex items-center gap-2 p-2 md:p-0 w-full md:w-auto justify-evenly">
//               <button
//                 onClick={openFilterModal}
//                 className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
//               >
//                 <SlidersHorizontal size={20} />
//               </button>
//               <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
//                 <Settings2 size={20} />
//               </button>
//               <button
//                 onClick={onSearchClick}
//                 className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
//               >
//                 <Search size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }







"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  Phone,
  Search,
  Heart,
  User,
  Gift,
  Menu,
  X,
  MapPin,
  SlidersHorizontal,
  Settings2,
} from "lucide-react";
import { useUI } from "../../app/context/UIContext";
import logoImage from "@/components/homePage/assets/logo.png";

// --- Constants ---
const CITIES = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
const NAV_LINKS = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/blogs" },
  { label: "Careers", href: "/careers" },
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

// --- Custom Hook ---
const useClickOutside = (
  refs: React.RefObject<HTMLElement>[],
  handler: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (refs.some((ref) => ref.current?.contains(event.target as Node))) {
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
  }, [refs, handler]);
};

// --- Mobile Navigation ---
function MobileNav({
  isOpen,
  onClose,
  activePage,
}: {
  isOpen: boolean;
  onClose: () => void;
  activePage: string;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", ease: "easeInOut" }}
          className="fixed top-0 right-0 h-full w-full max-w-sm bg-gray-800/90 backdrop-blur-sm z-50 p-6 flex flex-col lg:hidden"
        >
          {/* MODIFIED: Added logo here */}
          <div className="flex justify-between items-center mb-10">
            <Image
              src={logoImage}
              alt="Home Konnect Logo"
              width={120}
              height={40}
            />
            <button onClick={onClose} className="text-white p-2">
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col gap-6 text-white text-xl font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={
                  activePage === link.label
                    ? "text-green-300"
                    : "hover:text-green-300"
                }
              >
                {link.label}
              </Link>
            ))}
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span>Resources</span>
                <ChevronDown
                  size={20}
                  className="transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <ul className="pl-4 mt-2 flex flex-col gap-4 text-lg font-normal">
                {RESOURCE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="hover:text-green-300"
                    >
                      {link.label}
                    </Link>
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

// --- Main Component ---
interface GenericHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: StaticImageData | string;
  activePage:
    | "Home"
    | "About"
    | "Contact Us"
    | "Blog"
    | "Careers"
    | "Resources";
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
  searchTerm = "",
  onSearchChange = () => {},
  searchBarRef,
}: GenericHeroProps) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState("All Cities");

  const cityDropdownRef = useRef<HTMLDivElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);

  const {
    openLoginModal,
    openOfferModal,
    openFilterModal,
    openConsultationModal,
  } = useUI();

  const closeAllDropdowns = useCallback(() => setActiveDropdown(null), []);
  useClickOutside([cityDropdownRef, resourcesDropdownRef], closeAllDropdowns);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const heroHeightClass = showSearchBar
    ? "h-[85vh] min-h-[650px] lg:h-screen"
    : "h-[55vh] min-h-[450px] rounded-b-[40px]";

  return (
    <div className={`relative overflow-hidden shadow-lg ${heroHeightClass}`}>
      <motion.div
        className="absolute inset-0"
        animate={{ scale: 1.05 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <Image
          src={backgroundImage}
          alt={`${title} background`}
          fill
          style={{ objectFit: "cover" }}
          className="z-0 brightness-[0.7]"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/40 z-10" />

      <MobileNav
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activePage={activePage}
      />

      <header className="absolute top-0 left-0 right-0 z-30">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center text-white"
        >
          <Link href="/home">
            <Image
              src={logoImage}
              alt="Home Konnect Logo"
              width={170}
              height={37}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8 font-medium">
            <div className="relative" ref={cityDropdownRef}>
              <button
                onClick={() => handleDropdownToggle("city")}
                className="flex items-center gap-2"
              >
                {selectedCity}
                <motion.div
                  animate={{ rotate: activeDropdown === "city" ? 180 : 0 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeDropdown === "city" && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full mt-2 w-48 bg-white text-gray-700 rounded-lg shadow-xl z-40 py-1"
                  >
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

            {NAV_LINKS.map((link) => (
              <motion.div key={link.href} whileHover={{ y: -2 }}>
                <Link
                  href={link.href}
                  className={`${
                    activePage === link.label
                      ? "bg-white text-gray-700"
                      : "hover:text-green-300"
                  } px-4 py-2 rounded-full transition-colors`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <div className="relative" ref={resourcesDropdownRef}>
              <button
                onClick={() => handleDropdownToggle("resources")}
                className={`flex items-center gap-2 ${
                  activePage === "Resources"
                    ? "text-green-300"
                    : "hover:text-green-300"
                }`}
              >
                Resources
                <motion.div
                  animate={{
                    rotate: activeDropdown === "resources" ? 180 : 0,
                  }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeDropdown === "resources" && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 w-56 bg-white text-gray-700 rounded-lg shadow-xl z-40 py-1"
                  >
                    {RESOURCE_LINKS.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          onClick={closeAllDropdowns}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <motion.button
              onClick={openConsultationModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 border px-4 p-1 rounded-3xl font-medium"
            >
              <Phone size={16} /> Call Us
            </motion.button>
            <motion.button
              onClick={openOfferModal}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-white/20 rounded-full"
            >
              <Gift size={20} />
            </motion.button>
            <motion.button
              onClick={
                showSearchBar
                  ? onHeaderSearchClick
                  : () => router.push("/search")
              }
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-white/20 rounded-full"
            >
              <Search size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-white/20 rounded-full"
            >
              <Link href="/favorites">
                <Heart size={20} />
              </Link>
            </motion.button>
            <motion.button
              onClick={openLoginModal}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <User size={22} />
            </motion.button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2"
            >
              <Menu size={24} />
            </button>
          </div>
        </motion.nav>
      </header>

      <div className="relative z-20 flex flex-col justify-center h-full text-white px-6 md:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="container mx-auto"
        >
          <motion.h1
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="text-lg sm:text-xl text-gray-200"
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>

      {showSearchBar && (
        <div
          ref={searchBarRef}
          className="absolute -bottom-24 md:-bottom-16 left-1/2 -translate-x-1/2 z-20 w-[90%] lg:w-3/4 max-w-4xl"
        >
          <div className="bg-white rounded-2xl md:rounded-full shadow-2xl p-3 flex flex-col md:flex-row items-center gap-2">
            <div className="flex items-center gap-2 w-full md:w-auto md:border-r pr-4 pl-4 py-2 md:py-0">
              <MapPin className="text-gray-400" size={20} />
              <span className="font-semibold text-gray-700">
                {selectedCity}
              </span>
            </div>
            <div className="relative flex-grow w-full">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by property name or type..."
                className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-gray-800"
                value={searchTerm}
                onChange={(e) =>
                  onSearchChange && onSearchChange(e.target.value)
                }
              />
            </div>
            <div className="flex items-center gap-2 p-2 md:p-0 w-full md:w-auto justify-evenly">
              <button
                onClick={openFilterModal}
                className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
              >
                <SlidersHorizontal size={20} />
              </button>
              <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                <Settings2 size={20} />
              </button>
              <button
                onClick={onSearchClick}
                className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}