'use client';

import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DisclaimerModal({ isOpen, onClose }: DisclaimerModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white p-4"
        >
          <div className="container mx-auto flex items-start justify-between gap-4">
            <div className="flex-grow">
              <h3 className="font-serif text-lg tracking-widest mb-2">DISCLAIMER</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                <a href="#" className="text-green-500 underline hover:text-green-400">Homekonnect.com</a> shall neither be responsible nor liable for any inaccuracy in the information provided here and therefore the customers are requested to independently validate the information from the respective developers before making their decisions related to properties displayed here. <a href="#" className="text-green-500 underline hover:text-green-400">Homekonnect.com</a>, its directors, employees, agents and other representatives shall not be liable for any action taken, cost / expenses / losses incurred, by you.
              </p>
            </div>
            <button 
              onClick={onClose}
              className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}