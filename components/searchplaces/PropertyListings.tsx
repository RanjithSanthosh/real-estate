

// // app/components/PropertyListings.tsx
// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import {
//   Heart,
//   Car, // New icon for the car
//   MapPin,
//   Building2,
//   BedDouble,
//   Scaling,
//   ArrowLeft,
//   ArrowRight,
// } from 'lucide-react';

// // Define the type for a single property
// type Property = {
//   id: number;
//   name: string;
//   developer: string;
//   location: string;
//   priceRange: string;
//   image: string;
//   tag: { text: string; color: 'green' }; // Simplified tag for the new design
//   specs: { icon: React.ElementType; text: string }[];
// };

// // --- DUMMY DATA ---
// const allProperties: Property[] = Array.from({ length: 28 }, (_, i) => ({
//   id: i + 1,
//   name: 'AMARA ADHYA',
//   developer: `AMARA HOMES`, // Removed "by" for styling
//   location: 'Gobalakpuram, Chennai',
//   priceRange: `₹ ${(5.0 + i * 0.1).toFixed(1)} Cr. - ${(5.9 + i * 0.1).toFixed(1)} Cr.`, // Updated format
//   image: `/properties/property-${(i % 12) + 1}.jpg`,
//   tag: { text: 'Ready to Move', color: 'green' },
//   specs: [
//     { icon: Building2, text: 'Apartments' },
//     { icon: BedDouble, text: '3 BHK' }, // Simplified text
//     { icon: Scaling, text: '2351 - 2454 Sq.Ft' },
//   ],
// }));

// const ITEMS_PER_PAGE = 12;

// // --- Property Card Sub-Component (Completely Redesigned) ---
// function PropertyCard({ property }: { property: Property }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl font-sans">
//       {/* Image Section */}
//       <div className="relative">
//         <Image
//           src={property.image}
//           alt={property.name}
//           width={400}
//           height={250}
//           className="w-full h-56 object-cover rounded-t-2xl"
//         />
//         {/* Ready to Move Tag */}
//         <div className="absolute top-4 right-4 bg-green-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
//           {property.tag.text}
//         </div>

//         {/* Floating Price Tag */}
//         <div className="absolute -bottom-5 left-4 bg-white text-gray-800 text-base font-bold px-4 py-2 rounded-full shadow-lg flex items-center">
//           {property.priceRange}
//         </div>

//         {/* Floating Action Icons */}
//         <div className="absolute -bottom-6 right-4 flex space-x-2">
//           <button className="w-12 h-12 rounded-full bg-white text-purple-600 flex items-center justify-center shadow-lg hover:bg-gray-100 transition">
//             <Car size={22} />
//           </button>
//           <button className="w-12 h-12 rounded-full bg-white text-pink-500 flex items-center justify-center shadow-lg hover:bg-gray-100 transition">
//             <Heart size={22} />
//           </button>
//         </div>
//       </div>

//       {/* Details Section */}
//       <div className="pt-10 p-5">
//         <h3 className="text-2xl font-extrabold text-gray-900 tracking-wider mb-1">{property.name}</h3>
//         <p className="text-sm text-gray-500 mb-3">
//           by{' '}
//           <a href="#" className="text-yellow-600 font-semibold underline">
//             {property.developer}
//           </a>
//         </p>
//         <div className="flex items-center text-gray-500 mb-4">
//           <MapPin size={16} className="mr-2 text-blue-500 flex-shrink-0" />
//           <span>{property.location}</span>
//         </div>

//         <hr className="border-dashed my-4" />

//         <div className="flex flex-wrap gap-2">
//           {property.specs.map((spec, index) => (
//             <div
//               key={index}
//               className="bg-green-50 border border-green-200 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2"
//             >
//               <spec.icon size={16} />
//               <span>{spec.text}</span>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* Action Section */}
//       <div className="px-5 pb-5 pt-2 flex items-center justify-between">
//         <button className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition">
//            {/* WhatsApp Icon SVG */}
//            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
//         </button>
//         <button className="flex-grow bg-green-500 text-white py-4 px-6 rounded-full font-bold text-lg hover:bg-green-600 transition-colors duration-300">
//           Contact Us
//         </button>
//       </div>
//     </div>
//   );
// }

// // --- Main Listings Component (No Changes Needed Here) ---
// export default function PropertyListings() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(allProperties.length / ITEMS_PER_PAGE);

//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;
//   const propertiesToShow = allProperties.slice(startIndex, endIndex);

//   const handlePageChange = (page: number) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="py-16 md:py-24">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {propertiesToShow.map((property) => (
//             <PropertyCard key={property.id} property={property} />
//           ))}
//         </div>
//         <div className="flex justify-center items-center space-x-2">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             <ArrowLeft size={18} />
//           </button>
//           {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//             <button
//               key={page}
//               onClick={() => handlePageChange(page)}
//               className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-200 ${
//                 currentPage === page
//                   ? 'bg-yellow-500 text-white'
//                   : 'text-gray-700 border border-gray-300 hover:bg-gray-100'
//               }`}
//             >
//               {page}
//             </button>
//           ))}
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             <ArrowRight size={18} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }








// app/components/PropertyListings.tsx
// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import {
//   Heart,
//   Car,
//   MapPin,
//   Building2,
//   BedDouble,
//   Scaling,
//   ArrowLeft,
//   ArrowRight,
// } from 'lucide-react';

// // ✅ Define the type for a single property, making the tag optional
// type Property = {
//   id: number;
//   name: string;
//   developer: string;
//   location: string;
//   priceRange: string;
//   image: string;
//   tag?: { text: string; color: 'green' | 'yellow' | 'blue' }; // Tag is now optional
//   specs: { icon: React.ElementType; text: string }[];
// };

// // ✅ --- DUMMY DATA: Updated to include different tags and no tags ---
// const allProperties: Property[] = Array.from({ length: 28 }, (_, i) => {
//   let tag;
//   // This logic cycles through the 4 states: green, yellow, blue, and no tag
//   if (i % 4 === 0) {
//     tag = { text: 'Ready to Move', color: 'green' as const };
//   } else if (i % 4 === 1) {
//     tag = { text: 'Under Construction', color: 'yellow' as const };
//   } else if (i % 4 === 2) {
//     tag = { text: 'Featured', color: 'blue' as const };
//   }
//   // If i % 4 === 3, the tag remains undefined (no tag will be shown)

//   return {
//     id: i + 1,
//     name: 'AMARA ADHYA',
//     developer: `AMARA HOMES`,
//     location: 'Gobalakpuram, Chennai',
//     priceRange: `₹ ${(5.0 + i * 0.1).toFixed(1)} Cr. - ${(5.9 + i * 0.1).toFixed(1)} Cr.`,
//     // image: `/properties/property-${(i % 12) + 1}.jpg`,
//     image: "../homePage/assets/Choosing.png",
//     tag, // Assign the conditional tag here
//     specs: [
//       { icon: Building2, text: 'Apartments' },
//       { icon: BedDouble, text: '3 BHK' },
//       { icon: Scaling, text: '2351 - 2454 Sq.Ft' },
//     ],
//   };
// });


// const ITEMS_PER_PAGE = 12;

// // ✅ --- Property Card Sub-Component: Updated with conditional tag rendering ---
// function PropertyCard({ property }: { property: Property }) {
//   const getTagColorClass = (color: 'green' | 'yellow' | 'blue') => {
//     switch (color) {
//       case 'green':
//         return 'bg-green-500';
//       case 'yellow':
//         return 'bg-yellow-500';
//       case 'blue':
//         return 'bg-blue-500';
//       default:
//         return 'bg-gray-500';
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl font-sans">
//       <div className="relative">
//         <Image
//           src={property.image}
//           alt={property.name}
//           width={400}
//           height={250}
//           className="w-full h-56 object-cover rounded-t-2xl"
//         />
        
//         {/* Conditionally render the tag only if it exists */}
//         {property.tag && (
//           <div
//             className={`absolute top-4 right-4 text-white text-sm font-semibold px-3 py-1 rounded-lg  ${getTagColorClass(
//               property.tag.color
//             )}`}
//           >
//             {property.tag.text}
//           </div>
//         )}

//         <div className="absolute -bottom-5 left-4 bg-white text-gray-800 text-base font-bold px-4 py-2 rounded-full shadow-lg flex items-center">
//           {property.priceRange}
//         </div>

//         <div className="absolute -bottom-6 right-4 flex space-x-2">
//           <button className="w-12 h-12 rounded-full bg-white text-purple-600 flex items-center justify-center shadow-lg hover:bg-gray-100 transition">
//             <Car size={22} />
//           </button>
//           <button className="w-12 h-12 rounded-full bg-white text-pink-500 flex items-center justify-center shadow-lg hover:bg-gray-100 transition">
//             <Heart size={22} />
//           </button>
//         </div>
//       </div>

//       <div className="pt-10 p-5">
//         <h3 className="text-2xl font-extrabold text-gray-900 tracking-wider mb-1">{property.name}</h3>
//         <p className="text-sm text-gray-500 mb-3">
//           by{' '}
//           <a href="#" className="text-yellow-600 font-semibold underline">
//             {property.developer}
//           </a>
//         </p>
//         <div className="flex items-center text-gray-500 mb-4">
//           <MapPin size={16} className="mr-2 text-blue-500 flex-shrink-0" />
//           <span>{property.location}</span>
//         </div>

//         <hr className="border-dashed my-4" />

//         <div className="flex flex-wrap gap-2">
//           {property.specs.map((spec, index) => (
//             <div
//               key={index}
//               className="bg-green-50 border border-green-200 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2"
//             >
//               <spec.icon size={16} />
//               <span>{spec.text}</span>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <div className="px-5 pb-5 pt-2 flex items-center justify-between gap-1 justify-center">
//         <button className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition">
//            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
//         </button>
//         <button className="ml-2 flex-grow bg-green-500 text-white py-2 px-5 rounded-full font-bold text-lg hover:bg-green-600 transition-colors duration-300">
//           Contact Us
//         </button>
//       </div>
//     </div>
//   );
// }

// // --- Main Listings Component ---
// export default function PropertyListings() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(allProperties.length / ITEMS_PER_PAGE);

//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;
//   const propertiesToShow = allProperties.slice(startIndex, endIndex);

//   const handlePageChange = (page: number) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="py-16 md:py-24">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {propertiesToShow.map((property) => (
//             <PropertyCard key={property.id} property={property} />
//           ))}
//         </div>
//         <div className="flex justify-center items-center space-x-2">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             <ArrowLeft size={18} />
//           </button>
//           {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//             <button
//               key={page}
//               onClick={() => handlePageChange(page)}
//               className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-200 ${
//                 currentPage === page
//                   ? 'bg-yellow-500 text-white'
//                   : 'text-gray-700 border border-gray-300 hover:bg-gray-100'
//               }`}
//             >
//               {page}
//             </button>
//           ))}
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             <ArrowRight size={18} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




// app/components/PropertyListings.tsx
// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import {
//   Heart,
//   Car,
//   MapPin,
//   Building2,
//   BedDouble,
//   Scaling,
//   ArrowLeft,
//   ArrowRight,
// } from 'lucide-react';

// // 1. --- DATA STRUCTURE DEFINITION ---
// // Defines the shape for a single property object.
// type Property = {
//   id: number;
//   name: string;
//   developer: string;
//   location: string;
//   priceRange: string;
//   image: string; // Absolute path from the `public` directory
//   tag?: { text: string; color: 'green' | 'yellow' | 'blue' }; // Tag is optional
//   specs: { icon: React.ElementType; text: string }[];
// };

// // 2. --- SAMPLE DATA ARRAY ---
// // All property data is now declared here in a single array of objects.
// // This is where you would integrate data from your API.
// const propertiesData: Property[] = [
//   {
//     id: 1,
//     name: 'AMARA ADHYA',
//     developer: 'AMARA HOMES',
//     location: 'Gobalakpuram, Chennai',
//     priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
//     image: '/properties/property-1.jpg',
//     tag: { text: 'Ready to Move', color: 'green' },
//     specs: [
//       { icon: Building2, text: 'Apartments' },
//       { icon: BedDouble, text: '3 BHK' },
//       { icon: Scaling, text: '2351 - 2454 Sq.Ft' },
//     ],
//   },
//   {
//     id: 2,
//     name: 'CASA GRANDE',
//     developer: 'Emaar Properties',
//     location: 'Velachery, Chennai',
//     priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
//     image: '/properties/property-2.jpg',
//     tag: { text: 'Under Construction', color: 'yellow' },
//     specs: [
//       { icon: Building2, text: 'Villa' },
//       { icon: BedDouble, text: '4 BHK' },
//       { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
//     ],
//   },
//   {
//     id: 3,
//     name: 'PRESTIGE BELLA VISTA',
//     developer: 'Prestige Group',
//     location: 'Ayanambakkam, Chennai',
//     priceRange: '₹ 1.8 Cr. - 2.5 Cr.',
//     image: '/properties/property-3.jpg',
//     tag: { text: 'Featured', color: 'blue' },
//     specs: [
//         { icon: Building2, text: 'Apartments' },
//         { icon: BedDouble, text: '2 BHK' },
//         { icon: Scaling, text: '1500 - 1800 Sq.Ft' },
//     ],
//   },
//   {
//     id: 4,
//     name: 'RADIANCE EMPIRE',
//     developer: 'Radiance Realty',
//     location: 'Perambur, Chennai',
//     priceRange: '₹ 2.1 Cr. - 2.9 Cr.',
//     image: '/properties/property-4.jpg',
//     // This property has no tag
//     specs: [
//       { icon: Building2, text: 'Apartments' },
//       { icon: BedDouble, text: '3 BHK' },
//       { icon: Scaling, text: '1900 - 2200 Sq.Ft' },
//     ],
//   },
//   // Add 8 more properties to make a full page of 12
//   ...Array.from({ length: 8 }, (_, i) => ({
//     id: i + 5,
//     name: 'OLYMPIA OPALINE',
//     developer: 'Olympia Group',
//     location: 'Navalur, Chennai',
//     priceRange: `₹ ${(1.0 + i * 0.2).toFixed(1)} Cr. - ${(1.5 + i * 0.2).toFixed(1)} Cr.`,
//     image: `/properties/property-${(i % 8) + 5}.jpg`,
//     tag: i % 3 === 0 ? { text: 'Ready to Move', color: 'green' as const } : undefined,
//     specs: [
//       { icon: Building2, text: 'Apartments' },
//       { icon: BedDouble, text: '3 BHK' },
//       { icon: Scaling, text: '1600 - 1950 Sq.Ft' },
//     ],
//   }))
// ];

// const ITEMS_PER_PAGE = 12;

// // 3. --- PROPERTY CARD COMPONENT (UI Rendering) ---
// // This component's only job is to render the UI for a single property.
// function PropertyCard({ property }: { property: Property }) {
//   const getTagColorClass = (color: 'green' | 'yellow' | 'blue') => {
//     switch (color) {
//       case 'green': return 'bg-green-500';
//       case 'yellow': return 'bg-yellow-500';
//       case 'blue': return 'bg-blue-500';
//       default: return 'bg-gray-500';
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl font-sans">
//       <div className="relative">
//         <Image
//           src={property.image}
//           alt={property.name}
//           width={400}
//           height={250}
//           className="w-full h-56 object-cover rounded-t-2xl"
//           placeholder="blur"
//           blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
//         />
//         {property.tag && (
//           <div className={`absolute top-4 right-4 text-white text-sm font-semibold px-3 py-1 rounded-md ${getTagColorClass(property.tag.color)}`}>
//             {property.tag.text}
//           </div>
//         )}
//         <div className="absolute -bottom-5 left-4 bg-white text-gray-800 text-base font-bold px-4 py-2 rounded-full shadow-lg flex items-center">
//           {property.priceRange}
//         </div>
//         <div className="absolute -bottom-6 right-4 flex space-x-2">
//           <button className="w-12 h-12 rounded-full bg-white text-purple-600 flex items-center justify-center shadow-lg hover:bg-gray-100 transition">
//             <Car size={22} />
//           </button>
//           <button className="w-12 h-12 rounded-full bg-white text-pink-500 flex items-center justify-center shadow-lg hover:bg-gray-100 transition">
//             <Heart size={22} />
//           </button>
//         </div>
//       </div>
//       <div className="pt-10 p-5">
//         <h3 className="text-2xl font-extrabold text-gray-900 tracking-wider mb-1">{property.name}</h3>
//         <p className="text-sm text-gray-500 mb-3">by <a href="#" className="text-yellow-600 font-semibold underline">{property.developer}</a></p>
//         <div className="flex items-center text-gray-500 mb-4">
//           <MapPin size={16} className="mr-2 text-blue-500 flex-shrink-0" />
//           <span>{property.location}</span>
//         </div>
//         <hr className="border-dashed my-4" />
//         <div className="flex flex-wrap gap-2">
//           {property.specs.map((spec, index) => (
//             <div key={index} className="bg-green-50 border border-green-200 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2">
//               <spec.icon size={16} />
//               <span>{spec.text}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="px-5 pb-5 pt-2 flex items-center justify-between">
//         <button className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition">
//           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
//         </button>
//         <button className="flex-grow bg-green-500 text-white py-4 px-6 rounded-full font-bold text-lg hover:bg-green-600 transition-colors duration-300">
//           Contact Us
//         </button>
//       </div>
//     </div>
//   );
// }

// // 4. --- MAIN COMPONENT (Logic & Layout) ---
// // This component handles the overall page layout and pagination logic.
// export default function PropertyListings() {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(propertiesData.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const propertiesToShow = propertiesData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   const handlePageChange = (page: number) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="py-16 md:py-24">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {propertiesToShow.map((property) => (
//             <PropertyCard key={property.id} property={property} />
//           ))}
//         </div>
        
//         {totalPages > 1 && (
//           <div className="flex justify-center items-center space-x-2">
//             <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 border border-gray-300 hover:bg-gray-100 disabled:opacity-50">
//               <ArrowLeft size={18} />
//             </button>
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//               <button key={page} onClick={() => handlePageChange(page)} className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${currentPage === page ? 'bg-yellow-500 text-white' : 'text-gray-700 border border-gray-300 hover:bg-gray-100'}`}>
//                 {page}
//               </button>
//             ))}
//             <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 border border-gray-300 hover:bg-gray-100 disabled:opacity-50">
//               <ArrowRight size={18} />
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// } 








// app/components/PropertyListings.tsx
// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import {
//   Heart,
//   Car,
//   MapPin,
//   Building2,
//   BedDouble,
//   Scaling,
//   ArrowLeft,
//   ArrowRight,
// } from 'lucide-react';

// // 1. --- DATA STRUCTURE DEFINITION ---
// type Property = {
//   id: number;
//   name: string;
//   developer: string;
//   location: string;
//   priceRange: string;
//   image: string; // Absolute path from the `public` directory
//   tag?: { text: string; color: 'green' | 'yellow' | 'blue' };
//   specs: { icon: React.ElementType; text: string }[];
// };

// // 2. --- SAMPLE DATA ARRAY ---
// // ✅ IMAGE PATHS ARE NOW CORRECTED
// // They start with '/' and point to files inside your `public` folder.
// const propertiesData: Property[] = [
//   {
//     id: 1,
//     name: 'AMARA ADHYA',
//     developer: 'AMARA HOMES',
//     location: 'Gobalakpuram, Chennai',
//     priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
//     image: '/properties/property.jpg', // CORRECT
//     tag: { text: 'Ready to Move', color: 'green' },
//     specs: [
//       { icon: Building2, text: 'Apartments' },
//       { icon: BedDouble, text: '3 BHK' },
//       { icon: Scaling, text: '2351 - 2454 Sq.Ft' },
//     ],
//   },
//   {
//     id: 2,
//     name: 'CASA GRANDE',
//     developer: 'Emaar Properties',
//     location: 'Velachery, Chennai',
//     priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
//     image: '/properties/property.jpg', // CORRECT
//     tag: { text: 'Under Construction', color: 'yellow' },
//     specs: [
//       { icon: Building2, text: 'Villa' },
//       { icon: BedDouble, text: '4 BHK' },
//       { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
//     ],
//   },
//   {
//     id: 3,
//     name: 'PRESTIGE BELLA VISTA',
//     developer: 'Prestige Group',
//     location: 'Ayanambakkam, Chennai',
//     priceRange: '₹ 1.8 Cr. - 2.5 Cr.',
//     image: '/properties/property.jpg', // CORRECT
//     tag: { text: 'Featured', color: 'blue' },
//     specs: [
//         { icon: Building2, text: 'Apartments' },
//         { icon: BedDouble, text: '2 BHK' },
//         { icon: Scaling, text: '1500 - 1800 Sq.Ft' },
//     ],
//   },
//   {
//     id: 4,
//     name: 'RADIANCE EMPIRE',
//     developer: 'Radiance Realty',
//     location: 'Perambur, Chennai',
//     priceRange: '₹ 2.1 Cr. - 2.9 Cr.',
//     image: '/properties/property.jpg', // CORRECT
//     specs: [
//       { icon: Building2, text: 'Apartments' },
//       { icon: BedDouble, text: '3 BHK' },
//       { icon: Scaling, text: '1900 - 2200 Sq.Ft' },
//     ],
//   },
//   ...Array.from({ length: 20 }, (_, i) => ({
//     id: i + 5,
//     name: 'OLYMPIA OPALINE',
//     developer: 'Olympia Group',
//     location: 'Navalur, Chennai',
//     priceRange: `₹ ${(1.0 + i * 0.2).toFixed(1)} Cr. - ${(1.5 + i * 0.2).toFixed(1)} Cr.`,
//     image: `/properties/property-${(i % 8) + 5}.jpg`, // CORRECT
//     tag: i % 3 === 0 ? { text: 'Ready to Move', color: 'green' as const } : undefined,
//     specs: [
//       { icon: Building2, text: 'Apartments' },
//       { icon: BedDouble, text: '3 BHK' },
//       { icon: Scaling, text: '1600 - 1950 Sq.Ft' },
//     ],
//   }))
// ];

// const ITEMS_PER_PAGE = 12;

// // 3. --- PROPERTY CARD COMPONENT (UI Rendering) ---
// function PropertyCard({ property }: { property: Property }) {
//   const getTagColorClass = (color: 'green' | 'yellow' | 'blue') => {
//     switch (color) {
//       case 'green': return 'bg-green-500';
//       case 'yellow': return 'bg-yellow-500';
//       case 'blue': return 'bg-blue-500';
//       default: return 'bg-gray-500';
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl font-sans">
//       <div className="relative">
//         <Image
//           src={property.image}
//           alt={property.name}
//           width={400}
//           height={250}
//           className="w-full h-56 object-cover rounded-t-2xl"
//           placeholder="blur"
//           blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
//         />
//         {property.tag && (
//           <div className={`absolute top-4 right-4 text-white text-sm font-semibold px-3 py-1 rounded-md ${getTagColorClass(property.tag.color)}`}>
//             {property.tag.text}
//           </div>
//         )}
//         <div className="absolute -bottom-5 left-4 bg-white text-gray-800 text-base font-bold px-4 py-2 rounded-full shadow-lg flex items-center">
//           {property.priceRange}
//         </div>
//         <div className="absolute -bottom-6 right-4 flex space-x-2">
//           <button className="w-12 h-12 rounded-full bg-white text-purple-600 flex items-center justify-center shadow-lg hover:bg-gray-100 transition">
//             <Car size={22} />
//           </button>
//           <button className="w-12 h-12 rounded-full bg-white text-pink-500 flex items-center justify-center shadow-lg hover:bg-gray-100 transition">
//             <Heart size={22} />
//           </button>
//         </div>
//       </div>
//       <div className="pt-10 p-5">
//         <h3 className="text-2xl font-extrabold text-gray-900 tracking-wider mb-1">{property.name}</h3>
//         <p className="text-sm text-gray-500 mb-3">by <a href="#" className="text-yellow-600 font-semibold underline">{property.developer}</a></p>
//         <div className="flex items-center text-gray-500 mb-4">
//           <MapPin size={16} className="mr-2 text-blue-500 flex-shrink-0" />
//           <span>{property.location}</span>
//         </div>
//         <hr className="border-dashed my-4" />
//         <div className="flex flex-wrap gap-2">
//           {property.specs.map((spec, index) => (
//             <div key={index} className="bg-green-50 border border-green-200 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2">
//               <spec.icon size={16} />
//               <span>{spec.text}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="px-5 pb-5 pt-2 flex items-center justify-between">
//         <button className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition">
//           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
//         </button>
//         <button className="flex-grow bg-green-500 text-white py-4 px-6 rounded-full font-bold text-lg hover:bg-green-600 transition-colors duration-300">
//           Contact Us
//         </button>
//       </div>
//     </div>
//   );
// }

// // 4. --- MAIN COMPONENT (Logic & Layout) ---
// export default function PropertyListings() {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(propertiesData.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const propertiesToShow = propertiesData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   const handlePageChange = (page: number) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="py-16 md:py-24">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {propertiesToShow.map((property) => (
//             <PropertyCard key={property.id} property={property} />
//           ))}
//         </div>
        
//         {totalPages > 1 && (
//           <div className="flex justify-center items-center space-x-2">
//             <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 border border-gray-300 hover:bg-gray-100 disabled:opacity-50">
//               <ArrowLeft size={18} />
//             </button>
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//               <button key={page} onClick={() => handlePageChange(page)} className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${currentPage === page ? 'bg-yellow-500 text-white' : 'text-gray-700 border border-gray-300 hover:bg-gray-100'}`}>
//                 {page}
//               </button>
//             ))}
//             <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 border border-gray-300 hover:bg-gray-100 disabled:opacity-50">
//               <ArrowRight size={18} />
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }








// app/components/PropertyListings.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Heart,
  Car,
  MapPin,
  Building2,
  BedDouble,
  Scaling,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

// 1. --- DATA STRUCTURE DEFINITION ---
type Property = {
  id: number;
  name: string;
  developer: string;
  location: string;
  priceRange: string;
  image: string; // Absolute path from the `public` directory
  tag?: { text: string; color: 'green' | 'yellow' | 'blue' };
  specs: { icon: React.ElementType; text: string }[];
};

// 2. --- SAMPLE DATA ARRAY ---
// ✅ FIXED: Using reliable image paths and proper aspect ratio
const propertiesData: Property[] = [
  {
    id: 1,
    name: 'AMARA ADHYA',
    developer: 'AMARA HOMES',
    location: 'Gobalakpuram, Chennai',
    priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
    image: '/properties/property.jpg', // Make sure this file exists in public/properties/
    tag: { text: 'Ready to Move', color: 'green' },
    specs: [
      { icon: Building2, text: 'Apartments' },
      { icon: BedDouble, text: '3 BHK' },
      { icon: Scaling, text: '2351 - 2454 Sq.Ft' },
    ],
  },
  {
    id: 2,
    name: 'CASA GRANDE',
    developer: 'Emaar Properties',
    location: 'Velachery, Chennai',
    priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
    image: '/properties/property.jpg',
    tag: { text: 'Under Construction', color: 'yellow' },
    specs: [
      { icon: Building2, text: 'Villa' },
      { icon: BedDouble, text: '4 BHK' },
      { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
    ],
  },
  {
    id: 3,
    name: 'PRESTIGE BELLA VISTA',
    developer: 'Prestige Group',
    location: 'Ayanambakkam, Chennai',
    priceRange: '₹ 1.8 Cr. - 2.5 Cr.',
    image: '/properties/property.jpg',
    tag: { text: 'Featured', color: 'blue' },
    specs: [
        { icon: Building2, text: 'Apartments' },
        { icon: BedDouble, text: '2 BHK' },
        { icon: Scaling, text: '1500 - 1800 Sq.Ft' },
    ],
  },
  {
    id: 4,
    name: 'RADIANCE EMPIRE',
    developer: 'Radiance Realty',
    location: 'Perambur, Chennai',
    priceRange: '₹ 2.1 Cr. - 2.9 Cr.',
    image: '/properties/property.jpg',
    specs: [
      { icon: Building2, text: 'Apartments' },
      { icon: BedDouble, text: '3 BHK' },
      { icon: Scaling, text: '1900 - 2200 Sq.Ft' },
    ],
  },
  {
    id: 5,
    name: 'RADIANCEe Kaadu',
    developer: 'Radiance Realty',
    location: 'Perambur, Chennai',
    priceRange: '₹ 2.1 Cr. - 2.9 Cr.',
    image: '/properties/property.jpg',
    specs: [
      { icon: Building2, text: 'Apartments' },
      { icon: BedDouble, text: '3 BHK' },
      { icon: Scaling, text: '1900 - 2200 Sq.Ft' },
    ],
  },
  // Using placeholder images for demo - these will work without actual files
  ...Array.from({ length: 8 }, (_, i) => ({
    id: i + 6,
    name: 'OLYMPIA OPALINE',
    developer: 'Olympia Group',
    location: 'Navalur, Chennai',
    priceRange: `₹ ${(1.0 + i * 0.2).toFixed(1)} Cr. - ${(1.5 + i * 0.2).toFixed(1)} Cr.`,
    image: `https://picsum.photos/400/250?random=${i + 1}`, // Using external placeholder
    tag: i % 3 === 0 ? { text: 'Ready to Move', color: 'green' as const } : undefined,
    specs: [
      { icon: Building2, text: 'Apartments' },
      { icon: BedDouble, text: '3 BHK' },
      { icon: Scaling, text: '1600 - 1950 Sq.Ft' },
    ],
  }))
];

const ITEMS_PER_PAGE = 12;

// 3. --- PROPERTY CARD COMPONENT (UI Rendering) ---
function PropertyCard({ property }: { property: Property }) {
  const getTagColorClass = (color: 'green' | 'yellow' | 'blue') => {
    switch (color) {
      case 'green': return 'bg-green-500';
      case 'yellow': return 'bg-yellow-500';
      case 'blue': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl font-sans">
      <div className="relative">
        {/* ✅ FIXED: Proper image configuration with maintain aspect ratio */}
        <div className="relative w-full h-56 rounded-t-2xl overflow-hidden">
          <Image
            src={property.image}
            alt={property.name}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {property.tag && (
          <div className={`absolute top-4 right-4 text-white text-sm font-semibold px-3 py-1 rounded-md ${getTagColorClass(property.tag.color)}`}>
            {property.tag.text}
          </div>
        )}
        <div className="absolute -bottom-5 left-4 bg-white text-gray-800 text-base font-bold px-4 py-2 rounded-full shadow-lg flex items-center">
          {property.priceRange}
        </div>
        <div className="absolute -bottom-6 right-4 flex space-x-2">
          <button className="w-12 h-12 rounded-full bg-white text-purple-600 flex items-center justify-center shadow-lg hover:bg-gray-100 transition">
            <Car size={22} />
          </button>
          <button className="w-12 h-12 rounded-full bg-white text-pink-500 flex items-center justify-center shadow-lg hover:bg-gray-100 transition">
            <Heart size={22} />
          </button>
        </div>
      </div>
      <div className="pt-10 p-5">
        <h3 className="text-2xl font-extrabold text-gray-900 tracking-wider mb-1">{property.name}</h3>
        <p className="text-sm text-gray-500 mb-3">by <a href="#" className="text-yellow-600 font-semibold underline">{property.developer}</a></p>
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin size={16} className="mr-2 text-blue-500 flex-shrink-0" />
          <span>{property.location}</span>
        </div>
        <hr className="border-dashed my-4" />
        <div className="flex flex-wrap gap-2">
          {property.specs.map((spec, index) => (
            <div key={index} className="bg-green-50 border border-green-200 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2">
              <spec.icon size={16} />
              <span>{spec.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 pb-5 pt-2 flex items-center justify-between">
        <button className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
        </button>
        <button className="flex-grow bg-green-500 text-white py-4 px-6 rounded-full font-bold text-lg hover:bg-green-600 transition-colors duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
}

// 4. --- MAIN COMPONENT (Logic & Layout) ---
export default function PropertyListings() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(propertiesData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const propertiesToShow = propertiesData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {propertiesToShow.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 border border-gray-300 hover:bg-gray-100 disabled:opacity-50">
              <ArrowLeft size={18} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button key={page} onClick={() => handlePageChange(page)} className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${currentPage === page ? 'bg-yellow-500 text-white' : 'text-gray-700 border border-gray-300 hover:bg-gray-100'}`}>
                {page}
              </button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 border border-gray-300 hover:bg-gray-100 disabled:opacity-50">
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}