// // app/components/DetailedFooter.tsx
// "use client";

// import Image from 'next/image';
// import { Mail, Phone, MessageSquare, BookOpen, Facebook, Instagram, Linkedin, Pinterest } from 'lucide-react';
// import React from 'react';

// // Make sure these paths are correct for your logo and accreditation images
// import logoImage from './assets/logo.png';
// import crisilLogo from './assets/crisil-logo.png'; // Add this image
// import top100Logo from './assets/ZsDhr0aF0TcGJBw1_top3logo (1) 1.png';   // Add this image
// import narLogo from './assets/nar-logo.png';       // Add this image

// export default function DetailedFooter() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-black text-gray-300 py-16">
//       <div className="container mx-auto px-6">
//         {/* Top Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-gray-800 pb-12 mb-12">
//           {/* Left Column: Logo & Description */}
//           <div>
//             <div className="flex items-center gap-3 mb-6">
//               <Image src={logoImage} alt="Home Konnect Logo" width={50} height={50} className="invert brightness-0" />
//               <div>
//                 <span className="text-white text-2xl font-bold block">Home Konnect®</span>
//                 <span className="text-gray-400 text-sm">Connecting to your dream home</span>
//               </div>
//             </div>
//             <p className="text-gray-400 leading-relaxed max-w-xl">
//               Home Konnect is a boutique CRISIL Rated & RERA Certified Real estate advisory with a refreshingly honest approach. At Home Konnect, we provide end-to-end property solution for home buyers, owners, lessors and lessors. Our expert team of Real Estate advisors is known for forging & nurturing long standing relationships built on customers connect to their dream homes selling 10 lakh + sq ft. of residential space. Our team has some of the best professionals in the Real estate industry who specialize in finding the right property for our clients thereby creating long standing value for them.
//             </p>
//           </div>

//           {/* Right Column: Certifications & RERA */}
//           <div className="flex flex-col items-start lg:items-end text-left lg:text-right">
//             <div className="flex items-center gap-6 mb-6">
//               <Image src={crisilLogo} alt="CRISIL Logo" width={100} height={40} className="object-contain h-10 w-auto" />
//               <Image src={top100Logo} alt="Top 100 Logo" width={80} height={80} className="object-contain h-16 w-auto" />
//               <Image src={narLogo} alt="NAR Logo" width={100} height={40} className="object-contain h-10 w-auto" />
//             </div>
//             <p className="text-gray-400 mt-4">
//               RERA Agent Number TN/Agent/0572/2022
//             </p>
//           </div>
//         </div>

//         {/* Mid Section: Contact Us & Social Links */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12">
//           {/* Contact Us */}
//           <div>
//             <h3 className="text-white font-semibold text-xl mb-6">Contact Us</h3>
//             <div className="flex items-center space-x-4 mb-4">
//               <a href="mailto:info@homekonnect.com" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition">
//                 <Mail size={20} className="text-gray-300" />
//               </a>
//               <a href="tel:+911234567890" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition">
//                 <Phone size={20} className="text-gray-300" />
//               </a>
//               <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition">
//                 <MessageSquare size={20} className="text-gray-300" />
//               </a>
//               <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition">
//                 <BookOpen size={20} className="text-gray-300" />
//               </a>
//             </div>
//           </div>

//           {/* Social Links */}
//           <div className="md:text-right">
//             <h3 className="text-white font-semibold text-xl mb-6">Social Links</h3>
//             <div className="flex justify-start md:justify-end space-x-4">
//               <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition"><Facebook size={20} className="text-gray-300" /></a>
//               <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition"><Instagram size={20} className="text-gray-300" /></a>
//               <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition"><Linkedin size={20} className="text-gray-300" /></a>
//               <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition"><Pinterest size={20} className="text-gray-300" /></a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar: Copyright & Legal Links */}
//         <div className="border-t border-gray-800 pt-8 text-center sm:flex sm:justify-between sm:items-center text-gray-500 text-sm">
//           <p className="mb-4 sm:mb-0">&copy; HomeKonnect®.com {currentYear}. All rights reserved.</p>
//           <div className="flex justify-center space-x-4">
//             <a href="#" className="hover:text-green-500 transition">Privacy Policy</a>
//             <span className="text-gray-600">|</span>
//             <a href="#" className="hover:text-green-500 transition">Terms Of Use</a>
//             <span className="text-gray-600">|</span>
//             <a href="#" className="hover:text-green-500 transition">Site Map</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }






// app/components/DetailedFooter.tsx
"use client";

import Image from 'next/image';
import { Mail, Phone, MessageSquare, BookOpen, Facebook, Instagram, Linkedin } from 'lucide-react';
import React from 'react';

// // ✅ FIX 2: Corrected paths to navigate from the component file to the root public/assets folder.
// // The exact number of '../' might change if your component is nested differently.
// import logoImage from '../../public/assets/logo.png';
// import crisilLogo from '../../public/assets/crisil-logo.png';
// // ✅ FIX 1: Renamed the imported file. Make sure you rename the actual file in your folder too.
// import top100Logo from '../../public/assets/top100-logo.png';
// import narLogo from '../../public/assets/nar-logo.png';


// Make sure these paths are correct for your logo and accreditation images
import logoImage from './assets/logo.png';
import crisilLogo from './assets/crisil-logo.png'; // Add this image
import top100Logo from './assets/ZsDhr0aF0TcGJBw1_top3logo (1) 1.png';   // Add this image
import narLogo from './assets/narLogo.png';       // Add this image


export default function DetailedFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-16">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-gray-800 pb-12 mb-12">
          {/* Left Column: Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* ✅ FIX 3: Corrected className. 'invert' makes a dark logo white. 'brightness-0' made it black. */}
              <Image src={logoImage} alt="Home Konnect Logo" width={50} height={50} className="invert" />
              <div>
                <span className="text-white text-2xl font-bold block">Home Konnect®</span>
                <span className="text-gray-400 text-sm">Connecting to your dream home</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-xl">
              Home Konnect is a boutique CRISIL Rated & RERA Certified Real estate advisory with a refreshingly honest approach. At Home Konnect, we provide end-to-end property solution for home buyers, owners, lessors and lessors. Our expert team of Real Estate advisors is known for forging & nurturing long standing relationships built on customers connect to their dream homes selling 10 lakh + sq ft. of residential space. Our team has some of the best professionals in the Real estate industry who specialize in finding the right property for our clients thereby creating long standing value for them.
            </p>
          </div>

          {/* Right Column: Certifications & RERA */}
          <div className="flex flex-col items-start lg:items-end text-left lg:text-right">
            <div className="flex items-center gap-6 mb-6">
              {/* ✅ FIX 3: Removed conflicting h- and w- classes. width/height props handle sizing. */}
              <Image src={crisilLogo} alt="CRISIL Logo" width={100} height={40} className="object-contain" />
              <Image src={top100Logo} alt="Top 100 Logo" width={80} height={80} className="object-contain" />
              <Image src={narLogo} alt="NAR Logo" width={100} height={40} className="object-contain" />
            </div>
            <p className="text-gray-400 mt-4">
              RERA Agent Number TN/Agent/0572/2022
            </p>
          </div>
        </div>

        {/* Mid Section: Contact Us & Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12">
          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-6">Contact Us</h3>
            <div className="flex items-center space-x-4 mb-4">
              <a href="mailto:info@homekonnect.com" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition">
                <Mail size={20} className="text-gray-300" />
              </a>
              <a href="tel:+911234567890" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition">
                <Phone size={20} className="text-gray-300" />
              </a>
              <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition">
                <MessageSquare size={20} className="text-gray-300" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition">
                <BookOpen size={20} className="text-gray-300" />
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:text-right">
            <h3 className="text-white font-semibold text-xl mb-6">Social Links</h3>
            <div className="flex justify-start md:justify-end space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition"><Facebook size={20} className="text-gray-300" /></a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition"><Instagram size={20} className="text-gray-300" /></a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition"><Linkedin size={20} className="text-gray-300" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="border-t border-gray-800 pt-8 text-center sm:flex sm:justify-between sm:items-center text-gray-500 text-sm">
          <p className="mb-4 sm:mb-0">&copy; HomeKonnect®.com {currentYear}. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-green-500 transition">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-green-500 transition">Terms Of Use</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-green-500 transition">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}