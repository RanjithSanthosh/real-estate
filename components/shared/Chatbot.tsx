// // app/components/shared/Chatbot.tsx
// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { X, Phone, Send, UserCircle2 } from 'lucide-react';
// import logoImage from "@/components/homePage/assets/logo.png"; // Adjust path if needed
// import chatbot from "../../public/assets/chatbot.png"; // Adjust path if needed

// export default function Chatbot() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="fixed bottom-5 right-5 z-50">
//       {/* Chat Window */}
//       <div 
//         className={`w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col transition-all duration-300 ease-in-out ${
//           isOpen 
//             ? 'opacity-100 translate-y-0' 
//             : 'opacity-0 translate-y-10 pointer-events-none'
//         }`}
//       >
//         {/* Header */}
//         <div className="flex-shrink-0 bg-green-600 p-4 rounded-t-2xl flex items-center justify-between">
//           <Image src={logoImage} alt="Home Konnect Logo" width={140} />
//           <button onClick={toggleChat} className="text-white hover:bg-white/20 p-1 rounded-full">
//             <X size={20} />
//           </button>
//         </div>

//         {/* Chat Body */}
//         <div className="flex-grow p-4 space-y-4 h-96 overflow-y-auto">
//           {/* Welcome Message */}
//           <div className="flex justify-start">
//             <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
//               <p className="text-sm font-semibold">Hello! 👋</p>
//               <p className="text-sm text-gray-700">Greetings from Home Konnect!!! 🙏</p>
//               <p className="text-sm text-gray-700 mt-2">Experience truly Award 🏆 winning Service from the Top 3 Best Rated Consultants in Chennai & Bengaluru, India.</p>
//             </div>
//           </div>
//           {/* City Prompt */}
//           <div className="flex justify-start">
//             <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
//               <p className="text-sm text-gray-700">📍 Choose your City</p>
//             </div>
//           </div>
//           {/* User Reply */}
//           <div className="flex justify-end">
//             <div className="bg-green-100 text-green-800 rounded-lg p-3 max-w-xs flex items-center gap-2">
//               <p className="text-sm">Chennai  L</p>
//               <UserCircle2 size={16} />
//             </div>
//           </div>
//         </div>

//         {/* Input Footer */}
//         <div className="flex-shrink-0 p-4 border-t border-gray-200">
//           <div className="relative">
//             <input 
//               type="text" 
//               placeholder="Hi, What's Up?"
//               className="w-full pl-4 pr-12 py-3 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//             <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition">
//               <Send size={20} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Launcher Button */}
//       <button 
//         onClick={toggleChat}
//         className={`w-16 h-16 bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ease-in-out mt-4 ml-auto hover:scale-110 ${
//             isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
//         }`}
//       >
//         <Image src={chatbot} alt="Chat Icon" width={40} />
//       </button>
//     </div>
//   );
// }



// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { X, Send, UserCircle2 } from 'lucide-react';
// import logoImage from "@/components/homePage/assets/logo.png";
// import chatbotIcon from "../../public/assets/whatsapp.png"; 

// export default function Chatbot() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     // This container is "click-through" so it doesn't block other buttons
//     <div className="relative pointer-events-none">
      
//       {/* Chat Window */}
//       <div 
//         className={`w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col transition-all duration-300 ease-in-out origin-bottom-right ${
//           isOpen 
//             ? 'opacity-100 scale-100 pointer-events-auto' 
//             : 'opacity-0 scale-95 pointer-events-none'
//         }`}
//       >
//         {/* Header */}
//         <div className="flex-shrink-0 bg-green-600 p-4 rounded-t-2xl flex items-center justify-between">
//           <Image src={logoImage} alt="Home Konnect Logo" width={140} height={30} />
//           <button onClick={toggleChat} className="text-white hover:bg-white/20 p-1 rounded-full">
//             <X size={20} />
//           </button>
//         </div>

//         {/* Chat Body */}
//         <div className="flex-grow p-4 space-y-4 h-96 overflow-y-auto">
//           <div className="flex justify-start">
//             <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
//               <p className="text-sm font-semibold">Hello! 👋</p>
//               <p className="text-sm text-gray-700">Greetings from Home Konnect!!! 🙏</p>
//               <p className="text-sm text-gray-700 mt-2">Experience truly Award 🏆 winning Service from the Top 3 Best Rated Consultants in Chennai & Bengaluru, India.</p>
//             </div>
//           </div>
//           <div className="flex justify-start">
//             <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
//               <p className="text-sm text-gray-700">📍 Choose your City</p>
//             </div>
//           </div>
//           <div className="flex justify-end">
//             <div className="bg-green-100 text-green-800 rounded-lg p-3 max-w-xs flex items-center gap-2">
//               <p className="text-sm">Chennai L</p>
//               <UserCircle2 size={16} />
//             </div>
//           </div>
//         </div>

//         {/* Input Footer */}
//         <div className="flex-shrink-0 p-4 border-t border-gray-200">
//           <div className="relative">
//             <input 
//               type="text" 
//               placeholder="Hi, What's Up?"
//               className="w-full pl-4 pr-12 py-3 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//             <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition">
//               <Send size={20} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Launcher Button */}
//       <button 
//         onClick={toggleChat}
//         className={`pointer-events-auto w-16 h-16 bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ease-in-out mt-4 ml-auto hover:scale-110 ${
//             isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
//         }`}
//       >
//         <Image src={chatbotIcon} alt="Chat Icon" width={40} height={40} />
//       </button>
//     </div>
//   );
// }






// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { X, Send, UserCircle2 } from 'lucide-react';
// import logoImage from "@/components/homePage/assets/logo.png";
// import chatbotIcon from "../../public/assets/whatsapp.png"; 

// export default function Chatbot() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     // This container is "click-through" so it doesn't block other buttons
//     <div className="relative pointer-events-none">
      
//       {/* Chat Window */}
//       <div 
//         className={`w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col transition-all duration-300 ease-in-out origin-bottom-right ${
//           isOpen 
//             ? 'opacity-100 scale-100 pointer-events-auto' 
//             : 'opacity-0 scale-95 pointer-events-none'
//         }`}
//       >
//         {/* Header */}
//         <div className="flex-shrink-0 bg-green-600 p-4 rounded-t-2xl flex items-center justify-between">
//           <Image src={logoImage} alt="Home Konnect Logo" width={140} height={30} />
//           <button onClick={toggleChat} className="text-white hover:bg-white/20 p-1 rounded-full">
//             <X size={20} />
//           </button>
//         </div>

//         {/* Chat Body */}
//         <div className="flex-grow p-4 space-y-4 h-96 overflow-y-auto">
//           <div className="flex justify-start">
//             <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
//               <p className="text-sm font-semibold">Hello! 👋</p>
//               <p className="text-sm text-gray-700">Greetings from Home Konnect!!! 🙏</p>
//               <p className="text-sm text-gray-700 mt-2">Experience truly Award 🏆 winning Service from the Top 3 Best Rated Consultants in Chennai & Bengaluru, India.</p>
//             </div>
//           </div>
//           <div className="flex justify-start">
//             <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
//               <p className="text-sm text-gray-700">📍 Choose your City</p>
//             </div>
//           </div>
//           <div className="flex justify-end">
//             <div className="bg-green-100 text-green-800 rounded-lg p-3 max-w-xs flex items-center gap-2">
//               <p className="text-sm">Chennai L</p>
//               <UserCircle2 size={16} />
//             </div>
//           </div>
//         </div>

//         {/* Input Footer */}
//         <div className="flex-shrink-0 p-4 border-t border-gray-200">
//           <div className="relative">
//             <input 
//               type="text" 
//               placeholder="Hi, What's Up?"
//               className="w-full pl-4 pr-12 py-3 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//             <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition">
//               <Send size={20} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Launcher Button */}
//       <button 
//         onClick={toggleChat}
//         className={`pointer-events-auto w-16 h-16 bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ease-in-out mt-4 ml-auto hover:scale-110 ${
//             isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
//         }`}
//       >
//         <Image src={chatbotIcon} alt="Chat Icon" width={40} height={40} />
//       </button>
//     </div>
//   );
// }





'use client';

import React from 'react'; // No longer need useState
import Image from 'next/image';
import { X, Send, UserCircle2 } from 'lucide-react';
import { useUI } from '../../app/context/UIContext';
import logoImage from "@/components/homePage/assets/logo.png";
import chatbotIcon from "../../public/assets/chatbot.png";  // ✅ Import the global hook
// import logoImage from "@/components/homePage/assets/logo.png";
// import chatbotIcon from "@/components/homePage/assets/chatbot-icon.png"; 

export default function Chatbot() {
  // ✅ Get the state and toggle function from the global context
  const { isChatbotOpen, toggleChatbot } = useUI();

  return (
    <div className="relative pointer-events-none">
      
      {/* Chat Window */}
      <div 
        className={`w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col transition-all duration-300 ease-in-out origin-bottom-right ${
          // ✅ Use the global state to control visibility
          isChatbotOpen 
            ? 'opacity-100 scale-100 pointer-events-auto' 
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex-shrink-0 bg-green-600 p-4 rounded-t-2xl flex items-center justify-between">
          <Image src={logoImage} alt="Home Konnect Logo" width={140} height={30} />
          {/* ✅ Use the global toggle function */}
          <button onClick={toggleChatbot} className="text-white hover:bg-white/20 p-1 rounded-full">
            <X size={20} />
          </button>
        </div>

        {/* Chat Body */}
        <div className="flex-grow p-4 space-y-4 h-96 overflow-y-auto">
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
              <p className="text-sm font-semibold">Hello! 👋</p>
              <p className="text-sm text-gray-700">Greetings from Home Konnect!!! 🙏</p>
              <p className="text-sm text-gray-700 mt-2">Experience truly Award 🏆 winning Service from the Top 3 Best Rated Consultants in Chennai & Bengaluru, India.</p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
              <p className="text-sm text-gray-700">📍 Choose your City</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-green-100 text-green-800 rounded-lg p-3 max-w-xs flex items-center gap-2">
              <p className="text-sm">Chennai L</p>
              <UserCircle2 size={16} />
            </div>
          </div>
        </div>

        {/* Input Footer */}
        <div className="flex-shrink-0 p-4 border-t border-gray-200">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Hi, What's Up?"
              className="w-full pl-4 pr-12 py-3 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Launcher Button */}
      <button 
        // ✅ Use the global toggle function
        onClick={toggleChatbot}
        className={`pointer-events-auto w-16 h-16 bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ease-in-out mt-4 ml-auto hover:scale-110 ${
            // ✅ Use the global state to control visibility
            isChatbotOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}
      >
        <Image src={chatbotIcon} alt="Chat Icon" width={40} height={40} />
      </button>
    </div>
  );
}