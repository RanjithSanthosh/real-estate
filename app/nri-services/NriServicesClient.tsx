'use client'; // This component handles interactivity

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { nriServicesData } from "../data/nriServices"; // Import your new data
import { faqsData } from "../data/faqs"; // Import FAQ data for the accordion
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PrismicBlog } from "@/app/data/prismic"; // ✅ Import Prismic type
import LatestBlogsSidebar from "@/components/shared/LatestBlogsSidebar"; // ✅ Import shared component
import { useUI } from "../../app/context/UIContext"; // ✅ Import the UI context

// --- Unused LatestBlogCard function removed ---

// --- Main Page Component ---
// It's no longer async and receives blogs as a prop
export default function NriServicesClient({ latestBlogs }: { latestBlogs: PrismicBlog[] }) {
  
  // ✅ All client-side logic stays here
  const { openConsultationModal } = useUI();

  return (
    <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Breadcrumbs */}
      <div className="text-sm text-green-600 font-semibold tracking-wider mb-8">
        <Link href="/home" className="hover:underline">
          HOME
        </Link>
        <span className="mx-2">&gt;</span>
        <Link href="#" className="hover:underline">
          RESOURCES
        </Link>
        <span className="mx-2">&gt;</span>
        <span>NRI SERVICES</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content Area */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 font-bold mb-6">
            NRI Services
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            India has turned into a global investment destination for
            Non-Resident Indians and persons of Indian origin. A growing &
            robust economy, a strong Rupee and profitable companies have
            together ensured that investors get maximum returns from both
            equity and debt markets. A highly transparent and automated stock
            exchange and a resonant mutual fund industry have ensured that
            investments are liquid and transparent. Taking advantage of this
            environment and our proven experience in the market.
          </p>
          <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg mb-12">
            <Image
              src="/assets/nri-banner.jpg"
              alt="NRI Services Banner"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-gray-600 leading-relaxed mb-12">
            We offer the entire gamut of financial planning and advisory
            services to NRIs and also provide additional services such as tax
            filing in India.
          </p>

          {/* Investment Avenues & Tax Sections */}
          <div className="space-y-10">
            {nriServicesData.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">
                  {section.title}
                </h2>
                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-gray-600 leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-12 pt-8 border-t">
            <h2 className="text-3xl font-serif text-gray-800 font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqsData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* ✅ This button will now work correctly */}
          <button
            onClick={openConsultationModal}
            className="w-full bg-black text-white py-4 px-6 mt-12 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-3"
          >
            CONNECT WITH AN EXPERT
          </button>
        </div>

        {/* ✅ Sidebar receives the prop passed from the server */}
        <LatestBlogsSidebar latestBlogs={latestBlogs} />
      </div>
    </main>
  );
}