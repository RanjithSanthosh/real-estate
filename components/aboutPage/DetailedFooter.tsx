// components/aboutPage/DetailedFooter.tsx
"use client";

import Image from "next/image";
import {
  Mail,
  Phone,
  MessageSquare,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Pinterest,
} from "lucide-react";
import React from "react";

// Make sure these paths are correct for your logo and accreditation images
import logoImage from "../../public/assets/logo2.png";
import crisilLogo from "../../public/assets/crisil-logo.png";
import top100Logo from "../../public/assets/ZsDhr0aF0TcGJBw1_top3logo (1) 1.png";
import narLogo from "../../public/assets/nar.png";

export default function DetailedFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "#", icon: Facebook, name: "Facebook" },
    { href: "#", icon: Instagram, name: "Instagram" },
    { href: "#", icon: Linkedin, name: "LinkedIn" },
    { href: "#", icon: Youtube, name: "YouTube" },
    { href: "#", icon: Pinterest, name: "Pinterest" },
  ];

  const contactLinks = [
    { href: "mailto:info@homekonnect.com", icon: Mail, name: "Email" },
    { href: "tel:+911234567890", icon: Phone, name: "Phone" },
    {
      href: "https://wa.me/911234567890",
      icon: MessageSquare,
      name: "WhatsApp",
    },
    { href: "#", icon: MessageSquare, name: "Chat" },
  ];

  return (
    <footer className="bg-black text-gray-400 font-sans">
      <div className="container mx-auto px-6 py-12">
        {/* Main content wrapper */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
          {/* Left Column: Description */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <Image
                src={logoImage}
                alt="Home Konnect Logo"
                width={200}
                height={50}
              />
            </div>
            <p className="leading-relaxed text-sm">
              Home Konnect is a boutique CRISIL Rated & RERA Certified Real
              estate advisory with a refreshingly honest approach. At Home
              Konnect, we provide one-to-end property solution for home buyers,
              owners, lesses and lessors. Our expert team of Real Estate
              advisors is known for forging & nurturing long standing
              relationships built on customers connect to their dream homes
              selling 10 lakh + sq.ft. of residential space. Our team has some
              of the best professionals in the Real estate industry who
              specialize in finding the right property for our clients thereby
              creting long standing value for them.
            </p>
          </div>

          {/* Right Column: Accreditations, Contact, Social */}
          <div className="lg:w-1/2 flex flex-col items-start lg:items-end gap-10">
            {/* Accreditations */}
            <div className="flex flex-col items-start lg:items-end">
              <div className="flex items-center gap-6">
                <Image
                  src={crisilLogo}
                  alt="CRISIL Logo"
                  width={90}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src={top100Logo}
                  alt="Top 100 Logo"
                  width={70}
                  height={70}
                  className="object-contain"
                />
                <Image
                  src={narLogo}
                  alt="NAR Logo"
                  width={100}
                  height={35}
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-sm">
                RERA Agent Number TN/Agent/0572/2022
              </p>
            </div>

            {/* ✅ FIX: Contact and Social Links were moved back inside the right column */}
            {/* <div className="w-full flex flex-col sm:flex-row sm:justify-between lg:justify-start gap-10">
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
                <div className="flex items-center space-x-3">
                  {contactLinks
                    .filter(link => link.icon)
                    .map((link, index) => {
                      const IconComponent = link.icon;
                      return (
                        <a key={index} href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer" className="bg-[#2a2a2a] p-3 rounded-full hover:bg-green-600 transition-colors duration-300">
                          <IconComponent size={18} className="text-white" />
                        </a>
                      );
                  })}
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Social Links</h3>
                <div className="flex items-center space-x-3">
                   {socialLinks
                    .filter(link => link.icon)
                    .map((link, index) => {
                      const IconComponent = link.icon;
                      return (
                        <a key={index} href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer" className="bg-[#2a2a2a] p-3 rounded-full hover:bg-green-600 transition-colors duration-300">
                          <IconComponent size={18} className="text-white" />
                        </a>
                      );
                  })}
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* social links */}
        <div className="w-full flex flex-col sm:flex-row sm:justify-between lg:justify-start gap-10 p-4">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <div className="flex items-center space-x-3">
              {contactLinks
                .filter((link) => link.icon)
                .map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      aria-label={link.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#2a2a2a] p-3 rounded-full  hover:bg-green-600 transition-colors duration-300"
                    >
                      <IconComponent size={18} className="text-yellow-400 " />
                    </a>
                  );
                })}
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Social Links
            </h3>
            <div className="flex items-center space-x-3">
              {socialLinks
                .filter((link) => link.icon)
                .map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      aria-label={link.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#2a2a2a] p-3 rounded-full bg-yellow-400 hover:bg-green-600 transition-colors duration-300"
                    >
                      <IconComponent size={18} className="text-black" />
                    </a>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-sm">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center">
            <p className="mb-4 sm:mb-0">
              HomeKonnect®.com {currentYear}. All rights reserved.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <a href="#" className="hover:text-green-500 transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:text-green-500 transition-colors">
                Terms Of Use
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:text-green-500 transition-colors">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
