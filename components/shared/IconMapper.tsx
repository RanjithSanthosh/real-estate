// components/shared/IconMapper.tsx

"use client";

import {
  BedDouble,
  Scaling,
  Building2,
  Car,
  Wrench,
  Trees,
  Dumbbell,
  ToyBrick,
  Sprout,
  // Add any other lucide-react icons you use in your data file here
} from "lucide-react";
import type { LucideProps } from "lucide-react";

// This is our icon "dictionary" that maps string names to components
const iconMap = {
  BedDouble,
  Scaling,
  Building2,
  Car,
  Wrench,
  Trees,
  Dumbbell,
  ToyBrick,
  Sprout,
  // Ensure the string name from your data matches the key here
};

// This creates a TypeScript type for all valid icon names
export type IconName = keyof typeof iconMap;

// Define the props for our Icon component
interface IconMapperProps extends LucideProps {
  name: IconName;
}

// This component looks up the icon by name and renders it
export const Icon = ({ name, ...props }: IconMapperProps) => {
  const LucideIcon = iconMap[name];

  if (!LucideIcon) {
    // Return null or a default icon if the name doesn't match
    return null;
  }

  return <LucideIcon {...props} />;
};