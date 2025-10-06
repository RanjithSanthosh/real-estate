import React from 'react';
import Navbar from '@/components/shared/Navbar';
import DetailedFooter from '@/components/aboutPage/DetailedFooter';
import SiteMapFooter from '@/components/homePage/SiteMapFooter';
import { blogsData, Blog } from '../data/blogs';
import { sitemapData } from '../data/sitemap'; // Import your new data
import Image from 'next/image';
import Link from 'next/link';
import { Palmtree } from 'lucide-react';

// --- Reusable card for the "Latest in Blogs" sidebar ---
function LatestBlogCard({ blog }: { blog: Blog }) {
    return (
        <Link href={`/blogs/${blog.slug}`} className="flex items-center gap-4 group">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <Image src={blog.image} alt={blog.title} fill className="object-cover" sizes="80px" />
            </div>
            <div>
                <p className="flex items-center text-xs text-gray-500 mb-1">
                    <Palmtree size={14} className="text-green-600 mr-1.5" />
                    {blog.tag || 'Real Estate'}
                </p>
                <h4 className="font-semibold text-gray-800 leading-tight group-hover:text-green-600 transition-colors line-clamp-2">
                    {blog.title}
                </h4>
                <p className="text-xs text-gray-400 mt-1">{blog.date}</p>
            </div>
        </Link>
    );
}

// --- Main Page Component ---
export default function SitemapPage() {
    const latestBlogs = blogsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);

    return (
        <div className="bg-white">
            <Navbar />
            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                {/* Breadcrumbs */}
                <div className="text-sm text-green-600 font-semibold tracking-wider mb-8">
                    <Link href="/home" className="hover:underline">HOME</Link>
                    <span className="mx-2">&gt;</span>
                    <span>SITEMAP</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2">
                        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 font-bold mb-12">Sitemap</h1>
                        
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-green-600 border-b-2 border-green-600 pb-2 inline-block">SITEMAP</h2>
                            <ul className="space-y-3">
                                {sitemapData.map((link, index) => (
                                    <li key={index}>
                                        <a 
                                            href={link.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-blue-600 hover:underline"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar: Latest in Blogs */}
                    <aside>
                        <div className="sticky top-24">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
                                LATEST IN BLOGS
                            </h2>
                            <div className="space-y-6">
                                {latestBlogs.map(blog => (
                                    <LatestBlogCard key={blog.id} blog={blog} />
                                ))}
                            </div>
                            <div className="mt-6 text-center">
                                <Link href="/blogs" className="text-sm font-semibold text-green-600 hover:underline">
                                    View More
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
            <SiteMapFooter />
            <DetailedFooter />
        </div>
    );
}