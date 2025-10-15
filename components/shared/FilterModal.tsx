// 'use client';

// import React, { useState, useEffect } from 'react';
// import { X, ChevronDown } from 'lucide-react';
// import { useUI, FilterState } from '../../app/context/UIContext';

// interface FilterModalProps {
//   onClose: () => void;
//   onApply: (newFilters: FilterState) => void;
//   onClear: () => void;
//   initialFilters: FilterState;
// }

// // Reusable Select Component for dropdowns
// const CustomSelect = ({ label, value, onChange, options }: { label: string, value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, options: string[] }) => (
//   <div>
//     <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
//     <div className="relative">
//       <select 
//         value={value}
//         onChange={onChange}
//         className="w-full appearance-none bg-white py-3 pl-4 pr-10 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-green-500 transition"
//       >
//         {options.map(option => <option key={option} value={option.toLowerCase().replace(/\s+/g, '-')}>{option}</option>)}
//       </select>
//       <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//     </div>
//   </div>
// );

// export default function FilterModal({ onClose, onApply, onClear, initialFilters }: FilterModalProps) {
//   const [localFilters, setLocalFilters] = useState<FilterState>(initialFilters);

//   useEffect(() => {
//     setLocalFilters(initialFilters);
//   }, [initialFilters]);

//   const handleApply = () => {
//     onApply(localFilters);
//     onClose();
//   };

//   const handleClear = () => {
//     onClear();
//     setLocalFilters(initialFilters);
//   };
  
//   const handleCheckboxChange = (field: keyof FilterState['others']) => {
//     setLocalFilters(prev => ({
//         ...prev,
//         others: {
//             ...prev.others,
//             [field]: !prev.others[field]
//         }
//     }));
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40  z-50 flex items-center justify-center p-4" onClick={onClose}>
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
//         {/* Header */}
//         <div className="flex-shrink-0 bg-green-600 p-4 rounded-t-2xl flex items-center justify-between">
//           <h2 className="text-xl font-bold text-white">Filter</h2>
//           <button onClick={onClose} className="text-white hover:bg-white/20 p-1 rounded-full">
//             <X size={24} />
//           </button>
//         </div>

//         {/* Body */}
//         <div className="flex-grow p-6 overflow-y-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
//             {/* Left Column */}
//             <div className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Zoning</label>
//                 <div className="flex items-center space-x-6">
//                   <label className="flex items-center"><input type="radio" name="zoning" value="none" checked={localFilters.zoning === 'none'} onChange={(e) => setLocalFilters({...localFilters, zoning: e.target.value})} className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500" /> <span className="ml-2 text-gray-700">None</span></label>
//                   <label className="flex items-center"><input type="radio" name="zoning" value="commercial" checked={localFilters.zoning === 'commercial'} onChange={(e) => setLocalFilters({...localFilters, zoning: e.target.value})} className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500" /> <span className="ml-2 text-gray-700">Commercial</span></label>
//                   <label className="flex items-center"><input type="radio" name="zoning" value="residential" checked={localFilters.zoning === 'residential'} onChange={(e) => setLocalFilters({...localFilters, zoning: e.target.value})} className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500" /> <span className="ml-2 text-gray-700">Residential</span></label>
//                 </div>
//               </div>
//               <CustomSelect label="Builders" value={localFilters.builders} onChange={(e) => setLocalFilters({...localFilters, builders: e.target.value})} options={['Select', 'AMARA HOMES', 'Prestige Group']} />
//               <CustomSelect label="Builders" value={localFilters.builders} onChange={(e) => setLocalFilters({...localFilters, builders: e.target.value})} options={['Select', 'Option A', 'Option B']} />
//               <CustomSelect label="Bed Rooms" value={localFilters.bedRooms} onChange={(e) => setLocalFilters({...localFilters, bedRooms: e.target.value})} options={['Select', '1 BHK', '2 BHK', '3 BHK', '4+ BHK']} />
//             </div>

//             {/* Right Column */}
//             <div className="space-y-6">
//               <CustomSelect label="Zoning" value={localFilters.zoning} onChange={(e) => setLocalFilters({...localFilters, zoning: e.target.value})} options={['Select', 'Residential', 'Commercial']} />
//               <CustomSelect label="Property Type" value={localFilters.propertyType} onChange={(e) => setLocalFilters({...localFilters, propertyType: e.target.value})} options={['Select', 'Apartment', 'Villa', 'Plot']} />
//               <CustomSelect label="Status" value={localFilters.status} onChange={(e) => setLocalFilters({...localFilters, status: e.target.value})} options={['Select', 'Ready to Move', 'Under Construction']} />
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
//                 <input type="range" min="100000" max="300000000" step="100000" value={localFilters.budget} onChange={(e) => setLocalFilters({...localFilters, budget: Number(e.target.value)})} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500" />
//                 <div className="flex justify-between text-xs text-gray-500 mt-1"><span>1L</span><span>3L</span><span>30L</span><span>1Cr</span><span>3Cr</span><span>10Cr</span><span>30Cr</span></div>
//               </div>
//             </div>
//           </div>

//           {/* Others Section */}
//           <div className="mt-6 pt-6 border-t border-gray-200">
//              <label className="block text-sm font-medium text-gray-700 mb-3">Others</label>
//              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//                 <label className="flex items-center"><input type="checkbox" checked={localFilters.others.investment} onChange={() => handleCheckboxChange('investment')} className="h-4 w-4 rounded text-green-600 border-gray-300 focus:ring-green-500" /> <span className="ml-2 text-gray-700">Investment Properties</span></label>
//                 <label className="flex items-center"><input type="checkbox" checked={localFilters.others.mandate} onChange={() => handleCheckboxChange('mandate')} className="h-4 w-4 rounded text-green-600 border-gray-300 focus:ring-green-500" /> <span className="ml-2 text-gray-700">Mandate Properties</span></label>
//                 <label className="flex items-center"><input type="checkbox" checked={localFilters.others.special} onChange={() => handleCheckboxChange('special')} className="h-4 w-4 rounded text-green-600 border-gray-300 focus:ring-green-500" /> <span className="ml-2 text-gray-700">Special Offers</span></label>
//                 <label className="flex items-center"><input type="checkbox" checked={localFilters.others.featured} onChange={() => handleCheckboxChange('featured')} className="h-4 w-4 rounded text-green-600 border-gray-300 focus:ring-green-500" /> <span className="ml-2 text-gray-700">Featured Properties</span></label>
//                 <label className="flex items-center"><input type="checkbox" checked={localFilters.others.excludeSold} onChange={() => handleCheckboxChange('excludeSold')} className="h-4 w-4 rounded text-green-600 border-gray-300 focus:ring-green-500" /> <span className="ml-2 text-gray-700">Exclude Sold Out</span></label>
//              </div>
//           </div>
//         </div>
        
//         {/* Footer */}
//         <div className="flex-shrink-0 p-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-4 rounded-b-2xl">
//           <button onClick={handleClear} className="bg-white text-gray-700 border border-gray-300 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition">Clear</button>
//           <button onClick={handleApply} className="bg-green-600 text-white font-bold py-2 px-6 rounded-full hover:bg-green-700 transition">Apply</button>
//         </div>
//       </div>
//     </div>
//   );
// }





'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FilterState } from '../../app/context/UIContext';

interface FilterModalProps {
  onClose: () => void;
  onApply: (newFilters: FilterState) => void;
  onClear: () => void;
  initialFilters: FilterState;
}

// Reusable Select Component – NO value transformation
const CustomSelect = ({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="w-full appearance-none bg-white py-3 pl-4 pr-10 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-green-500 transition"
      >
        {options.map((option) => (
          // ✅ Use raw option as value – no kebab-case!
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        size={20}
      />
    </div>
  </div>
);

export default function FilterModal({
  onClose,
  onApply,
  onClear,
  initialFilters,
}: FilterModalProps) {
  const router = useRouter();
  const [localFilters, setLocalFilters] = useState<FilterState>(initialFilters);

  useEffect(() => {
    setLocalFilters(initialFilters);
  }, [initialFilters]);

  const handleApply = () => {
    onApply(localFilters);

    const params = new URLSearchParams();

    // ✅ Use raw values (no transformation)
    if (localFilters.zoning && localFilters.zoning !== 'None') params.set('zoning', localFilters.zoning);
    if (localFilters.builders && localFilters.builders !== 'Select') params.set('builder', localFilters.builders);
    if (localFilters.propertyType && localFilters.propertyType !== 'Select') params.set('propertyType', localFilters.propertyType);
    if (localFilters.status && localFilters.status !== 'Select') params.set('status', localFilters.status);
    if (localFilters.bedRooms && localFilters.bedRooms !== 'Select') params.set('bedrooms', localFilters.bedRooms);
    if (localFilters.budget) params.set('budget', localFilters.budget.toString());

    Object.entries(localFilters.others).forEach(([key, value]) => {
      if (value) params.set(key, 'true');
    });

    router.push(`/search?${params.toString()}`);
    onClose();
  };

  const handleClear = () => {
    onClear();
    setLocalFilters(initialFilters);
  };

  const handleCheckboxChange = (field: keyof FilterState['others']) => {
    setLocalFilters((prev) => ({
      ...prev,
      others: { ...prev.others, [field]: !prev.others[field] },
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 bg-green-600 p-4 rounded-t-2xl flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Filter</h2>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-1 rounded-full">
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-grow p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Zoning</label>
                <div className="flex items-center space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="zoning"
                      value="None"
                      checked={localFilters.zoning === 'None'}
                      onChange={(e) => setLocalFilters({ ...localFilters, zoning: e.target.value })}
                      className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
                    />
                    <span className="ml-2 text-gray-700">None</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="zoning"
                      value="Commercial"
                      checked={localFilters.zoning === 'Commercial'}
                      onChange={(e) => setLocalFilters({ ...localFilters, zoning: e.target.value })}
                      className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
                    />
                    <span className="ml-2 text-gray-700">Commercial</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="zoning"
                      value="Residential"
                      checked={localFilters.zoning === 'Residential'}
                      onChange={(e) => setLocalFilters({ ...localFilters, zoning: e.target.value })}
                      className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
                    />
                    <span className="ml-2 text-gray-700">Residential</span>
                  </label>
                </div>
              </div>

              {/* ✅ Only ONE Builders dropdown */}
              <CustomSelect
                label="Builders"
                value={localFilters.builders}
                onChange={(e) => setLocalFilters({ ...localFilters, builders: e.target.value })}
                options={['Select', 'AMARA HOMES', 'Prestige Group']}
              />

              <CustomSelect
                label="Bed Rooms"
                value={localFilters.bedRooms}
                onChange={(e) => setLocalFilters({ ...localFilters, bedRooms: e.target.value })}
                options={['Select', '1 BHK', '2 BHK', '3 BHK', '4+ BHK']}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* ✅ Remove duplicate Zoning dropdown – keep only radio above */}
              
              <CustomSelect
                label="Property Type"
                value={localFilters.propertyType}
                onChange={(e) => setLocalFilters({ ...localFilters, propertyType: e.target.value })}
                options={['Select', 'Apartments', 'Villa', 'Plot']}
              />
              <CustomSelect
                label="Status"
                value={localFilters.status}
                onChange={(e) => setLocalFilters({ ...localFilters, status: e.target.value })}
                options={['Select', 'Ready to Move', 'Under Construction']}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                <input
                  type="range"
                  min="100000"
                  max="300000000"
                  step="100000"
                  value={localFilters.budget}
                  onChange={(e) => setLocalFilters({ ...localFilters, budget: Number(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1L</span>
                  <span>3L</span>
                  <span>30L</span>
                  <span>1Cr</span>
                  <span>3Cr</span>
                  <span>10Cr</span>
                  <span>30Cr</span>
                </div>
              </div>
            </div>
          </div>

          {/* Others Section */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-3">Others</label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {(['investment', 'mandate', 'special', 'featured', 'excludeSold'] as const).map((key) => (
                <label className="flex items-center" key={key}>
                  <input
                    type="checkbox"
                    checked={localFilters.others[key]}
                    onChange={() => handleCheckboxChange(key)}
                    className="h-4 w-4 rounded text-green-600 border-gray-300 focus:ring-green-500"
                  />
                  <span className="ml-2 text-gray-700">
                    {key === 'investment' && 'Investment Properties'}
                    {key === 'mandate' && 'Mandate Properties'}
                    {key === 'special' && 'Special Offers'}
                    {key === 'featured' && 'Featured Properties'}
                    {key === 'excludeSold' && 'Exclude Sold Out'}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 p-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-4 rounded-b-2xl">
          <button
            onClick={handleClear}
            className="bg-white text-gray-700 border border-gray-300 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition"
          >
            Clear
          </button>
          <button
            onClick={handleApply}
            className="bg-green-600 text-white font-bold py-2 px-6 rounded-full hover:bg-green-700 transition"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}