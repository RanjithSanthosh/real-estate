'use client';

import { useUI } from "../../app/context/UIContext";
import LoginModal from "@/components/auth/LoginModal";
// import WhatsappModal from "./WhatsappModal";
import OfferModal from './OfferModal';

export default function GlobalModal() {
    const { 
        isLoginModalOpen, 
        closeLoginModal, 
        // isWhatsappModalOpen,
        // closeWhatsappModal,
        isOfferModalOpen,   // ✅ 2. Get the state and function from the context
        closeOfferModal
    } = useUI();

    return (
        <>
            {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
            {/* {isWhatsappModalOpen && <WhatsappModal onClose={closeWhatsappModal} />} */}
            {isOfferModalOpen && <OfferModal onClose={closeOfferModal} />}
        </>
    );
}