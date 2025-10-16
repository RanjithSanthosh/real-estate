



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
// import { useFavorites } from '../../app/context/FavoritesContext';
// import { toast } from 'react-hot-toast';

// // --- Reusable Project Card Component ---
// const ProjectCard = ({ property }: { property: Property }) => {
//   const { openScheduleVisitModal } = useUI();
//   const { addFavorite, removeFavorite, isFavorite } = useFavorites();
//   const isFav = isFavorite(property.id);

//   // const handleFavoriteToggle = (e: React.MouseEvent) => {
//   //   e.preventDefault(); // Stop the Link navigation
//   //   e.stopPropagation();
//   //   if (isFav) {
//   //     removeFavorite(property.id);
//   //   } else {
//   //     addFavorite(property.id);
//   //   }
//   // };

//    const handleFavoriteToggle = (e: React.MouseEvent) => {
//     e.preventDefault(); 
//     e.stopPropagation();
    
//     // Step 2: Use the toast function
//     if (isFav) {
//       removeFavorite(property.id);
//       toast('Property removed from favorites', {
//         icon: '💔',
//       });
//     } else {
//       addFavorite(property.id);
//       // This creates a success toast that looks similar to your image
//       toast.success('Property added to favorites', {
//         style: {
//           background: '#28a745', // Green background
//           color: '#ffffff',     // White text
//         },
//         iconTheme: {
//           primary: '#ffffff',   // White icon
//           secondary: '#28a745', // Green icon background
//         },
//       });
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
            
//             {/* CORRECTED FAVORITE BUTTON */}
//             <motion.button
//               onClick={handleFavoriteToggle}
//               whileHover={{ scale: 1.1 }}
//               className="bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-sm"
//             >
//               <Heart 
//                 size={20} 
//                 className={isFav ? 'text-red-500' : 'text-gray-700'}
//                 fill={isFav ? 'currentColor' : 'none'}
//               />
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
//           <p className="text-sm text-gray-500 mt-1 mb-3">
//             {property.location}
//           </p>

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
import { useFavorites } from "../../app/context/FavoritesContext";
import { toast } from "react-hot-toast";

const ProjectCard = ({ property }: { property: Property }) => {
  const { openScheduleVisitModal } = useUI();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite(property.id);

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFav) {
      removeFavorite(property.id);
      toast("Property removed from favorites", { icon: "💔" });
    } else {
      addFavorite(property.id);
      toast.success("Property added to favorites", {
        style: { background: "#28a745", color: "#ffffff" },
        iconTheme: { primary: "#ffffff", secondary: "#28a745" },
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
        className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-md h-full flex flex-col transition-all duration-300 hover:shadow-2xl w-full max-w-[420px]"
      >
        {/* Image Section */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden">
          <motion.div variants={imageHoverVariants} className="h-full w-full">
            <Image
              src={property.images[0]}
              alt={property.name}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>

          {/* Floating Icons */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.1 }}
              className="bg-white/90 backdrop-blur-md p-2 rounded-full shadow-sm sm:p-2.5"
            >
              <Car size={18} className="sm:size-20" />
            </motion.button>
            <motion.button
              onClick={handleFavoriteToggle}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.1 }}
              className="bg-white/90 backdrop-blur-md p-2 rounded-full shadow-sm sm:p-2.5"
            >
              <Heart
                size={18}
                className={isFav ? "text-red-500" : "text-gray-700"}
                fill={isFav ? "currentColor" : "none"}
              />
            </motion.button>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 uppercase line-clamp-1">
            {property.name}
          </h3>
          {developer && (
            <p className="text-sm text-yellow-600 font-medium mt-0.5 sm:mt-1">
              by {developer.name}
            </p>
          )}
          <p className="text-xs sm:text-sm text-gray-500 mt-1 mb-3 line-clamp-1">
            {property.location}
          </p>

          <p className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
            {property.priceRange}
          </p>

          <div className="border-t border-gray-200 mb-3 sm:mb-4"></div>

          {/* Specs Section */}
          <div className="flex justify-between items-center text-gray-600 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Building size={14} />
              <span>{propertyType}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <BedDouble size={14} />
              <span>{beds}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <SquareArrowOutUpRight size={14} />
              <span>{area}</span>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="mt-auto pt-4 sm:pt-5">
            <div className="flex items-center gap-2 sm:gap-3">
              <motion.button
                onClick={handleContactClick}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-green-100 text-green-600 rounded-full sm:p-3.5"
              >
                <Phone size={16} />
              </motion.button>
              <motion.button
                onClick={handleContactClick}
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.03 }}
                className="w-full bg-green-500 text-white font-semibold py-2.5 sm:py-3 rounded-full text-sm sm:text-base"
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

export default function FeaturedProjects() {
  const featuredProperties = propertiesData.slice(0, 3);

  const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const gridItemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.5 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white py-12 sm:py-16 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div variants={gridItemVariants} className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Featured Projects Across All Cities
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Trending properties in the area
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={gridContainerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 justify-items-center"
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
