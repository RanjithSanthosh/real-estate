


// // app/components/CuratedCollections.tsx
// "use client";

// import Image from 'next/image';
// import { ArrowUpRight, PlusCircle } from 'lucide-react';
// import React from 'react';

// interface Collection {
//   title: string;
//   imageUrl: string;
// }

// const collections: Collection[] = [
//   {
//     title: "Explore Buildings", // Updated text
//     imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
//   },
//   {
//     title: "Explore Buildings", // Updated text
//     imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
//   },
//   {
//     title: "Explore Buildings", // Updated text
//     imageUrl: "https://images.unsplash.com/photo-1560185007-c5ca915a0152?q=80&w=2070&auto=format&fit=crop",
//   },
//   {
//     title: "Explore Buildings", // Updated text
//     imageUrl: "https://images.unsplash.com/photo-1542838034-b9423a716120?q=80&w=1939&auto=format&fit=crop",
//   },
//   // Add more collections as needed
// ];

// const CollectionCard = ({ collection }: { collection: Collection }) => (
//   // ✅ Increased width and height, removed rounded corners
//   <div className="group relative flex-shrink-0 w-[400px] h-[350px] overflow-hidden snap-center">
//     <Image
//       src={collection.imageUrl}
//       alt={collection.title}
//       fill
//       style={{ objectFit: 'cover' }}
//       className="transition-transform duration-500 group-hover:scale-110"
//     />
//     <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
//     {/* ✅ Removed rounded-2xl from border */}
//     <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500 transition-all duration-300"></div>

//     <div className="relative h-full flex flex-col items-center justify-center text-white">
//       {/* PlusCircle is centered with translate-x/y-1/2 */}
//       <PlusCircle
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//         strokeWidth={1.5}
//       />
//       {/* ✅ Changed to always visible, but only text shows on hover */}
//       <p className="font-semibold text-lg z-10 transition-opacity duration-300 group-hover:opacity-100">
//         {collection.title}
//       </p>
//     </div>
//   </div>
// );

// export default function CuratedCollections() {
//   return (
//     <section className="bg-white py-16 md:py-24">
//       <div className="container mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//             Curated Collections
//           </h2>
//           <p className="text-gray-500 mt-2">
//             Handpicked for your needs
//           </p>
//         </div>

//         {/* Ensure the scroll container also has no rounded corners if it's visible */}
//         <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6 pb-8 px-6">
//           {collections.map((collection, index) => (
//             <CollectionCard key={index} collection={collection} />
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <button className="border border-green-400 text-green-600 font-semibold py-2.5 px-6 rounded-full hover:bg-green-50 transition flex items-center gap-2 mx-auto">
//             View All <ArrowUpRight size={16} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }




// app/components/CuratedCollections.tsx
"use client";

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface Collection {
  title: string;
  imageUrl: string;
}

const collections: Collection[] = [
  {
    title: "Explore Apartments",
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Explore Interiors",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Explore Villas",
    imageUrl: "https://images.unsplash.com/photo-1560185007-c5ca915a0152?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Explore Penthouses",
    imageUrl: "https://images.unsplash.com/photo-1542838034-b9423a716120?q=80&w=1939&auto=format&fit=crop",
  },
];

// Variants for animating the border on hover
const cardVariants: Variants = {
  rest: { borderColor: "rgba(0, 0, 0, 0)" },
  hover: {
    borderColor: "#3b82f6", // blue-500
  },
};

const CollectionCard = ({ collection }: { collection: Collection }) => (
  <motion.div
    variants={cardVariants}
    initial="rest"
    whileHover="hover"
    className="group relative flex-shrink-0 w-[400px] h-[350px] overflow-hidden snap-center"
  >
    <Image
      src={collection.imageUrl}
      alt={collection.title}
      fill
      style={{ objectFit: 'cover' }}
      className="transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
    {/* This motion.div controls the animated border */}
    <motion.div
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute inset-0 border-4"
    ></motion.div>

    <div className="relative h-full flex items-end justify-center text-white p-4">
      {/* The PlusCircle icon has been completely removed */}
      <p className="font-semibold text-lg z-10 text-center absolute bottom-10">
        {collection.title}
      </p>
    </div>
  </motion.div>
);

export default function CuratedCollections() {
  // Variants for the overall section and items
  const sectionContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { ease: "easeOut" } },
  };

  // Variants for the horizontally scrolling card container
  const cardContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
  };

  const cardItemVariants: Variants = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { ease: "easeOut" } },
  };

  return (
    <motion.section
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white py-16 md:py-24"
    >
      <div className="container mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Curated Collections
          </h2>
          <p className="text-gray-500 mt-2">
            Handpicked for your needs
          </p>
        </motion.div>

        <motion.div
          variants={cardContainerVariants}
          className="flex overflow-x-auto snap-x snap-mandatory space-x-6 pb-8 px-6"
        >
          {collections.map((collection, index) => (
            <motion.div variants={cardItemVariants} key={index}>
                <CollectionCard collection={collection} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#f0fdf4" }}
            whileTap={{ scale: 0.95 }}
            className="border border-green-400 text-green-600 font-semibold py-2.5 px-6 rounded-full hover:bg-green-50 transition flex items-center gap-2 mx-auto"
          >
            View All <ArrowUpRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}