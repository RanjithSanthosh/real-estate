'use client';

import React from 'react';
import { X, MapPin, Calendar, Clock } from 'lucide-react';
import { Property } from '../../app/data/properties';

interface ScheduleVisitModalProps {
  onClose: () => void;
  property: Property; // The modal requires a property to display
}

export default function ScheduleVisitModal({ onClose, property }: ScheduleVisitModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Scheduling visit for:", property.name);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md flex flex-col relative" onClick={(e) => e.stopPropagation()}>
        {/* Header Section */}
        <div className="bg-green-600 p-6 text-center rounded-t-2xl">
          <button onClick={onClose} className="absolute top-3 right-3 text-white/70 hover:text-white transition-colors">
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold text-white">Schedule A Visit</h2>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          {/* Property Info */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-extrabold text-gray-800">{property.name}</h3>
            <p className="text-sm text-gray-500 mt-1">
              by <span className="text-yellow-600 font-semibold">{property.developerId === 1 ? 'AMARA HOMES' : 'Prestige Group'}</span>
            </p>
            <div className="inline-flex items-center text-gray-500 text-sm mt-2">
              <MapPin size={14} className="mr-1.5 text-blue-500" />
              <span>{property.location}</span>
            </div>
          </div>
          
          <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" required />
          <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" required />
          <div className="flex">
            <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">91 +</span>
            <input type="tel" placeholder="Phone Number" className="flex-grow p-3 border border-gray-300 rounded-r-lg focus:ring-green-500 focus:border-green-500" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <input type="text" placeholder="Preferred Date" className="w-full p-3 border border-gray-300 rounded-lg pl-10" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'}/>
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <div className="relative">
              <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none pl-10">
                <option>Preferred Time</option>
                <option>Morning (9am - 12pm)</option>
                <option>Afternoon (1pm - 4pm)</option>
                <option>Evening (5pm - 8pm)</option>
              </select>
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors mt-4">
            Schedule Visit
          </button>
        </form>
      </div>
    </div>
  );
}