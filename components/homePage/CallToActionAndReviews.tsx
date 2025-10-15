// app/components/CallToActionAndReviews.tsx
"use client";

import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";
import * as React from "react";
import logoImage from "./assets/dream-house-your-hands-new-home-ownership-concept 1.png";
import OUTparents from "./assets/OUTparents.png";
import { motion, Variants } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Gift } from "lucide-react";
import { useUI } from "../../app/context/UIContext";


interface Review {
  profilePic: string;
  name: string;
  rating: number;
  content: string;
}

const reviews: Review[] = [
  {
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya Sharma",
    rating: 4.5,
    content:
      "Home Konnect's team was incredibly professional. They understood our needs and found us the perfect apartment faster than we expected.",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rajesh Kumar",
    rating: 5.0,
    content:
      "Fantastic service! Home Konnect made finding our dream home incredibly easy and stress-free. Highly recommend their professional team.",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Anjali Mehta",
    rating: 4.0,
    content:
      "A very transparent and ethical company. Their post-transaction support was excellent and truly built a long-standing relationship with us.",
  },
];

export default function CallToActionAndReviews() {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const {
  openLoginModal,
  openFilterModal,
  openConsultationModal,
  isConsultationModalOpen,
  closeConsultationModal,
  openOfferModal,
} = useUI();

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Animation Variants
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

  const imageSlideIn: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "circOut" },
    },
  };

  return (
    <section className="bg-white mt-0">
      {/* Top Green Banner Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="bg-green-600 text-white py-16 md:py-24 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between">
          <motion.div
            variants={containerVariants}
            className="flex flex-col text-center md:text-left md:w-1/2 z-10"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Have a property requirement ?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg mb-8 max-w-md mx-auto md:mx-0"
            >
              Connect with our expert advisors to buy, sell or rent your
              property.
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.button
              onClick={openOfferModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 font-semibold py-3 px-6 rounded-full transition flex items-center gap-2 justify-center mx-auto md:mx-0"
              >
                Contact Us <ArrowUpRight size={16} />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageSlideIn}
            className="hidden md:block absolute right-0 bottom-0 md:w-1/2 lg:w-[40%] h-full"
          >
            <Image
              src={logoImage}
              alt="House in hand"
              fill
              style={{ objectFit: "contain", objectPosition: "bottom right" }}
              className="z-0"
              sizes="(max-width: 768px) 0vw, (max-width: 1200px) 50vw, 40vw"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* What Our Customers Are Saying Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 max-w-sm">
              What Our Customers Are Saying...
            </h2>
            <p className="text-gray-500 text-lg mb-8">And why they love us</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-green-400 text-green-600 font-semibold py-2.5 px-6 rounded-full hover:bg-green-50 transition flex items-center gap-2 justify-center"
            >
              Love Us?
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-8 flex justify-center"
          >
            <Carousel setApi={setApi} className="w-full max-w-4xl">
              <CarouselContent className="-ml-4">
                {reviews.map((review, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2">
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm h-full flex flex-col"
                    >
                      <div className="flex items-center mb-4">
                        <Image
                          src={review.profilePic}
                          alt={review.name}
                          width={48}
                          height={48}
                          className="rounded-full mr-3 object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-800">
                            {review.name}
                          </p>
                          <div className="flex items-center text-yellow-500 text-sm">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                fill={
                                  i < Math.floor(review.rating)
                                    ? "currentColor"
                                    : "none"
                                }
                                strokeWidth={1.5}
                                className="mr-0.5"
                              />
                            ))}
                            <span className="ml-1 text-gray-600">
                              {review.rating.toFixed(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 flex-grow">
                        {review.content}
                      </p>
                      <button className="text-green-600 font-semibold text-sm flex items-center gap-1 hover:text-green-700 transition">
                        Read More <ArrowUpRight size={14} />
                      </button>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-8 space-x-2"
        >
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 w-8 rounded-full transition-colors duration-300 ${
                current === index + 1 ? "bg-green-500" : "bg-gray-200"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={OUTparents}
          alt="Our partners"
          className="mr-3 object-cover w-full"
        />
      </motion.div>
    </section>
  );
}
