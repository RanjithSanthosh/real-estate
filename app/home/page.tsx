'use client';
import React, { Suspense, useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { propertiesData } from '../data/properties';
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
import { developersData } from '../data/properties';

const ITEMS_PER_PAGE = 9;

export default function HomePage() {
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
      // ✅ FIX: Find the developer's name for searching
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
  
  const totalPages = Math.ceil(filteredAndSortedProperties.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const propertiesToShow = filteredAndSortedProperties.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div>

      <Suspense>
        
     
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
       </Suspense>
    </div>
  );
}