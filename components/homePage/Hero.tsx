// "use client";
// import Link from "next/link";
// import { useState, useRef, useEffect } from "react";
// import Image from "next/image";

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

// // Define an interface for the component's props
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
//   const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
//   const { openLoginModal, openFilterModal, openOfferModal } = useUI();


//   // const { openLoginModal } = useUI();

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
//     <div className="relative h-[70vh] min-h-[600px] lg:h-screen">
//       {/* Background Image */}
//       <Image
//         src={heroImage}
//         alt="Beautiful modern house"
//         fill
//         style={{ objectFit: "cover" }}
//         className="z-0"
//         priority
//       />
//       <div className="absolute inset-0 bg-black/50 z-10" />

//       {/* Header */}
//       <header className="absolute top-0 left-0 right-0 z-30">
//         <nav className="container mx-auto px-6 py-4 flex justify-between items-center text-white">
//           <div className="">
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
//               className="bg-white rounded-3xl text-gray-700 backdrop-blur-sm px-4 py-2 border border-gray-200 hover:border-gray-300 transition-colors
// "
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
//               className="hover:text-green-300 transition-colors"
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

//           {/* Mobile Menu */}
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

//       {/* Hero Content */}
//       <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
//         <p className="text-green-400 font-semibold text-lg mb-2">
//           0% Brokerage - 100% Delight
//         </p>
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//           Connecting To Your
//         </h1>
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
//           Dream Home
//         </h1>
//         <p className="text-lg text-gray-200">
//           Chennai's Most Trusted Real Estate Agency
//         </p>
//       </div>

//       {/* Search Bar */}
//       <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 w-[90%] lg:w-3/4 max-w-4xl">
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
//               className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-gray-800"
//               value={searchTerm}
//               onChange={(e) => onSearchChange(e.target.value)}
//             />
//           </div>
//           <div className="flex items-center gap-2 p-2 md:p-0">
//             {/* <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"><SlidersHorizontal size={20} /></button> */}
//             <button
//               onClick={openFilterModal}
//               className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
//             >
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






"use client";

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
  UserCircle2,
  Menu,
  X,
  User,
  Gift,
} from "lucide-react";
import heroImage from "./assets/Hero.png";
import logoImage from "./assets/logo.png";
import { useUI } from "../../app/context/UIContext";

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
  const cityDropdownRef = useRef<HTMLDivElement>(null);
  
  // Create a ref for the search bar element
  const searchBarRef = useRef<HTMLDivElement>(null);
  
  const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
  const { openLoginModal, openFilterModal, openOfferModal } = useUI();

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

  // Handler function to scroll to the search bar
  const handleScrollToSearch = () => {
    // First, execute the original function to show the property list
    onSearchClick(); 
    
    // Then, scroll smoothly to the search bar element
    setTimeout(() => {
        searchBarRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100); // Small delay for the layout to update
  };

  return (
    <div className="relative h-[70vh] min-h-[600px] lg:h-screen">
      <Image
        src={heroImage}
        alt="Beautiful modern house"
        fill
        style={{ objectFit: "cover" }}
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center text-white">
          <div>
            <Image className="" src={logoImage} alt="Home Konnect Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 font-medium">
            <div className="relative" ref={cityDropdownRef}>
              <button
                onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                className="flex items-center gap-2 hover:text-green-300 transition-colors"
              >
                {selectedCity}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isCityDropdownOpen ? "rotate-180" : ""}`}
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
            <Link href="/home" className="bg-white rounded-3xl text-gray-700 backdrop-blur-sm px-4 py-2 border border-gray-200 hover:border-gray-300 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-green-300 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-green-300 transition-colors">Contact Us</Link>
            <Link href="/blogs" className="hover:text-green-300 transition-colors">Blog</Link>
            <Link href="/careers" className="hover:text-green-300 transition-colors">Careers</Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 border backdrop-blur-sm px-4 py-2 rounded-3xl font-medium">
              <Phone size={16} /> Call Us{" "}
              <Image src="/assets/indiaFlag.png" alt="India flag" width={20} height={15} className="ml-1"/>
            </button>
            <button
              onClick={openOfferModal}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <Gift size={20} className="text-white" />
            </button>

            {/* This Search icon now scrolls down */}
            <button
              onClick={handleScrollToSearch}
              className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <Search size={20} />
            </button>
            <button className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors">
              <Heart size={20} />
            </button>
            <button onClick={openLoginModal}>
              <User size={22} className="cursor-pointer" />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-white/20 rounded-full"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full right-6 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4 flex flex-col gap-4 lg:hidden">
              {/* ... mobile links ... */}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <p className="text-green-400 font-semibold text-lg mb-2">0% Brokerage - 100% Delight</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">Connecting To Your</h1>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Dream Home</h1>
        <p className="text-lg text-gray-200">Chennai's Most Trusted Real Estate Agency</p>
      </div>

      {/* Search Bar */}
      <div ref={searchBarRef} className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 w-[90%] lg:w-3/4 max-w-4xl">
        <div className="bg-white rounded-full shadow-2xl p-2 flex flex-col md:flex-row items-center gap-2">
          <div className="flex items-center gap-2 w-full md:w-auto md:border-r pr-4 pl-4 py-2 md:py-0">
            <MapPin className="text-gray-400" size={20} />
            <button className="font-semibold text-gray-700">All Cities</button>
            <ChevronDown className="text-gray-400" size={16} />
          </div>
          <div className="relative flex-grow w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by property name or type..."
              className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-gray-800"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 p-2 md:p-0">
            <button onClick={openFilterModal} className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
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
    </div>
  );
}