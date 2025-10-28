'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import logoImage from "@/components/homePage/assets/logo.png";

interface ConsultationModalProps {
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  phoneNumber?: string;
}

export default function ConsultationModal({ onClose }: ConsultationModalProps) {
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
    
    // If there are no errors, proceed with submission
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", { name, email, phoneNumber });
      // Handle successful submission logic (e.g., send to API)
      onClose(); // Close the modal
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" onClick={onClose}>
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
        <form onSubmit={handleSubmit} className="p-8 space-y-4" noValidate>
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
            Book Now
          </button>
          
           <p className="text-xs text-center text-gray-500 pt-2">
             By proceeding, you agree with our <a href="/privacy-policy" className="text-green-600 underline">Privacy Policy</a> and <a href="/terms-of-use" className="text-green-600 underline">Terms Of Use</a>
           </p>
        </form>
      </div>
    </div>
  );
}