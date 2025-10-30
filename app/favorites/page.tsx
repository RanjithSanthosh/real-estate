// 'use client';

// import React, { useMemo } from 'react';
// import GenericHero from '@/components/shared/GenericHero';
// import PropertyListings from '@/components/homePage/PropertyListings';
// import { useFavorites } from '../context/FavoritesContext';
// import { propertiesData } from '../data/properties';
// import SiteMapFooter from '@/components/homePage/SiteMapFooter';
// import DetailedFooter from '@/components/aboutPage/DetailedFooter';
// import heroImage from '@/public/assets/aboutPage/AboutHERO.png'; // Use a suitable background

// export default function FavoritesPage() {
//   const { favorites } = useFavorites(); // Get the list of favorite IDs

//   // Filter the main propertiesData to get only the favorited properties
//   const favoritedProperties = useMemo(() => {
//     return propertiesData.filter(property => favorites.includes(property.id));
//   }, [favorites]);

//   return (
//     <div>
//       <GenericHero
//         title="Favorites"
//         subtitle="Your handpicked collection of dream homes"
//         backgroundImage={heroImage}
//          // Set this to a non-active state or a new 'Favorites' state
//       />
//       <main className="py-16">
//         {favoritedProperties.length > 0 ? (
//           <PropertyListings
//             propertiesToShow={favoritedProperties}
//             totalProperties={favoritedProperties.length}
//             totalPages={1} // Only one page for favorites for now
//             currentPage={1}
//             onPageChange={() => {}}
//           />
//         ) : (
//           <div className="text-center py-24">
//             <h2 className="text-2xl font-bold text-gray-700">Your Favorites List is Empty</h2>
//             <p className="text-gray-500 mt-2">Click the heart icon on any property to save it here.</p>
//           </div>
//         )}
//       </main>
//       <SiteMapFooter />
//       <DetailedFooter />
//     </div>
//   );
// }

// app/favorites/page.tsx
import { Suspense } from "react";
import FavoritesClient from "./FavoritesClient"; // The new client component
import { searchProperties, getBuilders } from "@/services/api";
import {
  transformPrismicProperty,
  transformPrismicBuilder,
} from "@/services/prismicTransformers";
import { Property, Developer } from "@/app/data/properties";

// A simple loading UI
function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Loading Favorites...</h2>
      </div>
    </div>
  );
}

// This server-side function fetches all data needed for the page
async function fetchFavoritesData() {
  try {
    const [propertiesResponse, buildersResponse] = await Promise.all([
      searchProperties({ pageSize: 1000 }), // Get ALL properties
      getBuilders({ pageSize: 100 }), // Get ALL builders
    ]);

    const properties: Property[] =
      propertiesResponse?.results.map(transformPrismicProperty) || [];

    const developers: Developer[] =
      buildersResponse?.results.map(transformPrismicBuilder) || [];

    return { properties, developers };
  } catch (error) {
    console.error("Failed to fetch data for favorites:", error);
    return { properties: [], developers: [] };
  }
}

// This is now an async Server Component
export default async function FavoritesPage() {
  // Fetch data on the server
  const { properties, developers } = await fetchFavoritesData();

  return (
    <Suspense fallback={<Loading />}>
      {/* Pass the fetched data as props to the Client Component */}
     <FavoritesClient properties={properties} developers={developers} />
    </Suspense>
  );
}
