// // app/components/AdvantageSection.tsx
// "use client";

// import { ShieldCheck } from 'lucide-react';

// interface Advantage {
//   icon: React.ElementType;
//   title: string;
//   description: string;
// }

// const advantageData: Advantage[] = [
//   {
//     icon: ShieldCheck,
//     title: "Validated Experts",
//     description: "Choose from a team of seasoned professionals, advisors & domain experts.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "We Stand For Ethics",
//     description: "We uphold the highest levels of transparency & ethics.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Post Transaction Support",
//     description: "We provide transaction & post transaction support as we firmly believe in long standing relationships.",
//   },
// ];

// export default function AdvantageSection() {
//   return (
//     <section className="bg-yellow-600 text-white">
//       <div className="container mx-auto px-6 py-16 md:py-24">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
//             The Home Konnect® Advantage
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
//           {advantageData.map((advantage, index) => (
//             <div key={index} className="flex flex-col items-center text-center">
//               <div className="border-2 border-white/50 rounded-full p-4 mb-5">
//                 <advantage.icon className="h-10 w-10 text-white" strokeWidth={1.5} />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
//               <p className="text-gray-200 max-w-xs">
//                 {advantage.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




// app/components/AdvantageSection.tsx
"use client";

import { ShieldCheck } from 'lucide-react';
// Import motion and the Variants type from framer-motion
import { motion, Variants } from 'framer-motion';

interface Advantage {
  icon: React.ElementType;
  title: string;
  description: string;
}

const advantageData: Advantage[] = [
  {
    icon: ShieldCheck,
    title: "Validated Experts",
    description: "Choose from a team of seasoned professionals, advisors & domain experts.",
  },
  {
    icon: ShieldCheck,
    title: "We Stand For Ethics",
    description: "We uphold the highest levels of transparency & ethics.",
  },
  {
    icon: ShieldCheck,
    title: "Post Transaction Support",
    description: "We provide transaction & post transaction support as we firmly believe in long standing relationships.",
  },
];

export default function AdvantageSection() {
  // Animation variants for the container to orchestrate staggering
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for individual items to fade in and slide up
  const itemVariants: Variants = {
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
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-yellow-600 text-white"
    >
      <div className="container mx-auto px-6 py-16 md:py-24">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
            The Home Konnect® Advantage
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants} // Reuse container for staggering the grid items
          className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12"
        >
          {advantageData.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="border-2 border-white/50 rounded-full p-4 mb-5">
                <advantage.icon className="h-10 w-10 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
              <p className="text-gray-200 max-w-xs">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}