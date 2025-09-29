'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import logoImage from "@/components/homePage/assets/logo.png";

interface ConsultationModalProps {
  onClose: () => void;
}

export default function ConsultationModal({ onClose }: ConsultationModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40  z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md flex flex-col relative" onClick={(e) => e.stopPropagation()}>
        {/* Header Section */}
        <div className="bg-green-600 p-6 text-center rounded-t-2xl">
          <button onClick={onClose} className="absolute top-3 right-3 text-white/70 hover:text-white transition-colors">
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold text-white">Professional consultation</h2>
          <p className="text-white/90">By our Experts</p>
          <div className="flex justify-center mt-3">
             <Image src={logoImage} alt="Home Konnect Logo" width={150} height={33} />
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            required
          />
          <div className="flex">
            <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">
              91 +
            </span>
            <input
              type="tel"
              placeholder="Phone Number"
              className="flex-grow p-3 border border-gray-300 rounded-r-lg focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            Book Now
          </button>
           <p className="text-xs text-center text-gray-500 pt-2">
              By proceeding, you agree with our <a href="#" className="text-green-600 underline">Privacy Policy</a> and <a href="#" className="text-green-600 underline">Terms Of Use</a>
            </p>
        </form>
      </div>
    </div>
  );
}