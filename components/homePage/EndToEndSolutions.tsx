// 'use client';

// import Image from 'next/image';
// import { ArrowRight } from 'lucide-react';
// import { motion, Variants } from 'framer-motion';
// // Make sure you have this image in your public/assets folder or adjust the path
// import eteImage from '../../public/assets/ETEproperty.png'; 

// interface Service {
//   title: string;
//   description: string;
// }

// export default function EndToEndSolutions() {
//   const services: Service[] = [
//     { title: "Search & Shortlist", description: "Search, shortlist and find the home of your dreams from our galore of options." },
//     { title: "Site Visit", description: "See and Feel the soul of your future home in person." },
//     { title: "Home Loan", description: "Get assistance and advice with the best experts in home loans." },
//     { title: "Legal Advice", description: "Get the best legal advice regarding anything related home buying." },
//     { title: "Closure", description: "Complete assistance until you get your home." },
//   ];

//   // Animation variants for staggering children
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 },
//     },
//   };

//   // Animation variants for individual items
//   const itemVariants: Variants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   return (
//     <>
//       {/* --- Main "End To End Solutions" Section --- */}
//       <section className="bg-white pt-16 md:pt-24">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={containerVariants}
//             className="grid lg:grid-cols-2 gap-12 items-center"
//           >
//             <motion.div variants={itemVariants}>
//               <Image
//                 src={eteImage}
//                 alt="End to end property solutions"
//                 width={600}
//                 height={400}
//                 className="rounded-2xl shadow-lg w-full h-auto"
//                 priority // Use priority for LCP image
//               />
//             </motion.div>
//             <motion.div variants={itemVariants} className="text-center lg:text-left">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">End To End Property Solutions</h2>
//               <p className="text-lg text-gray-600 mb-8">Buy sell or rent properties with Home Konnect</p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-green-600 transition-colors mx-auto lg:mx-0"
//               >
//                 Contact Us <ArrowRight size={20} />
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* --- Services Grid Section --- */}
//       <section className="bg-white pt-16 pb-16 md:pt-24 md:pb-24">
//         <div className="container mx-auto px-6">
//             <motion.div
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.2 }}
//                 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
//             >
//                 {services.map((service) => (
//                     <motion.div
//                         key={service.title}
//                         variants={itemVariants}
//                         className="bg-gray-100/60 p-6 rounded-xl text-center transition-shadow hover:shadow-lg hover:bg-white"
//                     >
//                         <h3 className="font-bold text-gray-800 text-lg mb-2">{service.title}</h3>
//                         <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }



'use client';

import Image from 'next/image';
import { Award, ShieldCheck, Users, ClipboardList, Smile, SlidersHorizontal, ArrowRight } from 'lucide-react';
import choosing from "./assets/ETEproperty.png";
import eteImage from "./assets/ETEproperty.png"; // Make sure you have this image in your assets folder
import { motion, Variants } from 'framer-motion';
import { useUI } from '../../app/context/UIContext';

interface Feature {
  icon: React.ElementType;
  title: string;
}

interface Statistic {
  value: string;
  label: string;
}

interface Service {
  title: string;
  description: string;
}

export default function WhyChooseUs() {
  const { openConsultationModal } = useUI();

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

  const services: Service[] = [
    { title: "Search & Shortlist", description: "Search, shortlist and find the home of your dreams from our galore of options." },
    { title: "Site Visit", description: "See and Feel the soul of your future home in person." },
    { title: "Home Loan", description: "Get assistance and advice with the best experts in home loans." },
    { title: "Legal Advice", description: "Get the best legal advice regarding anything related home buying." },
    { title: "Closure", description: "Complete assistance until you get your home." },
  ];

  // Animation variants for staggering children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // Animation variants for individual items
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* --- START: New "End To End Solutions" Section --- */}
      <section className="bg-white pt-16 md:pt-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <Image
                src={eteImage}
                alt="End to end property solutions"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">End To End Property Solutions</h2>
              <p className="text-lg text-gray-600 mb-8">Buy sell or rent properties with Home Konnect</p>
              <motion.button
                onClick={openConsultationModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-green-600 transition-colors mx-auto lg:mx-0"
              >
                Contact Us <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* --- END: New "End To End Solutions" Section --- */}

      {/* --- START: New "Services" Grid Section --- */}
      <section className="bg-white pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="container mx-auto px-6">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            >
                {services.map((service) => (
                    <motion.div
                        key={service.title}
                        variants={itemVariants}
                        className="bg-gray-100/60 p-6 rounded-xl text-center transition-shadow hover:shadow-lg hover:bg-white"
                    >
                        <h3 className="font-bold text-gray-800 text-lg mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>
      {/* --- END: New Sections --- */}

      
      {/* --- START: Your Existing "Why Choose Us" Section --- */}

      {/* --- END: Your Existing Section --- */}
    </>
  );
}