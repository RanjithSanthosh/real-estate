import React from 'react';
import Image from 'next/image';
import { 
  FaEnvelope, FaPhoneAlt, FaWhatsapp, 
  FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterestP 
} from 'react-icons/fa';

// A simple SVG placeholder for the logo, consistent with the previous component
const HomeKonnectLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0L0 25V75L50 100L100 75V25L50 0ZM85 66.25L50 84.375L15 66.25V33.75L50 15.625L85 33.75V66.25Z" fill="currentColor"/>
  </svg>
);

const Footer = () => {
    const linkSections1 = [
        {
            title: 'Properties By City',
            links: ['Bengaluru', 'Chennai', 'Coimbatore', 'Colombo', 'Hosur', 'Kodaikanal', 'Mysuru', 'Tiruppur', 'All cities']
        },
        {
            title: 'Properties By Type',
            links: ['Apartment For Sale', 'Villas & Row Houses', 'Plots', 'Residential', 'Commercial', 'All Property Types']
        },
        {
            title: 'Properties By Status',
            links: ['New Properties', 'Under Construction Properties', 'Ready to Move Properties', 'Resale Properties', 'All Properties']
        }
    ];

    const linkSections2 = [
        {
            title: 'Curated Collections',
            links: ['Luxury', 'Budget Friendly', 'Apartments', 'Villas & Row Houses', 'Plots', 'New Projects', 'Investments', 'Ready to Move', 'Resale']
        },
        {
            title: 'Quick links',
            links: ['Home', 'Our Team', 'Careers', 'Contact Us', 'Blogs', 'Awards and Press', 'Accreditation & Associations']
        },
        {
            title: 'Resources',
            links: ['Home Buyer\'s Guide', 'FAQ', 'Pricing', 'EMI Calculator', 'Vastu Tips', 'NRI Services', 'Get Home Loan']
        }
    ];

    return (
        <footer className="bg-[#f0f2f5]">
            <div className="container mx-auto px-6 pt-16">
                <h2 className="text-3xl font-bold text-center text-gray-800">Home Konnect®</h2>

                <div className="my-8 bg-[#dff0d8] p-4 text-center">
                    <p className="font-semibold text-[#3c763d]">Resource And Links</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
                    {linkSections1.map(section => (
                        <div key={section.title}>
                            <h3 className="font-bold text-gray-800 mb-4">{section.title}</h3>
                            <ul className="space-y-2 text-sm">
                                {section.links.map(link => (
                                    <li key={link}><a href="#" className="hover:text-green-600">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="my-8 bg-[#dff0d8] p-4 text-center">
                    <p className="font-semibold text-[#3c763d]">Resource And Links</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 pb-16">
                    {linkSections2.map(section => (
                        <div key={section.title}>
                            <h3 className="font-bold text-gray-800 mb-4">{section.title}</h3>
                            <ul className="space-y-2 text-sm">
                                {section.links.map(link => (
                                    <li key={link}><a href="#" className="hover:text-green-600">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <Image src="https://i.imgur.com/uSfeE4g.png" alt="Map" width={1920} height={400} className="w-full h-auto object-cover" />
            </div>

            <div className="bg-[#0a0a0a] text-gray-400">
                <div className="container mx-auto px-6 py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
                        <div>
                            <div className="flex items-center gap-3 mb-4 text-white">
                               <HomeKonnectLogo className="h-12 w-12"/>
                                <div>
                                    <h2 className="text-xl font-bold tracking-wider">HOME KONNECT</h2>
                                    <p className="text-xs text-gray-400">Connecting to your dream home</p>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed">
                                Home Konnect is a boutique CRISIL Rated & RERA Certified Real estate advisory with a refreshingly honest approach. At Home Konnect, we provide ene-to-end property solution for home buyers, owners, lesses and lessors. Our expert team of Real Estate advisors is known for forging & nurturing long standing relationships built on customers connect to their dream homes selling 10 lakh + sq.ft. of residential space. Our team has some of the best professionals in the Real estate industry who specialize in finding the right property for our clients thereby creting long standing value for them.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-6">
                               <Image src="https://i.imgur.com/8QzXkP8.png" alt="CRISIL" width={80} height={40} className="h-10 w-auto"/>
                               <Image src="https://i.imgur.com/vHqYlqL.png" alt="Award" width={56} height={56} className="h-14 w-auto"/>
                               <Image src="https://i.imgur.com/4qXj0u7.png" alt="Association" width={56} height={56} className="h-14 w-auto"/>
                            </div>
                            <p className="text-sm">RERA Agent Number TN/Agent/0572/2022</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-semibold text-white mb-4">Contact Us</h3>
                                <div className="flex flex-wrap gap-2">
                                    <a href="#" className="p-2.5 bg-gray-800 rounded-full hover:bg-yellow-400 transition-colors"><FaEnvelope className="w-5 h-5"/></a>
                                    <a href="#" className="p-2.5 bg-gray-800 rounded-full hover:bg-yellow-400 transition-colors"><FaPhoneAlt className="w-5 h-5"/></a>
                                    <a href="#" className="p-2.5 bg-gray-800 rounded-full hover:bg-yellow-400 transition-colors"><FaWhatsapp className="w-5 h-5"/></a>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-white mb-4">Social Links</h3>
                                <div className="flex flex-wrap gap-2">
                                    <a href="#" className="p-2.5 bg-gray-800 rounded-full hover:bg-yellow-400 transition-colors"><FaFacebookF className="w-5 h-5"/></a>
                                    <a href="#" className="p-2.5 bg-gray-800 rounded-full hover:bg-yellow-400 transition-colors"><FaInstagram className="w-5 h-5"/></a>
                                    <a href="#" className="p-2.5 bg-gray-800 rounded-full hover:bg-yellow-400 transition-colors"><FaLinkedinIn className="w-5 h-5"/></a>
                                    <a href="#" className="p-2.5 bg-gray-800 rounded-full hover:bg-yellow-400 transition-colors"><FaYoutube className="w-5 h-5"/></a>
                                    <a href="#" className="p-2.5 bg-gray-800 rounded-full hover:bg-yellow-400 transition-colors"><FaPinterestP className="w-5 h-5"/></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                        <p>HomeKonnect®.com 2025. All rights reserved.</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <span>|</span>
                            <a href="#" className="hover:text-white">Terms Of Use</a>
                            <span>|</span>
                            <a href="#" className="hover:text-white">Site Map</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;