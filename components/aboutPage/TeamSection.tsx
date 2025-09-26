// components/TeamSection.tsx
'use client';

import Image from 'next/image';
import React, { useState } from 'react';

// Define a type for team member data
interface TeamMember {
  id: number;
  name: string;
  department: string;
  image: string; // Path to the image
  // You can add more details like 'role' if needed
}

// Dummy Data for Team Members
// In a real application, you might fetch this from an API
const allTeamMembers: TeamMember[] = [
  { id: 1, name: 'GOKUL', department: 'Sales', image: '/assets/team/gokul.png' },
  { id: 2, name: 'AASIN SAFI', department: 'Sales', image: '/assets/team/aasin.png' },
  { id: 3, name: 'VARUN. M', department: 'Sales', image: '/assets/team/varun.png' },
  { id: 4, name: 'DIVYAPRIYA K', department: 'Sales', image: '/assets/team/divyapriya.png' },
  { id: 5, name: 'ABBAS', department: 'Sales', image: '/assets/team/abbas.png' },
  { id: 6, name: 'DIVYA. S', department: 'Sales', image: '/assets/team/divya.png' },
  { id: 7, name: 'JOHN DOE', department: 'Support', image: '/assets/team/placeholder1.png' },
  { id: 8, name: 'JANE SMITH', department: 'Support', image: '/assets/team/placeholder2.png' },
  { id: 9, name: 'MIKE TYSON', department: 'Facilities', image: '/assets/team/placeholder3.png' },
  { id: 10, name: 'SARAH CONNOR', department: 'Head of support', image: '/assets/team/placeholder4.png' },
  { id: 11, name: 'DAVID LEE', department: 'Finance & Accounts', image: '/assets/team/placeholder5.png' },
  { id: 12, name: 'EMILY WONG', department: 'Human Resources', image: '/assets/team/placeholder6.png' },
  { id: 13, name: 'CHRIS EVANS', department: 'Head Of Sales', image: '/assets/team/placeholder7.png' },
  { id: 14, name: 'OLIVIA GREEN', department: 'Marketing', image: '/assets/team/placeholder8.png' },
  { id: 15, name: 'MARK JOHNSON', department: 'Videographer', image: '/assets/team/placeholder9.png' },
];

const ITEMS_PER_PAGE = 6; // As seen in the UI (3x2 grid)

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState('Sales'); // Default active tab
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique departments for tabs
  const departments = ['All', ...Array.from(new Set(allTeamMembers.map(member => member.department)))];

  // Filter members by active tab
  const filteredMembers = activeTab === 'All'
    ? allTeamMembers
    : allTeamMembers.filter(member => member.department === activeTab);

  // Calculate total pages for pagination
  const totalPages = Math.ceil(filteredMembers.length / ITEMS_PER_PAGE);

  // Get members for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const membersToShow = filteredMembers.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5; // Adjust as needed
    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-200
            ${currentPage === i ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  // Helper function to create placeholder images if paths are missing
  const getImageUrl = (path: string, fallbackId: number) => {
    // Check if the path exists, otherwise return a placeholder
    // In a real app, you'd ensure images exist or handle errors
    // For now, let's assume the dummy paths are set up or generate
    return path || `https://via.placeholder.com/200?text=Team+Member+${fallbackId}`;
  };

  return (
    <section className="pb-16 md:pb-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Meet Our Team</h2>
          <p className="text-gray-600">That makes us tick</p>
        </div>

        {/* Department Tabs */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-16 border-b border-gray-200 pb-4">
          {departments.map(dep => (
            <button
              key={dep}
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300
                ${activeTab === dep
                  ? 'text-green-600'
                  : 'text-gray-600 hover:text-green-600'
                }`}
              onClick={() => {
                setActiveTab(dep);
                setCurrentPage(1); // Reset to first page when tab changes
              }}
            >
              {dep}
              {activeTab === dep && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform translate-y-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Team Member Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {membersToShow.length > 0 ? (
            membersToShow.map(member => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={getImageUrl(member.image, member.id)}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{member.department}</p>
                  <a
                    href="#" // Replace with actual link to member's profile
                    className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors duration-200"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 text-lg">No team members found for this department.</p>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <button
              className="w-9 h-9 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &larr;
            </button>
            {renderPaginationButtons()}
            <button
              className="w-9 h-9 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &rarr;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}