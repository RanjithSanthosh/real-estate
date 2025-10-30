// 'use client'
// import React from "react";
// import Navbar from "@/components/shared/Navbar";
// import DetailedFooter from "@/components/aboutPage/DetailedFooter";
// import SiteMapFooter from "@/components/homePage/SiteMapFooter";
// import { blogsData, Blog } from "../data/blogs";
// import { nriServicesData } from "../data/nriServices"; // Import your new data
// import { faqsData } from "../data/faqs"; // Import FAQ data for the accordion
// import Image from "next/image";
// import Link from "next/link";
// import { Palmtree } from "lucide-react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { searchBlogs } from "@/services/api"; // ✅ Import API function
// import { PrismicBlog } from "@/app/data/prismic"; // ✅ Import Prismic type
// import LatestBlogsSidebar from "@/components/shared/LatestBlogsSidebar"; // ✅ Import shared component
// import { useUI } from "../../app/context/UIContext";
// // --- Reusable card for the "Latest in Blogs" sidebar ---
// function LatestBlogCard({ blog }: { blog: Blog }) {
//   return (
//     <Link
//       href={`/blogs/${blog.slug}`}
//       className="flex items-center gap-4 group"
//     >
//       <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
//         <Image
//           src={blog.image}
//           alt={blog.title}
//           fill
//           className="object-cover"
//           sizes="80px"
//         />
//       </div>
//       <div>
//         <p className="flex items-center text-xs text-gray-500 mb-1">
//           <Palmtree size={14} className="text-green-600 mr-1.5" />
//           {blog.tag || "Real Estate"}
//         </p>
//         <h4 className="font-semibold text-gray-800 leading-tight group-hover:text-green-600 transition-colors line-clamp-2">
//           {blog.title}
//         </h4>
//         <p className="text-xs text-gray-400 mt-1">{blog.date}</p>
//       </div>
//     </Link>
//   );
// }

// // --- Main Page Component ---
// export default async function NriServicesPage() {
//   const latestBlogsResponse = await searchBlogs(1, 5);
//   const latestBlogs = (latestBlogsResponse?.results || []) as PrismicBlog[];
//   const {
//     openLoginModal,
//     openFilterModal,
//     openConsultationModal,
//     isConsultationModalOpen,
//     closeConsultationModal,
//     openOfferModal,
//   } = useUI();

//   return (
//     <div className="bg-white">
//       <Navbar />
//       <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//         {/* Breadcrumbs */}
//         <div className="text-sm text-green-600 font-semibold tracking-wider mb-8">
//           <Link href="/home" className="hover:underline">
//             HOME
//           </Link>
//           <span className="mx-2">&gt;</span>
//           <Link href="#" className="hover:underline">
//             RESOURCES
//           </Link>
//           <span className="mx-2">&gt;</span>
//           <span>NRI SERVICES</span>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Main Content Area */}
//           <div className="lg:col-span-2">
//             <h1 className="text-4xl md:text-5xl font-serif text-gray-900 font-bold mb-6">
//               NRI Services
//             </h1>
//             <p className="text-gray-600 leading-relaxed mb-8">
//               India has turned into a global investment destination for
//               Non-Resident Indians and persons of Indian origin. A growing &
//               robust economy, a strong Rupee and profitable companies have
//               together ensured that investors get maximum returns from both
//               equity and debt markets. A highly transparent and automated stock
//               exchange and a resonant mutual fund industry have ensured that
//               investments are liquid and transparent. Taking advantage of this
//               environment and our proven experience in the market.
//             </p>
//             <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg mb-12">
//               <Image
//                 src="/assets/nri-banner.jpg"
//                 alt="NRI Services Banner"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <p className="text-gray-600 leading-relaxed mb-12">
//               We offer the entire gamut of financial planning and advisory
//               services to NRIs and also provide additional services such as tax
//               filing in India.
//             </p>

//             {/* Investment Avenues & Tax Sections */}
//             <div className="space-y-10">
//               {nriServicesData.map((section, index) => (
//                 <div key={index}>
//                   <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">
//                     {section.title}
//                   </h2>
//                   {section.content.map((paragraph, pIndex) => (
//                     <p
//                       key={pIndex}
//                       className="text-gray-600 leading-relaxed mb-4"
//                     >
//                       {paragraph}
//                     </p>
//                   ))}
//                 </div>
//               ))}
//             </div>

//             {/* FAQ Section */}
//             <div className="mt-12 pt-8 border-t">
//               <h2 className="text-3xl font-serif text-gray-800 font-bold mb-6">
//                 Frequently Asked Questions
//               </h2>
//               <Accordion type="single" collapsible className="w-full">
//                 {faqsData.map((faq, index) => (
//                   <AccordionItem
//                     key={index}
//                     value={`item-${index}`}
//                     className="border-b"
//                   >
//                     <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:no-underline">
//                       {faq.question}
//                     </AccordionTrigger>
//                     <AccordionContent className="text-gray-600 leading-relaxed pt-2">
//                       {faq.answer}
//                     </AccordionContent>
//                   </AccordionItem>
//                 ))}
//               </Accordion>
//             </div>
//             <button
//               onClick={() => {
//                 // onClose();
//                 openConsultationModal();
//               }}
//               className="w-full bg-black text-white py-4 px-6 mt-12 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-3"
//             >
//               CONNECT WITH AN EXPERT
//             </button>
//           </div>

//           {/* ✅ Sidebar: Replaced with the shared component */}
//           <LatestBlogsSidebar latestBlogs={latestBlogs} />
//         </div>
//       </main>
//       <SiteMapFooter />
//       <DetailedFooter />
//     </div>
//   );
// }



import React from "react";
import Navbar from "@/components/shared/Navbar";
import DetailedFooter from "@/components/aboutPage/DetailedFooter";
import SiteMapFooter from "@/components/homePage/SiteMapFooter";
import { searchBlogs } from "@/services/api"; // ✅ API function
import { PrismicBlog } from "@/app/data/prismic"; // ✅ Prismic type
import NriServicesClient from "./NriServicesClient"; // ✅ Import the new client component

// --- This is now an async Server Component ---
export default async function NriServicesPage() {
  // ✅ Data is fetched here on the server
  const latestBlogsResponse = await searchBlogs(1, 5);
  const latestBlogs = (latestBlogsResponse?.results || []) as PrismicBlog[];

  return (
    <div className="bg-white">
      <Navbar />
      
      {/* ✅ Render the client component and pass the fetched data as a prop */}
      <NriServicesClient latestBlogs={latestBlogs} />
      
      <SiteMapFooter />
      <DetailedFooter />
    </div>
  );
}