// app/blogs/page.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import Navbar from '@/components/shared/Navbar'; // Assuming you have a Navbar
import { blogsData, Blog } from '../data/blogs';
import { ArrowLeft, ArrowRight,CalendarDays ,Palmtree  } from 'lucide-react';

// --- Blog Card Component (Reusable) ---
// function BlogCard({ blog }: { blog: Blog }) {
//     return (
//         <Link href={`/blogs/${blog.slug}`} className="block">
//             <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 md:flex items-center">
//                 <div className="relative w-full h-60 md:w-80 md:h-64 flex-shrink-0">
//                     <Image src={blog.image} alt={blog.title} fill className="object-cover" />
//                     <div className="absolute top-4 left-4 bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-full shadow-md">{blog.date}</div>
//                 </div>
//                 <div className="p-6 md:p-8 flex-grow">
//                     <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-tight mb-2">{blog.title}</h3>
//                     <p className="text-sm text-gray-500 mb-4">
//                         By <span className="text-yellow-600 font-semibold">{blog.author}</span> | {blog.readTime}
//                     </p>
//                     <p className="text-gray-600 leading-relaxed text-sm mb-5 line-clamp-3">{blog.shortDescription}</p>
//                     <span className="text-green-600 font-semibold flex items-center gap-2 group">
//                         Read More 
//                         <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
//                     </span>
//                 </div>
//             </div>
//         </Link>
//     );
// }

// --- Pagination Component ---
// function Pagination({ totalPages, currentPage, onPageChange }: { totalPages: number; currentPage: number; onPageChange: (page: number) => void; }) {
//     const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

//     return (
//         <div className="flex items-center justify-center space-x-2 mt-12">
//             <button
//                 onClick={() => onPageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
//             >
//                 <ArrowLeft size={20} />
//             </button>
//             {pages.map(page => (
//                 <button
//                     key={page}
//                     onClick={() => onPageChange(page)}
//                     className={`w-10 h-10 rounded-full font-semibold text-lg transition ${
//                         currentPage === page ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                 >
//                     {page}
//                 </button>
//             ))}
//             <button
//                 onClick={() => onPageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
//             >
//                 <ArrowRight size={20} />
//             </button>
//         </div>
//     );
// }

// --- Blog Listing Page ---
// export default function BlogListingPage() {
//     const [currentPage, setCurrentPage] = useState(1);
//     const blogsPerPage = 4; // As per your screenshot

//     const indexOfLastBlog = currentPage * blogsPerPage;
//     const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//     const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);
//     const totalPages = Math.ceil(blogsData.length / blogsPerPage);

//     const handlePageChange = (pageNumber: number) => {
//         if (pageNumber >= 1 && pageNumber <= totalPages) {
//             setCurrentPage(pageNumber);
//             window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
//         }
//     };

//     return (
//         <div className="bg-gray-50 min-h-screen">
//             <Navbar />
//             <main className="container mx-auto max-w-7xl px-4 py-12">
//                 <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">Blogs from Home Konnect®</h1>
                
//                 <div className="space-y-8 md:space-y-10">
//                     {currentBlogs.map(blog => (
//                         <BlogCard key={blog.id} blog={blog} />
//                     ))}
//                 </div>

//                 <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
//             </main>
//         </div>
//     );
// }





// --- Blog Card Component (Fully Rebuilt to Match Screenshot) ---
function BlogCard({ blog }: { blog: Blog }) {
    return (
        <Link href={`/blogs/${blog.slug}`} className="block group">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 md:flex">
                {/* Image Section */}
                <div className="relative w-full h-60 md:w-80 md:h-auto flex-shrink-0">
                    <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-md shadow-lg flex items-center gap-2">
                        <CalendarDays size={14} className="text-gray-500" />
                        <span>{blog.date}</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col">
                    <div className="flex-grow">
                        <div className="flex items-start gap-3">
                            <Palmtree size={24} className="text-green-600 flex-shrink-0 mt-1" />
                            <h3 className="text-xl font-extrabold text-gray-900 leading-tight">
                                {blog.title}
                            </h3>
                        </div>
                        <div className="ml-9"> {/* Aligns with title text */}
                            <p className="text-sm text-gray-500 mt-2">
                                {/* ✅ Changed the <a> tag to a <span> tag */}
                                By <span className="text-green-600 font-semibold underline">{blog.author}</span>
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{blog.readTime}</p>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-sm mt-4">
                           <Palmtree size={16} className="text-green-600 inline-block mr-1 -mt-1" /> {blog.shortDescription}
                        </p>
                    </div>

                    <div className="mt-6 flex-shrink-0">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 border border-gray-300 rounded-full px-4 py-2 group-hover:bg-green-50 group-hover:border-green-400 transition-colors">
                            Read More
                            <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

// --- Pagination Component ---
function Pagination({ totalPages, currentPage, onPageChange }: { totalPages: number; currentPage: number; onPageChange: (page: number) => void; }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center space-x-2 mt-12">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-3 rounded-full bg-white border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
                <ArrowLeft size={20} />
            </button>
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`w-10 h-10 rounded-full font-semibold text-lg transition ${
                        currentPage === page ? 'bg-green-600 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-3 rounded-full bg-white border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
                <ArrowRight size={20} />
            </button>
        </div>
    );
}

// --- Blog Listing Page ---
export default function BlogListingPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 4;

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalPages = Math.ceil(blogsData.length / blogsPerPage);

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* <Navbar /> */}
            <main className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">Blogs from Home Konnect®</h1>
                
                <div className="space-y-8">
                    {currentBlogs.map(blog => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>

                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
            </main>
        </div>
    );
}