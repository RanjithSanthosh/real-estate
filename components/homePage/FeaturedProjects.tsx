// // app/components/FeaturedProjects.tsx
// "use client";

// import Image from 'next/image';
// import { Heart, Car, Building, BedDouble, SquareArrowOutUpRight } from 'lucide-react';
// // FIX: Import the 'Variants' type from framer-motion
// import { motion, Variants } from 'framer-motion';

// interface Project {
//   name: string;
//   developer: string;
//   location: string;
//   priceRange: string;
//   type: string;
//   beds: string;
//   area: string;
//   imageUrl: string;
// }

// const projects: Project[] = [
//   {
//     name: "AMARA ADHYA",
//     developer: "AMARA HOMES",
//     location: "Gobalapuram, Chennai",
//     priceRange: "₹ 5.0 Cr. - 5.9 Cr.",
//     type: "Apartments",
//     beds: "3 BHK",
//     area: "2351 - 2454 Sq.Ft",
//     imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
//   },
//   {
//     name: "Elysian Gardens",
//     developer: "Prestige Group",
//     location: "Kotturpuram, Chennai",
//     priceRange: "₹ 4.5 Cr. - 6.2 Cr.",
//     type: "Villas",
//     beds: "4 BHK",
//     area: "3100 - 3800 Sq.Ft",
//     imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
//   },
//   {
//     name: "Hari Gardens",
//     developer: "Prestige Group",
//     location: "Kotturpuram, Chennai",
//     priceRange: "₹ 4.5 Cr. - 6.2 Cr.",
//     type: "Villas",
//     beds: "4 BHK",
//     area: "3100 - 3800 Sq.Ft",
//     imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
//   },
// ];

// // FIX: Explicitly type the constant with the 'Variants' type
// const cardHoverVariants: Variants = {
//   rest: {
//     scale: 1,
//     y: 0,
//   },
//   hover: {
//     scale: 1.03,
//     y: -8,
//     transition: {
//       duration: 0.3,
//       ease: "easeOut", // This is now correctly typed
//     },
//   },
// };

// // FIX: Also apply the 'Variants' type here for consistency
// const imageHoverVariants: Variants = {
//   rest: {
//     scale: 1,
//   },
//   hover: {
//     scale: 1.1,
//     transition: {
//       duration: 0.3,
//       ease: "easeOut", // This is now correctly typed
//     },
//   },
// };

// const ProjectCard = ({ project }: { project: Project }) => (
//   <motion.div
//     variants={cardHoverVariants}
//     initial="rest"
//     whileHover="hover"
//     animate="rest"
//     className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm min-w-[320px] md:min-w-full relative"
//   >
//     <div className="relative overflow-hidden">
//       <motion.div variants={imageHoverVariants}>
//         <Image
//           src={project.imageUrl}
//           alt={project.name}
//           width={400}
//           height={250}
//           className="w-full h-56 object-cover"
//         />
//       </motion.div>
//       <div className="absolute top-4 right-4 flex gap-2">
//         <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-white/80 backdrop-blur-sm p-2.5 rounded-full text-gray-700">
//           <Car size={20} />
//         </motion.button>
//         <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-white/80 backdrop-blur-sm p-2.5 rounded-full text-red-500">
//           <Heart size={20} />
//         </motion.button>
//       </div>
//     </div>
//     <div className="p-5 flex flex-col flex-grow">
//       <h3 className="text-xl font-semibold text-gray-800 tracking-wider">{project.name}</h3>
//       <p className="text-sm text-yellow-600 font-medium my-1">by {project.developer}</p>
//       <p className="text-sm text-gray-500 mb-3">{project.location}</p>
//       <p className="text-lg font-bold text-gray-900 mb-4">{project.priceRange}</p>

//       <div className="border-t border-gray-200 my-4"></div>

//       <div className="flex justify-between items-center text-gray-600 text-sm">
//         <div className="flex items-center gap-2"><Building size={16} /><span>{project.type}</span></div>
//         <div className="flex items-center gap-2"><BedDouble size={16} /><span>{project.beds}</span></div>
//         <div className="flex items-center gap-2"><SquareArrowOutUpRight size={16} /><span>{project.area}</span></div>
//       </div>

//       <div className="border-t border-gray-200 my-4"></div>

//       <div className="flex-grow"></div>

//       <div className="flex items-center gap-3">
//         <motion.button whileHover={{ scale: 1.1, backgroundColor: "#bbf7d0" }} whileTap={{ scale: 0.9 }} className="p-3.5 bg-green-100 text-green-600 rounded-full">
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
//         </motion.button>
//         <motion.button
//           whileHover={{ backgroundPosition: 'right center', scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 rounded-full transition-all duration-500 bg-[length:200%_auto] bg-left"
//         >
//           Contact Us
//         </motion.button>
//       </div>
//     </div>
//   </motion.div>
// );

// export default function FeaturedProjects() {
//   const gridContainerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const gridItemVariants: Variants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         ease: "easeOut",
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <motion.section
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.5 }}
//       className="bg-white py-16 md:py-24"
//     >
//       <div className="container mx-auto px-6">
//         <motion.div
//           variants={gridItemVariants}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//             Featured Projects Across All Cities
//           </h2>
//           <p className="text-gray-500 mt-2">
//             Trending properties in the area
//           </p>
//         </motion.div>

//         <motion.div
//           variants={gridContainerVariants}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {projects.map((project) => (
//             <motion.div variants={gridItemVariants} key={project.name} className="flex">
//               <ProjectCard project={project} />
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           variants={gridItemVariants}
//           className="flex justify-center mt-12"
//         >
//           <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
//             <motion.div
//               initial={{ x: "-100%" }}
//               whileInView={{ x: "0%" }}
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
//               className="w-8 h-2 bg-green-500 rounded-full"
//             ></motion.div>
//           </div>
//         </motion.div>

//         <motion.div
//           variants={gridItemVariants}
//           className="text-center mt-8"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
//             whileTap={{ scale: 0.95 }}
//             className="border border-gray-300 text-gray-700 font-semibold py-2.5 px-6 rounded-full flex items-center gap-2 mx-auto"
//           >
//             View All <SquareArrowOutUpRight size={16} />
//           </motion.button>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }

// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import { Heart, Car, Building, BedDouble, SquareArrowOutUpRight, Phone } from 'lucide-react';
// import { motion, Variants } from 'framer-motion';
// import { propertiesData, developersData, Property } from '../../app/data/properties';
// import { useUI } from '../../app/context/UIContext';

// // --- Reusable Project Card Component ---
// const ProjectCard = ({ property }: { property: Property }) => {
//     const { openScheduleVisitModal } = useUI();

//     const developer = developersData.find(d => d.id === property.developerId);
//     const propertyType = property.specs.find(spec => spec.icon === Building)?.text || 'N/A';
//     const beds = property.specs.find(spec => spec.icon === BedDouble)?.text || 'N/A';
//     const area = property.specs.find(spec => spec.icon === SquareArrowOutUpRight)?.text || 'N/A';

//     const cardHoverVariants: Variants = { /* ... */ };
//     const imageHoverVariants: Variants = { /* ... */ };

//     const handleContactClick = (e: React.MouseEvent) => {
//         e.preventDefault(); // Prevent the parent Link from navigating
//         openScheduleVisitModal(property); // Open the correct modal with this property's data
//     };

//     return (
//         <Link href={`/properties/${property.id}`} className="block h-full">
//             <motion.div
//                 variants={cardHoverVariants}
//                 initial="rest"
//                 whileHover="hover"
//                 animate="rest"
//                 className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm h-full flex flex-col"
//             >
//                 <div className="relative overflow-hidden h-56 w-full">
//                     <motion.div variants={imageHoverVariants} className="h-full w-full">
//                         <Image src={property.images[0]} alt={property.name} fill style={{ objectFit: "cover" }} sizes="33vw" />
//                     </motion.div>
//                     <div className="absolute top-4 right-4 flex gap-2">
//                         <motion.button whileHover={{ scale: 1.1 }} className="bg-white/80 backdrop-blur-sm p-2.5 rounded-full"><Car size={20} /></motion.button>
//                         <motion.button whileHover={{ scale: 1.1 }} className="bg-white/80 backdrop-blur-sm p-2.5 rounded-full text-red-500"><Heart size={20} /></motion.button>
//                     </div>
//                 </div>
//                 <div className="p-5 flex flex-col flex-grow">
//                     <h3 className="text-xl font-semibold text-gray-800 tracking-wider">{property.name}</h3>
//                     {developer && <p className="text-sm text-yellow-600 font-medium my-1">by {developer.name}</p>}
//                     <p className="text-sm text-gray-500 mb-3">{property.location}</p>
//                     <p className="text-lg font-bold text-gray-900 mb-4">{property.priceRange}</p>
//                     <div className="border-t border-gray-200 my-4"></div>
//                     <div className="flex justify-between items-center text-gray-600 text-sm">
//                         <div className="flex items-center gap-2"><Building size={16} /><span>{propertyType}</span></div>
//                         <div className="flex items-center gap-2"><BedDouble size={16} /><span>{beds}</span></div>
//                         <div className="flex items-center gap-2"><SquareArrowOutUpRight size={16} /><span>{area}</span></div>
//                     </div>
//                     <div className="mt-auto pt-4">
//                         <div className="flex items-center gap-3">
//                             <motion.button onClick={handleContactClick} whileHover={{ scale: 1.1 }} className="p-3.5 bg-green-100 text-green-600 rounded-full"><Phone /></motion.button>
//                             <motion.button onClick={handleContactClick} whileHover={{ scale: 1.02 }} className="w-full bg-green-500 text-white font-semibold py-3 rounded-full">Contact Us</motion.button>
//                         </div>
//                     </div>
//                 </div>
//             </motion.div>
//         </Link>
//     );
// };

// // --- Main Featured Projects Component ---
// export default function FeaturedProjects() {
//     const featuredProperties = propertiesData.slice(0, 3);
//     const gridContainerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
//     const gridItemVariants: Variants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.5 } } };

//     return (
//         <motion.section
//             initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
//             className="bg-white py-16 md:py-24"
//         >
//             <div className="container mx-auto px-6">
//                 <motion.div variants={gridItemVariants} className="text-center mb-12">
//                     <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Featured Projects Across All Cities</h2>
//                     <p className="text-gray-500 mt-2">Trending properties in the area</p>
//                 </motion.div>

//                 <motion.div variants={gridContainerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {featuredProperties.map((property) => (
//                         <motion.div variants={gridItemVariants} key={property.id} className="flex min-w-0">
//                             <ProjectCard property={property} />
//                         </motion.div>
//                     ))}
//                 </motion.div>

//                 <motion.div variants={gridItemVariants} className="text-center mt-12">
//                     <Link href="/search">
//                         <motion.button whileHover={{ scale: 1.05 }} className="border border-gray-300 text-gray-700 font-semibold py-2.5 px-6 rounded-full flex items-center gap-2 mx-auto">
//                             View All <SquareArrowOutUpRight size={16} />
//                         </motion.button>
//                     </Link>
//                 </motion.div>
//             </div>
//         </motion.section>
//     );
// }



// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   Heart,
//   Car,
//   Building,
//   BedDouble,
//   SquareArrowOutUpRight,
//   Phone,
// } from "lucide-react";
// import { motion, Variants } from "framer-motion";
// import {
//   propertiesData,
//   developersData,
//   Property,
// } from "../../app/data/properties";
// import { useUI } from "../../app/context/UIContext";
// import { useFavorites } from "../../app/context/FavoritesContext";

// // --- Reusable Project Card Component ---
// const ProjectCard = ({ property }: { property: Property }) => {
//   const { openScheduleVisitModal } = useUI();

//   const { addFavorite, removeFavorite, isFavorite } = useFavorites();
//   const isFav = isFavorite(property.id);

//   const handleFavoriteToggle = (e: React.MouseEvent) => {
//     e.preventDefault(); // Stop the Link navigation
//     e.stopPropagation();
//     if (isFav) {
//       removeFavorite(property.id);
//     } else {
//       addFavorite(property.id);
//     }
//   };

//   const developer = developersData.find((d) => d.id === property.developerId);
//   const propertyType =
//     property.specs.find((spec) => spec.icon === Building)?.text || "N/A";
//   const beds =
//     property.specs.find((spec) => spec.icon === BedDouble)?.text || "N/A";
//   const area =
//     property.specs.find((spec) => spec.icon === SquareArrowOutUpRight)?.text ||
//     "N/A";

//   const handleContactClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     openScheduleVisitModal(property);
//   };

//   const cardHoverVariants: Variants = {
//     rest: { scale: 1 },
//     hover: { scale: 1.03, transition: { duration: 0.3 } },
//   };

//   const imageHoverVariants: Variants = {
//     rest: { scale: 1 },
//     hover: { scale: 1.1, transition: { duration: 0.4 } },
//   };

//   return (
//     <Link href={`/properties/${property.id}`} className="block h-full">
//       <motion.div
//         variants={cardHoverVariants}
//         initial="rest"
//         whileHover="hover"
//         animate="rest"
//         className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-md h-full flex flex-col transition-all duration-300 hover:shadow-2xl w-[420px]"
//       >
//         {/* Image Section */}
//         <div className="relative h-64 w-full overflow-hidden">
//           <motion.div variants={imageHoverVariants} className="h-full w-full">
//             <Image
//               src={property.images[0]}
//               alt={property.name}
//               fill
//               className="object-cover"
//               sizes="33vw"
//             />
//           </motion.div>

//           {/* Floating Icons */}
//           <div className="absolute top-4 right-4 flex gap-2">
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               className="bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-sm"
//             >
//               <Car size={20} />
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               className="bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-sm text-red-500"
//             >
//               <motion.button
//                 onClick={handleFavoriteToggle}
//                 whileHover={{ scale: 1.1 }}
//                 className=" backdrop-blur-md p-2.5 rounded-full shadow-sm"
//               >
//                 <Heart
//                   size={20}
//                   className={isFav ? "text-red-500" : "text-gray-700"}
//                   fill={isFav ? "currentColor" : "none"}
//                 />
//               </motion.button>
//             </motion.button>
//           </div>
//         </div>

//         {/* Details Section */}
//         <div className="p-6 flex flex-col flex-grow">
//           <h3 className="text-xl font-semibold text-gray-800 uppercase">
//             {property.name}
//           </h3>
//           {developer && (
//             <p className="text-sm text-yellow-600 font-medium mt-1">
//               by {developer.name}
//             </p>
//           )}
//           <p className="text-sm text-gray-500 mt-1 mb-3">{property.location}</p>

//           <p className="text-lg font-bold text-gray-900 mb-4">
//             {property.priceRange}
//           </p>

//           <div className="border-t border-gray-200 mb-4"></div>

//           {/* Specs Section */}
//           <div className="flex justify-between items-center text-gray-600 text-sm">
//             <div className="flex items-center gap-2">
//               <Building size={16} />
//               <span>{propertyType}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <BedDouble size={16} />
//               <span>{beds}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <SquareArrowOutUpRight size={16} />
//               <span>{area}</span>
//             </div>
//           </div>

//           {/* Contact Buttons */}
//           <div className="mt-auto pt-5">
//             <div className="flex items-center gap-3">
//               <motion.button
//                 onClick={handleContactClick}
//                 whileHover={{ scale: 1.1 }}
//                 className="p-3.5 bg-green-100 text-green-600 rounded-full"
//               >
//                 <Phone />
//               </motion.button>
//               <motion.button
//                 onClick={handleContactClick}
//                 whileHover={{ scale: 1.03 }}
//                 className="w-full bg-green-500 text-white font-semibold py-3 rounded-full text-base"
//               >
//                 Contact Us
//               </motion.button>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </Link>
//   );
// };

// // --- Main Featured Projects Component ---
// export default function FeaturedProjects() {
//   const featuredProperties = propertiesData.slice(0, 3);

//   const gridContainerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 },
//     },
//   };

//   const gridItemVariants: Variants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { ease: "easeOut", duration: 0.5 },
//     },
//   };

//   return (
//     <motion.section
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       className="bg-white py-16 md:py-24"
//     >
//       <div className="container mx-auto px-6">
//         {/* Section Header */}
//         <motion.div variants={gridItemVariants} className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//             Featured Projects Across All Cities
//           </h2>
//           <p className="text-gray-500 mt-2">Trending properties in the area</p>
//         </motion.div>

//         {/* Grid */}
//         <motion.div
//           variants={gridContainerVariants}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
//         >
//           {featuredProperties.map((property) => (
//             <motion.div
//               variants={gridItemVariants}
//               key={property.id}
//               className="w-full max-w-[420px]"
//             >
//               <ProjectCard property={property} />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* View All Button */}
//         <motion.div variants={gridItemVariants} className="text-center mt-14">
//           <Link href="/search">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="border border-gray-300 text-gray-700 font-semibold py-2.5 px-6 rounded-full flex items-center gap-2 mx-auto"
//             >
//               View All <SquareArrowOutUpRight size={16} />
//             </motion.button>
//           </Link>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }





"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Car,
  Building,
  BedDouble,
  SquareArrowOutUpRight,
  Phone,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import {
  propertiesData,
  developersData,
  Property,
} from "../../app/data/properties";
import { useUI } from "../../app/context/UIContext";
import { useFavorites } from '../../app/context/FavoritesContext';
import { toast } from 'react-hot-toast';

// --- Reusable Project Card Component ---
const ProjectCard = ({ property }: { property: Property }) => {
  const { openScheduleVisitModal } = useUI();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite(property.id);

  // const handleFavoriteToggle = (e: React.MouseEvent) => {
  //   e.preventDefault(); // Stop the Link navigation
  //   e.stopPropagation();
  //   if (isFav) {
  //     removeFavorite(property.id);
  //   } else {
  //     addFavorite(property.id);
  //   }
  // };

   const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation();
    
    // Step 2: Use the toast function
    if (isFav) {
      removeFavorite(property.id);
      toast('Property removed from favorites', {
        icon: '💔',
      });
    } else {
      addFavorite(property.id);
      // This creates a success toast that looks similar to your image
      toast.success('Property added to favorites', {
        style: {
          background: '#28a745', // Green background
          color: '#ffffff',     // White text
        },
        iconTheme: {
          primary: '#ffffff',   // White icon
          secondary: '#28a745', // Green icon background
        },
      });
    }
  };

  const developer = developersData.find((d) => d.id === property.developerId);
  const propertyType =
    property.specs.find((spec) => spec.icon === Building)?.text || "N/A";
  const beds =
    property.specs.find((spec) => spec.icon === BedDouble)?.text || "N/A";
  const area =
    property.specs.find((spec) => spec.icon === SquareArrowOutUpRight)?.text ||
    "N/A";

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openScheduleVisitModal(property);
  };

  const cardHoverVariants: Variants = {
    rest: { scale: 1 },
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  const imageHoverVariants: Variants = {
    rest: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.4 } },
  };

  return (
    <Link href={`/properties/${property.id}`} className="block h-full">
      <motion.div
        variants={cardHoverVariants}
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-md h-full flex flex-col transition-all duration-300 hover:shadow-2xl w-[420px]"
      >
        {/* Image Section */}
        <div className="relative h-64 w-full overflow-hidden">
          <motion.div variants={imageHoverVariants} className="h-full w-full">
            <Image
              src={property.images[0]}
              alt={property.name}
              fill
              className="object-cover"
              sizes="33vw"
            />
          </motion.div>

          {/* Floating Icons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-sm"
            >
              <Car size={20} />
            </motion.button>
            
            {/* CORRECTED FAVORITE BUTTON */}
            <motion.button
              onClick={handleFavoriteToggle}
              whileHover={{ scale: 1.1 }}
              className="bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-sm"
            >
              <Heart 
                size={20} 
                className={isFav ? 'text-red-500' : 'text-gray-700'}
                fill={isFav ? 'currentColor' : 'none'}
              />
            </motion.button>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-gray-800 uppercase">
            {property.name}
          </h3>
          {developer && (
            <p className="text-sm text-yellow-600 font-medium mt-1">
              by {developer.name}
            </p>
          )}
          <p className="text-sm text-gray-500 mt-1 mb-3">
            {property.location}
          </p>

          <p className="text-lg font-bold text-gray-900 mb-4">
            {property.priceRange}
          </p>

          <div className="border-t border-gray-200 mb-4"></div>

          {/* Specs Section */}
          <div className="flex justify-between items-center text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <Building size={16} />
              <span>{propertyType}</span>
            </div>
            <div className="flex items-center gap-2">
              <BedDouble size={16} />
              <span>{beds}</span>
            </div>
            <div className="flex items-center gap-2">
              <SquareArrowOutUpRight size={16} />
              <span>{area}</span>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="mt-auto pt-5">
            <div className="flex items-center gap-3">
              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.1 }}
                className="p-3.5 bg-green-100 text-green-600 rounded-full"
              >
                <Phone />
              </motion.button>
              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.03 }}
                className="w-full bg-green-500 text-white font-semibold py-3 rounded-full text-base"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

// --- Main Featured Projects Component ---
export default function FeaturedProjects() {
  const featuredProperties = propertiesData.slice(0, 3);

  const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const gridItemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.5 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white py-16 md:py-24"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div variants={gridItemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Featured Projects Across All Cities
          </h2>
          <p className="text-gray-500 mt-2">Trending properties in the area</p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={gridContainerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
        >
          {featuredProperties.map((property) => (
            <motion.div
              variants={gridItemVariants}
              key={property.id}
              className="w-full max-w-[420px]"
            >
              <ProjectCard property={property} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div variants={gridItemVariants} className="text-center mt-14">
          <Link href="/search">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-gray-300 text-gray-700 font-semibold py-2.5 px-6 rounded-full flex items-center gap-2 mx-auto"
            >
              View All <SquareArrowOutUpRight size={16} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}