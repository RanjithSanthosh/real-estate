import { Building2, BedDouble, Scaling } from 'lucide-react';

export type Property = {
  id: number;
  name: string;
  developer: string;
  location: string;
  priceRange: string;
  images: string[];
  tag?: { text: string; color: 'green' | 'yellow' | 'blue' };
  specs: { icon: React.ElementType; text: string }[];
  overview: {
    pricePerSqFt: string;
    totalUnits: number;
    projectRera: string;
    zoning: string;
    propertyType: string;
    status: string;
    landExtent: string;
  };
  description: string;
};

export const propertiesData: Property[] = [
  {
    id: 1,
    name: 'TVS Emerald Cascadia',
    developer: 'AMARA HOMES',
    location: 'Gobalakpuram, Chennai',
    priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
    images: [
      '/properties/property.jpg',
      '/properties/property2.jpg',
      '/properties/property3.jpg',
      '/properties/property4.jpg',
    ],
    tag: { text: 'Ready to Move', color: 'green' },
    specs: [
      { icon: Building2, text: 'Apartments' },
      { icon: BedDouble, text: '3 BHK' },
      { icon: Scaling, text: '2351 - 2454 Sq.Ft' },
    ],
    overview: {
      pricePerSqFt: '₹ 12,000',
      totalUnits: 63,
      projectRera: 'PRM/KA/RERA/1251/310/PR/180924/007033',
      zoning: 'Residential',
      propertyType: 'Apartments',
      status: 'Under Construction',
      landExtent: '1.1 Acres',
    },
    description: "TVS Emerald Cascadia is a new launch residential project located on Mission Road, South Bangalore, designed to offer luxurious living spaces for discerning homebuyers. Spanning 1.1 acres, this elegant project comprises a total of 63 units that include a variety of configurations, such as 3 and 4 BHK apartments. Known for its attention to detail, TVS Emerald Cascadia offers exclusive homes that combine spaciousness with modern amenities, making it a perfect choice for those looking for grandeur and convenience."
  },
  {
    id: 2,
    name: 'CASA GRANDE',
    developer: 'Emaar Properties',
    location: 'Velachery, Chennai',
    priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
    images: [
      '/properties/property2.jpg',
      '/properties/property.jpg',
      '/properties/property4.jpg',
      '/properties/property3.jpg',
    ],
    tag: { text: 'Under Construction', color: 'yellow' },
    specs: [
      { icon: Building2, text: 'Villa' },
      { icon: BedDouble, text: '4 BHK' },
      { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
    ],
    overview: {
      pricePerSqFt: '₹ 11,000',
      totalUnits: 40,
      projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
      zoning: 'Residential',
      propertyType: 'Villa',
      status: 'Under Construction',
      landExtent: '2.5 Acres',
    },
    description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike."
  },
  {
    id: 3,
    name: 'CASA GRANDE',
    developer: 'Emaar Properties',
    location: 'Velachery, Chennai',
    priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
    images: [
      '/properties/property2.jpg',
      '/properties/property.jpg',
      '/properties/property4.jpg',
      '/properties/property3.jpg',
    ],
    tag: { text: 'Under Construction', color: 'yellow' },
    specs: [
      { icon: Building2, text: 'Villa' },
      { icon: BedDouble, text: '4 BHK' },
      { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
    ],
    overview: {
      pricePerSqFt: '₹ 11,000',
      totalUnits: 40,
      projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
      zoning: 'Residential',
      propertyType: 'Villa',
      status: 'Under Construction',
      landExtent: '2.5 Acres',
    },
    description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike."
  },
  {
    id: 4,
    name: 'CASA GRANDE',
    developer: 'Emaar Properties',
    location: 'Velachery, Chennai',
    priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
    images: [
      '/properties/property2.jpg',
      '/properties/property.jpg',
      '/properties/property4.jpg',
      '/properties/property3.jpg',
    ],
    tag: { text: 'Under Construction', color: 'yellow' },
    specs: [
      { icon: Building2, text: 'Villa' },
      { icon: BedDouble, text: '4 BHK' },
      { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
    ],
    overview: {
      pricePerSqFt: '₹ 11,000',
      totalUnits: 40,
      projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
      zoning: 'Residential',
      propertyType: 'Villa',
      status: 'Under Construction',
      landExtent: '2.5 Acres',
    },
    description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike."
  },
  {
    id: 5,
    name: 'CASA GRANDE',
    developer: 'Emaar Properties',
    location: 'Velachery, Chennai',
    priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
    images: [
      '/properties/property2.jpg',
      '/properties/property.jpg',
      '/properties/property4.jpg',
      '/properties/property3.jpg',
    ],
    tag: { text: 'Under Construction', color: 'yellow' },
    specs: [
      { icon: Building2, text: 'Villa' },
      { icon: BedDouble, text: '4 BHK' },
      { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
    ],
    overview: {
      pricePerSqFt: '₹ 11,000',
      totalUnits: 40,
      projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
      zoning: 'Residential',
      propertyType: 'Villa',
      status: 'Under Construction',
      landExtent: '2.5 Acres',
    },
    description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike."
  },
  {
    id: 6,
    name: 'CASA GRANDE',
    developer: 'Emaar Properties',
    location: 'Velachery, Chennai',
    priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
    images: [
      '/properties/property2.jpg',
      '/properties/property.jpg',
      '/properties/property4.jpg',
      '/properties/property3.jpg',
    ],
    tag: { text: 'Under Construction', color: 'yellow' },
    specs: [
      { icon: Building2, text: 'Villa' },
      { icon: BedDouble, text: '4 BHK' },
      { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
    ],
    overview: {
      pricePerSqFt: '₹ 11,000',
      totalUnits: 40,
      projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
      zoning: 'Residential',
      propertyType: 'Villa',
      status: 'Under Construction',
      landExtent: '2.5 Acres',
    },
    description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike."
  },
  {
    id: 7,
    name: 'CASA GRANDE',
    developer: 'Emaar Properties',
    location: 'Velachery, Chennai',
    priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
    images: [
      '/properties/property2.jpg',
      '/properties/property.jpg',
      '/properties/property4.jpg',
      '/properties/property3.jpg',
    ],
    tag: { text: 'Under Construction', color: 'yellow' },
    specs: [
      { icon: Building2, text: 'Villa' },
      { icon: BedDouble, text: '4 BHK' },
      { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
    ],
    overview: {
      pricePerSqFt: '₹ 11,000',
      totalUnits: 40,
      projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
      zoning: 'Residential',
      propertyType: 'Villa',
      status: 'Under Construction',
      landExtent: '2.5 Acres',
    },
    description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike."
  },
  {
    id: 8,
    name: 'CASA GRANDE',
    developer: 'Emaar Properties',
    location: 'Velachery, Chennai',
    priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
    images: [
      '/properties/property2.jpg',
      '/properties/property.jpg',
      '/properties/property4.jpg',
      '/properties/property3.jpg',
    ],
    tag: { text: 'Under Construction', color: 'yellow' },
    specs: [
      { icon: Building2, text: 'Villa' },
      { icon: BedDouble, text: '4 BHK' },
      { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
    ],
    overview: {
      pricePerSqFt: '₹ 11,000',
      totalUnits: 40,
      projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
      zoning: 'Residential',
      propertyType: 'Villa',
      status: 'Under Construction',
      landExtent: '2.5 Acres',
    },
    description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike."
  },
  {
    id: 9,
    name: 'CASA GRANDE',
    developer: 'Emaar Properties',
    location: 'Velachery, Chennai',
    priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
    images: [
      '/properties/property2.jpg',
      '/properties/property.jpg',
      '/properties/property4.jpg',
      '/properties/property3.jpg',
    ],
    tag: { text: 'Under Construction', color: 'yellow' },
    specs: [
      { icon: Building2, text: 'Villa' },
      { icon: BedDouble, text: '4 BHK' },
      { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
    ],
    overview: {
      pricePerSqFt: '₹ 11,000',
      totalUnits: 40,
      projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
      zoning: 'Residential',
      propertyType: 'Villa',
      status: 'Under Construction',
      landExtent: '2.5 Acres',
    },
    description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike."
  },
  {
    id: 10,
    name: 'CASA GRANDE',
    developer: 'Emaar Properties',
    location: 'Velachery, Chennai',
    priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
    images: [
      '/properties/property2.jpg',
      '/properties/property.jpg',
      '/properties/property4.jpg',
      '/properties/property3.jpg',
    ],
    tag: { text: 'Under Construction', color: 'yellow' },
    specs: [
      { icon: Building2, text: 'Villa' },
      { icon: BedDouble, text: '4 BHK' },
      { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
    ],
    overview: {
      pricePerSqFt: '₹ 11,000',
      totalUnits: 40,
      projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
      zoning: 'Residential',
      propertyType: 'Villa',
      status: 'Under Construction',
      landExtent: '2.5 Acres',
    },
    description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike."
  },
  // Add more complete property objects here...
];