'use client';

import React, { createContext, useState, useContext } from 'react';
import { Property } from '../data/properties'; // Import the Property type


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


  isScheduleVisitModalOpen: boolean; // ✅ Add missing modal state
  propertyForVisit: Property | null; // ✅ State to hold the selected property's data
  openScheduleVisitModal: (property: Property) => void; // ✅ Function to open modal WITH data
  closeScheduleVisitModal: () => void;
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

 const [isScheduleVisitModalOpen, setIsScheduleVisitModalOpen] = useState(false);
  const [propertyForVisit, setPropertyForVisit] = useState<Property | null>(null);


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


 const openScheduleVisitModal = (property: Property) => {
    // Close other modals to prevent overlap
    setIsLoginModalOpen(false);
    setIsFilterModalOpen(false);
    // ... close any other modals
    
    setPropertyForVisit(property); // Set the property data
    setIsScheduleVisitModalOpen(true); // Open the modal
  };

  const closeScheduleVisitModal = () => {
    setIsScheduleVisitModalOpen(false);
    setPropertyForVisit(null); // Clear the property data on close
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

    isScheduleVisitModalOpen,
    propertyForVisit,
    openScheduleVisitModal,
    closeScheduleVisitModal,
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

