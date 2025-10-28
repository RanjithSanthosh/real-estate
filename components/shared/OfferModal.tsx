'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Phone } from 'lucide-react';
import MegaphoneOffer from '../../public/assets/gift.png'; // Make sure this path is correct

interface OfferModalProps {
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  phoneNumber?: string;
}

export default function OfferModal({ onClose }: OfferModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  // Validation function
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (!name.trim()) {
      newErrors.name = "Name is required.";
    }
    
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid.";
    }
    
    // phoneNumber already stored as digits only
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits.";
    }
    
    return newErrors;
  };

  // Handler that keeps only digits and limits length to 10
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhoneNumber(digits);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", { name, email, phoneNumber });
      // send to API...
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md flex flex-col relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-1 rounded-full bg-white/50 hover:bg-white/80 transition-colors z-10">
          <X size={24} />
        </button>

        <div className="relative h-40 flex items-center justify-center bg-gray-100 rounded-t-2xl overflow-hidden">
          <Image
            src={MegaphoneOffer}
            alt="Great Offer Banner"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>

        <div className="bg-green-600 p-4 text-center">
          <p className="text-xl font-bold text-white">3 Lucky customers will win an International Trip</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4" noValidate>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-2xl focus:ring-green-500 focus:border-green-500`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1 ml-2">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-2xl focus:ring-green-500 focus:border-green-500`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 ml-2">{errors.email}</p>}
          </div>

          <div>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">
                91 +
              </span>
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={10}
                autoComplete="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={handlePhoneChange}
                className={`flex-grow p-3 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-r-2xl focus:ring-green-500 focus:border-green-500`}
                aria-invalid={!!errors.phoneNumber}
                aria-describedby={errors.phoneNumber ? 'phone-error' : undefined}
              />
            </div>
            {errors.phoneNumber && <p id="phone-error" className="text-red-500 text-xs mt-1 ml-2">{errors.phoneNumber}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-2xl hover:bg-green-700 transition-colors"
          >
            Get a Call
          </button>
        </form>
      </div>
    </div>
  );
}