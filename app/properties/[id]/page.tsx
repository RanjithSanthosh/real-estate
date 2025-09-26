'use client';

import React, { useState, use } from 'react'; // ✅ 1. Import 'use' from React
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { propertiesData } from '../../data/properties';
import {
  Heart, MapPin, Phone, Share2, Printer
} from 'lucide-react';

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  // ✅ 2. Unwrap the params object using the 'use' hook.
  // This is a placeholder for the future async behavior. For now, it just works.
  const resolvedParams = use(params);

  // ✅ 3. Use the unwrapped 'resolvedParams' to find the property.
  const property = propertiesData.find(p => p.id.toString() === resolvedParams.id);

  const [activeImage, setActiveImage] = useState(property?.images[0]);
  const [activeTab, setActiveTab] = useState('Overview');

  if (!property) {
    notFound();
  }

  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        {/* Main Content: Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-3">
            <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg mb-4">
              <Image
                src={activeImage || property.images[0]}
                alt={property.name}
                fill
                className="object-cover transition-transform duration-500 ease-in-out"
                priority
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition"><Share2 size={20}/></button>
                <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-pink-500 hover:bg-white transition"><Heart size={20}/></button>
                <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition"><Printer size={20}/></button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {property.images.map((img, index) => (
                <div 
                  key={index} 
                  className={`relative h-24 rounded-lg overflow-hidden cursor-pointer border-4 ${activeImage === img ? 'border-green-500' : 'border-transparent'}`}
                  onClick={() => setActiveImage(img)}
                >
                  <Image src={img} alt={`${property.name} thumbnail ${index + 1}`} fill className="object-cover"/>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Property Details */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">{property.name}</h1>
            <p className="text-md text-gray-500 mb-3">by <a href="#" className="text-yellow-600 font-semibold">{property.developer}</a></p>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin size={16} className="mr-2 text-blue-500"/>
              <span>{property.location}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
                {property.specs.map((spec, i) => (
                    <div key={i} className="bg-green-50 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2 border border-green-200">
                        <spec.icon size={16}/> {spec.text}
                    </div>
                ))}
            </div>
            <div className="bg-gray-50 rounded-lg p-4 my-4">
              <p className="text-gray-600 text-sm">Price</p>
              <p className="text-3xl font-bold text-green-600">{property.priceRange}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="flex-1 bg-white text-green-600 border-2 border-green-500 font-bold py-3 px-6 rounded-lg hover:bg-green-50 transition">Download Brochure</button>
              <button className="flex-1 bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition flex items-center justify-center gap-2"><Phone size={18}/> Call Us</button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16 border-t pt-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {['Overview', 'Salient Features', 'Specifications', 'Floorplans'].map(tab => (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="py-8">
            {activeTab === 'Overview' && (
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                    <div><p className="text-gray-500 mb-1">Zoning</p><p className="font-semibold text-gray-800">{property.overview.zoning}</p></div>
                    <div><p className="text-gray-500 mb-1">Property Type</p><p className="font-semibold text-gray-800">{property.overview.propertyType}</p></div>
                    <div><p className="text-gray-500 mb-1">Status</p><p className="font-semibold text-gray-800">{property.overview.status}</p></div>
                    <div><p className="text-gray-500 mb-1">Land Extent</p><p className="font-semibold text-gray-800">{property.overview.landExtent}</p></div>
                    <div><p className="text-gray-500 mb-1">Price per Sq ft</p><p className="font-semibold text-gray-800">{property.overview.pricePerSqFt}</p></div>
                    <div><p className="text-gray-500 mb-1">Total Units</p><p className="font-semibold text-gray-800">{property.overview.totalUnits}</p></div>
                    <div className="col-span-2"><p className="text-gray-500 mb-1">Project RERA number</p><p className="font-semibold text-gray-800">{property.overview.projectRera}</p></div>
                </div>
                <p className="text-gray-600 leading-relaxed mt-8">{property.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}