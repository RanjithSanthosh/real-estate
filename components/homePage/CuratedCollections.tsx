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
//     title: "Luxury Villas",
//     imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
//   },
//   {
//     title: "Urban Apartments",
//     imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
//   },
//   {
//     title: "Coastal Homes",
//     imageUrl: "https://images.unsplash.com/photo-1560185007-c5ca915a0152?q=80&w=2070&auto=format&fit=crop",
//   },
//   {
//     title: "Downtown Lofts",
//     imageUrl: "https://images.unsplash.com/photo-1542838034-b9423a716120?q=80&w=1939&auto=format&fit=crop",
//   },
//   // Add more collections as needed
// ];

// const CollectionCard = ({ collection }: { collection: Collection }) => (
//   <div className="group relative flex-shrink-0 w-80 md:w-96 h-56 rounded-2xl overflow-hidden snap-center">
//     <Image
//       src={collection.imageUrl}
//       alt={collection.title}
//       fill
//       style={{ objectFit: 'cover' }}
//       className="transition-transform duration-500 group-hover:scale-110"
//     />
//     <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
//     <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500 rounded-2xl transition-all duration-300"></div>

//     <div className="relative h-full flex flex-col items-center justify-center text-white">
//       <PlusCircle
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//         strokeWidth={1.5}
//       />
//       <p className="font-semibold text-lg z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
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

//         <div className="flex overflow-x-auto snap-x snap-mandatory  space-x-6 pb-8 px-6">
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
import { ArrowUpRight, PlusCircle } from 'lucide-react';
import React from 'react';

interface Collection {
  title: string;
  imageUrl: string;
}

const collections: Collection[] = [
  {
    title: "Explore Buildings", // Updated text
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Explore Buildings", // Updated text
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Explore Buildings", // Updated text
    imageUrl: "https://images.unsplash.com/photo-1560185007-c5ca915a0152?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Explore Buildings", // Updated text
    imageUrl: "https://images.unsplash.com/photo-1542838034-b9423a716120?q=80&w=1939&auto=format&fit=crop",
  },
  // Add more collections as needed
];

const CollectionCard = ({ collection }: { collection: Collection }) => (
  // ✅ Increased width and height, removed rounded corners
  <div className="group relative flex-shrink-0 w-[400px] h-[350px] overflow-hidden snap-center">
    <Image
      src={collection.imageUrl}
      alt={collection.title}
      fill
      style={{ objectFit: 'cover' }}
      className="transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
    {/* ✅ Removed rounded-2xl from border */}
    <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500 transition-all duration-300"></div>

    <div className="relative h-full flex flex-col items-center justify-center text-white">
      {/* PlusCircle is centered with translate-x/y-1/2 */}
      <PlusCircle
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        strokeWidth={1.5}
      />
      {/* ✅ Changed to always visible, but only text shows on hover */}
      <p className="font-semibold text-lg z-10 transition-opacity duration-300 group-hover:opacity-100">
        {collection.title}
      </p>
    </div>
  </div>
);

export default function CuratedCollections() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Curated Collections
          </h2>
          <p className="text-gray-500 mt-2">
            Handpicked for your needs
          </p>
        </div>

        {/* Ensure the scroll container also has no rounded corners if it's visible */}
        <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6 pb-8 px-6">
          {collections.map((collection, index) => (
            <CollectionCard key={index} collection={collection} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-green-400 text-green-600 font-semibold py-2.5 px-6 rounded-full hover:bg-green-50 transition flex items-center gap-2 mx-auto">
            View All <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}