// // 'use client';

// // import React, { useState, useMemo } from 'react';
// // import Navbar from '@/components/shared/Navbar';
// // import DetailedFooter from '@/components/aboutPage/DetailedFooter';
// // import SiteMapFooter from '@/components/homePage/SiteMapFooter';
// // import { blogsData, Blog } from '../data/blogs';
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { Palmtree, ChevronDown, ChevronUp } from 'lucide-react';

// // // --- Reusable card for the "Latest in Blogs" sidebar ---
// // function LatestBlogCard({ blog }: { blog: Blog }) {
// //     return (
// //         <Link href={`/blogs/${blog.slug}`} className="flex items-center gap-4 group">
// //             <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
// //                 <Image 
// //                     src={blog.image} 
// //                     alt={blog.title} 
// //                     fill 
// //                     className="object-cover"
// //                     sizes="(max-width: 768px) 20vw, 10vw"
// //                 />
// //             </div>
// //             <div>
// //                 <p className="flex items-center text-xs text-gray-500 mb-1">
// //                     <Palmtree size={14} className="text-green-600 mr-1.5" />
// //                     {blog.tag || 'Real Estate'}
// //                 </p>
// //                 <h4 className="font-semibold text-gray-800 leading-tight group-hover:text-green-600 transition-colors line-clamp-2">
// //                     {blog.title}
// //                 </h4>
// //                 <p className="text-xs text-gray-400 mt-1">{blog.date}</p>
// //             </div>
// //         </Link>
// //     );
// // }

// // // --- Main Page Component ---
// // export default function EmiCalculatorPage() {
// //     const latestBlogs = blogsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);
    
// //     // State for the calculator
// //     const [loanAmount, setLoanAmount] = useState(3000000); // 30 L
// //     const [loanTenure, setLoanTenure] = useState(10); // 10 years
// //     const [interestRate, setInterestRate] = useState(10); // 10%
// //     const [isChartVisible, setIsChartVisible] = useState(true);

// //     const { emi, totalPayable, totalInterest, principalPercent } = useMemo(() => {
// //         const principal = loanAmount;
// //         const rate = interestRate / 12 / 100;
// //         const n = loanTenure * 12;
// //         if (principal <= 0 || rate <= 0 || n <= 0) return { emi: 0, totalPayable: 0, totalInterest: 0, principalPercent: 100 };
// //         const emiCalc = principal * rate * Math.pow(1 + rate, n) / (Math.pow(1 + rate, n) - 1);
// //         const totalPayableCalc = emiCalc * n;
// //         const totalInterestCalc = totalPayableCalc - principal;
// //         const principalPercentCalc = (principal / totalPayableCalc) * 100;
// //         return { emi: emiCalc, totalPayable: totalPayableCalc, totalInterest: totalInterestCalc, principalPercent: principalPercentCalc };
// //     }, [loanAmount, loanTenure, interestRate]);

// //     const formatCurrency = (val: number) => `₹ ${new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(val)}`;
// //     const formatLakhs = (val: number) => `${(val / 100000).toFixed(1)} L`;
// //     const formatYrs = (val: number) => `${val} Yrs`;

// //     return (
// //         <div className="bg-white">
// //             <Navbar />
// //             <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
// //                 {/* Breadcrumbs */}
// //                 <div className="text-sm text-green-600 font-semibold tracking-wider mb-8">
// //                     <Link href="/home" className="hover:underline">HOME</Link>
// //                     <span className="mx-2">&gt;</span>
// //                     <Link href="#" className="hover:underline">RESOURCES</Link>
// //                     <span className="mx-2">&gt;</span>
// //                     <span>EMI CALCULATOR</span>
// //                 </div>

// //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
// //                     {/* Main Content Area: EMI Calculator */}
// //                     <div className="lg:col-span-2">
// //                         <h1 className="text-4xl md:text-5xl font-serif text-gray-900 font-bold mb-6">EMI Calculator</h1>
// //                         <div className="relative mb-6">
// //                             <select className="font-semibold text-gray-700 bg-gray-100 border-none focus:ring-2 focus:ring-green-500 appearance-none py-2 pl-4 pr-10 rounded-md">
// //                                 <option>Range ₹ 10 Lakh - ₹ 1 Cr</option>
// //                                 <option>Range ₹ 1 Cr - ₹ 10 Cr</option>
// //                             </select>
// //                             <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
// //                         </div>

// //                         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
// //                             {/* Left side: Sliders */}
// //                             <div className="space-y-10">
// //                                 <div>
// //                                     <div className="flex justify-between items-center mb-1">
// //                                         <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">Loan Amount</label>
// //                                         <span className="font-bold text-green-600 text-lg">₹ {formatLakhs(loanAmount)}</span>
// //                                     </div>
// //                                     <input type="range" min="1000000" max="10000000" step="100000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500" />
// //                                     <div className="flex justify-between text-xs text-gray-500 mt-1"><span>10 L</span><span>25 L</span><span>50 L</span><span>75 L</span><span>1 Cr</span></div>
// //                                 </div>
// //                                 <div>
// //                                     <div className="flex justify-between items-center mb-1">
// //                                         <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">Loan Tenure</label>
// //                                         <span className="font-bold text-green-600 text-lg">{formatYrs(loanTenure)}</span>
// //                                     </div>
// //                                     <input type="range" min="5" max="30" step="1" value={loanTenure} onChange={(e) => setLoanTenure(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500" />
// //                                     <div className="flex justify-between text-xs text-gray-500 mt-1"><span>5 yrs</span><span>10 yrs</span><span>15 yrs</span><span>20 yrs</span><span>25 yrs</span><span>30 yrs</span></div>
// //                                 </div>
// //                                 <div>
// //                                     <div className="flex justify-between items-center mb-1">
// //                                         <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">Interest Rate</label>
// //                                         <span className="font-bold text-green-600 text-lg">{interestRate.toFixed(1)}% p.a</span>
// //                                     </div>
// //                                     <input type="range" min="7" max="15" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500" />
// //                                     <div className="flex justify-between text-xs text-gray-500 mt-1"><span>7%</span><span>8%</span><span>9%</span><span>10%</span><span>11%</span><span>12%</span><span>13%</span><span>14%</span><span>15%</span></div>
// //                                 </div>
// //                             </div>
                            
// //                             {/* Right side: Chart and Details */}
// //                             <div className="w-full">
// //                                 <button onClick={() => setIsChartVisible(!isChartVisible)} className="flex items-center justify-between w-full text-left mb-4">
// //                                     <span className="text-xs font-bold tracking-widest text-green-600">VIEW CHART</span>
// //                                     {isChartVisible ? <ChevronUp size={20} className="text-green-600" /> : <ChevronDown size={20} className="text-green-600" />}
// //                                 </button>
// //                                 {isChartVisible && (
// //                                     <div className="flex flex-col items-center">
// //                                         <div className="relative w-48 h-48">
// //                                             <div className="absolute inset-0 rounded-full bg-gray-200"></div>
// //                                             <div className="absolute inset-0 rounded-full" style={{ background: `conic-gradient(#059669 ${principalPercent}%, #D1D5DB ${principalPercent}%)` }}></div>
// //                                             <div className="absolute inset-4 rounded-full bg-white"></div>
// //                                         </div>
// //                                         <div className="w-full mt-6 space-y-3 text-gray-700">
// //                                             <div className="flex justify-between items-center text-sm">
// //                                                 <span><span className="inline-block w-3 h-3 bg-green-600 rounded-full mr-2"></span>Principal:</span>
// //                                                 <span className="font-semibold">{formatCurrency(loanAmount)}</span>
// //                                             </div>
// //                                              <div className="flex justify-between items-center text-sm">
// //                                                 <span><span className="inline-block w-3 h-3 bg-gray-300 rounded-full mr-2"></span>Interest:</span>
// //                                                 <span className="font-semibold">{formatCurrency(totalInterest)}</span>
// //                                             </div>
// //                                             <div className="flex justify-between items-center text-sm">
// //                                                 <span>Total Payable:</span>
// //                                                 <span className="font-semibold">{formatCurrency(totalPayable)}</span>
// //                                             </div>
// //                                             <div className="flex justify-between items-center pt-3 mt-3 border-t border-dashed">
// //                                                 <span className="text-lg font-bold">EMI :</span>
// //                                                 <span className="text-2xl font-bold text-green-600">{formatCurrency(emi)}</span>
// //                                             </div>
// //                                         </div>
// //                                     </div>
// //                                 )}
// //                             </div>
// //                         </div>
// //                     </div>

// //                     {/* Sidebar: Latest in Blogs */}
// //                     <aside>
// //                         <div className="sticky top-24">
// //                             <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
// //                                 LATEST IN BLOGS
// //                             </h2>
// //                             <div className="space-y-6">
// //                                 {latestBlogs.map(blog => (
// //                                     <LatestBlogCard key={blog.id} blog={blog} />
// //                                 ))}
// //                             </div>
// //                         </div>
// //                     </aside>
// //                 </div>
// //             </main>
// //             <SiteMapFooter />
// //             <DetailedFooter />
// //         </div>
// //     );
// // }




// 'use client';

// import React, { useState, useMemo } from 'react';
// import Navbar from '@/components/shared/Navbar';
// import DetailedFooter from '@/components/aboutPage/DetailedFooter';
// import SiteMapFooter from '@/components/homePage/SiteMapFooter';
// import { blogsData, Blog } from '../data/blogs';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Palmtree, ChevronDown, ChevronUp } from 'lucide-react';

// // --- Reusable card for the "Latest in Blogs" sidebar ---
// function LatestBlogCard({ blog }: { blog: Blog }) {
//     return (
//         <Link href={`/blogs/${blog.slug}`} className="flex items-center gap-4 group">
//             <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
//                 <Image 
//                     src={blog.image} 
//                     alt={blog.title} 
//                     fill 
//                     className="object-cover"
//                     sizes="(max-width: 768px) 20vw, 10vw"
//                 />
//             </div>
//             <div>
//                 <p className="flex items-center text-xs text-gray-500 mb-1">
//                     <Palmtree size={14} className="text-green-600 mr-1.5" />
//                     {blog.tag || 'Real Estate'}
//                 </p>
//                 <h4 className="font-semibold text-gray-800 leading-tight group-hover:text-green-600 transition-colors line-clamp-2">
//                     {blog.title}
//                 </h4>
//                 <p className="text-xs text-gray-400 mt-1">{blog.date}</p>
//             </div>
//         </Link>
//     );
// }

// // --- Main Page Component ---
// export default function EmiCalculatorPage() {
//     // Get the 5 most recent blogs for the sidebar
//     const latestBlogs = blogsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);
    
//     // State for the calculator
//     const [loanAmount, setLoanAmount] = useState(3000000); // 30 L
//     const [loanTenure, setLoanTenure] = useState(10); // 10 years
//     const [interestRate, setInterestRate] = useState(10); // 10%
//     const [isChartVisible, setIsChartVisible] = useState(true);

//     const { emi, totalPayable, totalInterest, principalPercent } = useMemo(() => {
//         const principal = loanAmount;
//         const rate = interestRate / 12 / 100;
//         const n = loanTenure * 12;
//         if (principal <= 0 || rate <= 0 || n <= 0) return { emi: 0, totalPayable: 0, totalInterest: 0, principalPercent: 100 };
//         const emiCalc = principal * rate * Math.pow(1 + rate, n) / (Math.pow(1 + rate, n) - 1);
//         const totalPayableCalc = emiCalc * n;
//         const totalInterestCalc = totalPayableCalc - principal;
//         const principalPercentCalc = (principal / totalPayableCalc) * 100;
//         return { emi: emiCalc, totalPayable: totalPayableCalc, totalInterest: totalInterestCalc, principalPercent: principalPercentCalc };
//     }, [loanAmount, loanTenure, interestRate]);

//     const formatCurrency = (val: number) => `₹ ${new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(val)}`;
//     const formatLakhs = (val: number) => `${(val / 100000).toFixed(1)} L`;
//     const formatYrs = (val: number) => `${val} Yrs`;

//     return (
//         <div className="bg-white">
//             <Navbar />
//             <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//                 {/* Breadcrumbs */}
//                 <div className="text-sm text-green-600 font-semibold tracking-wider mb-8">
//                     <Link href="/home" className="hover:underline">HOME</Link>
//                     <span className="mx-2">&gt;</span>
//                     <Link href="#" className="hover:underline">RESOURCES</Link>
//                     <span className="mx-2">&gt;</span>
//                     <span>EMI CALCULATOR</span>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//                     {/* Main Content Area: EMI Calculator */}
//                     <div className="lg:col-span-2">
//                         <h1 className="text-4xl md:text-5xl font-serif text-gray-900 font-bold mb-6">EMI Calculator</h1>
//                         <div className="relative mb-6">
//                             <select className="font-semibold text-gray-700 bg-gray-100 border-none focus:ring-2 focus:ring-green-500 appearance-none py-2 pl-4 pr-10 rounded-md">
//                                 <option>Range ₹ 10 Lakh - ₹ 1 Cr</option>
//                                 <option>Range ₹ 1 Cr - ₹ 10 Cr</option>
//                             </select>
//                             <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//                             {/* Left side: Sliders */}
//                             <div className="space-y-10">
//                                 <div>
//                                     <div className="flex justify-between items-center mb-1">
//                                         <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">Loan Amount</label>
//                                         <span className="font-bold text-green-600 text-lg">₹ {formatLakhs(loanAmount)}</span>
//                                     </div>
//                                     <input type="range" min="1000000" max="10000000" step="100000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500" />
//                                     <div className="flex justify-between text-xs text-gray-500 mt-1"><span>10 L</span><span>25 L</span><span>50 L</span><span>75 L</span><span>1 Cr</span></div>
//                                 </div>
//                                 <div>
//                                     <div className="flex justify-between items-center mb-1">
//                                         <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">Loan Tenure</label>
//                                         <span className="font-bold text-green-600 text-lg">{formatYrs(loanTenure)}</span>
//                                     </div>
//                                     <input type="range" min="5" max="30" step="1" value={loanTenure} onChange={(e) => setLoanTenure(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500" />
//                                     <div className="flex justify-between text-xs text-gray-500 mt-1"><span>5 yrs</span><span>10 yrs</span><span>15 yrs</span><span>20 yrs</span><span>25 yrs</span><span>30 yrs</span></div>
//                                 </div>
//                                 <div>
//                                     <div className="flex justify-between items-center mb-1">
//                                         <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">Interest Rate</label>
//                                         <span className="font-bold text-green-600 text-lg">{interestRate.toFixed(1)}% p.a</span>
//                                     </div>
//                                     <input type="range" min="7" max="15" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500" />
//                                     <div className="flex justify-between text-xs text-gray-500 mt-1"><span>7%</span><span>8%</span><span>9%</span><span>10%</span><span>11%</span><span>12%</span><span>13%</span><span>14%</span><span>15%</span></div>
//                                 </div>
//                             </div>
                            
//                             {/* Right side: Chart and Details */}
//                             <div className="w-full">
//                                 <button onClick={() => setIsChartVisible(!isChartVisible)} className="flex items-center justify-between w-full text-left mb-4">
//                                     <span className="text-xs font-bold tracking-widest text-green-600">VIEW CHART</span>
//                                     {isChartVisible ? <ChevronUp size={20} className="text-green-600" /> : <ChevronDown size={20} className="text-green-600" />}
//                                 </button>
//                                 {isChartVisible && (
//                                     <div className="flex flex-col items-center">
//                                         <div className="relative w-48 h-48">
//                                             <div className="absolute inset-0 rounded-full bg-gray-200"></div>
//                                             <div className="absolute inset-0 rounded-full" style={{ background: `conic-gradient(#059669 ${principalPercent}%, #D1D5DB ${principalPercent}%)` }}></div>
//                                             <div className="absolute inset-4 rounded-full bg-white"></div>
//                                         </div>
//                                         <div className="w-full mt-6 space-y-3 text-gray-700">
//                                             <div className="flex justify-between items-center text-sm">
//                                                 <span><span className="inline-block w-3 h-3 bg-green-600 rounded-full mr-2"></span>Principal:</span>
//                                                 <span className="font-semibold">{formatCurrency(loanAmount)}</span>
//                                             </div>
//                                              <div className="flex justify-between items-center text-sm">
//                                                 <span><span className="inline-block w-3 h-3 bg-gray-300 rounded-full mr-2"></span>Interest:</span>
//                                                 <span className="font-semibold">{formatCurrency(totalInterest)}</span>
//                                             </div>
//                                             <div className="flex justify-between items-center text-sm">
//                                                 <span>Total Payable:</span>
//                                                 <span className="font-semibold">{formatCurrency(totalPayable)}</span>
//                                             </div>
//                                             <div className="flex justify-between items-center pt-3 mt-3 border-t border-dashed">
//                                                 <span className="text-lg font-bold">EMI :</span>
//                                                 <span className="text-2xl font-bold text-green-600">{formatCurrency(emi)}</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Sidebar: Latest in Blogs */}
//                     <aside>
//                         <div className="sticky top-24">
//                             <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
//                                 LATEST IN BLOGS
//                             </h2>
//                             <div className="space-y-6">
//                                 {latestBlogs.map(blog => (
//                                     <LatestBlogCard key={blog.id} blog={blog} />
//                                 ))}
//                             </div>
                            
//                             {/* ✅ START: "View More" Button Added */}
//                             <div className="mt-8 text-center">
//                                 <Link href="/blogs" className="text-sm font-semibold text-green-600 hover:underline">
//                                     View More
//                                 </Link>
//                             </div>
//                             {/* ✅ END: "View More" Button Added */}

//                         </div>
//                     </aside>
//                 </div>
//             </main>
//             <SiteMapFooter />
//             <DetailedFooter />
//         </div>
//     );
// }






'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/shared/Navbar';
import DetailedFooter from '@/components/aboutPage/DetailedFooter';
import SiteMapFooter from '@/components/homePage/SiteMapFooter';
import { blogsData, Blog } from '../data/blogs';
import Image from 'next/image';
import Link from 'next/link';
import { Palmtree, ChevronDown, ChevronUp } from 'lucide-react';

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
                    sizes="(max-width: 768px) 20vw, 10vw"
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

// --- Define types for our loan ranges ---
type LoanRange = {
    label: string;
    min: number;
    max: number;
    step: number;
    labels: string[];
};

const loanRanges: LoanRange[] = [
    { label: 'Range ₹ 10 Lakh - ₹ 1 Cr', min: 1000000, max: 10000000, step: 100000, labels: ['10 L', '25 L', '50 L', '75 L', '1 Cr'] },
    { label: 'Range ₹ 1 Cr - ₹ 10 Cr', min: 10000000, max: 100000000, step: 1000000, labels: ['1 Cr', '2.5 Cr', '5 Cr', '7.5 Cr', '10 Cr'] },
    { label: 'Range ₹ 10 Cr - ₹ 100 Cr', min: 100000000, max: 1000000000, step: 10000000, labels: ['10 Cr', '25 Cr', '50 Cr', '75 Cr', '100 Cr'] },
];


// --- Main Page Component ---
export default function EmiCalculatorPage() {
    const latestBlogs = blogsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);
    
    // State for the calculator
    const [selectedRangeIndex, setSelectedRangeIndex] = useState(0);
    const [loanAmount, setLoanAmount] = useState(loanRanges[0].min);
    const [loanTenure, setLoanTenure] = useState(10);
    const [interestRate, setInterestRate] = useState(10);
    const [isChartVisible, setIsChartVisible] = useState(true);

    const activeRange = loanRanges[selectedRangeIndex];

    // Handle range change
    const handleRangeChange = (index: number) => {
        setSelectedRangeIndex(index);
        // Reset loan amount to the minimum of the new range
        setLoanAmount(loanRanges[index].min);
    };

    const { emi, totalPayable, totalInterest, principalPercent } = useMemo(() => {
        const principal = loanAmount;
        const rate = interestRate / 12 / 100;
        const n = loanTenure * 12;
        if (principal <= 0 || rate <= 0 || n <= 0) return { emi: 0, totalPayable: 0, totalInterest: 0, principalPercent: 100 };
        const emiCalc = principal * rate * Math.pow(1 + rate, n) / (Math.pow(1 + rate, n) - 1);
        const totalPayableCalc = emiCalc * n;
        const totalInterestCalc = totalPayableCalc - principal;
        const principalPercentCalc = (principal / totalPayableCalc) * 100;
        return { emi: emiCalc, totalPayable: totalPayableCalc, totalInterest: totalInterestCalc, principalPercent: principalPercentCalc };
    }, [loanAmount, loanTenure, interestRate]);

    const formatCurrency = (val: number) => `₹ ${new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(val)}`;
    const formatLakhs = (val: number) => {
        if (val >= 10000000) { // 1 Cr and above
            return `₹ ${(val / 10000000).toFixed(1)} Cr`;
        }
        return `₹ ${(val / 100000).toFixed(1)} L`;
    };
    const formatYrs = (val: number) => `${val} Yrs`;

    return (
        <div className="bg-white">
            <Navbar />
            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                {/* Breadcrumbs */}
                <div className="text-sm text-green-600 font-semibold tracking-wider mb-8">
                    <Link href="/home" className="hover:underline">HOME</Link>
                    <span className="mx-2">&gt;</span>
                    <Link href="#" className="hover:underline">RESOURCES</Link>
                    <span className="mx-2">&gt;</span>
                    <span>EMI CALCULATOR</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content Area: EMI Calculator */}
                    <div className="lg:col-span-2">
                        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 font-bold mb-6">EMI Calculator</h1>
                        <div className="relative mb-6">
                            <select 
                                value={selectedRangeIndex}
                                onChange={(e) => handleRangeChange(Number(e.target.value))}
                                className="font-semibold text-gray-700 bg-gray-100 border-none focus:ring-2 focus:ring-green-500 appearance-none py-2 pl-4 pr-10 rounded-md"
                            >
                                {loanRanges.map((range, index) => (
                                    <option key={index} value={index}>{range.label}</option>
                                ))}
                            </select>
                            <ChevronDown size={20} className="absolute left-48 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                            {/* Left side: Sliders */}
                            <div className="space-y-10">
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">Loan Amount</label>
                                        <span className="font-bold text-green-600 text-lg">{formatLakhs(loanAmount)}</span>
                                    </div>
                                    <input 
                                        type="range" 
                                        min={activeRange.min} 
                                        max={activeRange.max} 
                                        step={activeRange.step} 
                                        value={loanAmount} 
                                        onChange={(e) => setLoanAmount(Number(e.target.value))} 
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500" 
                                    />
                                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                                        {activeRange.labels.map(label => <span key={label}>{label}</span>)}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">Loan Tenure</label>
                                        <span className="font-bold text-green-600 text-lg">{formatYrs(loanTenure)}</span>
                                    </div>
                                    <input type="range" min="5" max="30" step="1" value={loanTenure} onChange={(e) => setLoanTenure(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500" />
                                    <div className="flex justify-between text-xs text-gray-500 mt-1"><span>5 yrs</span><span>10 yrs</span><span>15 yrs</span><span>20 yrs</span><span>25 yrs</span><span>30 yrs</span></div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">Interest Rate</label>
                                        <span className="font-bold text-green-600 text-lg">{interestRate.toFixed(1)}% p.a</span>
                                    </div>
                                    <input type="range" min="7" max="15" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500" />
                                    <div className="flex justify-between text-xs text-gray-500 mt-1"><span>7%</span><span>8%</span><span>9%</span><span>10%</span><span>11%</span><span>12%</span><span>13%</span><span>14%</span><span>15%</span></div>
                                </div>
                            </div>
                            
                            {/* Right side: Chart and Details */}
                            <div className="w-full">
                                <button onClick={() => setIsChartVisible(!isChartVisible)} className="flex items-center justify-between w-full text-left mb-4">
                                    <span className="text-xs font-bold tracking-widest text-green-600">VIEW CHART</span>
                                    {isChartVisible ? <ChevronUp size={20} className="text-green-600" /> : <ChevronDown size={20} className="text-green-600" />}
                                </button>
                                {isChartVisible && (
                                    <div className="flex flex-col items-center">
                                        <div className="relative w-48 h-48">
                                            <div className="absolute inset-0 rounded-full bg-gray-200"></div>
                                            <div className="absolute inset-0 rounded-full" style={{ background: `conic-gradient(#059669 ${principalPercent}%, #D1D5DB ${principalPercent}%)` }}></div>
                                            <div className="absolute inset-4 rounded-full bg-white"></div>
                                        </div>
                                        <div className="w-full mt-6 space-y-3 text-gray-700">
                                            <div className="flex justify-between items-center text-sm">
                                                <span><span className="inline-block w-3 h-3 bg-green-600 rounded-full mr-2"></span>Principal:</span>
                                                <span className="font-semibold">{formatCurrency(loanAmount)}</span>
                                            </div>
                                             <div className="flex justify-between items-center text-sm">
                                                <span><span className="inline-block w-3 h-3 bg-gray-300 rounded-full mr-2"></span>Interest:</span>
                                                <span className="font-semibold">{formatCurrency(totalInterest)}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span>Total Payable:</span>
                                                <span className="font-semibold">{formatCurrency(totalPayable)}</span>
                                            </div>
                                            <div className="flex justify-between items-center pt-3 mt-3 border-t border-dashed">
                                                <span className="text-lg font-bold">EMI :</span>
                                                <span className="text-2xl font-bold text-green-600">{formatCurrency(emi)}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
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
                            <div className="mt-8 text-center">
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