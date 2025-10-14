'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Phone, Search, Heart, User, ShoppingBag } from 'lucide-react';
import logoImage from "@/components/homePage/assets/logo.png";
import { useUI } from '../../app/context/UIContext'; 
export default function Navbar() {
    const { openLoginModal } = useUI();
  return (
    <header className="text-white sticky top-0 z-50 shadow-md bg-black ">
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image src={logoImage} alt="Home Konnect Logo" width={170} height={37} priority />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium ">
            <div className="flex items-center gap-2 cursor-pointer hover:text-green-600">
              <span>All Cities</span>
              <ChevronDown size={16} />
            </div>
            <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
            <Link href="/about" className="text-green-600 font-semibold border-b-2 border-green-600 pb-1">About</Link>
            <Link href="/contact" className="hover:text-green-600 transition-colors">Contact Us</Link>
          </div>

          {/* Right side icons and button */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full font-medium text-sm  hover:bg-gray-50 transition">
              <Phone size={16} className="" />
              Call Us <span className="ml-1 text-gray-400">|</span> 🇮🇳
            </button>
            <div className="hidden md:flex items-center gap-4 ">
                <Search size={22} className="cursor-pointer hover:text-shadow-white" />
<Link href="/favorites" className="hover:text-green-300">
                          <Heart size={20} />
                        </Link>
                {/* <User size={22} className="cursor-pointer " /> */}

                <button onClick={openLoginModal}>
                    <User size={22} className="cursor-pointer hover:text-green-600" />
                </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}