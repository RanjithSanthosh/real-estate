"use client";

import React, { useState } from "react";
import { Mail, Phone, MessageSquare, Headset } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useUI } from "../../app/context/UIContext";

export default function ContactPage() {
  const uiContext = useUI();
  const toggleChatbot = uiContext?.toggleChatbot;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    propertyZoning: "",
    propertyType: "",
    city: "",
    message: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prevData) => ({
      ...prevData,
      [name]: isCheckbox ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted! (Check console for data)");
    setFormData({
      name: "",
      email: "",
      phone: "",
      reason: "",
      propertyZoning: "",
      propertyType: "",
      city: "",
      message: "",
      consent: false,
    });
  };

  // Animations
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.5 } },
  };

  const slideInFromLeft: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideInFromRight: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // 🔧 Fix: make sure chatbot toggles correctly
  const handleChatbotClick = () => {
    if (typeof toggleChatbot === "function") {
      toggleChatbot();
    } else {
      console.warn("⚠️ toggleChatbot is not defined in UIContext");
    }
  };

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="bg-white py-16 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold text-gray-800 text-center mb-16"
        >
          Contact Us
        </motion.h1>

        {/* Top Contact Cards */}
        <motion.div
          variants={sectionVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {/* Email */}
          <motion.a
            href="mailto:enquiry@homekonnect.com"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.03 }}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md text-center"
          >
            <Mail size={32} className="text-yellow-600 mb-3" />
            <p className="text-sm text-gray-700">enquiry@homekonnect.com</p>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+919940366555"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.03 }}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md text-center"
          >
            <Phone size={32} className="text-yellow-600 mb-3" />
            <p className="text-sm text-gray-700">+91 9940366555</p>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/919940366555"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.03 }}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md text-center"
          >
            <MessageSquare size={32} className="text-yellow-600 mb-3" />
            <p className="text-sm text-gray-700">Click to WhatsApp</p>
          </motion.a>

          {/* Chat With Us */}
          <motion.button
            onClick={handleChatbotClick}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.03 }}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md text-center cursor-pointer"
          >
            <Headset size={32} className="text-yellow-600 mb-3" />
            <p className="text-sm text-gray-700">Chat With Us anytime</p>
          </motion.button>
        </motion.div>

        {/* Corporate Office & Form Section */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-bold text-gray-800 mb-8"
        >
          Corporate Office
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Map */}
          <motion.div
            variants={slideInFromLeft}
            className="rounded-lg overflow-hidden shadow-lg h-[400px] lg:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.336552971536!2d80.24323797482113!3d13.077844112540612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d527ac6e17%3A0xc780d45703fe7897!2sHome%20Konnect%C2%AE%20-%20CRISIL%20Rated%20%26%20RERA%20Registered%20Real%20Estate%20Consultants%20Award%20Winning%20Top%20Rated%20Real%20Estate%20Agency!5e0!3m2!1sen!2sin!4v1759220532368!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Home Konnect Office Location"
            ></iframe>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            variants={slideInFromRight}
            className="bg-gray-50 p-8 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  required
                />
              </div>

              <div className="flex gap-6 mb-6">
                <select
                  name="countryCode"
                  defaultValue="+91"
                  onChange={handleChange}
                  className="w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-600"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-3/4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-600"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-600 text-gray-600"
                  required
                >
                  <option value="" disabled hidden>
                    Select Reason To Contact
                  </option>
                  <option value="buying">Buying Property</option>
                  <option value="selling">Selling Property</option>
                  <option value="general">General Inquiry</option>
                </select>
                <select
                  name="propertyZoning"
                  value={formData.propertyZoning}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-600 text-gray-600"
                  required
                >
                  <option value="" disabled hidden>
                    Select Property Zoning
                  </option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-600 text-gray-600"
                  required
                >
                  <option value="" disabled hidden>
                    Select Property Type
                  </option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="land">Land</option>
                </select>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-600 text-gray-600"
                  required
                >
                  <option value="" disabled hidden>
                    Select City
                  </option>
                  <option value="chennai">Chennai</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="mumbai">Mumbai</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-600 resize-y"
                required
              ></textarea>

              <div className="flex items-start mb-8">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                  required
                />
                <label htmlFor="consent" className="ml-2 text-xs text-gray-600">
                  I consent to Home Konnect contacting me via email, SMS,
                  WhatsApp, and phone calls, overriding my registration on
                  DND/NCNC registry.
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transition-colors duration-300 focus:ring-2 focus:ring-green-500"
              >
                Submit!
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
