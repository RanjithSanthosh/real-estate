




// // app/components/WhyChooseUs.tsx
// 'use client'; // Add this directive for client-side hooks and interactivity

// import Image from 'next/image';
// import { Award, ShieldCheck, Users, ClipboardList, Smile, SlidersHorizontal } from 'lucide-react';
// import choosing from "./assets/chinese-city.png";
// import { motion } from 'framer-motion';

// interface Feature {
//   icon: React.ElementType;
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
//     { icon: ClipboardList, title: "Transparency" },
//     { icon: Smile, title: "Delight" },
//     { icon: SlidersHorizontal, title: "Options" },
//   ];

//   const statistics: Statistic[] = [
//     { value: "5000 +", label: "Properties Listed" },
//     { value: "20 +", label: "Locations" },
//     { value: "20 +", label: "Expert Agents" },
//     { value: "1000 ++", label: "Properties Sold" },
//   ];

//   // Parent container variants for staggering children
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   // Child item variants for fade-in-up effect
//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
//       <div className="container mx-auto px-6 text-center">
//         <motion.h2
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
//         >
//           Why should I choose Home Konnect®?
//         </motion.h2>

//         {/* Features Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-16"
//         >
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               variants={containerVariants}
//               whileHover={{ scale: 1.05, y: -5 }}
//               transition={{ duration: 0.2 }}
//               className="flex flex-col items-center p-2 rounded-lg"
//             >
//               <feature.icon size={48} className="text-yellow-600 mb-3" strokeWidth={1.5} />
//               <p className="text-gray-700 font-medium text-lg">{feature.title}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Image and Statistics Section */}
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
//         >
//           <motion.div
//             initial={{ scale: 1.1 }}
//             whileInView={{ scale: 1.0 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }} // Smooth ease for scaling
//           >
//             <Image
//               src={choosing}
//               alt="City residential buildings"
//               width={1200}
//               height={600}
//               className="w-full h-full object-cover"
//               priority
//             />
//           </motion.div>

//           <div className="absolute inset-0  flex items-end justify-center pb-8 md:pb-12 m-6 ">
//             {/* Statistics Overlay */}
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 w-full px-6  bg-white p-4 rounded rounded-2xl"
//             >
//               {statistics.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   variants={containerVariants}
//                   className="flex flex-col items-center text-black  "
//                 >
//                   <span className="text-3xl md:text-4xl font-bold">{stat.value}</span>
//                   <span className="text-base md:text-lg text-black">{stat.label}</span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




// 'use client';

// import Image from 'next/image';
// // Removed lucide-react imports as we're using custom SVGs
// import { motion, Variants } from 'framer-motion';
// import choosingImage from "./assets/chinese-city.png"; // Make sure this path is correct

// // --- Custom SVG Icon Components (EXACTLY matching your screenshot) ---
// // Top Rated (Trophy) Icon
// const CustomAwardIcon = () => (
//    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M29.0007 40.2002C12.8727 40.2002 10.0156 24.1267 9.50949 11.3782C9.36871 7.83198 9.29831 6.05887 10.6303 4.41834C11.9623 2.77784 13.5566 2.50884 16.745 1.97088C19.8924 1.43985 24.0066 1 29.0007 1C33.9946 1 38.1089 1.43985 41.2561 1.97088C44.4448 2.50884 46.0388 2.77784 47.3708 4.41834C48.703 6.05887 48.6325 7.83198 48.4916 11.3782C47.9857 24.1267 45.1285 40.2002 29.0007 40.2002Z" stroke="#D09E03" stroke-width="2"/>
// <path d="M48.6004 9.40004L51.2565 10.2854C54.0288 11.2095 55.4148 11.6715 56.2075 12.7715C57.0005 13.8714 57.0005 15.3325 57.0002 18.2546V18.4577C57.0002 20.8678 57.0002 22.0728 56.42 23.0588C55.8398 24.0447 54.7865 24.6299 52.6797 25.8003L44.4004 30.4001" stroke="#D09E03" stroke-width="2"/>
// <path d="M9.39987 9.40004L6.74373 10.2854C3.97154 11.2095 2.58545 11.6715 1.79269 12.7715C0.999889 13.8714 0.999918 15.3325 1 18.2546V18.4577C1.00009 20.8678 1.00011 22.0728 1.58025 23.0588C2.16036 24.0447 3.21378 24.6299 5.32056 25.8003L13.5999 30.4001" stroke="#D09E03" stroke-width="2"/>
// <path d="M29 43.0002V48.6002" stroke="#D09E03" stroke-width="2" stroke-linecap="round"/>
// <path d="M38.8003 57.0003H19.2002L20.15 52.2512C20.4118 50.9424 21.5609 50.0002 22.8957 50.0002H35.1048C36.4396 50.0002 37.5887 50.9424 37.8505 52.2512L38.8003 57.0003Z" stroke="#D09E03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M45.8004 57.0003H12.2002" stroke="#D09E03" stroke-width="2" stroke-linecap="round"/>
// </svg>
// );

// // Verified (Shield Check) Icon
// const CustomShieldCheckIcon = () => (
//     <svg width="50" height="55" viewBox="0 0 50 55" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M34 21.6111L22 33.3889L16 27.5M1 6.88889V27.664C1 36.5863 6.13606 44.7427 14.2669 48.7327L25 54L35.7331 48.7327C43.864 44.7427 49 36.5863 49 27.664V6.88889L46.909 7.11691C39.5626 7.91806 32.1736 6.02917 26.1589 1.81249L25 1L23.8411 1.81249C17.8263 6.02917 10.4373 7.91806 3.09097 7.11691L1 6.88889Z" stroke="#D09E03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>

// );

// // Expert Team (Users) Icon
// const CustomUsersIcon = () => (
//    <svg width="70" height="58" viewBox="0 0 70 58" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M16.4546 53.873C16.4546 42.1801 30.3637 44.5199 30.3637 39.8434C30.5191 38.1827 30.069 36.5218 29.0964 35.1669C27.9871 34.1151 27.1134 32.8403 26.5327 31.4263C25.9519 30.0124 25.6775 28.4914 25.7273 26.9636C25.5764 24.3435 26.4658 21.7698 28.2022 19.8019C29.9385 17.834 32.3815 16.631 35 16.4545C37.6185 16.631 40.0615 17.834 41.7979 19.8019C43.5343 21.7698 44.4237 24.3435 44.2727 26.9636C44.3283 28.4959 44.0519 30.022 43.4624 31.4375C42.8728 32.8529 41.9842 34.124 40.8573 35.1638C39.9238 36.5366 39.4925 38.1895 39.6364 39.8434C39.6364 44.5199 53.5454 42.1832 53.5454 53.8761C53.5454 53.8761 49.8518 56.6394 35 56.6394C20.1482 56.6394 16.4546 53.873 16.4546 53.873Z" stroke="#D09E03" stroke-width="2" stroke-miterlimit="10"/>
// <path d="M14.8658 41.0798C13.1071 40.9994 11.5554 40.8789 10.1924 40.7274C6.99291 40.6639 3.8497 39.8744 1 38.4185C1 26.7256 14.9091 29.0654 14.9091 24.3889C15.0645 22.7282 14.6145 21.0673 13.6418 19.7123C12.5326 18.6606 11.6588 17.3858 11.0781 15.9718C10.4973 14.5578 10.2229 13.0368 10.2727 11.5091C10.1218 8.88899 11.0112 6.31523 12.7476 4.34733C14.484 2.37943 16.9269 1.17648 19.5454 1C22.1639 1.17648 24.6069 2.37943 26.3433 4.34733C28.0797 6.31523 28.9691 8.88899 28.8181 11.5091" stroke="#D09E03" stroke-width="2" stroke-miterlimit="10"/>
// <path d="M55.1344 41.0798C56.8931 40.9994 58.4447 40.8789 59.8078 40.7274C63.0073 40.6639 66.1505 39.8744 69.0002 38.4185C69.0002 26.7256 55.0911 29.0654 55.0911 24.3889C54.9356 22.7282 55.3857 21.0673 56.3584 19.7123C57.4676 18.6606 58.3414 17.3858 58.9221 15.9718C59.5028 14.5578 59.7773 13.0368 59.7275 11.5091C59.8784 8.88899 58.989 6.31523 57.2526 4.34733C55.5162 2.37943 53.0732 1.17648 50.4547 1C47.8362 1.17648 45.3933 2.37943 43.6569 4.34733C41.9205 6.31523 41.0311 8.88899 41.182 11.5091" stroke="#D09E03" stroke-width="2" stroke-miterlimit="10"/>
// </svg>

// );

// // Transparency (ClipboardList/Lock) Icon
// const CustomClipboardListIcon = () => (
//     <svg width="51" height="57" viewBox="0 0 51 57" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M49.9725 26.0427C49.9725 39.4813 40.2165 52.0679 26.8879 55.7504C25.981 55.9978 24.9916 55.9978 24.0847 55.7504C10.756 52.0679 1 39.4813 1 26.0427V13.9781C1 11.7246 2.70389 9.16886 4.81999 8.31693L20.1274 2.05118C23.5626 0.649608 27.4375 0.649608 30.8727 2.05118L46.18 8.31693C48.2687 9.16886 50 11.7246 50 13.9781L49.9725 26.0427Z" stroke="#D09E03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M25.4866 29.8352C28.5222 29.8352 30.9829 27.3745 30.9829 24.3388C30.9829 21.3033 28.5222 18.8425 25.4866 18.8425C22.4509 18.8425 19.9902 21.3033 19.9902 24.3388C19.9902 27.3745 22.4509 29.8352 25.4866 29.8352Z" stroke="#D09E03" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M25.4863 29.8352V38.0797" stroke="#D09E03" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>

// );

// // Delight (Smile) Icon
// const CustomSmileIcon = () => (
//     <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M27 0C12.0382 0 0 12.0382 0 27C0 41.9618 12.0382 54 27 54C41.9618 54 54 41.9618 54 27C54 12.0382 41.9618 0 27 0ZM27 51.7493C13.3882 51.7493 2.2507 40.6118 2.2507 27C2.2507 13.3882 13.3882 2.2507 27 2.2507C40.6118 2.2507 51.7493 13.3882 51.7493 27C51.7493 40.6118 40.6118 51.7493 27 51.7493Z" fill="#D09E03"/>
// <path d="M41.063 33.4125C40.4998 33.1868 39.8248 33.3007 39.6012 33.8618C37.1269 38.6986 32.288 41.6243 27.0019 41.6243C21.6019 41.6243 16.8769 38.6986 14.4026 33.8618C14.1769 33.2986 13.5019 33.075 12.9408 33.4125C12.3776 33.6382 12.154 34.3132 12.3776 34.8743C15.1894 40.3861 20.7033 43.875 27.0019 43.875C33.1887 43.875 38.8144 40.3882 41.5144 34.8743C41.8519 34.3111 41.6262 33.6361 41.0651 33.4125H41.063Z" fill="#D09E03"/>
// <path d="M21.375 21.3743C21.375 23.239 19.8647 24.7493 18 24.7493C16.1353 24.7493 14.625 23.239 14.625 21.3743C14.625 19.5096 16.1353 17.9993 18 17.9993C19.8647 17.9993 21.375 19.5096 21.375 21.3743Z" fill="#D09E03"/>
// <path d="M39.375 21.3743C39.375 23.239 37.8647 24.7493 36 24.7493C34.1353 24.7493 32.625 23.239 32.625 21.3743C32.625 19.5096 34.1353 17.9993 36 17.9993C37.8647 17.9993 39.375 19.5096 39.375 21.3743Z" fill="#D09E03"/>
// </svg>

// );

// // Options (Sliders Horizontal) Icon
// const CustomSlidersHorizontalIcon = () => (
//     <svg width="56" height="43" viewBox="0 0 56 43" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M1 7.83334H31.375" stroke="#D09E03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M44.875 7.83334H55" stroke="#D09E03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M24.625 35.1667H55" stroke="#D09E03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M1 35.1667H11.125" stroke="#D09E03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M17.875 42C21.6029 42 24.625 38.9406 24.625 35.1667C24.625 31.3927 21.6029 28.3333 17.875 28.3333C14.1471 28.3333 11.125 31.3927 11.125 35.1667C11.125 38.9406 14.1471 42 17.875 42Z" stroke="#D09E03" stroke-width="2"/>
// <path d="M38.125 14.6667C41.8529 14.6667 44.875 11.6073 44.875 7.83333C44.875 4.05939 41.8529 1 38.125 1C34.3971 1 31.375 4.05939 31.375 7.83333C31.375 11.6073 34.3971 14.6667 38.125 14.6667Z" stroke="#D09E03" stroke-width="2"/>
// </svg>

// );


// interface Feature {
//   icon: React.ElementType; // Now points to our custom SVG components
//   title: string;
// }

// interface Statistic {
//   value: string;
//   label: string;
// }

// export default function WhyChooseUs() {
//   const features: Feature[] = [
//     { icon: CustomAwardIcon, title: "Top Rated" }, // Using custom SVG components
//     { icon: CustomShieldCheckIcon, title: "Verified" },
//     { icon: CustomUsersIcon, title: "Expert Team" },
//     { icon: CustomClipboardListIcon, title: "Transparency" },
//     { icon: CustomSmileIcon, title: "Delight" },
//     { icon: CustomSlidersHorizontalIcon, title: "Options" },
//   ];

//   const statistics: Statistic[] = [
//     { value: "5000 +", label: "Properties Listed" },
//     { value: "20 +", label: "Locations" },
//     { value: "20 +", label: "Expert Agents" },
//     { value: "1000 ++", label: "Properties Sold" },
//   ];

//   // Parent container variants for staggering children
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   // Child item variants for fade-in-up effect
//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
//       <div className="container mx-auto px-6 text-center">
//         <motion.h2
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
//         >
//           Why should I choose Home Konnect®?
//         </motion.h2>

//         {/* Features Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-16 relative"
//         >
//             {/* Vertical dividers */}
//             {/* These divs create the vertical lines between the icons */}
//             <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[calc(100%/6)] h-16 w-px bg-gray-200"></div>
//             <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[calc(200%/6)] h-16 w-px bg-gray-200"></div>
//             <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[calc(300%/6)] h-16 w-px bg-gray-200"></div>
//             <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[calc(400%/6)] h-16 w-px bg-gray-200"></div>
//             <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[calc(500%/6)] h-16 w-px bg-gray-200"></div>


//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ scale: 1.05, y: -5 }}
//               transition={{ duration: 0.2 }}
//               className="flex flex-col items-center p-2 rounded-lg"
//             >
//               {/* Render the custom SVG component */}
//               <feature.icon /> 
//               <p className="text-gray-700 font-medium text-lg mt-2">{feature.title}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Image and Statistics Section */}
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="w-full max-w-5xl mx-auto relative rounded-3xl shadow-2xl overflow-hidden"
//         >
//           <Image
//             src={choosingImage}
//             alt="City residential buildings"
//             width={1200}
//             height={600}
//             className="w-full h-full object-cover"
//             priority
//           />

//           {/* Statistics Overlay - positioned absolutely over the image */}
//           <div className="absolute bottom-0 left-0 right-0 m-6 bg-white p-4 rounded-2xl"> {/* Combined classes for margin, background, padding, and border radius */}
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 w-full"
//             >
//               {statistics.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   variants={itemVariants}
//                   className="flex flex-col items-center text-gray-800"
//                 >
//                   <span className="text-3xl md:text-4xl font-bold">{stat.value}</span>
//                   <span className="text-base md:text-lg text-gray-600">{stat.label}</span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }









'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import choosingImage from "./assets/chinese-city.png";

// --- Custom SVG Icon Components (with corrected camelCase props) ---

const CustomAwardIcon = () => (
   <svg width="48" height="48" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.0007 40.2002C12.8727 40.2002 10.0156 24.1267 9.50949 11.3782C9.36871 7.83198 9.29831 6.05887 10.6303 4.41834C11.9623 2.77784 13.5566 2.50884 16.745 1.97088C19.8924 1.43985 24.0066 1 29.0007 1C33.9946 1 38.1089 1.43985 41.2561 1.97088C44.4448 2.50884 46.0388 2.77784 47.3708 4.41834C48.703 6.05887 48.6325 7.83198 48.4916 11.3782C47.9857 24.1267 45.1285 40.2002 29.0007 40.2002Z" stroke="#D09E03" strokeWidth="2"/>
    <path d="M48.6004 9.40004L51.2565 10.2854C54.0288 11.2095 55.4148 11.6715 56.2075 12.7715C57.0005 13.8714 57.0005 15.3325 57.0002 18.2546V18.4577C57.0002 20.8678 57.0002 22.0728 56.42 23.0588C55.8398 24.0447 54.7865 24.6299 52.6797 25.8003L44.4004 30.4001" stroke="#D09E03" strokeWidth="2"/>
    <path d="M9.39987 9.40004L6.74373 10.2854C3.97154 11.2095 2.58545 11.6715 1.79269 12.7715C0.999889 13.8714 0.999918 15.3325 1 18.2546V18.4577C1.00009 20.8678 1.00011 22.0728 1.58025 23.0588C2.16036 24.0447 3.21378 24.6299 5.32056 25.8003L13.5999 30.4001" stroke="#D09E03" strokeWidth="2"/>
    <path d="M29 43.0002V48.6002" stroke="#D09E03" strokeWidth="2" strokeLinecap="round"/>
    <path d="M38.8003 57.0003H19.2002L20.15 52.2512C20.4118 50.9424 21.5609 50.0002 22.8957 50.0002H35.1048C36.4396 50.0002 37.5887 50.9424 37.8505 52.2512L38.8003 57.0003Z" stroke="#D09E03" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M45.8004 57.0003H12.2002" stroke="#D09E03" strokeWidth="2" strokeLinecap="round"/>
   </svg>
);

const CustomShieldCheckIcon = () => (
    <svg width="50" height="55" viewBox="0 0 50 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34 21.6111L22 33.3889L16 27.5M1 6.88889V27.664C1 36.5863 6.13606 44.7427 14.2669 48.7327L25 54L35.7331 48.7327C43.864 44.7427 49 36.5863 49 27.664V6.88889L46.909 7.11691C39.5626 7.91806 32.1736 6.02917 26.1589 1.81249L25 1L23.8411 1.81249C17.8263 6.02917 10.4373 7.91806 3.09097 7.11691L1 6.88889Z" stroke="#D09E03" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const CustomUsersIcon = () => (
   <svg width="70" height="58" viewBox="0 0 70 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.4546 53.873C16.4546 42.1801 30.3637 44.5199 30.3637 39.8434C30.5191 38.1827 30.069 36.5218 29.0964 35.1669C27.9871 34.1151 27.1134 32.8403 26.5327 31.4263C25.9519 30.0124 25.6775 28.4914 25.7273 26.9636C25.5764 24.3435 26.4658 21.7698 28.2022 19.8019C29.9385 17.834 32.3815 16.631 35 16.4545C37.6185 16.631 40.0615 17.834 41.7979 19.8019C43.5343 21.7698 44.4237 24.3435 44.2727 26.9636C44.3283 28.4959 44.0519 30.022 43.4624 31.4375C42.8728 32.8529 41.9842 34.124 40.8573 35.1638C39.9238 36.5366 39.4925 38.1895 39.6364 39.8434C39.6364 44.5199 53.5454 42.1832 53.5454 53.8761C53.5454 53.8761 49.8518 56.6394 35 56.6394C20.1482 56.6394 16.4546 53.873 16.4546 53.873Z" stroke="#D09E03" strokeWidth="2" strokeMiterlimit="10"/>
        <path d="M14.8658 41.0798C13.1071 40.9994 11.5554 40.8789 10.1924 40.7274C6.99291 40.6639 3.8497 39.8744 1 38.4185C1 26.7256 14.9091 29.0654 14.9091 24.3889C15.0645 22.7282 14.6145 21.0673 13.6418 19.7123C12.5326 18.6606 11.6588 17.3858 11.0781 15.9718C10.4973 14.5578 10.2229 13.0368 10.2727 11.5091C10.1218 8.88899 11.0112 6.31523 12.7476 4.34733C14.484 2.37943 16.9269 1.17648 19.5454 1C22.1639 1.17648 24.6069 2.37943 26.3433 4.34733C28.0797 6.31523 28.9691 8.88899 28.8181 11.5091" stroke="#D09E03" strokeWidth="2" strokeMiterlimit="10"/>
        <path d="M55.1344 41.0798C56.8931 40.9994 58.4447 40.8789 59.8078 40.7274C63.0073 40.6639 66.1505 39.8744 69.0002 38.4185C69.0002 26.7256 55.0911 29.0654 55.0911 24.3889C54.9356 22.7282 55.3857 21.0673 56.3584 19.7123C57.4676 18.6606 58.3414 17.3858 58.9221 15.9718C59.5028 14.5578 59.7773 13.0368 59.7275 11.5091C59.8784 8.88899 58.989 6.31523 57.2526 4.34733C55.5162 2.37943 53.0732 1.17648 50.4547 1C47.8362 1.17648 45.3933 2.37943 43.6569 4.34733C41.9205 6.31523 41.0311 8.88899 41.182 11.5091" stroke="#D09E03" strokeWidth="2" strokeMiterlimit="10"/>
   </svg>
);

const CustomClipboardListIcon = () => (
    <svg width="51" height="57" viewBox="0 0 51 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M49.9725 26.0427C49.9725 39.4813 40.2165 52.0679 26.8879 55.7504C25.981 55.9978 24.9916 55.9978 24.0847 55.7504C10.756 52.0679 1 39.4813 1 26.0427V13.9781C1 11.7246 2.70389 9.16886 4.81999 8.31693L20.1274 2.05118C23.5626 0.649608 27.4375 0.649608 30.8727 2.05118L46.18 8.31693C48.2687 9.16886 50 11.7246 50 13.9781L49.9725 26.0427Z" stroke="#D09E03" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25.4866 29.8352C28.5222 29.8352 30.9829 27.3745 30.9829 24.3388C30.9829 21.3033 28.5222 18.8425 25.4866 18.8425C22.4509 18.8425 19.9902 21.3033 19.9902 24.3388C19.9902 27.3745 22.4509 29.8352 25.4866 29.8352Z" stroke="#D09E03" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25.4863 29.8352V38.0797" stroke="#D09E03" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const CustomSmileIcon = () => (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27 0C12.0382 0 0 12.0382 0 27C0 41.9618 12.0382 54 27 54C41.9618 54 54 41.9618 54 27C54 12.0382 41.9618 0 27 0ZM27 51.7493C13.3882 51.7493 2.2507 40.6118 2.2507 27C2.2507 13.3882 13.3882 2.2507 27 2.2507C40.6118 2.2507 51.7493 13.3882 51.7493 27C51.7493 40.6118 40.6118 51.7493 27 51.7493Z" fill="#D09E03"/>
        <path d="M41.063 33.4125C40.4998 33.1868 39.8248 33.3007 39.6012 33.8618C37.1269 38.6986 32.288 41.6243 27.0019 41.6243C21.6019 41.6243 16.8769 38.6986 14.4026 33.8618C14.1769 33.2986 13.5019 33.075 12.9408 33.4125C12.3776 33.6382 12.154 34.3132 12.3776 34.8743C15.1894 40.3861 20.7033 43.875 27.0019 43.875C33.1887 43.875 38.8144 40.3882 41.5144 34.8743C41.8519 34.3111 41.6262 33.6361 41.0651 33.4125H41.063Z" fill="#D09E03"/>
        <path d="M21.375 21.3743C21.375 23.239 19.8647 24.7493 18 24.7493C16.1353 24.7493 14.625 23.239 14.625 21.3743C14.625 19.5096 16.1353 17.9993 18 17.9993C19.8647 17.9993 21.375 19.5096 21.375 21.3743Z" fill="#D09E03"/>
        <path d="M39.375 21.3743C39.375 23.239 37.8647 24.7493 36 24.7493C34.1353 24.7493 32.625 23.239 32.625 21.3743C32.625 19.5096 34.1353 17.9993 36 17.9993C37.8647 17.9993 39.375 19.5096 39.375 21.3743Z" fill="#D09E03"/>
    </svg>
);

const CustomSlidersHorizontalIcon = () => (
    <svg width="56" height="43" viewBox="0 0 56 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 7.83334H31.375" stroke="#D09E03" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44.875 7.83334H55" stroke="#D09E03" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24.625 35.1667H55" stroke="#D09E03" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 35.1667H11.125" stroke="#D09E03" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.875 42C21.6029 42 24.625 38.9406 24.625 35.1667C24.625 31.3927 21.6029 28.3333 17.875 28.3333C14.1471 28.3333 11.125 31.3927 11.125 35.1667C11.125 38.9406 14.1471 42 17.875 42Z" stroke="#D09E03" strokeWidth="2"/>
        <path d="M38.125 14.6667C41.8529 14.6667 44.875 11.6073 44.875 7.83333C44.875 4.05939 41.8529 1 38.125 1C34.3971 1 31.375 4.05939 31.375 7.83333C31.375 11.6073 34.3971 14.6667 38.125 14.6667Z" stroke="#D09E03" strokeWidth="2"/>
    </svg>
);

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
    { icon: CustomAwardIcon, title: "Top Rated" },
    { icon: CustomShieldCheckIcon, title: "Verified" },
    { icon: CustomUsersIcon, title: "Expert Team" },
    { icon: CustomClipboardListIcon, title: "Transparency" },
    { icon: CustomSmileIcon, title: "Delight" },
    { icon: CustomSlidersHorizontalIcon, title: "Options" },
  ];

  const statistics: Statistic[] = [
    { value: "5000 +", label: "Properties Listed" },
    { value: "20 +", label: "Locations" },
    { value: "20 +", label: "Expert Agents" },
    { value: "1000 ++", label: "Properties Sold" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-16 relative"
        >
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[calc(100%/6)] h-16 w-px bg-gray-200"></div>
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[calc(200%/6)] h-16 w-px bg-gray-200"></div>
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[calc(300%/6)] h-16 w-px bg-gray-200"></div>
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[calc(400%/6)] h-16 w-px bg-gray-200"></div>
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[calc(500%/6)] h-16 w-px bg-gray-200"></div>

          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center p-2 rounded-lg"
            >
              <feature.icon /> 
              <p className="text-gray-700 font-medium text-lg mt-2">{feature.title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Image and Statistics Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-5xl mx-auto relative rounded-3xl shadow-2xl overflow-hidden"
        >
          <Image
            src={choosingImage}
            alt="City residential buildings"
            width={1200}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 m-6 bg-white p-4 rounded-2xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 w-full"
            >
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center text-gray-800"
                >
                  <span className="text-3xl md:text-4xl ">{stat.value}</span>
                  <span className="text-base md:text-lg text-gray-600">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}