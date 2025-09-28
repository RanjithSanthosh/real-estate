// // 'use client';

// // import React from 'react';
// // import Image from 'next/image';
// // import { useUI } from '../../app/context/UIContext';
// // import whatsappIconSmall from '../../public/assets/whatsapp.png';

// // export default function FloatingWhatsappButton() {
// //   const { openWhatsappModal } = useUI();

// //   return (
// //     <button 
// //       onClick={openWhatsappModal}
// //       className="fixed bottom-5 z-40 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center border border-gray-200 hover:scale-110 transition-transform duration-200 ease-in-out"
// //       style={{
// //           right: 'calc(5rem + 1.25rem)'
// //       }}
// //     >
// //       <Image src={whatsappIconSmall} alt="WhatsApp Icon" width={32} height={32} />
// //     </button>
// //   );
// // }



// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { useUI } from '../../app/context/UIContext';

// export default function FloatingWhatsappButton() {
//   const { openWhatsappModal } = useUI();
//   // Debug: log when button is clicked
//   const handleClick = () => {
//     console.log('FloatingWhatsappButton clicked');
//     openWhatsappModal();
//   };

//   return (
//     <button 
//       onClick={handleClick}
//       className="fixed bottom-5 z-[100] w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center border border-gray-200 hover:scale-110 transition-transform duration-200 ease-in-out"
//       style={{ right: 'calc(5rem + 1.25rem)' }} // Positions it left of the chatbot icon
//     >
//       <Image src="/assets/whatsapp.png" alt="WhatsApp Icon" width={32} height={32} />
//     </button>
//   );
// }



// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link'; // ✅ Import Link from Next.js

// export default function FloatingWhatsappButton() {
//   return (
//     // ✅ Changed from <button> to <Link> and added href
//     <Link 
//       href="/about"
//       className="fixed bottom-5 z-40 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center border border-gray-200 hover:scale-110 transition-transform duration-200 ease-in-out"
//       style={{
//           right: 'calc(5rem + 1.25rem)'
//       }}
//     >ll
//       <Image src="/assets/whatsapp.png" alt="WhatsApp Icon" width={32} height={32} />
//     </Link>
//   );
// }




'use client';

import React from 'react';
import Image from 'next/image';

export default function FloatingWhatsappButton() {
  return (
    <a
      href="https://wa.me/919940366555"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 z-40 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center border border-gray-200 hover:scale-110 transition-transform duration-200 ease-in-out"
      style={{ right: 'calc(5rem + 1.25rem)' }}
    >
      <Image src="/assets/whatsapp.png" alt="WhatsApp Icon" width={32} height={32} />
    </a>
  );
}