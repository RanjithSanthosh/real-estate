// 'use client';

// import React, { useState, useMemo, useEffect, useRef } from 'react';
// import { useSearchParams, useRouter, usePathname } from 'next/navigation';
// import { propertiesData, developersData } from '../data/properties';

// // Import all your page components
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

// import { useUI, FilterState } from '../context/UIContext';
// import FilterModal from '@/components/shared/FilterModal';

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

// // The component is now named HomeClient
// export default function HomeClient() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//     // const { filters } = useUI();
//    const { isFilterModalOpen, closeFilterModal } = useUI();
//   const [isSearching, setIsSearching] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterType, setFilterType] = useState('All');
//   const [sortOrder, setSortOrder] = useState('Default');
//   const [currentPage, setCurrentPage] = useState(1);
//     const [activeFilters, setActiveFilters] = useState<FilterState>(initialFilters); // ✅ Insert this


//   const isInitialRender = useRef(true);
  
//   useEffect(() => {
//     setIsSearching(searchParams.get('view') === 'list');
//     setSearchTerm(searchParams.get('q') || '');
//     setFilterType(searchParams.get('type') || 'All');
//     setSortOrder(searchParams.get('sort') || 'Default');
//     setCurrentPage(parseInt(searchParams.get('page') || '1', 10));
//   }, [searchParams]);

//   useEffect(() => {
//     if (isInitialRender.current) {
//       isInitialRender.current = false;
//       return;
//     }
//     const params = new URLSearchParams();
//     if (isSearching) {
//       params.set('view', 'list');
//       if (searchTerm) params.set('q', searchTerm);
//       if (filterType !== 'All') params.set('type', filterType);
//       if (sortOrder !== 'Default') params.set('sort', sortOrder);
//       if (currentPage > 1) params.set('page', String(currentPage));
//     }
//     router.push(`${pathname}?${params.toString()}`, { scroll: false });
//   }, [isSearching, searchTerm, filterType, sortOrder, currentPage, pathname, router]);

//   const toggleSearchView = () => setIsSearching(prevState => !prevState);

//   const handleSearchChange = (term: string) => {
//     setSearchTerm(term);
//     setCurrentPage(1);
//   };

//   const handleFilterChange = (type: string) => {
//     setFilterType(type);
//     setCurrentPage(1);
//   };

//   const handleSortChange = (order: string) => {
//     setSortOrder(order);
//     setCurrentPage(1);
//   };

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   const handleApplyFilters = (newFilters: FilterState) => {
//     setActiveFilters(newFilters);
//     setCurrentPage(1);
//   };

//   const handleClearFilters = () => {
//     setActiveFilters(initialFilters);
//     setCurrentPage(1);
//   };

// const filteredProperties = useMemo(() => {
//     let filtered = propertiesData.filter(property => {
//       const developer = developersData.find(d => d.id === property.developerId);
//       const textMatch = /* ... text search logic ... */;

//       // ✅ Insert new filter logic
//       const zoningMatch = activeFilters.zoning === 'None' || property.overview.zoning === activeFilters.zoning;
//       const buildersMatch = activeFilters.builders === 'Select' || (developer && developer.name === activeFilters.builders);
//       const bedRoomsMatch = activeFilters.bedRooms === 'Select' || property.specs.some(spec => spec.text === activeFilters.bedRooms);
//       const propertyTypeMatch = activeFilters.propertyType === 'Select' || property.overview.propertyType === activeFilters.propertyType;
//       const statusMatch = activeFilters.status === 'Select' || property.overview.status.replace(/\s+/g, '-') === activeFilters.status.replace(/\s+/g, '-');
//       // budget and others logic would go here...
      
//       return textMatch && zoningMatch && buildersMatch && bedRoomsMatch && propertyTypeMatch && statusMatch;
//     });
//     return filtered;
//   }, [searchTerm, activeFilters]); // ✅ Update dependency array

  
//   const filteredAndSortedProperties = useMemo(() => {
//     const lowercasedSearchTerm = searchTerm.toLowerCase();
    
//     let filtered = propertiesData.filter(property => {
//       const developer = developersData.find(d => d.id === property.developerId);
//       const developerName = developer ? developer.name.toLowerCase() : '';



//       return (
//         property.name.toLowerCase().includes(lowercasedSearchTerm) ||
//         developerName.includes(lowercasedSearchTerm) ||
//         property.location.toLowerCase().includes(lowercasedSearchTerm)
//       )
//     });

//     if (filterType !== 'All') {
//         filtered = filtered.filter(p => p.specs.some(spec => spec.text === filterType));
//     }
//     if (sortOrder !== 'Default') {
//         filtered.sort((a, b) => {
//             const priceA = parseFloat(a.priceRange.split(' ')[1]);
//             const priceB = parseFloat(b.priceRange.split(' ')[1]);
//             return sortOrder === 'PriceLowToHigh' ? priceA - priceB : priceB - priceA;
//         });
//     }
//     return filtered;
//   }, [searchTerm, filterType, sortOrder]);
  
//   const propertiesToShow = filteredAndSortedProperties.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

//   return (
//     // The <Suspense> tag is no longer needed here
//     <div>
//       <HeroSection
//         onSearchClick={toggleSearchView}
//         searchTerm={searchTerm}
//         onSearchChange={handleSearchChange}
//       />
//       <main>
//         {isSearching ? (
//           <>
//             <PropertyListings
//               propertiesToShow={propertiesToShow}
//               totalProperties={filteredAndSortedProperties.length}
//               totalPages={Math.ceil(filteredAndSortedProperties.length / ITEMS_PER_PAGE)}
//               currentPage={currentPage}
//               filterType={filterType}
//               sortOrder={sortOrder}
//               startIndex={(currentPage - 1) * ITEMS_PER_PAGE}
//               onFilterChange={handleFilterChange}
//               onSortChange={handleSortChange}
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


//       {/* ✅ Insert this at the end */}
//       {isFilterModalOpen && (
//         <FilterModal 
//           onClose={closeFilterModal} 
//           onApply={handleApplyFilters} 
//           onClear={handleClearFilters}
//           initialFilters={activeFilters}
//         />
//       )}
//     </div>
//   );
// }




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
// import OfferModal from '@/components/shared/OfferModal'; // ✅ Import the new OfferModal


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

// const searchBarRef = useRef<HTMLDivElement>(null);

//   const handleHeaderSearchClick = () => {
//     // Only scroll if the property list is currently HIDDEN
//     if (!isSearching) {
//       setTimeout(() => {
//         searchBarRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
//       }, 100);
//     }
//     // Always toggle the view
//     toggleSearchView();
//   };

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [activeFilters, searchTerm]);

//   const toggleSearchView = () => setIsSearching(prevState => !prevState);
//   const handleSearchChange = (term: string) => setSearchTerm(term);
//   const handlePageChange = (page: number) => setCurrentPage(page);

//   const handleApplyFilters = (newFilters: FilterState) => {
//     setActiveFilters(newFilters);
//   };
//   const handleClearFilters = () => {
//     setActiveFilters(initialFilters);
//   };
  
//   const filteredProperties = useMemo(() => {
//     const lowercasedSearchTerm = searchTerm.toLowerCase();
    
//     return propertiesData.filter(property => {
//       const developer = developersData.find(d => d.id === property.developerId);
      
//       // ✅ This is the corrected text search logic
//       const textMatch = lowercasedSearchTerm === '' || (
//         property.name.toLowerCase().includes(lowercasedSearchTerm) ||
//         (developer && developer.name.toLowerCase().includes(lowercasedSearchTerm)) ||
//         property.location.toLowerCase().includes(lowercasedSearchTerm)
//       );

//       // --- Apply filters from the modal state ---
//       const zoningMatch = activeFilters.zoning === 'None' || property.overview.zoning === activeFilters.zoning;
//       const buildersMatch = activeFilters.builders === 'Select' || (developer && developer.name === activeFilters.builders);
//       const bedRoomsMatch = activeFilters.bedRooms === 'Select' || property.specs.some(spec => spec.text === activeFilters.bedRooms);
//       const propertyTypeMatch = activeFilters.propertyType === 'Select' || property.overview.propertyType === activeFilters.propertyType;
//       const statusMatch = activeFilters.status === 'Select' || property.overview.status.replace(/\s+/g, '-') === activeFilters.status.replace(/\s+/g, '-');
//       // Note: A more complex function would be needed to compare numeric price to budget range
//       const budgetMatch = true; // Placeholder for budget logic

//       return textMatch && zoningMatch && buildersMatch && bedRoomsMatch && propertyTypeMatch && statusMatch && budgetMatch;
//     });
//   }, [searchTerm, activeFilters]);
  
//   const propertiesToShow = filteredProperties.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

//   return (
//     <div>
//       <HeroSection
      
//         onSearchClick={toggleSearchView}
//         searchTerm={searchTerm}
//         onSearchChange={handleSearchChange}
//         searchBarRef={searchBarRef} // Pass the ref
//       />
//       <main>
//         {isSearching ? (
//           <>
//             <PropertyListings
//               propertiesToShow={propertiesToShow}
//               totalProperties={filteredProperties.length}
//               totalPages={Math.ceil(filteredProperties.length / ITEMS_PER_PAGE)}
//               currentPage={currentPage}
//               filterType={activeFilters.propertyType}
//               sortOrder={"Default"}
//               startIndex={(currentPage - 1) * ITEMS_PER_PAGE}
//               onFilterChange={() => {}}
//               onSortChange={() => {}}
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

//       {/* ✅ Conditionally render the new OfferModal */}
//       {isOfferModalOpen && (
//         <OfferModal 
//           onClose={closeOfferModal} 
//         />
//       )}
//     </div>
//   );
// }




'use client';

import React, { useState, useMemo, useEffect ,useRef } from 'react';
import { propertiesData, developersData } from '../data/properties';
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
  const { isFilterModalOpen, closeFilterModal,isOfferModalOpen, closeOfferModal } = useUI();

  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<FilterState>(initialFilters);
  const [currentPage, setCurrentPage] = useState(1);

  const searchBarRef = useRef<HTMLDivElement>(null);

  const toggleSearchView = () => setIsSearching(prevState => !prevState);

  const handleHeaderSearchClick = () => {
    if (!isSearching) {
      setTimeout(() => {
        searchBarRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
    toggleSearchView();
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilters, searchTerm]);

  const handleSearchChange = (term: string) => setSearchTerm(term);
  const handlePageChange = (page: number) => setCurrentPage(page);

  const handleApplyFilters = (newFilters: FilterState) => {
    setActiveFilters(newFilters);
  };
  const handleClearFilters = () => {
    setActiveFilters(initialFilters);
  };
  
  const filteredProperties = useMemo(() => {
    // ... (Your filtering logic here)
    return propertiesData; // Placeholder
  }, [searchTerm, activeFilters]);
  
  const propertiesToShow = filteredProperties.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div>
      <HeroSection
        onSearchClick={toggleSearchView}
        onHeaderSearchClick={handleHeaderSearchClick} // ✅ FIX: Pass the header click handler
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        searchBarRef={searchBarRef}
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

      {isOfferModalOpen && (
        <OfferModal 
          onClose={closeOfferModal} 
        />
      )}
    </div>
  );
}