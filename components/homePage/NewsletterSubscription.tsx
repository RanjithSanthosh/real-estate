// app/components/NewsletterSubscription.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import newsLetterImg1  from "./assets/newsLetterImg1.png";
import newsLetterImg2  from "./assets/newsLetterImg2.png";


export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail(''); // Reset input after submission
    }
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image Collage */}
          <div className="relative h-80 w-full lg:h-96">
            <div className="absolute top-0 left-0 w-3/4 h-3/4 shadow-lg">
              <Image
                src={newsLetterImg1}
                alt="Modern blue house"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 shadow-2xl  border-white">
              <Image
                src={newsLetterImg2}
                alt="Building under construction"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Right Side: Content and Form */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Subscribe To our Newsletter
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Do not miss out on exclusive property launches & special offers!
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto lg:mx-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-grow w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
              <button
                type="submit"
                className="bg-green-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-700 transition flex items-center justify-center gap-2"
              >
                Subscribe <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}