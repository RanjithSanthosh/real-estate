


// // app/components/Testimonials.tsx
// "use client";

// import Image from 'next/image';
// import { Play, ArrowLeft, ArrowRight } from 'lucide-react';
// import * as React from 'react';

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from '@/components/ui/carousel'; // Adjust path if needed

// interface Testimonial {
//   thumbnailUrl: string;
//   videoUrl: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     // You should place your actual thumbnail in the `public` folder
//     thumbnailUrl: '/assets/testimonial-thumbnail.jpg',
//     videoUrl: '#',
//   },
//   {
//     thumbnailUrl: '/assets/testimonial-thumbnail-2.jpg',
//     videoUrl: '#',
//   },
// ];

// // A placeholder image to ensure the component works out of the box.
// // Replace this with your actual thumbnail path.
// const placeholderImageUrl = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop";

// export default function Testimonials() {
//   return (
//     <section className="bg-gray-50 py-16 md:py-24">
//       {/* Text content remains in a container for proper centering */}
//       <div className="container mx-auto px-6 text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//           Testimonials
//         </h2>
//         <p className="text-gray-500 mt-2">
//           We swear by this quote by Zig Ziglar - <span className="text-yellow-600 font-medium">Stop Selling. Start Helping</span>
//         </p>
//       </div>

//       {/* Carousel now sits in a full-width container */}
//       <div className="w-full">
//         <Carousel
//           opts={{
//             align: 'start',
//             loop: true,
//           }}
//           className="w-full" // Removed max-w-4xl
//         >
//           <CarouselContent>
//             {testimonials.map((testimonial, index) => (
//               <CarouselItem key={index}>
//                 {/* Removed padding from the item to make it full bleed */}
//                 <div className="relative aspect-video w-full cursor-pointer group">
//                   <Image
//                     src={placeholderImageUrl} // Use your actual thumbnail path here
//                     alt="Testimonial video thumbnail"
//                     fill
//                     style={{ objectFit: 'cover' }}
//                     // Removed rounded-lg to make it square
//                   />
//                   <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//                     <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
//                       <Play className="h-12 w-12 text-white fill-white" />
//                     </div>
//                   </div>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>

//           {/* Wrapper for arrows to position them correctly over the full-width image */}
//           <div className="absolute inset-0 flex items-center justify-between px-4 md:px-16">
//              <CarouselPrevious className="static -translate-y-1/2 h-12 w-12 bg-green-500 text-white border-none hover:bg-green-600 disabled:bg-gray-400">
//                 <ArrowLeft className="h-6 w-6" />
//              </CarouselPrevious>
//              <CarouselNext className="static -translate-y-1/2 h-12 w-12 bg-green-500 text-white border-none hover:bg-green-600 disabled:bg-gray-400">
//                 <ArrowRight className="h-6 w-6" />
//              </CarouselNext>
//           </div>
//         </Carousel>
//       </div>
//     </section>
//   );
// }





// // app/components/Testimonials.tsx
// "use client";

// import Image from 'next/image';
// import { Play, ArrowLeft, ArrowRight } from 'lucide-react';
// import * as React from 'react';
// import { motion, Variants } from 'framer-motion';

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from '@/components/ui/carousel';

// interface Testimonial {
//   thumbnailUrl: string;
//   videoUrl: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     thumbnailUrl: '/assets/testimonial-thumbnail.jpg',
//     videoUrl: '#',
//   },
//   {
//     thumbnailUrl: '/assets/testimonial-thumbnail-2.jpg',
//     videoUrl: '#',
//   },
//   {
//     thumbnailUrl: '/assets/testimonial-thumbnail-3.jpg',
//     videoUrl: '#',
//   },
// ];

// const placeholderImageUrl = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop";

// export default function Testimonials() {
//   // Animation variants
//   const containerVariants: Variants = {
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
//     <motion.section
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       className="bg-gray-50 py-16 md:py-24"
//     >
//       <div className="container mx-auto px-6">
//         <motion.div variants={itemVariants} className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//             Testimonials
//           </h2>
//           <p className="text-gray-500 mt-2">
//             We swear by this quote by Zig Ziglar - <span className="text-yellow-600 font-medium">Stop Selling. Start Helping</span>
//           </p>
//         </motion.div>

//         <motion.div variants={itemVariants} className="max-w-5xl mx-auto">
//           <Carousel
//             opts={{
//               align: 'start',
//               loop: true,
//             }}
//             className="w-full"
//           >
//             <CarouselContent>
//               {testimonials.map((testimonial, index) => (
//                 <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//                   <div className="p-2">
//                     <div className="relative aspect-video w-full cursor-pointer group overflow-hidden rounded-xl">
//                       <Image
//                         src={placeholderImageUrl}
//                         alt="Testimonial video thumbnail"
//                         fill
//                         style={{ objectFit: 'cover' }}
//                         className="transition-transform duration-300 group-hover:scale-105"
//                       />
//                       <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//                         <motion.div
//                           whileHover={{ scale: 1.15, rotate: 5 }}
//                           transition={{ type: 'spring', stiffness: 300, damping: 10 }}
//                           className="bg-white/30 backdrop-blur-sm p-4 rounded-full"
//                         >
//                           <Play className="h-10 w-10 text-white fill-white" />
//                         </motion.div>
//                       </div>
//                     </div>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
            
//             {/* FIX: Navigation arrows are now direct children of Carousel for correct functionality */}
//             <CarouselPrevious className="h-12 w-12 bg-green-500 text-white border-none hover:bg-green-600 disabled:bg-gray-400" />
//             <CarouselNext className="h-12 w-12 bg-green-500 text-white border-none hover:bg-green-600 disabled:bg-gray-400" />

//           </Carousel>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }



// app/components/Testimonials.tsx
"use client";

import Image from 'next/image';
import { Play } from 'lucide-react';
import * as React from 'react';
import { motion, Variants } from 'framer-motion';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface Testimonial {
  thumbnailUrl: string;
  videoUrl: string;
}

const testimonials: Testimonial[] = [
  {
    thumbnailUrl: '/assets/testimonial-thumbnail.jpg',
    videoUrl: '#',
  },
  {
    thumbnailUrl: '/assets/testimonial-thumbnail-2.jpg',
    videoUrl: '#',
  },
  {
    thumbnailUrl: '/assets/testimonial-thumbnail-3.jpg',
    videoUrl: '#',
  },
];

const placeholderImageUrl = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop";

export default function Testimonials() {
  // Animation variants
  const containerVariants: Variants = {
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

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-gray-50 py-16 md:py-24"
    >
      <div className="container mx-auto px-6">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Testimonials
          </h2>
          <p className="text-gray-500 mt-2">
            We swear by this quote by Zig Ziglar - <span className="text-yellow-600 font-medium">Stop Selling. Start Helping</span>
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: 'center',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-2">
                    <div className="relative aspect-video w-full cursor-pointer group overflow-hidden rounded-xl">
                      <Image
                        src={placeholderImageUrl}
                        alt="Testimonial video thumbnail"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                          className="bg-white/30 backdrop-blur-sm p-4 rounded-full"
                        >
                          <Play className="h-10 w-10 text-white fill-white" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="h-12 w-12 bg-green-500 text-white border-none hover:bg-green-600 disabled:bg-gray-400" />
            <CarouselNext className="h-12 w-12 bg-green-500 text-white border-none hover:bg-green-600 disabled:bg-gray-400" />

          </Carousel>
        </motion.div>
      </div>
    </motion.section>
  );
}