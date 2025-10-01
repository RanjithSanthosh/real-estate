// // app/components/auth/LoginModal.tsx
// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { X, Phone } from 'lucide-react';
// import logoImage from "@/components/homePage/assets/logo.png";
// import googleIcon from "@/components/homePage/assets/logo.png"; // You will need to add a Google icon to your assets
// // import googleIcon from "@/components/homePage/assets/google-icon.png"; // You will need to add a Google icon to your assets

// interface LoginModalProps {
//   onClose: () => void;
// }

// export default function LoginModal({ onClose }: LoginModalProps) {
//   const [isLoginView, setIsLoginView] = useState(true);

//   return (
//     <div 
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-xs"
//       onClick={onClose}
//     >
//       <div 
//         className="relative bg-cover bg-center rounded-2xl shadow-2xl w-full max-w-4xl h-auto max-h-[90vh] overflow-hidden"
//         style={{ backgroundImage: `url('/backgrounds/modal-bg.jpg')` }} // Add a background image to public/backgrounds/
//         onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
//       >
//         <button 
//           onClick={onClose}
//           className="absolute top-4 right-4 text-white bg-black/30 rounded-full p-1.5 hover:bg-black/50 transition z-10"
//         >
//           <X size={20} />
//         </button>

//         <div className="grid md:grid-cols-2">
//           {/* Left Side: Branding */}
//           <div className="hidden md:flex flex-col justify-between p-8 text-white">
//             <div>
//               <Image src={logoImage} alt="Home Konnect Logo" width={180} />
//               <h1 className="text-5xl font-extrabold leading-tight mt-12">
//                 Connecting To Your Dream Home
//               </h1>
//             </div>
//             <div className="space-y-4">
//               <button className="flex items-center gap-3 border border-white/50 rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition">
//                 <Phone size={16} /> Call Us <span className="ml-2">🇮🇳</span>
//               </button>
//               <p className="text-xs text-white/70 max-w-sm">
//                 By proceeding, you agree with our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms Of Use</a>
//               </p>
//             </div>
//           </div>

//           {/* Right Side: Form */}
//           <div className="bg-white p-8 rounded-2xl md:rounded-l-none md:rounded-r-2xl">
//             {isLoginView ? (
//               // Login Form
//               <div className="space-y-6">
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
//                   <input type="email" id="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Enter Email Address" />
//                 </div>
//                 <div>
//                   <label htmlFor="password"  className="block text-sm font-medium text-gray-700">Password <span className="text-red-500">*</span></label>
//                   <input type="password" id="password" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Enter Password" />
//                 </div>
//                 <div className="text-right">
//                     <a href="#" className="text-sm font-medium text-green-600 hover:underline">Forgot Password?</a>
//                 </div>
//                 <button className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-green-600 transition shadow-lg">
//                   Login
//                 </button>
//               </div>
//             ) : (
//               // Registration Form
//               <div className="space-y-6">
//                  <div>
//                   <label htmlFor="reg-name" className="block text-sm font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
//                   <input type="text" id="reg-name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Enter Full Name" />
//                 </div>
//                 <div>
//                   <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
//                   <input type="email" id="reg-email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Enter Email Address" />
//                 </div>
//                 <div>
//                   <label htmlFor="reg-password"  className="block text-sm font-medium text-gray-700">Create Password <span className="text-red-500">*</span></label>
//                   <input type="password" id="reg-password" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Enter Password" />
//                 </div>
//                 <button className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-green-600 transition shadow-lg">
//                   Register
//                 </button>
//               </div>
//             )}

//             {/* Common Footer for both forms */}
//             <div className="mt-6">
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-300" />
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-2 bg-white text-gray-500">Or</span>
//                 </div>
//               </div>
//               <button className="mt-6 w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
//                 <Image src={googleIcon} alt="Google Icon" width={20} height={20} />
//                 Sign in with Google
//               </button>
//               <div className="mt-6 text-center text-sm">
//                 <p className="text-gray-600">
//                   {isLoginView ? 'Are you new?' : 'Already have an account?'}
//                   <button onClick={() => setIsLoginView(!isLoginView)} className="font-semibold text-green-600 hover:underline ml-1">
//                     {isLoginView ? 'Register Now' : 'Login'}
//                   </button>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// // app/components/auth/LoginModal.tsx
// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { X, Phone } from 'lucide-react';
// import logoImage from "@/components/homePage/assets/logo.png";
// import googleIcon from "@/components/homePage/assets/logo.png"; 
// import modalBgImage from '../../public/assets/aboutPage/AboutHERO.png';

// interface LoginModalProps {
//   onClose: () => void;
// }

// export default function LoginModal({ onClose }: LoginModalProps) {
//   const [isLoginView, setIsLoginView] = useState(true);

//   return (
//     <div 
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 "
//       onClick={onClose}
//     >
//       <div 
//         // ✅ Applied background image here
//         className="relative bg-cover bg-center rounded-2xl shadow-2xl w-full max-w-4xl h-auto max-h-[90vh] overflow-hidden"
//          style={{ backgroundImage: `url(${modalBgImage.src})` }} // <-- Ensure this path is correct
//         onClick={(e) => e.stopPropagation()} 
//       >
//         <button 
//           onClick={onClose}
//           className="absolute top-4 right-4 text-white bg-black/30 rounded-full p-1.5 hover:bg-black/50 transition z-10"
//         >
//           <X size={20} />
//         </button>

//         <div className="grid md:grid-cols-2 h-full"> {/* Added h-full for grid to occupy full height */}
//           {/* Left Side: Branding (with semi-transparent overlay) */}
//           <div 
//             className="hidden md:flex flex-col justify-between p-8 text-white relative"
//             // ✅ Added a subtle dark overlay to the left section
//             style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} 
//           >
//             <div>
//               <Image src={logoImage} alt="Home Konnect Logo" width={180} />
//               <h1 className="text-5xl font-extrabold leading-tight mt-12">
//                 Connecting To Your Dream Home
//               </h1>
//             </div>
//             <div className="space-y-4">
//               <button className="flex items-center gap-3 border border-white/50 rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition">
//                 <Phone size={16} /> Call Us <span className="ml-2">🇮🇳</span>
//               </button>
//               <p className="text-xs text-white/70 max-w-sm">
//                 By proceeding, you agree with our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms Of Use</a>
//               </p>
//             </div>
//           </div>

//           {/* Right Side: Form (with solid white background) */}
//           <div className="bg-white p-8 rounded-2xl md:rounded-l-none md:rounded-r-2xl">
//             {isLoginView ? (
//               // Login Form
//               <div className="space-y-6">
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
//                   <input type="email" id="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Enter Email Address" />
//                 </div>
//                 <div>
//                   <label htmlFor="password"  className="block text-sm font-medium text-gray-700">Password <span className="text-red-500">*</span></label>
//                   <input type="password" id="password" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Enter Password" />
//                 </div>
//                 <div className="text-right">
//                     <a href="#" className="text-sm font-medium text-green-600 hover:underline">Forgot Password?</a>
//                 </div>
//                 <button className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-green-600 transition shadow-lg">
//                   Login
//                 </button>
//               </div>
//             ) : (
//               // Registration Form
//               <div className="space-y-6">
//                  <div>
//                   <label htmlFor="reg-name" className="block text-sm font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
//                   <input type="text" id="reg-name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Enter Full Name" />
//                 </div>
//                 <div>
//                   <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
//                   <input type="email" id="reg-email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Enter Email Address" />
//                 </div>
//                 <div>
//                   <label htmlFor="reg-password"  className="block text-sm font-medium text-gray-700">Create Password <span className="text-red-500">*</span></label>
//                   <input type="password" id="reg-password" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Enter Password" />
//                 </div>
//                 <button className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-green-600 transition shadow-lg">
//                   Register
//                 </button>
//               </div>
//             )}

//             {/* Common Footer for both forms */}
//             <div className="mt-6">
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-300" />
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-2 bg-white text-gray-500">Or</span>
//                 </div>
//               </div>
//               <button className="mt-6 w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
//                 <Image src={googleIcon} alt="Google Icon" width={20} height={20} />
//                 Sign in with Google
//               </button>
//               <div className="mt-6 text-center text-sm">
//                 <p className="text-gray-600">
//                   {isLoginView ? 'Are you new?' : 'Already have an account?'}
//                   <button onClick={() => setIsLoginView(!isLoginView)} className="font-semibold text-green-600 hover:underline ml-1">
//                     {isLoginView ? 'Register Now' : 'Login'}
//                   </button>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Phone } from 'lucide-react';
import logoImage from "@/components/homePage/assets/logo.png";
import googleIcon from "@/components/homePage/assets/logo.png"; 

// Correct way to reference an image from the 'public' folder for a CSS background
const backgroundImageUrl = '/assets/aboutPage/AboutHERO.png';

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative bg-cover bg-center rounded-2xl shadow-2xl w-full max-w-4xl h-auto max-h-[90vh] overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        onClick={(e) => e.stopPropagation()} 
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black/30 rounded-full p-1.5 hover:bg-black/50 transition z-20"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2 h-full">
          {/* Left Side: Branding */}
          <div 
            className="hidden md:flex flex-col justify-between p-8 text-white relative"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} 
          >
            <div>
              <Image src={logoImage} alt="Home Konnect Logo" width={180} height={39} />
              <h1 className="text-5xl font-extrabold leading-tight mt-12">
                Connecting To Your Dream Home
              </h1>
            </div>
            <div className="space-y-4">
              <button className="flex items-center gap-3 border border-white/50 rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition">
                <Phone size={16} /> Call Us <span className="ml-2">🇮🇳</span>
              </button>
              <p className="text-xs text-white/70 max-w-sm">
                By proceeding, you agree with our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms Of Use</a>
              </p>
            </div>
          </div>

          {/* Right Side: Form with "Frosted Glass" effect */}
          <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl md:rounded-l-none md:rounded-r-2xl text-gray-800">
            {isLoginView ? (
              // Login Form
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" id="email" className="mt-1 block w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Enter Email Address" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium">Password <span className="text-red-500">*</span></label>
                  <input type="password" id="password" className="mt-1 block w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Enter Password" />
                </div>
                <div className="text-right">
                    <a href="#" className="text-sm font-medium text-green-700 hover:underline">Forgot Password?</a>
                </div>
                <button className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-green-600 transition shadow-lg">
                  Login
                </button>
              </div>
            ) : (
              // Registration Form
              <div className="space-y-4">
                 <div>
                  <label htmlFor="reg-name" className="block text-sm font-medium">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" id="reg-name" className="mt-1 block w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-full shadow-sm" placeholder="Enter Full Name" />
                </div>
                <div>
                  <label htmlFor="reg-email" className="block text-sm font-medium">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" id="reg-email" className="mt-1 block w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-full shadow-sm" placeholder="Enter Email Address" />
                </div>
                <div>
                  <label htmlFor="reg-password" className="block text-sm font-medium">Create Password <span className="text-red-500">*</span></label>
                  <input type="password" id="reg-password" className="mt-1 block w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-full shadow-sm" placeholder="Enter Password" />
                </div>
                <button className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-green-600 transition shadow-lg">
                  Register
                </button>
              </div>
            )}

            {/* Common Footer for both forms */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-400" /></div>
                <div className="relative flex justify-center text-sm"><span className="px-2 bg-white/70 text-gray-600">Or</span></div>
              </div>
              <button className="mt-6 w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Image src={googleIcon} alt="Google Icon" width={20} height={20} />
                Sign in with Google
              </button>
              <div className="mt-6 text-center text-sm">
                <p className="text-gray-700">
                  {isLoginView ? 'Are you new?' : 'Already have an account?'}
                  <button onClick={() => setIsLoginView(!isLoginView)} className="font-semibold text-green-700 hover:underline ml-1">
                    {isLoginView ? 'Register Now' : 'Login'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}