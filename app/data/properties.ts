// import { Building2, BedDouble, Scaling } from 'lucide-react';


// export type Developer = {
//   id: number;
//   name: string;
//   logo?: string;
//   totalProjects: number;
//   ongoingProjects: number;
//   yearsOfExperience: number;
//   description: string;
// };



// export const developersData: Developer[] = [
//     {
//         id: 1,
//         name: 'AMARA HOMES',
//         totalProjects: 13,
//         ongoingProjects: 5,
//         yearsOfExperience: 20,
//         description: "At Amara, we have always believed in curating spaces that are alive and thriving. With over a decade of creating expressive works of art in the most prime localities, Amara has pushed the envelope in terms of absolute luxury. Each home is a seamless coherence between tradition and modern living, bearing all the hallmarks of Amara's design of excellence, eternalized."
//     },
//     {
//         id: 2,
//         name: 'Prestige Group',
//         totalProjects: 250,
//         ongoingProjects: 45,
//         yearsOfExperience: 35,
//         description: "Prestige Group has firmly established itself as one of the leading and most successful developers of real estate in India by imprinting its indelible mark across all asset classes. Founded in 1986, the group’s turnover is today in excess of Rs 3518 Cr."
//     },
// ];

// export type Property = {
//   id: number;
//   name: string;
//   developer: string;
//   location: string;
//   priceRange: string;
//   images: string[];
//   mapImage: string;
//   tag?: { text: string; color: 'green' | 'yellow' | 'blue' };
//   specs: { icon: React.ElementType; text: string }[];
//   overview: {
//     pricePerSqFt: string;
//     totalUnits: number;
//     projectRera: string;
//     zoning: string;
//     propertyType: string;
//     status: string;
//     landExtent: string;
//   };
//   description: string;
//   salientFeatures: string[]; // ✅ Add this for the Salient Features tab
//   specifications: {         // ✅ Add this object for the Specifications tab
//     Flooring: string[];
//     Doors: string[];
//     Walls: string[];
//     Fittings: string[];
//     Others: string[];
//   };
//   floorplans: {
//       name: string;
//       priceRange: string;
//       image: string;
//       specs: { icon: React.ElementType; text: string }[];
//   }[];
// };

// export const propertiesData: Property[] = [
//   {
//     id: 1,
//     name: 'TVS Emerald Cascadia',
//     developer: 'AMARA HOMES',
//     location: 'Gobalakpuram, Chennai',
//     priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
//     images: [
//       '/properties/property.jpg',
//       '/properties/property.jpg',
//       '/properties/property.jpg',
//       '/properties/property.jpg',
//     ],
//     mapImage: '/maps/map.png', 
//     tag: { text: 'Ready to Move', color: 'green' },
//     specs: [
//       { icon: Building2, text: 'Apartments' },
//       { icon: BedDouble, text: '3 BHK' },
//       { icon: Scaling, text: '2351 - 2454 Sq.Ft' },
//     ],
//     overview: {
//       pricePerSqFt: '₹ 12,000',
//       totalUnits: 63,
//       projectRera: 'PRM/KA/RERA/1251/310/PR/180924/007033',
//       zoning: 'Residential',
//       propertyType: 'Apartments',
//       status: 'Under Construction',
//       landExtent: '1.1 Acres',
//     },
    
//     description: "TVS Emerald Cascadia is a new launch residential project located on Mission Road, South Bangalore, designed to offer luxurious living spaces for discerning homebuyers. Spanning 1.1 acres, this elegant project comprises a total of 63 units that include a variety of configurations, such as 3 and 4 BHK apartments. Known for its attention to detail, TVS Emerald Cascadia offers exclusive homes that combine spaciousness with modern amenities, making it a perfect choice for those looking for grandeur and convenience.",
//       salientFeatures: [
//         'Centralised VRV ACs',
//         'IOT enabled Smart-Ready Homes',
//         'False ceiling with Designer Lights',
//         'Landscaped Terrace & Gym',
//     ],
//     specifications: {
//         Flooring: [
//             'Toilets: Ceramic Tiles',
//             'Master Bedroom: Vitrified Tiled Flooring',
//             'Other Bedroom: Vitrified Tiled Flooring',
//             'Balcony: Ceramic Tiles',
//             'Kitchen: ceramic tile flooring',
//             'Living/Dining: Vitrified Tiles',
//         ],
//         Doors: [ 'Main Door: Teak Wood Frame', 'Internal Doors: Hardwood Frame' ],
//         Walls: [ 'Interior: Emulsion Paint', 'Exterior: Weatherproof Paint' ],
//         Fittings: [ 'Kitchen: Granite Platform with Stainless Steel Sink', 'Toilets: CP Fittings of Jaguar or equivalent' ],
//         Others: [ 'Wiring: Concealed Copper Wiring', 'Power Backup: DG set for common areas' ],
//     },
//     floorplans: [
//         {
//             name: 'AMARA ADHYA - 3BHK',
//             priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
//             image: '/properties/property.jpg',
//             specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '3 BHK' }, { icon: Scaling, text: '2351 - 2454 Sq.Ft' }]
//         },
//         {
//             name: 'AMARA ADHYA - 5BHK',
//             priceRange: '₹ 8 Cr. - 10 Cr.',
//             image: '/properties/property2.jpg',
//             specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '5 BHK' }, { icon: Scaling, text: '4351 - 4454 Sq.Ft' }]
//         }
//     ],
//   },
//   {
//     id: 2,
//     name: 'CASA GRANDE',
//     developer: 'Emaar Properties',
//     location: 'Velachery, Chennai',
//     priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
//     images: [
//       '/properties/property2.jpg',
//       '/properties/property.jpg',
//       '/properties/property4.jpg',
//       '/properties/property3.jpg',
//     ],
//       mapImage: '/maps/map.png', 
//     tag: { text: 'Under Construction', color: 'yellow' },
//     specs: [
//       { icon: Building2, text: 'Villa' },
//       { icon: BedDouble, text: '4 BHK' },
//       { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
//     ],
//     overview: {
//       pricePerSqFt: '₹ 11,000',
//       totalUnits: 40,
//       projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
//       zoning: 'Residential',
//       propertyType: 'Villa',
//       status: 'Under Construction',
//       landExtent: '2.5 Acres',
//     },
//     description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike.",
//       salientFeatures: [
//         'Centralised VRV ACs',
//         'IOT enabled Smart-Ready Homes',
//         'False ceiling with Designer Lights',
//         'Landscaped Terrace & Gym',
//     ],
//     specifications: {
//         Flooring: [
//             'Toilets: Ceramic Tiles',
//             'Master Bedroom: Vitrified Tiled Flooring',
//             'Other Bedroom: Vitrified Tiled Flooring',
//             'Balcony: Ceramic Tiles',
//             'Kitchen: ceramic tile flooring',
//             'Living/Dining: Vitrified Tiles',
//         ],
//         Doors: [ 'Main Door: Teak Wood Frame', 'Internal Doors: Hardwood Frame' ],
//         Walls: [ 'Interior: Emulsion Paint', 'Exterior: Weatherproof Paint' ],
//         Fittings: [ 'Kitchen: Granite Platform with Stainless Steel Sink', 'Toilets: CP Fittings of Jaguar or equivalent' ],
//         Others: [ 'Wiring: Concealed Copper Wiring', 'Power Backup: DG set for common areas' ],
//     },
//     floorplans: [
//         {
//             name: 'AMARA ADHYA - 3BHK',
//             priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
//             image: '/properties/property.jpg',
//             specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '3 BHK' }, { icon: Scaling, text: '2351 - 2454 Sq.Ft' }]
//         },
//         {
//             name: 'AMARA ADHYA - 5BHK',
//             priceRange: '₹ 8 Cr. - 10 Cr.',
//             image: '/properties/property2.jpg',
//             specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '5 BHK' }, { icon: Scaling, text: '4351 - 4454 Sq.Ft' }]
//         }
//     ],
//   },
//   {
//     id: 3,
//     name: 'CASA GRANDE',
//     developer: 'Emaar Properties',
//     location: 'Velachery, Chennai',
//     priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
//     images: [
//       '/properties/property2.jpg',
//       '/properties/property.jpg',
//       '/properties/property4.jpg',
//       '/properties/property3.jpg',
//     ],
//       mapImage: '/maps/map.png', 
//     tag: { text: 'Under Construction', color: 'yellow' },
//     specs: [
//       { icon: Building2, text: 'Villa' },
//       { icon: BedDouble, text: '4 BHK' },
//       { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
//     ],
//     overview: {
//       pricePerSqFt: '₹ 11,000',
//       totalUnits: 40,
//       projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
//       zoning: 'Residential',
//       propertyType: 'Villa',
//       status: 'Under Construction',
//       landExtent: '2.5 Acres',
//     },
//     description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike."
//   ,
//       salientFeatures: [
//         'Centralised VRV ACs',
//         'IOT enabled Smart-Ready Homes',
//         'False ceiling with Designer Lights',
//         'Landscaped Terrace & Gym',
//     ],
//     specifications: {
//         Flooring: [
//             'Toilets: Ceramic Tiles',
//             'Master Bedroom: Vitrified Tiled Flooring',
//             'Other Bedroom: Vitrified Tiled Flooring',
//             'Balcony: Ceramic Tiles',
//             'Kitchen: ceramic tile flooring',
//             'Living/Dining: Vitrified Tiles',
//         ],
//         Doors: [ 'Main Door: Teak Wood Frame', 'Internal Doors: Hardwood Frame' ],
//         Walls: [ 'Interior: Emulsion Paint', 'Exterior: Weatherproof Paint' ],
//         Fittings: [ 'Kitchen: Granite Platform with Stainless Steel Sink', 'Toilets: CP Fittings of Jaguar or equivalent' ],
//         Others: [ 'Wiring: Concealed Copper Wiring', 'Power Backup: DG set for common areas' ],
//     },
//     floorplans: [
//         {
//             name: 'AMARA ADHYA - 3BHK',
//             priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
//             image: '/properties/property.jpg',
//             specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '3 BHK' }, { icon: Scaling, text: '2351 - 2454 Sq.Ft' }]
//         },
//         {
//             name: 'AMARA ADHYA - 5BHK',
//             priceRange: '₹ 8 Cr. - 10 Cr.',
//             image: '/properties/property2.jpg',
//             specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '5 BHK' }, { icon: Scaling, text: '4351 - 4454 Sq.Ft' }]
//         }
//     ],
//   },
//   {
//     id: 4,
//     name: 'CASA GRANDE',
//     developer: 'Emaar Properties',
//     location: 'Velachery, Chennai',
//     priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
//     images: [
//       '/properties/property2.jpg',
//       '/properties/property.jpg',
//       '/properties/property4.jpg',
//       '/properties/property3.jpg',
//     ],
//       mapImage: '/maps/map.png', 
//     tag: { text: 'Under Construction', color: 'yellow' },
//     specs: [
//       { icon: Building2, text: 'Villa' },
//       { icon: BedDouble, text: '4 BHK' },
//       { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
//     ],
//     overview: {
//       pricePerSqFt: '₹ 11,000',
//       totalUnits: 40,
//       projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
//       zoning: 'Residential',
//       propertyType: 'Villa',
//       status: 'Under Construction',
//       landExtent: '2.5 Acres',
//     },
//     description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike."
//   ,
//       salientFeatures: [
//         'Centralised VRV ACs',
//         'IOT enabled Smart-Ready Homes',
//         'False ceiling with Designer Lights',
//         'Landscaped Terrace & Gym',
//     ],
//     specifications: {
//         Flooring: [
//             'Toilets: Ceramic Tiles',
//             'Master Bedroom: Vitrified Tiled Flooring',
//             'Other Bedroom: Vitrified Tiled Flooring',
//             'Balcony: Ceramic Tiles',
//             'Kitchen: ceramic tile flooring',
//             'Living/Dining: Vitrified Tiles',
//         ],
//         Doors: [ 'Main Door: Teak Wood Frame', 'Internal Doors: Hardwood Frame' ],
//         Walls: [ 'Interior: Emulsion Paint', 'Exterior: Weatherproof Paint' ],
//         Fittings: [ 'Kitchen: Granite Platform with Stainless Steel Sink', 'Toilets: CP Fittings of Jaguar or equivalent' ],
//         Others: [ 'Wiring: Concealed Copper Wiring', 'Power Backup: DG set for common areas' ],
//     },
//     floorplans: [
//         {
//             name: 'AMARA ADHYA - 3BHK',
//             priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
//             image: '/properties/property.jpg',
//             specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '3 BHK' }, { icon: Scaling, text: '2351 - 2454 Sq.Ft' }]
//         },
//         {
//             name: 'AMARA ADHYA - 5BHK',
//             priceRange: '₹ 8 Cr. - 10 Cr.',
//             image: '/properties/property2.jpg',
//             specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '5 BHK' }, { icon: Scaling, text: '4351 - 4454 Sq.Ft' }]
//         }
//     ],
//   },
//   {
//     id: 5,
//     name: 'CASA GRANDE',
//     developer: 'Emaar Properties',
//     location: 'Velachery, Chennai',
//     priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
//     images: [
//       '/properties/property2.jpg',
//       '/properties/property.jpg',
//       '/properties/property4.jpg',
//       '/properties/property3.jpg',
//     ],
//       mapImage: '/maps/map.png', 
//     tag: { text: 'Under Construction', color: 'yellow' },
//     specs: [
//       { icon: Building2, text: 'Villa' },
//       { icon: BedDouble, text: '4 BHK' },
//       { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
//     ],
//     overview: {
//       pricePerSqFt: '₹ 11,000',
//       totalUnits: 40,
//       projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
//       zoning: 'Residential',
//       propertyType: 'Villa',
//       status: 'Under Construction',
//       landExtent: '2.5 Acres',
//     },
//     description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike."
//   ,
//       salientFeatures: [
//         'Centralised VRV ACs',
//         'IOT enabled Smart-Ready Homes',
//         'False ceiling with Designer Lights',
//         'Landscaped Terrace & Gym',
//     ],
//     specifications: {
//         Flooring: [
//             'Toilets: Ceramic Tiles',
//             'Master Bedroom: Vitrified Tiled Flooring',
//             'Other Bedroom: Vitrified Tiled Flooring',
//             'Balcony: Ceramic Tiles',
//             'Kitchen: ceramic tile flooring',
//             'Living/Dining: Vitrified Tiles',
//         ],
//         Doors: [ 'Main Door: Teak Wood Frame', 'Internal Doors: Hardwood Frame' ],
//         Walls: [ 'Interior: Emulsion Paint', 'Exterior: Weatherproof Paint' ],
//         Fittings: [ 'Kitchen: Granite Platform with Stainless Steel Sink', 'Toilets: CP Fittings of Jaguar or equivalent' ],
//         Others: [ 'Wiring: Concealed Copper Wiring', 'Power Backup: DG set for common areas' ],
//     },
//     floorplans: [
//         {
//             name: 'AMARA ADHYA - 3BHK',
//             priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
//             image: '/properties/property.jpg',
//             specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '3 BHK' }, { icon: Scaling, text: '2351 - 2454 Sq.Ft' }]
//         },
//         {
//             name: 'AMARA ADHYA - 5BHK',
//             priceRange: '₹ 8 Cr. - 10 Cr.',
//             image: '/properties/property2.jpg',
//             specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '5 BHK' }, { icon: Scaling, text: '4351 - 4454 Sq.Ft' }]
//         }
//     ],
//   },
//   {
//     id: 6,
//     name: 'CASA GRANDE',
//     developer: 'Emaar Properties',
//     location: 'Velachery, Chennai',
//     priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
//     images: [
//       '/properties/property2.jpg',
//       '/properties/property.jpg',
//       '/properties/property4.jpg',
//       '/properties/property3.jpg',
//     ],
//       mapImage: '/maps/map.png', 
//     tag: { text: 'Under Construction', color: 'yellow' },
//     specs: [
//       { icon: Building2, text: 'Villa' },
//       { icon: BedDouble, text: '4 BHK' },
//       { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
//     ],
//     overview: {
//       pricePerSqFt: '₹ 11,000',
//       totalUnits: 40,
//       projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
//       zoning: 'Residential',
//       propertyType: 'Villa',
//       status: 'Under Construction',
//       landExtent: '2.5 Acres',
//     },
//     description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike."
//   ,
//       salientFeatures: [
//         'Centralised VRV ACs',
//         'IOT enabled Smart-Ready Homes',
//         'False ceiling with Designer Lights',
//         'Landscaped Terrace & Gym',
//     ],
//     specifications: {
//         Flooring: [
//             'Toilets: Ceramic Tiles',
//             'Master Bedroom: Vitrified Tiled Flooring',
//             'Other Bedroom: Vitrified Tiled Flooring',
//             'Balcony: Ceramic Tiles',
//             'Kitchen: ceramic tile flooring',
//             'Living/Dining: Vitrified Tiles',
//         ],
//         Doors: [ 'Main Door: Teak Wood Frame', 'Internal Doors: Hardwood Frame' ],
//         Walls: [ 'Interior: Emulsion Paint', 'Exterior: Weatherproof Paint' ],
//         Fittings: [ 'Kitchen: Granite Platform with Stainless Steel Sink', 'Toilets: CP Fittings of Jaguar or equivalent' ],
//         Others: [ 'Wiring: Concealed Copper Wiring', 'Power Backup: DG set for common areas' ],
//     },
//     floorplans: [
//           {
//               name: 'AMARA ADHYA - 3BHK',
//               priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
//               image: '/properties/property.jpg',
//               specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '3 BHK' }, { icon: Scaling, text: '2351 - 2454 Sq.Ft' }]
//           },
//           {
//               name: 'AMARA ADHYA - 5BHK',
//               priceRange: '₹ 8 Cr. - 10 Cr.',
//               image: '/properties/property2.jpg',
//               specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '5 BHK' }, { icon: Scaling, text: '4351 - 4454 Sq.Ft' }]
//           }
//       ],
//   },
//   {
//     id: 7,
//     name: 'CASA GRANDE',
//     developer: 'Emaar Properties',
//     location: 'Velachery, Chennai',
//     priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
//     images: [
//       '/properties/property2.jpg',
//       '/properties/property.jpg',
//       '/properties/property4.jpg',
//       '/properties/property3.jpg',
//     ],
//      mapImage: '/maps/map.png', 
//     tag: { text: 'Under Construction', color: 'yellow' },
//     specs: [
//       { icon: Building2, text: 'Villa' },
//       { icon: BedDouble, text: '4 BHK' },
//       { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
//     ],
//     overview: {
//       pricePerSqFt: '₹ 11,000',
//       totalUnits: 40,
//       projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
//       zoning: 'Residential',
//       propertyType: 'Villa',
//       status: 'Under Construction',
//       landExtent: '2.5 Acres',
//     },
//     description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike."
//   ,
//       salientFeatures: [
//         'Centralised VRV ACs',
//         'IOT enabled Smart-Ready Homes',
//         'False ceiling with Designer Lights',
//         'Landscaped Terrace & Gym',
//     ],
//     specifications: {
//         Flooring: [
//             'Toilets: Ceramic Tiles',
//             'Master Bedroom: Vitrified Tiled Flooring',
//             'Other Bedroom: Vitrified Tiled Flooring',
//             'Balcony: Ceramic Tiles',
//             'Kitchen: ceramic tile flooring',
//             'Living/Dining: Vitrified Tiles',
//         ],
//         Doors: [ 'Main Door: Teak Wood Frame', 'Internal Doors: Hardwood Frame' ],
//         Walls: [ 'Interior: Emulsion Paint', 'Exterior: Weatherproof Paint' ],
//         Fittings: [ 'Kitchen: Granite Platform with Stainless Steel Sink', 'Toilets: CP Fittings of Jaguar or equivalent' ],
//         Others: [ 'Wiring: Concealed Copper Wiring', 'Power Backup: DG set for common areas' ],
//     },
//     floorplans: [
//           {
//               name: 'AMARA ADHYA - 3BHK',
//               priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
//               image: '/properties/property.jpg',
//               specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '3 BHK' }, { icon: Scaling, text: '2351 - 2454 Sq.Ft' }]
//           },
//           {
//               name: 'AMARA ADHYA - 5BHK',
//               priceRange: '₹ 8 Cr. - 10 Cr.',
//               image: '/properties/property2.jpg',
//               specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '5 BHK' }, { icon: Scaling, text: '4351 - 4454 Sq.Ft' }]
//           }
//       ],
//   },
//   {
//     id: 8,
//     name: 'CASA GRANDE',
//     developer: 'Emaar Properties',
//     location: 'Velachery, Chennai',
//     priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
//     images: [
//       '/properties/property2.jpg',
//       '/properties/property.jpg',
//       '/properties/property4.jpg',
//       '/properties/property3.jpg',
//     ],
//      mapImage: '/maps/map.png', 
//     tag: { text: 'Under Construction', color: 'yellow' },
//     specs: [
//       { icon: Building2, text: 'Villa' },
//       { icon: BedDouble, text: '4 BHK' },
//       { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
//     ],
//     overview: {
//       pricePerSqFt: '₹ 11,000',
//       totalUnits: 40,
//       projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
//       zoning: 'Residential',
//       propertyType: 'Villa',
//       status: 'Under Construction',
//       landExtent: '2.5 Acres',
//     },
//     description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike."
//   ,
//       salientFeatures: [
//         'Centralised VRV ACs',
//         'IOT enabled Smart-Ready Homes',
//         'False ceiling with Designer Lights',
//         'Landscaped Terrace & Gym',
//     ],
//     specifications: {
//         Flooring: [
//             'Toilets: Ceramic Tiles',
//             'Master Bedroom: Vitrified Tiled Flooring',
//             'Other Bedroom: Vitrified Tiled Flooring',
//             'Balcony: Ceramic Tiles',
//             'Kitchen: ceramic tile flooring',
//             'Living/Dining: Vitrified Tiles',
//         ],
//         Doors: [ 'Main Door: Teak Wood Frame', 'Internal Doors: Hardwood Frame' ],
//         Walls: [ 'Interior: Emulsion Paint', 'Exterior: Weatherproof Paint' ],
//         Fittings: [ 'Kitchen: Granite Platform with Stainless Steel Sink', 'Toilets: CP Fittings of Jaguar or equivalent' ],
//         Others: [ 'Wiring: Concealed Copper Wiring', 'Power Backup: DG set for common areas' ],
//     },
//     floorplans: [
//         {
//             name: 'AMARA ADHYA - 3BHK',
//             priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
//             image: '/properties/property.jpg',
//             specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '3 BHK' }, { icon: Scaling, text: '2351 - 2454 Sq.Ft' }]
//         },
//         {
//             name: 'AMARA ADHYA - 5BHK',
//             priceRange: '₹ 8 Cr. - 10 Cr.',
//             image: '/properties/property2.jpg',
//             specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '5 BHK' }, { icon: Scaling, text: '4351 - 4454 Sq.Ft' }]
//         }
//     ],
//   },
//   {
//     id: 9,
//     name: 'CASA GRANDE',
//     developer: 'Emaar Properties',
//     location: 'Velachery, Chennai',
//     priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
//     images: [
//       '/properties/property2.jpg',
//       '/properties/property.jpg',
//       '/properties/property4.jpg',
//       '/properties/property3.jpg',
//     ],
//      mapImage: '/maps/map.png', 
//     tag: { text: 'Under Construction', color: 'yellow' },
//     specs: [
//       { icon: Building2, text: 'Villa' },
//       { icon: BedDouble, text: '4 BHK' },
//       { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
//     ],
//     overview: {
//       pricePerSqFt: '₹ 11,000',
//       totalUnits: 40,
//       projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
//       zoning: 'Residential',
//       propertyType: 'Villa',
//       status: 'Under Construction',
//       landExtent: '2.5 Acres',
//     },
//     description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike."
//   ,
//       salientFeatures: [
//         'Centralised VRV ACs',
//         'IOT enabled Smart-Ready Homes',
//         'False ceiling with Designer Lights',
//         'Landscaped Terrace & Gym',
//     ],
//     specifications: {
//         Flooring: [
//             'Toilets: Ceramic Tiles',
//             'Master Bedroom: Vitrified Tiled Flooring',
//             'Other Bedroom: Vitrified Tiled Flooring',
//             'Balcony: Ceramic Tiles',
//             'Kitchen: ceramic tile flooring',
//             'Living/Dining: Vitrified Tiles',
//         ],
//         Doors: [ 'Main Door: Teak Wood Frame', 'Internal Doors: Hardwood Frame' ],
//         Walls: [ 'Interior: Emulsion Paint', 'Exterior: Weatherproof Paint' ],
//         Fittings: [ 'Kitchen: Granite Platform with Stainless Steel Sink', 'Toilets: CP Fittings of Jaguar or equivalent' ],
//         Others: [ 'Wiring: Concealed Copper Wiring', 'Power Backup: DG set for common areas' ],
//     },
//     floorplans: [
//         {
//             name: 'AMARA ADHYA - 3BHK',
//             priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
//             image: '/properties/property.jpg',
//             specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '3 BHK' }, { icon: Scaling, text: '2351 - 2454 Sq.Ft' }]
//         },
//         {
//             name: 'AMARA ADHYA - 5BHK',
//             priceRange: '₹ 8 Cr. - 10 Cr.',
//             image: '/properties/property2.jpg',
//             specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '5 BHK' }, { icon: Scaling, text: '4351 - 4454 Sq.Ft' }]
//         }
//     ],
//   },
//   {
//     id: 10,
//     name: 'CASA GRANDE',
//     developer: 'Emaar Properties',
//     location: 'Velachery, Chennai',
//     priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
//     images: [
//       '/properties/property2.jpg',
//       '/properties/property.jpg',
//       '/properties/property4.jpg',
//       '/properties/property3.jpg',
//     ],
//      mapImage: '/maps/map.png', 
//     tag: { text: 'Under Construction', color: 'yellow' },
//     specs: [
//       { icon: Building2, text: 'Villa' },
//       { icon: BedDouble, text: '4 BHK' },
//       { icon: Scaling, text: '3100 - 3400 Sq.Ft' },
//     ],
//     overview: {
//       pricePerSqFt: '₹ 11,000',
//       totalUnits: 40,
//       projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
//       zoning: 'Residential',
//       propertyType: 'Villa',
//       status: 'Under Construction',
//       landExtent: '2.5 Acres',
//     },
//     description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike."
//   ,
//     salientFeatures: [
//         'Centralised VRV ACs',
//         'IOT enabled Smart-Ready Homes',
//         'False ceiling with Designer Lights',
//         'Landscaped Terrace & Gym',
//     ],
//     specifications: {
//         Flooring: [
//             'Toilets: Ceramic Tiles',
//             'Master Bedroom: Vitrified Tiled Flooring',
//             'Other Bedroom: Vitrified Tiled Flooring',
//             'Balcony: Ceramic Tiles',
//             'Kitchen: ceramic tile flooring',
//             'Living/Dining: Vitrified Tiles',
//         ],
//         Doors: [ 'Main Door: Teak Wood Frame', 'Internal Doors: Hardwood Frame' ],
//         Walls: [ 'Interior: Emulsion Paint', 'Exterior: Weatherproof Paint' ],
//         Fittings: [ 'Kitchen: Granite Platform with Stainless Steel Sink', 'Toilets: CP Fittings of Jaguar or equivalent' ],
//         Others: [ 'Wiring: Concealed Copper Wiring', 'Power Backup: DG set for common areas' ],
//     },
//   floorplans: [
//         {
//             name: 'AMARA ADHYA - 3BHK',
//             priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
//             image: '/properties/property.jpg',
//             specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '3 BHK' }, { icon: Scaling, text: '2351 - 2454 Sq.Ft' }]
//         },
//         {
//             name: 'AMARA ADHYA - 5BHK',
//             priceRange: '₹ 8 Cr. - 10 Cr.',
//             image: '/properties/property2.jpg',
//             specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '5 BHK' }, { icon: Scaling, text: '4351 - 4454 Sq.Ft' }]
//         }
//     ],
//   }
//   ,
//   // Add more complete property objects here...
// ];






import { Building2, BedDouble, Scaling, Wrench, Trees, Dumbbell, ToyBrick, Sprout } from 'lucide-react';

// import { Building2, BedDouble, Scaling } from 'lucide-react';

export type Developer = {
  id: number;
  name: string;
  logo?: string;
  totalProjects: number;
  ongoingProjects: number;
  yearsOfExperience: number;
  description: string;
};

export const developersData: Developer[] = [
    {
        id: 1,
        name: 'AMARA HOMES',
        totalProjects: 13,
        ongoingProjects: 5,
        yearsOfExperience: 20,
        description: "At Amara, we have always believed in curating spaces that are alive and thriving. With over a decade of creating expressive works of art in the most prime localities, Amara has pushed the envelope in terms of absolute luxury. Each home is a seamless coherence between tradition and modern living, bearing all the hallmarks of Amara's design of excellence, eternalized."
    },
    {
        id: 2,
        name: 'Prestige Group',
        totalProjects: 250,
        ongoingProjects: 45,
        yearsOfExperience: 35,
        description: "Prestige Group has firmly established itself as one of the leading and most successful developers of real estate in India by imprinting its indelible mark across all asset classes. Founded in 1986, the group's turnover is today in excess of Rs 3518 Cr."
    },
];

export type Property = {
  id: number;
  name: string;
  developer: string;
  developerId: number; // Added this field to link properties to developers
  location: string;
  priceRange: string;
  images: string[];
  mapImage: string;
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
  salientFeatures: string[];
  specifications: {
    Flooring: string[];
    Doors: string[];
    Walls: string[];
    Fittings: string[];
    Others: string[];
  };
  floorplans: {
      name: string;
      priceRange: string;
      image: string;
      specs: { icon: React.ElementType; text: string }[];
  }[];
  amenities: { // ✅ 2. Add the new amenities property
      name: string;
      icon: React.ElementType;
  }[];
};

export const propertiesData: Property[] = [
  {
    id: 1,
    name: 'TVS Emerald Cascadia',
    developer: 'AMARA HOMES',
    developerId: 1, // Linking to AMARA HOMES developer
    location: 'Gobalakpuram, Chennai',
    priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
    images: [
      '/properties/property.jpg',
      '/properties/property.jpg',
      '/properties/property.jpg',
      '/properties/property.jpg',
    ],
    mapImage: '/maps/map.png', 
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
    
    description: "TVS Emerald Cascadia is a new launch residential project located on Mission Road, South Bangalore, designed to offer luxurious living spaces for discerning homebuyers. Spanning 1.1 acres, this elegant project comprises a total of 63 units that include a variety of configurations, such as 3 and 4 BHK apartments. Known for its attention to detail, TVS Emerald Cascadia offers exclusive homes that combine spaciousness with modern amenities, making it a perfect choice for those looking for grandeur and convenience.",
      salientFeatures: [
        'Centralised VRV ACs',
        'IOT enabled Smart-Ready Homes',
        'False ceiling with Designer Lights',
        'Landscaped Terrace & Gym',
    ],
    specifications: {
        Flooring: [
            'Toilets: Ceramic Tiles',
            'Master Bedroom: Vitrified Tiled Flooring',
            'Other Bedroom: Vitrified Tiled Flooring',
            'Balcony: Ceramic Tiles',
            'Kitchen: ceramic tile flooring',
            'Living/Dining: Vitrified Tiles',
        ],
        Doors: [ 'Main Door: Teak Wood Frame', 'Internal Doors: Hardwood Frame' ],
        Walls: [ 'Interior: Emulsion Paint', 'Exterior: Weatherproof Paint' ],
        Fittings: [ 'Kitchen: Granite Platform with Stainless Steel Sink', 'Toilets: CP Fittings of Jaguar or equivalent' ],
        Others: [ 'Wiring: Concealed Copper Wiring', 'Power Backup: DG set for common areas' ],
    },
    floorplans: [
        {
            name: 'AMARA ADHYA - 3BHK',
            priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
            image: '/properties/property.jpg',
            specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '3 BHK' }, { icon: Scaling, text: '2351 - 2454 Sq.Ft' }]
        },
        {
            name: 'AMARA ADHYA - 5BHK',
            priceRange: '₹ 8 Cr. - 10 Cr.',
            image: '/properties/property2.jpg',
            specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '5 BHK' }, { icon: Scaling, text: '4351 - 4454 Sq.Ft' }]
        }
    ],
    amenities: [
        { name: 'Maintenance Staff', icon: Wrench },
        { name: 'Parks', icon: Trees },
        { name: 'Gym', icon: Dumbbell },
        { name: 'Kids Area', icon: ToyBrick },
        { name: 'Garden', icon: Sprout },
    ],
  },
  {
    id: 2,
    name: 'CASA GRANDE',
    developer: 'Emaar Properties',
    developerId: 2, // Linking to Prestige Group developer
    location: 'Velachery, Chennai',
    priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
    images: [
      '/properties/property.jpg',
      '/properties/property.jpg',
      '/properties/property.jpg',
      '/properties/property.jpg',
    ],
      mapImage: '/maps/map.png', 
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
    description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike.",
      salientFeatures: [
        'Centralised VRV ACs',
        'IOT enabled Smart-Ready Homes',
        'False ceiling with Designer Lights',
        'Landscaped Terrace & Gym',
    ],
    specifications: {
        Flooring: [
            'Toilets: Ceramic Tiles',
            'Master Bedroom: Vitrified Tiled Flooring',
            'Other Bedroom: Vitrified Tiled Flooring',
            'Balcony: Ceramic Tiles',
            'Kitchen: ceramic tile flooring',
            'Living/Dining: Vitrified Tiles',
        ],
        Doors: [ 'Main Door: Teak Wood Frame', 'Internal Doors: Hardwood Frame' ],
        Walls: [ 'Interior: Emulsion Paint', 'Exterior: Weatherproof Paint' ],
        Fittings: [ 'Kitchen: Granite Platform with Stainless Steel Sink', 'Toilets: CP Fittings of Jaguar or equivalent' ],
        Others: [ 'Wiring: Concealed Copper Wiring', 'Power Backup: DG set for common areas' ],
    },
    floorplans: [
        {
            name: 'AMARA ADHYA - 3BHK',
            priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
            image: '/properties/property.jpg',
            specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '3 BHK' }, { icon: Scaling, text: '2351 - 2454 Sq.Ft' }]
        },
        {
            name: 'AMARA ADHYA - 5BHK',
            priceRange: '₹ 8 Cr. - 10 Cr.',
            image: '/properties/property2.jpg',
            specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '5 BHK' }, { icon: Scaling, text: '4351 - 4454 Sq.Ft' }]
        }
    ],
    amenities: [
        { name: 'Maintenance Staff', icon: Wrench },
        { name: 'Parks', icon: Trees },
        { name: 'Gym', icon: Dumbbell },
        { name: 'Kids Area', icon: ToyBrick },
        { name: 'Garden', icon: Sprout },
    ],
  },
    {
    id: 4,
    name: 'CASA GRANDE',
    developer: 'Emaar Properties',
    developerId: 2, // Linking to Prestige Group developer
    location: 'Velachery, Chennai',
    priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
    images: [
      '/properties/property.jpg',
      '/properties/property.jpg',
      '/properties/property.jpg',
      '/properties/property.jpg',
    ],
      mapImage: '/maps/map.png', 
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
    description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike.",
      salientFeatures: [
        'Centralised VRV ACs',
        'IOT enabled Smart-Ready Homes',
        'False ceiling with Designer Lights',
        'Landscaped Terrace & Gym',
    ],
    specifications: {
        Flooring: [
            'Toilets: Ceramic Tiles',
            'Master Bedroom: Vitrified Tiled Flooring',
            'Other Bedroom: Vitrified Tiled Flooring',
            'Balcony: Ceramic Tiles',
            'Kitchen: ceramic tile flooring',
            'Living/Dining: Vitrified Tiles',
        ],
        Doors: [ 'Main Door: Teak Wood Frame', 'Internal Doors: Hardwood Frame' ],
        Walls: [ 'Interior: Emulsion Paint', 'Exterior: Weatherproof Paint' ],
        Fittings: [ 'Kitchen: Granite Platform with Stainless Steel Sink', 'Toilets: CP Fittings of Jaguar or equivalent' ],
        Others: [ 'Wiring: Concealed Copper Wiring', 'Power Backup: DG set for common areas' ],
    },
    floorplans: [
        {
            name: 'AMARA ADHYA - 3BHK',
            priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
            image: '/properties/property.jpg',
            specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '3 BHK' }, { icon: Scaling, text: '2351 - 2454 Sq.Ft' }]
        },
        {
            name: 'AMARA ADHYA - 5BHK',
            priceRange: '₹ 8 Cr. - 10 Cr.',
            image: '/properties/property2.jpg',
            specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '5 BHK' }, { icon: Scaling, text: '4351 - 4454 Sq.Ft' }]
        }
    ],
    amenities: [
        { name: 'Maintenance Staff', icon: Wrench },
        { name: 'Parks', icon: Trees },
        { name: 'Gym', icon: Dumbbell },
        { name: 'Kids Area', icon: ToyBrick },
        { name: 'Garden', icon: Sprout },
    ],
  },
    {
    id: 3,
    name: 'CASA GRANDE',
    developer: 'Emaar Properties',
    developerId: 2, // Linking to Prestige Group developer
    location: 'Velachery, Chennai',
    priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
    images: [
      '/properties/property.jpg',
      '/properties/property.jpg',
      '/properties/property.jpg',
      '/properties/property.jpg',
    ],
      mapImage: '/maps/map.png', 
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
    description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike.",
      salientFeatures: [
        'Centralised VRV ACs',
        'IOT enabled Smart-Ready Homes',
        'False ceiling with Designer Lights',
        'Landscaped Terrace & Gym',
    ],
    specifications: {
        Flooring: [
            'Toilets: Ceramic Tiles',
            'Master Bedroom: Vitrified Tiled Flooring',
            'Other Bedroom: Vitrified Tiled Flooring',
            'Balcony: Ceramic Tiles',
            'Kitchen: ceramic tile flooring',
            'Living/Dining: Vitrified Tiles',
        ],
        Doors: [ 'Main Door: Teak Wood Frame', 'Internal Doors: Hardwood Frame' ],
        Walls: [ 'Interior: Emulsion Paint', 'Exterior: Weatherproof Paint' ],
        Fittings: [ 'Kitchen: Granite Platform with Stainless Steel Sink', 'Toilets: CP Fittings of Jaguar or equivalent' ],
        Others: [ 'Wiring: Concealed Copper Wiring', 'Power Backup: DG set for common areas' ],
    },
    floorplans: [
        {
            name: 'AMARA ADHYA - 3BHK',
            priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
            image: '/properties/property.jpg',
            specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '3 BHK' }, { icon: Scaling, text: '2351 - 2454 Sq.Ft' }]
        },
        {
            name: 'AMARA ADHYA - 5BHK',
            priceRange: '₹ 8 Cr. - 10 Cr.',
            image: '/properties/property2.jpg',
            specs: [{ icon: Building2, text: 'Apartments' }, { icon: BedDouble, text: '5 BHK' }, { icon: Scaling, text: '4351 - 4454 Sq.Ft' }]
        }
    ],
    amenities: [
        { name: 'Maintenance Staff', icon: Wrench },
        { name: 'Parks', icon: Trees },
        { name: 'Gym', icon: Dumbbell },
        { name: 'Kids Area', icon: ToyBrick },
        { name: 'Garden', icon: Sprout },
    ],
  },
  // Add the remaining properties with developerId fields...
];




// // ✅ No longer need to import icons here, as we are using string names.

// export type Developer = {
//   id: number;
//   name: string;
//   logo?: string;
//   totalProjects: number;
//   ongoingProjects: number;
//   yearsOfExperience: number;
//   description: string;
// };

// export const developersData: Developer[] = [
//     {
//         id: 1,
//         name: 'AMARA HOMES',
//         totalProjects: 13,
//         ongoingProjects: 5,
//         yearsOfExperience: 20,
//         description: "At Amara, we have always believed in curating spaces that are alive and thriving. With over a decade of creating expressive works of art in the most prime localities, Amara has pushed the envelope in terms of absolute luxury. Each home is a seamless coherence between tradition and modern living, bearing all the hallmarks of Amara's design of excellence, eternalized."
//     },
//     {
//         id: 2,
//         name: 'Prestige Group',
//         totalProjects: 250,
//         ongoingProjects: 45,
//         yearsOfExperience: 35,
//         description: "Prestige Group has firmly established itself as one of the leading and most successful developers of real estate in India by imprinting its indelible mark across all asset classes. Founded in 1986, the group's turnover is today in excess of Rs 3518 Cr."
//     },
// ];

// export type Property = {
//   id: number;
//   name: string;
//   developer: string;
//   developerId: number;
//   location: string;
//   priceRange: string;
//   images: string[];
//   mapImage: string;
//   tag?: { text: string; color: 'green' | 'yellow' | 'blue' };
//   // ✅ Changed icon type from React.ElementType to string
//   specs: { icon: string; text: string }[];
//   overview: {
//     pricePerSqFt: string;
//     totalUnits: number;
//     projectRera: string;
//     zoning: string;
//     propertyType: string;
//     status: string;
//     landExtent: string;
//   };
//   description: string;
//   salientFeatures: string[];
//   specifications: {
//     Flooring: string[];
//     Doors: string[];
//     Walls: string[];
//     Fittings: string[];
//     Others: string[];
//   };
//   floorplans: {
//       name: string;
//       priceRange: string;
//       image: string;
//       // ✅ Changed icon type from React.ElementType to string
//       specs: { icon: string; text: string }[];
//   }[];
//   amenities: {
//       name: string;
//       // ✅ Changed icon type from React.ElementType to string
//       icon: string;
//   }[];
// };

// export const propertiesData: Property[] = [
//   {
//     id: 1,
//     name: 'TVS Emerald Cascadia',
//     developer: 'AMARA HOMES',
//     developerId: 1,
//     location: 'Gobalakpuram, Chennai',
//     priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
//     images: [
//       '/properties/property.jpg',
//       '/properties/property.jpg',
//       '/properties/property.jpg',
//       '/properties/property.jpg',
//     ],
//     mapImage: '/maps/map.png', 
//     tag: { text: 'Ready to Move', color: 'green' },
//     // ✅ Icons are now strings
//     specs: [
//       { icon: 'Building2', text: 'Apartments' },
//       { icon: 'BedDouble', text: '3 BHK' },
//       { icon: 'Scaling', text: '2351 - 2454 Sq.Ft' },
//     ],
//     overview: {
//       pricePerSqFt: '₹ 12,000',
//       totalUnits: 63,
//       projectRera: 'PRM/KA/RERA/1251/310/PR/180924/007033',
//       zoning: 'Residential',
//       propertyType: 'Apartments',
//       status: 'Under Construction',
//       landExtent: '1.1 Acres',
//     },
    
//     description: "TVS Emerald Cascadia is a new launch residential project located on Mission Road, South Bangalore, designed to offer luxurious living spaces for discerning homebuyers. Spanning 1.1 acres, this elegant project comprises a total of 63 units that include a variety of configurations, such as 3 and 4 BHK apartments. Known for its attention to detail, TVS Emerald Cascadia offers exclusive homes that combine spaciousness with modern amenities, making it a perfect choice for those looking for grandeur and convenience.",
//     salientFeatures: [
//         'Centralised VRV ACs',
//         'IOT enabled Smart-Ready Homes',
//         'False ceiling with Designer Lights',
//         'Landscaped Terrace & Gym',
//     ],
//     specifications: {
//         Flooring: [
//             'Toilets: Ceramic Tiles',
//             'Master Bedroom: Vitrified Tiled Flooring',
//             'Other Bedroom: Vitrified Tiled Flooring',
//             'Balcony: Ceramic Tiles',
//             'Kitchen: ceramic tile flooring',
//             'Living/Dining: Vitrified Tiles',
//         ],
//         Doors: [ 'Main Door: Teak Wood Frame', 'Internal Doors: Hardwood Frame' ],
//         Walls: [ 'Interior: Emulsion Paint', 'Exterior: Weatherproof Paint' ],
//         Fittings: [ 'Kitchen: Granite Platform with Stainless Steel Sink', 'Toilets: CP Fittings of Jaguar or equivalent' ],
//         Others: [ 'Wiring: Concealed Copper Wiring', 'Power Backup: DG set for common areas' ],
//     },
//     floorplans: [
//         {
//             name: 'AMARA ADHYA - 3BHK',
//             priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
//             image: '/properties/property.jpg',
//             // ✅ Icons are now strings
//             specs: [{ icon: 'Building2', text: 'Apartments' }, { icon: 'BedDouble', text: '3 BHK' }, { icon: 'Scaling', text: '2351 - 2454 Sq.Ft' }]
//         },
//         {
//             name: 'AMARA ADHYA - 5BHK',
//             priceRange: '₹ 8 Cr. - 10 Cr.',
//             image: '/properties/property2.jpg',
//             // ✅ Icons are now strings
//             specs: [{ icon: 'Building2', text: 'Apartments' }, { icon: 'BedDouble', text: '5 BHK' }, { icon: 'Scaling', text: '4351 - 4454 Sq.Ft' }]
//         }
//     ],
//     // ✅ Icons are now strings
//     amenities: [
//         { name: 'Maintenance Staff', icon: 'Wrench' },
//         { name: 'Parks', icon: 'Trees' },
//         { name: 'Gym', icon: 'Dumbbell' },
//         { name: 'Kids Area', icon: 'ToyBrick' },
//         { name: 'Garden', icon: 'Sprout' },
//     ],
//   },
//   {
//     id: 2,
//     name: 'CASA GRANDE',
//     developer: 'Emaar Properties',
//     developerId: 2,
//     location: 'Velachery, Chennai',
//     priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
//     images: [
//       '/properties/property.jpg',
//       '/properties/property.jpg',
//       '/properties/property.jpg',
//       '/properties/property.jpg',
//     ],
//     mapImage: '/maps/map.png', 
//     tag: { text: 'Under Construction', color: 'yellow' },
//     specs: [
//       { icon: 'Building2', text: 'Villa' },
//       { icon: 'BedDouble', text: '4 BHK' },
//       { icon: 'Scaling', text: '3100 - 3400 Sq.Ft' },
//     ],
//     overview: {
//       pricePerSqFt: '₹ 11,000',
//       totalUnits: 40,
//       projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
//       zoning: 'Residential',
//       propertyType: 'Villa',
//       status: 'Under Construction',
//       landExtent: '2.5 Acres',
//     },
//     description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike.",
//     salientFeatures: [
//         'Centralised VRV ACs',
//         'IOT enabled Smart-Ready Homes',
//         'False ceiling with Designer Lights',
//         'Landscaped Terrace & Gym',
//     ],
//     specifications: {
//         Flooring: [
//             'Toilets: Ceramic Tiles',
//             'Master Bedroom: Vitrified Tiled Flooring',
//             'Other Bedroom: Vitrified Tiled Flooring',
//             'Balcony: Ceramic Tiles',
//             'Kitchen: ceramic tile flooring',
//             'Living/Dining: Vitrified Tiles',
//         ],
//         Doors: [ 'Main Door: Teak Wood Frame', 'Internal Doors: Hardwood Frame' ],
//         Walls: [ 'Interior: Emulsion Paint', 'Exterior: Weatherproof Paint' ],
//         Fittings: [ 'Kitchen: Granite Platform with Stainless Steel Sink', 'Toilets: CP Fittings of Jaguar or equivalent' ],
//         Others: [ 'Wiring: Concealed Copper Wiring', 'Power Backup: DG set for common areas' ],
//     },
//     floorplans: [
//         {
//             name: 'AMARA ADHYA - 3BHK',
//             priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
//             image: '/properties/property.jpg',
//             specs: [{ icon: 'Building2', text: 'Apartments' }, { icon: 'BedDouble', text: '3 BHK' }, { icon: 'Scaling', text: '2351 - 2454 Sq.Ft' }]
//         },
//         {
//             name: 'AMARA ADHYA - 5BHK',
//             priceRange: '₹ 8 Cr. - 10 Cr.',
//             image: '/properties/property2.jpg',
//             specs: [{ icon: 'Building2', text: 'Apartments' }, { icon: 'BedDouble', text: '5 BHK' }, { icon: 'Scaling', text: '4351 - 4454 Sq.Ft' }]
//         }
//     ],
//     amenities: [
//         { name: 'Maintenance Staff', icon: 'Wrench' },
//         { name: 'Parks', icon: 'Trees' },
//         { name: 'Gym', icon: 'Dumbbell' },
//         { name: 'Kids Area', icon: 'ToyBrick' },
//         { name: 'Garden', icon: 'Sprout' },
//     ],
//   },
//   {
//     id: 3,
//     name: 'CASA GRANDE',
//     developer: 'Emaar Properties',
//     developerId: 2,
//     location: 'Velachery, Chennai',
//     priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
//     images: [
//       '/properties/property.jpg',
//       '/properties/property.jpg',
//       '/properties/property.jpg',
//       '/properties/property.jpg',
//     ],
//     mapImage: '/maps/map.png', 
//     tag: { text: 'Under Construction', color: 'yellow' },
//     specs: [
//       { icon: 'Building2', text: 'Villa' },
//       { icon: 'BedDouble', text: '4 BHK' },
//       { icon: 'Scaling', text: '3100 - 3400 Sq.Ft' },
//     ],
//     overview: {
//       pricePerSqFt: '₹ 11,000',
//       totalUnits: 40,
//       projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
//       zoning: 'Residential',
//       propertyType: 'Villa',
//       status: 'Under Construction',
//       landExtent: '2.5 Acres',
//     },
//     description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike.",
//     salientFeatures: [
//         'Centralised VRV ACs',
//         'IOT enabled Smart-Ready Homes',
//         'False ceiling with Designer Lights',
//         'Landscaped Terrace & Gym',
//     ],
//     specifications: {
//         Flooring: [
//             'Toilets: Ceramic Tiles',
//             'Master Bedroom: Vitrified Tiled Flooring',
//             'Other Bedroom: Vitrified Tiled Flooring',
//             'Balcony: Ceramic Tiles',
//             'Kitchen: ceramic tile flooring',
//             'Living/Dining: Vitrified Tiles',
//         ],
//         Doors: [ 'Main Door: Teak Wood Frame', 'Internal Doors: Hardwood Frame' ],
//         Walls: [ 'Interior: Emulsion Paint', 'Exterior: Weatherproof Paint' ],
//         Fittings: [ 'Kitchen: Granite Platform with Stainless Steel Sink', 'Toilets: CP Fittings of Jaguar or equivalent' ],
//         Others: [ 'Wiring: Concealed Copper Wiring', 'Power Backup: DG set for common areas' ],
//     },
//     floorplans: [
//         {
//             name: 'AMARA ADHYA - 3BHK',
//             priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
//             image: '/properties/property.jpg',
//             specs: [{ icon: 'Building2', text: 'Apartments' }, { icon: 'BedDouble', text: '3 BHK' }, { icon: 'Scaling', text: '2351 - 2454 Sq.Ft' }]
//         },
//         {
//             name: 'AMARA ADHYA - 5BHK',
//             priceRange: '₹ 8 Cr. - 10 Cr.',
//             image: '/properties/property2.jpg',
//             specs: [{ icon: 'Building2', text: 'Apartments' }, { icon: 'BedDouble', text: '5 BHK' }, { icon: 'Scaling', text: '4351 - 4454 Sq.Ft' }]
//         }
//     ],
//     amenities: [
//         { name: 'Maintenance Staff', icon: 'Wrench' },
//         { name: 'Parks', icon: 'Trees' },
//         { name: 'Gym', icon: 'Dumbbell' },
//         { name: 'Kids Area', icon: 'ToyBrick' },
//         { name: 'Garden', icon: 'Sprout' },
//     ],
//   },
//   {
//     id: 4,
//     name: 'CASA GRANDE',
//     developer: 'Emaar Properties',
//     developerId: 2,
//     location: 'Velachery, Chennai',
//     priceRange: '₹ 3.5 Cr. - 4.2 Cr.',
//     images: [
//       '/properties/property.jpg',
//       '/properties/property.jpg',
//       '/properties/property.jpg',
//       '/properties/property.jpg',
//     ],
//     mapImage: '/maps/map.png', 
//     tag: { text: 'Under Construction', color: 'yellow' },
//     specs: [
//       { icon: 'Building2', text: 'Villa' },
//       { icon: 'BedDouble', text: '4 BHK' },
//       { icon: 'Scaling', text: '3100 - 3400 Sq.Ft' },
//     ],
//     overview: {
//       pricePerSqFt: '₹ 11,000',
//       totalUnits: 40,
//       projectRera: 'PRM/KA/RERA/1251/310/PR/190724/007044',
//       zoning: 'Residential',
//       propertyType: 'Villa',
//       status: 'Under Construction',
//       landExtent: '2.5 Acres',
//     },
//     description: "Casa Grande offers a serene living experience with its spacious villas and lush green surroundings. Located in the heart of Velachery, it provides excellent connectivity to the city's major hubs, making it an ideal choice for families and professionals alike.",
//     salientFeatures: [
//         'Centralised VRV ACs',
//         'IOT enabled Smart-Ready Homes',
//         'False ceiling with Designer Lights',
//         'Landscaped Terrace & Gym',
//     ],
//     specifications: {
//         Flooring: [
//             'Toilets: Ceramic Tiles',
//             'Master Bedroom: Vitrified Tiled Flooring',
//             'Other Bedroom: Vitrified Tiled Flooring',
//             'Balcony: Ceramic Tiles',
//             'Kitchen: ceramic tile flooring',
//             'Living/Dining: Vitrified Tiles',
//         ],
//         Doors: [ 'Main Door: Teak Wood Frame', 'Internal Doors: Hardwood Frame' ],
//         Walls: [ 'Interior: Emulsion Paint', 'Exterior: Weatherproof Paint' ],
//         Fittings: [ 'Kitchen: Granite Platform with Stainless Steel Sink', 'Toilets: CP Fittings of Jaguar or equivalent' ],
//         Others: [ 'Wiring: Concealed Copper Wiring', 'Power Backup: DG set for common areas' ],
//     },
//     floorplans: [
//         {
//             name: 'AMARA ADHYA - 3BHK',
//             priceRange: '₹ 5.0 Cr. - 5.9 Cr.',
//             image: '/properties/property.jpg',
//             specs: [{ icon: 'Building2', text: 'Apartments' }, { icon: 'BedDouble', text: '3 BHK' }, { icon: 'Scaling', text: '2351 - 2454 Sq.Ft' }]
//         },
//         {
//             name: 'AMARA ADHYA - 5BHK',
//             priceRange: '₹ 8 Cr. - 10 Cr.',
//             image: '/properties/property2.jpg',
//             specs: [{ icon: 'Building2', text: 'Apartments' }, { icon: 'BedDouble', text: '5 BHK' }, { icon: 'Scaling', text: '4351 - 4454 Sq.Ft' }]
//         }
//     ],
//     amenities: [
//         { name: 'Maintenance Staff', icon: 'Wrench' },
//         { name: 'Parks', icon: 'Trees' },
//         { name: 'Gym', icon: 'Dumbbell' },
//         { name: 'Kids Area', icon: 'ToyBrick' },
//         { name: 'Garden', icon: 'Sprout' },
//     ],
//   },
// ];