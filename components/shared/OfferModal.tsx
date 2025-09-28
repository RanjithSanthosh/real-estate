'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import MegaphoneOffer from '../../public/assets/gift.png'; // You'll need to create this image or use an SVG/icon

interface OfferModalProps {
  onClose: () => void;
}

export default function OfferModal({ onClose }: OfferModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, phoneNumber });
    // Here you would typically send this data to an API
    onClose(); // Close modal after submission
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md flex flex-col relative" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-1 rounded-full bg-white/50 hover:bg-white/80 transition-colors z-10">
          <X size={24} />
        </button>

        {/* Megaphone Offer Section */}
        <div className="relative h-40 flex items-center justify-center bg-gray-100 rounded-t-2xl overflow-hidden">
          {/* Background image for the megaphone/offer */}
          {/* Assuming MegaphoneOffer.png is a wide banner that fits */}
          <Image
            src={MegaphoneOffer} // Replace with your actual megaphone image path
            alt="Great Offer Banner"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          {/* Overlay text if needed, or if image contains text directly */}
          {/* <div className="absolute inset-0 flex items-center justify-center z-10">
            <h3 className="text-white text-2xl font-bold">Great Offer For All of You</h3>
          </div> */}
        </div>

        {/* Prize Section */}
        <div className="bg-green-600 p-4 text-center">
          <p className="text-xl font-bold text-white">3 Lucky customers will win an International Trip</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            required
          />
          <div className="flex">
            <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">
              91 +
            </span>
            <input
              type="tel" // Use tel for phone numbers
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="flex-grow p-3 border border-gray-300 rounded-r-lg focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            Get a Call
          </button>
        </form>
      </div>
    </div>
  );
}