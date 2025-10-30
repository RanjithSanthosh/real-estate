'use client';

import React from 'react';
// import Image from 'next/image'; // Removed
// import Link from 'next/link'; // Removed
import { PrismicBlog } from '@/app/data/prismic'; // Assuming this path is correct
import { Palmtree } from 'lucide-react';

// --- Reusable card for the "Latest in Blogs" sidebar ---
// This is kept inside the sidebar component file for co-location
// as it's not used anywhere else.
function LatestBlogCard({ blog }: { blog: PrismicBlog }) {
    const title = blog.data.title[0]?.text || 'Untitled Blog Post';
    return (
        // Use standard <a> tag instead of Next.js Link
        <a href={`/blogs/${blog.uid}`} className="flex items-center gap-4 group">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                {/* Use standard <img> tag instead of Next.js Image */}
                <img 
                    src={blog.data.image_link.url} 
                    alt={title} 
                    className="absolute w-full h-full object-cover"
                    // Add a fallback placeholder image
                    onError={(e) => { e.currentTarget.src = `https://placehold.co/80x80/eeeeee/999999?text=Img`; }}
                />
            </div>
            <div>
                <p className="flex items-center text-xs text-gray-500 mb-1">
                    <Palmtree size={14} className="text-green-600 mr-1.5" />
                    {blog.tags[0] || 'Real Estate'}
                </p>
                <h4 className="font-semibold text-gray-800 leading-tight group-hover:text-green-600 transition-colors line-clamp-2">
                    {title}
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                    {new Date(blog.data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </p>
            </div>
        </a>
    );
}

// --- Centralized Sidebar Component ---
export default function LatestBlogsSidebar({ latestBlogs }: { latestBlogs: PrismicBlog[] }) {
    return (
        <aside>
            <div className="sticky top-24">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
                    LATEST IN BLOGS
                </h2>
                <div className="space-y-6">
                    {/* Maps over the blogs passed as a prop */}
                    {latestBlogs.map(blog => (
                        <LatestBlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
                <div className="mt-8 text-center">
                    {/* Use standard <a> tag instead of Next.js Link */}
                    <a href="/blogs" className="text-sm font-semibold text-green-600 hover:underline">
                        View More
                    </a>
                </div>
            </div>
        </aside>
    );
}

