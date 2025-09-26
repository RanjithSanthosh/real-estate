// components/Footer.tsx or app/Footer.tsx

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {/* Column 1: Brand */}
                    <div className="col-span-2 lg:col-span-1">
                        <h2 className="text-2xl font-bold text-white mb-4">Home Konnect®</h2>
                        <p className="text-sm">CRISIL Rated & RERA</p>
                    </div>

                    {/* Column 2: Resources */}
                    <div>
                        <h3 className="font-bold text-white mb-4">Resources And Links</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:text-white">Patram St</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Barnaby</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Resources</a></li>
                        </ul>
                    </div>
                    
                    {/* Column 3: Properties by City */}
                    <div>
                        <h3 className="font-bold text-white mb-4">Properties By City</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:text-white">Chennai Diabetic</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Foot Care Centre</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Sangam Cinemas</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Properties by Type */}
                    <div>
                        <h3 className="font-bold text-white mb-4">Properties By Type</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:text-white">Apartments</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Villas</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Plots</a></li>
                        </ul>
                    </div>

                    {/* Column 5: Properties by Status */}
                    <div>
                        <h3 className="font-bold text-white mb-4">Properties By Status</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:text-white">Ready to Move</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Under Construction</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Home Konnect. All Rights Reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-white"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-white"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;