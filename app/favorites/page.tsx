'use client';

import React, { useMemo } from 'react';
import GenericHero from '@/components/shared/GenericHero';
import PropertyListings from '@/components/homePage/PropertyListings';
import { useFavorites } from '../context/FavoritesContext';
import { propertiesData } from '../data/properties';
import SiteMapFooter from '@/components/homePage/SiteMapFooter';
import DetailedFooter from '@/components/aboutPage/DetailedFooter';
import heroImage from '@/public/assets/aboutPage/AboutHERO.png'; // Use a suitable background

export default function FavoritesPage() {
  const { favorites } = useFavorites(); // Get the list of favorite IDs

  // Filter the main propertiesData to get only the favorited properties
  const favoritedProperties = useMemo(() => {
    return propertiesData.filter(property => favorites.includes(property.id));
  }, [favorites]);

  return (
    <div>
      <GenericHero 
        title="Favorites"
        subtitle="Your handpicked collection of dream homes"
        backgroundImage={heroImage}
         // Set this to a non-active state or a new 'Favorites' state
      />
      <main className="py-16">
        {favoritedProperties.length > 0 ? (
          <PropertyListings
            propertiesToShow={favoritedProperties}
            totalProperties={favoritedProperties.length}
            totalPages={1} // Only one page for favorites for now
            currentPage={1}
            onPageChange={() => {}}
          />
        ) : (
          <div className="text-center py-24">
            <h2 className="text-2xl font-bold text-gray-700">Your Favorites List is Empty</h2>
            <p className="text-gray-500 mt-2">Click the heart icon on any property to save it here.</p>
          </div>
        )}
      </main>
      <SiteMapFooter />
      <DetailedFooter />
    </div>
  );
}