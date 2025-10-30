// 'use client';

// import React, { useState, useMemo, useEffect, useRef } from 'react';
// import { useSearchParams, useRouter, usePathname } from 'next/navigation';
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
// import EndToEndSolutions from '@/components/homePage/EndToEndSolutions';

// // import GenericHero from "@/components/shared/GenericHero";
// // import heroImage from "@/components/homePage/assets/Hero.png";

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

//   // ✅ 1. State is managed by useState for instant UI updates
//   const [isSearching, setIsSearching] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeFilters, setActiveFilters] = useState<FilterState>(initialFilters);
//   const [currentPage, setCurrentPage] = useState(1);
//   const searchBarRef = useRef<HTMLDivElement>(null);
//   const isInitialRender = useRef(true);

//   // ✅ 2. On load, the state is HYDRATED from the URL
//   useEffect(() => {
//     // This runs when you navigate back to the page
//     setIsSearching(searchParams.get('view') === 'list');
//     setSearchTerm(searchParams.get('q') || '');
//     setCurrentPage(parseInt(searchParams.get('page') || '1', 10));
//   }, [searchParams]);

//   // ✅ 3. When state changes, this effect SYNCS it back TO the URL
//   useEffect(() => {
//     if (isInitialRender.current) {
//       isInitialRender.current = false;
//       return;
//     }
//     const params = new URLSearchParams(searchParams.toString());
//     if (isSearching) {
//       params.set('view', 'list');
//       if (searchTerm) params.set('q', searchTerm);
//       if (currentPage > 1) params.set('page', String(currentPage));
//     } else {
//       // If not searching, remove all search-related params
//       params.delete('view');
//       params.delete('q');
//       params.delete('page');
//     }
//     // This updates the URL without a full page reload
//     router.push(`${pathname}?${params.toString()}`, { scroll: false });
//   }, [isSearching, searchTerm, currentPage, pathname, router, searchParams]);

//   // ✅ 4. The toggle function just changes the state. The useEffect above handles the rest.
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
//     // Your filtering logic...
//     return propertiesData; // Placeholder
//   }, [searchTerm, activeFilters]);

//   const propertiesToShow = filteredProperties.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

//   return (
//     <div>
//       <HeroSection
//         onSearchClick={toggleSearchView}
//         searchTerm={searchTerm}
//         onSearchChange={handleSearchChange}
//       />

//    {/* <GenericHero
//       title="Connecting To Your"
//       subtitle="Dream Home"
//       backgroundImage={heroImage}
//       activePage="Home"
//       showSearchBar={true} // This prop will show the search bar
//       onSearchClick={toggleSearchView}
//       onHeaderSearchClick={handleHeaderSearchClick}
//       searchTerm={searchTerm}
//       onSearchChange={handleSearchChange}
//       searchBarRef={searchBarRef}
//     /> */}

//       <main>
//         {isSearching ? (
//           <>
//             <PropertyListings
//               propertiesToShow={propertiesToShow}
//               totalProperties={filteredProperties.length}
//               totalPages={Math.ceil(filteredProperties.length / ITEMS_PER_PAGE)}
//               currentPage={currentPage}
//               filterType={"All"}
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
//             <EndToEndSolutions />
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

"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
// ✅ We only import TYPES now. The DATA comes from props.
import { type Property, type Developer } from "../data/properties";
import { useUI, FilterState } from "../context/UIContext";
import HeroSection from "@/components/homePage/heroSection";
import PropertyListings from "@/components/homePage/PropertyListings";
import WhyChooseUs from "@/components/homePage/WhyChooseUs";
import FeaturedProjects from "@/components/homePage/FeaturedProjects";
import AdvantageSection from "@/components/homePage/AdvantageSection";
import CuratedCollections from "@/components/homePage/CuratedCollections";
import Testimonials from "@/components/homePage/Testimonials";
import CallToActionAndReviews from "@/components/homePage/CallToActionAndReviews";
import NewsletterSubscription from "@/components/homePage/NewsletterSubscription";
import SiteMapFooter from "@/components/homePage/SiteMapFooter";
import DetailedFooter from "@/components/aboutPage/DetailedFooter";
import FilterModal from "@/components/shared/FilterModal";
import OfferModal from "@/components/shared/OfferModal";
import EndToEndSolutions from "@/components/homePage/EndToEndSolutions";

const ITEMS_PER_PAGE = 9;

const initialFilters: FilterState = {
  zoning: "None",
  builders: "Select",
  bedRooms: "Select",
  propertyType: "Select",
  status: "Select",
  budget: 300000000,
  others: {
    investment: false,
    mandate: false,
    special: false,
    featured: false,
    excludeSold: false,
  },
};

// ✅ 1. Define the props interface
interface HomeClientProps {
  properties: Property[];
  developers: Developer[];
}

// ✅ 2. Accept the props
export default function HomeClient({
  properties,
  developers,
}: HomeClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const {
    isFilterModalOpen,
    closeFilterModal,
    isOfferModalOpen,
    closeOfferModal,
  } = useUI();
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] =
    useState<FilterState>(initialFilters);
  const [currentPage, setCurrentPage] = useState(1);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const isInitialRender = useRef(true);
  useEffect(() => {
    setIsSearching(searchParams.get("view") === "list");
    setSearchTerm(searchParams.get("q") || "");
    setCurrentPage(parseInt(searchParams.get("page") || "1", 10));
  }, [searchParams]);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    const params = new URLSearchParams(searchParams.toString());
    if (isSearching) {
      params.set("view", "list");
      if (searchTerm) params.set("q", searchTerm);
      if (currentPage > 1) params.set("page", String(currentPage));
    } else {
      params.delete("view");
      params.delete("q");
      params.delete("page");
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [isSearching, searchTerm, currentPage, pathname, router, searchParams]);

  const toggleSearchView = () => setIsSearching((prevState) => !prevState);

  const handleHeaderSearchClick = () => {
    if (!isSearching) {
      setTimeout(() => {
        searchBarRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
    toggleSearchView();
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleApplyFilters = (newFilters: FilterState) => {
    setActiveFilters(newFilters);
    setCurrentPage(1);
  };
  const handleClearFilters = () => {
    setActiveFilters(initialFilters);
    setCurrentPage(1);
  };
  // 3. Implement the filtering logic in useMemo, using the 'properties' prop
  const filteredProperties = useMemo(() => {
    let filtered = properties; // Start with all properties from props

    // Search Term Filter
    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.developer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // FilterState Filters
    if (activeFilters.builders !== "Select") {
      filtered = filtered.filter((p) => p.developer === activeFilters.builders);
    }
    if (activeFilters.bedRooms !== "Select") {
      const bedNum = activeFilters.bedRooms.charAt(0); // "2 BHK" -> "2"
      filtered = filtered.filter((p) =>
        p.specs.some((s) => s.icon === BedDouble && s.text.startsWith(bedNum))
      );
    }
    if (activeFilters.propertyType !== "Select") {
      filtered = filtered.filter((p) =>
        p.specs.some(
          (s) => s.icon === Building2 && s.text === activeFilters.propertyType
        )
      );
    }
    if (activeFilters.status !== "Select") {
      filtered = filtered.filter((p) => p.tag?.text === activeFilters.status);
    }
    if (activeFilters.budget < 300000000) {
      filtered = filtered.filter((p) => p.price <= activeFilters.budget);
    }
    if (activeFilters.others.excludeSold) {
      filtered = filtered.filter(
        (p) => p.tag?.text.toLowerCase() !== "sold out"
      );
    }
    // Add other filters as needed (investment, mandate, etc.)

    return filtered; // Return the final filtered array
  }, [searchTerm, activeFilters, properties]); // Add 'properties' prop to dependency array
  //  4. This line will no longer crash!
  const propertiesToShow = filteredProperties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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
            <EndToEndSolutions />
           <WhyChooseUs />
            <FeaturedProjects properties={properties} developers={developers} />
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
          //  5. Pass the 'developers' prop to the modal
          developers={developers}
        />
      )}
       {isOfferModalOpen && <OfferModal onClose={closeOfferModal} />}
    </div>
  );
}
