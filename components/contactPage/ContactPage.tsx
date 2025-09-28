// components/ContactPage.tsx
'use client';

import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Headset } from 'lucide-react'; // Icons from lucide-react

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    propertyZoning: '',
    propertyType: '',
    city: '',
    message: '',
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send formData to an API
    console.log('Form submitted:', formData);
    alert('Form submitted! (Check console for data)');
    // Optionally reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      reason: '',
      propertyZoning: '',
      propertyType: '',
      city: '',
      message: '',
      consent: false,
    });
  };

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-16">Contact Us</h1>

        {/* Top Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1: Email */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md text-center">
            <Mail size={32} className="text-yellow-600 mb-3" />
            <p className="text-sm text-gray-700">enquiry@homekonnect.com</p>
          </div>
          {/* Card 2: Phone */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md text-center">
            <Phone size={32} className="text-yellow-600 mb-3" />
            <p className="text-sm text-gray-700">+91 9940366555</p>
          </div>
          {/* Card 3: Click to WhatsApp */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md text-center">
            <MessageSquare size={32} className="text-yellow-600 mb-3" />
            <p className="text-sm text-gray-700">Click to WhatsApp</p>
          </div>
          {/* Card 4: Chat With Us */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md text-center">
            <Headset size={32} className="text-yellow-600 mb-3" />
            <p className="text-sm text-gray-700">Chat With Us anytime</p>
          </div>
        </div>

        {/* Corporate Office & Form Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Corporate Office</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.918960144577!2d80.22272825!3d13.0416973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52668582f3c3a9%3A0xcb5a1b3a62f5f190!2sHome%20Konnect!5e0!3m2!1sen!2sin!4v1709669046777!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Home Konnect Office Location"
            ></iframe>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-colors"
                    required
                  />
                </div>
                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Phone Number with Country Code */}
              <div className="flex gap-6 mb-6">
                <div className="w-1/4"> {/* Country code fixed width */}
                  <select
                    name="countryCode" // Added a name for country code if you want to capture it
                    value="+91" // Default to +91
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-colors"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    {/* Add more country codes as needed */}
                  </select>
                </div>
                <div className="w-3/4"> {/* Phone number takes remaining width */}
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-colors text-gray-600"
                    required
                  >
                    <option value="" disabled hidden>Select Reason To Contact</option>
                    <option value="buying">Buying Property</option>
                    <option value="selling">Selling Property</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <select
                    name="propertyZoning"
                    value={formData.propertyZoning}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-colors text-gray-600"
                    required
                  >
                    <option value="" disabled hidden>Select Property Zoning</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-colors text-gray-600"
                    required
                  >
                    <option value="" disabled hidden>Select Property Type</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="land">Land</option>
                  </select>
                </div>
                <div>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-colors text-gray-600"
                    required
                  >
                    <option value="" disabled hidden>Select City</option>
                    <option value="chennai">Chennai</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="mumbai">Mumbai</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-colors resize-y"
                  required
                ></textarea>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start mb-8">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="consent" className="ml-2 text-xs text-gray-600">
                  I consent to Home Konnect and its representatives contacting me with updates and notifications via email, SMS, WhatsApp, and phone calls. I understand that this consent will override my registration on the DND/NCNC registry.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Submit!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}