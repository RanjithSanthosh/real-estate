


// // components/aboutPage/MessageFromCEOSection.tsx
// 'use client';

// import Image from 'next/image';
// import React from 'react';

// // You'll need to provide an image for the CEO
// import ceoImage from '../../public/assets/aboutPage/CEOimg.png'; // Make sure this path is correct



// export default function MessageFromCEOSection() {
//   return (
//     <section className="bg-gray-50 pt-16 lg:pt-24 pb-8 lg:pb-12">
//       {/* Top Yellow Banner */}
//       <div className="bg-yellow-600 text-white text-center pt-16 pb-32">
//         <div className="container mx-auto px-6">
//           <h3 className="text-gray-100 font-semibold text-sm mb-2">Our core objective</h3>
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Message From The CEO
//           </h2>
//           <p className="text-gray-200 leading-relaxed max-w-4xl mx-auto mb-4">
//             Since its inception in 2012, our core objective has been to help people buy their dream homes with transparency & trust. HomeKonnect.com provides information to scores of home buyers while offering them end-to-end assistance in the home-buying process through a mix of technology-enabled tools as well as brilliant on-ground support. We are blessed to have a team that has some of the best talent in the Real estate industry. Today, we are an Award Winning Top Rated Agency with the support and patronage of Customers, Employees and Partners!
//           </p>
//           <p className="font-semibold">
//             Vijay A - Founder & CEO
//           </p>
//         </div>
//       </div>

//       {/* Overlapping Card Section */}
//       <div className="container mx-auto px-6 -mt-24">
//         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          
//           {/* CEO's Photo - now takes full width */}
//           <div className="w-full">
//             {/* You might want to adjust the height to your liking */}
//             <div className="relative h-64 sm:h-80 lg:h-96">
//               <Image
//                 src={ceoImage}
//                 alt="CEO of Home Konnect, Vijay A"
//                 fill
//                 style={{ objectFit: "cover", objectPosition: "top" }}
//                 sizes="100vw"
//               />
//             </div>
//           </div>
          
         

//         </div>
//       </div>
//     </section>
//   );
// }







// components/aboutPage/MessageFromCEOSection.tsx
'use client';

import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion';

// You'll need to provide an image for the CEO
import ceoImage from '../../public/assets/aboutPage/CEOimg.png'; // Make sure this path is correct

export default function MessageFromCEOSection() {

  // Animation Variants
  const bannerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
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

  const cardVariant: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  };

  const imageVariant: Variants = {
    hidden: { scale: 1.1 },
    visible: {
      scale: 1,
      transition: { duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={bannerVariants}
      className="bg-gray-50 pt-16 lg:pt-24 pb-8 lg:pb-12"
    >
      {/* Top Yellow Banner */}
      <div className="bg-yellow-600 text-white text-center pt-16 pb-32">
        <motion.div variants={bannerVariants} className="container mx-auto px-6">
          <motion.h3 variants={itemVariants} className="text-gray-100 font-semibold text-sm mb-2">Our core objective</motion.h3>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Message From The CEO
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-200 leading-relaxed max-w-4xl mx-auto mb-4">
            Since its inception in 2012, our core objective has been to help people buy their dream homes with transparency & trust. HomeKonnect.com provides information to scores of home buyers while offering them end-to-end assistance in the home-buying process through a mix of technology-enabled tools as well as brilliant on-ground support. We are blessed to have a team that has some of the best talent in the Real estate industry. Today, we are an Award Winning Top Rated Agency with the support and patronage of Customers, Employees and Partners!
          </motion.p>
          <motion.p variants={itemVariants} className="font-semibold">
            Vijay A - Founder & CEO
          </motion.p>
        </motion.div>
      </div>

      {/* Overlapping Card Section */}
      <motion.div
        variants={cardVariant}
        className="container mx-auto px-6 -mt-24"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          
          {/* CEO's Photo */}
          <div className="w-full">
            <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
              <motion.div variants={imageVariant} className="h-full w-full">
                <Image
                  src={ceoImage}
                  alt="CEO of Home Konnect, Vijay A"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="100vw"
                />
              </motion.div>
            </div>
          </div>
          
        </div>
      </motion.div>
    </motion.section>
  );
}