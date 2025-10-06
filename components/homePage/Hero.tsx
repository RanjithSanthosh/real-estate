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
//   UserCircle2,
//   Menu,
//   X,
//   User,
//   Gift,
// } from "lucide-react";
// import heroImage from "./assets/Hero.png";
// import logoImage from "./assets/logo.png";
// import { useUI } from "../../app/context/UIContext";

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
//   const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
//   const [selectedCity, setSelectedCity] = useState("All Cities");
//   const cityDropdownRef = useRef<HTMLDivElement>(null);
  
//   // Create a ref for the search bar element
//   const searchBarRef = useRef<HTMLDivElement>(null);
  
//   const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
//   const { openLoginModal, openFilterModal, openOfferModal, openConsultationModal, isConsultationModalOpen, closeConsultationModal } = useUI();
//   // ...existing code...

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

//   // Handler function to scroll to the search bar
//   const handleScrollToSearch = () => {
//     // First, execute the original function to show the property list
//     onSearchClick(); 
    
//     // Then, scroll smoothly to the search bar element
//     setTimeout(() => {
//         searchBarRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
//     }, 100); // Small delay for the layout to update
//   };

//   return (
//     <div className="relative h-[70vh] min-h-[600px] lg:h-screen">
//       <Image
//         src={heroImage}
//         alt="Beautiful modern house"
//         fill
//         style={{ objectFit: "cover" }}
//         className="z-0"
//         priority
//       />
//       <div className="absolute inset-0 bg-black/50 z-10" />
//       {/* Consultation Modal Popup */}
//       {isConsultationModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           <ConsultationModal onClose={closeConsultationModal} />
//         </div>
//       )}

//       {/* Header */}
//       <header className="absolute top-0 left-0 right-0 z-30">
//         <nav className="container mx-auto px-6 py-4 flex justify-between items-center text-white">
//           <div>
//             <Image className="" src={logoImage} alt="Home Konnect Logo" />
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center gap-8 font-medium">
//             <div className="relative" ref={cityDropdownRef}>
//               <button
//                 onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
//                 className="flex items-center gap-2 hover:text-green-300 transition-colors"
//               >
//                 {selectedCity}
//                 <ChevronDown
//                   size={16}
//                   className={`transition-transform duration-300 ${isCityDropdownOpen ? "rotate-180" : ""}`}
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
//             <Link href="/home" className="bg-white rounded-3xl text-gray-700 backdrop-blur-sm px-4 py-2 border border-gray-200 hover:border-gray-300 transition-colors">Home</Link>
//             <Link href="/about" className="hover:text-green-300 transition-colors">About</Link>
//             <Link href="/contact" className="hover:text-green-300 transition-colors">Contact Us</Link>
//             <Link href="/blogs" className="hover:text-green-300 transition-colors">Blog</Link>
//             <Link href="/careers" className="hover:text-green-300 transition-colors">Careers</Link>
//           </div>

//           <div className="flex items-center gap-4">
//             <button onClick={openConsultationModal} className="hidden sm:flex items-center gap-2 border backdrop-blur- px-4 py-2 rounded-3xl font-medium">
//               <Phone size={16} /> Call Us{" "}
//               <Image src="/assets/indiaFlag.png" alt="India flag" width={20} height={15} className="ml-1"/>
//             </button>
//             <button
//               onClick={openOfferModal}
//               className="p-2 hover:bg-white/20 rounded-full transition-colors"
//             >
//               <Gift size={20} className="text-white" />
//             </button>

//             {/* This Search icon now scrolls down */}
//             <button
//               onClick={handleScrollToSearch}
//               className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors"
//             >
//               <Search size={20} />
//             </button>
//             <button className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors">
//               <Heart size={20} />
//             </button>
//             <button onClick={openLoginModal}>
//               <User size={22} className="cursor-pointer" />
//             </button>

//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="lg:hidden p-2 hover:bg-white/20 rounded-full"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <div className="absolute top-full right-6 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4 flex flex-col gap-4 lg:hidden">
//               {/* ... mobile links ... */}
//             </div>
//           )}
//         </nav>
//       </header>

//       {/* Hero Content */}
//       <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
//         <p className="text-green-400 font-semibold text-lg mb-2">0% Brokerage - 100% Delight</p>
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight">Connecting To Your</h1>
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Dream Home</h1>
//         <p className="text-lg text-gray-200">Chennai's Most Trusted Real Estate Agency</p>
//       </div>

//       {/* Search Bar */}
//       <div ref={searchBarRef} className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 w-[90%] lg:w-3/4 max-w-4xl">
//         <div className="bg-white rounded-full shadow-2xl p-2 flex flex-col md:flex-row items-center gap-2">
//           <div className="flex items-center gap-2 w-full md:w-auto md:border-r pr-4 pl-4 py-2 md:py-0">
//             <MapPin className="text-gray-400" size={20} />
//             <button className="font-semibold text-gray-700">All Cities</button>
//             <ChevronDown className="text-gray-400" size={16} />
//           </div>
//           <div className="relative flex-grow w-full">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type="text"
//               placeholder="Search by property name or type..."
//               className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-gray-800"
//               value={searchTerm}
//               onChange={(e) => onSearchChange(e.target.value)}
//             />
//           </div>
//           <div className="flex items-center gap-2 p-2 md:p-0">
//             <button onClick={openFilterModal} className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
//               <SlidersHorizontal size={20} />
//             </button>
//             <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
//               <Settings2 size={20} />
//             </button>
//             <button
//               onClick={onSearchClick}
//               className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
//             >
//               <Search size={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








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
// // Import framer-motion for animations
// import { motion, AnimatePresence } from "framer-motion";

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
//   const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
//   const [selectedCity, setSelectedCity] = useState("All Cities");
//   const cityDropdownRef = useRef<HTMLDivElement>(null);

//   // Create a ref for the search bar element
//   const searchBarRef = useRef<HTMLDivElement>(null);

//   const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
//   const {
//     openLoginModal,
//     openFilterModal,
//     openOfferModal,
//     openConsultationModal,
//     isConsultationModalOpen,
//     closeConsultationModal,
//   } = useUI();

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

//   // Handler function to scroll to the search bar
//   const handleScrollToSearch = () => {
//     // First, execute the original function to show the property list
//     onSearchClick();

//     // Then, scroll smoothly to the search bar element
//     setTimeout(() => {
//       searchBarRef.current?.scrollIntoView({
//         behavior: "smooth",
//         block: "center",
//       });
//     }, 100); // Small delay for the layout to update
//   };

//   // Animation variants for hero text container to stagger children
//   const heroTextContainerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   // Animation variants for individual hero text lines
//   const heroTextItemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   // Variants for dropdown menus
//   const dropdownVariants = {
//     hidden: { opacity: 0, y: -10, scale: 0.95 },
//     visible: { opacity: 1, y: 0, scale: 1 },
//     exit: { opacity: 0, y: -10, scale: 0.95 },
//   };

//   return (
//     <div className="relative h-[70vh] min-h-[600px] lg:h-screen">
//       <Image
//         src={heroImage}
//         alt="Beautiful modern house"
//         fill
//         style={{ objectFit: "cover" }}
//         className="z-0"
//         priority
//       />
//       <div className="absolute inset-0 bg-black/50 z-10" />
//       {/* Consultation Modal Popup */}
//       {isConsultationModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           <ConsultationModal onClose={closeConsultationModal} />
//         </div>
//       )}

//       {/* Header */}
//       <header className="absolute top-0 left-0 right-0 z-30">
//         <motion.nav
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//           className="container mx-auto px-6 py-4 flex justify-between items-center text-white"
//         >
//           <div>
//             <Image className="" src={logoImage} alt="Home Konnect Logo" />
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center gap-8 font-medium">
//             <motion.div
//               whileHover={{ y: -2 }}
//               className="relative"
//               ref={cityDropdownRef}
//             >
//               <button
//                 onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
//                 className="flex items-center gap-2"
//               >
//                 {selectedCity}
//                 <motion.div
//                   animate={{ rotate: isCityDropdownOpen ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
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
//                     transition={{ duration: 0.2, ease: "easeInOut" }}
//                     className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-xl z-40 origin-top"
//                   >
//                     <ul className="py-1 text-gray-700">
//                       {cities.map((city) => (
//                         <li key={city}>
//                           <button
//                             onClick={() => {
//                               setSelectedCity(city);
//                               setIsCityDropdownOpen(false);
//                             }}
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
//             <motion.div whileHover={{ y: -2 }}>
//               <Link
//                 href="/home"
//                 className="bg-white rounded-3xl text-gray-700 backdrop-blur-sm px-4 py-2 border border-gray-200"
//               >
//                 Home
//               </Link>
//             </motion.div>
//             <motion.div whileHover={{ y: -2 }}>
//               <Link href="/about" className="hover:text-green-300 transition-colors">About</Link>
//             </motion.div>
//             <motion.div whileHover={{ y: -2 }}>
//               <Link href="/contact" className="hover:text-green-300 transition-colors">Contact Us</Link>
//             </motion.div>
//             <motion.div whileHover={{ y: -2 }}>
//               <Link href="/blogs" className="hover:text-green-300 transition-colors">Blog</Link>
//             </motion.div>
//             <motion.div whileHover={{ y: -2 }}>
//               <Link href="/careers" className="hover:text-green-300 transition-colors">Careers</Link>
//             </motion.div>
//           </div>

//           <div className="flex items-center gap-4">
//             <motion.button
//               onClick={openConsultationModal}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="hidden sm:flex items-center gap-2 border backdrop-blur-sm px-4 py-2 rounded-3xl font-medium"
//             >
//               <Phone size={16} /> Call Us{" "}
//               <Image src="/assets/indiaFlag.png" alt="India flag" width={20} height={15} className="ml-1"/>
//             </motion.button>
//             <motion.button
//               onClick={openOfferModal}
//               whileHover={{ scale: 1.1, rotate: 10 }}
//               whileTap={{ scale: 0.9 }}
//               className="p-2 hover:bg-white/20 rounded-full transition-colors"
//             >
//               <Gift size={20} className="text-white" />
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
//               <Heart size={20} />
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

//           {/* Mobile Menu */}
//           <AnimatePresence>
//             {isMenuOpen && (
//               <motion.div
//                 variants={dropdownVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 transition={{ duration: 0.2, ease: "easeInOut" }}
//                 className="absolute top-full right-6 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4 flex flex-col gap-4 lg:hidden origin-top-right"
//               >
//                 {/* ... mobile links ... */}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.nav>
//       </header>

//       {/* Hero Content */}
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
//             className="text-4xl md:text-6xl font-bold leading-tight"
//           >
//             Connecting To Your
//           </motion.h1>
//           <motion.h1
//             variants={heroTextItemVariants}
//             className="text-4xl md:text-6xl font-bold leading-tight mb-4"
//           >
//             Dream Home
//           </motion.h1>
//           <motion.p
//             variants={heroTextItemVariants}
//             className="text-lg text-gray-200"
//           >
//             Chennai's Most Trusted Real Estate Agency
//           </motion.p>
//         </motion.div>
//       </div>

//       {/* Search Bar */}
//       <motion.div
//         ref={searchBarRef}
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
//         className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 w-[90%] lg:w-3/4 max-w-4xl"
//       >
//         <div className="bg-white rounded-full shadow-2xl p-2 flex flex-col md:flex-row items-center gap-2">
//           <div className="flex items-center gap-2 w-full md:w-auto md:border-r pr-4 pl-4 py-2 md:py-0">
//             <MapPin className="text-gray-400" size={20} />
//             <button className="font-semibold text-gray-700">All Cities</button>
//             <ChevronDown className="text-gray-400" size={16} />
//           </div>
//           <div className="relative flex-grow w-full">
//             <Search
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//               size={20}
//             />
//             <input
//               type="text"
//               placeholder="Search by property name or type..."
//               className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-gray-800 placeholder:text-gray-500"
//               value={searchTerm}
//               onChange={(e) => onSearchChange(e.target.value)}
//             />
//           </div>
//           <div className="flex items-center gap-2 p-2 md:p-0">
//             <motion.button
//               onClick={openFilterModal}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="p-3 bg-green-500 text-white rounded-full"
//             >
//               <SlidersHorizontal size={20} />
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="p-3 bg-green-500 text-white rounded-full"
//             >
//               <Settings2 size={20} />
//             </motion.button>
//             <motion.button
//               onClick={onSearchClick}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="p-3 bg-green-500 text-white rounded-full"
//             >
//               <Search size={20} />
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }






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
//   const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
//   const [selectedCity, setSelectedCity] = useState("All Cities");
//   const cityDropdownRef = useRef<HTMLDivElement>(null);
//   const searchBarRef = useRef<HTMLDivElement>(null);

//   const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
//   const {
//     openLoginModal,
//     openFilterModal,
//     openOfferModal,
//     openConsultationModal,
//     isConsultationModalOpen,
//     closeConsultationModal,
//   } = useUI();

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

//   const handleScrollToSearch = () => {
//     onSearchClick();
//     setTimeout(() => {
//       searchBarRef.current?.scrollIntoView({
//         behavior: "smooth",
//         block: "center",
//       });
//     }, 100);
//   };

//   // Animation Variants
//   const heroTextContainerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 },
//     },
//   };

//   const heroTextItemVariants: Variants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
//   };

//   const dropdownVariants: Variants = {
//     hidden: { opacity: 0, y: -10, scale: 0.95 },
//     visible: { opacity: 1, y: 0, scale: 1 },
//     exit: { opacity: 0, y: -10, scale: 0.95 },
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
//     // FIX: Removed 'overflow-hidden' from the main container to prevent it from clipping the search bar.
//     <div className="relative h-[70vh] min-h-[600px] lg:h-screen">
//       {/* FIX: Created a new container for the background image that can safely have 'overflow-hidden'. */}
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
//           <Image src={heroImage} alt="Beautiful modern house" fill style={{ objectFit: "cover" }} className="z-0" priority />
//         </motion.div>
//       </div>

//       <div className="absolute inset-0 bg-black/50 z-10" />

//       {isConsultationModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           <ConsultationModal onClose={closeConsultationModal} />
//         </div>
//       )}

//       <header className="absolute top-0 left-0 right-0 z-30">
//         <motion.nav
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//           className="container mx-auto px-6 py-4 flex justify-between items-center text-white"
//         >
//           <div>
//             <Image className="" src={logoImage} alt="Home Konnect Logo" />
//           </div>

//           <div className="hidden lg:flex items-center gap-8 font-medium">
//              <motion.div whileHover={{ y: -2 }} className="relative" ref={cityDropdownRef}>
//                <button onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)} className="flex items-center gap-2">
//                  {selectedCity}
//                  <motion.div animate={{ rotate: isCityDropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}><ChevronDown size={16} /></motion.div>
//                </button>
//                <AnimatePresence>
//                  {isCityDropdownOpen && (
//                    <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.2, ease: "easeInOut" }} className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-xl z-40 origin-top">
//                      <ul className="py-1 text-gray-700">{cities.map((city) => (<li key={city}><button onClick={() => { setSelectedCity(city); setIsCityDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors">{city}</button></li>))}</ul>
//                    </motion.div>
//                  )}
//                </AnimatePresence>
//              </motion.div>
//              <motion.div whileHover={{ y: -2 }}><Link href="/home" className="bg-white rounded-3xl text-gray-700 backdrop-blur-sm px-4 py-2 border border-gray-200">Home</Link></motion.div>
//              <motion.div whileHover={{ y: -2 }}><Link href="/about" className="hover:text-green-300 transition-colors">About</Link></motion.div>
//              <motion.div whileHover={{ y: -2 }}><Link href="/contact" className="hover:text-green-300 transition-colors">Contact Us</Link></motion.div>
//              <motion.div whileHover={{ y: -2 }}><Link href="/blogs" className="hover:text-green-300 transition-colors">Blog</Link></motion.div>
//              <motion.div whileHover={{ y: -2 }}><Link href="/careers" className="hover:text-green-300 transition-colors">Careers</Link></motion.div>
//           </div>

//           <div className="flex items-center gap-4">
//             <motion.button onClick={openConsultationModal} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="hidden sm:flex items-center gap-2 border backdrop-blur-sm px-4 py-2 rounded-3xl font-medium">
//               <Phone size={16} /> Call Us{" "}
//               <Image src="/assets/indiaFlag.png" alt="India flag" width={20} height={15} className="ml-1"/>
//             </motion.button>
            
//             <motion.button onClick={openOfferModal} whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.9 }} animate={{ rotate: [0, 15, -15, 15, 0] }} transition={{ duration: 1, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }} className="p-2 hover:bg-white/20 rounded-full"><Gift size={20} className="text-white" /></motion.button>
//             <motion.button onClick={handleScrollToSearch} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="hidden md:block p-2 hover:bg-white/20 rounded-full"><Search size={20} /></motion.button>
//             <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="hidden md:block p-2 hover:bg-white/20 rounded-full"><Heart size={20} /></motion.button>
//             <motion.button onClick={openLoginModal} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><User size={22} className="cursor-pointer" /></motion.button>
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2"><AnimatePresence mode="wait"><motion.div key={isMenuOpen ? "x" : "menu"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</motion.div></AnimatePresence></button>
//           </div>
//         </motion.nav>
//       </header>

//       <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
//         <motion.div variants={heroTextContainerVariants} initial="hidden" animate="visible" className="flex flex-col items-center">
//           <motion.p variants={heroTextItemVariants} className="text-green-400 font-semibold text-lg mb-2">0% Brokerage - 100% Delight</motion.p>
//           <motion.h1 variants={heroTextItemVariants} className="text-4xl md:text-6xl font-bold leading-tight">Connecting To Your</motion.h1>
          
//           <motion.h1
//             variants={heroTextItemVariants}
//             animate={{
//                 scale: [1, 1.02, 1],
//                 filter: [
//                     "drop-shadow(0 0 0px rgba(255,255,255,0))",
//                     "drop-shadow(0 0 10px rgba(255,255,255,0.7))",
//                     "drop-shadow(0 0 0px rgba(255,255,255,0))",
//                 ],
//             }}
//             transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
//             className="text-4xl md:text-6xl font-bold leading-tight mb-4"
//           >
//             Dream Home
//           </motion.h1>

//           <motion.p
//             variants={heroTextItemVariants}
//             animate={{ opacity: [1, 0.7, 1] }}
//             transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
//             className="text-lg text-gray-200"
//           >
//             Chennai's Most Trusted Real Estate Agency
//           </motion.p>
//         </motion.div>
//       </div>
      
//       <div ref={searchBarRef} className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 w-[90%] lg:w-3/4 max-w-4xl">
//         <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: [0, -12, 0], opacity: 1 }}
//             transition={{
//                 y: { duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
//                 opacity: { duration: 0.6, ease: "easeOut", delay: 1.2 }
//             }}
//             className="w-full"
//         >
//           <div className="bg-white rounded-full shadow-2xl p-2 flex flex-col md:flex-row items-center gap-2">
//             <div className="flex items-center gap-2 w-full md:w-auto md:border-r pr-4 pl-4 py-2 md:py-0">
//               <MapPin className="text-gray-400" size={20} />
//               <button className="font-semibold text-gray-700">All Cities</button>
//               <ChevronDown className="text-gray-400" size={16} />
//             </div>
//             <div className="relative flex-grow w-full">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//               <input type="text" placeholder="Search by property name or type..." className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-gray-800 placeholder:text-gray-500" value={searchTerm} onChange={(e) => onSearchChange(e.target.value)} />
//             </div>
//             <motion.div
//               variants={searchButtonContainerVariants}
//               initial="hidden"
//               animate="visible"
//               className="flex items-center gap-2 p-2 md:p-0"
//             >
//               <motion.button variants={searchButtonVariants} onClick={openFilterModal} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 bg-green-500 text-white rounded-full"><SlidersHorizontal size={20} /></motion.button>
//               <motion.button variants={searchButtonVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 bg-green-500 text-white rounded-full"><Settings2 size={20} /></motion.button>
//               <motion.button variants={searchButtonVariants} onClick={onSearchClick} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 bg-green-500 text-white rounded-full"><Search size={20} /></motion.button>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }








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
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [isPropertyDropdownOpen, setIsPropertyDropdownOpen] = useState(false);

  const cityDropdownRef = useRef<HTMLDivElement>(null);
  const propertyDropdownRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cityDropdownRef.current &&
        !cityDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCityDropdownOpen(false);
      }
      if (
        propertyDropdownRef.current &&
        !propertyDropdownRef.current.contains(event.target as Node)
      ) {
        setIsPropertyDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            {/* Cities Dropdown */}
            <motion.div
              whileHover={{ y: -2 }}
              className="relative"
              ref={cityDropdownRef}
            >
              <button
                onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                className="flex items-center gap-2"
              >
                {selectedCity}
                <motion.div
                  animate={{ rotate: isCityDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
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
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-xl z-40 origin-top"
                  >
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
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <Link href="/home" className="bg-white text-gray-700 px-4 py-2 rounded-3xl">
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
              <Heart size={20} />
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
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Connecting To Your Dream Home
          </motion.h1>
          <motion.p
            variants={heroTextItemVariants}
            className="text-lg text-gray-200"
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
            {/* City Dropdown */}
            <div
              ref={cityDropdownRef}
              className="relative flex items-center gap-2 w-full md:w-auto md:border-r pr-4 pl-4 py-2 md:py-0 cursor-pointer"
            >
              <MapPin className="text-gray-400" size={20} />
              <button
                onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                className="font-semibold text-gray-700 flex items-center gap-1"
              >
                {selectedCity}
                <ChevronDown size={16} className="text-gray-400" />
              </button>

              <AnimatePresence>
                {isCityDropdownOpen && (
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
                              setIsCityDropdownOpen(false);
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
