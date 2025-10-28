
"use client";
import ConsultationModal from "../shared/ConsultationModal";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  Phone,
  Search,
  MapPin,
  SlidersHorizontal,
  Settings2,
  Heart,
  User,
  Menu,
  X,
  Gift,
} from "lucide-react";
import heroImage from "./assets/Hero.png";
import logoImage from "./assets/logo.png";
import { useUI } from "../../app/context/UIContext";
import { motion, AnimatePresence, Variants } from "framer-motion";

// --- Constants for Links ---
const NAV_LINKS = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/blogs" },
  { label: "Careers", href: "/careers" },
];

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

// --- New Mobile Navigation Component ---
function MobileNav({
  isOpen,
  onClose,
  selectedCity,
  setSelectedCity,
  cities,
  openConsultationModal,
  handleScrollToSearch,
  openLoginModal,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  cities: string[];
  openConsultationModal: () => void;
  handleScrollToSearch: () => void;
  openLoginModal: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
          className="fixed top-0 right-0 h-full w-full max-w-sm bg-gray-900/90 backdrop-blur-md z-50 p-6 flex flex-col lg:hidden"
        >
          <div className="flex justify-between items-center mb-10">
            <Image src={logoImage} alt="Logo" width={170} height={37} />
            <button onClick={onClose} className="text-white p-2">
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col gap-5 text-white text-xl font-medium overflow-y-auto">
            {/* City Selector */}
            <div className="flex items-center justify-between text-lg border-b border-gray-700 pb-4">
              <span className="font-semibold">Your City:</span>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-transparent border border-gray-600 rounded-md px-3 py-1 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="All Cities" className="text-black">
                  All Cities
                </option>
                {cities.map((city) => (
                  <option key={city} value={city} className="text-black">
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="hover:text-green-300 transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}

            {/* Resources Accordion */}
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none py-2">
                <span>Resources</span>
                <ChevronDown
                  size={20}
                  className="transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <ul className="pl-4 mt-2 flex flex-col gap-4 text-lg font-normal text-gray-300">
                {RESOURCE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="hover:text-green-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </nav>

          {/* Bottom Action Buttons */}
          <div className="mt-auto pt-8 flex flex-col gap-4">
            <motion.button
              onClick={() => {
                onClose();
                openConsultationModal();
              }}
              className="flex items-center justify-center gap-2 w-full bg-green-500 text-white px-4 py-3 rounded-full font-bold text-lg"
            >
              <Phone size={20} /> Call Us
            </motion.button>
            <div className="flex gap-4">
              <Link
                href="/favorites"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full bg-gray-700/50 text-white px-4 py-3 rounded-full font-semibold"
              >
                <Heart size={20} /> Favorites
              </Link>
              <button
                onClick={handleScrollToSearch}
                className="flex items-center justify-center gap-2 w-full bg-gray-700/50 text-white px-4 py-3 rounded-full font-semibold"
              >
                <Search size={20} /> Search
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- Main Hero Component ---
interface HeroProps {
  onSearchClick: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function Hero({
  onSearchClick,
  searchTerm,
  onSearchChange,
}: HeroProps) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarCityDropdownOpen, setIsNavbarCityDropdownOpen] =
    useState(false);
  const [isSearchBarCityDropdownOpen, setIsSearchBarCityDropdownOpen] =
    useState(false);
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [isPropertyDropdownOpen, setIsPropertyDropdownOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const navbarCityDropdownRef = useRef<HTMLDivElement>(null);
  const searchBarCityDropdownRef = useRef<HTMLDivElement>(null);
  const propertyDropdownRef = useRef<HTMLDivElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);

  const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
  const properties = [
    "Luxury Villa",
    "2BHK Apartment",
    "3BHK Flat",
    "Beachside House",
    "Farm Land",
  ];

  const {
    openLoginModal,
    openFilterModal,
    openConsultationModal,
    isConsultationModalOpen,
    closeConsultationModal,
    openOfferModal,
  } = useUI();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        navbarCityDropdownRef.current &&
        !navbarCityDropdownRef.current.contains(e.target as Node)
      ) {
        setIsNavbarCityDropdownOpen(false);
      }
      if (
        searchBarCityDropdownRef.current &&
        !searchBarCityDropdownRef.current.contains(e.target as Node)
      ) {
        setIsSearchBarCityDropdownOpen(false);
      }
      if (
        propertyDropdownRef.current &&
        !propertyDropdownRef.current.contains(e.target as Node)
      ) {
        setIsPropertyDropdownOpen(false);
      }
      if (
        resourcesDropdownRef.current &&
        !resourcesDropdownRef.current.contains(e.target as Node)
      ) {
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchRedirect = () => {
    const cityParam = selectedCity === "All Cities" ? "" : selectedCity;
    const termParam = searchTerm.trim();
    router.push(
      `/search?city=${encodeURIComponent(cityParam)}&q=${encodeURIComponent(
        termParam
      )}`
    );
    setIsPropertyDropdownOpen(false);
  };

  const handleSearchInputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearchRedirect();
    }
  };

  const handleScrollToSearch = () => {
    if (isMenuOpen) setIsMenuOpen(false);
    setTimeout(() => {
      searchBarRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 300);
  };

  // Animation Variants
  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.95 },
  };

  const heroTextContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const heroTextItemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const searchButtonContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 1.5 },
    },
  };

  const searchButtonVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <div className="relative h-[70vh] min-h-[600px] lg:h-screen">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.1], rotate: [0, -1], x: [0, -30] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <Image
            src={heroImage}
            alt="Beautiful modern house"
            fill
            style={{ objectFit: "cover" }}
            className="z-0"
            priority
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Consultation Modal */}
      <AnimatePresence>
        {isConsultationModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <ConsultationModal onClose={closeConsultationModal} />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* --- RENDER NEW MOBILE NAV --- */}
      <MobileNav
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        cities={cities}
        openConsultationModal={openConsultationModal}
        handleScrollToSearch={handleScrollToSearch}
        openLoginModal={openLoginModal}
      />

      {/* Navbar */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-6 py-4 flex justify-between items-center text-white"
        >
          <div>
            <Image
              src={logoImage}
              alt="Home Konnect Logo"
              width={170}
              height={37}
            />
          </div>

          <div className="hidden lg:flex items-center gap-8 font-medium">
            {/* Navbar Cities Dropdown */}
            <motion.div
              whileHover={{ y: -2 }}
              className="relative"
              ref={navbarCityDropdownRef}
            >
              <button
                onClick={() =>
                  setIsNavbarCityDropdownOpen(!isNavbarCityDropdownOpen)
                }
                className="flex items-center gap-2"
              >
                {selectedCity}
                <motion.div
                  animate={{ rotate: isNavbarCityDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>
              <AnimatePresence>
                {isNavbarCityDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-xl z-40 origin-top"
                  >
                    <ul className="py-1 text-gray-700">
                      {cities.map((city) => (
                        <li key={city}>
                          <button
                            onClick={() => {
                              setSelectedCity(city);
                              setIsNavbarCityDropdownOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {city}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {NAV_LINKS.map(link => (
              <Link key={link.href} href={link.href} className={link.href === '/home' ? "bg-white text-gray-700 px-4 py-2 rounded-3xl" : "hover:text-green-300"}>
                {link.label}
              </Link>
            ))}

            {/* Resources Dropdown */}
            <motion.div
              whileHover={{ y: -2 }}
              className="relative"
              ref={resourcesDropdownRef}
            >
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center gap-2 hover:text-green-300"
              >
                Resources
                <motion.div
                  animate={{ rotate: isResourcesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>
              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-40 origin-top-right"
                  >
                    <ul className="py-1 text-gray-700">
                      {RESOURCE_LINKS.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            onClick={() => setIsResourcesOpen(false)}
                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={openConsultationModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 border px-4 py-2 rounded-3xl font-medium"
            >
              <Phone size={16} /> Call Us
            </motion.button>

            <motion.button
              onClick={openOfferModal}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-white/20 rounded-full"
            >
              <Gift size={20} />
            </motion.button>
            <motion.button
              onClick={handleScrollToSearch}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hidden md:block p-2 hover:bg-white/20 rounded-full"
            >
              <Search size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hidden md:block p-2 hover:bg-white/20 rounded-full"
            >
              <Link href="/favorites" className="hover:text-green-300">
                <Heart size={20} />
              </Link>
            </motion.button>
            <motion.button
              onClick={openLoginModal}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <User size={22} className="cursor-pointer" />
            </motion.button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 z-50"
            >
                {isMenuOpen ? null : <Menu size={24} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Hero Text */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.div
          variants={heroTextContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.p
            variants={heroTextItemVariants}
            className="text-green-400 font-semibold text-lg mb-2"
          >
            0% Brokerage - 100% Delight
          </motion.p>
          <motion.h1
            variants={heroTextItemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-2 mb-2"
          >
            Connecting To Your <br /> Dream Home
          </motion.h1>
          <motion.p
            variants={heroTextItemVariants}
            className="text-lg text-gray-200 font-semibold"
          >
            Chennai's Most Trusted Real Estate Agency
          </motion.p>
        </motion.div>
      </div>

      {/* Search Bar */}
      <div
        ref={searchBarRef}
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 w-[90%] lg:w-3/4 max-w-4xl"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: [0, -12, 0], opacity: 1 }}
          transition={{
            y: { duration: 4, repeat: Infinity, repeatType: "mirror" },
            opacity: { duration: 0.6, delay: 1.2 },
          }}
        >
          <div className="bg-white rounded-xl md:rounded-full shadow-2xl p-4 md:p-2 flex flex-col md:flex-row items-center gap-4 md:gap-2 relative">
            {/* City Selector */}
            <div
              ref={searchBarCityDropdownRef}
              className="relative flex items-center gap-2 w-full md:w-auto md:border-r pr-4 pl-4 py-2 md:py-0 cursor-pointer"
            >
              <MapPin className="text-gray-400" size={20} />
              <button
                onClick={() =>
                  setIsSearchBarCityDropdownOpen(!isSearchBarCityDropdownOpen)
                }
                className="font-semibold text-gray-700 flex items-center gap-1"
              >
                {selectedCity}
                <ChevronDown size={16} className="text-gray-400" />
              </button>

              <AnimatePresence>
                {isSearchBarCityDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-40 z-30"
                  >
                    <ul className="text-gray-700 text-sm py-1">
                      {cities.map((city) => (
                        <li key={city}>
                          <button
                            className="w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={() => {
                              setSelectedCity(city);
                              setIsSearchBarCityDropdownOpen(false);
                            }}
                          >
                            {city}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Property Input with Suggestions */}
            <div ref={propertyDropdownRef} className="relative flex-grow w-full">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by property name or type..."
                className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-gray-800 placeholder:text-gray-500"
                value={searchTerm}
                onFocus={() => setIsPropertyDropdownOpen(true)}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={handleSearchInputKeyDown}
              />

              <AnimatePresence>
                {isPropertyDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 z-30"
                  >
                    <ul className="text-gray-700 text-sm py-1">
                      {properties
                        .filter((p) =>
                          p.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((property) => (
                          <li key={property}>
                            <button
                              className="w-full text-left px-4 py-2 hover:bg-gray-100"
                              onClick={() => {
                                onSearchChange(property);
                                setIsPropertyDropdownOpen(false);
                              }}
                            >
                              {property}
                            </button>
                          </li>
                        ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Buttons */}
            <motion.div
              variants={searchButtonContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2 p-2 md:p-0"
            >
              <motion.button
                variants={searchButtonVariants}
                onClick={openFilterModal}
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-green-500 text-white rounded-full"
                aria-label="Open filters"
              >
                <SlidersHorizontal size={20} />
              </motion.button>
              <motion.button
                variants={searchButtonVariants}
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-green-500 text-white rounded-full"
                aria-label="Advanced settings"
              >
                <Link href="/map-search" passHref>
                  <Settings2 size={20} />
                </Link>
              </motion.button>
              <motion.button
                variants={searchButtonVariants}
                onClick={handleSearchRedirect}
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-green-500 text-white rounded-full"
                aria-label="Search properties"
              >
                <Search size={20} />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}