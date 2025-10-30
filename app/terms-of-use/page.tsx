import React from 'react';
import Navbar from '@/components/shared/Navbar';
import DetailedFooter from '@/components/aboutPage/DetailedFooter';
import SiteMapFooter from '@/components/homePage/SiteMapFooter';
import { blogsData, Blog } from '../data/blogs';
import Image from 'next/image';
import Link from 'next/link';
import { Palmtree } from 'lucide-react';
import { searchBlogs } from '@/services/api'; // ✅ Import API function
import { PrismicBlog } from '@/app/data/prismic'; // ✅ Import Prismic type
import LatestBlogsSidebar from '@/components/shared/LatestBlogsSidebar'; // ✅ Import shared component

// --- Reusable card for the "Latest in Blogs" sidebar ---
function LatestBlogCard({ blog }: { blog: Blog }) {
    return (
        <Link href={`/blogs/${blog.slug}`} className="flex items-center gap-4 group">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <Image 
                    src={blog.image} 
                    alt={blog.title} 
                    fill 
                    className="object-cover"
                    sizes="80px"
                />
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
export default async function TermsOfUsePage() {
    const latestBlogsResponse = await searchBlogs(1, 5);
    const latestBlogs = (latestBlogsResponse?.results || []) as PrismicBlog[];

    return (
        <div className="bg-white">
            <Navbar />
            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2">
                        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 font-bold mb-6">Terms of Use</h1>
                        <p className="text-sm text-gray-500 mb-8">Version 1.0</p>
                        
                        <div className="prose lg:prose-lg max-w-none text-gray-600">
                            <p>The Home Konnect® website located at https://homekonnect.com is a copyrighted work belonging to Home Konnect®. Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features.</p>
                            <p>All such additional terms, guidelines, and rules are incorporated by reference into these Terms.</p>
                            <p>These Terms of Use described the legally binding terms and conditions that oversee your use of the Site. BY LOGGING INTO THE SITE, YOU ARE BEING COMPLIANT THAT THESE TERMS and you represent that you have the authority and capacity to enter into these Terms. YOU SHOULD BE AT LEAST 18 YEARS OF AGE TO ACCESS THE SITE. IF YOU DISAGREE WITH ALL OF THE PROVISION OF THESE TERMS, DO NOT LOG INTO AND/OR USE THE SITE.</p>
                            
                            <h2 className="font-serif">Access to the Site</h2>
                            <p><strong>Subject to these Terms.</strong> Company grants you a non-transferable, non-exclusive, revocable, limited license to access the Site solely for your own personal, noncommercial use.</p>
                            <p><strong>Certain Restrictions.</strong> The rights approved to you in these Terms are subject to the following restrictions: (a) you shall not sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site; (b) you shall not change, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site; (c) you shall not access the Site in order to build a similar or competitive website; and (d) except as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means unless otherwise indicated, any future release, update, or other addition to functionality of the Site shall be subject to these Terms. All copyright and other proprietary notices on the Site must be retained on all copies thereof.</p>
                            
                            <h2 className="font-serif">Disclaimers</h2>
                            <p>The site is provided on an "as-is" and "as available" basis, and company and our suppliers expressly disclaim any and all warranties and conditions of any kind, whether express, implied, or statutory, including all warranties or conditions of merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, or non-infringement...</p>
                            
                            {/* ... Add the rest of your terms of use content here, following the same structure ... */}

                            <h2 className="font-serif">Contact Information</h2>
                            <p><strong>Address:</strong> Home Konnect®, 5B, 5th Floor, New No. 205, Doshi Towers, Poonamallee High Road, Kilpauk, Chennai - 600010</p>
                            <p><strong>Email:</strong> enquiry@homekonnect.com</p>
                        </div>
                    </div>

                    {/* ✅ Sidebar: Replaced with the shared component */}
                    <LatestBlogsSidebar latestBlogs={latestBlogs} />
                </div>
            </main>
            <SiteMapFooter />
            <DetailedFooter />
        </div>
    );
}