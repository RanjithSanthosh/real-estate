

// // app/page.tsx
// // "use client"; // Required for using hooks like useState

// // import { useState } from 'react';
// // import Image from 'next/image';
// // import { ChevronDown, Phone, Search, MapPin, SlidersHorizontal, Settings2, ArrowRight, Heart, UserCircle2, Menu, X } from 'lucide-react';

// // // Interface for type safety
// // interface Service {
// //   title: string;
// //   description: string;
// // }

// // export default function HomePage() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState('');

// //   const services: Service[] = [
// //     { title: "Search & Shortlist", description: "Search, shortlist and find the home of your dreams from our galore of options." },
// //     { title: "Site Visit", description: "See and Feel the soul of your future home in person." },
// //     { title: "Home Loan", description: "Get assistance and advice with the best experts in home loans." },
// //     { title: "Legal Advice", description: "Get the best legal advice regarding anything related home buying." },
// //     { title: "Closure", description: "Complete assistance until you get your home." },
// //   ];

// //   return (
// //     <div className="bg-white">
// //       <main>
// //         {/* Hero Section */}
// //         <div className="relative h-[70vh] min-h-[600px] lg:h-screen">
// //           {/* Background Image */}
// //           <Image
// //             src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop"
// //             alt="Beautiful modern house"
// //             fill
// //             style={{objectFit: "cover"}}
// //             className="z-0"
// //             priority // Load this image first
// //           />
// //           <div className="absolute inset-0 bg-black/50 z-10" />

// //           {/* Header */}
// //           <header className="absolute top-0 left-0 right-0 z-30">
// //             <nav className="container mx-auto px-6 py-4 flex justify-between items-center text-white">
// //               <div className="flex items-center gap-6">
// //                 <div className="flex items-center gap-2">
// //                   <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center font-bold text-white text-lg">HK</div>
// //                   <span className="font-bold text-xl">Home Konnect</span>
// //                 </div>
// //                 <button className="hidden md:flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-md">
// //                   All Cities <ChevronDown size={16} />
// //                 </button>
// //               </div>
              
// //               {/* Desktop Menu */}
// //               <div className="hidden lg:flex items-center gap-8 font-medium">
// //                 <a href="#" className="hover:text-green-300 transition-colors">Home</a>
// //                 <a href="#" className="hover:text-green-300 transition-colors">About</a>
// //                 <a href="#" className="hover:text-green-300 transition-colors">Contact Us</a>
// //               </div>

// //               <div className="flex items-center gap-4">
// //                 <button className="hidden sm:flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-md font-medium">
// //                   <Phone size={16} /> Call Us <span className="ml-1">🇮🇳</span>
// //                 </button>
// //                 <button className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors"><Heart size={20} /></button>
// //                 <button className="hidden md:block p-2 hover:bg-white/20 rounded-full transition-colors"><UserCircle2 size={20} /></button>
                
// //                 {/* Hamburger Menu Button */}
// //                 <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 hover:bg-white/20 rounded-full">
// //                   {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
// //                 </button>
// //               </div>
              
// //               {/* Mobile Menu */}
// //               {isMenuOpen && (
// //                 <div className="absolute top-full right-6 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4 flex flex-col gap-4 lg:hidden">
// //                   <a href="#" className="hover:text-green-600">Home</a>
// //                   <a href="#" className="hover:text-green-600">About</a>
// //                   <a href="#" className="hover:text-green-600">Contact Us</a>
// //                    <a href="#" className="sm:hidden flex items-center gap-2 hover:text-green-600"><Phone size={16}/> Call Us</a>
// //                    <a href="#" className="md:hidden flex items-center gap-2 hover:text-green-600"><Heart size={16}/> Wishlist</a>
// //                    <a href="#" className="md:hidden flex items-center gap-2 hover:text-green-600"><UserCircle2 size={16}/> Profile</a>
// //                 </div>
// //               )}
// //             </nav>
// //           </header>

// //           {/* Hero Content */}
// //           <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
// //             <p className="text-green-400 font-semibold text-lg mb-2">0% Brokerage - 100% Delight</p>
// //             <h1 className="text-4xl md:text-6xl font-bold leading-tight">Connecting To Your</h1>
// //             <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Dream Home</h1>
// //             <p className="text-lg text-gray-200">Chennai's Most Trusted Real Estate Agency</p>
// //           </div>

// //           {/* Search Bar */}
// //           <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 w-[90%] lg:w-3/4 max-w-4xl">
// //             <div className="bg-white rounded-full shadow-2xl p-2 flex flex-col md:flex-row items-center gap-2">
// //               <div className="flex items-center gap-2 w-full md:w-auto md:border-r pr-4 pl-4 py-2 md:py-0">
// //                 <MapPin className="text-gray-400" size={20} />
// //                 <button className="font-semibold text-gray-700">All Cities</button>
// //                 <ChevronDown className="text-gray-400" size={16} />
// //               </div>
// //               <div className="relative flex-grow w-full">
// //                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
// //                 <input
// //                   type="text"
// //                   placeholder="Search for properties, locations..."
// //                   className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-gray-800"
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                 />
// //               </div>
// //               <div className="flex items-center gap-2 p-2 md:p-0">
// //                 <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
// //                   <SlidersHorizontal size={20} />
// //                 </button>
// //                  <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
// //                   <Settings2 size={20} />
// //                 </button>
// //                 <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
// //                   <Search size={20} />
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* End to End Solutions Section */}
// //         <section className="pt-28 pb-16 bg-white">
// //           <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
// //             <div>
// //               <Image
// //                 src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
// //                 alt="Aerial view of a property"
// //                 width={600}
// //                 height={400}
// //                 className="rounded-2xl shadow-lg w-full h-auto"
// //               />
// //             </div>
// //             <div className="text-center lg:text-left">
// //               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">End To End Property Solutions</h2>
// //               <p className="text-gray-600 mb-8 text-lg">
// //                 Buy, sell or rent properties with Home Konnect
// //               </p>
// //               <button className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-green-600 transition-transform hover:scale-105 mx-auto lg:mx-0">
// //                 Contact Us <ArrowRight size={20} />
// //               </button>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Services Section */}
// //         <section className="py-16 bg-gray-50">
// //           <div className="container mx-auto px-6">
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
// //               {services.map((service) => (
// //                 <div key={service.title} className="bg-white p-6 rounded-lg text-center shadow-sm transition-shadow hover:shadow-lg">
// //                   <h3 className="font-bold text-gray-800 text-lg mb-2">{service.title}</h3>
// //                   <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>
// //       </main>
// //     </div>
// //   );
// // }


// import React from 'react'
// import HeroSection from '@/components/homePage/heroSection'
// import WhyChooseUs from '@/components/homePage/WhyChooseUs'
// import FeaturedProject from '@/components/homePage/FeaturedProjects'
// import AdvSec from '@/components/homePage/AdvantageSection'
// import CuratedCollections from '@/components/homePage/CuratedCollections'
// import Testimonials from '@/components/homePage/Testimonials'
// import CallToActionAndReviews from '@/components/homePage/CallToActionAndReviews'
// import NewsletterSubscription from '@/components/homePage/NewsletterSubscription'
// import SiteMapFooter from '@/components/homePage/SiteMapFooter'
// import DetailedFooter from '@/components/homePage/DetailedFooter'


// const page = () => {
//   return (
//     <div>
//       <HeroSection/>
//       <WhyChooseUs/>
//       <FeaturedProject/>
//       <AdvSec/>
//       <CuratedCollections/>
//       <Testimonials/>
//       <CallToActionAndReviews/>
//       <NewsletterSubscription />
//       <SiteMapFooter />
//       <DetailedFooter />
//     </div>
//   )
// }

// export default page







// app/page.tsx

// import React from 'react';

// // Importing all the page sections
// import HeroSection from '@/components/homePage/heroSection';
// import WhyChooseUs from '@/components/homePage/WhyChooseUs';
// import FeaturedProjects from '@/components/homePage/FeaturedProjects';
// import AdvantageSection from '@/components/homePage/AdvantageSection';
// import CuratedCollections from '@/components/homePage/CuratedCollections';
// import Testimonials from '@/components/homePage/Testimonials';
// import CallToActionAndReviews from '@/components/homePage/CallToActionAndReviews';
// import NewsletterSubscription from '@/components/homePage/NewsletterSubscription';
// import DetailedFooter from '@/components/aboutPage/DetailedFooter';
// import SiteMapFooter from '@/components/homePage/SiteMapFooter';
// import PropertyListings from '@/components/homePage/PropertyListings';

// /**
//  * This is the primary landing page component.
//  * It assembles all the individual sections into a cohesive and semantically structured page.
//  */
// export default function HomePage() {
//   return (
//     // A root div or fragment to hold the entire page structure.
//     <div>
//       {/* The HeroSection contains the main header and acts as the page's entry point. */}
//       <HeroSection />

//       {/* The <main> tag wraps all primary content sections for semantic correctness and accessibility. */}
//       <main>
//         <PropertyListings />
//         <WhyChooseUs />
//         <FeaturedProjects />
//         <AdvantageSection />
//         <CuratedCollections />
//         <Testimonials />
//         <CallToActionAndReviews />
//         <NewsletterSubscription />
//         <SiteMapFooter />

//       </main>

//       {/* The DetailedFooter is the single, final element of the page, living outside the <main> content. */}
//       <DetailedFooter />
//     </div>
//   );
// }





// "use client";

// import React, { useState } from 'react';

// // Importing all the page sections
// import HeroSection from '@/components/homePage/heroSection';
// import WhyChooseUs from '@/components/homePage/WhyChooseUs';
// import FeaturedProjects from '@/components/homePage/FeaturedProjects';
// import AdvantageSection from '@/components/homePage/AdvantageSection';
// import CuratedCollections from '@/components/homePage/CuratedCollections';
// import Testimonials from '@/components/homePage/Testimonials';
// import CallToActionAndReviews from '@/components/homePage/CallToActionAndReviews';
// import NewsletterSubscription from '@/components/homePage/NewsletterSubscription';
// import DetailedFooter from '@/components/aboutPage/DetailedFooter';
// import SiteMapFooter from '@/components/homePage/SiteMapFooter';
// import PropertyListings from '@/components/homePage/PropertyListings';
// import InfoSection from '@/components/homePage/InfoSection';

// /**
//  * This is the primary landing page component.
//  * It assembles all the individual sections into a cohesive and semantically structured page.
//  */
// export default function HomePage() {
//   // State to control which components are visible
//   const [isSearching, setIsSearching] = useState(false);

//   // Function to be called by HeroSection to show listings
//   const handleSearchTrigger = () => {
//     setIsSearching(true);
//     // Optional: scroll to the listings section after it renders
//     setTimeout(() => {
//         const mainElement = document.querySelector('main');
//         if (mainElement) {
//             mainElement.scrollIntoView({ behavior: 'smooth' });
//         }
//     }, 100);
//   };

//   // Function to be called by PropertyListings to hide listings
//   const handleCloseListings = () => {
//     setIsSearching(false);
//   };

//   return (
//     // A root div or fragment to hold the entire page structure.
//     <div>
//       {/* The HeroSection contains the main header and acts as the page's entry point. */}
//       {/* Pass the handler function as a prop to HeroSection */}
//       <HeroSection onSearchClick={handleSearchTrigger} />

//       {/* The <main> tag wraps all primary content sections for semantic correctness and accessibility. */}
//       <main>
//         {/* Conditionally render content based on 'isSearching' state */}
//         {isSearching ? (
//           // If searching, show only the PropertyListings component
//           <PropertyListings onClose={handleCloseListings} />
//         ) : (
//           // Otherwise, show the default page content
//           <>
//             {/* The PropertyListings component is no longer needed here by default */}
//             <InfoSection/>
//             <WhyChooseUs />
//             <FeaturedProjects />
//             <AdvantageSection />
//             <CuratedCollections />
//             <Testimonials />
//             <CallToActionAndReviews />
//             <NewsletterSubscription />
//             <SiteMapFooter />
//           </>
//         )}
//       </main>

//       {/* The DetailedFooter is the single, final element of the page, living outside the <main> content. */}
//       <DetailedFooter />
//     </div>
//   );
// }



// 'use client';

// import React, { useState } from 'react';

// // Importing all the page sections
// import HeroSection from '@/components/homePage/heroSection';
// import WhyChooseUs from '@/components/homePage/WhyChooseUs';
// import FeaturedProjects from '@/components/homePage/FeaturedProjects';
// import AdvantageSection from '@/components/homePage/AdvantageSection';
// import CuratedCollections from '@/components/homePage/CuratedCollections';
// import Testimonials from '@/components/homePage/Testimonials';
// import CallToActionAndReviews from '@/components/homePage/CallToActionAndReviews';
// import NewsletterSubscription from '@/components/homePage/NewsletterSubscription';
// import DetailedFooter from '@/components/aboutPage/DetailedFooter';
// import SiteMapFooter from '@/components/homePage/SiteMapFooter';
// import PropertyListings from '@/components/homePage/PropertyListings';

// export default function HomePage() {
//   const [isSearching, setIsSearching] = useState(false);

//   // ✅ 1. Create a single function to TOGGLE the view.
//   // This function will be called by the search button every time it's clicked.
//   const toggleSearchView = () => {
//     // This flips the boolean value from true to false, or false to true.
//     setIsSearching(prevState => !prevState);
//   };

//   return (
//     <div>
//       {/* ✅ 2. Pass the new toggle function to the HeroSection. */}
//       <HeroSection onSearchClick={toggleSearchView} />

//       <main>
//         {/* The conditional logic remains the same. */}
//         {isSearching ? (
//           // ✅ 3. PropertyListings no longer needs an "onClose" prop.
//           <PropertyListings />
//         ) : (
//           <>
//             <WhyChooseUs />
//             <FeaturedProjects />
//             <AdvantageSection />
//             <CuratedCollections />
//             <Testimonials />
//             <CallToActionAndReviews />
//             <NewsletterSubscription />
//             <SiteMapFooter />
//           </>
//         )}
//       </main>

//       <DetailedFooter />
//     </div>
//   );
// }







// "use client";

// import React, { useState } from 'react';

// // Importing all the page sections
// import HeroSection from '@/components/homePage/heroSection';
// import WhyChooseUs from '@/components/homePage/WhyChooseUs';
// import FeaturedProjects from '@/components/homePage/FeaturedProjects';
// import AdvantageSection from '@/components/homePage/AdvantageSection';
// import CuratedCollections from '@/components/homePage/CuratedCollections';
// import Testimonials from '@/components/homePage/Testimonials';
// import CallToActionAndReviews from '@/components/homePage/CallToActionAndReviews';
// import NewsletterSubscription from '@/components/homePage/NewsletterSubscription';
// import DetailedFooter from '@/components/aboutPage/DetailedFooter';
// import SiteMapFooter from '@/components/homePage/SiteMapFooter';
// import PropertyListings from '@/components/homePage/PropertyListings';

// export default function HomePage() {
//   const [isSearching, setIsSearching] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const toggleSearchView = () => {
//     setIsSearching(prevState => !prevState);
//   };

//   const handleSearchChange = (term: string) => {
//     setSearchTerm(term);
//   };

//   return (
//     <div>
//       <HeroSection
//         onSearchClick={toggleSearchView}
//         searchTerm={searchTerm}
//         onSearchChange={handleSearchChange}
//       />

//       <main>
//         {isSearching ? (
//           <PropertyListings searchTerm={searchTerm} />
//         ) : (
//           <>
//             <WhyChooseUs />
//             <FeaturedProjects />
//             <AdvantageSection />
//             <CuratedCollections />
//             <Testimonials />
//             <CallToActionAndReviews />
//             <NewsletterSubscription />
//             <SiteMapFooter />
//           </>
//         )}
//       </main>

//       <DetailedFooter />
//     </div>
//   );
// }






// "use client";

// import React, { useState, useMemo, useEffect } from 'react';
// import { Building2, BedDouble, Scaling } from 'lucide-react';

// // Import Components
// import HeroSection from '@/components/homePage/heroSection';
// import PropertyListings from '@/components/homePage/PropertyListings'; // This is your new listings page
// import WhyChooseUs from '@/components/homePage/WhyChooseUs';
// // ... import other sections as before
// import FeaturedProjects from '@/components/homePage/FeaturedProjects';
// import AdvantageSection from '@/components/homePage/AdvantageSection';
// import CuratedCollections from '@/components/homePage/CuratedCollections';
// import Testimonials from '@/components/homePage/Testimonials';
// import CallToActionAndReviews from '@/components/homePage/CallToActionAndReviews';
// import NewsletterSubscription from '@/components/homePage/NewsletterSubscription';
// import DetailedFooter from '@/components/aboutPage/DetailedFooter';
// import SiteMapFooter from '@/components/homePage/SiteMapFooter';
// import InfoSection from '@/components/homePage/InfoSection';

// // --- DATA & TYPE DEFINITIONS (Now managed by the parent page) ---
// type Property = {
//   id: number;
//   name: string;
//   developer: string;
//   location: string;
//   priceRange: string;
//   image: string;
//   tag?: { text: string; color: 'green' | 'yellow' | 'blue' };
//   specs: { icon: React.ElementType; text: string }[];
// };

// const propertiesData: Property[] = [
//     { id: 1, name: 'AMARA ADHYA', developer: 'AMARA HOMES', location: 'Gobalakpuram, Chennai', priceRange: '₹ 5.0 Cr. - 5.9 Cr.', image: '/properties/property.jpg', tag: { text: 'Ready to Move', color: 'green' }, specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '3 BHK' }, { icon: Scaling, text: '2351 - 2454 Sq.Ft' }] },
//     { id: 2, name: 'CASA GRANDE', developer: 'Emaar Properties', location: 'Velachery, Chennai', priceRange: '₹ 3.5 Cr. - 4.2 Cr.', image: '/properties/property2.jpg', tag: { text: 'Under Construction', color: 'yellow' }, specs: [{ icon: Building2, text: 'Villa' }, { icon: BedDouble, text: '4 BHK' }, { icon: Scaling, text: '3100 - 3400 Sq.Ft' }] },
//     { id: 3, name: 'PRESTIGE BELLA VISTA', developer: 'Prestige Group', location: 'Ayanambakkam, Chennai', priceRange: '₹ 1.8 Cr. - 2.5 Cr.', image: '/properties/property3.jpg', tag: { text: 'Featured', color: 'blue' }, specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '2 BHK' }, { icon: Scaling, text: '1500 - 1800 Sq.Ft' }] },
//     { id: 4, name: 'RADIANCE EMPIRE', developer: 'Radiance Realty', location: 'Perambur, Chennai', priceRange: '₹ 2.1 Cr. - 2.9 Cr.', image: '/properties/property4.jpg', specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '3 BHK' }, { icon: Scaling, text: '1900 - 2200 Sq.Ft' }] },
//     ...Array.from({ length: 8 }, (_, i) => ({ id: i + 5, name: 'OLYMPIA OPALINE', developer: 'Olympia Group', location: 'Navalur, Chennai', priceRange: `₹ ${(1.0 + i * 0.2).toFixed(1)} Cr. - ${(1.5 + i * 0.2).toFixed(1)} Cr.`, image: `https://picsum.photos/400/250?random=${i + 1}`, tag: i % 3 === 0 ? { text: 'Ready to Move', color: 'green' as const } : undefined, specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '3 BHK' }, { icon: Scaling, text: '1600 - 1950 Sq.Ft' }] }))
// ];

// const ITEMS_PER_PAGE = 9;

// export default function HomePage() {
//   // --- STATE MANAGEMENT (All state is now in the parent) ---
//   const [isSearching, setIsSearching] = useState(false); // Toggles the view
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterType, setFilterType] = useState('All');
//   const [sortOrder, setSortOrder] = useState('Default');
//   const [currentPage, setCurrentPage] = useState(1);

//   // --- HANDLER FUNCTIONS ---
//   const toggleSearchView = () => setIsSearching(prevState => !prevState);
//   const handleSearchChange = (term: string) => setSearchTerm(term);
//   const handleFilterChange = (type: string) => setFilterType(type);
//   const handleSortChange = (order: string) => setSortOrder(order);
//   const handlePageChange = (page: number) => setCurrentPage(page);

//   // --- FILTERING & SORTING LOGIC ---
//   const filteredAndSortedProperties = useMemo(() => {
//     let filtered = propertiesData.filter(property =>
//       (property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//        property.developer.toLowerCase().includes(searchTerm.toLowerCase()) ||
//        property.location.toLowerCase().includes(searchTerm.toLowerCase()))
//     );

//     if (filterType !== 'All') {
//         filtered = filtered.filter(p => p.specs.some(spec => spec.text === filterType));
//     }

//     if (sortOrder !== 'Default') {
//         filtered.sort((a, b) => {
//             const priceA = parseFloat(a.priceRange.split(' ')[1]);
//             const priceB = parseFloat(b.priceRange.split(' ')[1]);
//             return sortOrder === 'PriceLowToHigh' ? priceA - priceB : priceB - priceA;
//         });
//     }

//     return filtered;
//   }, [searchTerm, filterType, sortOrder]);
  
//   // --- PAGINATION LOGIC ---
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchTerm, filterType, sortOrder]);

//   const totalPages = Math.ceil(filteredAndSortedProperties.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const propertiesToShow = filteredAndSortedProperties.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   return (
//     <div>
//       <HeroSection
//         onSearchClick={toggleSearchView}
//         searchTerm={searchTerm}
//         onSearchChange={handleSearchChange}
//       />

//       <main>
//         {isSearching ? (
//           // Pass all data and handlers down to the PropertyListings component
//           <PropertyListings
//             propertiesToShow={propertiesToShow}
//             totalProperties={filteredAndSortedProperties.length}
//             totalPages={totalPages}
//             currentPage={currentPage}
//             filterType={filterType}
//             sortOrder={sortOrder}
//             startIndex={startIndex}
//             onFilterChange={handleFilterChange}
//             onSortChange={handleSortChange}
//             onPageChange={handlePageChange}
//           />
//         ) : (
//           <>
//             {/* These are your original home page sections */}
//               <InfoSection />
//             <WhyChooseUs />
//              <FeaturedProjects />
//              <AdvantageSection />
//              <CuratedCollections />
//              <Testimonials />
//              <CallToActionAndReviews />
//              <NewsletterSubscription />
            
          
//             {/* ... other components */}
//           </>
//         )}
//       </main>
//          <SiteMapFooter />
//       <DetailedFooter />
//     </div>
//   );
// }





// "use client";

// import React, { useState, useMemo, useEffect } from 'react';
// // import { propertiesData, Property } from '@/data/properties';
// import { propertiesData, Property } from '../data/properties';

// // Import Components
// import HeroSection from '@/components/homePage/heroSection';
// import PropertyListings from '@/components/homePage/PropertyListings';
// import WhyChooseUs from '@/components/homePage/WhyChooseUs';
// import FeaturedProjects from '@/components/homePage/FeaturedProjects';
// import AdvantageSection from '@/components/homePage/AdvantageSection';
// import CuratedCollections from '@/components/homePage/CuratedCollections';
// import Testimonials from '@/components/homePage/Testimonials';
// import CallToActionAndReviews from '@/components/homePage/CallToActionAndReviews';
// import NewsletterSubscription from '@/components/homePage/NewsletterSubscription';
// import DetailedFooter from '@/components/aboutPage/DetailedFooter';
// import SiteMapFooter from '@/components/homePage/SiteMapFooter';


// const ITEMS_PER_PAGE = 9;

// export default function HomePage() {
//   const [isSearching, setIsSearching] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterType, setFilterType] = useState('All');
//   const [sortOrder, setSortOrder] = useState('Default');
//   const [currentPage, setCurrentPage] = useState(1);

//   const toggleSearchView = () => setIsSearching(prevState => !prevState);
//   const handleSearchChange = (term: string) => setSearchTerm(term);
//   const handleFilterChange = (type: string) => setFilterType(type);
//   const handleSortChange = (order: string) => setSortOrder(order);
//   const handlePageChange = (page: number) => setCurrentPage(page);

//   const filteredAndSortedProperties = useMemo(() => {
//     let filtered = propertiesData.filter(property =>
//       (property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//        property.developer.toLowerCase().includes(searchTerm.toLowerCase()) ||
//        property.location.toLowerCase().includes(searchTerm.toLowerCase()))
//     );

//     if (filterType !== 'All') {
//         filtered = filtered.filter(p => p.specs.some(spec => spec.text === filterType));
//     }

//     if (sortOrder !== 'Default') {
//         filtered.sort((a, b) => {
//             const priceA = parseFloat(a.priceRange.split(' ')[1]);
//             const priceB = parseFloat(b.priceRange.split(' ')[1]);
//             return sortOrder === 'PriceLowToHigh' ? priceA - priceB : priceB - priceA;
//         });
//     }

//     return filtered;
//   }, [searchTerm, filterType, sortOrder]);
  
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchTerm, filterType, sortOrder]);

//   const totalPages = Math.ceil(filteredAndSortedProperties.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const propertiesToShow = filteredAndSortedProperties.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   return (
//     <div>
//       <HeroSection
//         onSearchClick={toggleSearchView}
//         searchTerm={searchTerm}
//         onSearchChange={handleSearchChange}
//       />

//       <main>
//         {isSearching ? (
//           <PropertyListings
//             propertiesToShow={propertiesToShow}
//             totalProperties={filteredAndSortedProperties.length}
//             totalPages={totalPages}
//             currentPage={currentPage}
//             filterType={filterType}
//             sortOrder={sortOrder}
//             startIndex={startIndex}
//             onFilterChange={handleFilterChange}
//             onSortChange={handleSortChange}
//             onPageChange={handlePageChange}
//           />
//         ) : (
//           <>
//             <WhyChooseUs />
//             <FeaturedProjects />
//             <AdvantageSection />
//             <CuratedCollections />
//             <Testimonials />
//             <CallToActionAndReviews />
//             <NewsletterSubscription />
//             <SiteMapFooter />
//           </>
//         )}
//       </main>

//       <DetailedFooter />
//     </div>
//   );
// }



// 'use client';

// import React, { useMemo, useCallback } from 'react';
// import { useSearchParams, useRouter, usePathname } from 'next/navigation'; // ✅ 1. Import Next.js navigation hooks
// import { propertiesData, Property } from '../data/properties';

// // Import Components
// import HeroSection from '@/components/homePage/heroSection';
// import PropertyListings from '@/components/homePage/PropertyListings';
// import WhyChooseUs from '@/components/homePage/WhyChooseUs';
// import FeaturedProjects from '@/components/homePage/FeaturedProjects';
// import AdvantageSection from '@/components/homePage/AdvantageSection';
// import CuratedCollections from '@/components/homePage/CuratedCollections';
// import Testimonials from '@/components/homePage/Testimonials';
// import CallToActionAndReviews from '@/components/homePage/CallToActionAndReviews';
// import NewsletterSubscription from '@/components/homePage/NewsletterSubscription';
// import DetailedFooter from '@/components/aboutPage/DetailedFooter';
// import SiteMapFooter from '@/components/homePage/SiteMapFooter';

// const ITEMS_PER_PAGE = 9;

// export default function HomePage() {
//   // ✅ 2. Initialize router hooks to manage the URL
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   // ✅ 3. Read state directly from the URL instead of useState
//   const isSearching = searchParams.get('view') === 'list';
//   const searchTerm = searchParams.get('q') || '';
//   const filterType = searchParams.get('type') || 'All';
//   const sortOrder = searchParams.get('sort') || 'Default';
//   const currentPage = parseInt(searchParams.get('page') || '1', 10);

//   // ✅ 4. Create a helper function to update URL parameters
//   const createQueryString = useCallback(
//     (paramsToUpdate: Record<string, string | number>) => {
//       const params = new URLSearchParams(searchParams.toString());
//       for (const [name, value] of Object.entries(paramsToUpdate)) {
//         params.set(name, String(value));
//       }
//       return params.toString();
//     },
//     [searchParams]
//   );
  
//   // ✅ 5. Rewrite handlers to update the URL instead of local state
//   const toggleSearchView = () => {
//     const params = new URLSearchParams(searchParams.toString());
//     if (isSearching) {
//       // If we're closing the list view, clear all filters
//       router.push(pathname);
//     } else {
//       params.set('view', 'list');
//       router.push(`${pathname}?${params.toString()}`);
//     }
//   };

//   const handleSearchChange = (term: string) => {
//     router.push(`${pathname}?${createQueryString({ q: term, page: 1 })}`);
//   };

//   const handleFilterChange = (type: string) => {
//     router.push(`${pathname}?${createQueryString({ type: type, page: 1 })}`);
//   };

//   const handleSortChange = (order: string) => {
//     router.push(`${pathname}?${createQueryString({ sort: order, page: 1 })}`);
//   };

//   const handlePageChange = (page: number) => {
//     router.push(`${pathname}?${createQueryString({ page: page })}`);
//   };


//   // --- FILTERING & SORTING LOGIC (This remains the same) ---
//   const filteredAndSortedProperties = useMemo(() => {
//     let filtered = propertiesData.filter(property =>
//       (property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//        property.developer.toLowerCase().includes(searchTerm.toLowerCase()) ||
//        property.location.toLowerCase().includes(searchTerm.toLowerCase()))
//     );
//     if (filterType !== 'All') {
//         filtered = filtered.filter(p => p.specs.some(spec => spec.text === filterType));
//     }
//     if (sortOrder !== 'Default') {
//         filtered.sort((a, b) => {
//             const priceA = parseFloat(a.priceRange.split(' ')[1]);
//             const priceB = parseFloat(b.priceRange.split(' ')[1]);
//             return sortOrder === 'PriceLowToHigh' ? priceA - priceB : priceB - priceA;
//         });
//     }
//     return filtered;
//   }, [searchTerm, filterType, sortOrder]);
  
//   // --- PAGINATION LOGIC (This remains the same) ---
//   const totalPages = Math.ceil(filteredAndSortedProperties.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const propertiesToShow = filteredAndSortedProperties.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   return (
//     <div>
//       <HeroSection
//         onSearchClick={toggleSearchView}
//         searchTerm={searchTerm}
//         onSearchChange={handleSearchChange}
//       />
//       <main>
//         {isSearching ? (
//           <PropertyListings
//             propertiesToShow={propertiesToShow}
//             totalProperties={filteredAndSortedProperties.length}
//             totalPages={totalPages}
//             currentPage={currentPage}
//             filterType={filterType}
//             sortOrder={sortOrder}
//             startIndex={startIndex}
//             onFilterChange={handleFilterChange}
//             onSortChange={handleSortChange}
//             onPageChange={handlePageChange}
//           />
//         ) : (
//           <>
//             <WhyChooseUs />
//             <FeaturedProjects />
//             <AdvantageSection />
//             <CuratedCollections />
//             <Testimonials />
//             <CallToActionAndReviews />
//             <NewsletterSubscription />
//             <SiteMapFooter />
//           </>
//         )}
//       </main>
//       <DetailedFooter />
//     </div>
//   );
// }





"use client";

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { propertiesData, Property } from '../data/properties';

// Import Components
import HeroSection from '@/components/homePage/heroSection';
import PropertyListings from '@/components/homePage/PropertyListings';
import WhyChooseUs from '@/components/homePage/WhyChooseUs';
import FeaturedProjects from '@/components/homePage/FeaturedProjects';
import AdvantageSection from '@/components/homePage/AdvantageSection';
import CuratedCollections from '@/components/homePage/CuratedCollections';
import Testimonials from '@/components/homePage/Testimonials';
import CallToActionAndReviews from '@/components/homePage/CallToActionAndReviews';
import NewsletterSubscription from '@/components/homePage/NewsletterSubscription';
import DetailedFooter from '@/components/aboutPage/DetailedFooter';
import SiteMapFooter from '@/components/homePage/SiteMapFooter';

const ITEMS_PER_PAGE = 9;

export default function HomePage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // ✅ 1. Re-introduce useState for smooth, client-side updates.
  // We will initialize state from the URL only on the first load.
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [sortOrder, setSortOrder] = useState('Default');
  const [currentPage, setCurrentPage] = useState(1);

  // A ref to prevent the URL update effect from running on the initial render
  const isInitialRender = useRef(true);
  
  // ✅ 2. HYDRATE STATE: On first load, read the URL and set the state.
  useEffect(() => {
    setIsSearching(searchParams.get('view') === 'list');
    setSearchTerm(searchParams.get('q') || '');
    setFilterType(searchParams.get('type') || 'All');
    setSortOrder(searchParams.get('sort') || 'Default');
    setCurrentPage(parseInt(searchParams.get('page') || '1', 10));
  }, []); // Empty dependency array means this runs only once on mount

  // ✅ 3. SYNC STATE TO URL: When state changes, update the URL in the background.
  useEffect(() => {
    // Don't update the URL on the very first render
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    const params = new URLSearchParams();
    if (isSearching) {
      params.set('view', 'list');
      if (searchTerm) params.set('q', searchTerm);
      if (filterType !== 'All') params.set('type', filterType);
      if (sortOrder !== 'Default') params.set('sort', sortOrder);
      if (currentPage > 1) params.set('page', String(currentPage));
    }

    // Use router.push to update the URL without a full page reload.
    // { scroll: false } prevents the page from scrolling to the top.
    router.push(`${pathname}?${params.toString()}`, { scroll: false });

  }, [isSearching, searchTerm, filterType, sortOrder, currentPage, pathname, router]);

  // ✅ 4. Handlers now just update the React state directly, causing an instant UI change.
  const toggleSearchView = () => setIsSearching(prevState => !prevState);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset page when search term changes
  };

  const handleFilterChange = (type: string) => {
    setFilterType(type);
    setCurrentPage(1); // Reset page when filter changes
  };

  const handleSortChange = (order: string) => {
    setSortOrder(order);
    setCurrentPage(1); // Reset page when sort changes
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  // --- Filtering, sorting, and pagination logic remains the same ---
  const filteredAndSortedProperties = useMemo(() => {
    let filtered = propertiesData.filter(property =>
      (property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       property.developer.toLowerCase().includes(searchTerm.toLowerCase()) ||
       property.location.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    if (filterType !== 'All') {
        filtered = filtered.filter(p => p.specs.some(spec => spec.text === filterType));
    }
    if (sortOrder !== 'Default') {
        filtered.sort((a, b) => {
            const priceA = parseFloat(a.priceRange.split(' ')[1]);
            const priceB = parseFloat(b.priceRange.split(' ')[1]);
            return sortOrder === 'PriceLowToHigh' ? priceA - priceB : priceB - priceA;
        });
    }
    return filtered;
  }, [searchTerm, filterType, sortOrder]);
  
  const totalPages = Math.ceil(filteredAndSortedProperties.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const propertiesToShow = filteredAndSortedProperties.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div>
      <HeroSection
        onSearchClick={toggleSearchView}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <main>
        {isSearching ? (
          <PropertyListings
            propertiesToShow={propertiesToShow}
            totalProperties={filteredAndSortedProperties.length}
            totalPages={totalPages}
            currentPage={currentPage}
            filterType={filterType}
            sortOrder={sortOrder}
            startIndex={startIndex}
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
            onPageChange={handlePageChange}
          />
        ) : (
          <>
            <WhyChooseUs />
            <FeaturedProjects />
            <AdvantageSection />
            <CuratedCollections />
            <Testimonials />
            <CallToActionAndReviews />
            <NewsletterSubscription />
            <SiteMapFooter />
          </>
        )}
      </main>
      <DetailedFooter />
    </div>
  );
}