// // app/components/WhyChooseUs.tsx

// import Image from 'next/image';
// import { Award, ShieldCheck, Users, ClipboardList, Smile, SlidersHorizontal } from 'lucide-react'; // Importing Lucide Icons
// import choosing from "./assets/Choosing.png";
// interface Feature {
//   icon: React.ElementType; // Type for Lucide React components
//   title: string;
// }

// interface Statistic {
//   value: string;
//   label: string;
// }

// export default function WhyChooseUs() {
//   const features: Feature[] = [
//     { icon: Award, title: "Top Rated" },
//     { icon: ShieldCheck, title: "Verified" },
//     { icon: Users, title: "Expert Team" },
//     { icon: ClipboardList, title: "Transparency" }, // Changed from Shield to ClipboardList for better fit
//     { icon: Smile, title: "Delight" },
//     { icon: SlidersHorizontal, title: "Options" }, // Changed from Settings2 to SlidersHorizontal for better fit
//   ];

//   const statistics: Statistic[] = [
//     { value: "5000 +", label: "Properties Listed" },
//     { value: "20 +", label: "Locations" },
//     { value: "20 +", label: "Expert Agents" },
//     { value: "1000 ++", label: "Properties Sold" },
//   ];

//   return (
//     <section className="bg-gray-50 py-16 md:py-24">
//       <div className="container mx-auto px-6 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
//           Why should I choose Home Konnect®?
//         </h2>

//         {/* Features Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-16">
//           {features.map((feature, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <feature.icon size={48} className="text-yellow-600 mb-3" strokeWidth={1.5} />
//               <p className="text-gray-700 font-medium text-lg">{feature.title}</p>
//             </div>
//           ))}
//         </div>

//         {/* Image and Statistics Section */}
//         <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
//           <Image
//             src={choosing}
//             alt="City residential buildings"
//             width={1200} // Base width for image optimization
//             height={600} // Base height for image optimization
//             className="w-full h-full object-cover"
//             priority // Load this image as a priority
//           />
//           <div className="absolute inset-0 bg-black/40 flex items-end justify-center pb-8 md:pb-12">
//             {/* Statistics Overlay */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 w-full px-6 ">
//               {statistics.map((stat, index) => (
//                 <div key={index} className="flex flex-col items-center text-white">
//                   <span className="text-3xl md:text-4xl font-bold">{stat.value}</span>
//                   <span className="text-base md:text-lg text-gray-200">{stat.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// app/components/WhyChooseUs.tsx
'use client'; // Add this directive for client-side hooks and interactivity

import Image from 'next/image';
import { Award, ShieldCheck, Users, ClipboardList, Smile, SlidersHorizontal } from 'lucide-react';
import choosing from "./assets/Choosing.png";
import { motion } from 'framer-motion';

interface Feature {
  icon: React.ElementType;
  title: string;
}

interface Statistic {
  value: string;
  label: string;
}

export default function WhyChooseUs() {
  const features: Feature[] = [
    { icon: Award, title: "Top Rated" },
    { icon: ShieldCheck, title: "Verified" },
    { icon: Users, title: "Expert Team" },
    { icon: ClipboardList, title: "Transparency" },
    { icon: Smile, title: "Delight" },
    { icon: SlidersHorizontal, title: "Options" },
  ];

  const statistics: Statistic[] = [
    { value: "5000 +", label: "Properties Listed" },
    { value: "20 +", label: "Locations" },
    { value: "20 +", label: "Expert Agents" },
    { value: "1000 ++", label: "Properties Sold" },
  ];

  // Parent container variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Child item variants for fade-in-up effect
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
        >
          Why should I choose Home Konnect®?
        </motion.h2>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center p-2 rounded-lg"
            >
              <feature.icon size={48} className="text-yellow-600 mb-3" strokeWidth={1.5} />
              <p className="text-gray-700 font-medium text-lg">{feature.title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Image and Statistics Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
        >
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1.0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }} // Smooth ease for scaling
          >
            <Image
              src={choosing}
              alt="City residential buildings"
              width={1200}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/40 flex items-end justify-center pb-8 md:pb-12">
            {/* Statistics Overlay */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 w-full px-6 "
            >
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={containerVariants}
                  className="flex flex-col items-center text-white"
                >
                  <span className="text-3xl md:text-4xl font-bold">{stat.value}</span>
                  <span className="text-base md:text-lg text-gray-200">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}