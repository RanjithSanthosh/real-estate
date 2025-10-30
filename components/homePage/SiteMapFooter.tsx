

// "use client";
// import React, { useState } from "react";
// import { motion, Variants } from "framer-motion";
// import { useRouter } from "next/navigation";

// // ... (Your helper functions and LinkColumn component go here) ...

// // ======================
// // MAIN COMPONENT
// // ======================

// export default function SiteMapFooter() {
//   const [activeLocation, setActiveLocation] = useState<'chennai' | 'bengaluru'>('chennai');

//   // URLs for the <iframe> embed
//   const mapEmbedUrls = {
//     chennai: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.336552971536!2d80.24323797482113!3d13.077844112540612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d527ac6e17%3A0xc780d45703fe7897!2sHome%20Konnect%C2%AE%20-%20CRISIL%20Rated%20%26%20RERA%20Registered%20Real%20Estate%20Consultants%20Award%20Winning%20Top%20Rated%20Real%20Estate%20Agency!5e0!3m2!1sen!2sin!4v1759211181866!5m2!1sen!2sin",
//     bengaluru: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15549.925204155634!2d77.6540188!3d13.0049934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11327ff026b5%3A0xb3ad5ffd6bdc07d1!2sHome%20Konnect!5e0!3m2!1sen!2sin!4v1761625736475!5m2!1sen!2sin"
//   };

//   // ✅ FIX: Use the public shareable URLs for the <a> link
//   const mapShareUrls = {
//     chennai: "https://maps.app.goo.gl/6HHnqejuhsKP8qXT6",
//     bengaluru: "https://maps.app.goo.gl/4FpySFtXVFBMWiVK7"
//   };

//   const sectionVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { ease: "easeOut", duration: 0.5 },
//     },
//   };

//   return (
//     <motion.footer
//       variants={sectionVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }}
//       className="bg-slate-50 py-16"
//     >
//       {/* ... (Your sitemap link sections) ... */}

//       {/* Map Section */}
//       <motion.div variants={itemVariants} className="mt-16  py-12">
//         <div className="container mx-auto px-6 max-w-6xl">
//           {/* Toggle Buttons */}
//           <div className="flex mb-4">
//             <button
//               onClick={() => setActiveLocation('chennai')}
//               className={`py-2 px-6 font-semibold rounded-t-lg transition-colors ${
//                 activeLocation === 'chennai' 
//                 ? 'bg-gray-700 text-white' 
//                 : 'bg-gray-900 text-gray-400 hover:text-white'
//               }`}
//             >
//               Head Office
//             </button>
//             <button
//               onClick={() => setActiveLocation('bengaluru')}
//               className={`py-2 px-6 font-semibold rounded-t-lg transition-colors ${
//                 activeLocation === 'bengaluru' 
//                 ? 'bg-gray-700 text-white' 
//                 : 'bg-gray-900 text-gray-400 hover:text-white'
//               }`}
//             >
//               Bengaluru
//             </button>
//           </div>

//           {/* Map Container */}
//           <div className="w-full aspect-[16/7] overflow-hidden rounded-lg shadow-md bg-gray-700">
//             <iframe
//               key={activeLocation} // Ensures iframe reloads on src change
//               src={activeLocation === 'chennai' ? mapEmbedUrls.chennai : mapEmbedUrls.bengaluru}
//               className="w-full h-full"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//           <div className="text-center mt-4">
//             <a 
//               // ✅ FIX: Use the correct shareable URL from mapShareUrls
//               href={activeLocation === 'chennai' ? mapShareUrls.chennai : mapShareUrls.bengaluru}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-300 hover:text-white underline"
//             >
//               VIEW ON GOOGLE MAPS
//             </a>
//           </div>
//         </div>
//       </motion.div>
//     </motion.footer>
//   );
// }





"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

// ======================
// DATA & MAPPINGS
// ======================

const propertiesByCity = [
  "Bengaluru", "Chennai", "Coimbatore", "Colombo", "Hosur",
  "Kodaikanal", "Mysuru", "Tiruppur", "All cities",
];

const propertiesByType = [
  "Apartment For Sale", "Villas & Row Houses", "Plots",
  "Residential", "Commercial", "All Property Types",
];

const propertiesByStatus = [
  "New Properties", "Under Construction Properties",
  "Ready to Move Properties", "Resale Properties", "All Properties",
];

const curatedCollections = [
  "Luxury", "Budget Friendly", "Apartments", "Villas & Row Houses",
  "Plots", "New Projects", "Investments", "Ready to Move", "Resale",
];

const quickLinks = [
  "Home", "Our Team", "Careers", "Contact Us", "Blogs",
  "Awards and Press", "Accreditation & Associations",
];

const resources = [
  "Home Buyer's Guide", "FAQ", "Pricing", "EMI Calculator",
  "Vastu Tips", "NRI Services", "Get Home Loan",
];

// ======================
// HELPER: PATH MAPPERS
// ======================

const getPageRoute = (label: string): string => {
  const pathMap: Record<string, string> = {
    "Home": "/home",
    "Our Team": "/about", // Assuming this links to the about page
    "Careers": "/careers",
    "Contact Us": "/contact",
    "Blogs": "/blogs",
    "Awards and Press": "/about", // Or a dedicated page
    "Accreditation & Associations": "/accreditation", // Or a dedicated page
    "Home Buyer's Guide": "/guides/home-buyers",
    "FAQ": "/faq",
    "Pricing": "/pricing",
    "EMI Calculator": "/emi-calculator",
    "Vastu Tips": "/vastu-tips",
    "NRI Services": "/nri-services",
    "Get Home Loan": "/", // Or a dedicated page
  };
  return pathMap[label] || "#";
};

const getFilterParams = (label: string): URLSearchParams => {
  const params = new URLSearchParams();

  // Simple example for curated collections
  if (label === "Luxury") {
    params.set("collection", "luxury");
  } else if (label === "Ready to Move") {
    params.set("status", "ready-to-move");
  } else if (label === "Apartments") {
    params.set("propertyType", "Apartment");
  }
  // You can expand this logic for all your filter links
  return params;
};

// ======================
// LINK COLUMN COMPONENT
// ======================

interface LinkColumnProps {
  title: string;
  links: string[];
  type: "filter" | "page" | "none";
  category?: "city" | "propertyType" | "status";
}

const LinkColumn = ({ title, links, type, category }: LinkColumnProps) => {
  const router = useRouter();

  const handleClick = (label: string) => {
    if (type === "none") return;

    if (type === "page") {
      const path = getPageRoute(label);
      if (path !== "#") router.push(path);
      return;
    }

    // === type === "filter" ===
    const params = new URLSearchParams();

    if (label.toLowerCase().includes("all ")) {
      router.push("/search");
      return;
    }

    if (category === "city") {
      params.set("city", label);
    } else if (category === "propertyType") {
      let value = label;
      if (label === "Apartment For Sale") value = "Apartment";
      if (label === "Villas & Row Houses") value = "Villa";
      params.set("propertyType", value);
    } else if (category === "status") {
      let value = label;
      if (label === "New Properties") value = "Under Construction";
      if (label === "Under Construction Properties") value = "Under Construction";
      if (label === "Ready to Move Properties") value = "Ready to Move";
      if (label === "Resale Properties") value = "Resale";
      params.set("status", value);
    } else {
      const filterParams = getFilterParams(label);
      for (const [key, val] of filterParams.entries()) {
        params.set(key, val);
      }
    }
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div>
      <h3 className="font-bold text-gray-800 mb-4">{title}</h3>
      <ul className="space-y-3 text-gray-600">
        {links.map((link) => (
          <motion.li
            key={link}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <button
              onClick={() => handleClick(link)}
              className="text-left w-full text-gray-600 hover:text-green-600 hover:underline transition-colors duration-300"
            >
              {link}
            </button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

// ======================
// MAIN COMPONENT
// ======================

export default function SiteMapFooter() {
  const [activeLocation, setActiveLocation] = useState<'chennai' | 'bengaluru'>('chennai');

  const mapEmbedUrls = {
    chennai: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.336552971536!2d80.24323797482113!3d13.077844112540612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d527ac6e17%3A0xc780d45703fe7897!2sHome%20Konnect%C2%AE%20-%20CRISIL%20Rated%20%26%20RERA%20Registered%20Real%20Estate%20Consultants%20Award%20Winning%20Top%20Rated%20Real%20Estate%20Agency!5e0!3m2!1sen!2sin!4v1759211181866!5m2!1sen!2sin",
    bengaluru: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15549.925204155634!2d77.6540188!3d13.0049934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11327ff026b5%3A0xb3ad5ffd6bdc07d1!2sHome%20Konnect!5e0!3m2!1sen!2sin!4v1761625736475!5m2!1sen!2sin"
  };

  const mapShareUrls = {
    chennai: "https://maps.app.goo.gl/RmUTzwUDfc4asFh1A",
    bengaluru: "https://maps.app.goo.gl/WQWdoz8WgWk3gLb69"
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.5 } },
  };

  const gridVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <motion.footer
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="bg-white py-16" // ✅ Changed to white as requested
    >
      <div className="container mx-auto px-6">
        <motion.h2
          variants={itemVariants}
          className="text-center text-4xl font-bold text-gray-800 mb-12"
        >
          Home Konnect®
        </motion.h2>

        {/* Top Section: Properties And Projects */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="bg-green-100/70 py-3 text-center mb-10">
            <h3 className="font-semibold text-green-800 tracking-wider">
              Properties And Projects
            </h3>
          </div>
          <motion.div
            variants={gridVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants}>
              <LinkColumn
                title="Properties By City"
                links={propertiesByCity}
                type="filter"
                category="city"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <LinkColumn
                title="Properties By Type"
                links={propertiesByType}
                type="filter"
                category="propertyType"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <LinkColumn
                title="Properties By Status"
                links={propertiesByStatus}
                type="filter"
                category="status"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section: Resources And Links */}
        <motion.div variants={itemVariants}>
          <div className="bg-green-100/70 py-3 text-center mb-10">
            <h3 className="font-semibold text-green-800 tracking-wider">
              Resources And Links
            </h3>
          </div>
          <motion.div
            variants={gridVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants}>
              <LinkColumn
                title="Curated Collections"
                links={curatedCollections}
                type="filter"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <LinkColumn
                title="Quick Links"
                links={quickLinks}
                type="page"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <LinkColumn
                title="Resources"
                links={resources}
                type="page"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div variants={itemVariants} className="mt-16 ">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Toggle Buttons */}
          <div className="flex mb-4">
            <button
              onClick={() => setActiveLocation('chennai')}
              className={` py-2 px-6 font-semibold rounded-t-lg transition-colors ${
                activeLocation === 'chennai' 
                ? 'bg-green-500 text-white' // ✅ Active: Green
                : 'bg-gray-900 text-gray-400 hover:text-white' // Inactive: Dark
              }`}
            >
              Head Office
            </button>
            <button
              onClick={() => setActiveLocation('bengaluru')}
              className={`ml-2 py-2 px-6 font-semibold rounded-t-lg transition-colors ${
                activeLocation === 'bengaluru' 
                ? 'bg-green-500 text-white' // ✅ Active: Green
                : 'bg-gray-900 text-gray-400 hover:text-white' // Inactive: Dark
              }`}
            >
              Bengaluru
            </button>
          </div>

          {/* Map Container */}
          <div className="w-full aspect-[16/7] overflow-hidden rounded-lg shadow-md bg-gray-700">
            <iframe
              key={activeLocation}
              src={activeLocation === 'chennai' ? mapEmbedUrls.chennai : mapEmbedUrls.bengaluru}
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="text-center mt-4">
            <a 
              href={activeLocation === 'chennai' ? mapShareUrls.chennai : mapShareUrls.bengaluru}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black underline"
            >
              VIEW ON GOOGLE MAPS
            </a>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}