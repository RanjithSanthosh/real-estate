


// 'use client';

// import Image from 'next/image';
// import React from 'react';
// import visionImage from '../../public/assets/aboutPage/ourVision.png';
// import missionImage from '../../public/assets/aboutPage/ourMission.png';

// export default function VisionMissionSection() {
//   return (
//     // ✅ Reduced vertical padding from py-16 lg:py-24 to py-12 lg:py-20
//     <section className="bg-white py-12 lg:py-20 pb-0 lg:pb-0 ">
//       {/* ✅ Reduced space between sections from space-y-20 lg:space-y-28 to space-y-12 lg:space-y-16 */}
//       <div className="container mx-auto px-6 space-y-12 lg:space-y-16">
        
//         {/* Our Vision Section */}
//         {/* ✅ Reduced gap from gap-12 to gap-8 */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           {/* Image on the left */}
//           <div>
//             <Image
//               src={visionImage}
//               alt="A modern and beautiful house representing the company's vision"
//               width={600}
//               height={400}
//               className="w-full h-auto"
//             />
//           </div>
//           {/* Text on the right */}
//           <div className="text-left">
//             <p className="text-gray-500 font-semibold mb-2">What Home Konnect® envisions</p>
//             {/* ✅ Reduced font size from text-4xl lg:text-5xl to text-3xl lg:text-4xl */}
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Our Vision</h2>
//             {/* ✅ Reduced font size from text-lg to text-base (standard paragraph size) */}
//             <p className="text-gray-600 text-base leading-relaxed">
//               Providing genuine delightful experiences to our Customers.
//             </p>
//           </div>
//         </div>

//         {/* Our Mission Section */}
//         {/* ✅ Reduced gap from gap-12 to gap-8 */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           {/* Image on the right */}
//           <div className="lg:order-last">
//             <Image
//               src={missionImage}
//               alt="House model on blueprints representing the company's mission"
//               width={600}
//               height={400}
//               className="w-full h-auto"
//             />
//           </div>
//           {/* Text on the left */}
//           <div className="text-left">
//             <p className="text-gray-500 font-semibold mb-2">What Home Konnect® stands for</p>
//             {/* ✅ Reduced font size from text-4xl lg:text-5xl to text-3xl lg:text-4xl */}
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
//             {/* ✅ Reduced font size from text-lg to text-base */}
//             <p className="text-gray-600 text-base leading-relaxed">
//               To be the top-pick for our customers in their journey of exploring, buying, selling, renting & financing their dream home. We are fiercely passionate about creating long standing value for our Customers guided by our core principles of integrity, professionalism and ethics.
//             </p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }




'use client';

import Image from 'next/image';
import React from 'react';
import visionImage from '../../public/assets/aboutPage/ourVision.png';
import missionImage from '../../public/assets/aboutPage/ourMission.png';
import { motion, Variants } from 'framer-motion';

export default function VisionMissionSection() {

  // Animation Variants for sliding in from the sides
  const slideInFromLeft: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideInFromRight: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-white py-12 lg:py-20 overflow-x-hidden">
      <div className="container mx-auto px-6 space-y-12 lg:space-y-16">
        
        {/* Our Vision Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Image on the left */}
          <motion.div variants={slideInFromLeft}>
            {/* FIX: Added [will-change:transform] for smoother animation */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-lg overflow-hidden shadow-md [will-change:transform]"
            >
              <Image
                src={visionImage}
                alt="A modern and beautiful house representing the company's vision"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
          {/* Text on the right */}
          <motion.div variants={slideInFromRight} className="text-left">
            <p className="text-gray-500 font-semibold mb-2">What Home Konnect® envisions</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Providing genuine delightful experiences to our Customers.
            </p>
          </motion.div>
        </motion.div>

        {/* Our Mission Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Image on the right */}
          <motion.div variants={slideInFromRight} className="lg:order-last">
            {/* FIX: Added [will-change:transform] for smoother animation */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-lg overflow-hidden shadow-md [will-change:transform]"
            >
              <Image
                src={missionImage}
                alt="House model on blueprints representing the company's mission"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
          {/* Text on the left */}
          <motion.div variants={slideInFromLeft} className="text-left">
            <p className="text-gray-500 font-semibold mb-2">What Home Konnect® stands for</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              To be the top-pick for our customers in their journey of exploring, buying, selling, renting & financing their dream home. We are fiercely passionate about creating long standing value for our Customers guided by our core principles of integrity, professionalism and ethics.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}