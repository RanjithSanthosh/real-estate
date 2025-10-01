


// 'use client';

// import Image from 'next/image';
// import React, { useState, useMemo } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// // --- 1. DATA AND TYPE DEFINITIONS ---
// interface TeamMember {
//   id: number;
//   name: string;
//   department: string;
//   image: string;
// }

// const allTeamMembers: TeamMember[] = [
//   { id: 1, name: 'GOKUL', department: 'Sales', image: '/assets/teamM2.webp' },
//   { id: 2, name: 'AASIN SAFI', department: 'Sales', image: '/assets/teamM4.webp' },
//   { id: 3, name: 'VARUN. M', department: 'Sales', image: '/assets/teamM3.webp' },
//   { id: 4, name: 'DIVYAPRIYA K', department: 'Sales', image: '/assets/teamM4.webp' },
//   { id: 5, name: 'ABBAS', department: 'Sales', image: '/assets/teamM4.webp' },
//   { id: 6, name: 'DIVYA. S', department: 'Sales', image: '/assets/teamM2.webp' },
//   { id: 7, name: 'JOHN DOE', department: 'Support', image: '/assets/teamM3.webp' },
//   { id: 8, name: 'JANE SMITH', department: 'Support', image: '/assets/teamM4.webp' },
//   { id: 9, name: 'MIKE TYSON', department: 'Facilities', image: '/assets/teamM4.webp' },
//   { id: 10, name: 'SARAH CONNOR', department: 'Head of support', image: '/assets/teamM2.webp' },
//   { id: 11, name: 'DAVID LEE', department: 'Finance & Accounts', image: '/assets/teamM4.webp' },
//   { id: 12, name: 'EMILY WONG', department: 'Human Resources', image: '/assets/teamM2.webp' },
//   { id: 13, name: 'CHRIS EVANS', department: 'Head Of Sales', image: '/assets/teamM3.webp' },
//   { id: 14, name: 'OLIVIA GREEN', department: 'Marketing', image: '/assets/teamM4.webp' },
//   { id: 15, name: 'MARK JOHNSON', department: 'Videographer', image: '/assets/teamM3.webp' },
// ];

// const ITEMS_PER_PAGE = 6;

// // --- 2. THE NEW, REDESIGNED TEAM MEMBER CARD COMPONENT ---
// function TeamMemberCard({ member }: { member: TeamMember }) {
//   return (
//     <div className="relative rounded-lg shadow-lg overflow-hidden group h-80">
//       {/* Background Image */}
//       <Image
//         src={member.image}
//         alt={member.name}
//         fill
//         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         className="object-cover object-center w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
//       />
      
//       {/* Gradient Overlay for Text Readability */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

//       {/* Text Content Overlay */}
//       <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
//         <h3 className="text-2xl font-bold tracking-tight">{member.name}</h3>
//         <p className="text-sm text-white/80">{member.department}</p>
        
//         {/* Hidden "View Details" link that appears on hover */}
//         <div className="mt-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
//           <a
//             href="#"
//             className="text-green-400 font-semibold text-sm hover:text-green-300"
//           >
//             View Details &rarr;
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// // --- 3. THE MAIN TEAM SECTION COMPONENT ---
// export default function TeamSection() {
//   const [activeTab, setActiveTab] = useState('All');
//   const [currentPage, setCurrentPage] = useState(1);

//   const departments = useMemo(() => 
//     ['All', ...Array.from(new Set(allTeamMembers.map(member => member.department)))], 
//     []
//   );

//   const filteredMembers = useMemo(() => 
//     activeTab === 'All'
//       ? allTeamMembers
//       : allTeamMembers.filter(member => member.department === activeTab),
//     [activeTab]
//   );

//   const totalPages = Math.ceil(filteredMembers.length / ITEMS_PER_PAGE);
//   const membersToShow = filteredMembers.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

//   const handlePageChange = (page: number) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <section className="py-16 md:py-24 bg-gray-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-800 mb-2">Meet Our Team</h2>
//           <p className="text-gray-600">That makes us tick</p>
//         </div>

//         {/* Department Tabs */}
//         <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-16 border-b border-gray-200 pb-4">
//           {departments.map(dep => (
//             <button
//               key={dep}
//               className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${activeTab === dep ? 'text-green-600' : 'text-gray-600 hover:text-green-600'}`}
//               onClick={() => {
//                 setActiveTab(dep);
//                 setCurrentPage(1);
//               }}
//             >
//               {dep}
//               {activeTab === dep && <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-green-600"></span>}
//             </button>
//           ))}
//         </div>

//         {/* Team Member Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {membersToShow.length > 0 ? (
//             membersToShow.map(member => (
//               <TeamMemberCard key={member.id} member={member} />
//             ))
//           ) : (
//             <p className="col-span-full text-center text-gray-600 text-lg">No team members found for this department.</p>
//           )}
//         </div>

//         {/* Pagination Controls */}
//         {totalPages > 1 && (
//           <div className="flex justify-center items-center space-x-2">
//             <button
//               className="p-2 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 disabled:opacity-50"
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               <ChevronLeft size={20} />
//             </button>
//             {/* Pagination numbers can be added here if needed */}
//             <span className="text-sm text-gray-600 font-medium">Page {currentPage} of {totalPages}</span>
//             <button
//               className="p-2 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 disabled:opacity-50"
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }






'use client';

import Image from 'next/image';
import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// --- 1. DATA AND TYPE DEFINITIONS ---
interface TeamMember {
  id: number;
  name: string;
  department: string;
  image: string;
}

const allTeamMembers: TeamMember[] = [
  { id: 1, name: 'GOKUL', department: 'Sales', image: '/assets/teamM2.webp' },
  { id: 2, name: 'AASIN SAFI', department: 'Sales', image: '/assets/teamM4.webp' },
  { id: 3, name: 'VARUN. M', department: 'Sales', image: '/assets/teamM3.webp' },
  { id: 4, name: 'DIVYAPRIYA K', department: 'Sales', image: '/assets/teamM4.webp' },
  { id: 5, name: 'ABBAS', department: 'Sales', image: '/assets/teamM4.webp' },
  { id: 6, name: 'DIVYA. S', department: 'Sales', image: '/assets/teamM2.webp' },
  { id: 7, name: 'JOHN DOE', department: 'Support', image: '/assets/teamM3.webp' },
  { id: 8, name: 'JANE SMITH', department: 'Support', image: '/assets/teamM4.webp' },
  { id: 9, name: 'MIKE TYSON', department: 'Facilities', image: '/assets/teamM4.webp' },
  { id: 10, name: 'SARAH CONNOR', department: 'Head of support', image: '/assets/teamM2.webp' },
  { id: 11, name: 'DAVID LEE', department: 'Finance & Accounts', image: '/assets/teamM4.webp' },
  { id: 12, name: 'EMILY WONG', department: 'Human Resources', image: '/assets/teamM2.webp' },
  { id: 13, name: 'CHRIS EVANS', department: 'Head Of Sales', image: '/assets/teamM3.webp' },
  { id: 14, name: 'OLIVIA GREEN', department: 'Marketing', image: '/assets/teamM4.webp' },
  { id: 15, name: 'MARK JOHNSON', department: 'Videographer', image: '/assets/teamM3.webp' },
];

const ITEMS_PER_PAGE = 6;

// --- 2. THE NEW, REDESIGNED TEAM MEMBER CARD COMPONENT ---
function TeamMemberCard({ member }: { member: TeamMember }) {
  const cardHoverVariants: Variants = {
    rest: { backgroundPosition: "0% 50%" },
    hover: { backgroundPosition: "100% 50%" },
  };

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative rounded-lg shadow-lg overflow-hidden group h-80"
    >
      {/* Background Image */}
      <motion.div className="absolute inset-0">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </motion.div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Text Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <h3 className="text-2xl font-bold tracking-tight">{member.name}</h3>
        <p className="text-sm text-white/80">{member.department}</p>
        
        {/* Animated "View Details" link */}
        <motion.div
          variants={{
            rest: { opacity: 0, y: 10 },
            hover: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-4"
        >
          <a
            href="#"
            className="text-green-400 font-semibold text-sm hover:text-green-300"
          >
            View Details &rarr;
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

// --- 3. THE MAIN TEAM SECTION COMPONENT ---
export default function TeamSection() {
  const [activeTab, setActiveTab] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const departments = useMemo(() => 
    ['All', ...Array.from(new Set(allTeamMembers.map(member => member.department)))], 
    []
  );

  const filteredMembers = useMemo(() => 
    activeTab === 'All'
      ? allTeamMembers
      : allTeamMembers.filter(member => member.department === activeTab),
    [activeTab]
  );

  const totalPages = Math.ceil(filteredMembers.length / ITEMS_PER_PAGE);
  const membersToShow = filteredMembers.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Animation Variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  
  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  }

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Meet Our Team</h2>
          <p className="text-gray-600">That makes us tick</p>
        </motion.div>

        {/* Department Tabs */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-16 border-b border-gray-200 pb-4">
          {departments.map(dep => (
            <button
              key={dep}
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${activeTab === dep ? 'text-green-600' : 'text-gray-600 hover:text-green-600'}`}
              onClick={() => {
                setActiveTab(dep);
                setCurrentPage(1);
              }}
            >
              {dep}
              {activeTab === dep && (
                <motion.span
                  layoutId="active-tab-underline"
                  className="absolute -bottom-4 left-0 w-full h-0.5 bg-green-600"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Team Member Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 min-h-[500px]"
        >
          <AnimatePresence mode="wait">
            {membersToShow.length > 0 ? (
              membersToShow.map((member, i) => (
                <motion.div
                  key={member.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  layout
                >
                  <TeamMemberCard member={member} />
                </motion.div>
              ))
            ) : (
              <motion.p
                key="no-members-found"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center text-gray-600 text-lg"
              >
                No team members found for this department.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <motion.div variants={itemVariants} className="flex justify-center items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <span className="text-sm text-gray-600 font-medium">Page {currentPage} of {totalPages}</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={20} />
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}