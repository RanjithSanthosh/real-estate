

// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname, useRouter, useSearchParams } from 'next/navigation';
// import { ChevronDown, Phone, Search, SlidersVertical, Heart, User } from 'lucide-react';
// import { useUI } from '../context/UIContext';
// import logoImage from "@/components/homePage/assets/logo.png";
// import { Button } from '@/components/ui/button';
// export default function MapHeader() {
//   const { openFilterModal, openLoginModal, openConsultationModal } = useUI();
  
//   // Hooks for managing URL state
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   // State to control the form inputs
//   const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
//   const [selectedCity, setSelectedCity] = useState(searchParams.get('city') || 'CHENNAI');

//   const handleSearchSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const params = new URLSearchParams(searchParams.toString());
//     params.set('q', searchTerm);
//     params.set('city', selectedCity);
    
//     // Update the URL with the new search query
//     // This will cause MapClient to re-render and re-filter
//     router.push(`${pathname}?${params.toString()}`);
//   };

//   return (
//     <header className="absolute top-0 left-0 right-0 z-[1000] p-4 bg-gradient-to-b from-black/60 via-black/40 to-transparent">
//       <div className="container mx-auto max-w-7xl">
//         {/* Top Bar */}
//         <div className="flex justify-between items-center text-white">
//           <Link href="/home">
//             <Image src={logoImage} alt="Home Konnect Logo" width={170} height={37} priority />
//           </Link>
//           <div className="flex items-center gap-4">
//             <select 
//               value={selectedCity}
//               onChange={(e) => setSelectedCity(e.target.value)}
//               className="bg-transparent border-none text-white focus:ring-0 font-medium"
//             >
//               <option className="text-black">CHENNAI</option>
//               <option className="text-black">BENGALURU</option>
//             </select>
//             <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
//               <Link href="/home" className="hover:text-green-300">Home</Link>
//               <Link href="/about" className="hover:text-green-300">About</Link>
//               <Link href="/contact" className="hover:text-green-300">Contact Us</Link>
//             </nav>
//             <div className="flex items-center gap-3">
//               <Button onClick={openConsultationModal} variant="outline" className="hidden sm:flex bg-transparent text-white border-white/50 hover:bg-white/10 hover:text-white">
//                 <Phone size={16} className="mr-2" /> Call Us
//               </Button>
//               <Heart className="cursor-pointer hover:text-red-400" size={20} />
//               <User onClick={openLoginModal} className="cursor-pointer hover:text-green-300" size={20} />
//             </div>
//           </div>
//         </div>
        
//         {/* Bottom Bar - Search & Filter */}
//         <form onSubmit={handleSearchSubmit} className="mt-4 flex items-center gap-2">
//           <div className="flex-grow relative">
//             <input
//               type="text"
//               placeholder="Search for properties or locations..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-5 pr-12 py-3 bg-white/90 text-gray-900 border-none rounded-md shadow-lg focus:ring-2 focus:ring-green-500"
//             />
//             <Search size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
//           </div>
//           <Button onClick={openFilterModal} type="button" size="lg" className="bg-green-600 hover:bg-green-700 h-12">
//             <SlidersVertical size={20} className="mr-2" /> Filters
//           </Button>
//           <Button type="submit" size="lg" className="bg-green-600 hover:bg-green-700 h-12">
//             Search
//           </Button>
//         </form>
//       </div>
//     </header>
//   );
// }


'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChevronDown, Phone, Search, SlidersVertical, Heart, User } from 'lucide-react';
import { useUI } from '../context/UIContext';
import logoImage from "@/components/homePage/assets/logo.png";
import { Button } from '@/components/ui/button';

export default function MapHeader() {
  const { openFilterModal, openLoginModal, openConsultationModal } = useUI();
  
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('ALL'); // Default to ALL cities

  // Sync with URL parameters on component mount and URL changes
  useEffect(() => {
    const query = searchParams.get('q') || '';
    const city = searchParams.get('city') || 'ALL'; // Default to ALL
    
    setSearchTerm(query);
    setSelectedCity(city);
  }, [searchParams]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    
    if (searchTerm.trim()) {
      params.set('q', searchTerm.trim());
    }
    
    // Only set city if it's not "ALL"
    if (selectedCity && selectedCity !== 'ALL') {
      params.set('city', selectedCity);
    }
    
    // Update URL without page reload
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    
    const params = new URLSearchParams();
    
    // Only set city if it's not "ALL"
    if (city !== 'ALL') {
      params.set('city', city);
    }
    
    if (searchTerm.trim()) {
      params.set('q', searchTerm.trim());
    }
    
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleFilterClick = () => {
    openFilterModal();
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCity('ALL');
    router.push(pathname, { scroll: false });
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-[1000] p-4 bg-gradient-to-b from-black/60 via-black/40 to-transparent">
      <div className="container mx-auto max-w-7xl">
        {/* Top Bar */}
        <div className="flex justify-between items-center text-white">
          <Link href="/home">
            <Image 
              src={logoImage} 
              alt="Home Konnect Logo" 
              width={170} 
              height={37} 
              priority 
              className="cursor-pointer"
            />
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <select 
                value={selectedCity}
                onChange={(e) => handleCityChange(e.target.value)}
                className="bg-transparent border-none text-white focus:ring-0 font-medium cursor-pointer appearance-none py-1 pr-6 pl-2 rounded hover:bg-white/10 transition-colors"
              >
                <option value="ALL" className="text-black">ALL CITIES</option>
                <option value="CHENNAI" className="text-black">CHENNAI</option>
                <option value="BENGALURU" className="text-black">BENGALURU</option>
                <option value="HYDERABAD" className="text-black">HYDERABAD</option>
                <option value="DELHI" className="text-black">DELHI</option>
                <option value="MUMBAI" className="text-black">MUMBAI</option>
              </select>
              <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="/home" className="hover:text-green-300 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-green-300 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-green-300 transition-colors">Contact Us</Link>
            </nav>
            
            <div className="flex items-center gap-3">
              <Button 
                onClick={openConsultationModal} 
                variant="outline" 
                className="hidden sm:flex bg-transparent text-white border-white/50 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Phone size={16} className="mr-2" /> Call Us
              </Button>
              <Heart className="cursor-pointer hover:text-red-400 transition-colors" size={20} />
              <User 
                onClick={openLoginModal} 
                className="cursor-pointer hover:text-green-300 transition-colors" 
                size={20} 
              />
            </div>
          </div>
        </div>
        
        {/* Bottom Bar - Search & Filter */}
        <form onSubmit={handleSearchSubmit} className="mt-4 flex items-center gap-2">
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Search for properties, locations, builders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-5 pr-12 py-3 bg-white/90 text-gray-900 border-none rounded-md shadow-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition-all"
            />
            <Search size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          
          {/* <Button 
            onClick={handleFilterClick} 
            type="button" 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 h-12 transition-colors"
          >
            <SlidersVertical size={20} className="mr-2" /> Filters
          </Button> */}
          
          <Button 
            type="submit" 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 h-12 transition-colors"
          >
            Search
          </Button>

          {(searchTerm || selectedCity !== 'ALL') && (
            <Button 
              type="button"
              onClick={clearFilters}
              variant="outline"
              size="lg" 
              className="bg-white/20 text-white hover:bg-white/30 h-12 transition-colors"
            >
              Clear
            </Button>
          )}
        </form>
      </div>
    </header>
  );
}