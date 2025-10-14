"use client";

import React, { useState, use, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, Variants } from "framer-motion";
import {
  propertiesData,
  Property,
  developersData,
  Developer,
} from "../../data/properties";
import Navbar from "@/components/shared/Navbar";
import {
  Heart,
  MapPin,
  Phone,
  Share2,
  Printer,
  Car,
  Building2,
  BedDouble,
  Scaling,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import DetailedFooter from "@/components/aboutPage/DetailedFooter";
import SiteMapFooter from "@/components/homePage/SiteMapFooter";

import { useFavorites } from "../../context/FavoritesContext";
import { toast } from "react-hot-toast";
// --- MAIN PAGE COMPONENT ---

export default function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const property = propertiesData.find(
    (p) => p.id.toString() === resolvedParams.id
  );

  if (!property) {
    notFound();
  }

  // Find the developer associated with this property
  const developer = developersData.find((d) => d.id === property.developerId);

  return (
    <div className="bg-white font-sans">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-4 py-12">
        <PropertyHeader property={property} />
        <PropertyTabs property={property} developer={developer} />
        <LocationMap property={property} />
        <RelatedProperties currentProperty={property} />
      </main>
    </div>
  );
}

// --- SUB-COMPONENT: PROPERTY HEADER ---
function PropertyHeader({ property }: { property: Property }) {
  const [activeImage, setActiveImage] = useState(property.images[0]);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite(property.id);

  const handleShare = async () => {
    const shareData = {
      title: property.name,
      text: `Check out this amazing property: ${property.name} by ${property.developer}.`,
      url: window.location.href,
    };

    // Check if the Web Share API is available in the browser
    if (navigator.share) {
      try {
        // If available, use the native share dialog
        await navigator.share(shareData);
        console.log("Property shared successfully!");
      } catch (err) {
        // The user might cancel the share action, so we catch the error
        console.log("Share action was cancelled or failed", err);
      }
    } else {
      // --- FALLBACK ---
      // If the API is not available, copy the link to the clipboard
      try {
        await navigator.clipboard.writeText(shareData.url);
        toast.success("Property link copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy link: ", err);
        toast.error("Could not copy the link.");
      }
    }
  };

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Step 2: Use the toast function
    if (isFav) {
      removeFavorite(property.id);
      toast("Property removed from favorites", {
        icon: "💔",
      });
    } else {
      addFavorite(property.id);
      // This creates a success toast that looks similar to your image
      toast.success("Property added to favorites", {
        style: {
          background: "#28a745", // Green background
          color: "#ffffff", // White text
        },
        iconTheme: {
          primary: "#ffffff", // White icon
          secondary: "#28a745", // Green icon background
        },
      });
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      {/* Left Column: Image Gallery */}
      <div className="lg:col-span-3">
        <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg mb-4">
          <Image
            src={activeImage}
            alt={property.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-4 right-4 flex space-x-2">
            <button onClick={handleShare} className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition">
              <Share2 size={20} />
            </button>
            {/* <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-pink-500 hover:bg-white transition">
              <Heart size={20} />
            </button> */}
            <motion.button
              onClick={handleFavoriteToggle}
              whileHover={{ scale: 1.1 }}
              className="bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-sm"
            >
              <Heart
                size={20}
                className={isFav ? "text-red-500" : "text-gray-700"}
                fill={isFav ? "currentColor" : "none"}
              />
            </motion.button>
            <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition">
              <Printer size={20} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {property.images.map((img, index) => (
            <div
              key={index}
              className={`relative h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${
                activeImage === img ? "border-green-500" : "border-transparent"
              }`}
              onClick={() => setActiveImage(img)}
            >
              <Image
                src={img}
                alt={`${property.name} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Right Column: Property Details */}
      <div className="lg:col-span-2">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
          {property.name}
        </h1>
        <p className="text-md text-gray-500 mb-3">
          by{" "}
          <a href="#" className="text-yellow-600 font-semibold">
            {property.developer}
          </a>
        </p>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-2 text-blue-500" />
          <span>{property.location}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {property.specs.map((spec, i) => (
            <div
              key={i}
              className="bg-green-50 text-green-800 text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2 border border-green-200"
            >
              <spec.icon size={16} /> {spec.text}
            </div>
          ))}
        </div>
        <div className="bg-gray-50 rounded-lg p-4 my-4">
          <p className="text-gray-600 text-sm">Price</p>
          <p className="text-3xl font-bold text-green-600">
            {property.priceRange}
          </p>
        </div>
        <div className=" sm:flex-row gap-4 mt-6">
          <button className="flex-1 bg-white text-green-600 border-2 border-green-500 font-bold py-3 px-6 rounded-3xl hover:bg-green-50 transition w-lg">
            Download Brochure
          </button>
          <button className="flex-1 bg-green-500 text-white font-bold py-3 px-6 rounded-3xl hover:bg-green-600 transition flex items-center justify-center gap-2 w-lg mt-5  ">
            <Phone size={18} /> Call Us
          </button>
        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENT: PROPERTY TABS ---
function PropertyTabs({
  property,
  developer,
}: {
  property: Property;
  developer?: Developer;
}) {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="mt-16">
      <div className="border-b border-gray-200">
        <nav
          className="-mb-px flex space-x-8 overflow-x-auto"
          aria-label="Tabs"
        >
          {[
            "Overview",
            "Salient Features",
            "Specifications",
            "Floorplans",
            "Gallery",
            "EMI Calculator",
            "About Us",
            "Amenities",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      <div className="py-8">
        {activeTab === "Overview" && <OverviewTabContent property={property} />}
        {activeTab === "Salient Features" && (
          <SalientFeaturesTabContent features={property.salientFeatures} />
        )}
        {activeTab === "Specifications" && (
          <SpecificationsTabContent specs={property.specifications} />
        )}
        {activeTab === "Floorplans" && (
          <FloorplansTabContent
            floorplans={property.floorplans}
            developerName={developer?.name || "Unknown Developer"}
            location={property.location}
          />
        )}
        {activeTab === "Gallery" && (
          <GalleryTabContent
            images={property.images}
            propertyName={property.name}
          />
        )}
        {activeTab === "EMI Calculator" && (
          <EMICalculatorTabContent property={property} />
        )}
        {activeTab === "About Us" && developer && (
          <AboutUsTabContent developer={developer} />
        )}
        {activeTab === "Amenities" && (
          <AmenitiesTabContent amenities={property.amenities} />
        )}
      </div>
    </div>
  );
}

// --- Helper Component for list items with checkmarks ---
function FeatureListItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-gray-700">
      <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 text-green-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span>{text}</span>
    </div>
  );
}

// --- Component for Overview Tab Content ---
function OverviewTabContent({ property }: { property: Property }) {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <p className="text-gray-500 mb-1">Zoning</p>
          <p className="font-semibold text-gray-800">
            {property.overview.zoning}
          </p>
        </div>
        <div>
          <p className="text-gray-500 mb-1">Property Type</p>
          <p className="font-semibold text-gray-800">
            {property.overview.propertyType}
          </p>
        </div>
        <div>
          <p className="text-gray-500 mb-1">Status</p>
          <p className="font-semibold text-gray-800">
            {property.overview.status}
          </p>
        </div>
        <div>
          <p className="text-gray-500 mb-1">Land Extent</p>
          <p className="font-semibold text-gray-800">
            {property.overview.landExtent}
          </p>
        </div>
        <div>
          <p className="text-gray-500 mb-1">Price per Sq ft</p>
          <p className="font-semibold text-gray-800">
            {property.overview.pricePerSqFt}
          </p>
        </div>
        <div>
          <p className="text-gray-500 mb-1">Total Units</p>
          <p className="font-semibold text-gray-800">
            {property.overview.totalUnits}
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-gray-500 mb-1">Project RERA number</p>
          <p className="font-semibold text-gray-800">
            {property.overview.projectRera}
          </p>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed mt-8">
        {property.description}
      </p>
    </div>
  );
}

// --- Component for Salient Features Tab Content ---
function SalientFeaturesTabContent({ features }: { features: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
      {features.map((feature, index) => (
        <FeatureListItem key={index} text={feature} />
      ))}
    </div>
  );
}

// --- Component for Specifications Tab Content ---
function SpecificationsTabContent({
  specs,
}: {
  specs: Property["specifications"];
}) {
  const [activeSpecTab, setActiveSpecTab] = useState("Flooring");
  const specCategories = Object.keys(specs);

  return (
    <div>
      {/* Sub-tabs for specifications */}
      <div className="flex items-center gap-4 border-b pb-2 mb-6">
        {specCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveSpecTab(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              activeSpecTab === category
                ? "bg-green-100 text-green-700"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Content for the active sub-tab */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {(specs[activeSpecTab as keyof typeof specs] || []).map(
          (spec, index) => (
            <FeatureListItem key={index} text={spec} />
          )
        )}
      </div>
    </div>
  );
}

function FloorplansTabContent({
  floorplans,
  developerName,
  location,
}: {
  floorplans: Property["floorplans"];
  developerName: string;
  location: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {floorplans.map((plan, index) => (
        <FloorplanCard
          key={index}
          plan={plan}
          developerName={developerName}
          location={location}
        />
      ))}
    </div>
  );
}

function FloorplanCard({
  plan,
  developerName,
  location,
}: {
  plan: Property["floorplans"][0];
  developerName: string;
  location: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col">
      {/* Image Section */}
      <div className="relative w-full h-56 flex-shrink-0">
        <Image src={plan.image} alt={plan.name} fill className="object-cover" />
        <div className="absolute top-4 left-4 bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-full shadow-md">
          {plan.priceRange}
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md text-purple-600 hover:bg-white transition">
            <Car size={20} />
          </button>
          <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md text-pink-500 hover:bg-white transition">
            <Heart size={20} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
            {plan.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            by{" "}
            <a href="#" className="text-yellow-600 font-semibold underline">
              {developerName}
            </a>
          </p>
          <div className="flex items-center text-gray-500 text-sm mt-3">
            <MapPin size={16} className="mr-2 text-blue-500 flex-shrink-0" />
            <span>{location}</span>
          </div>

          <hr className="border-dashed my-4" />

          {/* Specs Section with two-line layout */}
          <div>
            {(() => {
              const initialSpecs = plan.specs.slice(0, -1);
              const lastSpec = plan.specs.slice(-1)[0];
              return (
                <>
                  <div className="flex items-center gap-4">
                    {initialSpecs.map((spec, i) => (
                      <div
                        key={i}
                        className="bg-green-50 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2 border border-green-200"
                      >
                        <spec.icon size={16} />
                        <span>{spec.text}</span>
                      </div>
                    ))}
                  </div>
                  {lastSpec && (
                    <div className="mt-3">
                      <div className="bg-green-50 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2 border border-green-200 w-fit">
                        <lastSpec.icon size={16} />
                        <span>{lastSpec.text}</span>
                      </div>
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="flex items-center gap-3 mt-6 flex-shrink-0">
          <button className="w-14 h-14 flex-shrink-0 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z" />
            </svg>
          </button>
          <button className="w-full bg-green-500 text-white py-4 px-6 rounded-full font-bold text-lg hover:bg-green-600 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

function GalleryTabContent({
  images,
  propertyName,
}: {
  images: string[];
  propertyName: string;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((img, index) => (
        <div
          key={index}
          className="relative w-full h-48 rounded-lg overflow-hidden shadow-md"
        >
          <Image
            src={img}
            alt={`${propertyName} gallery image ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

// function EMICalculatorTabContent({ property }: { property: Property }) {
//     const [loanAmount, setLoanAmount] = useState(59000000); // 5.9 Cr
//     const [loanTenure, setLoanTenure] = useState(20); // 20 years
//     const [interestRate, setInterestRate] = useState(8.5); // 8.5%

//     const { emi, totalPayable, totalInterest, principalPercent } = useMemo(() => {
//         const principal = loanAmount;
//         const rate = interestRate / 12 / 100;
//         const n = loanTenure * 12;

//         if (principal <= 0 || rate <= 0 || n <= 0) {
//             return { emi: 0, totalPayable: 0, totalInterest: 0, principalPercent: 100 };
//         }

//         const emiCalc = principal * rate * Math.pow(1 + rate, n) / (Math.pow(1 + rate, n) - 1);
//         const totalPayableCalc = emiCalc * n;
//         const totalInterestCalc = totalPayableCalc - principal;
//         const principalPercentCalc = (principal / totalPayableCalc) * 100;

//         return { emi: emiCalc, totalPayable: totalPayableCalc, totalInterest: totalInterestCalc, principalPercent: principalPercentCalc };
//     }, [loanAmount, loanTenure, interestRate]);

//     const formatCurrency = (val: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
//     const formatLakhs = (val: number) => `${(val / 100000).toFixed(2)} L`;
//     const formatCrores = (val: number) => `${(val / 10000000).toFixed(2)} Cr.`;

//     return (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
//             <div className="md:col-span-2 space-y-8">
//                 <div>
//                     <label className="text-sm font-medium text-gray-700">Loan Amount: <span className="font-bold text-green-600">{formatCrores(loanAmount)}</span></label>
//                     <input type="range" min="10000000" max="100000000" step="1000000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600" />
//                     <div className="flex justify-between text-xs text-gray-500 mt-1"><span>1Cr</span><span>2.5Cr</span><span>5Cr</span><span>7.5Cr</span><span>10Cr</span></div>
//                 </div>
//                  <div>
//                     <label className="text-sm font-medium text-gray-700">Loan Tenure: <span className="font-bold text-green-600">{loanTenure} yrs</span></label>
//                     <input type="range" min="5" max="25" step="1" value={loanTenure} onChange={(e) => setLoanTenure(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600" />
//                     <div className="flex justify-between text-xs text-gray-500 mt-1"><span>5 yrs</span><span>10 yrs</span><span>15 yrs</span><span>20 yrs</span><span>25 yrs</span></div>
//                 </div>
//                  <div>
//                     <label className="text-sm font-medium text-gray-700">Interest Rate: <span className="font-bold text-green-600">{interestRate.toFixed(1)}% p.a</span></label>
//                     <input type="range" min="6" max="12" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600" />
//                     <div className="flex justify-between text-xs text-gray-500 mt-1"><span>6%</span><span>9%</span><span>12%</span></div>
//                 </div>
//             </div>
//             <div className="flex flex-col items-center">
//                 <div className="relative w-48 h-48">
//                     <div className="absolute inset-0 rounded-full bg-gray-200"></div>
//                     <div className="absolute inset-0 rounded-full" style={{ background: `conic-gradient(#059669 ${principalPercent}%, transparent ${principalPercent}%)` }}></div>
//                     <div className="absolute inset-4 rounded-full bg-white"></div>
//                 </div>
//                 <div className="text-center mt-4 space-y-2">
//                     <p><span className="inline-block w-3 h-3 bg-green-600 rounded-full mr-2"></span>Principal: <span className="font-semibold">{formatCrores(loanAmount)}</span></p>
//                     <p><span className="inline-block w-3 h-3 bg-gray-200 rounded-full mr-2"></span>Interest: <span className="font-semibold">{formatCrores(totalInterest)}</span></p>
//                     <p>Total Payable: <span className="font-semibold">{formatCrores(totalPayable)}</span></p>
//                     <p className="text-3xl font-bold mt-2">EMI : <span className="text-green-600">₹ {formatLakhs(emi)}</span></p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// This is the updated component for your app/properties/[id]/page.tsx file

function EMICalculatorTabContent({ property }: { property: Property }) {
  // State for user inputs
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(0);
  const [loanAmount, setLoanAmount] = useState(59000000); // Default to 5.9 Cr
  const [loanTenure, setLoanTenure] = useState(20); // 20 years
  const [interestRate, setInterestRate] = useState(8.5); // 8.5%
  const [isChartVisible, setIsChartVisible] = useState(true);

  // Helper function to parse price string like "₹ 5.9 Cr." into a number
  const parsePrice = (priceStr: string): number => {
    const parts = priceStr.split(" ");
    const value = parseFloat(parts[1]);
    const unit = parts[2];
    if (unit.toLowerCase() === "cr.") {
      return value * 10000000;
    }
    if (unit.toLowerCase() === "l") {
      return value * 100000;
    }
    return 0;
  };

  // Effect to update loan amount when a new unit is selected
  useEffect(() => {
    if (property.floorplans && property.floorplans[selectedUnitIndex]) {
      const newLoanAmount = parsePrice(
        property.floorplans[selectedUnitIndex].priceRange
      );
      setLoanAmount(newLoanAmount);
    }
  }, [selectedUnitIndex, property.floorplans]);

  // Memoized calculation for EMI details
  const { emi, totalPayable, totalInterest, principalPercent } = useMemo(() => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const n = loanTenure * 12;
    if (principal <= 0 || rate <= 0 || n <= 0)
      return {
        emi: 0,
        totalPayable: 0,
        totalInterest: 0,
        principalPercent: 100,
      };
    const emiCalc =
      (principal * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
    const totalPayableCalc = emiCalc * n;
    const totalInterestCalc = totalPayableCalc - principal;
    const principalPercentCalc = (principal / totalPayableCalc) * 100;
    return {
      emi: emiCalc,
      totalPayable: totalPayableCalc,
      totalInterest: totalInterestCalc,
      principalPercent: principalPercentCalc,
    };
  }, [loanAmount, loanTenure, interestRate]);

  const formatLakhs = (val: number) => `₹ ${(val / 100000).toFixed(1)} L`;
  const formatCrores = (val: number) => `₹ ${(val / 10000000).toFixed(1)} Cr.`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      {/* Left Column: Controls */}
      <div className="space-y-6">
        {/* Unit Selector */}
        <div>
          <label
            htmlFor="unit-select"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Select A Unit
          </label>
          <div className="relative">
            <select
              id="unit-select"
              value={selectedUnitIndex}
              onChange={(e) => setSelectedUnitIndex(Number(e.target.value))}
              className="w-full appearance-none bg-white py-3 pl-4 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
            >
              {property.floorplans.map((plan, index) => (
                <option key={index} value={index}>
                  {plan.specs.map((s) => s.text).join(" + ")}, {plan.priceRange}
                </option>
              ))}
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={20}
            />
          </div>
        </div>

        {/* Sliders */}
        <div className="space-y-8 pt-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-gray-700">
                Load Amount
              </label>
              <span className="font-bold text-green-600 text-sm">
                {formatCrores(loanAmount)}
              </span>
            </div>
            <input
              type="range"
              min="10000000"
              max="100000000"
              step="100000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1Cr</span>
              <span>2.5Cr</span>
              <span>5Cr</span>
              <span>7.5Cr</span>
              <span>10Cr</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-gray-700">
                Load Tenure
              </label>
              <span className="font-bold text-green-600 text-sm">
                {loanTenure} yrs
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="25"
              step="1"
              value={loanTenure}
              onChange={(e) => setLoanTenure(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>5 yrs</span>
              <span>10 yrs</span>
              <span>15 yrs</span>
              <span>20 yrs</span>
              <span>25 yrs</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-gray-700">
                Interest Rate
              </label>
              <span className="font-bold text-green-600 text-sm">
                {interestRate.toFixed(1)}% p.a
              </span>
            </div>
            <input
              type="range"
              min="6"
              max="12"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>6%</span>
              <span>9%</span>
              <span>12%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Chart and Details */}
      <div className="w-full">
        <button
          onClick={() => setIsChartVisible(!isChartVisible)}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="text-sm font-bold tracking-widest text-green-600">
            VIEW CHART
          </span>
          <ChevronDown
            size={20}
            className={`text-green-600 transition-transform ${
              isChartVisible ? "rotate-180" : ""
            }`}
          />
        </button>
        {isChartVisible && (
          <div className="mt-6 flex flex-col items-center">
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 rounded-full bg-gray-200"></div>
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(#10B981 ${principalPercent}%, transparent ${principalPercent}%)`,
                }}
              ></div>
              <div className="absolute inset-4 rounded-full bg-white"></div>
            </div>
            <div className="w-full mt-6 space-y-3 text-gray-700">
              <div className="flex justify-between items-center">
                <span>
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Principal:
                </span>
                <span className="font-semibold">
                  {formatCrores(loanAmount)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>
                  <span className="inline-block w-3 h-3 bg-gray-200 rounded-full mr-2"></span>
                  Interest:
                </span>
                <span className="font-semibold">
                  {formatCrores(totalInterest)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Total Payable:</span>
                <span className="font-semibold">
                  {formatCrores(totalPayable)}
                </span>
              </div>
              <div className="flex justify-between items-center pt-3 mt-3 border-t border-dashed">
                <span className="text-2xl font-bold">EMI :</span>
                <span className="text-3xl font-bold text-green-600">
                  {formatLakhs(emi)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AboutUsTabContent({ developer }: { developer: Developer }) {
  return (
    <div>
      {/* Stats Section */}
      {/* ✅ mx-auto removed to align left */}
      <div className="grid grid-cols-3 gap-8 max-w-2xl mb-12">
        <div className="text-center">
          <p className="text-5xl font-bold text-gray-800">
            {developer.totalProjects}
          </p>
          <p className="text-gray-500 mt-2">Total Projects</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-gray-800">
            {developer.ongoingProjects}
          </p>
          <p className="text-gray-500 mt-2">Ongoing Projects</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-gray-800">
            {developer.yearsOfExperience}
          </p>
          <p className="text-gray-500 mt-2">Years of Experience</p>
        </div>
      </div>

      {/* Description and Link Section */}
      {/* ✅ mx-auto removed to align left */}
      <div className="max-w-3xl">
        <p className="text-gray-600 leading-relaxed text-left">
          {developer.description}
        </p>
        <div className="mt-6 text-left">
          <a href="#" className="text-green-600 font-semibold hover:underline">
            View more by builder
          </a>
        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENT: LOCATION MAP ---
function LocationMap({ property }: { property: Property }) {
  return (
    <div className="mt-8 py-8 border-t">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Located At</h2>
      <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={property.mapImage}
          alt={`Map of ${property.name}`}
          fill
          className="object-cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-xl text-center">
          <p className="font-bold text-gray-800">{property.name}</p>
          <p className="text-sm text-gray-500">{property.location}</p>
        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENT: RELATED PROPERTIES ---
function RelatedProperties({ currentProperty }: { currentProperty: Property }) {
  // Logic to find related properties (same developer, different property)
  const related = useMemo(
    () =>
      propertiesData
        .filter(
          (p) =>
            p.developer === currentProperty.developer &&
            p.id !== currentProperty.id
        )
        .slice(0, 3), // Show up to 3 related properties
    [currentProperty]
  );

  if (related.length === 0) return null;

  return (
    <div className="mt-8 py-8 border-t">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Related Properties
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {related.map((property) => (
          <RelatedPropertyCard key={property.id} property={property} />
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="bg-white border-2 border-green-500 text-green-600 font-bold py-3 px-8 rounded-full hover:bg-green-50 transition">
          View More
        </button>
      </div>
    </div>
  );
}

// --- CARD for the Related Properties Section ---
function RelatedPropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md border border-gray-200 transition-shadow hover:shadow-xl overflow-hidden">
        <div className="relative w-full h-52">
          <Image
            src={property.images[0]}
            alt={property.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 left-3 bg-white/90 text-gray-800 text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
            {property.priceRange}
          </div>
          <div className="absolute top-3 right-3 flex gap-2">
            <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg text-purple-600 hover:bg-gray-50">
              <Car size={20} />
            </button>
            <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg text-pink-500 hover:bg-gray-50">
              <Heart size={20} />
            </button>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 truncate">
            {property.name}
          </h3>
          <p className="text-sm text-gray-500 mb-3">by {property.developer}</p>
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <MapPin size={14} className="mr-1.5 flex-shrink-0" />
            {property.location}
          </div>
          <hr className="border-dashed my-3" />
          <div className="flex justify-between items-center text-xs text-gray-700">
            {property.specs.map((spec, index) => (
              <span key={index}>{spec.text}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

function AmenitiesTabContent({
  amenities,
}: {
  amenities: Property["amenities"];
}) {
  if (!amenities || amenities.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        No amenities listed for this property.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-4">
      {amenities.map((amenity, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-3 text-center"
        >
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100/60 text-yellow-500">
            <amenity.icon size={36} strokeWidth={1.5} />
          </div>
          <p className="font-semibold text-gray-700">{amenity.name}</p>
        </div>
      ))}
    </div>
  );
}
