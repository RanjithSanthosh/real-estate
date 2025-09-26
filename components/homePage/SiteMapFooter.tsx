// app/components/SiteMapFooter.tsx
"use client";
import mapImg from "./assets/mapImg.png";
import Image from "next/image";
import React from "react";

// Data for the link columns
const propertiesByCity = [
  "Bengaluru",
  "Chennai",
  "Coimbatore",
  "Colombo",
  "Hosur",
  "Kodaikanal",
  "Mysuru",
  "Tiruppur",
  "All cities",
];

const propertiesByType = [
  "Apartment For Sale",
  "Villas & Row Houses",
  "Plots",
  "Residential",
  "Commercial",
  "All Property Types",
];

const propertiesByStatus = [
  "New Properties",
  "Under Construction Properties",
  "Ready to Move Properties",
  "Resale Properties",
  "All Properties",
];

const curatedCollections = [
  "Luxury",
  "Budget Friendly",
  "Apartments",
  "Villas & Row Houses",
  "Plots",
  "New Projects",
  "Investments",
  "Ready to Move",
  "Resale",
];

const quickLinks = [
  "Home",
  "Our Team",
  "Careers",
  "Contact Us",
  "Blogs",
  "Awards and Press",
  "Accreditation & Associations",
];

const resources = [
  "Home Buyer's Guide",
  "FAQ",
  "Pricing",
  "EMI Calculator",
  "Vastu Tips",
  "NRI Services",
  "Get Home Loan",
];

// Reusable component for rendering a single column of links
const LinkColumn = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h3 className="font-bold text-gray-800 mb-4">{title}</h3>
    <ul className="space-y-3 text-gray-600">
      {links.map((link) => (
        <li key={link}>
          <a
            href="#"
            className="hover:text-green-600 hover:underline transition-colors duration-300"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function SiteMapFooter() {
  return (
    <footer className="bg-slate-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
          Home Konnect®
        </h2>

        {/* Top Section */}
        <div className="mb-12">
          <div className="bg-green-200/70 py-3 text-center mb-10">
            <h3 className="font-semibold text-green-800 tracking-wider">
              Resource And Links
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LinkColumn title="Properties By City" links={propertiesByCity} />
            <LinkColumn title="Properties By Type" links={propertiesByType} />
            <LinkColumn
              title="Properties By Status"
              links={propertiesByStatus}
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          <div className="bg-green-200/70 py-3 text-center mb-10">
            <h3 className="font-semibold text-green-800 tracking-wider">
              Resource And Links
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LinkColumn
              title="Curated Collections"
              links={curatedCollections}
            />
            <LinkColumn title="Quick Links" links={quickLinks} />
            <LinkColumn title="Resources" links={resources} />
          </div>
        </div>
      </div>
      <div>
        <Image src={mapImg} alt="Map of properties" className="w-full" />
      </div>
    </footer>
  );
}
