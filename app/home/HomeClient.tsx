






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



// import GenericHero from "@/components/shared/GenericHero";
// import heroImage from "@/components/homePage/assets/Hero.png";

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

   {/* <GenericHero 
      title="Connecting To Your"
      subtitle="Dream Home"
      backgroundImage={heroImage}
      activePage="Home"
      showSearchBar={true} // This prop will show the search bar
      onSearchClick={toggleSearchView}
      onHeaderSearchClick={handleHeaderSearchClick}
      searchTerm={searchTerm}
      onSearchChange={handleSearchChange}
      searchBarRef={searchBarRef}
    /> */}


      <main>
        {isSearching ? (
          <>
            <PropertyListings
              propertiesToShow={propertiesToShow}
              totalProperties={filteredProperties.length}
              totalPages={Math.ceil(filteredProperties.length / ITEMS_PER_PAGE)}
              currentPage={currentPage}
              filterType={"All"}
              sortOrder={"Default"}
              startIndex={(currentPage - 1) * ITEMS_PER_PAGE}
              onFilterChange={() => {}}
              onSortChange={() => {}}
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





// 'use client';

// import React, { useState, useMemo, useEffect, useRef } from 'react';
// import { useSearchParams, useRouter, usePathname } from 'next/navigation';
// import { propertiesData, developersData, Property } from '../data/properties';
// import { useUI, FilterState } from '../context/UIContext';
// import GenericHero from '@/components/shared/GenericHero';
// import heroImage from '@/components/homePage/assets/Hero.png';
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
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const { isFilterModalOpen, closeFilterModal, isOfferModalOpen, closeOfferModal } = useUI();
  
//   const [isSearching, setIsSearching] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeFilters, setActiveFilters] = useState<FilterState>(initialFilters);
//   const [currentPage, setCurrentPage] = useState(1);
//   const searchBarRef = useRef<HTMLDivElement>(null);
//   const isInitialRender = useRef(true);
  
//   useEffect(() => {
//     setIsSearching(searchParams.get('view') === 'list');
//     setSearchTerm(searchParams.get('q') || '');
//     setCurrentPage(parseInt(searchParams.get('page') || '1', 10));
//   }, [searchParams]);

//   useEffect(() => {
//     if (isInitialRender.current) {
//       isInitialRender.current = false;
//       return;
//     }
//     const params = new URLSearchParams(searchParams.toString());
//     if (isSearching) {
//       params.set('view', 'list');
//       if (searchTerm) {
//         params.set('q', searchTerm);
//       } else {
//         params.delete('q');
//       }
//       if (currentPage > 1) {
//         params.set('page', String(currentPage));
//       } else {
//         params.delete('page');
//       }
//     } else {
//       params.delete('view');
//       params.delete('q');
//       params.delete('page');
//     }
//     router.push(`${pathname}?${params.toString()}`, { scroll: false });
//   }, [isSearching, searchTerm, currentPage, pathname, router, searchParams]);

//   const toggleSearchView = () => setIsSearching(prevState => !prevState);

//   const handleHeaderSearchClick = () => {
//     if (!isSearching) {
//       setTimeout(() => {
//         searchBarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//       }, 100);
//     }
//     toggleSearchView();
//   };

//   const handleSearchChange = (term: string) => { setSearchTerm(term); setCurrentPage(1); };
//   const handlePageChange = (page: number) => { setCurrentPage(page); };
//   const handleApplyFilters = (newFilters: FilterState) => { setActiveFilters(newFilters); setCurrentPage(1); };
//   const handleClearFilters = () => { setActiveFilters(initialFilters); setCurrentPage(1); };
  
//   const filteredProperties = useMemo(() => {
//     const lowercasedSearchTerm = searchTerm.toLowerCase();
    
//     return propertiesData.filter(property => {
//       const developer = developersData.find(d => d.id === property.developerId);
//       const developerName = developer ? developer.name.toLowerCase() : '';

//       const textMatch = lowercasedSearchTerm === '' || (
//         property.name.toLowerCase().includes(lowercasedSearchTerm) ||
//         developerName.includes(lowercasedSearchTerm) ||
//         property.location.toLowerCase().includes(lowercasedSearchTerm)
//       );

//       const zoningMatch = activeFilters.zoning === 'None' || property.overview.zoning === activeFilters.zoning;
//       // ... Add your other filter logic here ...

//       return textMatch && zoningMatch;
//     });
//   }, [searchTerm, activeFilters]);
  
//   const propertiesToShow = filteredProperties.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

//   return (
//     <div>
//       <GenericHero 
//         title="Connecting To Your"
//         subtitle="Dream Home"
//         backgroundImage={heroImage}
//         activePage="Home"
//         showSearchBar={true}
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