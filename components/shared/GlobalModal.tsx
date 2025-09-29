'use client';

import { useUI } from "../../app/context/UIContext";
import LoginModal from "@/components/auth/LoginModal";
// import WhatsappModal from "./WhatsappModal";
import OfferModal from './OfferModal';
import ConsultationModal from './ConsultationModal';

export default function GlobalModal() {
    const { 
        isLoginModalOpen, 
        closeLoginModal, 
        // isWhatsappModalOpen,
        // closeWhatsappModal,
        isOfferModalOpen,   // ✅ 2. Get the state and function from the context
        closeOfferModal,
         isConsultationModalOpen, closeConsultationModal // ✅ Get state and function
    } = useUI();

    return (
        <>
            {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
            {/* {isWhatsappModalOpen && <WhatsappModal onClose={closeWhatsappModal} />} */}
            {isOfferModalOpen && <OfferModal onClose={closeOfferModal} />}
            {isConsultationModalOpen && <ConsultationModal onClose={closeConsultationModal} />} {/* ✅ Render it */}
        
        </>
    );
}