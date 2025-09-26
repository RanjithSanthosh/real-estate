
// // app/page.tsx
// "use client"; // Required for using hooks like useState, useRef, useEffect

// import { useState, useRef, useEffect } from "react";
// import Image from "next/image";
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

// // Interface for type safety
// interface Service {
//   title: string;
//   description: string;
// }

// export default function HeroSection() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   // --- New Dropdown Logic Start ---
//   const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
//   const [selectedCity, setSelectedCity] = useState("All Cities");
//   const cityDropdownRef = useRef<HTMLDivElement>(null);
//   const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];

//   // Effect to close dropdown on outside click
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
//   // --- New Dropdown Logic End ---

//   const services: Service[] = [
//     {
//       title: "Search & Shortlist",
//       description:
//         "Search, shortlist and find the home of your dreams from our galore of options.",
//     },
//     {
//       title: "Site Visit",
//       description: "See and Feel the soul of your future home in person.",
//     },
//     {
//       title: "Home Loan",
//       description:
//         "Get assistance and advice with the best experts in home loans.",
//     },
//     {
//       title: "Legal Advice",
//       description:
//         "Get the best legal advice regarding anything related home buying.",
//     },
//     {
//       title: "Closure",
//       description: "Complete assistance until you get your home.",
//     },
//   ];

//   return (
//     <div className="bg-white">
//       <main>
//         {/* Hero Section */}
//         <div className="relative h-[70vh] min-h-[600px] lg:h-screen">
//           {/* Background Image */}
//           <Image
           
//             src="./assets/Hero.png"
//             alt="Beautiful modern house"
//             fill
//             style={{ objectFit: "cover" }}
//             className="z-0"
//             priority // Load this image first
//           />
//           <div className="absolute inset-0 bg-black/50 z-10" />

//           {/* Header */}
//           <header className="absolute top-0 left-0 right-0 z-30">
//             <nav className="container mx-auto px-6 py-4 flex justify-between items-center text-white">
//               <div className="flex items-center gap-6">
//                 <div className="flex items-center gap-2">
//                   <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center font-bold text-white text-lg">
//                     HK
//                   </div>
//                   <span className="font-bold text-xl">Home Konnect</span>
//                 </div>
//               </div>

//               {/* Desktop Menu */}
//               <div className="hidden lg:flex items-center gap-8 font-medium">
//                 {/* --- City Dropdown Logic --- */}
//                 <div className="relative" ref={cityDropdownRef}>
//                   <button
//                     onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
//                     className="flex items-center gap-2 bg-white rounded-3xl text-gray-700 backdrop-blur-sm px-4 py-2 border border-gray-200 hover:border-gray-300 transition-colors"
//                   >
//                     {selectedCity}
//                     <ChevronDown
//                       size={16}
//                       className={`transition-transform duration-300 ${
//                         isCityDropdownOpen ? "rotate-180" : ""
//                       }`}
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
//                 {/* --- End City Dropdown Logic --- */}
//                 <a href="#" className="hover:text-green-300 transition-colors">
//                   Home
//                 </a>
//                 <a href="#" className="hover:text-green-300 transition-colors">
//                   About
//                 </a>
//                 <a href="#" className="hover:text-green-300 transition-colors">
//                   Contact Us
//                 </a>
//               </div>

//               <div className="flex items-center gap-4 ">
//                 <button className="hidden sm:flex items-center gap-2 border backdrop-blur-sm px-4 py-2 rounded-3xl font-medium">
//                   <Phone size={16} /> Call Us <span className="ml-1">🇮🇳</span>
//                 </button>
//                 <button className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors">
//                   <Heart size={20} />
//                 </button>
//                 <button className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors">
//                   <UserCircle2 size={20} />
//                 </button>
//                 <button className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors">
//                   <User  size={20} />
//                 </button>

//                 {/* Hamburger Menu Button */}
//                 <button
//                   onClick={() => setIsMenuOpen(!isMenuOpen)}
//                   className="lg:hidden p-2 hover:bg-white/20 rounded-full"
//                 >
//                   {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//               </div>

//               {/* Mobile Menu */}
//               {isMenuOpen && (
//                 <div className="absolute top-full right-6 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4 flex flex-col gap-4 lg:hidden">
//                   <a href="#" className="hover:text-green-600">
//                     Home
//                   </a>
//                   <a href="#" className="hover:text-green-600">
//                     About
//                   </a>
//                   <a href="#" className="hover:text-green-600">
//                     Contact Us
//                   </a>
//                   <a
//                     href="#"
//                     className="sm:hidden flex items-center gap-2 hover:text-green-600"
//                   >
//                     <Phone size={16} /> Call Us
//                   </a>
//                   <a
//                     href="#"
//                     className="md:hidden flex items-center gap-2 hover:text-green-600"
//                   >
//                     <Heart size={16} /> Wishlist
//                   </a>
//                   <a
//                     href="#"
//                     className="md:hidden flex items-center gap-2 hover:text-green-600"
//                   >
//                     <UserCircle2 size={16} /> Profile
//                   </a>
//                 </div>
//               )}
//             </nav>
//           </header>

//           {/* Hero Content */}
//           <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
//             <p className="text-green-400 font-semibold text-lg mb-2">
//               0% Brokerage - 100% Delight
//             </p>
//             <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//               Connecting To Your
//             </h1>
//             <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
//               Dream Home
//             </h1>
//             <p className="text-lg text-gray-200">
//               Chennai's Most Trusted Real Estate Agency
//             </p>
//           </div>

//           {/* Search Bar */}
//           <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 w-[90%] lg:w-3/4 max-w-4xl">
//             <div className="bg-white rounded-full shadow-2xl p-2 flex flex-col md:flex-row items-center gap-2">
//               <div className="flex items-center gap-2 w-full md:w-auto md:border-r pr-4 pl-4 py-2 md:py-0">
//                 <MapPin className="text-gray-400" size={20} />
//                 <button className="font-semibold text-gray-700">
//                   All Cities
//                 </button>
//                 <ChevronDown className="text-gray-400" size={16} />
//               </div>
//               <div className="relative flex-grow w-full">
//                 <Search
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                   size={20}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Search for properties, locations..."
//                   className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-gray-800"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>
//               <div className="flex items-center gap-2 p-2 md:p-0">
//                 <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
//                   <SlidersHorizontal size={20} />
//                 </button>
//                 <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
//                   <Settings2 size={20} />
//                 </button>
//                 <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
//                   <Search size={20} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* End to End Solutions Section */}
//         <section className="pt-28 pb-16 bg-white">
//           <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <Image
//                 src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
//                 alt="Aerial view of a property"
//                 width={600}
//                 height={400}
//                 className="rounded-2xl shadow-lg w-full h-auto"
//               />
//             </div>
//             <div className="text-center lg:text-left">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//                 End To End Property Solutions
//               </h2>
//               <p className="text-gray-600 mb-8 text-lg">
//                 Buy, sell or rent properties with Home Konnect
//               </p>
//               <button className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-green-600 transition-transform hover:scale-105 mx-auto lg:mx-0">
//                 Contact Us <ArrowRight size={20} />
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section className="py-16 bg-gray-50">
//           <div className="container mx-auto px-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//               {services.map((service) => (
//                 <div
//                   key={service.title}
//                   className="bg-white p-6 rounded-lg text-center shadow-sm transition-shadow hover:shadow-lg"
//                 >
//                   <h3 className="font-bold text-gray-800 text-lg mb-2">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }




// app/components/homePage/heroSection.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
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
  User
} from "lucide-react";
import heroImage from "../../public/assets/Hero.png"; // ✅ 1. IMPORT THE IMAGE HERE (adjust path if needed)
import eteImage from "../../public/assets/ETEproperty.png"; // ✅ 1. IMPORT THE IMAGE HERE (adjust path if needed)
import logoImage  from "../../public/assets/logo.png";

// Interface for type safety
interface Service {
  title: string;
  description: string;
}

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const cityDropdownRef = useRef<HTMLDivElement>(null);
  const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];

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

  const services: Service[] = [
    { title: "Search & Shortlist", description: "Search, shortlist and find the home of your dreams." },
    { title: "Site Visit", description: "See and Feel the soul of your future home in person." },
    { title: "Home Loan", description: "Get assistance and advice with the best experts in home loans." },
    { title: "Legal Advice", description: "Get the best legal advice regarding anything related home buying." },
    { title: "Closure", description: "Complete assistance until you get your home." },
  ];

  return (
    <div className="bg-white">
      <main>
        {/* Hero Section */}
        <div className="relative h-[70vh] min-h-[600px] lg:h-screen">
          {/* Background Image */}
          <Image
            src={heroImage} // ✅ 2. USE THE IMPORTED VARIABLE HERE
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
              <div className="">
                {/* <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center font-bold text-white text-lg">
                    HK
                  </div>
                  <span className="font-bold text-xl">Home Konnect</span>
                </div> */}
                 <Image
                 className=""
                    src={logoImage}
                    alt="Home Konnect Logo"
                  />
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-8 font-medium">
                <div className="relative" ref={cityDropdownRef}>
                  <button
                    onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                    className="flex items-center gap-2 bg-white rounded-3xl text-gray-700 backdrop-blur-sm px-4 py-2 border border-gray-200 hover:border-gray-300 transition-colors"
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
                <a href="/home" className="hover:text-green-300 transition-colors">Home</a>
                <a href="/about" className="hover:text-green-300 transition-colors">About</a>
                <a href="/contact" className="hover:text-green-300 transition-colors">Contact Us</a>
              </div>

              <div className="flex items-center gap-4 ">
                <button className="hidden sm:flex items-center gap-2 border backdrop-blur-sm px-4 py-2 rounded-3xl font-medium">
                  <Phone size={16} /> Call Us <span className="ml-1">🇮🇳</span>
                </button>
                <button className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors"><Heart size={20} /></button>
                <button className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors"><UserCircle2 size={20} /></button>
                <button className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors"><User size={20} /></button>

                {/* Hamburger Menu Button */}
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
                    <a href="/home" className="hover:text-green-600">Home</a>
                    <a href="/about" className="hover:text-green-600">About</a>
                    <a href="/contact" className="hover:text-green-600">Contact Us</a>
                    <a href="#" className="sm:hidden flex items-center gap-2 hover:text-green-600"><Phone size={16} /> Call Us</a>
                    <a href="#" className="md:hidden flex items-center gap-2 hover:text-green-600"><Heart size={16} /> Wishlist</a>
                    <a href="#" className="md:hidden flex items-center gap-2 hover:text-green-600"><UserCircle2 size={16} /> Profile</a>
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
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 w-[90%] lg:w-3/4 max-w-4xl">
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
                          placeholder="Search for properties, locations..."
                          className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-gray-800"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                      />
                  </div>
                  <div className="flex items-center gap-2 p-2 md:p-0">
                      <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"><SlidersHorizontal size={20} /></button>
                      <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"><Settings2 size={20} /></button>
                      <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"><Search size={20} /></button>
                  </div>
              </div>
          </div>
        </div>


      </main>
    </div>
  );
}