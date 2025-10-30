// app/favorites/FavoritesClient.tsx
"use client";

import React, { useMemo } from "react";
import GenericHero from "@/components/shared/GenericHero";
import PropertyListings from "@/components/homePage/PropertyListings";
import { useFavorites } from "../context/FavoritesContext";
import { type Property, type Developer } from "../data/properties";
import SiteMapFooter from "@/components/homePage/SiteMapFooter";
import DetailedFooter from "@/components/aboutPage/DetailedFooter";
import heroImage from "@/public/assets/aboutPage/AboutHERO.png"; // Use a suitable background

// ✅ 1. Define the props interface
interface FavoritesClientProps {
  properties: Property[];
  developers: Developer[];
}

// ✅ 2. Accept 'properties' and 'developers' as props
export default function FavoritesClient({
  properties,
  developers,
}: FavoritesClientProps) {
  const { favorites } = useFavorites(); // Get the list of favorite IDs // ✅ 3. Filter the 'properties' prop, not the static data

  const favoritedProperties = useMemo(() => {
    return properties.filter((property) => favorites.includes(property.id));
  }, [favorites, properties]); // Add 'properties' to the dependency array

  return (
    <div>
      <GenericHero
        title="Favorites"
        subtitle="Your handpicked collection of dream homes"
        backgroundImage={heroImage}
      />
      <main className="container mx-auto max-w-7xl px-4 py-16">
        {favoritedProperties.length > 0 ? (
          <PropertyListings
            propertiesToShow={favoritedProperties}
            totalProperties={favoritedProperties.length}
            totalPages={1} // Only one page for favorites
            currentPage={1}
            onPageChange={() => {}}
            developers={developers} // ✅ 4. Pass 'developers' prop down
          />
        ) : (
          <div className="text-center py-24">
            
            <h2 className="text-2xl font-bold text-gray-700">
              Your Favorites List is Empty
            </h2>
           
            <p className="text-gray-500 mt-2">
              Click the heart icon on any property to save it here.
            </p>
            
          </div>
        )}
        
      </main>
       <SiteMapFooter />
      <DetailedFooter />
    </div>
  );
}
