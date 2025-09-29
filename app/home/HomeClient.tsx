



// 'use client';

// import React, { useState, useMemo, useEffect ,useRef } from 'react';
// import { propertiesData, developersData } from '../data/properties';
// import { useUI, FilterState } from '../context/UIContext';
// import HeroSection from '@/components/homePage/heroSection';
// import PropertyListings from '@/components/homePage/PropertyListings';
// import WhyChooseUs from '@/components/homePage/WhyChooseUs';
// import FeaturedProjects from '@/components/homePage/FeaturedProjects';
// import AdvantageSection from '@/components/homePage/AdvantageSection';
// import CuratedCollections from '@/components/homePage/CuratedCollections';
// import Testimonials from '@/components/homePage/Testimonials';
// import CallToActionAndReviews from '@/components/homePage/CallToActionAndReviews';
// import NewsletterSubscription from '@/components/homePage/NewsletterSubscription';
// import SiteMapFooter from '@/components/homePage/SiteMapFooter';
// import DetailedFooter from '@/components/aboutPage/DetailedFooter';
// import FilterModal from '@/components/shared/FilterModal';
// import OfferModal from '@/components/shared/OfferModal';

// const ITEMS_PER_PAGE = 9;

// const initialFilters: FilterState = {
//   zoning: 'None',
//   builders: 'Select',
//   bedRooms: 'Select',
//   propertyType: 'Select',
//   status: 'Select',
//   budget: 300000000,
//   others: { investment: false, mandate: false, special: false, featured: false, excludeSold: false },
// };

// export default function HomeClient() {
//   const { isFilterModalOpen, closeFilterModal,isOfferModalOpen, closeOfferModal } = useUI();

//   const [isSearching, setIsSearching] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeFilters, setActiveFilters] = useState<FilterState>(initialFilters);
//   const [currentPage, setCurrentPage] = useState(1);

//   const searchBarRef = useRef<HTMLDivElement>(null);

//   // Scroll to property list with increased offset
//   const toggleSearchView = () => {
//     setIsSearching(prevState => !prevState);
//     setTimeout(() => {
//       // Find the property list element or scroll by a larger offset
//       const propertyList = document.querySelector('[data-property-list]');
//       if (propertyList) {
//         const rect = propertyList.getBoundingClientRect();
//         window.scrollTo({
//           top: window.scrollY + rect.top - 120, // Increase offset (e.g., 120px above)
//           behavior: 'smooth',
//         });
//       } else {
//         // Fallback: scroll further down (e.g., 800px)
//         window.scrollBy({ top: 800, behavior: 'smooth' });
//       }
//     }, 100);
//   };

//   const handleHeaderSearchClick = () => {
//     if (!isSearching) {
//       setTimeout(() => {
//         searchBarRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
//       }, 100);
//     }
//     toggleSearchView();
//   };

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [activeFilters, searchTerm]);

//   const handleSearchChange = (term: string) => setSearchTerm(term);
//   const handlePageChange = (page: number) => setCurrentPage(page);

//   const handleApplyFilters = (newFilters: FilterState) => {
//     setActiveFilters(newFilters);
//   };
//   const handleClearFilters = () => {
//     setActiveFilters(initialFilters);
//   };
  
//   const filteredProperties = useMemo(() => {
//     // ... (Your filtering logic here)
//     return propertiesData; // Placeholder
//   }, [searchTerm, activeFilters]);
  
//   const propertiesToShow = filteredProperties.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

//   return (
//     <div>
//       <HeroSection
//         onSearchClick={toggleSearchView}
//         onHeaderSearchClick={handleHeaderSearchClick} // ✅ FIX: Pass the header click handler
//         searchTerm={searchTerm}
//         onSearchChange={handleSearchChange}
//         searchBarRef={searchBarRef}
//       />
//       <main>
//         {isSearching ? (
//           <>
//             <PropertyListings
//               propertiesToShow={propertiesToShow}
//               totalProperties={filteredProperties.length}
//               totalPages={Math.ceil(filteredProperties.length / ITEMS_PER_PAGE)}
//               currentPage={currentPage}
//               onPageChange={handlePageChange}
//             />
//             <SiteMapFooter />
//           </>
//         ) : (
//           <>
//             <WhyChooseUs />
//             <FeaturedProjects />
//             <AdvantageSection />
//             <CuratedCollections />
//             <Testimonials />
//             <CallToActionAndReviews />
//             <NewsletterSubscription />
//             <SiteMapFooter />
//           </>
//         )}
//       </main>
//       <DetailedFooter />

//       {isFilterModalOpen && (
//         <FilterModal 
//           onClose={closeFilterModal} 
//           onApply={handleApplyFilters} 
//           onClear={handleClearFilters}
//           initialFilters={activeFilters}
//         />
//       )}

//       {isOfferModalOpen && (
//         <OfferModal 
//           onClose={closeOfferModal} 
//         />
//       )}
//     </div>
//   );
// }




// 'use client';

// import React, { useState, useMemo, useEffect, useRef } from 'react';
// import { propertiesData, developersData, Property } from '../data/properties';
// import { useUI, FilterState } from '../context/UIContext';
// import HeroSection from '@/components/homePage/heroSection';
// import PropertyListings from '@/components/homePage/PropertyListings';
// import WhyChooseUs from '@/components/homePage/WhyChooseUs';
// import FeaturedProjects from '@/components/homePage/FeaturedProjects';
// import AdvantageSection from '@/components/homePage/AdvantageSection';
// import CuratedCollections from '@/components/homePage/CuratedCollections';
// import Testimonials from '@/components/homePage/Testimonials';
// import CallToActionAndReviews from '@/components/homePage/CallToActionAndReviews';
// import NewsletterSubscription from '@/components/homePage/NewsletterSubscription';
// import SiteMapFooter from '@/components/homePage/SiteMapFooter';
// import DetailedFooter from '@/components/aboutPage/DetailedFooter';
// import FilterModal from '@/components/shared/FilterModal';
// import OfferModal from '@/components/shared/OfferModal';

// const ITEMS_PER_PAGE = 9;

// const initialFilters: FilterState = {
//   zoning: 'None',
//   builders: 'Select',
//   bedRooms: 'Select',
//   propertyType: 'Select',
//   status: 'Select',
//   budget: 300000000,
//   others: { investment: false, mandate: false, special: false, featured: false, excludeSold: false },
// };

// export default function HomeClient() {
//   const { isFilterModalOpen, closeFilterModal, isOfferModalOpen, closeOfferModal } = useUI();
  
//   const [isSearching, setIsSearching] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeFilters, setActiveFilters] = useState<FilterState>(initialFilters);
//   const [currentPage, setCurrentPage] = useState(1);
//   const searchBarRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [activeFilters, searchTerm]);

//   const toggleSearchView = () => setIsSearching(prevState => !prevState);
//   const handleHeaderSearchClick = () => {
//     if (!isSearching) {
//       setTimeout(() => {
//         searchBarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//       }, 100);
//     }
//     toggleSearchView();
//   };
//   const handleSearchChange = (term: string) => setSearchTerm(term);
//   const handlePageChange = (page: number) => setCurrentPage(page);
//   const handleApplyFilters = (newFilters: FilterState) => setActiveFilters(newFilters);
//   const handleClearFilters = () => setActiveFilters(initialFilters);
  
//   const filteredProperties = useMemo(() => {
//     const lowercasedSearchTerm = searchTerm.toLowerCase();
    
//     // ✅ This is the complete and corrected filtering logic
//     return propertiesData.filter(property => {
//       const developer = developersData.find(d => d.id === property.developerId);
      
//       // Condition 1: Text Search
//       const textMatch = lowercasedSearchTerm === '' || (
//         property.name.toLowerCase().includes(lowercasedSearchTerm) ||
//         (developer && developer.name.toLowerCase().includes(lowercasedSearchTerm)) ||
//         property.location.toLowerCase().includes(lowercasedSearchTerm)
//       );

//       // Condition 2: Filters from Modal
//       const zoningMatch = activeFilters.zoning === 'None' || property.overview.zoning === activeFilters.zoning;
//       const buildersMatch = activeFilters.builders === 'Select' || (developer && developer.name === activeFilters.builders);
//       const bedRoomsMatch = activeFilters.bedRooms === 'Select' || property.specs.some(spec => spec.text === activeFilters.bedRooms);
//       const propertyTypeMatch = activeFilters.propertyType === 'Select' || property.overview.propertyType === activeFilters.propertyType;
//       const statusMatch = activeFilters.status === 'Select' || property.overview.status.replace(/\s+/g, '-') === activeFilters.status.replace(/\s+/g, '-');
//       // A simple budget match for demonstration
//       const budgetMatch = property.priceRange.includes('Cr.') ? parseFloat(property.priceRange.split(' ')[1]) * 10000000 <= activeFilters.budget : parseFloat(property.priceRange.split(' ')[1]) * 100000 <= activeFilters.budget;

//       return textMatch && zoningMatch && buildersMatch && bedRoomsMatch && propertyTypeMatch && statusMatch && budgetMatch;
//     });
//   }, [searchTerm, activeFilters]);
  
//   const propertiesToShow = filteredProperties.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

//   return (
//     <div>
//       <HeroSection
//         onSearchClick={toggleSearchView}
//         onHeaderSearchClick={handleHeaderSearchClick}
//         searchTerm={searchTerm}
//         onSearchChange={handleSearchChange}
//         searchBarRef={searchBarRef}
//       />
//       <main>
//         {isSearching ? (
//           <>
//             <PropertyListings
//               propertiesToShow={propertiesToShow}
//               totalProperties={filteredProperties.length}
//               totalPages={Math.ceil(filteredProperties.length / ITEMS_PER_PAGE)}
//               currentPage={currentPage}
//               onPageChange={handlePageChange}
//             />
//             <SiteMapFooter />
//           </>
//         ) : (
//           <>
//             <WhyChooseUs />
//             <FeaturedProjects />
//             <AdvantageSection />
//             <CuratedCollections />
//             <Testimonials />
//             <CallToActionAndReviews />
//             <NewsletterSubscription />
//             <SiteMapFooter />
//           </>
//         )}
//       </main>
//       <DetailedFooter />

//       {isFilterModalOpen && (
//         <FilterModal 
//           onClose={closeFilterModal} 
//           onApply={handleApplyFilters} 
//           onClear={handleClearFilters}
//           initialFilters={activeFilters}
//         />
//       )}
//       {isOfferModalOpen && <OfferModal onClose={closeOfferModal} />}
//     </div>
//   );
// }








'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { propertiesData, developersData, Property } from '../data/properties';
import { useUI, FilterState } from '../context/UIContext';
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
import FilterModal from '@/components/shared/FilterModal';
import OfferModal from '@/components/shared/OfferModal';

const ITEMS_PER_PAGE = 9;

const initialFilters: FilterState = {
  zoning: 'None',
  builders: 'Select',
  bedRooms: 'Select',
  propertyType: 'Select',
  status: 'Select',
  budget: 300000000,
  others: { investment: false, mandate: false, special: false, featured: false, excludeSold: false },
};

export default function HomeClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isFilterModalOpen, closeFilterModal, isOfferModalOpen, closeOfferModal } = useUI();
  
  // ✅ 1. State is managed by useState for instant UI updates
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<FilterState>(initialFilters);
  const [currentPage, setCurrentPage] = useState(1);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const isInitialRender = useRef(true);
  
  // ✅ 2. On load, the state is HYDRATED from the URL
  useEffect(() => {
    // This runs when you navigate back to the page
    setIsSearching(searchParams.get('view') === 'list');
    setSearchTerm(searchParams.get('q') || '');
    setCurrentPage(parseInt(searchParams.get('page') || '1', 10));
  }, [searchParams]);

  // ✅ 3. When state changes, this effect SYNCS it back TO the URL
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    const params = new URLSearchParams(searchParams.toString());
    if (isSearching) {
      params.set('view', 'list');
      if (searchTerm) params.set('q', searchTerm);
      if (currentPage > 1) params.set('page', String(currentPage));
    } else {
      // If not searching, remove all search-related params
      params.delete('view');
      params.delete('q');
      params.delete('page');
    }
    // This updates the URL without a full page reload
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [isSearching, searchTerm, currentPage, pathname, router, searchParams]);

  // ✅ 4. The toggle function just changes the state. The useEffect above handles the rest.
  const toggleSearchView = () => setIsSearching(prevState => !prevState);

  const handleHeaderSearchClick = () => {
    if (!isSearching) {
      setTimeout(() => {
        searchBarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
    toggleSearchView();
  };

  const handleSearchChange = (term: string) => { setSearchTerm(term); setCurrentPage(1); };
  const handlePageChange = (page: number) => { setCurrentPage(page); };
  const handleApplyFilters = (newFilters: FilterState) => { setActiveFilters(newFilters); setCurrentPage(1); };
  const handleClearFilters = () => { setActiveFilters(initialFilters); setCurrentPage(1); };
  
  const filteredProperties = useMemo(() => {
    // Your filtering logic...
    return propertiesData; // Placeholder
  }, [searchTerm, activeFilters]);
  
  const propertiesToShow = filteredProperties.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
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
              totalProperties={filteredProperties.length}
              totalPages={Math.ceil(filteredProperties.length / ITEMS_PER_PAGE)}
              currentPage={currentPage}
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

      {isFilterModalOpen && (
        <FilterModal 
          onClose={closeFilterModal} 
          onApply={handleApplyFilters} 
          onClear={handleClearFilters}
          initialFilters={activeFilters}
        />
      )}
      {isOfferModalOpen && <OfferModal onClose={closeOfferModal} />}
    </div>
  );
}