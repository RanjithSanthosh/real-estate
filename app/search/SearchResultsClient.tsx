




// 'use client';

// import React, { useState, useMemo, useRef, useEffect } from 'react';
// import { useSearchParams, useRouter, usePathname } from 'next/navigation';
// import Navbar from '@/components/shared/Navbar';
// import { propertiesData, developersData } from '../data/properties';
// import PropertyListings from '@/components/homePage/PropertyListings';
// import SiteMapFooter from '@/components/homePage/SiteMapFooter';
// import DetailedFooter from '@/components/aboutPage/DetailedFooter';
// import { ChevronDown, Search, Globe, Building, Home, CheckSquare, BedDouble, Wallet, LandPlot, X as CloseIcon } from 'lucide-react';

// // --- Types for our filters ---
// type FilterCategory = 'Zoning' | 'Builders' | 'Property Type' | 'Status' | 'Bedrooms' | 'Amenity' | 'Budget';
// interface Filters {
//     zoning: string;
//     builder: string;
//     propertyType: string;
//     status: string;
//     bedrooms: string;
//     budget: number;
// }

// // --- Reusable Filter Button Component ---
// const FilterButton = ({ icon: Icon, label, onClick, isActive }: { icon: React.ElementType, label: string, onClick: () => void, isActive: boolean }) => (
//     <button onClick={onClick} className={`flex items-center gap-2 transition-colors ${isActive ? 'text-green-600' : 'text-gray-600 hover:text-green-600'}`}>
//         <Icon size={18} />
//         <span className="font-medium">{label}</span>
//         <ChevronDown size={16} className={`text-gray-400 transition-transform ${isActive ? 'rotate-180' : ''}`} />
//     </button>
// );

// // --- The SearchHeader Component ---
// function SearchHeader({ filters, onFilterChange }: { filters: Filters, onFilterChange: (name: keyof Filters, value: any) => void }) {
//     const router = useRouter();
//     const pathname = usePathname();
//     const searchParams = useSearchParams();
//     const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
//     const [selectedCity, setSelectedCity] = useState(searchParams.get('city') || 'Bengaluru');
//     const [openFilter, setOpenFilter] = useState<FilterCategory | null>(null);
//     const filterRef = useRef<HTMLDivElement>(null);

//     const filterOptions = {
//         zoning: ['Residential', 'Commercial'],
//         builders: developersData.map(d => d.name),
//         propertyType: ['Apartments', 'Villa', 'Plot'],
//         status: ['Ready to Move', 'Under Construction'],
//         bedrooms: ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK'],
//         amenity: ['Swimming Pool', 'Gym', 'Clubhouse', 'Garden'],
//     };

//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
//                 setOpenFilter(null);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     const handleSearch = (e: React.FormEvent) => { /* ... */ };
//     const toggleFilter = (filter: FilterCategory) => setOpenFilter(prev => (prev === filter ? null : filter));
    
//     return (
//         <div className="bg-white py-8 border-b border-gray-200" ref={filterRef}>
//             <div className="container mx-auto max-w-7xl px-4">
//                 <div className="mb-6">
//                     <h1 className="text-4xl font-serif text-gray-800 tracking-wider">SEARCH</h1>
//                     <p className="text-sm font-semibold text-green-600 tracking-[0.2em]">GET EXACTLY WHAT YOU NEED</p>
//                 </div>

//                 <form onSubmit={handleSearch} className="flex items-center bg-gray-100/70 p-2 rounded-lg border border-gray-200">
//                     <div className="relative">
//                         <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="font-semibold bg-transparent border-none focus:ring-0 appearance-none py-2 pl-4 pr-8 text-gray-800">
//                             <option>Bengaluru</option>
//                             <option>Chennai</option>
//                         </select>
//                         <ChevronDown size={20} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
//                     </div>
//                     <input 
//                         type="text"
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         placeholder="Search by Location, Project, Developer or RERA ID..."
//                         className="flex-grow border-l border-gray-300 pl-4 bg-transparent focus:ring-0 border-none text-gray-700 placeholder-gray-500"
//                     />
//                     <button type="submit" className="bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition-colors">
//                         <Search size={20} />
//                     </button>
//                 </form>

//                 <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
//                     <FilterButton icon={Globe} label="Zoning" onClick={() => toggleFilter('Zoning')} isActive={openFilter === 'Zoning'} />
//                     <FilterButton icon={Building} label="Builders" onClick={() => toggleFilter('Builders')} isActive={openFilter === 'Builders'} />
//                     <FilterButton icon={Home} label="Property Type" onClick={() => toggleFilter('Property Type')} isActive={openFilter === 'Property Type'} />
//                     <FilterButton icon={CheckSquare} label="Status" onClick={() => toggleFilter('Status')} isActive={openFilter === 'Status'} />
//                     <FilterButton icon={BedDouble} label="Bedrooms" onClick={() => toggleFilter('Bedrooms')} isActive={openFilter === 'Bedrooms'} />
//                     <FilterButton icon={LandPlot} label="Amenity" onClick={() => toggleFilter('Amenity')} isActive={openFilter === 'Amenity'} />
//                     <FilterButton icon={Wallet} label="Budget" onClick={() => toggleFilter('Budget')} isActive={openFilter === 'Budget'} />
//                 </div>

//                 {openFilter && (
//                     <div className="mt-4 bg-gray-100/70 p-6 rounded-lg border border-gray-200">
//                         {openFilter === 'Zoning' && filterOptions.zoning.map(opt => <button key={opt} className="px-4 py-2 text-sm font-medium border border-green-600 text-green-600 bg-white rounded-full mr-2 mb-2">{opt}</button>)}
//                         {openFilter === 'Builders' && <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">{filterOptions.builders.map(opt => <button key={opt} className="px-3 py-1.5 text-xs text-center border border-green-600 text-green-600 bg-white rounded-full hover:bg-green-50">{opt}</button>)}</div>}
//                         {openFilter === 'Property Type' && filterOptions.propertyType.map(opt => <button key={opt} className="px-4 py-2 text-sm font-medium border border-green-600 text-green-600 bg-white rounded-full mr-2 mb-2">{opt}</button>)}
//                         {openFilter === 'Status' && filterOptions.status.map(opt => <button key={opt} className="px-4 py-2 text-sm font-medium border border-green-600 text-green-600 bg-white rounded-full mr-2 mb-2">{opt}</button>)}
//                         {openFilter === 'Bedrooms' && filterOptions.bedrooms.map(opt => <button key={opt} className="px-4 py-2 text-sm font-medium border border-green-600 text-green-600 bg-white rounded-full mr-2 mb-2">{opt}</button>)}
//                         {openFilter === 'Amenity' && filterOptions.amenity.map(opt => <button key={opt} className="px-4 py-2 text-sm font-medium border border-green-600 text-green-600 bg-white rounded-full mr-2 mb-2">{opt}</button>)}
//                         {openFilter === 'Budget' && (
//                             <div>
//                                 <input type="range" min="5000000" max="100000000" step="1000000" className="w-full" />
//                                 <div className="flex justify-between text-xs text-gray-500 mt-1"><span>50L</span><span>1Cr</span><span>5Cr</span><span>10Cr</span></div>
//                             </div>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// // --- The Main SearchResultsClient Component ---
// export default function SearchResultsClient() {
//     const searchParams = useSearchParams();
//     const query = searchParams.get('q') || '';
//     const city = searchParams.get('city') || 'Bengaluru';
//     const [currentPage, setCurrentPage] = useState(1);
//     const ITEMS_PER_PAGE = 9;
    
//     const [filters, setFilters] = useState<Filters>({
//         zoning: 'All',
//         builder: 'All',
//         propertyType: 'All',
//         status: 'All',
//         bedrooms: 'All',
//         budget: 100000000,
//     });
    
//     const handleFilterChange = (name: keyof Filters, value: any) => {
//         setFilters(prev => ({...prev, [name]: value}));
//     };
    
//     const filteredProperties = useMemo(() => {
//         return propertiesData.filter(property => {
//             const developer = developersData.find(d => d.id === property.developerId);
//             const textMatch = query === '' || property.name.toLowerCase().includes(query.toLowerCase()) || (developer && developer.name.toLowerCase().includes(query.toLowerCase())) || property.location.toLowerCase().includes(query.toLowerCase());
            
//             const zoningMatch = filters.zoning === 'All' || property.overview.zoning === filters.zoning;
//             const builderMatch = filters.builder === 'All' || (developer && developer.name === filters.builder);
//             const propertyTypeMatch = filters.propertyType === 'All' || property.overview.propertyType === filters.propertyType;
//             const statusMatch = filters.status === 'All' || property.overview.status === filters.status;
//             const bedroomsMatch = filters.bedrooms === 'All' || property.specs.some(s => s.text === filters.bedrooms);
            
//             return textMatch && zoningMatch && builderMatch && propertyTypeMatch && statusMatch && bedroomsMatch;
//         });
//     }, [query, filters]);

//     const propertiesToShow = filteredProperties.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

//     return (
//         <div className="bg-gray-50 min-h-screen">
//             <Navbar />
//             <SearchHeader filters={filters} onFilterChange={handleFilterChange} />
            
//             <main className="container mx-auto max-w-7xl px-4 py-8">
//                 <div className="flex justify-between items-center mb-6">
//                     <p className="text-gray-600">
//                         <strong>{filteredProperties.length}</strong> Results in <strong>{city}</strong>
//                     </p>
//                     <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
//                         <span>Relevance</span>
//                         <ChevronDown size={16} />
//                     </div>
//                 </div>

//                 <PropertyListings
//                     propertiesToShow={propertiesToShow}
//                     totalProperties={filteredProperties.length}
//                     totalPages={Math.ceil(filteredProperties.length / ITEMS_PER_PAGE)}
//                     currentPage={currentPage}
//                     onPageChange={setCurrentPage}
//                 />
//             </main>

//             <SiteMapFooter />
//             <DetailedFooter />
//         </div>
//     );
// }




'use client';

import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Navbar from '@/components/shared/Navbar';
import { propertiesData, developersData } from '../data/properties';
import PropertyListings from '@/components/homePage/PropertyListings';
import SiteMapFooter from '@/components/homePage/SiteMapFooter';
import DetailedFooter from '@/components/aboutPage/DetailedFooter';
import {
  ChevronDown,
  Search,
  Globe,
  Building,
  Home,
  CheckSquare,
  BedDouble,
  Wallet,
  RefreshCcw,
} from 'lucide-react';

// --- Types for filters ---
type FilterCategory =
  | 'Zoning'
  | 'Builders'
  | 'Property Type'
  | 'Status'
  | 'Bedrooms'
  | 'Budget';

// --- Reusable Filter Button ---
const FilterButton = ({
  icon: Icon,
  label,
  onClick,
  isActive,
}: {
  icon: React.ElementType;
  label: string;
  onClick: () => void;
  isActive: boolean;
}) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 transition-colors ${
      isActive
        ? 'text-green-600 font-bold'
        : 'text-gray-600 hover:text-green-600'
    }`}
  >
    <Icon size={18} />
    <span className="font-medium">{label}</span>
    <ChevronDown
      size={16}
      className={`text-gray-400 transition-transform ${
        isActive ? 'rotate-180' : ''
      }`}
    />
  </button>
);

// --- Search Header Component ---
function SearchHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [selectedCity, setSelectedCity] = useState(
    searchParams.get('city') || 'Chennai'
  );
  const [openFilter, setOpenFilter] = useState<FilterCategory | null>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  // Sync with URL params
  useEffect(() => {
    setSearchTerm(searchParams.get('q') || '');
    setSelectedCity(searchParams.get('city') || 'Chennai');
  }, [searchParams]);

  const activeFilters = {
    zoning: searchParams.get('zoning'),
    builder: searchParams.get('builder'),
    propertyType: searchParams.get('propertyType'),
    status: searchParams.get('status'),
    bedrooms: searchParams.get('bedrooms'),
    budget: searchParams.get('budget') || '100000000',
  };

  const filterOptions = {
    zoning: ['Residential', 'Commercial'],
    builders: [...new Set(developersData.map((d) => d.name))].sort(),
    propertyType: ['Apartments', 'Villa', 'Plot'],
    status: ['Ready to Move', 'Under Construction'],
    bedrooms: ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK'],
  };

  const areFiltersActive = useMemo(
    () =>
      searchParams.has('zoning') ||
      searchParams.has('builder') ||
      searchParams.has('propertyType') ||
      searchParams.has('status') ||
      searchParams.has('bedrooms') ||
      (searchParams.get('budget') &&
        searchParams.get('budget') !== '100000000'),
    [searchParams]
  );

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node))
        setOpenFilter(null);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const updateQueryParam = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (params.get(name) === value) params.delete(name);
      else params.set(name, value);
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    params.set('q', searchTerm);
    params.set('city', selectedCity);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleResetFilters = () => {
    const params = new URLSearchParams();
    if (searchParams.get('q')) params.set('q', searchParams.get('q')!);
    if (searchParams.get('city')) params.set('city', searchParams.get('city')!);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const toggleFilter = (filter: FilterCategory) =>
    setOpenFilter((prev) => (prev === filter ? null : filter));

  const formatBudget = (value: string) => {
    const num = parseInt(value, 10);
    return num >= 10000000
      ? `₹ ${(num / 10000000).toFixed(2)} Cr`
      : `₹ ${(num / 100000).toFixed(0)} L`;
  };

  return (
    <div
      className="bg-white py-8 border-b border-gray-200 sticky top-0 z-20"
      ref={filterRef}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-6">
          <h1 className="text-4xl font-serif text-gray-800 tracking-wider">
            SEARCH
          </h1>
          <p className="text-sm font-semibold text-green-600 tracking-[0.2em]">
            GET EXACTLY WHAT YOU NEED
          </p>
        </div>

        {/* --- Search Bar --- */}
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-gray-100/70 p-2 rounded-lg border border-gray-200"
        >
          <div className="relative">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="font-semibold bg-transparent border-none focus:ring-0 appearance-none py-2 pl-4 pr-8 text-gray-800"
            >
              <option>Chennai</option>
              <option>Bengaluru</option>
            </select>
            <ChevronDown
              size={20}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Location, Project, Developer or RERA ID..."
            className="flex-grow border-l border-gray-300 pl-4 bg-transparent focus:ring-0 text-gray-700 placeholder-gray-500"
          />
          <button
            type="submit"
            aria-label="Submit search"
            className="bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition-colors"
          >
            <Search size={20} />
          </button>
        </form>

        {/* --- Filters --- */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <FilterButton
            icon={Globe}
            label="Zoning"
            onClick={() => toggleFilter('Zoning')}
            isActive={!!activeFilters.zoning}
          />
          <FilterButton
            icon={Building}
            label="Builders"
            onClick={() => toggleFilter('Builders')}
            isActive={!!activeFilters.builder}
          />
          <FilterButton
            icon={Home}
            label="Property Type"
            onClick={() => toggleFilter('Property Type')}
            isActive={!!activeFilters.propertyType}
          />
          <FilterButton
            icon={CheckSquare}
            label="Status"
            onClick={() => toggleFilter('Status')}
            isActive={!!activeFilters.status}
          />
          <FilterButton
            icon={BedDouble}
            label="Bedrooms"
            onClick={() => toggleFilter('Bedrooms')}
            isActive={!!activeFilters.bedrooms}
          />
          <FilterButton
            icon={Wallet}
            label="Budget"
            onClick={() => toggleFilter('Budget')}
            isActive={activeFilters.budget !== '100000000'}
          />

          {/* {areFiltersActive && (
            <button
              onClick={handleResetFilters}
              className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-700 font-medium transition-colors ml-auto pl-4"
              title="Reset all filters"
            >
              <RefreshCcw size={16} />
              Reset
            </button>
          )} */}
        </div>

        {/* --- Dropdowns --- */}
        {openFilter && (
          <div className="mt-4 bg-gray-100/70 p-6 rounded-lg border border-gray-200 absolute w-[calc(100%-2rem)] left-4 md:w-full md:left-auto md:relative shadow-lg md:shadow-none">
            {openFilter === 'Zoning' &&
              filterOptions.zoning.map((opt) => (
                <button
                  key={opt}
                  onClick={() => updateQueryParam('zoning', opt)}
                  className={`px-4 py-2 text-sm font-medium border rounded-full mr-2 mb-2 transition-colors ${
                    activeFilters.zoning === opt
                      ? 'bg-green-600 text-white border-green-600'
                      : 'border-green-600 text-green-600 bg-white hover:bg-green-50'
                  }`}
                >
                  {opt}
                </button>
              ))}

            {openFilter === 'Builders' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {filterOptions.builders.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => updateQueryParam('builder', opt)}
                    className={`px-3 py-1.5 text-xs text-center border rounded-full transition-colors ${
                      activeFilters.builder === opt
                        ? 'bg-green-600 text-white border-green-600'
                        : 'border-green-600 text-green-600 bg-white hover:bg-green-50'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {openFilter === 'Property Type' &&
              filterOptions.propertyType.map((opt) => (
                <button
                  key={opt}
                  onClick={() => updateQueryParam('propertyType', opt)}
                  className={`px-4 py-2 text-sm font-medium border rounded-full mr-2 mb-2 transition-colors ${
                    activeFilters.propertyType === opt
                      ? 'bg-green-600 text-white border-green-600'
                      : 'border-green-600 text-green-600 bg-white hover:bg-green-50'
                  }`}
                >
                  {opt}
                </button>
              ))}

            {openFilter === 'Status' &&
              filterOptions.status.map((opt) => (
                <button
                  key={opt}
                  onClick={() => updateQueryParam('status', opt)}
                  className={`px-4 py-2 text-sm font-medium border rounded-full mr-2 mb-2 transition-colors ${
                    activeFilters.status === opt
                      ? 'bg-green-600 text-white border-green-600'
                      : 'border-green-600 text-green-600 bg-white hover:bg-green-50'
                  }`}
                >
                  {opt}
                </button>
              ))}

            {openFilter === 'Bedrooms' &&
              filterOptions.bedrooms.map((opt) => (
                <button
                  key={opt}
                  onClick={() => updateQueryParam('bedrooms', opt)}
                  className={`px-4 py-2 text-sm font-medium border rounded-full mr-2 mb-2 transition-colors ${
                    activeFilters.bedrooms === opt
                      ? 'bg-green-600 text-white border-green-600'
                      : 'border-green-600 text-green-600 bg-white hover:bg-green-50'
                  }`}
                >
                  {opt}
                </button>
              ))}

            {openFilter === 'Budget' && (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-medium text-gray-700">
                    Max Budget:
                  </label>
                  <span className="font-bold text-green-600 text-lg">
                    {formatBudget(activeFilters.budget)}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000000"
                  max="100000000"
                  step="1000000"
                  value={activeFilters.budget}
                  onChange={(e) =>
                    updateQueryParam('budget', e.target.value)
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>50L</span>
                  <span>1Cr</span>
                  <span>5Cr</span>
                  <span>10Cr+</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// --- Main SearchResultsClient Component ---
export default function SearchResultsClient() {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  const query = searchParams.get('q') || '';
  const city = searchParams.get('city') || 'Chennai';
  const zoning = searchParams.get('zoning');
  const builder = searchParams.get('builder');
  const propertyType = searchParams.get('propertyType');
  const status = searchParams.get('status');
  const bedrooms = searchParams.get('bedrooms');
  const budget = parseInt(searchParams.get('budget') || '100000000', 10);

//   const filteredProperties = useMemo(() => {
//     return propertiesData.filter((property) => {
//       const developer = developersData.find(
//         (d) => d.id === property.developerId
//       );

//       const cityMatch =
//         property.location &&
//         property.location.toLowerCase().includes(city.toLowerCase());
//       if (!cityMatch) return false;

//       const budgetMatch =
//         typeof property.price === 'number' && property.price <= budget;
//       if (!budgetMatch) return false;

//       const textMatch =
//         query === '' ||
//         property.name.toLowerCase().includes(query.toLowerCase()) ||
//         (developer &&
//           developer.name.toLowerCase().includes(query.toLowerCase())) ||
//         property.location.toLowerCase().includes(query.toLowerCase());

//       const zoningMatch = !zoning || property.overview.zoning === zoning;
//       const builderMatch = !builder || (developer && developer.name === builder);
//       const propertyTypeMatch =
//         !propertyType || property.overview.propertyType === propertyType;
//       const statusMatch = !status || property.overview.status === status;
//       const bedroomsMatch =
//         !bedrooms || property.specs.some((s) => s.text === bedrooms);

//       return (
//         textMatch &&
//         zoningMatch &&
//         builderMatch &&
//         propertyTypeMatch &&
//         statusMatch &&
//         bedroomsMatch
//       );
//     });
//   }, [
//     query,
//     city,
//     zoning,
//     builder,
//     propertyType,
//     status,
//     bedrooms,
//     budget,
//   ]);


// Inside useMemo for filteredProperties:
const filteredProperties = useMemo(() => {
  return propertiesData.filter((property) => {
    const developer = developersData.find((d) => d.id === property.developerId);

    // City match (case-insensitive)
    const cityMatch = property.location?.toLowerCase().includes(city.toLowerCase());
    if (!cityMatch) return false;

    // Budget match
    const budgetMatch = typeof property.price === 'number' && property.price <= budget;
    if (!budgetMatch) return false;

    // Text search (query)
    const textMatch =
      !query ||
      property.name.toLowerCase().includes(query.toLowerCase()) ||
      (developer?.name.toLowerCase().includes(query.toLowerCase())) ||
      property.location.toLowerCase().includes(query.toLowerCase());

    // Zoning: normalize both sides
    const zoningMatch = !zoning || zoning === 'None' || 
      (property.overview.zoning?.toLowerCase().trim() === zoning.toLowerCase().trim());

    // Builder
    const builderMatch = !builder || builder === 'Select' || 
      (developer && developer.name === builder);

    // Property Type
    const propertyTypeMatch = !propertyType || propertyType === 'Select' || 
      (property.overview.propertyType?.toLowerCase().trim() === propertyType.toLowerCase().trim());

    // Status
    const statusMatch = !status || status === 'Select' || 
      (property.overview.status?.toLowerCase().trim() === status.toLowerCase().trim());

    // Bedrooms: compare normalized (remove spaces)
    const normalizeBedroom = (str: string) => str.toLowerCase().replace(/\s+/g, '');
    const bedroomsMatch = !bedrooms || bedrooms === 'Select' || 
      property.specs.some((s) => normalizeBedroom(s.text) === normalizeBedroom(bedrooms));

    return textMatch && zoningMatch && builderMatch && propertyTypeMatch && statusMatch && bedroomsMatch;
  });
}, [query, city, zoning, builder, propertyType, status, bedrooms, budget]);


  useEffect(() => {
    setCurrentPage(1);
  }, [query, city, zoning, builder, propertyType, status, bedrooms, budget]);

  const propertiesToShow = filteredProperties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <SearchHeader />

      <main className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            <strong>{filteredProperties.length}</strong> Results in{' '}
            <strong>{city}</strong>
            {query && (
              <>
                {' '}
                for "<strong className="text-green-600">{query}</strong>"
              </>
            )}
          </p>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer">
            <span>Relevance</span>
            <ChevronDown size={16} />
          </div>
        </div>

        {propertiesToShow.length > 0 ? (
          <PropertyListings
            propertiesToShow={propertiesToShow}
            totalProperties={filteredProperties.length}
            totalPages={Math.ceil(filteredProperties.length / ITEMS_PER_PAGE)}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        ) : (
          <div className="text-center py-20 bg-white rounded-lg border">
            <h2 className="text-2xl font-semibold text-gray-800">
              No Properties Found
            </h2>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or filters to find what you're looking
              for.
            </p>
          </div>
        )}
      </main>

      <SiteMapFooter />
      <DetailedFooter />
    </div>
  );
}
