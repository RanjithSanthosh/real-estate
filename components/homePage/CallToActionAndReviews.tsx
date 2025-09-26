// app/components/CallToActionAndReviews.tsx
"use client";

import Image from 'next/image';
import { ArrowUpRight, Star } from 'lucide-react';
import * as React from 'react';
import logoImage  from "./assets/dream-house-your-hands-new-home-ownership-concept 1.png";
import OUTparents  from "./assets/OUTparents.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface Review {
  profilePic: string;
  name: string;
  rating: number;
  content: string;
}

const reviews: Review[] = [
  {
    profilePic: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: "AMARA ADHYA",
    rating: 4.5,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    profilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: "John Doe",
    rating: 5.0,
    content: "Fantastic service! Home Konnect made finding our dream home incredibly easy and stress-free. Highly recommend their professional team.",
  },
  {
    profilePic: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: "Jane Smith",
    rating: 4.0,
    content: "A very transparent and ethical company. Their post-transaction support was excellent and truly built a long-standing relationship with us.",
  },
];

export default function CallToActionAndReviews() {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="bg-white mt-0">
      {/* Top Green Banner Section */}
      <div className="bg-green-600 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="flex flex-col text-center md:text-left md:w-1/2 z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a property requirement ?
            </h2>
            <p className="text-lg mb-8 max-w-md mx-auto md:mx-0">
              Connect with our expert advisors to buy, sell or rent your property.
            </p>
            <button className="bg-white text-green-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition flex items-center gap-2 justify-center mx-auto md:mx-0">
              Contact Us <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="hidden md:block absolute right-0 bottom-0 md:w-1/2 lg:w-[40%] h-full">
            <Image
              // ✅ CORRECTED PATH: Absolute path from the 'public' folder
              src={logoImage}
              alt="House in hand"
              fill
              style={{ objectFit: 'contain', objectPosition: 'bottom right' }}
              className="z-0"
              sizes="(max-width: 768px) 0vw, (max-width: 1200px) 50vw, 40vw"
            />
          </div>
        </div>
      </div>

      {/* What Our Customers Are Saying Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 max-w-sm">
              What Our Customers Are Saying...
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              And why they love us
            </p>
            <button className="border border-green-400 text-green-600 font-semibold py-2.5 px-6 rounded-full hover:bg-green-50 transition flex items-center gap-2 justify-center">
              Love Us?
            </button>
          </div>

          <div className="lg:col-span-8 flex justify-center">
            <Carousel setApi={setApi} className="w-full max-w-4xl">
              <CarouselContent className="-ml-4">
                {reviews.map((review, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2">
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <Image
                          src={review.profilePic}
                          alt={review.name}
                          width={48}
                          height={48}
                          className="rounded-full mr-3 object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-800">{review.name}</p>
                          <div className="flex items-center text-yellow-500 text-sm">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                fill={i < Math.floor(review.rating) ? "currentColor" : "none"}
                                strokeWidth={1.5}
                                className="mr-0.5"
                              />
                            ))}
                            <span className="ml-1 text-gray-600">{review.rating.toFixed(1)}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 flex-grow">{review.content}</p>
                      <button className="text-green-600 font-semibold text-sm flex items-center gap-1 hover:text-green-700 transition">
                        Read More <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 w-8 rounded-full transition-colors duration-300 ${
                current === index + 1 ? 'bg-green-500' : 'bg-gray-200'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div>
                                <Image
                          src={OUTparents}
                          alt="no img"
                         
                          className=" mr-3 object-cover w-full"
                        />
      </div>
    </section>
  );
}