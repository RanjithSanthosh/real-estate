'use client';

import React, { useState, useEffect } from 'react';
import DisclaimerModal from './DisclaimerModal';

export default function DisclaimerManager() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    // Check if the disclaimer has already been shown in this session
    const hasSeenDisclaimer = sessionStorage.getItem('hasSeenDisclaimer');
    
    // If not, show it.
    if (!hasSeenDisclaimer) {
      setShowDisclaimer(true);
    }
  }, []); // The empty array ensures this effect runs only once on initial load

  const handleClose = () => {
    // When the user closes it, set the flag in sessionStorage and hide the modal
    sessionStorage.setItem('hasSeenDisclaimer', 'true');
    setShowDisclaimer(false);
  };

  return <DisclaimerModal isOpen={showDisclaimer} onClose={handleClose} />;
}