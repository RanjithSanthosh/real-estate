// 'use client';
// // components/aboutPage/MessageFromCEOSection.tsx
// import Image from 'next/image';
// import React from 'react';

// // You'll need to provide an image for the CEO
// import ceoImage from '../homePage/assets/Choosing.png'; // Adjust path if needed

// export default function MessageFromCEOSection() {
//   return (
//     <section className="bg-yellow-600 text-white py-16 md:py-24">
//       <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left Column: CEO's Photo */}
//         <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
//           <Image
//             src={ceoImage}
//             alt="CEO of Home Konnect"
//             fill
//             style={{ objectFit: "cover" }}
//             sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 35vw"
//           />
//         </div>

//         {/* Right Column: CEO's Message */}
//         <div className="text-center lg:text-left order-1 lg:order-2">
//           <h3 className="text-gray-100 font-semibold text-sm mb-2">Our leadership</h3>
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
//             Message From The CEO
//           </h2>
//           <p className="text-gray-100 leading-relaxed mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0">
//             Since its inception in 2008, our core objective has been to help people buy their dream homes with transparency & trust. HomeKonnect.com provides information to scores of home buyers while offering them end-to-end services in their home buying journey. Our experienced team of consultants and associates provides unparallel support. We are blessed to have a team that has some of the best talent in the Real estate industry. Today, we are an Award-Winning Top Rated Agency with the support and patronage of Customers, Employees and Partners!
//           </p>
//           <p className="text-gray-200 font-semibold mb-2">
//             - Vijay K, Founder & CEO
//           </p>
//           <p className="text-gray-300 italic text-sm">
//             &quot;DO IT WITH PASSION OR NOT AT ALL&quot;
//           </p>
//           <p className="text-gray-300 italic text-sm">
//             ROSA NOUCHETTE CAREY
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



// components/aboutPage/MessageFromCEOSection.tsx
'use client';

import Image from 'next/image';
import React from 'react';

// You'll need to provide an image for the CEO
import ceoImage from '../../public/assets/aboutPage/CEOimg.png'; // Make sure this path is correct

// export default function MessageFromCEOSection() {
//   return (
//     <section className="bg-gray-50 pt-16 lg:pt-24">
//       {/* Top Yellow Banner */}
//       <div className="bg-yellow-600 text-white text-center pt-16 pb-32">
//         <div className="container mx-auto px-6">
//           <h3 className="text-gray-100 font-semibold text-sm mb-2">Our core objective</h3>
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Message From The CEO
//           </h2>
//           <p className="text-gray-200 leading-relaxed max-w-4xl mx-auto mb-4">
//             Since its inception in 2012, our core objective has been to help people buy their dream homes with transparency & trust. HomeKonnect.com provides information to scores of home buyers while offering them end-to-end assistance in the home-buying process through a mix of technology-enabled tools as well as brilliant on-ground support. We are blessed to have a team that has some of the best talent in the Real estate industry. Today, we are an Award Winning Top Rated Agency with the support and patronage of Customers, Employees and Partners!
//           </p>
//           <p className="font-semibold">
//             Vijay A - Founder & CEO
//           </p>
//         </div>
//       </div>

//       {/* Overlapping Card Section */}
//       <div className="container mx-auto px-6 -mt-24">
//         <div className="bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden">
          
//           {/* Left Side: CEO's Photo */}
//           <div className="w-full lg:w-1/3 flex-shrink-0">
//             <div className="relative h-64 lg:h-full">
//               <Image
//                 src={ceoImage}
//                 alt="CEO of Home Konnect, Vijay A"
//                 fill
//                 style={{ objectFit: "cover", objectPosition: "top" }}
//                 sizes="(max-width: 1024px) 100vw, 33vw"
//               />
//             </div>
//           </div>
          
//           {/* Right Side: Quote */}
//           <div className="w-full lg:w-2/3 bg-gradient-to-r from-gray-800 to-gray-900 text-white flex items-center justify-center p-8 md:p-12">
//             <blockquote className="text-center">
//               <p className="text-2xl md:text-3xl font-light italic mb-4">
//                 &quot;DO IT WITH PASSION OR NOT AT ALL&quot;
//               </p>
//               <footer className="text-gray-400 tracking-widest">
//                 - ROSA NOUCHETTE CAREY
//               </footer>
//             </blockquote>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

export default function MessageFromCEOSection() {
  return (
    <section className="bg-gray-50 pt-16 lg:pt-24 pb-8 lg:pb-12">
      {/* Top Yellow Banner */}
      <div className="bg-yellow-600 text-white text-center pt-16 pb-32">
        <div className="container mx-auto px-6">
          <h3 className="text-gray-100 font-semibold text-sm mb-2">Our core objective</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Message From The CEO
          </h2>
          <p className="text-gray-200 leading-relaxed max-w-4xl mx-auto mb-4">
            Since its inception in 2012, our core objective has been to help people buy their dream homes with transparency & trust. HomeKonnect.com provides information to scores of home buyers while offering them end-to-end assistance in the home-buying process through a mix of technology-enabled tools as well as brilliant on-ground support. We are blessed to have a team that has some of the best talent in the Real estate industry. Today, we are an Award Winning Top Rated Agency with the support and patronage of Customers, Employees and Partners!
          </p>
          <p className="font-semibold">
            Vijay A - Founder & CEO
          </p>
        </div>
      </div>

      {/* Overlapping Card Section */}
      <div className="container mx-auto px-6 -mt-24">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          
          {/* CEO's Photo - now takes full width */}
          <div className="w-full">
            {/* You might want to adjust the height to your liking */}
            <div className="relative h-64 sm:h-80 lg:h-96">
              <Image
                src={ceoImage}
                alt="CEO of Home Konnect, Vijay A"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                sizes="100vw"
              />
            </div>
          </div>
          
         

        </div>
      </div>
    </section>
  );
}