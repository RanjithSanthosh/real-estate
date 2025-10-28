

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
import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

// Import all images
import teamPhoto from '../../public/assets/aboutPage/Team.png'; 
import AboutHERO from '../../public/assets/aboutPage/AboutHERO.png';
import caurosel1 from '../../public/assets/aboutPage/caurosel1.jpg';
import caurosel2 from '../../public/assets/aboutPage/caurosel2.jpg';
import caurosel3 from '../../public/assets/aboutPage/caurosel3.jpg';
import caurosel4 from '../../public/assets/aboutPage/caurosel4.jpg';
import caurosel5 from '../../public/assets/aboutPage/caurosel5.jpg';
import caurosel6 from '../../public/assets/aboutPage/caurosel6.jpg';
import caurosel7 from '../../public/assets/aboutPage/caurosel7.jpg';
import caurosel8 from '../../public/assets/aboutPage/caurosel8.jpg';
import caurosel9 from '../../public/assets/aboutPage/caurosel9.jpg';
import caurosel10 from '../../public/assets/aboutPage/caurosel10.jpg';
import caurosel11 from '../../public/assets/aboutPage/caurosel11.jpg';

export default function TeamQuoteSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of all carousel images
  const carouselImages = [
    AboutHERO,
    caurosel1,
    caurosel2,
    caurosel3,
    caurosel4,
    caurosel5,
    caurosel6,
    caurosel7,
    caurosel8,
    caurosel9,
    caurosel10,
    caurosel11,
    teamPhoto
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

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

  const imageVariants: Variants = {
    enter: { opacity: 0, scale: 0.9 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 }
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
        
        {/* Carousel Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 w-full max-w-5xl mx-auto relative"
        >
          {/* Carousel Container - Adjusted Height */}
          <div className="relative h-80 md:h-96 lg:h-[450px] xl:h-[500px] rounded-lg overflow-hidden bg-gray-100">
            {carouselImages.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full"
                initial="enter"
                animate={index === currentSlide ? "center" : "exit"}
                variants={imageVariants}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <Image
                  src={image}
                  alt={`Home Konnect carousel image ${index + 1}`}
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-yellow-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-2 text-sm text-gray-500">
            {currentSlide + 1} / {carouselImages.length}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}