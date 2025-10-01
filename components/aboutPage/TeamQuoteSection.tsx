

// // components/aboutPage/TeamQuoteSection.tsx
// "use client";

// import Image from 'next/image';
// import React from 'react';

// // You'll need to add your actual team photo to the public/assets directory
// import teamPhoto from '../../public/assets/aboutPage/Team.png'; 

// export default function TeamQuoteSection() {
//   return (
//     <section className="bg-white py-16 lg:py-24 pb-0 lg:pb-0">
//       <div className="container mx-auto px-6 text-center">
        
//         {/* Title */}
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">
//           About Home Konnect®
//         </h2>
        
//         {/* Quote */}
//         <blockquote className="max-w-4xl mx-auto">
//           <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-4">
//             &quot;GREAT THINGS IN BUSINESS ARE NEVER DONE BY ONE PERSON. THEY&apos;RE DONE BY A TEAM OF PEOPLE&quot;
//           </p>
//           <footer className="text-lg font-semibold text-yellow-600">
//             - Steve Jobs
//           </footer>
//         </blockquote>
        
//         {/* Team Image */}
//         <div className="mt-12 w-full max-w-5xl mx-auto">
//           <Image
//             src={teamPhoto} // Using your local team photo
//             alt="The Home Konnect team"
//             width={1200}
//             height={600}
//             className="w-full h-auto object-cover" // Ensures the image is responsive
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// }



// components/aboutPage/TeamQuoteSection.tsx
"use client";

import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion';

// You'll need to add your actual team photo to the public/assets directory
import teamPhoto from '../../public/assets/aboutPage/Team.png'; 

export default function TeamQuoteSection() {
  // Animation Variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white py-16 lg:py-24 pb-0 lg:pb-0"
    >
      <div className="container mx-auto px-6 text-center">
        
        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          About Home Konnect®
        </motion.h2>
        
        {/* Quote */}
        <motion.blockquote
          variants={itemVariants}
          className="max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-4">
            &quot;GREAT THINGS IN BUSINESS ARE NEVER DONE BY ONE PERSON. THEY&apos;RE DONE BY A TEAM OF PEOPLE&quot;
          </p>
          <footer className="text-lg font-semibold text-yellow-600">
            - Steve Jobs
          </footer>
        </motion.blockquote>
        
        {/* Team Image */}
        <motion.div
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02, 
            boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.1)" 
          }}
          transition={{ duration: 0.3 }}
          className="mt-12 w-full max-w-5xl mx-auto"
        >
          <Image
            src={teamPhoto} // Using your local team photo
            alt="The Home Konnect team"
            width={1200}
            height={600}
            className="w-full h-auto object-cover" // Ensures the image is responsive
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}