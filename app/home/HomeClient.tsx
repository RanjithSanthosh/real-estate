'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { propertiesData, developersData } from '../data/properties';

// Import all your page components
import HeroSection from '@/components/homePage/heroSection';
import PropertyListings from '@/components/homePage/PropertyListings';
import WhyChooseUs from '@/components/homePage/WhyChooseUs';
import FeaturedProjects from '@/components/homePage/FeaturedProjects';
import AdvantageSection from '@/components/homePage/AdvantageSection';
import CuratedCollections from '@/components/homePage/CuratedCollections';
import Testimonials from '@/components/homePage/Testimonials';
import CallToActionAndReviews from '@/components/homePage/CallToActionAndReviews';
import NewsletterSubscription from '@/components/homePage/NewsletterSubscription';
import SiteMapFooter from '@/components/homePage/SiteMapFooter';
import DetailedFooter from '@/components/aboutPage/DetailedFooter';

const ITEMS_PER_PAGE = 9;

// The component is now named HomeClient
export default function HomeClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [sortOrder, setSortOrder] = useState('Default');
  const [currentPage, setCurrentPage] = useState(1);

  const isInitialRender = useRef(true);
  
  useEffect(() => {
    setIsSearching(searchParams.get('view') === 'list');
    setSearchTerm(searchParams.get('q') || '');
    setFilterType(searchParams.get('type') || 'All');
    setSortOrder(searchParams.get('sort') || 'Default');
    setCurrentPage(parseInt(searchParams.get('page') || '1', 10));
  }, [searchParams]);

  useEffect(() => {
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
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [isSearching, searchTerm, filterType, sortOrder, currentPage, pathname, router]);

  const toggleSearchView = () => setIsSearching(prevState => !prevState);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleFilterChange = (type: string) => {
    setFilterType(type);
    setCurrentPage(1);
  };

  const handleSortChange = (order: string) => {
    setSortOrder(order);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  const filteredAndSortedProperties = useMemo(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    
    let filtered = propertiesData.filter(property => {
      const developer = developersData.find(d => d.id === property.developerId);
      const developerName = developer ? developer.name.toLowerCase() : '';

      return (
        property.name.toLowerCase().includes(lowercasedSearchTerm) ||
        developerName.includes(lowercasedSearchTerm) ||
        property.location.toLowerCase().includes(lowercasedSearchTerm)
      )
    });

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
  
  const propertiesToShow = filteredAndSortedProperties.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    // The <Suspense> tag is no longer needed here
    <div>
      <HeroSection
        onSearchClick={toggleSearchView}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <main>
        {isSearching ? (
          <>
            <PropertyListings
              propertiesToShow={propertiesToShow}
              // ... pass other necessary props
            />
            <SiteMapFooter />
          </>
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