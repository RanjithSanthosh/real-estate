"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  ChevronDown,
  Phone,
  Search,
  Heart,
  User,
  ShoppingBag,
} from "lucide-react";
import logoImage from "@/components/homePage/assets/logo.png";
import { useUI } from "../../app/context/UIContext";

const RESOURCE_LINKS = [
  { label: "Home buyer's guide", href: "/guides/home-buyers" },
  { label: "FAQ", href: "/faq" },
  { label: "Pricing", href: "/pricing" },
  { label: "EMI Calculator", href: "/emi-calculator" },
  { label: "Vastu Tips", href: "/vastu-tips" },
  { label: "NRI Services", href: "/nri-services" },
  { label: "Terms of use", href: "/terms-of-use" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Navbar() {
  const { openLoginModal } = useUI();

  const detailsRef = useRef<HTMLDetailsElement>(null);

  const onClose = () => {
    if (detailsRef.current) {
      detailsRef.current.open = false; 
    }
  };

  return (
    <header className="text-white sticky top-0 z-50 shadow-md bg-black ">
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logoImage}
                alt="Home Konnect Logo"
                width={170}
                height={37}
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium ">
            <Link href="/" className="hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="text-green-600 font-semibold border-b-2 border-green-600 pb-1"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-green-600 transition-colors"
            >
              Contact Us
            </Link>

            {/* Resources Accordion */}
            {/* 1. Add 'relative' to the parent <details> tag */}
            <details className="group relative" ref={detailsRef}>
              <summary className="flex justify-between items-center cursor-pointer list-none py-2">
                <span>Resources</span>
                <ChevronDown
                  size={20}
                  className="transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              
              {/* 2. Add 'absolute' positioning and dropdown styles to the <ul> */}
              <ul
                className="absolute top-full right-0 mt-2 w-56 
                           bg-black border border-gray-700 rounded-lg shadow-xl z-50
                           p-4 flex flex-col gap-4 text-lg font-normal text-gray-300
                           origin-top-right"
              >
                {RESOURCE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose} // Your onClick now works
                      className="hover:text-green-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </div>

          {/* Right side icons and button */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full font-medium text-sm  hover:bg-gray-50 transition">
              <Phone size={16} className="" />
              Call Us <span className="ml-1 text-gray-400">|</span> 🇮🇳
            </button>
            <div className="hidden md:flex items-center gap-4 ">
              <Search
                size={22}
                className="cursor-pointer hover:text-shadow-white"
              />
              <Link href="/favorites" className="hover:text-green-300">
                <Heart size={20} />
              </Link>
              <button onClick={openLoginModal}>
                <User
                  size={22}
                  className="cursor-pointer hover:text-green-600"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}