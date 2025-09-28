'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/shared/Navbar'; // Assuming you have a standard Navbar

export default function WhatsappPage() {
  const phoneNumber = '+91 9940366555';
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      {/* ✅ Main content area to center the component */}
      <main className="flex-grow flex items-center justify-center p-4">
        {/* ✅ This is the original modal content, now styled for a page */}
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 text-center flex flex-col items-center justify-center border border-gray-200">
          <div className="relative w-32 h-32 mb-6 flex items-center justify-center">
            <Image 
                src="/assets/whatsapp-bg.png" 
                alt="WhatsApp background splash" 
                fill 
                className="object-contain" 
            />
            <Image 
                src="/assets/whatsapp-icon.png" 
                alt="WhatsApp Icon" 
                width={64} 
                height={64} 
                className="relative z-10" 
            />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Chat us on WhatsApp with</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">{phoneNumber}</p>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-green-600 transition-colors shadow-lg"
          >
            Continue to chat <ArrowRight size={20} />
          </a>
        </div>
      </main>
    </div>
  );
}