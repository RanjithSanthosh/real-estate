// // app/properties/[id]/PropertyDetailClient.tsx
// "use client";

// import React, { useState, useMemo, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   Property as OriginalProperty,
//   Developer,
//   propertiesData,
// } from "../../data/properties";
// import Navbar from "@/components/shared/Navbar";
// import {
//   Heart,
//   MapPin,
//   Phone,
//   Share2,
//   Printer,
//   Car,
//   ChevronDown,
// } from "lucide-react";
// import { useFavorites } from "../../context/FavoritesContext";
// import { toast } from "react-hot-toast";
// import { Icon, IconName } from "@/components/shared/IconMapper";

// // ✅ DEFINE THE NEW SERIALIZABLE TYPE
// type SerializableProperty = Omit<
//   OriginalProperty,
//   "specs" | "floorplans" | "amenities"
// > & {
//   specs: { icon: string; text: string }[];
//   floorplans: {
//     name: string;
//     priceRange: string;
//     image: string;
//     specs: { icon: string; text: string }[];
//   }[];
//   amenities: {
//     name: string;
//     icon: string;
//   }[];
// };

// interface PropertyDetailClientProps {
//   property: SerializableProperty;
//   developer?: Developer;
// }

// export default function PropertyDetailClient({
//   property,
//   developer,
// }: PropertyDetailClientProps) {
//   return (
//     <div className="bg-white font-sans">
//       <Navbar />
//       <main className="container mx-auto max-w-7xl px-4 py-12">
//         <PropertyHeader property={property} developer={developer} />
//         <PropertyTabs property={property} developer={developer} />
//         <LocationMap property={property} />
//         <RelatedProperties currentProperty={property} />
//       </main>
//     </div>
//   );
// }

// // --- SUB-COMPONENT: PROPERTY HEADER ---
// function PropertyHeader({
//   property,
//   developer,
// }: {
//   property: SerializableProperty;
//   developer?: Developer;
// }) {
//   const [activeImage, setActiveImage] = useState(property.images[0]);
//   const { addFavorite, removeFavorite, isFavorite } = useFavorites();
//   const isFav = isFavorite(property.id);

//   const handleShare = async () => {
//     const { name, developer, location, priceRange, specs } = property;
//     const shareDescription = `🏠 ${name} in ${location} | ${priceRange} | ${specs
//       .map((s) => s.text)
//       .join(" • ")}`;
//     const shareUrl = window.location.href;
//     const fullText = `${shareDescription}\n\n${shareUrl}`;

//     // Try to prepare the active image
//     let imageFile: File | null = null;
//     try {
//       imageFile = await prepareImageForSharing(activeImage, name);
//     } catch (err) {
//       console.warn("Image preparation failed, proceeding without image.");
//     }

//     // Check if Web Share API supports files
//     const canShareFiles =
//       imageFile && navigator.canShare?.({ files: [imageFile] });

//     if (navigator.share) {
//       try {
//         if (canShareFiles) {
//           // Share with image (Android Chrome)
//           await navigator.share({
//             title: `${name} - ${developer}`,
//             text: shareDescription,
//             url: shareUrl,
//             files: [imageFile],
//           });
//           return;
//         } else {
//           // Share without image (iOS, desktop, etc.)
//           await navigator.share({
//             title: `${name} - ${developer}`,
//             text: fullText,
//           });
//           return;
//         }
//       } catch (err) {
//         if ((err as Error).name === "AbortError") return;
//         console.warn("Web Share API failed:", err);
//       }
//     }

//     // Final fallback: clipboard
//     await handleClipboardFallback({
//       title: `${name} - ${developer}`,
//       text: shareDescription,
//       url: shareUrl,
//     });
//   };

//   const prepareImageForSharing = async (
//     imageUrl: string,
//     propertyName: string
//   ): Promise<File | null> => {
//     try {
//       // Ensure we're not trying to share a relative path
//       const absoluteUrl = new URL(imageUrl, window.location.origin).href;

//       const response = await fetch(absoluteUrl);
//       if (!response.ok)
//         throw new Error(`HTTP ${response.status}: Failed to fetch image`);

//       const blob = await response.blob();
//       const fileName = `${propertyName.replace(/\s+/g, "_")}_property.jpg`;
//       const file = new File([blob], fileName, {
//         type: blob.type || "image/jpeg",
//       });

//       return file;
//     } catch (error) {
//       console.warn("Could not prepare image for sharing:", error);
//       return null;
//     }
//   };

//   const handleClipboardFallback = async (shareData: {
//     title: string;
//     text: string;
//     url: string;
//   }) => {
//     const clipboardText = `${shareData.title}\n${shareData.text}\n\n🔗 ${shareData.url}`;
//     try {
//       await navigator.clipboard.writeText(clipboardText);
//       toast.success("📋 Link copied! Paste to share with preview.", {
//         duration: 4000,
//         icon: "✅",
//         style: {
//           background: "#10B981",
//           color: "white",
//           fontSize: "14px",
//           fontWeight: "500",
//         },
//       });
//     } catch (err) {
//       console.error("Clipboard failed:", err);
//       alert(`Copy this link:\n${shareData.url}`);
//     }
//   };

//   const handleShareWithFallbacks = async () => {
//     toast.loading("Preparing to share...", { id: "share" });
//     try {
//       await handleShare();
//     } catch (error) {
//       console.error("Unexpected share error:", error);
//       await handleClipboardFallback({
//         title: `${property.name} - ${property.developer}`,
//         text: `Check out ${property.name} in ${property.location}`,
//         url: window.location.href,
//       });
//     } finally {
//       toast.dismiss("share");
//     }
//   };

//   // const handleClipboardFallback = async (shareData: {
//   //   title: string;
//   //   text: string;
//   //   url: string;
//   // }) => {
//   //   try {
//   //     // Create a more comprehensive clipboard content
//   //     const clipboardText = `
//   // ${shareData.title}

//   // ${shareData.text}

//   // 🔗 ${shareData.url}

//   // 🏠 View this amazing property with detailed images and specifications!
//   //     `.trim();

//   //     await navigator.clipboard.writeText(clipboardText);

//   //     toast.success("📋 Property details copied to clipboard!", {
//   //       duration: 4000,
//   //       style: {
//   //         background: "#10B981",
//   //         color: "white",
//   //         fontSize: "14px",
//   //         fontWeight: "500",
//   //       },
//   //       icon: "✅",
//   //     });
//   //   } catch (err) {
//   //     console.error("Clipboard fallback failed:", err);

//   //     // Ultimate fallback - show share data in a user-friendly way
//   //     const shareContent = `
//   // Share this property:

//   // ${shareData.title}

//   // ${shareData.text}

//   // ${shareData.url}
//   //     `.trim();

//   //     alert(shareContent);
//   //   }
//   // };

//   const handleFavoriteToggle = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (isFav) {
//       removeFavorite(property.id);
//       toast("Property removed from favorites", {
//         icon: "💔",
//       });
//     } else {
//       addFavorite(property.id);
//       toast.success("Property added to favorites", {
//         style: {
//           background: "#28a745",
//           color: "#ffffff",
//         },
//         iconTheme: {
//           primary: "#ffffff",
//           secondary: "#28a745",
//         },
//       });
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
//       {/* Left Column: Image Gallery */}
//       <div className="lg:col-span-3">
//         <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg mb-4">
//           <Image
//             src={activeImage}
//             alt={property.name}
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute top-4 right-4 flex space-x-2">
//             <motion.button
//               onClick={handleShareWithFallbacks}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition shadow-md"
//               title="Share property details"
//             >
//               <Share2 size={20} />
//             </motion.button>
//             <motion.button
//               onClick={handleFavoriteToggle}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition shadow-md"
//             >
//               <Heart
//                 size={20}
//                 className={isFav ? "text-red-500" : "text-gray-700"}
//                 fill={isFav ? "currentColor" : "none"}
//               />
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition shadow-md"
//               onClick={() => window.print()}
//               title="Print property details"
//             >
//               <Printer size={20} />
//             </motion.button>
//           </div>
//         </div>
//         <div className="grid grid-cols-4 gap-4">
//           {property.images.map((img, index) => (
//             <div
//               key={index}
//               className={`relative h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${
//                 activeImage === img ? "border-green-500" : "border-transparent"
//               }`}
//               onClick={() => setActiveImage(img)}
//             >
//               <Image
//                 src={img}
//                 alt={`${property.name} thumbnail ${index + 1}`}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Column: Property Details */}
//       <div className="lg:col-span-2">
//         <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
//           {property.name}
//         </h1>
//         <p className="text-md text-gray-500 mb-3">
//           by{" "}
//           <a href="#" className="text-yellow-600 font-semibold">
//             {property.developer}
//           </a>
//         </p>
//         <div className="flex items-center text-gray-600 mb-4">
//           <MapPin size={16} className="mr-2 text-blue-500" />
//           <span>{property.location}</span>
//         </div>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {property.specs.map((spec, i) => (
//             <div
//               key={i}
//               className="bg-green-50 text-green-800 text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2 border border-green-200"
//             >
//               <Icon name={spec.icon as IconName} size={16} />
//               {spec.text}
//             </div>
//           ))}
//         </div>
//         <div className="bg-gray-50 rounded-lg p-4 my-4">
//           <p className="text-gray-600 text-sm">Price</p>
//           <p className="text-3xl font-bold text-green-600">
//             {property.priceRange}
//           </p>
//         </div>
//         <div className="flex flex-col sm:flex-row gap-4 mt-6">
//           <button className="flex-1 bg-white text-green-600 border-2 border-green-500 font-bold py-3 px-6 rounded-3xl hover:bg-green-50 transition w-full sm:w-auto">
//             Download Brochure
//           </button>
//           <button className="flex-1 bg-green-500 text-white font-bold py-3 px-6 rounded-3xl hover:bg-green-600 transition flex items-center justify-center gap-2 w-full sm:w-auto">
//             <Phone size={18} /> Call Us
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // --- SUB-COMPONENT: PROPERTY TABS ---
// function PropertyTabs({
//   property,
//   developer,
// }: {
//   property: SerializableProperty;
//   developer?: Developer;
// }) {
//   const [activeTab, setActiveTab] = useState("Overview");

//   return (
//     <div className="mt-16">
//       <div className="border-b border-gray-200">
//         <nav
//           className="-mb-px flex space-x-8 overflow-x-auto"
//           aria-label="Tabs"
//         >
//           {[
//             "Overview",
//             "Salient Features",
//             "Specifications",
//             "Floorplans",
//             "Gallery",
//             "EMI Calculator",
//             "About Us",
//             "Amenities",
//           ].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`flex-shrink-0 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
//                 activeTab === tab
//                   ? "border-green-500 text-green-600"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </nav>
//       </div>
//       <div className="py-8">
//         {activeTab === "Overview" && <OverviewTabContent property={property} />}
//         {activeTab === "Salient Features" && (
//           <SalientFeaturesTabContent features={property.salientFeatures} />
//         )}
//         {activeTab === "Specifications" && (
//           <SpecificationsTabContent specs={property.specifications} />
//         )}
//         {activeTab === "Floorplans" && (
//           <FloorplansTabContent
//             floorplans={property.floorplans}
//             developerName={developer?.name || "Unknown Developer"}
//             location={property.location}
//           />
//         )}
//         {activeTab === "Gallery" && (
//           <GalleryTabContent
//             images={property.images}
//             propertyName={property.name}
//           />
//         )}
//         {activeTab === "EMI Calculator" && (
//           <EMICalculatorTabContent property={property} />
//         )}
//         {activeTab === "About Us" && developer && (
//           <AboutUsTabContent developer={developer} />
//         )}
//         {activeTab === "Amenities" && (
//           <AmenitiesTabContent amenities={property.amenities} />
//         )}
//       </div>
//     </div>
//   );
// }

// // --- Helper Component for list items with checkmarks ---
// function FeatureListItem({ text }: { text: string }) {
//   return (
//     <div className="flex items-center gap-3 text-gray-700">
//       <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 text-green-600">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           className="w-4 h-4"
//         >
//           <path
//             fillRule="evenodd"
//             d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </div>
//       <span>{text}</span>
//     </div>
//   );
// }

// // --- Component for Overview Tab Content ---
// function OverviewTabContent({ property }: { property: SerializableProperty }) {
//   return (
//     <div>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
//         <div>
//           <p className="text-gray-500 mb-1">Zoning</p>
//           <p className="font-semibold text-gray-800">
//             {property.overview.zoning}
//           </p>
//         </div>
//         <div>
//           <p className="text-gray-500 mb-1">Property Type</p>
//           <p className="font-semibold text-gray-800">
//             {property.overview.propertyType}
//           </p>
//         </div>
//         <div>
//           <p className="text-gray-500 mb-1">Status</p>
//           <p className="font-semibold text-gray-800">
//             {property.overview.status}
//           </p>
//         </div>
//         <div>
//           <p className="text-gray-500 mb-1">Land Extent</p>
//           <p className="font-semibold text-gray-800">
//             {property.overview.landExtent}
//           </p>
//         </div>
//         <div>
//           <p className="text-gray-500 mb-1">Price per Sq ft</p>
//           <p className="font-semibold text-gray-800">
//             {property.overview.pricePerSqFt}
//           </p>
//         </div>
//         <div>
//           <p className="text-gray-500 mb-1">Total Units</p>
//           <p className="font-semibold text-gray-800">
//             {property.overview.totalUnits}
//           </p>
//         </div>
//         <div className="col-span-2">
//           <p className="text-gray-500 mb-1">Project RERA number</p>
//           <p className="font-semibold text-gray-800">
//             {property.overview.projectRera}
//           </p>
//         </div>
//       </div>
//       <p className="text-gray-600 leading-relaxed mt-8">
//         {property.description}
//       </p>
//     </div>
//   );
// }

// // --- Component for Salient Features Tab Content ---
// function SalientFeaturesTabContent({ features }: { features: string[] }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
//       {features.map((feature, index) => (
//         <FeatureListItem key={index} text={feature} />
//       ))}
//     </div>
//   );
// }

// // --- Component for Specifications Tab Content ---
// function SpecificationsTabContent({
//   specs,
// }: {
//   specs: SerializableProperty["specifications"];
// }) {
//   const [activeSpecTab, setActiveSpecTab] = useState("Flooring");
//   const specCategories = Object.keys(specs);

//   return (
//     <div>
//       <div className="flex items-center gap-4 border-b pb-2 mb-6">
//         {specCategories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setActiveSpecTab(category)}
//             className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
//               activeSpecTab === category
//                 ? "bg-green-100 text-green-700"
//                 : "text-gray-600 hover:bg-gray-100"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
//         {(specs[activeSpecTab as keyof typeof specs] || []).map(
//           (spec, index) => (
//             <FeatureListItem key={index} text={spec} />
//           )
//         )}
//       </div>
//     </div>
//   );
// }

// // --- Floorplans Components ---
// function FloorplansTabContent({
//   floorplans,
//   developerName,
//   location,
// }: {
//   floorplans: SerializableProperty["floorplans"];
//   developerName: string;
//   location: string;
// }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//       {floorplans.map((plan, index) => (
//         <FloorplanCard
//           key={index}
//           plan={plan}
//           developerName={developerName}
//           location={location}
//         />
//       ))}
//     </div>
//   );
// }

// function FloorplanCard({
//   plan,
//   developerName,
//   location,
// }: {
//   plan: SerializableProperty["floorplans"][0];
//   developerName: string;
//   location: string;
// }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col">
//       <div className="relative w-full h-56 flex-shrink-0">
//         <Image src={plan.image} alt={plan.name} fill className="object-cover" />
//         <div className="absolute top-4 left-4 bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-full shadow-md">
//           {plan.priceRange}
//         </div>
//         <div className="absolute top-4 right-4 flex gap-2">
//           <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md text-purple-600 hover:bg-white transition">
//             <Car size={20} />
//           </button>
//           <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md text-pink-500 hover:bg-white transition">
//             <Heart size={20} />
//           </button>
//         </div>
//       </div>
//       <div className="p-6 flex flex-col flex-grow">
//         <div className="flex-grow">
//           <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
//             {plan.name}
//           </h3>
//           <p className="text-sm text-gray-500 mt-1">
//             by{" "}
//             <a href="#" className="text-yellow-600 font-semibold underline">
//               {developerName}
//             </a>
//           </p>
//           <div className="flex items-center text-gray-500 text-sm mt-3">
//             <MapPin size={16} className="mr-2 text-blue-500 flex-shrink-0" />
//             <span>{location}</span>
//           </div>
//           <hr className="border-dashed my-4" />
//           <div>
//             {(() => {
//               const initialSpecs = plan.specs.slice(0, 2);
//               const lastSpec = plan.specs[2];
//               return (
//                 <>
//                   <div className="flex items-center gap-4">
//                     {initialSpecs.map((spec, i) => (
//                       <div
//                         key={i}
//                         className="bg-green-50 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2 border border-green-200"
//                       >
//                         <Icon name={spec.icon as IconName} size={16} />
//                         <span>{spec.text}</span>
//                       </div>
//                     ))}
//                   </div>
//                   {lastSpec && (
//                     <div className="mt-3">
//                       <div className="bg-green-50 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2 border border-green-200 w-fit">
//                         <Icon name={lastSpec.icon as IconName} size={16} />
//                         <span>{lastSpec.text}</span>
//                       </div>
//                     </div>
//                   )}
//                 </>
//               );
//             })()}
//           </div>
//         </div>
//         <div className="flex items-center gap-3 mt-6 flex-shrink-0">
//           <button className="w-14 h-14 flex-shrink-0 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="28"
//               height="28"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//             >
//               <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z" />
//             </svg>
//           </button>
//           <button className="w-full bg-green-500 text-white py-4 px-6 rounded-full font-bold text-lg hover:bg-green-600 transition">
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // --- Gallery Tab ---
// function GalleryTabContent({
//   images,
//   propertyName,
// }: {
//   images: string[];
//   propertyName: string;
// }) {
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//       {images.map((img, index) => (
//         <div
//           key={index}
//           className="relative w-full h-48 rounded-lg overflow-hidden shadow-md"
//         >
//           <Image
//             src={img}
//             alt={`${propertyName} gallery image ${index + 1}`}
//             fill
//             className="object-cover"
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// // --- EMI Calculator Tab ---
// function EMICalculatorTabContent({
//   property,
// }: {
//   property: SerializableProperty;
// }) {
//   const [selectedUnitIndex, setSelectedUnitIndex] = useState(0);
//   const [loanAmount, setLoanAmount] = useState(59000000);
//   const [loanTenure, setLoanTenure] = useState(20);
//   const [interestRate, setInterestRate] = useState(8.5);
//   const [isChartVisible, setIsChartVisible] = useState(true);

//   const parsePrice = (priceStr: string): number => {
//     const parts = priceStr.split(" ");
//     const value = parseFloat(parts[1]);
//     const unit = parts[2]?.toLowerCase();
//     if (unit === "cr.") return value * 10000000;
//     if (unit === "l") return value * 100000;
//     return 0;
//   };

//   useEffect(() => {
//     if (property.floorplans && property.floorplans[selectedUnitIndex]) {
//       const newLoanAmount = parsePrice(
//         property.floorplans[selectedUnitIndex].priceRange
//       );
//       setLoanAmount(newLoanAmount);
//     }
//   }, [selectedUnitIndex, property.floorplans]);

//   const { emi, totalPayable, totalInterest, principalPercent } = useMemo(() => {
//     const principal = loanAmount;
//     const rate = interestRate / 12 / 100;
//     const n = loanTenure * 12;
//     if (principal <= 0 || rate <= 0 || n <= 0)
//       return {
//         emi: 0,
//         totalPayable: 0,
//         totalInterest: 0,
//         principalPercent: 100,
//       };
//     const emiCalc =
//       (principal * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
//     const totalPayableCalc = emiCalc * n;
//     const totalInterestCalc = totalPayableCalc - principal;
//     const principalPercentCalc = (principal / totalPayableCalc) * 100;
//     return {
//       emi: emiCalc,
//       totalPayable: totalPayableCalc,
//       totalInterest: totalInterestCalc,
//       principalPercent: principalPercentCalc,
//     };
//   }, [loanAmount, loanTenure, interestRate]);

//   const formatLakhs = (val: number) => `₹ ${(val / 100000).toFixed(1)} L`;
//   const formatCrores = (val: number) => `₹ ${(val / 10000000).toFixed(1)} Cr.`;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//       <div className="space-y-6">
//         <div>
//           <label
//             htmlFor="unit-select"
//             className="block text-sm font-medium text-gray-700 mb-2"
//           >
//             Select A Unit
//           </label>
//           <div className="relative">
//             <select
//               id="unit-select"
//               value={selectedUnitIndex}
//               onChange={(e) => setSelectedUnitIndex(Number(e.target.value))}
//               className="w-full appearance-none bg-white py-3 pl-4 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
//             >
//               {property.floorplans.map((plan, index) => (
//                 <option key={index} value={index}>
//                   {plan.specs.map((s) => s.text).join(" + ")}, {plan.priceRange}
//                 </option>
//               ))}
//             </select>
//             <ChevronDown
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
//               size={20}
//             />
//           </div>
//         </div>
//         <div className="space-y-8 pt-4">
//           <div>
//             <div className="flex justify-between items-center mb-1">
//               <label className="text-sm font-medium text-gray-700">
//                 Loan Amount
//               </label>
//               <span className="font-bold text-green-600 text-sm">
//                 {formatCrores(loanAmount)}
//               </span>
//             </div>
//             <input
//               type="range"
//               min="10000000"
//               max="100000000"
//               step="100000"
//               value={loanAmount}
//               onChange={(e) => setLoanAmount(Number(e.target.value))}
//               className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
//             />
//             <div className="flex justify-between text-xs text-gray-500 mt-1">
//               <span>1Cr</span>
//               <span>2.5Cr</span>
//               <span>5Cr</span>
//               <span>7.5Cr</span>
//               <span>10Cr</span>
//             </div>
//           </div>
//           <div>
//             <div className="flex justify-between items-center mb-1">
//               <label className="text-sm font-medium text-gray-700">
//                 Loan Tenure
//               </label>
//               <span className="font-bold text-green-600 text-sm">
//                 {loanTenure} yrs
//               </span>
//             </div>
//             <input
//               type="range"
//               min="5"
//               max="25"
//               step="1"
//               value={loanTenure}
//               onChange={(e) => setLoanTenure(Number(e.target.value))}
//               className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
//             />
//             <div className="flex justify-between text-xs text-gray-500 mt-1">
//               <span>5 yrs</span>
//               <span>10 yrs</span>
//               <span>15 yrs</span>
//               <span>20 yrs</span>
//               <span>25 yrs</span>
//             </div>
//           </div>
//           <div>
//             <div className="flex justify-between items-center mb-1">
//               <label className="text-sm font-medium text-gray-700">
//                 Interest Rate
//               </label>
//               <span className="font-bold text-green-600 text-sm">
//                 {interestRate.toFixed(1)}% p.a
//               </span>
//             </div>
//             <input
//               type="range"
//               min="6"
//               max="12"
//               step="0.1"
//               value={interestRate}
//               onChange={(e) => setInterestRate(Number(e.target.value))}
//               className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
//             />
//             <div className="flex justify-between text-xs text-gray-500 mt-1">
//               <span>6%</span>
//               <span>9%</span>
//               <span>12%</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full">
//         <button
//           onClick={() => setIsChartVisible(!isChartVisible)}
//           className="flex items-center justify-between w-full text-left"
//         >
//           <span className="text-sm font-bold tracking-widest text-green-600">
//             VIEW CHART
//           </span>
//           <ChevronDown
//             size={20}
//             className={`text-green-600 transition-transform ${
//               isChartVisible ? "rotate-180" : ""
//             }`}
//           />
//         </button>
//         {isChartVisible && (
//           <div className="mt-6 flex flex-col items-center">
//             <div className="relative w-40 h-40">
//               <div className="absolute inset-0 rounded-full bg-gray-200"></div>
//               <div
//                 className="absolute inset-0 rounded-full"
//                 style={{
//                   background: `conic-gradient(#10B981 ${principalPercent}%, transparent ${principalPercent}%)`,
//                 }}
//               ></div>
//               <div className="absolute inset-4 rounded-full bg-white"></div>
//             </div>
//             <div className="w-full mt-6 space-y-3 text-gray-700">
//               <div className="flex justify-between items-center">
//                 <span>
//                   <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
//                   Principal:
//                 </span>
//                 <span className="font-semibold">
//                   {formatCrores(loanAmount)}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span>
//                   <span className="inline-block w-3 h-3 bg-gray-200 rounded-full mr-2"></span>
//                   Interest:
//                 </span>
//                 <span className="font-semibold">
//                   {formatCrores(totalInterest)}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span>Total Payable:</span>
//                 <span className="font-semibold">
//                   {formatCrores(totalPayable)}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center pt-3 mt-3 border-t border-dashed">
//                 <span className="text-2xl font-bold">EMI :</span>
//                 <span className="text-3xl font-bold text-green-600">
//                   {formatLakhs(emi)}
//                 </span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // --- About Us Tab ---
// function AboutUsTabContent({ developer }: { developer: Developer }) {
//   return (
//     <div>
//       <div className="grid grid-cols-3 gap-8 max-w-2xl mb-12">
//         <div className="text-center">
//           <p className="text-5xl font-bold text-gray-800">
//             {developer.totalProjects}
//           </p>
//           <p className="text-gray-500 mt-2">Total Projects</p>
//         </div>
//         <div className="text-center">
//           <p className="text-5xl font-bold text-gray-800">
//             {developer.ongoingProjects}
//           </p>
//           <p className="text-gray-500 mt-2">Ongoing Projects</p>
//         </div>
//         <div className="text-center">
//           <p className="text-5xl font-bold text-gray-800">
//             {developer.yearsOfExperience}
//           </p>
//           <p className="text-gray-500 mt-2">Years of Experience</p>
//         </div>
//       </div>
//       <div className="max-w-3xl">
//         <p className="text-gray-600 leading-relaxed text-left">
//           {developer.description}
//         </p>
//         <div className="mt-6 text-left">
//           <a href="#" className="text-green-600 font-semibold hover:underline">
//             View more by builder
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// // --- Location Map ---
// function LocationMap({ property }: { property: SerializableProperty }) {
//   return (
//     <div className="mt-8 py-8 border-t">
//       <h2 className="text-3xl font-bold text-gray-900 mb-6">Located At</h2>
//       <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
//         <Image
//           src={property.mapImage}
//           alt={`Map of ${property.name}`}
//           fill
//           className="object-cover"
//         />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-xl text-center">
//           <p className="font-bold text-gray-800">{property.name}</p>
//           <p className="text-sm text-gray-500">{property.location}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// // --- Related Properties ---
// function RelatedProperties({
//   currentProperty,
// }: {
//   currentProperty: SerializableProperty;
// }) {
//   const related = useMemo(
//     () =>
//       propertiesData
//         .filter(
//           (p) =>
//             p.developer === currentProperty.developer &&
//             p.id !== currentProperty.id
//         )
//         .slice(0, 3),
//     [currentProperty]
//   );

//   if (related.length === 0) return null;

//   return (
//     <div className="mt-8 py-8 border-t">
//       <h2 className="text-3xl font-bold text-gray-900 mb-6">
//         Related Properties
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {related.map((property) => (
//           <RelatedPropertyCard key={property.id} property={property} />
//         ))}
//       </div>
//       <div className="text-center mt-12">
//         <button className="bg-white border-2 border-green-500 text-green-600 font-bold py-3 px-8 rounded-full hover:bg-green-50 transition">
//           View More
//         </button>
//       </div>
//     </div>
//   );
// }

// function RelatedPropertyCard({ property }: { property: OriginalProperty }) {
//   return (
//     <Link href={`/properties/${property.id}`} className="block">
//       <div className="bg-white rounded-lg shadow-md border border-gray-200 transition-shadow hover:shadow-xl overflow-hidden">
//         <div className="relative w-full h-52">
//           <Image
//             src={property.images[0]}
//             alt={property.name}
//             fill
//             className="object-cover"
//           />
//           <div className="absolute top-3 left-3 bg-white/90 text-gray-800 text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
//             {property.priceRange}
//           </div>
//           <div className="absolute top-3 right-3 flex gap-2">
//             <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg text-purple-600 hover:bg-gray-50">
//               <Car size={20} />
//             </button>
//             <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg text-pink-500 hover:bg-gray-50">
//               <Heart size={20} />
//             </button>
//           </div>
//         </div>
//         <div className="p-5">
//           <h3 className="text-lg font-bold text-gray-900 truncate">
//             {property.name}
//           </h3>
//           <p className="text-sm text-gray-500 mb-3">by {property.developer}</p>
//           <div className="flex items-center text-gray-500 text-sm mb-4">
//             <MapPin size={14} className="mr-1.5 flex-shrink-0" />
//             {property.location}
//           </div>
//           <hr className="border-dashed my-3" />
//           <div className="flex justify-between items-center text-xs text-gray-700">
//             {property.specs.map((spec, index) => (
//               <div key={index} className="flex items-center gap-1">
//                 <Icon name={spec.icon.name as IconName} size={14} />
//                 <span>{spec.text}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }

// // --- Amenities Tab ---
// function AmenitiesTabContent({
//   amenities,
// }: {
//   amenities: SerializableProperty["amenities"];
// }) {
//   if (!amenities || amenities.length === 0) {
//     return (
//       <div className="text-center text-gray-500 py-10">
//         No amenities listed for this property.
//       </div>
//     );
//   }
//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-4">
//       {amenities.map((amenity, index) => (
//         <div
//           key={index}
//           className="flex flex-col items-center gap-3 text-center"
//         >
//           <div className="flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100/60 text-yellow-500">
//             <Icon name={amenity.icon as IconName} size={36} strokeWidth={1.5} />
//           </div>
//           <p className="font-semibold text-gray-700">{amenity.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// }





// // app/properties/[id]/PropertyDetailClient.tsx
// "use client";

// import React, { useState, useMemo, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   Property as OriginalProperty,
//   Developer,
//   propertiesData,
// } from "../../data/properties";
// import Navbar from "@/components/shared/Navbar";
// import {
//   Heart,
//   MapPin,
//   Phone,
//   Share2,
//   Printer,
//   Car,
//   ChevronDown,
//   X, // New icon
//   Copy, // New icon
// } from "lucide-react";
// // Import share buttons from the new library
// import {
//   WhatsappShareButton,
//   FacebookShareButton,
//   TwitterShareButton,
//   WhatsappIcon,
//   FacebookIcon,
//   TwitterIcon,
// } from "react-share";
// import { useFavorites } from "../../context/FavoritesContext";
// import { toast } from "react-hot-toast";
// import { Icon, IconName } from "@/components/shared/IconMapper";

// type SerializableProperty = Omit<
//   OriginalProperty,
//   "specs" | "floorplans" | "amenities"
// > & {
//   specs: { icon: string; text: string }[];
//   floorplans: {
//     name: string;
//     priceRange: string;
//     image: string;
//     specs: { icon: string; text: string }[];
//   }[];
//   amenities: {
//     name: string;
//     icon: string;
//   }[];
// };

// interface PropertyDetailClientProps {
//   property: SerializableProperty;
//   developer?: Developer;
// }

// export default function PropertyDetailClient({
//   property,
//   developer,
// }: PropertyDetailClientProps) {
//   return (
//     <div className="bg-white font-sans">
//       <Navbar />
//       <main className="container mx-auto max-w-7xl px-4 py-12">
//         <PropertyHeader property={property} developer={developer} />
//         <PropertyTabs property={property} developer={developer} />
//         <LocationMap property={property} />
//         <RelatedProperties currentProperty={property} />
//       </main>
//     </div>
//   );
// }

// // --- SUB-COMPONENT: PROPERTY HEADER (UPDATED) ---
// function PropertyHeader({
//   property,
//   developer,
// }: {
//   property: SerializableProperty;
//   developer?: Developer;
// }) {
//   const [activeImage, setActiveImage] = useState(property.images[0]);
//   const [isShareModalOpen, setIsShareModalOpen] = useState(false); // State for the share modal
//   const { addFavorite, removeFavorite, isFavorite } = useFavorites();
//   const isFav = isFavorite(property.id);

//   const shareUrl = typeof window !== "undefined" ? window.location.href : "";
//   const shareTitle = `Check out this property: ${property.name} by ${property.developer}`;
//   const shareDescription = `🏠 Explore ${property.name} in ${property.location}. Price: ${property.priceRange}.`;

//   // Simplified and improved share logic
//   const handleShare = async () => {
//     toast.loading("Preparing share...", { id: "shareToast" });

//     // The metadata in page.tsx handles the preview, so we just need to share the URL.
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: shareTitle,
//           text: shareDescription,
//           url: shareUrl,
//         });
//         toast.success("Shared successfully!", { id: "shareToast" });
//       } catch (err) {
//         if ((err as Error).name !== "AbortError") {
//           toast.error("Could not share.", { id: "shareToast" });
//         } else {
//           toast.dismiss("shareToast");
//         }
//       }
//     } else {
//       // Fallback for desktop: open the share modal
//       setIsShareModalOpen(true);
//       toast.dismiss("shareToast");
//     }
//   };


//   const handleFavoriteToggle = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (isFav) {
//       removeFavorite(property.id);
//       toast("Property removed from favorites", {
//         icon: "💔",
//       });
//     } else {
//       addFavorite(property.id);
//       toast.success("Property added to favorites", {
//         style: {
//           background: "#28a745",
//           color: "#ffffff",
//         },
//         iconTheme: {
//           primary: "#ffffff",
//           secondary: "#28a745",
//         },
//       });
//     }
//   };

//   return (
//     <> {/* Added React Fragment to wrap component and modal */}
//       {/* --- SHARE MODAL (for desktop fallback) --- */}
//       {isShareModalOpen && (
//         <ShareModal
//           url={shareUrl}
//           title={shareTitle}
//           onClose={() => setIsShareModalOpen(false)}
//         />
//       )}

//       <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
//         {/* Left Column: Image Gallery */}
//         <div className="lg:col-span-3">
//           <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg mb-4">
//             <Image
//               src={activeImage}
//               alt={property.name}
//               fill
//               className="object-cover"
//               priority
//             />
//             <div className="absolute top-4 right-4 flex space-x-2">
//               <motion.button
//                 onClick={handleShare} // Use the updated handleShare function
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition shadow-md"
//                 title="Share property details"
//               >
//                 <Share2 size={20} />
//               </motion.button>
//               <motion.button
//                 onClick={handleFavoriteToggle}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition shadow-md"
//               >
//                 <Heart
//                   size={20}
//                   className={isFav ? "text-red-500" : "text-gray-700"}
//                   fill={isFav ? "currentColor" : "none"}
//                 />
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition shadow-md"
//                 onClick={() => window.print()}
//                 title="Print property details"
//               >
//                 <Printer size={20} />
//               </motion.button>
//             </div>
//           </div>
//           <div className="grid grid-cols-4 gap-4">
//             {property.images.map((img, index) => (
//               <div
//                 key={index}
//                 className={`relative h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${
//                   activeImage === img ? "border-green-500" : "border-transparent"
//                 }`}
//                 onClick={() => setActiveImage(img)}
//               >
//                 <Image
//                   src={img}
//                   alt={`${property.name} thumbnail ${index + 1}`}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Column: Property Details */}
//         <div className="lg:col-span-2">
//           <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
//             {property.name}
//           </h1>
//           <p className="text-md text-gray-500 mb-3">
//             by{" "}
//             <a href="#" className="text-yellow-600 font-semibold">
//               {property.developer}
//             </a>
//           </p>
//           <div className="flex items-center text-gray-600 mb-4">
//             <MapPin size={16} className="mr-2 text-blue-500" />
//             <span>{property.location}</span>
//           </div>
//           <div className="flex flex-wrap gap-2 mb-4">
//             {property.specs.map((spec, i) => (
//               <div
//                 key={i}
//                 className="bg-green-50 text-green-800 text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2 border border-green-200"
//               >
//                 <Icon name={spec.icon as IconName} size={16} />
//                 {spec.text}
//               </div>
//             ))}
//           </div>
//           <div className="bg-gray-50 rounded-lg p-4 my-4">
//             <p className="text-gray-600 text-sm">Price</p>
//             <p className="text-3xl font-bold text-green-600">
//               {property.priceRange}
//             </p>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-4 mt-6">
//             <button className="flex-1 bg-white text-green-600 border-2 border-green-500 font-bold py-3 px-6 rounded-3xl hover:bg-green-50 transition w-full sm:w-auto">
//               Download Brochure
//             </button>
//             <button className="flex-1 bg-green-500 text-white font-bold py-3 px-6 rounded-3xl hover:bg-green-600 transition flex items-center justify-center gap-2 w-full sm:w-auto">
//               <Phone size={18} /> Call Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // --- NEW SUB-COMPONENT: SHARE MODAL ---
// function ShareModal({
//   url,
//   title,
//   onClose,
// }: {
//   url: string;
//   title: string;
//   onClose: () => void;
// }) {

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(url);
//     toast.success("Link copied to clipboard!");
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.9 }}
//         className="relative bg-white w-full max-w-md rounded-2xl shadow-xl p-6"
//       >
//         <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
//           <X size={24} />
//         </button>
//         <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Share this Property</h3>
//         <p className="text-sm text-gray-500 text-center mb-6">
//           Share this link via your favorite platform.
//         </p>

//         <div className="flex justify-center gap-4 mb-6">
//           <WhatsappShareButton url={url} title={title}>
//             <WhatsappIcon size={52} round />
//           </WhatsappShareButton>
//           <FacebookShareButton url={url} quote={title}>
//             <FacebookIcon size={52} round />
//           </FacebookShareButton>
//           <TwitterShareButton url={url} title={title}>
//             <TwitterIcon size={52} round />
//           </TwitterShareButton>
//         </div>

//         <div className="flex items-center space-x-2">
//           <input
//             type="text"
//             value={url}
//             readOnly
//             className="w-full bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none"
//           />
//           <button
//             onClick={copyToClipboard}
//             className="flex-shrink-0 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-3 rounded-lg flex items-center gap-2"
//           >
//             <Copy size={16} />
//             Copy
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// // --- SUB-COMPONENT: PROPERTY TABS ---
// function PropertyTabs({
//   property,
//   developer,
// }: {
//   property: SerializableProperty;
//   developer?: Developer;
// }) {
//   const [activeTab, setActiveTab] = useState("Overview");

//   return (
//     <div className="mt-16">
//       <div className="border-b border-gray-200">
//         <nav
//           className="-mb-px flex space-x-8 overflow-x-auto"
//           aria-label="Tabs"
//         >
//           {[
//             "Overview",
//             "Salient Features",
//             "Specifications",
//             "Floorplans",
//             "Gallery",
//             "EMI Calculator",
//             "About Us",
//             "Amenities",
//           ].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`flex-shrink-0 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
//                 activeTab === tab
//                   ? "border-green-500 text-green-600"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </nav>
//       </div>
//       <div className="py-8">
//         {activeTab === "Overview" && <OverviewTabContent property={property} />}
//         {activeTab === "Salient Features" && (
//           <SalientFeaturesTabContent features={property.salientFeatures} />
//         )}
//         {activeTab === "Specifications" && (
//           <SpecificationsTabContent specs={property.specifications} />
//         )}
//         {activeTab === "Floorplans" && (
//           <FloorplansTabContent
//             floorplans={property.floorplans}
//             developerName={developer?.name || "Unknown Developer"}
//             location={property.location}
//           />
//         )}
//         {activeTab === "Gallery" && (
//           <GalleryTabContent
//             images={property.images}
//             propertyName={property.name}
//           />
//         )}
//         {activeTab === "EMI Calculator" && (
//           <EMICalculatorTabContent property={property} />
//         )}
//         {activeTab === "About Us" && developer && (
//           <AboutUsTabContent developer={developer} />
//         )}
//         {activeTab === "Amenities" && (
//           <AmenitiesTabContent amenities={property.amenities} />
//         )}
//       </div>
//     </div>
//   );
// }

// // --- Helper Component for list items with checkmarks ---
// function FeatureListItem({ text }: { text: string }) {
//   return (
//     <div className="flex items-center gap-3 text-gray-700">
//       <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 text-green-600">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           className="w-4 h-4"
//         >
//           <path
//             fillRule="evenodd"
//             d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </div>
//       <span>{text}</span>
//     </div>
//   );
// }

// // --- Component for Overview Tab Content ---
// function OverviewTabContent({ property }: { property: SerializableProperty }) {
//   return (
//     <div>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
//         <div>
//           <p className="text-gray-500 mb-1">Zoning</p>
//           <p className="font-semibold text-gray-800">
//             {property.overview.zoning}
//           </p>
//         </div>
//         <div>
//           <p className="text-gray-500 mb-1">Property Type</p>
//           <p className="font-semibold text-gray-800">
//             {property.overview.propertyType}
//           </p>
//         </div>
//         <div>
//           <p className="text-gray-500 mb-1">Status</p>
//           <p className="font-semibold text-gray-800">
//             {property.overview.status}
//           </p>
//         </div>
//         <div>
//           <p className="text-gray-500 mb-1">Land Extent</p>
//           <p className="font-semibold text-gray-800">
//             {property.overview.landExtent}
//           </p>
//         </div>
//         <div>
//           <p className="text-gray-500 mb-1">Price per Sq ft</p>
//           <p className="font-semibold text-gray-800">
//             {property.overview.pricePerSqFt}
//           </p>
//         </div>
//         <div>
//           <p className="text-gray-500 mb-1">Total Units</p>
//           <p className="font-semibold text-gray-800">
//             {property.overview.totalUnits}
//           </p>
//         </div>
//         <div className="col-span-2">
//           <p className="text-gray-500 mb-1">Project RERA number</p>
//           <p className="font-semibold text-gray-800">
//             {property.overview.projectRera}
//           </p>
//         </div>
//       </div>
//       <p className="text-gray-600 leading-relaxed mt-8">
//         {property.description}
//       </p>
//     </div>
//   );
// }

// // --- Component for Salient Features Tab Content ---
// function SalientFeaturesTabContent({ features }: { features: string[] }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
//       {features.map((feature, index) => (
//         <FeatureListItem key={index} text={feature} />
//       ))}
//     </div>
//   );
// }

// // --- Component for Specifications Tab Content ---
// function SpecificationsTabContent({
//   specs,
// }: {
//   specs: SerializableProperty["specifications"];
// }) {
//   const [activeSpecTab, setActiveSpecTab] = useState("Flooring");
//   const specCategories = Object.keys(specs);

//   return (
//     <div>
//       <div className="flex items-center gap-4 border-b pb-2 mb-6">
//         {specCategories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setActiveSpecTab(category)}
//             className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
//               activeSpecTab === category
//                 ? "bg-green-100 text-green-700"
//                 : "text-gray-600 hover:bg-gray-100"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
//         {(specs[activeSpecTab as keyof typeof specs] || []).map(
//           (spec, index) => (
//             <FeatureListItem key={index} text={spec} />
//           )
//         )}
//       </div>
//     </div>
//   );
// }

// // --- Floorplans Components ---
// function FloorplansTabContent({
//   floorplans,
//   developerName,
//   location,
// }: {
//   floorplans: SerializableProperty["floorplans"];
//   developerName: string;
//   location: string;
// }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//       {floorplans.map((plan, index) => (
//         <FloorplanCard
//           key={index}
//           plan={plan}
//           developerName={developerName}
//           location={location}
//         />
//       ))}
//     </div>
//   );
// }

// function FloorplanCard({
//   plan,
//   developerName,
//   location,
// }: {
//   plan: SerializableProperty["floorplans"][0];
//   developerName: string;
//   location: string;
// }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col">
//       <div className="relative w-full h-56 flex-shrink-0">
//         <Image src={plan.image} alt={plan.name} fill className="object-cover" />
//         <div className="absolute top-4 left-4 bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-full shadow-md">
//           {plan.priceRange}
//         </div>
//         <div className="absolute top-4 right-4 flex gap-2">
//           <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md text-purple-600 hover:bg-white transition">
//             <Car size={20} />
//           </button>
//           <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md text-pink-500 hover:bg-white transition">
//             <Heart size={20} />
//           </button>
//         </div>
//       </div>
//       <div className="p-6 flex flex-col flex-grow">
//         <div className="flex-grow">
//           <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
//             {plan.name}
//           </h3>
//           <p className="text-sm text-gray-500 mt-1">
//             by{" "}
//             <a href="#" className="text-yellow-600 font-semibold underline">
//               {developerName}
//             </a>
//           </p>
//           <div className="flex items-center text-gray-500 text-sm mt-3">
//             <MapPin size={16} className="mr-2 text-blue-500 flex-shrink-0" />
//             <span>{location}</span>
//           </div>
//           <hr className="border-dashed my-4" />
//           <div>
//             {(() => {
//               const initialSpecs = plan.specs.slice(0, 2);
//               const lastSpec = plan.specs[2];
//               return (
//                 <>
//                   <div className="flex items-center gap-4">
//                     {initialSpecs.map((spec, i) => (
//                       <div
//                         key={i}
//                         className="bg-green-50 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2 border border-green-200"
//                       >
//                         <Icon name={spec.icon as IconName} size={16} />
//                         <span>{spec.text}</span>
//                       </div>
//                     ))}
//                   </div>
//                   {lastSpec && (
//                     <div className="mt-3">
//                       <div className="bg-green-50 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2 border border-green-200 w-fit">
//                         <Icon name={lastSpec.icon as IconName} size={16} />
//                         <span>{lastSpec.text}</span>
//                       </div>
//                     </div>
//                   )}
//                 </>
//               );
//             })()}
//           </div>
//         </div>
//         <div className="flex items-center gap-3 mt-6 flex-shrink-0">
//           <button className="w-14 h-14 flex-shrink-0 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="28"
//               height="28"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//             >
//               <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z" />
//             </svg>
//           </button>
//           <button className="w-full bg-green-500 text-white py-4 px-6 rounded-full font-bold text-lg hover:bg-green-600 transition">
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // --- Gallery Tab ---
// function GalleryTabContent({
//   images,
//   propertyName,
// }: {
//   images: string[];
//   propertyName: string;
// }) {
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//       {images.map((img, index) => (
//         <div
//           key={index}
//           className="relative w-full h-48 rounded-lg overflow-hidden shadow-md"
//         >
//           <Image
//             src={img}
//             alt={`${propertyName} gallery image ${index + 1}`}
//             fill
//             className="object-cover"
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// // --- EMI Calculator Tab ---
// function EMICalculatorTabContent({
//   property,
// }: {
//   property: SerializableProperty;
// }) {
//   const [selectedUnitIndex, setSelectedUnitIndex] = useState(0);
//   const [loanAmount, setLoanAmount] = useState(59000000);
//   const [loanTenure, setLoanTenure] = useState(20);
//   const [interestRate, setInterestRate] = useState(8.5);
//   const [isChartVisible, setIsChartVisible] = useState(true);

//   const parsePrice = (priceStr: string): number => {
//     const parts = priceStr.split(" ");
//     const value = parseFloat(parts[1]);
//     const unit = parts[2]?.toLowerCase();
//     if (unit === "cr.") return value * 10000000;
//     if (unit === "l") return value * 100000;
//     return 0;
//   };

//   useEffect(() => {
//     if (property.floorplans && property.floorplans[selectedUnitIndex]) {
//       const newLoanAmount = parsePrice(
//         property.floorplans[selectedUnitIndex].priceRange
//       );
//       setLoanAmount(newLoanAmount);
//     }
//   }, [selectedUnitIndex, property.floorplans]);

//   const { emi, totalPayable, totalInterest, principalPercent } = useMemo(() => {
//     const principal = loanAmount;
//     const rate = interestRate / 12 / 100;
//     const n = loanTenure * 12;
//     if (principal <= 0 || rate <= 0 || n <= 0)
//       return {
//         emi: 0,
//         totalPayable: 0,
//         totalInterest: 0,
//         principalPercent: 100,
//       };
//     const emiCalc =
//       (principal * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
//     const totalPayableCalc = emiCalc * n;
//     const totalInterestCalc = totalPayableCalc - principal;
//     const principalPercentCalc = (principal / totalPayableCalc) * 100;
//     return {
//       emi: emiCalc,
//       totalPayable: totalPayableCalc,
//       totalInterest: totalInterestCalc,
//       principalPercent: principalPercentCalc,
//     };
//   }, [loanAmount, loanTenure, interestRate]);

//   const formatLakhs = (val: number) => `₹ ${(val / 100000).toFixed(1)} L`;
//   const formatCrores = (val: number) => `₹ ${(val / 10000000).toFixed(1)} Cr.`;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//       <div className="space-y-6">
//         <div>
//           <label
//             htmlFor="unit-select"
//             className="block text-sm font-medium text-gray-700 mb-2"
//           >
//             Select A Unit
//           </label>
//           <div className="relative">
//             <select
//               id="unit-select"
//               value={selectedUnitIndex}
//               onChange={(e) => setSelectedUnitIndex(Number(e.target.value))}
//               className="w-full appearance-none bg-white py-3 pl-4 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
//             >
//               {property.floorplans.map((plan, index) => (
//                 <option key={index} value={index}>
//                   {plan.specs.map((s) => s.text).join(" + ")}, {plan.priceRange}
//                 </option>
//               ))}
//             </select>
//             <ChevronDown
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
//               size={20}
//             />
//           </div>
//         </div>
//         <div className="space-y-8 pt-4">
//           <div>
//             <div className="flex justify-between items-center mb-1">
//               <label className="text-sm font-medium text-gray-700">
//                 Loan Amount
//               </label>
//               <span className="font-bold text-green-600 text-sm">
//                 {formatCrores(loanAmount)}
//               </span>
//             </div>
//             <input
//               type="range"
//               min="10000000"
//               max="100000000"
//               step="100000"
//               value={loanAmount}
//               onChange={(e) => setLoanAmount(Number(e.target.value))}
//               className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
//             />
//             <div className="flex justify-between text-xs text-gray-500 mt-1">
//               <span>1Cr</span>
//               <span>2.5Cr</span>
//               <span>5Cr</span>
//               <span>7.5Cr</span>
//               <span>10Cr</span>
//             </div>
//           </div>
//           <div>
//             <div className="flex justify-between items-center mb-1">
//               <label className="text-sm font-medium text-gray-700">
//                 Loan Tenure
//               </label>
//               <span className="font-bold text-green-600 text-sm">
//                 {loanTenure} yrs
//               </span>
//             </div>
//             <input
//               type="range"
//               min="5"
//               max="25"
//               step="1"
//               value={loanTenure}
//               onChange={(e) => setLoanTenure(Number(e.target.value))}
//               className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
//             />
//             <div className="flex justify-between text-xs text-gray-500 mt-1">
//               <span>5 yrs</span>
//               <span>10 yrs</span>
//               <span>15 yrs</span>
//               <span>20 yrs</span>
//               <span>25 yrs</span>
//             </div>
//           </div>
//           <div>
//             <div className="flex justify-between items-center mb-1">
//               <label className="text-sm font-medium text-gray-700">
//                 Interest Rate
//               </label>
//               <span className="font-bold text-green-600 text-sm">
//                 {interestRate.toFixed(1)}% p.a
//               </span>
//             </div>
//             <input
//               type="range"
//               min="6"
//               max="12"
//               step="0.1"
//               value={interestRate}
//               onChange={(e) => setInterestRate(Number(e.target.value))}
//               className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
//             />
//             <div className="flex justify-between text-xs text-gray-500 mt-1">
//               <span>6%</span>
//               <span>9%</span>
//               <span>12%</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full">
//         <button
//           onClick={() => setIsChartVisible(!isChartVisible)}
//           className="flex items-center justify-between w-full text-left"
//         >
//           <span className="text-sm font-bold tracking-widest text-green-600">
//             VIEW CHART
//           </span>
//           <ChevronDown
//             size={20}
//             className={`text-green-600 transition-transform ${
//               isChartVisible ? "rotate-180" : ""
//             }`}
//           />
//         </button>
//         {isChartVisible && (
//           <div className="mt-6 flex flex-col items-center">
//             <div className="relative w-40 h-40">
//               <div className="absolute inset-0 rounded-full bg-gray-200"></div>
//               <div
//                 className="absolute inset-0 rounded-full"
//                 style={{
//                   background: `conic-gradient(#10B981 ${principalPercent}%, transparent ${principalPercent}%)`,
//                 }}
//               ></div>
//               <div className="absolute inset-4 rounded-full bg-white"></div>
//             </div>
//             <div className="w-full mt-6 space-y-3 text-gray-700">
//               <div className="flex justify-between items-center">
//                 <span>
//                   <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
//                   Principal:
//                 </span>
//                 <span className="font-semibold">
//                   {formatCrores(loanAmount)}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span>
//                   <span className="inline-block w-3 h-3 bg-gray-200 rounded-full mr-2"></span>
//                   Interest:
//                 </span>
//                 <span className="font-semibold">
//                   {formatCrores(totalInterest)}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span>Total Payable:</span>
//                 <span className="font-semibold">
//                   {formatCrores(totalPayable)}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center pt-3 mt-3 border-t border-dashed">
//                 <span className="text-2xl font-bold">EMI :</span>
//                 <span className="text-3xl font-bold text-green-600">
//                   {formatLakhs(emi)}
//                 </span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // --- About Us Tab ---
// function AboutUsTabContent({ developer }: { developer: Developer }) {
//   return (
//     <div>
//       <div className="grid grid-cols-3 gap-8 max-w-2xl mb-12">
//         <div className="text-center">
//           <p className="text-5xl font-bold text-gray-800">
//             {developer.totalProjects}
//           </p>
//           <p className="text-gray-500 mt-2">Total Projects</p>
//         </div>
//         <div className="text-center">
//           <p className="text-5xl font-bold text-gray-800">
//             {developer.ongoingProjects}
//           </p>
//           <p className="text-gray-500 mt-2">Ongoing Projects</p>
//         </div>
//         <div className="text-center">
//           <p className="text-5xl font-bold text-gray-800">
//             {developer.yearsOfExperience}
//           </p>
//           <p className="text-gray-500 mt-2">Years of Experience</p>
//         </div>
//       </div>
//       <div className="max-w-3xl">
//         <p className="text-gray-600 leading-relaxed text-left">
//           {developer.description}
//         </p>
//         <div className="mt-6 text-left">
//           <a href="#" className="text-green-600 font-semibold hover:underline">
//             View more by builder
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// // --- Location Map ---
// function LocationMap({ property }: { property: SerializableProperty }) {
//   return (
//     <div className="mt-8 py-8 border-t">
//       <h2 className="text-3xl font-bold text-gray-900 mb-6">Located At</h2>
//       <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
//         <Image
//           src={property.mapImage}
//           alt={`Map of ${property.name}`}
//           fill
//           className="object-cover"
//         />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-xl text-center">
//           <p className="font-bold text-gray-800">{property.name}</p>
//           <p className="text-sm text-gray-500">{property.location}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// // --- Related Properties ---
// function RelatedProperties({
//   currentProperty,
// }: {
//   currentProperty: SerializableProperty;
// }) {
//   const related = useMemo(
//     () =>
//       propertiesData
//         .filter(
//           (p) =>
//             p.developer === currentProperty.developer &&
//             p.id !== currentProperty.id
//         )
//         .slice(0, 3),
//     [currentProperty]
//   );

//   if (related.length === 0) return null;

//   return (
//     <div className="mt-8 py-8 border-t">
//       <h2 className="text-3xl font-bold text-gray-900 mb-6">
//         Related Properties
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {related.map((property) => (
//           <RelatedPropertyCard key={property.id} property={property} />
//         ))}
//       </div>
//       <div className="text-center mt-12">
//         <button className="bg-white border-2 border-green-500 text-green-600 font-bold py-3 px-8 rounded-full hover:bg-green-50 transition">
//           View More
//         </button>
//       </div>
//     </div>
//   );
// }

// function RelatedPropertyCard({ property }: { property: OriginalProperty }) {
//   return (
//     <Link href={`/properties/${property.id}`} className="block">
//       <div className="bg-white rounded-lg shadow-md border border-gray-200 transition-shadow hover:shadow-xl overflow-hidden">
//         <div className="relative w-full h-52">
//           <Image
//             src={property.images[0]}
//             alt={property.name}
//             fill
//             className="object-cover"
//           />
//           <div className="absolute top-3 left-3 bg-white/90 text-gray-800 text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
//             {property.priceRange}
//           </div>
//           <div className="absolute top-3 right-3 flex gap-2">
//             <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg text-purple-600 hover:bg-gray-50">
//               <Car size={20} />
//             </button>
//             <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg text-pink-500 hover:bg-gray-50">
//               <Heart size={20} />
//             </button>
//           </div>
//         </div>
//         <div className="p-5">
//           <h3 className="text-lg font-bold text-gray-900 truncate">
//             {property.name}
//           </h3>
//           <p className="text-sm text-gray-500 mb-3">by {property.developer}</p>
//           <div className="flex items-center text-gray-500 text-sm mb-4">
//             <MapPin size={14} className="mr-1.5 flex-shrink-0" />
//             {property.location}
//           </div>
//           <hr className="border-dashed my-3" />
//           <div className="flex justify-between items-center text-xs text-gray-700">
//             {property.specs.map((spec, index) => (
//               <div key={index} className="flex items-center gap-1">
//                 <Icon name={spec.icon.name as IconName} size={14} />
//                 <span>{spec.text}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }

// // --- Amenities Tab ---
// function AmenitiesTabContent({
//   amenities,
// }: {
//   amenities: SerializableProperty["amenities"];
// }) {
//   if (!amenities || amenities.length === 0) {
//     return (
//       <div className="text-center text-gray-500 py-10">
//         No amenities listed for this property.
//       </div>
//     );
//   }
//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-4">
//       {amenities.map((amenity, index) => (
//         <div
//           key={index}
//           className="flex flex-col items-center gap-3 text-center"
//         >
//           <div className="flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100/60 text-yellow-500">
//             <Icon name={amenity.icon as IconName} size={36} strokeWidth={1.5} />
//           </div>
//           <p className="font-semibold text-gray-700">{amenity.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// }







// app/properties/[id]/PropertyDetailClient.tsx
"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Property as OriginalProperty,
    Developer,
    propertiesData,
} from "../../data/properties";
import Navbar from "@/components/shared/Navbar";
import {
    Heart,
    MapPin,
    Phone,
    Share2,
    Printer,
    Car,
    ChevronDown,
    X,
    Copy,
} from "lucide-react";
import {
    WhatsappShareButton,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappIcon,
    FacebookIcon,
    TwitterIcon,
} from "react-share";
import { useFavorites } from "../../context/FavoritesContext";
import { toast } from "react-hot-toast";
import { Icon, IconName } from "@/components/shared/IconMapper";
import { toPng } from 'html-to-image';


type SerializableProperty = Omit<
    OriginalProperty,
    "specs" | "floorplans" | "amenities"
> & {
    specs: { icon: string; text: string }[];
    floorplans: {
        name: string;
        priceRange: string;
        image: string;
        specs: { icon: string; text: string }[];
    }[];
    amenities: {
        name: string;
        icon: string;
    }[];
};

interface PropertyDetailClientProps {
    property: SerializableProperty;
    developer?: Developer;
}

export default function PropertyDetailClient({
    property,
    developer,
}: PropertyDetailClientProps) {
    return (
        <div className="bg-white font-sans">
            <Navbar />
            <main className="container mx-auto max-w-7xl px-4 py-12">
                <PropertyHeader property={property} developer={developer} />
                <PropertyTabs property={property} developer={developer} />
                <LocationMap property={property} />
                <RelatedProperties currentProperty={property} />
            </main>
        </div>
    );
}

// --- SUB-COMPONENT: PROPERTY HEADER (UI RESTORED) ---
function PropertyHeader({
    property,
    developer,
}: {
    property: SerializableProperty;
    developer?: Developer;
}) {
    const [activeImage, setActiveImage] = useState(property.images[0]);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();
    const isFav = isFavorite(property.id);
    const propertyDetailsRef = useRef<HTMLDivElement>(null);
    const [isCapturing, setIsCapturing] = useState(false);
    const [shareUrl, setShareUrl] = useState('');

    useEffect(() => {
        setShareUrl(window.location.href);
    }, []);

    const dataURLtoFile = (dataurl: string, filename: string): File | null => {
        if (!dataurl || !filename) return null;
        try {
            const arr = dataurl.split(',');
            const mimeMatch = arr[0].match(/:(.*?);/);
            if (!mimeMatch) return null;
            const mime = mimeMatch[1];
            const bstr = atob(arr[1]);
            let n = bstr.length;
            const u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, { type: mime });
        } catch (error) {
            console.error("Error converting DataURL to File:", error);
            return null;
        }
    };

    const generateAndShareImage = async () => {
        if (!propertyDetailsRef.current) {
            toast.error("Could not capture property details.");
            return;
        }

        toast.loading("Preparing image...", { id: "shareToast" });
        setIsCapturing(true);

        await new Promise(resolve => setTimeout(resolve, 100));

        try {
            const dataUrl = await toPng(propertyDetailsRef.current, { quality: 0.95 });
            const shareTitle = `Check out this property: ${property.name}`;
            const shareText = `🏠 Explore ${property.name} in ${property.location}.`;
            const imageFile = dataURLtoFile(dataUrl, `${property.name.replace(/\s/g, '_')}_property.png`);
            
            const shareData: ShareData = {
                title: shareTitle,
                text: shareText,
                url: shareUrl,
                ...(imageFile ? { files: [imageFile] } : {}),
            };

            if (navigator.share) {
                if (imageFile && navigator.canShare && navigator.canShare(shareData)) {
                    await navigator.share(shareData);
                } else {
                    await navigator.share({ title: shareTitle, text: shareText, url: shareUrl });
                }
                toast.success("Shared successfully!", { id: "shareToast" });
            } else {
                setIsShareModalOpen(true);
                toast.dismiss("shareToast");
            }
        } catch (error) {
            console.error("Error during image generation or sharing:", error);
            toast.error("Failed to share property image.", { id: "shareToast" });
        } finally {
            setIsCapturing(false);
        }
    };

    const handleFavoriteToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (isFav) {
            removeFavorite(property.id);
            toast("Property removed from favorites", { icon: "💔" });
        } else {
            addFavorite(property.id);
            toast.success("Property added to favorites!");
        }
    };

    return (
        <>
            <ShareModal
                isOpen={isShareModalOpen}
                onClose={() => setIsShareModalOpen(false)}
                url={shareUrl}
                title={`Check out: ${property.name}`}
            />
            
            {/* ✨ FIXED: Restored original className to fix the layout */}
            <div ref={propertyDetailsRef} className="grid grid-cols-1 lg:grid-cols-5 gap-8">
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
                            {!isCapturing && (
                                <>
                                    <motion.button
                                        onClick={generateAndShareImage}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition shadow-md"
                                        title="Share property details"
                                    >
                                        <Share2 size={20} />
                                    </motion.button>
                                    <motion.button
                                        onClick={handleFavoriteToggle}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition shadow-md"
                                    >
                                        <Heart size={20} className={isFav ? "text-red-500" : "text-gray-700"} fill={isFav ? "currentColor" : "none"} />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition shadow-md"
                                        onClick={() => window.print()}
                                        title="Print property details"
                                    >
                                        <Printer size={20} />
                                    </motion.button>
                                </>
                            )}
                        </div>
                        {isCapturing && (
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-center">
                                <p className="text-white font-semibold text-sm drop-shadow-md">
                                    For more details, visit:
                                </p>
                                <p className="text-white text-xs mt-1 drop-shadow-md font-mono">
                                    {shareUrl}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {property.images.map((img, index) => (
                            <div
                                key={index}
                                className={`relative h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${activeImage === img ? "border-green-500" : "border-transparent"}`}
                                onClick={() => setActiveImage(img)}
                            >
                                <Image src={img} alt={`${property.name} thumbnail ${index + 1}`} fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
                        {property.name}
                    </h1>
                    <p className="text-md text-gray-500 mb-3">
                        by{" "}
                        <a href="#" className="text-yellow-600 font-semibold">
                            {developer?.name || property.developer}
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
                                <Icon name={spec.icon as IconName} size={16} />
                                {spec.text}
                            </div>
                        ))}
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                        <p className="text-gray-600 text-sm">Price</p>
                        <p className="text-3xl font-bold text-green-600">
                            {property.priceRange}
                        </p>
                    </div>
                    {!isCapturing && (
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <button className="flex-1 bg-white text-green-600 border-2 border-green-500 font-bold py-3 px-6 rounded-3xl hover:bg-green-50 transition w-full sm:w-auto">
                                Download Brochure
                            </button>
                            <button className="flex-1 bg-green-500 text-white font-bold py-3 px-6 rounded-3xl hover:bg-green-600 transition flex items-center justify-center gap-2 w-full sm:w-auto">
                                <Phone size={18} /> Call Us
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

// --- SHARE MODAL (Unchanged) ---
function ShareModal({ isOpen, onClose, url, title }: { isOpen: boolean; onClose: () => void; url: string; title: string; }) {
  if (!isOpen) return null;
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    toast.success("Link copied to clipboard!");
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        className="relative bg-white w-full max-w-md rounded-2xl shadow-xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>
        <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Share this Property</h3>
        <p className="text-sm text-gray-500 text-center mb-6">
            Share the link below. Platforms will create a preview using your page's meta tags.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <WhatsappShareButton url={url} title={title} separator=":: ">
            <WhatsappIcon size={52} round />
          </WhatsappShareButton>
          <FacebookShareButton url={url} quote={title}>
            <FacebookIcon size={52} round />
          </FacebookShareButton>
          <TwitterShareButton url={url} title={title}>
            <TwitterIcon size={52} round />
          </TwitterShareButton>
        </div>
        <div className="flex items-center space-x-2">
          <input type="text" value={url} readOnly className="w-full bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none" />
          <button onClick={copyToClipboard} className="flex-shrink-0 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-3 rounded-lg flex items-center gap-2">
            <Copy size={16} /> Copy
          </button>
        </div>
      </motion.div>
    </div>
  );
}


// --- ALL OTHER COMPONENTS (PropertyTabs, etc.) remain unchanged ---
function PropertyTabs({
  property,
  developer,
}: {
  property: SerializableProperty;
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
//... (The rest of the file remains unchanged)
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
function OverviewTabContent({ property }: { property: SerializableProperty }) {
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
  specs: SerializableProperty["specifications"];
}) {
  const [activeSpecTab, setActiveSpecTab] = useState("Flooring");
  const specCategories = Object.keys(specs);

  return (
    <div>
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

// --- Floorplans Components ---
function FloorplansTabContent({
  floorplans,
  developerName,
  location,
}: {
  floorplans: SerializableProperty["floorplans"];
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
  plan: SerializableProperty["floorplans"][0];
  developerName: string;
  location: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col">
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
          <div>
            {(() => {
              const initialSpecs = plan.specs.slice(0, 2);
              const lastSpec = plan.specs[2];
              return (
                <>
                  <div className="flex items-center gap-4">
                    {initialSpecs.map((spec, i) => (
                      <div
                        key={i}
                        className="bg-green-50 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2 border border-green-200"
                      >
                        <Icon name={spec.icon as IconName} size={16} />
                        <span>{spec.text}</span>
                      </div>
                    ))}
                  </div>
                  {lastSpec && (
                    <div className="mt-3">
                      <div className="bg-green-50 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2 border border-green-200 w-fit">
                        <Icon name={lastSpec.icon as IconName} size={16} />
                        <span>{lastSpec.text}</span>
                      </div>
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        </div>
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

// --- Gallery Tab ---
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

// --- EMI Calculator Tab ---
function EMICalculatorTabContent({
  property,
}: {
  property: SerializableProperty;
}) {
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(0);
  const [loanAmount, setLoanAmount] = useState(59000000);
  const [loanTenure, setLoanTenure] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);
  const [isChartVisible, setIsChartVisible] = useState(true);

  const parsePrice = (priceStr: string): number => {
    const parts = priceStr.split(" ");
    const value = parseFloat(parts[1]);
    const unit = parts[2]?.toLowerCase();
    if (unit === "cr.") return value * 10000000;
    if (unit === "l") return value * 100000;
    return 0;
  };

  useEffect(() => {
    if (property.floorplans && property.floorplans[selectedUnitIndex]) {
      const newLoanAmount = parsePrice(
        property.floorplans[selectedUnitIndex].priceRange
      );
      setLoanAmount(newLoanAmount);
    }
  }, [selectedUnitIndex, property.floorplans]);

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
      <div className="space-y-6">
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
        <div className="space-y-8 pt-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-gray-700">
                Loan Amount
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
                Loan Tenure
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

// --- About Us Tab ---
function AboutUsTabContent({ developer }: { developer: Developer }) {
  return (
    <div>
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

// --- Location Map ---
function LocationMap({ property }: { property: SerializableProperty }) {
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

// --- Related Properties ---
function RelatedProperties({
  currentProperty,
}: {
  currentProperty: SerializableProperty;
}) {
  const related = useMemo(
    () =>
      propertiesData
        .filter(
          (p) =>
            p.developer === currentProperty.developer &&
            p.id !== currentProperty.id
        )
        .slice(0, 3),
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

function RelatedPropertyCard({ property }: { property: OriginalProperty }) {
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
              <div key={index} className="flex items-center gap-1">
                <Icon name={spec.icon.name as IconName} size={14} />
                <span>{spec.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

// --- Amenities Tab ---
function AmenitiesTabContent({
  amenities,
}: {
  amenities: SerializableProperty["amenities"];
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
            <Icon name={amenity.icon as IconName} size={36} strokeWidth={1.5} />
          </div>
          <p className="font-semibold text-gray-700">{amenity.name}</p>
        </div>
      ))}
    </div>
  );
}