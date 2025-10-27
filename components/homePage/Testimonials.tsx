// // app/components/Testimonials.tsx
// "use client";

// import Image from 'next/image';
// import { Play } from 'lucide-react';
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
//               align: 'center',
//               loop: true,
//             }}
//             className="w-full"
//           >
//             <CarouselContent>
//               {testimonials.map((testimonial, index) => (
//                 <CarouselItem key={index}>
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

//             <CarouselPrevious className="h-12 w-12 bg-green-500 text-white border-none hover:bg-green-600 disabled:bg-gray-400" />
//             <CarouselNext className="h-12 w-12 bg-green-500 text-white border-none hover:bg-green-600 disabled:bg-gray-400" />

//           </Carousel>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }

// app/components/homePage/Testimonials.tsx
"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  thumbnailUrl: string;
  videoUrl: string;
}

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

const VideoModal = ({ videoUrl, onClose }: VideoModalProps) => {
  return (
    <>
      {/* Dimmed backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      {/* Video container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-3xl p-4"
      >
        <div className="relative aspect-video w-full bg-black rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src={videoUrl}
            title="Testimonial Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
          >
            <X size={22} />
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);
   const fetchSiteData = async () => {
      try {
        const siteData = await (window as any).site_data;
        const videoData = siteData?.testimonial_video_links || [];

        // Map the fetched YouTube data to your component format
        const mappedData = videoData.map((item: any) => {
          let embedUrl = "";
          try {
            const videoId = item.youtube_link?.embed_url?.split("v=")[1];
            embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&origin=https://homekonnect.com&color=white`;
            console.log("Embed URL:", embedUrl);  
          } catch (err) {
            console.error("Invalid YouTube link", err);
          }

          return {
            thumbnailUrl: item.youtube_link?.thumbnail_url || "",
            videoUrl: embedUrl,
          };
        });

        setTestimonials(mappedData);
        console.log("Fetched testimonials:", mappedData);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

  // ✅ Fetch data dynamically from window.site_data like HomeKonnect logic
  useEffect(() => {
   
console.log("Fetching site data for testimonials...");
    fetchSiteData();
  }, []);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.5 },
    },
  };

  // If no data, render nothing
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <>
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
              We swear by this quote by Zig Ziglar —{" "}
              <span className="text-yellow-600 font-medium">
                Stop Selling. Start Helping
              </span>
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="p-2">
                      <div
                        className="relative aspect-video w-full cursor-pointer group overflow-hidden rounded-xl"
                        onClick={() =>
                          setSelectedVideoUrl(testimonial.videoUrl)
                        }
                      >
                        <Image
                          src={testimonial.thumbnailUrl}
                          alt="Testimonial video thumbnail"
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="transition-transform duration-300 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 10,
                            }}
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

      <AnimatePresence>
        {selectedVideoUrl && (
          <VideoModal
            videoUrl={selectedVideoUrl}
            onClose={() => setSelectedVideoUrl(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
