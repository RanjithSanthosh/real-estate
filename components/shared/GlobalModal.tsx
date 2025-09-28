'use client';

import { useUI } from "../../app/context/UIContext";
import LoginModal from "@/components/auth/LoginModal";
// import WhatsappModal from "./WhatsappModal";

export default function GlobalModal() {
    const { 
        isLoginModalOpen, 
        closeLoginModal, 
        // isWhatsappModalOpen,
        // closeWhatsappModal
    } = useUI();

    return (
        <>
            {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
            {/* {isWhatsappModalOpen && <WhatsappModal onClose={closeWhatsappModal} />} */}
        </>
    );
}