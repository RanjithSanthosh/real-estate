// 'use client';

// import React, { useMemo } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// // import Navbar from '@/components/shared/Navbar';
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

// // --- Main Client Component for the Blog Detail Page UI ---
// export default function BlogClientPage({ blog, relatedBlogs }: { blog: Blog, relatedBlogs: Blog[] }) {
//     // This check prevents a crash if the blog prop is somehow undefined.
//     if (!blog) {
//         return null;
//     }

//     return (
//         <div className="bg-white font-sans">
//             {/* <Navbar /> */}
//             <main>
//                 <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
//                     {/* Blog Header */}
//                     <div className="mb-10 text-left">
//                         <div className="flex items-start gap-3 mb-3">
//                             <Palmtree size={32} className="text-green-600 flex-shrink-0" />
//                             <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight flex-grow">{blog.title}</h1>
//                         </div>
//                         <p className="text-base text-gray-600 md:ml-12 mb-6">
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
//                         <button className="inline-flex items-center gap-2 bg-white text-green-600 font-bold py-3 px-6 rounded-full hover:bg-green-50 transition shadow-md border border-gray-200">
//                             <Share2 size={20} />
//                             Share it
//                         </button>
//                     </div>
//                 </div>
//             </main>

//             {/* Latest in Blogs (Related Blogs) */}
//             {relatedBlogs.length > 0 && (
//                 <section className="bg-gray-50 py-16">
//                     <div className="container mx-auto max-w-7xl px-4">
//                         <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-left">Latest in Blogs</h2>
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






// 'use client';

// import React, { useMemo, useState } from 'react'; // ✅ 1. Import useState
// import Image from 'next/image';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// // import Navbar from '@/components/shared/Navbar';
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

// // --- Main Client Component for the Blog Detail Page UI ---
// export default function BlogClientPage({ blog, relatedBlogs }: { blog: Blog, relatedBlogs: Blog[] }) {
//     const [buttonText, setButtonText] = useState('Share it'); // ✅ 2. Add state for button text

//     if (!blog) {
//         return null;
//     }

//     // ✅ 3. Add the share handler function
//     const handleShare = async () => {
//         const shareData = {
//             title: blog.title,
//             text: "Check out this article from Home Konnect!",
//             url: window.location.href, // This shares the current page's URL
//         };

//         if (navigator.share) {
//             try {
//                 // Use Web Share API if available
//                 await navigator.share(shareData);
//             } catch (err) {
//                 console.error('Share failed:', err);
//             }
//         } else {
//             // Fallback: Copy link to clipboard
//             try {
//                 await navigator.clipboard.writeText(shareData.url);
//                 setButtonText('Link Copied!');
//                 setTimeout(() => setButtonText('Share it'), 2000); // Reset after 2s
//             } catch (err) {
//                 console.error('Failed to copy link:', err);
//                 alert('Failed to copy link. Please copy the URL from your browser.');
//             }
//         }
//     };

//     return (
//         <div className="bg-white font-sans">
//             {/* <Navbar /> */}
//             <main>
//                 <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
//                     {/* Blog Header */}
//                     <div className="mb-10 text-left">
//                         <div className="flex items-start gap-3 mb-3">
//                             <Palmtree size={32} className="text-green-600 flex-shrink-0" />
//                             <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight flex-grow">{blog.title}</h1>
//                         </div>
//                         <p className="text-base text-gray-600 md:ml-12 mb-6">
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
//                         {/* ✅ 4. Add onClick and dynamic text to the button */}
//                         <button 
//                             onClick={handleShare}
//                             className="inline-flex items-center gap-2 bg-white text-green-600 font-bold py-3 px-6 rounded-full hover:bg-green-50 transition shadow-md border border-gray-200"
//                         >
//                             <Share2 size={20} />
//                             {buttonText}
//                         </button>
//                     </div>
//                 </div>
//             </main>

//             {/* Latest in Blogs (Related Blogs) */}
//             {relatedBlogs.length > 0 && (
//                 <section className="bg-gray-50 py-16">
//                     <div className="container mx-auto max-w-7xl px-4">
//                         <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-left">Latest in Blogs</h2>
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





'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/shared/Navbar';
import { blogsData, Blog, BlogContent } from '../../data/blogs';
import { CalendarDays, Palmtree, MapPin, Home, Hammer, Lightbulb, CheckCircle2, Share2, Phone } from 'lucide-react';

// --- Helper for rendering dynamic content blocks ---
function BlogContentRenderer({ content }: { content: BlogContent }) {
    const getCalloutIcon = (text: string) => {
        if (text.toLowerCase().includes('location')) return <MapPin size={20} className="text-yellow-600 flex-shrink-0" />;
        if (text.toLowerCase().includes('villa highlights')) return <Home size={20} className="text-yellow-600 flex-shrink-0" />;
        if (text.toLowerCase().includes('built by')) return <Hammer size={20} className="text-yellow-600 flex-shrink-0" />;
        if (text.toLowerCase().includes('california-inspired')) return <Lightbulb size={20} className="text-yellow-600 flex-shrink-0" />;
        if (text.toLowerCase().includes('enquire now') || text.toLowerCase().includes('contact us')) return <Phone size={20} className="text-yellow-600 flex-shrink-0" />;
        return <Palmtree size={20} className="text-yellow-600 flex-shrink-0" />;
    };

    switch (content.type) {
        case 'paragraph':
            return <p className="text-gray-600 leading-7 mb-4">{content.text}</p>;
        case 'list':
            return (
                <ul className="list-none pl-1 space-y-3 text-gray-700 my-6">
                    {content.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                            <CheckCircle2 size={16} className="text-green-500 mr-3 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            );
        case 'callout':
            return (
                <div className="border-l-2 border-gray-200 pl-4 my-6 flex items-start gap-3">
                    {getCalloutIcon(content.text)}
                    <p className="text-gray-800 text-base font-medium flex-grow">{content.text}</p>
                </div>
            );
        case 'faq':
            return (
                <div className="my-10">
                    <h2 className="text-2xl font-extrabold text-red-600 mb-6 flex items-center gap-2">
                        <span className="font-sans">?</span> FAQ
                    </h2>
                    <div className="space-y-4">
                        {content.questions.map((faq, i) => (
                            <div key={i} className="pb-4">
                                <h3 className="text-base font-semibold text-gray-900 mb-2 flex items-start">
                                    <CheckCircle2 size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 ml-7 text-sm">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );
        default:
            return null;
    }
}

// --- Related Blog Card Component ---
function RelatedBlogCard({ blog }: { blog: Blog }) {
    return (
        <Link href={`/blogs/${blog.slug}`} className="block group">
            <div className="bg-white rounded-lg shadow-md border border-gray-100 transition-shadow hover:shadow-xl overflow-hidden">
                <div className="relative w-full h-48">
                    <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                    <div className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs font-bold px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                         <CalendarDays size={12} className="text-gray-500" />
                        <span>{blog.date}</span>
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 leading-tight group-hover:text-green-600 transition-colors">{blog.title}</h3>
                </div>
            </div>
        </Link>
    );
}

// --- Main Client Component for the Blog Detail Page UI ---
export default function BlogClientPage({ blog, relatedBlogs }: { blog: Blog, relatedBlogs: Blog[] }) {
    const [buttonText, setButtonText] = useState('Share it');

    if (!blog) {
        return null;
    }

    const handleShare = async () => {
        const shareData = {
            title: blog.title,
            text: "Check out this article from Home Konnect!",
            url: window.location.href,
        };

        // Check if Web Share API is available and can share files
        if (navigator.share && navigator.canShare) {
            setButtonText('Preparing image...');
            try {
                // Fetch the image from the public URL
                const response = await fetch(blog.image);
                const blob = await response.blob();
                const imageFile = new File([blob], 'blog-image.jpg', { type: blob.type });

                const shareDataWithFile = {
                    ...shareData,
                    files: [imageFile],
                };

                // Check if the browser can share this file
                if (navigator.canShare({ files: [imageFile] })) {
                    await navigator.share(shareDataWithFile);
                    setButtonText('Shared!');
                } else {
                    // Fallback if file sharing isn't supported, just share the link
                    await navigator.share(shareData);
                    setButtonText('Shared!');
                }
            } catch (err) {
                console.error('Share failed:', err);
                setButtonText('Share it');
            }
        } else {
            // Fallback: Copy link to clipboard
            try {
                await navigator.clipboard.writeText(shareData.url);
                setButtonText('Link Copied!');
            } catch (err) {
                console.error('Failed to copy link:', err);
                alert('Failed to copy link. Please copy the URL from your browser.');
            }
        }

        // Reset button text after 2 seconds
        setTimeout(() => setButtonText('Share it'), 2000);
    };

    return (
        <div className="bg-white font-sans">
            {/* <Navbar /> */}
            <main>
                <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
                    {/* Blog Header */}
                    <div className="mb-10 text-left">
                        <div className="flex items-start gap-3 mb-3">
                            <Palmtree size={32} className="text-green-600 flex-shrink-0" />
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight flex-grow">{blog.title}</h1>
                        </div>
                        <p className="text-base text-gray-600 md:ml-12 mb-6">
                            By <span className="text-yellow-600 font-semibold">{blog.author}</span> | {blog.date} | {blog.readTime}
                        </p>
                        <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
                            <Image src={blog.image} alt={blog.title} fill className="object-cover" priority />
                        </div>
                    </div>

                    {/* Blog Content */}
                    <div className="text-gray-700 text-base leading-relaxed">
                        {blog.fullContent.map((contentBlock, index) => (
                            <BlogContentRenderer key={index} content={contentBlock} />
                        ))}
                    </div>

                    {/* Share Button */}
                    <div className="mt-12 text-left">
                        <button 
                            onClick={handleShare}
                            className="inline-flex items-center gap-2 bg-white text-green-600 font-bold py-3 px-6 rounded-full hover:bg-green-50 transition shadow-md border border-gray-200"
                        >
                            <Share2 size={20} />
                            {buttonText}
                        </button>
                    </div>
                </div>
            </main>

            {/* Latest in Blogs (Related Blogs) */}
            {relatedBlogs.length > 0 && (
                <section className="bg-gray-50 py-16">
                    <div className="container mx-auto max-w-7xl px-4">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-left">Latest in Blogs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedBlogs.map(rb => (
                                <RelatedBlogCard key={rb.id} blog={rb} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}