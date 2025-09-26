'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaPhoneAlt, FaChevronDown, FaSearch, FaUser, FaShoppingBag, 
  FaChevronLeft, FaChevronRight 
} from 'react-icons/fa';

// A simple SVG placeholder for the logo
const HomeKonnectLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0L0 25V75L50 100L100 75V25L50 0ZM85 66.25L50 84.375L15 66.25V33.75L50 15.625L85 33.75V66.25Z" fill="currentColor"/>
  </svg>
);

const TeamMemberCard: React.FC<{ imgSrc: string; name: string; title: string; subtitle: string }> = ({ imgSrc, name, title, subtitle }) => (
  <div className="text-center group">
    <div className="overflow-hidden">
      <Image src={imgSrc} alt={name} width={300} height={350} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <h3 className="mt-4 font-semibold text-lg text-gray-800">{name}</h3>
    <p className="text-sm text-gray-500">{title}</p>
    <a href="#" className="text-sm text-green-600 font-medium">{subtitle}</a>
  </div>
);

export default function AboutPage() {
    const [activeTeamTab, setActiveTeamTab] = useState('Sales');

    const teamMembers = [
      { name: 'GOKUL', title: 'THE DETAILS', subtitle: 'SEE DETAILS', imgSrc: 'https://picsum.photos/300/350?random=1' },
      { name: 'AASWIN SALE', title: 'THE DETAILS', subtitle: 'SEE DETAILS', imgSrc: 'https://picsum.photos/300/350?random=2' },
      { name: 'VLLAVAN. M', title: 'THE DETAILS', subtitle: 'SEE DETAILS', imgSrc: 'https://picsum.photos/300/350?random=3' },
      { name: 'PRIYA KIYA KAMALDEANDLAN', title: 'THE DETAILS', subtitle: 'SEE DETAILS', imgSrc: 'https://picsum.photos/300/350?random=4' },
      { name: 'ABBAS', title: 'THE DETAILS', subtitle: 'SEE DETAILS', imgSrc: 'https://picsum.photos/300/350?random=5' },
      { name: 'DIVYA. S', title: 'THE DETAILS', subtitle: 'SEE DETAILS', imgSrc: 'https://picsum.photos/300/350?random=6' },
    ];

    const teamTabs = ['Sales', 'Support', 'Facilities', 'Head of support', 'Finance & Accounts', 'Human Resources', 'Head Of Sales', 'Marketing', 'Videographer'];

    return (
        <main>
            {/* Header & Hero Section */}
            <div className="relative">
                <header className="absolute top-0 left-0 right-0 z-20 text-white">
                    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <HomeKonnectLogo className="h-12 w-12"/>
                             <div>
                                <h1 className="text-xl font-bold tracking-wider">HOME KONNECT</h1>
                                <p className="text-xs opacity-80">Connecting to your dream home</p>
                            </div>
                        </div>
                        <nav className="hidden lg:flex items-center space-x-8 text-sm">
                            <a href="#" className="flex items-center py-2">All Cities <FaChevronDown className="w-4 h-4 ml-1" /></a>
                            <Link href="/" className="py-2 hover:text-gray-300">Home</Link>
                            {/* Example of active state for the current page */}
                            <Link href="/about" className="py-2 font-semibold border-b-2 border-white">About</Link>
                            <Link href="/contact" className="py-2 hover:text-gray-300">Contact Us</Link>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="hidden md:flex items-center border border-white/50 py-2 px-4 rounded-full hover:bg-white/10 transition text-sm">
                                <FaPhoneAlt className="w-4 h-4 mr-2"/> Call Us 
                                <Image src="https://flagcdn.com/in.svg" alt="India Flag" width={20} height={20} className="w-5 h-5 ml-2 rounded-full object-cover"/>
                            </a>
                            <div className="flex items-center space-x-4">
                                <a href="#"><FaShoppingBag className="w-6 h-6"/></a>
                                <a href="#"><FaSearch className="w-6 h-6"/></a>
                                <a href="#"><FaUser className="w-6 h-6"/></a>
                            </div>
                        </div>
                    </div>
                </header>
                
                <div className="relative h-[450px] text-white overflow-hidden rounded-b-3xl">
                    <Image src="https://picsum.photos/1920/600?image=1074" alt="Cityscape" layout="fill" objectFit="cover" className="absolute inset-0"/>
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
                        <h2 className="text-5xl font-bold">About Us</h2>
                        <p className="text-lg mt-2">Meet our family.</p>
                    </div>
                </div>
            </div>

            {/* About Home Konnect Section */}
            <section className="py-20 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-800">About Home Konnect®</h2>
                    <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto italic">"GREAT THINGS IN BUSINESS ARE NEVER DONE BY ONE PERSON. THEY'RE DONE BY A TEAM OF PEOPLE"</p>
                    <p className="mt-2 text-lg text-gray-800 font-semibold">-Steve jobs</p>
                </div>
            </section>
            
            {/* Team Image Section */}
            <section className="container mx-auto px-6 pb-20">
                <div className="border-t-4 border-green-600 pt-4">
                    <Image src="https://picsum.photos/1200/600?random=10" alt="Home Konnect Team" width={1200} height={600} className="w-full h-auto object-cover"/>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 space-y-20">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <Image src="https://picsum.photos/600/400?random=11" alt="Our Vision" width={600} height={400} className="w-full rounded-lg"/>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
                            <p className="text-gray-500 mt-2 mb-4">What Home Konnect® envisions</p>
                            <p className="text-lg text-gray-700">Providing genuine delightful experiences to our Customers.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <Image src="https://picsum.photos/600/400?random=12" alt="Our Mission" width={600} height={400} className="w-full rounded-lg"/>
                        </div>
                        <div className="w-full md:w-1/2">
                             <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
                            <p className="text-gray-500 mt-2 mb-4">What Home Konnect® stands for</p>
                            <p className="text-lg text-gray-700 leading-relaxed">To be the top-pick for our customers in their journey of exploring, buying, selling, renting & financing their dream home. We are fiercely passionate about creating long standing value for our Customers guided by our core principles of integrity, professionalism and ethics.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Message from CEO */}
            <section className="bg-[#d4a017] py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold">Message From The CEO</h2>
                    <p className="mt-2 mb-8">Our core objective</p>
                    <p className="max-w-4xl mx-auto leading-relaxed">
                        Since its inception in 2012, our core objective has been to help people buy their dream homes with transparency & trust. HomeKonnect.com provides information to scores of home buyers while offering them end-to-end assistance in the home-buying process through a mix of technology-enabled tools as well as brilliant on-ground support. We are blessed to have a team that has some of the best talent in the Real estate industry. Today, we are an Award Winning Top Rated Agency with the support and patronage of Customers, Employees and Partners!
                    </p>
                    <p className="mt-6 font-semibold">Vijay A - Founder & CEO</p>
                </div>
            </section>

            {/* CEO Quote */}
            <section className="container mx-auto px-6 my-[-50px] relative z-10">
                <div className="flex flex-col md:flex-row items-stretch max-w-5xl mx-auto shadow-lg rounded-xl overflow-hidden">
                    <div className="w-full md:w-1/3">
                        <Image src="https://picsum.photos/400/500?random=13" alt="Vijay A - Founder & CEO" width={400} height={500} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full md:w-2/3 bg-gradient-to-r from-gray-400 to-gray-200 flex items-center justify-center p-12 text-center">
                        <div>
                            <p className="text-3xl font-bold text-gray-800 italic">"DO IT WITH PASSION OR NOT AT ALL"</p>
                            <p className="mt-4 text-gray-700">- ROSA NOUCHETTE CAREY</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Meet Our Team */}
            <section className="py-20 mt-12">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
                        <p className="text-gray-500 mt-2">That makes us tick</p>
                    </div>
                    <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 border-b mb-12">
                        {teamTabs.map((tab) => (
                            <button 
                                key={tab} 
                                onClick={() => setActiveTeamTab(tab)}
                                className={`py-2 px-1 transition-colors ${activeTeamTab === tab ? 'text-green-600 font-semibold border-b-2 border-green-600' : 'hover:text-green-600'}`}>
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {teamMembers.map(member => <TeamMemberCard key={member.name} {...member} />)}
                    </div>
                    <div className="flex justify-center items-center gap-4 mt-12">
                        <button className="w-10 h-10 flex items-center justify-center border-2 border-green-500 rounded-full text-green-500 hover:bg-green-500 hover:text-white transition-colors">
                            <FaChevronLeft className="w-6 h-6" />
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-full text-white font-bold">1</button>
                        <button className="w-10 h-10 flex items-center justify-center text-gray-500 font-bold hover:text-green-500">2</button>
                        <button className="w-10 h-10 flex items-center justify-center text-gray-500 font-bold hover:text-green-500">3</button>
                        <button className="w-10 h-10 flex items-center justify-center text-gray-500 font-bold hover:text-green-500">4</button>
                        <button className="w-10 h-10 flex items-center justify-center border-2 border-green-500 rounded-full text-green-500 hover:bg-green-500 hover:text-white transition-colors">
                            <FaChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};