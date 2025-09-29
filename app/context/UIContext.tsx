// // app/context/UIContext.tsx
// 'use client';

// import React, { createContext, useState, useContext } from 'react';

// interface UIContextType {
//   isLoginModalOpen: boolean;
//   openLoginModal: () => void;
//   closeLoginModal: () => void;
//   isWhatsappModalOpen: boolean; // ✅ Added for WhatsApp modal
//   openWhatsappModal: () => void; // ✅ Added for WhatsApp modal
//   closeWhatsappModal: () => void; // ✅ Added for WhatsApp modal
//    isChatbotOpen: boolean; // ✅ Added for Chatbot
//   toggleChatbot: () => void; // ✅ Added for Chatbot
// }

// const UIContext = createContext<UIContextType | undefined>(undefined);

// export function UIProvider({ children }: { children: React.ReactNode }) {
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//     const [isWhatsappModalOpen, setIsWhatsappModalOpen] = useState(false); // ✅ Added state for WhatsApp
// const [isChatbotOpen, setIsChatbotOpen] = useState(false); // ✅ Added state for Chatbot

//   const openLoginModal = () => setIsLoginModalOpen(true);
//   const closeLoginModal = () => setIsLoginModalOpen(false);

//    const openWhatsappModal = () => setIsWhatsappModalOpen(true); // ✅ Added functions for WhatsApp
//   const closeWhatsappModal = () => setIsWhatsappModalOpen(false); // ✅ Added functions for WhatsApp

//   const value = {
//     isLoginModalOpen,
//     openLoginModal,
//     closeLoginModal,
//      isWhatsappModalOpen, // ✅ Include in context value
//     openWhatsappModal,   // ✅ Include in context value
//     closeWhatsappModal,  // ✅ Include in context value
//   };

//   return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
// }

// export function useUI() {
//   const context = useContext(UIContext);
//   if (context === undefined) {
//     throw new Error('useUI must be used within a UIProvider');
//   }
//   return context;
// }





// 'use client';

// import React, { createContext, useState, useContext } from 'react';

// // export interface FilterState {
// //   zoning: string;
// //   builders: string;
// //   bedRooms: string;
// //   propertyType: string;
// //   status: string;
// //   budget: number;
// //   others: {
// //     investment: boolean;
// //     mandate: boolean;
// //     special: boolean;
// //     featured: boolean;
// //     excludeSold: boolean;
// //   };
// // }



// interface UIContextType {
//   isLoginModalOpen: boolean;
//   openLoginModal: () => void;
//   closeLoginModal: () => void;
//   isWhatsappModalOpen: boolean;
//   openWhatsappModal: () => void;
//   closeWhatsappModal: () => void;
//   isChatbotOpen: boolean;
//   toggleChatbot: () => void;

//   // isFilterModalOpen: boolean;
//   // openFilterModal: () => void;
//   // closeFilterModal: () => void;
//   // filters: FilterState;
//   // applyFilters: (newFilters: FilterState) => void;
//   // clearFilters: () => void;
// }

// const UIContext = createContext<UIContextType | undefined>(undefined);


// // const initialFilters: FilterState = {
// //   zoning: 'none',
// //   builders: 'Select',
// //   bedRooms: 'Select',
// //   propertyType: 'Select',
// //   status: 'Select',
// //   budget: 10000000, // 1 Cr
// //   others: {
// //     investment: false,
// //     mandate: false,
// //     special: false,
// //     featured: false,
// //     excludeSold: false,
// //   },
// // };

// export function UIProvider({ children }: { children: React.ReactNode }) {
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//   const [isWhatsappModalOpen, setIsWhatsappModalOpen] = useState(false);
//   const [isChatbotOpen, setIsChatbotOpen] = useState(false);

//   // Close all other modals when one is opened
//   const openLoginModal = () => {
//     setIsWhatsappModalOpen(false);
//     setIsChatbotOpen(false);
//     setIsLoginModalOpen(true);
//   };
//   const closeLoginModal = () => setIsLoginModalOpen(false);

//   const openWhatsappModal = () => {
//     setIsLoginModalOpen(false);
//     setIsChatbotOpen(false);
//     setIsWhatsappModalOpen(true);
//   };
//   const closeWhatsappModal = () => setIsWhatsappModalOpen(false);

//   // ✅ Implement the toggle function for the chatbot
//   const toggleChatbot = () => {
//     // If opening the chatbot, close others
//     if (!isChatbotOpen) {
//       setIsLoginModalOpen(false);
//       setIsWhatsappModalOpen(false);
//     }
//     setIsChatbotOpen(prevState => !prevState);
//   };

//   // ✅ Add the chatbot state and function to the provider's value
//   const value = {
//     isLoginModalOpen,
//     openLoginModal,
//     closeLoginModal,
//     isWhatsappModalOpen,
//     openWhatsappModal,
//     closeWhatsappModal,
//     isChatbotOpen,
//     toggleChatbot,
//   };

//   return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
// }

// export function useUI() {
//   const context = useContext(UIContext);
//   if (context === undefined) {
//     throw new Error('useUI must be used within a UIProvider');
//   }
//   return context;
// }








'use client';

import React, { createContext, useState, useContext } from 'react';

export interface FilterState {
  zoning: string;
  builders: string;
  bedRooms: string;
  propertyType: string;
  status: string;
  budget: number;
  others: {
    investment: boolean;
    mandate: boolean;
    special: boolean;
    featured: boolean;
    excludeSold: boolean;
  };
}



interface UIContextType {
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  isWhatsappModalOpen: boolean;
  openWhatsappModal: () => void;
  closeWhatsappModal: () => void;
  isChatbotOpen: boolean;
  toggleChatbot: () => void;

  isFilterModalOpen: boolean;
  openFilterModal: () => void;
  closeFilterModal: () => void;
  filters: FilterState;
  applyFilters: (newFilters: FilterState) => void;
  clearFilters: () => void;


   isOfferModalOpen: boolean; // ✅ Added for the new offer modal
  openOfferModal: () => void; // ✅ Added for the new offer modal
  closeOfferModal: () => void; // ✅ Added for the new offer modal


  isConsultationModalOpen: boolean; // ✅ Add this
  openConsultationModal: () => void;   // ✅ Add this
  closeConsultationModal: () => void;  // ✅ Add this
}

const UIContext = createContext<UIContextType | undefined>(undefined);


const initialFilters: FilterState = {
  zoning: 'none',
  builders: 'Select',
  bedRooms: 'Select',
  propertyType: 'Select',
  status: 'Select',
  budget: 10000000, // 1 Cr
  others: {
    investment: false,
    mandate: false,
    special: false,
    featured: false,
    excludeSold: false,
  },
};

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isWhatsappModalOpen, setIsWhatsappModalOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
 const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false); // ✅ New state for offer modal for gift
 const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false); // ✅ Add state for consultancy

  // Close all other modals when one is opened
  const openLoginModal = () => {
    setIsWhatsappModalOpen(false);
    setIsChatbotOpen(false);
    setIsLoginModalOpen(true);
    setIsOfferModalOpen(false); // ✅ Close the offer modal when opening the login modal
  };
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openWhatsappModal = () => {
    setIsLoginModalOpen(false);
    setIsChatbotOpen(false);
    setIsWhatsappModalOpen(true);
  };
  const closeWhatsappModal = () => setIsWhatsappModalOpen(false);

  // ✅ Implement the toggle function for the chatbot
  const toggleChatbot = () => {
    // If opening the chatbot, close others
    if (!isChatbotOpen) {
      setIsLoginModalOpen(false);
      setIsWhatsappModalOpen(false);
    }
    setIsChatbotOpen(prevState => !prevState);
  };


 const openFilterModal = () => {
    setIsLoginModalOpen(false);
    setIsFilterModalOpen(true);
    setIsOfferModalOpen(false); // ✅ Close offer modal
  };
  const closeFilterModal = () => setIsFilterModalOpen(false);
  
  // ✅ New functions for the offer modal
  const openOfferModal = () => {
    setIsLoginModalOpen(false); // Close other modals
    setIsFilterModalOpen(false); // Close other modals
    setIsOfferModalOpen(true);
    
  };
  const closeOfferModal = () => setIsOfferModalOpen(false);

  const applyFilters = (newFilters: FilterState) => {
    setFilters(newFilters);
    closeFilterModal();
  };
  
  const clearFilters = () => {
    setFilters(initialFilters);
  };



   const openConsultationModal = () => {
    setIsLoginModalOpen(false);
    setIsFilterModalOpen(false);
    setIsOfferModalOpen(false);
    setIsConsultationModalOpen(true);
  };
  const closeConsultationModal = () => setIsConsultationModalOpen(false);


  // ✅ Add the chatbot state and function to the provider's value
  const value = {
    isLoginModalOpen,
    openLoginModal,
    closeLoginModal,
    isWhatsappModalOpen,
    openWhatsappModal,
    closeWhatsappModal,
    isChatbotOpen,
    toggleChatbot,

    isFilterModalOpen,
    openFilterModal,
    closeFilterModal,
    filters,
    applyFilters,
    clearFilters,

    isOfferModalOpen,
    openOfferModal,
    closeOfferModal,

    isConsultationModalOpen,
    openConsultationModal,
    closeConsultationModal,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}







