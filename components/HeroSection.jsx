import Image from 'next/image';
import { Phone, ChevronDown, Search, MapPin, Wallet, LayoutGrid } from 'lucide-react';

// It's good practice to create complex icons as separate components.
const IndianFlagIcon = () => (
  <div className="w-5 h-3 relative">
    <div className="w-5 h-full left-0 top-0 absolute bg-white" />
    <div className="w-5 h-1 left-0 top-0 absolute bg-[#FF9933]" /> {/* Saffron */}
    <div className="w-5 h-1 left-0 top-[8px] absolute bg-[#138808]" /> {/* Green */}
    <div className="w-[3px] h-[3px] left-[8.5px] top-[4.5px] absolute rounded-full border border-blue-900" /> {/* Ashoka Chakra */}
  </div>
);

const HeroSection = () => {
  return (
    <div className="w-full h-[737px] relative font-['Raleway']">
      {/* Background Image */}
      <Image
        src="https://placehold.co/1419x737" // Replace with your actual image path, e.g., /hero-background.jpg
        alt="Modern home exterior"
        layout="fill"
        objectFit="cover"
        className="rounded-bl-[80px] rounded-br-[80px]"
      />
      {/* Black Overlay */}
      <div className="w-full h-[648px] left-0 top-[88px] absolute bg-black/50 rounded-bl-[80px] rounded-br-[80px]" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col text-white px-8 md:px-20 py-6">
        
        {/* Header/Navigation */}
        <header className="flex justify-between items-center w-full">
          <Image 
            src="https://placehold.co/242x52" // Replace with your logo
            alt="Company Logo"
            width={242}
            height={52}
          />
          <nav className="hidden md:flex items-center gap-x-12 text-base font-semibold">
            <a href="#" className="hover:text-green-400 transition-colors">Home</a>
            <a href="#" className="hover:text-green-400 transition-colors">About</a>
            <a href="#" className="hover:text-green-400 transition-colors">Contact Us</a>
            <button className="flex items-center gap-x-2 px-6 py-3 rounded-[40px] border border-white hover:bg-white hover:text-black transition-colors">
              <Phone size={20} />
              <span>Call Us</span>
            </button>
          </nav>
        </header>

        {/* Hero Text Content */}
        <div className="flex-grow flex flex-col justify-center items-center text-center -mt-20">
          <h1 className="text-6xl font-bold leading-[94px]">
            Connecting To Your<br/>Dream Home
          </h1>
          <p className="mt-4 text-zinc-300 text-2xl font-bold">
            Chennai’s Most Trusted Real Estate Agency
          </p>
          <p className="mt-2 text-green-400 text-2xl font-bold tracking-wider">
            0% Brokerage*. 100% Delight
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-[1200px] h-20 bg-white rounded-[90px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.15)] mx-auto flex items-center p-2">
          <div className="flex-grow h-full bg-white rounded-[90px] border border-neutral-300 flex items-center">
            
            {/* City Selector */}
            <div className="w-52 h-full bg-emerald-50 rounded-l-[90px] flex items-center justify-center gap-x-3 cursor-pointer">
              <IndianFlagIcon />
              <span className="text-neutral-800 text-base font-medium">All Cities</span>
              <ChevronDown className="text-neutral-800" size={16} />
            </div>

            {/* Search Input */}
            <div className="flex-grow flex items-center px-6">
              <input 
                type="text"
                placeholder="Search for properties, locations, and projects"
                className="w-full h-full text-neutral-500 text-base font-medium font-['Raleway'] focus:outline-none"
              />
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-x-3 ml-4">
             <button className="size-12 bg-green-600 rounded-full flex items-center justify-center text-white shadow-[0px_2px_16px_0px_rgba(0,0,0,0.15)] hover:bg-green-700 transition">
              <MapPin size={24} />
            </button>
            <button className="size-12 bg-green-600 rounded-full flex items-center justify-center text-white shadow-[0px_2px_16px_0px_rgba(0,0,0,0.15)] hover:bg-green-700 transition">
              <LayoutGrid size={24} />
            </button>
             <button className="size-12 bg-green-600 rounded-full flex items-center justify-center text-white shadow-[0px_2px_16px_0px_rgba(0,0,0,0.15)] border-[1.50px] border-green-600 hover:bg-green-700 transition">
              <Search size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;