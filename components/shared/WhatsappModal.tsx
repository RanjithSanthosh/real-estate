// // app/components/shared/WhatsappModal.tsx
// 'use client';

// import React from 'react';
// import { X, ArrowRight } from 'lucide-react';
// import Image from 'next/image';
// import whatsappIcon from '../../public/assets/whatsapp.png'; // ✅ Create this image: public/assets/whatsapp-icon.png
// import whatsappBg from '../../public/assets/whatsapp.png'; // ✅ Create this image: public/assets/whatsapp-bg.png (the green splash background)

// interface WhatsappModalProps {
//   onClose: () => void;
//   phoneNumber?: string; // Optional prop for the number
// }

// export default function WhatsappModal({ onClose, phoneNumber = '+91 9940366555' }: WhatsappModalProps) {
//   const whatsappLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`; // Format number for WhatsApp link

//   return (
//     <div
//       className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//       onClick={onClose}
//     >
//       <div
//         className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 text-center flex flex-col items-center justify-center"
//         onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
//         >
//           <X size={24} />
//         </button>

//         {/* WhatsApp Icon with green splash background */}
//         <div className="relative w-32 h-32 mb-6 flex items-center justify-center">
//             <Image 
//                 src={whatsappBg} 
//                 alt="WhatsApp background splash" 
//                 fill 
//                 className="object-contain" 
//             />
//             <Image 
//                 src={whatsappIcon} 
//                 alt="WhatsApp Icon" 
//                 width={64} 
//                 height={64} 
//                 className="relative z-10" 
//             />
//         </div>
        
//         <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Chat us on WhatsApp with</h2>
//         <p className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">{phoneNumber}</p>
        
//         <a 
//           href={whatsappLink} 
//           target="_blank" 
//           rel="noopener noreferrer"
//           className="inline-flex items-center gap-2 bg-green-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-green-600 transition-colors shadow-lg"
//         >
//           Continue to chat <ArrowRight size={20} />
//         </a>
//       </div>
//     </div>
//   );
// }



'use client';

import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface WhatsappModalProps {
  onClose: () => void;
  phoneNumber?: string;
}

export default function WhatsappModal({ onClose, phoneNumber = '+91 9940366555' }: WhatsappModalProps) {
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 text-center flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition">
          <X size={24} />
        </button>
        <div className="relative w-32 h-32 mb-6 flex items-center justify-center">
            <Image src="/assets/whatsapp-bg.png" alt="WhatsApp background splash" fill className="object-contain" />
            <Image src="/assets/whatsapp-icon.png" alt="WhatsApp Icon" width={64} height={64} className="relative z-10" />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Chat us on WhatsApp with</h2>
        <p className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">{phoneNumber}</p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-green-600 transition-colors shadow-lg">
          Continue to chat <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
}