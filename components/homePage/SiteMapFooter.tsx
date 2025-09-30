// // app/components/SiteMapFooter.tsx
// "use client";
// import mapImg from "./assets/mapImg.png";
// import Image from "next/image";
// import React from "react";

// // Data for the link columns
// const propertiesByCity = [
//   "Bengaluru",
//   "Chennai",
//   "Coimbatore",
//   "Colombo",
//   "Hosur",
//   "Kodaikanal",
//   "Mysuru",
//   "Tiruppur",
//   "All cities",
// ];

// const propertiesByType = [
//   "Apartment For Sale",
//   "Villas & Row Houses",
//   "Plots",
//   "Residential",
//   "Commercial",
//   "All Property Types",
// ];

// const propertiesByStatus = [
//   "New Properties",
//   "Under Construction Properties",
//   "Ready to Move Properties",
//   "Resale Properties",
//   "All Properties",
// ];

// const curatedCollections = [
//   "Luxury",
//   "Budget Friendly",
//   "Apartments",
//   "Villas & Row Houses",
//   "Plots",
//   "New Projects",
//   "Investments",
//   "Ready to Move",
//   "Resale",
// ];

// const quickLinks = [
//   "Home",
//   "Our Team",
//   "Careers",
//   "Contact Us",
//   "Blogs",
//   "Awards and Press",
//   "Accreditation & Associations",
// ];

// const resources = [
//   "Home Buyer's Guide",
//   "FAQ",
//   "Pricing",
//   "EMI Calculator",
//   "Vastu Tips",
//   "NRI Services",
//   "Get Home Loan",
// ];

// // Reusable component for rendering a single column of links
// const LinkColumn = ({ title, links }: { title: string; links: string[] }) => (
//   <div>
//     <h3 className="font-bold text-gray-800 mb-4">{title}</h3>
//     <ul className="space-y-3 text-gray-600">
//       {links.map((link) => (
//         <li key={link}>
//           <a
//             href="#"
//             className="hover:text-green-600 hover:underline transition-colors duration-300"
//           >
//             {link}
//           </a>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// export default function SiteMapFooter() {
//   return (
//     <footer className="bg-slate-50 py-16">
//       <div className="container mx-auto px-6">
//         <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
//           Home Konnect®
//         </h2>

//         {/* Top Section */}
//         <div className="mb-12">
//           <div className="bg-green-200/70 py-3 text-center mb-10">
//             <h3 className="font-semibold text-green-800 tracking-wider">
//               Resource And Links
//             </h3>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <LinkColumn title="Properties By City" links={propertiesByCity} />
//             <LinkColumn title="Properties By Type" links={propertiesByType} />
//             <LinkColumn
//               title="Properties By Status"
//               links={propertiesByStatus}
//             />
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div>
//           <div className="bg-green-200/70 py-3 text-center mb-10">
//             <h3 className="font-semibold text-green-800 tracking-wider">
//               Resource And Links
//             </h3>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <LinkColumn
//               title="Curated Collections"
//               links={curatedCollections}
//             />
//             <LinkColumn title="Quick Links" links={quickLinks} />
//             <LinkColumn title="Resources" links={resources} />
//           </div>
//         </div>
//       </div>
//       <div>
//         <Image src={mapImg} alt="Map of properties" className="w-full" />
//       </div>
//     </footer>
//   );
// }






// // app/components/SiteMapFooter.tsx
// "use client";
// import mapImg from "./assets/mapImg.png";
// import Image from "next/image";
// import React from "react";
// // Import motion and the Variants type from framer-motion
// import { motion, Variants } from "framer-motion";

// // Data for the link columns
// const propertiesByCity = [
//   "Bengaluru", "Chennai", "Coimbatore", "Colombo", "Hosur",
//   "Kodaikanal", "Mysuru", "Tiruppur", "All cities",
// ];

// const propertiesByType = [
//   "Apartment For Sale", "Villas & Row Houses", "Plots",
//   "Residential", "Commercial", "All Property Types",
// ];

// const propertiesByStatus = [
//   "New Properties", "Under Construction Properties",
//   "Ready to Move Properties", "Resale Properties", "All Properties",
// ];

// const curatedCollections = [
//   "Luxury", "Budget Friendly", "Apartments", "Villas & Row Houses",
//   "Plots", "New Projects", "Investments", "Ready to Move", "Resale",
// ];

// const quickLinks = [
//   "Home", "Our Team", "Careers", "Contact Us", "Blogs",
//   "Awards and Press", "Accreditation & Associations",
// ];

// const resources = [
//   "Home Buyer's Guide", "FAQ", "Pricing", "EMI Calculator",
//   "Vastu Tips", "NRI Services", "Get Home Loan",
// ];

// // Reusable component for rendering a single column of links
// const LinkColumn = ({ title, links }: { title: string; links: string[] }) => (
//   <div>
//     <h3 className="font-bold text-gray-800 mb-4">{title}</h3>
//     <ul className="space-y-3 text-gray-600">
//       {links.map((link) => (
//         // Added motion to the list item for a hover effect
//         <motion.li
//           key={link}
//           whileHover={{ x: 5 }}
//           transition={{ type: 'spring', stiffness: 400, damping: 10 }}
//         >
//           <a
//             href="#"
//             className="hover:text-green-600 hover:underline transition-colors duration-300"
//           >
//             {link}
//           </a>
//         </motion.li>
//       ))}
//     </ul>
//   </div>
// );

// export default function SiteMapFooter() {
//   // Animation Variants
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

//   const gridVariants: Variants = {
//     hidden: {}, // Let parent control initial state
//     visible: {
//         transition: {
//             staggerChildren: 0.1,
//         },
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
//       <div className="container mx-auto px-6">
//         <motion.h2
//           variants={itemVariants}
//           className="text-center text-4xl font-bold text-gray-800 mb-12"
//         >
//           Home Konnect®
//         </motion.h2>

//         {/* Top Section */}
//         <motion.div variants={itemVariants} className="mb-12">
//           <div className="bg-green-200/70 py-3 text-center mb-10">
//             <h3 className="font-semibold text-green-800 tracking-wider">
//               Properties And Projects
//             </h3>
//           </div>
//           <motion.div
//             variants={gridVariants}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             <motion.div variants={itemVariants}><LinkColumn title="Properties By City" links={propertiesByCity} /></motion.div>
//             <motion.div variants={itemVariants}><LinkColumn title="Properties By Type" links={propertiesByType} /></motion.div>
//             <motion.div variants={itemVariants}><LinkColumn title="Properties By Status" links={propertiesByStatus} /></motion.div>
//           </motion.div>
//         </motion.div>

//         {/* Bottom Section */}
//         <motion.div variants={itemVariants}>
//           <div className="bg-green-200/70 py-3 text-center mb-10">
//             <h3 className="font-semibold text-green-800 tracking-wider">
//               Resources And Links
//             </h3>
//           </div>
//           <motion.div
//             variants={gridVariants}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             <motion.div variants={itemVariants}><LinkColumn title="Curated Collections" links={curatedCollections} /></motion.div>
//             <motion.div variants={itemVariants}><LinkColumn title="Quick Links" links={quickLinks} /></motion.div>
//             <motion.div variants={itemVariants}><LinkColumn title="Resources" links={resources} /></motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//       <motion.div variants={itemVariants} className="mt-16">
//         <Image src={mapImg} alt="Map of properties" className="w-full" />
//       </motion.div>
//     </motion.footer>
//   );
// }



// app/components/SiteMapFooter.tsx
"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

// Data for the link columns
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

// Reusable component for rendering a single column of links
const LinkColumn = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h3 className="font-bold text-gray-800 mb-4">{title}</h3>
    <ul className="space-y-3 text-gray-600">
      {links.map((link) => (
        <motion.li
          key={link}
          whileHover={{ x: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <a
            href="#"
            className="hover:text-green-600 hover:underline transition-colors duration-300"
          >
            {link}
          </a>
        </motion.li>
      ))}
    </ul>
  </div>
);

export default function SiteMapFooter() {
  // Animation Variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.5 },
    },
  };

  const gridVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
  };

  return (
    <motion.footer
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="bg-slate-50 py-16"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          variants={itemVariants}
          className="text-center text-4xl font-bold text-gray-800 mb-12"
        >
          Home Konnect®
        </motion.h2>

        {/* Top Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="bg-green-200/70 py-3 text-center mb-10">
            <h3 className="font-semibold text-green-800 tracking-wider">
              Properties And Projects
            </h3>
          </div>
          <motion.div
            variants={gridVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants}><LinkColumn title="Properties By City" links={propertiesByCity} /></motion.div>
            <motion.div variants={itemVariants}><LinkColumn title="Properties By Type" links={propertiesByType} /></motion.div>
            <motion.div variants={itemVariants}><LinkColumn title="Properties By Status" links={propertiesByStatus} /></motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div variants={itemVariants}>
          <div className="bg-green-200/70 py-3 text-center mb-10">
            <h3 className="font-semibold text-green-800 tracking-wider">
              Resources And Links
            </h3>
          </div>
          <motion.div
            variants={gridVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants}><LinkColumn title="Curated Collections" links={curatedCollections} /></motion.div>
            <motion.div variants={itemVariants}><LinkColumn title="Quick Links" links={quickLinks} /></motion.div>
            <motion.div variants={itemVariants}><LinkColumn title="Resources" links={resources} /></motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* MODIFIED: Map container to reduce size and center it */}
      <motion.div variants={itemVariants} className="mt-16 container mx-auto px-6 max-w-6xl">
        <div className="w-full aspect-video overflow-hidden rounded-lg shadow-md">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.336552971536!2d80.24323797482113!3d13.077844112540612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d527ac6e17%3A0xc780d45703fe7897!2sHome%20Konnect%C2%AE%20-%20CRISIL%20Rated%20%26%20RERA%20Registered%20Real%20Estate%20Consultants%20Award%20Winning%20Top%20Rated%20Real%20Estate%20Agency!5e0!3m2!1sen!2sin!4v1759211181866!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </motion.div>
    </motion.footer>
  );
}