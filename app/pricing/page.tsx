import React from 'react';
import Navbar from '@/components/shared/Navbar';
import DetailedFooter from '@/components/aboutPage/DetailedFooter';
import SiteMapFooter from '@/components/homePage/SiteMapFooter';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa'; // Importing WhatsApp icon

// --- Refactored Reusable Card for Pricing Tiers (Buying/Selling) ---
interface PriceCardProps {
  category: string;
  price: string;
  priceSuffix: string;
  priceDescription: string;
  services: string[];
  buttonIcon?: React.ReactNode; // Optional custom icon for the button
}

function PriceCard({ category, price, priceSuffix, priceDescription, services, buttonIcon = <FaWhatsapp size={20} /> }: PriceCardProps) {
    return (
        <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg flex flex-col justify-between">
            <div>
                <h3 className="font-serif text-gray-500 tracking-widest text-sm mb-2">{category}</h3>
                <p className="my-3">
                    <span className="text-green-600 text-5xl font-bold align-top">*</span>
                    <span className="text-7xl font-serif font-bold text-gray-800 mx-1">{price}</span>
                    <span className="text-green-600 text-5xl font-bold align-top">{priceSuffix}</span>
                </p>
                <p className="font-serif text-gray-500 tracking-widest uppercase text-sm mb-5">{priceDescription}</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                    {services.map((service, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">•</span>
                            <span>{service}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <button className="w-full bg-black text-white py-3 px-6 mt-6 rounded-lg font-bold text-base hover:bg-gray-800 transition-colors flex items-center justify-center gap-3">
                {buttonIcon}
                KNOW MORE
            </button>
        </div>
    );
}

// --- New Dedicated Card for Renting / Leasing ---
interface RentingLeasingCardProps {
  category: string;
  priceMain: string;
  priceSub: string;
  priceDescription: string;
  lessorServices: string[];
  lesseeServices: string[];
  buttonIcon?: React.ReactNode;
}

function RentingLeasingCard({ category, priceMain, priceSub, priceDescription, lessorServices, lesseeServices, buttonIcon = <FaWhatsapp size={20} /> }: RentingLeasingCardProps) {
    return (
        <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg flex flex-col justify-between">
            <div>
                <h3 className="font-serif text-gray-500 tracking-widest text-sm mb-2">{category}</h3>
                <p className="my-3">
                    <span className="text-green-600 text-5xl font-bold align-top">*</span>
                    <span className="text-7xl font-serif font-bold text-gray-800 mx-1">{priceMain}</span>
                    <span className="text-green-600 text-5xl font-bold align-top">{priceSub}</span>
                </p>
                <p className="font-serif text-gray-500 tracking-widest uppercase text-sm mb-5">{priceDescription}</p>

                <h4 className="font-serif text-gray-700 font-bold tracking-widest text-xs mb-3">FOR LESSORS</h4>
                <ul className="space-y-2 text-gray-600 text-sm mb-6">
                    {lessorServices.map((service, index) => (
                        <li key={`lessor-${index}`} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">•</span>
                            <span>{service}</span>
                        </li>
                    ))}
                </ul>

                <h4 className="font-serif text-gray-700 font-bold tracking-widest text-xs mb-3">FOR LESSEES</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                    {lesseeServices.map((service, index) => (
                        <li key={`lessee-${index}`} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">•</span>
                            <span>{service}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <button className="w-full bg-black text-white py-3 px-6 mt-6 rounded-lg font-bold text-base hover:bg-gray-800 transition-colors flex items-center justify-center gap-3">
                {buttonIcon}
                KNOW MORE
            </button>
        </div>
    );
}

// --- Main Page Component ---
export default function PricingPage() {
    // Data for the pricing cards
    const buyingData = [
        { category: 'BUYERS (NEW)', price: '0', priceSuffix: '%', priceDescription: 'ON SALE PRICE', services: ['NO FEES for buying New properties/projects', 'Unlimited Site Visits', 'Research advice on best projects & localities', 'Professional advice for best ROI', 'NRI/HNI specific advice', 'Assistance with Bank Loans', 'Post Sale Assistance'] },
        { category: 'BUYERS (RESALE)', price: '2', priceSuffix: '%', priceDescription: 'ON SALE PRICE', services: ['Unlimited Site Visits', 'NRI/HNI specific advice', 'Assistance with Bank Loans', 'Seller meetings & negotiation', 'Paperwork including Sale Agreement', 'Legal Opinions from Top Lawyers', 'Post Sale Assistance'] }
    ];

    const sellingData = [
        { category: 'SELLERS', price: '2', priceSuffix: '%', priceDescription: 'ONWARDS - ON SALE PRICE', services: ['Pricing & Market Trends information', 'Online Marketing & Exposure', 'Tips to improve Property’s Curb Appeal', 'All Site Inspections handled for you by our trusted team', 'Remote NRI/HNI Selling advice', 'Offer Meetings with Buyers', 'Negotiation', 'Paperwork - Sale Agreement', 'Registration support', 'Post Sale Assistance'] },
        { category: 'BUILDERS', price: '2', priceSuffix: '%', priceDescription: 'ONWARDS - ON SALE PRICE', services: ['Pricing & Market Trends information', 'Online Marketing & Exposure', 'Tips to improve Property’s Curb Appeal', 'All Site Inspections handled for you by our trusted team', 'Paperwork - Sale Agreement', 'Registration support', 'Post Sale Assistance'] }
    ];

    const rentingLeasingData = {
        category: 'FOR RENTALS',
        priceMain: '1',
        priceSub: 'MTH',
        priceDescription: 'ON ONE MONTH\'S RENT AMOUNT',
        lessorServices: [
            'Pricing & Market Trends information',
            'Identifying Potential Tenants',
            'Suggesting steps to improve property’s Curb Appeal',
            'Advising Lessors on fixing of Rent inline with market',
            'Genuine offers from Tenants',
            'Negotiation of Lease terms with Tenants',
            'Rental Agreement Help',
            'Security Deposit collection'
        ],
        lesseeServices: [
            'Identifying suitable properties',
            'Handling all Tenant Site visits'
        ]
    };

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
                    <span>PRICING</span>
                </div>

                {/* Main Content */}
                <div>
                    <p className="text-gray-600 mb-12 max-w-4xl">Home Konnect is a boutique residential marketing consultant specializing in primary (new) & secondary (resale) sales and rental/lease for hi-end properties/projects.</p>
                    
                    {/* Buying Section */}
                    <section className="mb-16">
                        <h2 className="text-4xl font-serif text-gray-800 font-bold mb-8">BUYING</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {buyingData.map((card, index) => <PriceCard key={index} {...card} />)}
                        </div>
                    </section>

                    {/* Selling Section */}
                    <section className="mb-16">
                        <h2 className="text-4xl font-serif text-gray-800 font-bold mb-8">SELLING</h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {sellingData.map((card, index) => <PriceCard key={index} {...card} />)}
                        </div>
                    </section>

                    {/* Renting / Leasing Section */}
                    <section>
                        <h2 className="text-4xl font-serif text-gray-800 font-bold mb-8">RENTING / LEASING</h2>
                        {/* This section now uses the specialized RentingLeasingCard */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Use grid for responsiveness if you add more rental cards later */}
                            <RentingLeasingCard {...rentingLeasingData} />
                        </div>
                    </section>
                </div>
            </main>
            <SiteMapFooter />
            <DetailedFooter />
        </div>
    );
}