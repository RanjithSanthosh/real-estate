




'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Navbar from '@/components/shared/Navbar';
import { propertiesData, developersData } from '../data/properties';
import PropertyListings from '@/components/homePage/PropertyListings';
import SiteMapFooter from '@/components/homePage/SiteMapFooter';
import DetailedFooter from '@/components/aboutPage/DetailedFooter';
import { ChevronDown, Search, Globe, Building, Home, CheckSquare, BedDouble, Wallet, LandPlot, X as CloseIcon } from 'lucide-react';

// --- Types for our filters ---
type FilterCategory = 'Zoning' | 'Builders' | 'Property Type' | 'Status' | 'Bedrooms' | 'Amenity' | 'Budget';
interface Filters {
    zoning: string;
    builder: string;
    propertyType: string;
    status: string;
    bedrooms: string;
    budget: number;
}

// --- Reusable Filter Button Component ---
const FilterButton = ({ icon: Icon, label, onClick, isActive }: { icon: React.ElementType, label: string, onClick: () => void, isActive: boolean }) => (
    <button onClick={onClick} className={`flex items-center gap-2 transition-colors ${isActive ? 'text-green-600' : 'text-gray-600 hover:text-green-600'}`}>
        <Icon size={18} />
        <span className="font-medium">{label}</span>
        <ChevronDown size={16} className={`text-gray-400 transition-transform ${isActive ? 'rotate-180' : ''}`} />
    </button>
);

// --- The SearchHeader Component ---
function SearchHeader({ filters, onFilterChange }: { filters: Filters, onFilterChange: (name: keyof Filters, value: any) => void }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
    const [selectedCity, setSelectedCity] = useState(searchParams.get('city') || 'Bengaluru');
    const [openFilter, setOpenFilter] = useState<FilterCategory | null>(null);
    const filterRef = useRef<HTMLDivElement>(null);

    const filterOptions = {
        zoning: ['Residential', 'Commercial'],
        builders: developersData.map(d => d.name),
        propertyType: ['Apartments', 'Villa', 'Plot'],
        status: ['Ready to Move', 'Under Construction'],
        bedrooms: ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK'],
        amenity: ['Swimming Pool', 'Gym', 'Clubhouse', 'Garden'],
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
                setOpenFilter(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSearch = (e: React.FormEvent) => { /* ... */ };
    const toggleFilter = (filter: FilterCategory) => setOpenFilter(prev => (prev === filter ? null : filter));
    
    return (
        <div className="bg-white py-8 border-b border-gray-200" ref={filterRef}>
            <div className="container mx-auto max-w-7xl px-4">
                <div className="mb-6">
                    <h1 className="text-4xl font-serif text-gray-800 tracking-wider">SEARCH</h1>
                    <p className="text-sm font-semibold text-green-600 tracking-[0.2em]">GET EXACTLY WHAT YOU NEED</p>
                </div>

                <form onSubmit={handleSearch} className="flex items-center bg-gray-100/70 p-2 rounded-lg border border-gray-200">
                    <div className="relative">
                        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="font-semibold bg-transparent border-none focus:ring-0 appearance-none py-2 pl-4 pr-8 text-gray-800">
                            <option>Bengaluru</option>
                            <option>Chennai</option>
                        </select>
                        <ChevronDown size={20} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                    <input 
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by Location, Project, Developer or RERA ID..."
                        className="flex-grow border-l border-gray-300 pl-4 bg-transparent focus:ring-0 border-none text-gray-700 placeholder-gray-500"
                    />
                    <button type="submit" className="bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition-colors">
                        <Search size={20} />
                    </button>
                </form>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                    <FilterButton icon={Globe} label="Zoning" onClick={() => toggleFilter('Zoning')} isActive={openFilter === 'Zoning'} />
                    <FilterButton icon={Building} label="Builders" onClick={() => toggleFilter('Builders')} isActive={openFilter === 'Builders'} />
                    <FilterButton icon={Home} label="Property Type" onClick={() => toggleFilter('Property Type')} isActive={openFilter === 'Property Type'} />
                    <FilterButton icon={CheckSquare} label="Status" onClick={() => toggleFilter('Status')} isActive={openFilter === 'Status'} />
                    <FilterButton icon={BedDouble} label="Bedrooms" onClick={() => toggleFilter('Bedrooms')} isActive={openFilter === 'Bedrooms'} />
                    <FilterButton icon={LandPlot} label="Amenity" onClick={() => toggleFilter('Amenity')} isActive={openFilter === 'Amenity'} />
                    <FilterButton icon={Wallet} label="Budget" onClick={() => toggleFilter('Budget')} isActive={openFilter === 'Budget'} />
                </div>

                {openFilter && (
                    <div className="mt-4 bg-gray-100/70 p-6 rounded-lg border border-gray-200">
                        {openFilter === 'Zoning' && filterOptions.zoning.map(opt => <button key={opt} className="px-4 py-2 text-sm font-medium border border-green-600 text-green-600 bg-white rounded-full mr-2 mb-2">{opt}</button>)}
                        {openFilter === 'Builders' && <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">{filterOptions.builders.map(opt => <button key={opt} className="px-3 py-1.5 text-xs text-center border border-green-600 text-green-600 bg-white rounded-full hover:bg-green-50">{opt}</button>)}</div>}
                        {openFilter === 'Property Type' && filterOptions.propertyType.map(opt => <button key={opt} className="px-4 py-2 text-sm font-medium border border-green-600 text-green-600 bg-white rounded-full mr-2 mb-2">{opt}</button>)}
                        {openFilter === 'Status' && filterOptions.status.map(opt => <button key={opt} className="px-4 py-2 text-sm font-medium border border-green-600 text-green-600 bg-white rounded-full mr-2 mb-2">{opt}</button>)}
                        {openFilter === 'Bedrooms' && filterOptions.bedrooms.map(opt => <button key={opt} className="px-4 py-2 text-sm font-medium border border-green-600 text-green-600 bg-white rounded-full mr-2 mb-2">{opt}</button>)}
                        {openFilter === 'Amenity' && filterOptions.amenity.map(opt => <button key={opt} className="px-4 py-2 text-sm font-medium border border-green-600 text-green-600 bg-white rounded-full mr-2 mb-2">{opt}</button>)}
                        {openFilter === 'Budget' && (
                            <div>
                                <input type="range" min="5000000" max="100000000" step="1000000" className="w-full" />
                                <div className="flex justify-between text-xs text-gray-500 mt-1"><span>50L</span><span>1Cr</span><span>5Cr</span><span>10Cr</span></div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

// --- The Main SearchResultsClient Component ---
export default function SearchResultsClient() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';
    const city = searchParams.get('city') || 'Bengaluru';
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 9;
    
    const [filters, setFilters] = useState<Filters>({
        zoning: 'All',
        builder: 'All',
        propertyType: 'All',
        status: 'All',
        bedrooms: 'All',
        budget: 100000000,
    });
    
    const handleFilterChange = (name: keyof Filters, value: any) => {
        setFilters(prev => ({...prev, [name]: value}));
    };
    
    const filteredProperties = useMemo(() => {
        return propertiesData.filter(property => {
            const developer = developersData.find(d => d.id === property.developerId);
            const textMatch = query === '' || property.name.toLowerCase().includes(query.toLowerCase()) || (developer && developer.name.toLowerCase().includes(query.toLowerCase())) || property.location.toLowerCase().includes(query.toLowerCase());
            
            const zoningMatch = filters.zoning === 'All' || property.overview.zoning === filters.zoning;
            const builderMatch = filters.builder === 'All' || (developer && developer.name === filters.builder);
            const propertyTypeMatch = filters.propertyType === 'All' || property.overview.propertyType === filters.propertyType;
            const statusMatch = filters.status === 'All' || property.overview.status === filters.status;
            const bedroomsMatch = filters.bedrooms === 'All' || property.specs.some(s => s.text === filters.bedrooms);
            
            return textMatch && zoningMatch && builderMatch && propertyTypeMatch && statusMatch && bedroomsMatch;
        });
    }, [query, filters]);

    const propertiesToShow = filteredProperties.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <SearchHeader filters={filters} onFilterChange={handleFilterChange} />
            
            <main className="container mx-auto max-w-7xl px-4 py-8">
                <div className="flex justify-between items-center mb-6">
                    <p className="text-gray-600">
                        <strong>{filteredProperties.length}</strong> Results in <strong>{city}</strong>
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <span>Relevance</span>
                        <ChevronDown size={16} />
                    </div>
                </div>

                <PropertyListings
                    propertiesToShow={propertiesToShow}
                    totalProperties={filteredProperties.length}
                    totalPages={Math.ceil(filteredProperties.length / ITEMS_PER_PAGE)}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </main>

            <SiteMapFooter />
            <DetailedFooter />
        </div>
    );
}