

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Car,
  MapPin,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
// import { Property } from '@/data/properties';
import { Property } from "../../app/data/properties";

import { useUI } from "../../app/context/UIContext";

import { useFavorites } from '../../app/context/FavoritesContext';
import { toast } from 'react-hot-toast';
// import whatsappIcon from './assets/whatsapp-svgrepo-com 1.svg';
import { motion, Variants } from "framer-motion";
interface PropertyListingsProps {
  propertiesToShow: Property[];
  totalProperties: number;
  totalPages: number;
  currentPage: number;
  filterType: string;
  sortOrder: string;
  startIndex: number;
  onFilterChange: (type: string) => void;
  onSortChange: (order: string) => void;
  onPageChange: (page: number) => void;
}

function PropertyCard({ property }: { property: Property }) {
  const { openScheduleVisitModal } = useUI(); // Get the function from context

    const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite(property.id);

const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation();
    
    // Step 2: Use the toast function
    if (isFav) {
      removeFavorite(property.id);
      toast('Property removed from favorites', {
        icon: '💔',
      });
    } else {
      addFavorite(property.id);
      // This creates a success toast that looks similar to your image
      toast.success('Property added to favorites', {
        style: {
          background: '#28a745', // Green background
          color: '#ffffff',     // White text
        },
        iconTheme: {
          primary: '#ffffff',   // White icon
          secondary: '#28a745', // Green icon background
        },
      });
    }
  };

  const getTagColorClass = (color: "green" | "yellow" | "blue") => {
    switch (color) {
      case "green":
        return "bg-green-500";
      case "yellow":
        return "bg-yellow-500";
      case "blue":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation if card is a link
    e.stopPropagation(); // Stop event from bubbling up
    openScheduleVisitModal(property); // Open modal with this card's data
  };

  return (
    <Link href={`/properties/${property.id}`} className="block h-full">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 font-sans flex flex-col h-full">
        <div className="relative">
          <div className="relative w-full h-56 rounded-t-2xl overflow-hidden">
            <Image
              src={property.images[0]}
              alt={property.name}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {property.tag && (
            <div
              className={`absolute top-4 right-4 text-white text-xs font-semibold px-3 py-1 rounded-md ${getTagColorClass(
                property.tag.color
              )}`}
            >
              {property.tag.text}
            </div>
          )}
          <div className="absolute -bottom-5 left-4 bg-white text-gray-800 text-base font-bold px-4 py-2 rounded-full shadow-lg flex items-center">
            {property.priceRange}
          </div>
          <div className="absolute -bottom-6 right-4 flex space-x-2">
            <button className="w-12 h-12 rounded-full bg-white text-purple-600 flex items-center justify-center shadow-lg hover:bg-gray-100 transition">
              <Car size={22} />
            </button>
            {/* <button className="w-12 h-12 rounded-full bg-white text-pink-500 flex items-center justify-center shadow-lg hover:bg-gray-100 transition">
              <Heart size={22} />
            </button> */}

                        <motion.button
                          onClick={handleFavoriteToggle}
                          whileHover={{ scale: 1.1 }}
                          className="bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-sm"
                        >
                          <Heart 
                            size={20} 
                            className={isFav ? 'text-red-500' : 'text-gray-700'}
                            fill={isFav ? 'currentColor' : 'none'}
                          />
                        </motion.button>
          </div>
        </div>
        <div className="pt-10 p-5 flex-grow">
          <h3 className="text-xl font-extrabold text-gray-900 tracking-wider mb-1">
            {property.name}
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            by{" "}
            <span className="text-yellow-600 font-semibold underline">
              {property.developer}
            </span>
          </p>
          <div className="flex items-center text-gray-500 mb-4">
            <MapPin size={16} className="mr-2 text-blue-500 flex-shrink-0" />
            <span>{property.location}</span>
          </div>
          <hr className="border-dashed my-4" />
          <div className="flex flex-wrap gap-2">
            {property.specs.map((spec, index) => (
              <div
                key={index}
                className="bg-green-50 border border-green-200 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2"
              >
                <spec.icon size={16} />
              
                <span>{spec.text}</span>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="px-5 pb-5 pt-2 flex items-center justify-between mt-auto">
                <button className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></button>
                <button onClick={handleContactClick} className="flex-grow bg-green-500 text-white py-3 px-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors duration-300 w-xs">Contact Us</button>
            </div> */}

        <div className="px-5 pb-5 pt-2 flex items-center gap-3 mt-auto">
          {/* WhatsApp Button with SVG */}
          <button className="w-12 h-12 flex-shrink-0 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </button>

          {/* Contact Us Button - Correctly Sized */}
          <button
            onClick={handleContactClick}
            className="w-full bg-green-500 text-white py-3 px-4 rounded-full font-bold text-base hover:bg-green-600 transition-colors duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </Link>
  );
}

export default function PropertyListings({
  propertiesToShow,
  totalProperties,
  totalPages,
  currentPage,
  filterType,
  sortOrder,
  startIndex,
  onFilterChange,
  onSortChange,
  onPageChange,
}: PropertyListingsProps) {
  return (
    <div className="bg-gray-50 min-h-screen mt-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        {/* <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-4">Find Your Dream Property</h1>
                <div className="mt-8 p-4 bg-white rounded-xl shadow-md border border-gray-200 flex flex-col md:flex-row items-center gap-4">
                    <p className="flex-1 text-gray-600">Use the filters to refine the results shown below.</p>
                    <div className="relative w-full md:w-auto">
                        <select
                            value={filterType}
                            onChange={(e) => onFilterChange(e.target.value)}
                            className="w-full appearance-none bg-white py-3 pl-4 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                        >
                            <option value="All">All Types</option>
                            <option value="Apartments">Apartments</option>
                            <option value="Villa">Villa</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                    </div>
                    <div className="relative w-full md:w-auto">
                        <select
                            value={sortOrder}
                            onChange={(e) => onSortChange(e.target.value)}
                            className="w-full appearance-none bg-white py-3 pl-4 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                        >
                            <option value="Default">Sort By</option>
                            <option value="PriceLowToHigh">Price: Low to High</option>
                            <option value="PriceHighToLow">Price: High to Low</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                    </div>
                </div>
            </header> */}

        {propertiesToShow.length > 0 ? (
          <div>
            {/* <p className="text-gray-600 mb-6">
                        Showing <strong>{startIndex + 1}-{Math.min(startIndex + 9, totalProperties)}</strong> of <strong>{totalProperties}</strong> properties
                    </p> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {propertiesToShow.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed">
            <h3 className="text-2xl font-bold text-gray-800">
              No Properties Found
            </h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or filter criteria to find what you're
              looking for.
            </p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 border border-gray-300 hover:bg-gray-100 disabled:opacity-50 transition"
            >
              <ArrowLeft size={18} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition ${
                  currentPage === page
                    ? "bg-yellow-500 text-white shadow-md"
                    : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 border border-gray-300 hover:bg-gray-100 disabled:opacity-50 transition"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
