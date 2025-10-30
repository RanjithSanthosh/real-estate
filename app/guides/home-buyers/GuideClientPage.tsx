'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PrismicBlog } from '@/app/data/prismic'; // ✅ Import Prismic type
import { Palmtree } from 'lucide-react';

// --- Reusable card for the "Latest in Blogs" sidebar ---
function LatestBlogCard({ blog }: { blog: PrismicBlog }) { // ✅ Use PrismicBlog type
    const title = blog.data.title[0]?.text || 'Untitled Blog Post';
    return (
        // ✅ FIX: Link to blog.uid, which is the correct slug
        <Link href={`/blogs/${blog.uid}`} className="flex items-center gap-4 group">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <Image 
                    src={blog.data.image_link.url} // ✅ Use API data field
                    alt={title} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 20vw, 10vw"
                />
            </div>
            <div>
                <p className="flex items-center text-xs text-gray-500 mb-1">
                    <Palmtree size={14} className="text-green-600 mr-1.5" />
                    {/* Use the first tag, or 'Real Estate' as a fallback */}
                    {blog.tags[0] || 'Real Estate'}
                </p>
                <h4 className="font-semibold text-gray-800 leading-tight group-hover:text-green-600 transition-colors line-clamp-2">
                    {title} {/* ✅ Use parsed title */}
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                    {new Date(blog.data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </p>
            </div>
        </Link>
    );
}

// --- Main Client Component ---
export default function GuideClientPage({ latestBlogs }: { latestBlogs: PrismicBlog[] }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-5xl font-serif text-gray-900 font-bold mb-4">Home Buyer's Guide</h1>
                <p className="text-2xl text-gray-500">
                    COMING SOON
                </p>
                {/* You can add the main content for the guide here when it's ready */}
            </div>

            {/* Sidebar: Latest in Blogs */}
            <aside>
                <div className="sticky top-24"> {/* Makes the sidebar stick on scroll */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
                        LATEST IN BLOGS
                    </h2>
                    <div className="space-y-6">
                        {/* ✅ This now maps over the live API data */}
                        {latestBlogs.map(blog => (
                            <LatestBlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Link href="/blogs" className="text-sm font-semibold text-green-600 hover:underline">
                            View More
                        </Link>
                    </div>
                </div>
            </aside>
        </div>
    );
}