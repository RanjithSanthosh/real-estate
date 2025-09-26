// 'use client';
// // components/aboutPage/VisionMissionSection.tsx
// import Image from 'next/image';
// import React from 'react';

// export default function VisionMissionSection() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Our Vision */}
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           <div className="relative w-full md:w-1/2 min-h-[250px] md:min-h-[300px] rounded-lg overflow-hidden shadow-md">
//             <Image
//               src="https://images.unsplash.com/photo-1596207881024-d249f70ce1d0?q=80&w=2070&auto=format&fit=crop"
//               alt="Modern house architecture"
//               fill
//               style={{ objectFit: "cover" }}
//             />
//           </div>
//           <div className="md:w-1/2 text-center md:text-left">
//             <h3 className="text-green-600 font-semibold text-sm mb-2">Our Foundation</h3>
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
//             <p className="text-gray-600 leading-relaxed">
//               Providing genuine delightful experiences to our Customers.
//             </p>
//           </div>
//         </div>

//         {/* Our Mission */}
//         <div className="flex flex-col md:flex-row-reverse items-center gap-8 lg:mt-0 mt-12">
//           <div className="relative w-full md:w-1/2 min-h-[250px] md:min-h-[300px] rounded-lg overflow-hidden shadow-md">
//             <Image
//               src="https://images.unsplash.com/photo-1554995207-c18c69ef2e3f?q=80&w=2070&auto=format&fit=crop"
//               alt="House model and architectural tools"
//               fill
//               style={{ objectFit: "cover" }}
//             />
//           </div>
//           <div className="md:w-1/2 text-center md:text-right">
//             <h3 className="text-green-600 font-semibold text-sm mb-2">Our Purpose</h3>
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
//             <p className="text-gray-600 leading-relaxed">
//               To be the top-pick for our customers in their journey of exploring, buying, selling, renting & financing their dream homes. Our formidable team believes in creating long standing value for our Customers guided by the core principles of integrity, professionalism and ethics.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// components/aboutPage/VisionMissionSection.tsx
// 'use client';

// import Image from 'next/image';
// import React from 'react';
// import visionImage from '../../public/assets/aboutPage/ourVision.png';
// import missionImage from '../../public/assets/aboutPage/ourMission.png';

// export default function VisionMissionSection() {
//   return (
//     // ✅ Changed background to white and adjusted padding
//     <section className="bg-white py-16 lg:py-24 ">
//       <div className="container mx-auto px-6 space-y-20 lg:space-y-28">
        
//         {/* Our Vision Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Image on the left */}
//           <div>
//             <Image
//               src={visionImage}
//               alt="A modern and beautiful house representing the company's vision"
//               width={600}
//               height={400}
//               className="w-full h-auto" // ✅ Removed rounded corners and shadow
//             />
//           </div>
//           {/* Text on the right */}
//           <div className="text-left"> {/* ✅ Ensured text is always left-aligned */}
//             <p className="text-gray-500 font-semibold mb-2">What Home Konnect® envisions</p> {/* ✅ Updated subtitle */}
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Our Vision</h2>
//             <p className="text-gray-600 text-lg leading-relaxed">
//               Providing genuine delightful experiences to our Customers.
//             </p>
//           </div>
//         </div>

//         {/* Our Mission Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Text on the left */}
//           <div className="lg:order-last"> {/* ✅ Use order to swap columns on desktop */}
//             <Image
//               src={missionImage}
//               alt="House model on blueprints representing the company's mission"
//               width={600}
//               height={400}
//               className="w-full h-auto" // ✅ Removed rounded corners and shadow
//             />
//           </div>
//           {/* Image on the right */}
//           <div className="text-left"> {/* ✅ Ensured text is always left-aligned */}
//             <p className="text-gray-500 font-semibold mb-2">What Home Konnect® stands for</p> {/* ✅ Updated subtitle */}
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Our Mission</h2>
//             <p className="text-gray-600 text-lg leading-relaxed">
//               To be the top-pick for our customers in their journey of exploring, buying, selling, renting & financing their dream home. We are fiercely passionate about creating long standing value for our Customers guided by our core principles of integrity, professionalism and ethics.
//             </p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


'use client';

import Image from 'next/image';
import React from 'react';
import visionImage from '../../public/assets/aboutPage/ourVision.png';
import missionImage from '../../public/assets/aboutPage/ourMission.png';

export default function VisionMissionSection() {
  return (
    // ✅ Reduced vertical padding from py-16 lg:py-24 to py-12 lg:py-20
    <section className="bg-white py-12 lg:py-20 pb-0 lg:pb-0 ">
      {/* ✅ Reduced space between sections from space-y-20 lg:space-y-28 to space-y-12 lg:space-y-16 */}
      <div className="container mx-auto px-6 space-y-12 lg:space-y-16">
        
        {/* Our Vision Section */}
        {/* ✅ Reduced gap from gap-12 to gap-8 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image on the left */}
          <div>
            <Image
              src={visionImage}
              alt="A modern and beautiful house representing the company's vision"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
          {/* Text on the right */}
          <div className="text-left">
            <p className="text-gray-500 font-semibold mb-2">What Home Konnect® envisions</p>
            {/* ✅ Reduced font size from text-4xl lg:text-5xl to text-3xl lg:text-4xl */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Our Vision</h2>
            {/* ✅ Reduced font size from text-lg to text-base (standard paragraph size) */}
            <p className="text-gray-600 text-base leading-relaxed">
              Providing genuine delightful experiences to our Customers.
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        {/* ✅ Reduced gap from gap-12 to gap-8 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image on the right */}
          <div className="lg:order-last">
            <Image
              src={missionImage}
              alt="House model on blueprints representing the company's mission"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
          {/* Text on the left */}
          <div className="text-left">
            <p className="text-gray-500 font-semibold mb-2">What Home Konnect® stands for</p>
            {/* ✅ Reduced font size from text-4xl lg:text-5xl to text-3xl lg:text-4xl */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
            {/* ✅ Reduced font size from text-lg to text-base */}
            <p className="text-gray-600 text-base leading-relaxed">
              To be the top-pick for our customers in their journey of exploring, buying, selling, renting & financing their dream home. We are fiercely passionate about creating long standing value for our Customers guided by our core principles of integrity, professionalism and ethics.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}