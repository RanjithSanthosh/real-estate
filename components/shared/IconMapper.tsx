// // components/shared/IconMapper.tsx

// "use client";

// import {
//   BedDouble,
//   Scaling,
//   Building2,
//   Car,
//   Wrench,
//   Trees,
//   Dumbbell,
//   ToyBrick,
//   Sprout,
//   // Add any other lucide-react icons you use in your data file here
// } from "lucide-react";
// import type { LucideProps } from "lucide-react";

// // This is our icon "dictionary" that maps string names to components
// const iconMap = {
//   BedDouble,
//   Scaling,
//   Building2,
//   Car,
//   Wrench,
//   Trees,
//   Dumbbell,
//   ToyBrick,
//   Sprout,
//   // Ensure the string name from your data matches the key here
// };

// // This creates a TypeScript type for all valid icon names
// export type IconName = keyof typeof iconMap;

// // Define the props for our Icon component
// interface IconMapperProps extends LucideProps {
//   name: IconName;
// }

// // This component looks up the icon by name and renders it
// export const Icon = ({ name, ...props }: IconMapperProps) => {
//   const LucideIcon = iconMap[name];

//   if (!LucideIcon) {
//     // Return null or a default icon if the name doesn't match
//     return null;
//   }

//   return <LucideIcon {...props} />;
// };


// components/shared/IconMapper.tsx
'use client';

import { 
  LucideProps,
  Building2, 
  BedDouble, 
  Scaling, 
  Wrench, 
  Trees, 
  Dumbbell, 
  ToyBrick, 
  Sprout,
  Newspaper,
  Shield,
  RefreshCw,
  ArrowUpDown,
  Home // Add a default icon
} from 'lucide-react';
import React from 'react';

// This maps string names to the actual React components
const iconMap: Record<string, React.ElementType<LucideProps>> = {
  Building2,
  BedDouble,
  Scaling,
  Wrench,
  Trees,
  Dumbbell,
  ToyBrick,
  Sprout,
  Newspaper,
  Shield,
  RefreshCw,
  ArrowUpDown,
  Home,
  default: Home,
};

export type IconName = keyof typeof iconMap;

interface IconProps extends LucideProps {
  name: IconName | string;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = iconMap[name] || iconMap.default;
  return <LucideIcon {...props} />;
};