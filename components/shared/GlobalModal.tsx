'use client';

import { useUI } from "../../app/context/UIContext";
import LoginModal from "@/components/auth/LoginModal";
// import WhatsappModal from "./WhatsappModal";
import OfferModal from './OfferModal';
import ConsultationModal from './ConsultationModal';
import ScheduleVisitModal from './ScheduleVisitModal';

export default function GlobalModal() {
    const { 
        isLoginModalOpen, 
        closeLoginModal, 
        // isWhatsappModalOpen,
        // closeWhatsappModal,
        isOfferModalOpen,   // ✅ 2. Get the state and function from the context
        closeOfferModal,
         isConsultationModalOpen, closeConsultationModal, // ✅ Get state and function

        isScheduleVisitModalOpen,
        closeScheduleVisitModal,
        propertyForVisit // Get the property data from context
    } = useUI();

    return (
        <>
            {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
            {/* {isWhatsappModalOpen && <WhatsappModal onClose={closeWhatsappModal} />} */}
            {isOfferModalOpen && <OfferModal onClose={closeOfferModal} />}
            {isConsultationModalOpen && <ConsultationModal onClose={closeConsultationModal} />} {/* ✅ Render it */}

             {/* ✅ Conditionally render the ScheduleVisitModal */}
            {isScheduleVisitModalOpen && propertyForVisit && (
                <ScheduleVisitModal 
                    onClose={closeScheduleVisitModal}
                    property={propertyForVisit} // Pass the property data to the modal
                />
            )}
        
        </>
    );
}