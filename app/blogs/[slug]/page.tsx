




// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import Navbar from '@/components/shared/Navbar';
// import { blogsData, Blog, BlogContent } from '../../data/blogs';
// import { CalendarDays, Palmtree, MapPin, Home, Hammer, Lightbulb, CheckCircle2, Share2, Phone } from 'lucide-react';

// // --- Helper for rendering dynamic content blocks ---
// function BlogContentRenderer({ content }: { content: BlogContent }) {
//     const getCalloutIcon = (text: string) => {
//         if (text.toLowerCase().includes('location')) return <MapPin size={20} className="text-yellow-600 flex-shrink-0" />;
//         if (text.toLowerCase().includes('villa highlights')) return <Home size={20} className="text-yellow-600 flex-shrink-0" />;
//         if (text.toLowerCase().includes('built by')) return <Hammer size={20} className="text-yellow-600 flex-shrink-0" />;
//         if (text.toLowerCase().includes('california-inspired')) return <Lightbulb size={20} className="text-yellow-600 flex-shrink-0" />;
//         if (text.toLowerCase().includes('enquire now') || text.toLowerCase().includes('contact us')) return <Phone size={20} className="text-yellow-600 flex-shrink-0" />;
//         return <Palmtree size={20} className="text-yellow-600 flex-shrink-0" />;
//     };

//     switch (content.type) {
//         case 'paragraph':
//             return <p className="text-gray-600 leading-7 mb-4">{content.text}</p>;
//         case 'list':
//             return (
//                 <ul className="list-none pl-1 space-y-3 text-gray-700 my-6">
//                     {content.items.map((item, i) => (
//                         <li key={i} className="flex items-start">
//                             <CheckCircle2 size={16} className="text-green-500 mr-3 flex-shrink-0 mt-1" />
//                             <span>{item}</span>
//                         </li>
//                     ))}
//                 </ul>
//             );
//         case 'callout':
//             return (
//                 <div className="border-l-2 border-gray-200 pl-4 my-6 flex items-start gap-3">
//                     {getCalloutIcon(content.text)}
//                     <p className="text-gray-800 text-base font-medium flex-grow">{content.text}</p>
//                 </div>
//             );
//         case 'faq':
//             return (
//                 <div className="my-10">
//                     <h2 className="text-2xl font-extrabold text-red-600 mb-6 flex items-center gap-2">
//                         <span className="font-sans">?</span> FAQ
//                     </h2>
//                     <div className="space-y-4">
//                         {content.questions.map((faq, i) => (
//                             <div key={i} className="pb-4">
//                                 <h3 className="text-base font-semibold text-gray-900 mb-2 flex items-start">
//                                     <CheckCircle2 size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                                     {faq.question}
//                                 </h3>
//                                 <p className="text-gray-600 ml-7 text-sm">{faq.answer}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             );
//         default:
//             return null;
//     }
// }

// // --- Related Blog Card Component ---
// function RelatedBlogCard({ blog }: { blog: Blog }) {
//     return (
//         <Link href={`/blogs/${blog.slug}`} className="block group">
//             <div className="bg-white rounded-lg shadow-md border border-gray-100 transition-shadow hover:shadow-xl overflow-hidden">
//                 <div className="relative w-full h-48">
//                     <Image src={blog.image} alt={blog.title} fill className="object-cover" />
//                     <div className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs font-bold px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
//                          <CalendarDays size={12} className="text-gray-500" />
//                         <span>{blog.date}</span>
//                     </div>
//                 </div>
//                 <div className="p-4">
//                     <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 leading-tight group-hover:text-green-600 transition-colors">{blog.title}</h3>
//                 </div>
//             </div>
//         </Link>
//     );
// }



// export default function BlogDetailPage({ params }: { params: { slug: string } }) {
//     // const resolvedParams = use(params);
//     const blog = blogsData.find(b => b.slug === params.slug);

//     if (!blog) {
//         notFound();
//     }

//     const relatedBlogs = blogsData.filter(b => 
//         blog.relatedBlogsSlugs?.includes(b.slug) && b.slug !== blog.slug
//     ).slice(0, 3);

//     return (
//         <div className="bg-white font-sans">
//             {/* <Navbar /> */}
            
//             {/* The <main> tag is now a simple container */}
//             <main>
//                 {/* ✅ This new div centers the main blog content */}
//                 <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
//                     {/* Blog Header */}
//                     <div className="mb-10 text-left">
//                         <div className="flex items-start gap-3 mb-3">
//                             <Palmtree size={28} className="text-green-600 flex-shrink-0 mt-0.5" />
//                             <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight flex-grow">{blog.title}</h1>
//                         </div>
//                         <p className="text-base text-gray-600 md:ml-10 mb-6">
//                             By <span className="text-yellow-600 font-semibold">{blog.author}</span> | {blog.date} | {blog.readTime}
//                         </p>
//                         <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
//                             <Image src={blog.image} alt={blog.title} fill className="object-cover" priority />
//                         </div>
//                     </div>

//                     {/* Blog Content */}
//                     <div className="text-gray-700 text-base leading-relaxed">
//                         {blog.fullContent.map((contentBlock, index) => (
//                             <BlogContentRenderer key={index} content={contentBlock} />
//                         ))}
//                     </div>

//                     {/* Share Button */}
//                     <div className="mt-12 text-left">
//                         <button className="inline-flex items-center gap-2 bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition shadow-md">
//                             <Share2 size={20} />
//                             Share it
//                         </button>
//                     </div>
//                 </div>
//             </main>

//             {/* Latest in Blogs (Related Blogs) */}
//             {relatedBlogs.length > 0 && (
//                 // This section has a full-width background
//                 <section className="bg-gray-50 py-16">
//                     {/* This inner div centers the content within the full-width section */}
//                     <div className="container mx-auto max-w-7xl px-4">
//                         <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Latest in Blogs</h2>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                             {relatedBlogs.map(rb => (
//                                 <RelatedBlogCard key={rb.id} blog={rb} />
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//             )}
//         </div>
//     );
// }




import { notFound } from 'next/navigation';
import { blogsData } from '../../data/blogs';
import BlogClientPage from './client-page'; // Import the client component

// ✅ Add the 'async' keyword here to fix the error
export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
    // 1. Find the blog data on the server
    const blog = blogsData.find(b => b.slug === params.slug);

    if (!blog) {
        notFound();
    }

    // 2. Find the related blogs data on the server
    const relatedBlogs = blogsData.filter(b => 
        blog.relatedBlogsSlugs?.includes(b.slug) && b.slug !== blog.slug
    ).slice(0, 3);

    // 3. Render the Client Component and pass the data down as props
    return <BlogClientPage blog={blog} relatedBlogs={relatedBlogs} />;
}