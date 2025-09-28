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





'use client';

import React, { createContext, useState, useContext } from 'react';

interface UIContextType {
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  isWhatsappModalOpen: boolean;
  openWhatsappModal: () => void;
  closeWhatsappModal: () => void;
  isChatbotOpen: boolean;
  toggleChatbot: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isWhatsappModalOpen, setIsWhatsappModalOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Close all other modals when one is opened
  const openLoginModal = () => {
    setIsWhatsappModalOpen(false);
    setIsChatbotOpen(false);
    setIsLoginModalOpen(true);
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







// 'use client';

// import React, { createContext, useState, useContext } from 'react';

// interface UIContextType {
//   isLoginModalOpen: boolean;
//   openLoginModal: () => void;
//   closeLoginModal: () => void;
// //   isWhatsappModalOpen: boolean;
// //   openWhatsappModal: () => void;
// //   closeWhatsappModal: () => void;
// }

// const UIContext = createContext<UIContextType | undefined>(undefined);

// export function UIProvider({ children }: { children: React.ReactNode }) {
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//   const [isWhatsappModalOpen, setIsWhatsappModalOpen] = useState(false);

//   const openLoginModal = () => setIsLoginModalOpen(true);
//   const closeLoginModal = () => setIsLoginModalOpen(false);

//   const openWhatsappModal = () => {
//     console.log('openWhatsappModal called');
//     setIsWhatsappModalOpen(true);
//   };
//   const closeWhatsappModal = () => {
//     console.log('closeWhatsappModal called');
//     setIsWhatsappModalOpen(false);
//   };

//   const value = {
//     isLoginModalOpen,
//     openLoginModal,
//     closeLoginModal,
//     // isWhatsappModalOpen,
//     // openWhatsappModal,
//     // closeWhatsappModal,
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