// services/prismicTransformers.ts
// (You can place this file in your 'services' folder)

// import {
//   PrismicProperty,
//   PrismicBuilder,
//   PrismicRichTextBlock,
// } from "@/app/data/prismic";
// import { Property, Developer } from "@/app/data/properties";
// import {
//   Building2,
//   BedDouble,
//   Scaling,
//   Wrench,
//   Trees,
//   Dumbbell,
//   ToyBrick,
//   Sprout,
//   // Import all icons your static data used
// } from "lucide-react";

// // --- Icon Mapper ---
// // This maps string names from Prismic to real React components
// const iconMap: Record<string, React.ElementType> = {
//   Building2: Building2,
//   BedDouble: BedDouble,
//   Scaling: Scaling,
//   Wrench: Wrench,
//   Trees: Trees,
//   Dumbbell: Dumbbell,
//   ToyBrick: ToyBrick,
//   Sprout: Sprout,
//   // Prismic-named icons
//   apartment: Building2,
//   gym: Dumbbell,
//   tree: Trees,
//   plant: Sprout,
//   kids: ToyBrick,
//   // Add any other icon names you use in Prismic
//   default: Wrench,
// };

// const getIcon = (name: string | null | undefined): React.ElementType => {
//   if (!name) return iconMap.default;
//   return iconMap[name] || iconMap.default;
// };

// // --- Helper Functions ---

// function asText(field: PrismicRichTextBlock[] | null | undefined): string {
//   if (!field || field.length === 0) return "";
//   return field.map((f) => f.text).join("\n"); // Use newline for paragraphs
// }

// function formatPriceRange(min: number | null, max: number | null, currency: string): string {
//   const format = (val: number | null | undefined) => {
//     // ✅ This check prevents the crash
//     if (val === null || val === undefined) {
//       return "On Request"; // Return a sensible default
//     }
//     if (val >= 10000000) return `${(val / 10000000).toFixed(1)} Cr.`;
//     if (val >= 100000) return `${(val / 100000).toFixed(1)} L`;
//     return val.toLocaleString('en-IN'); // Use toLocaleString for commas (e.g., 69,00,000)
//   };

//   const minPrice = format(min);
//   const maxPrice = format(max);

//   // ✅ Handle cases where one or both prices are null
//   if (minPrice === "On Request" && maxPrice === "On Request") {
//     return "Price on Request";
//   }
//   if (minPrice === "On Request") {
//     return `${currency} ${maxPrice}`;
//   }
//   if (maxPrice === "On Request") {
//     return `${currency} ${minPrice}`;
//   }

//   if (minPrice === maxPrice) return `${currency} ${minPrice}`;
//   return `${currency} ${minPrice} - ${maxPrice}`;
// }
// function getTagFromStatus(
//   status: string | null
// ): { text: string; color: "green" | "yellow" | "blue" } | undefined {
//   const s = status?.toLowerCase();
//   if (!s) return undefined;
//   if (s.includes("ready to move") || s.includes("sold out"))
//     return { text: status!, color: "green" };
//   if (s.includes("under construction") || s.includes("new launch"))
//     return { text: status!, color: "yellow" };
//   return { text: status!, color: "blue" };
// }

// // --- Main Transformers ---

// export function transformPrismicBuilder(builder: PrismicBuilder): Developer {
//   const data = builder.data;
//   return {
//     id: parseInt(builder.id, 36), // Convert string ID to a unique number (not ideal, but fits your type)
//     name: data.builder_name || "Unknown Builder",
//     logo: data.logo_link?.url,
//     totalProjects: data.total_projects || 0,
//     ongoingProjects: data.ongoing_projects || 0,
//     yearsOfExperience: data.established_year
//       ? new Date().getFullYear() - data.established_year
//       : 0,
//     description: asText(data.description),
//   };
// }

// export function transformPrismicProperty(property: PrismicProperty): Property {
//   const data = property.data;

//   const specs: Property["specs"] = [];
//   const propType = data.property_type_group?.[0]?.property_type?.data;
//   if (propType) {
//     specs.push({
//       icon: getIcon(propType.icon),
//       text: propType.property_type || "Property",
//     });
//   }
//   const mainBhk = data.floor_plans?.[0]?.bhk;
//   if (mainBhk) {
//     specs.push({ icon: getIcon("BedDouble"), text: `${mainBhk} BHK` });
//   }
//   if (data.unit_size) {
//     specs.push({ icon: getIcon("Scaling"), text: data.unit_size });
//   }

//   const floorplans: Property["floorplans"] =
//     data.floor_plans?.map((fp) => ({
//       name: fp.unit_type || `${fp.bhk} BHK`,
//       priceRange: formatPriceRange(fp.price, fp.price, data.currency || "₹"),
//       image:
//         (fp.floor_plan_image_link as any)?.url || "/properties/property.jpg",
//       specs: [
//         { icon: getIcon("BedDouble"), text: `${fp.bhk} BHK` },
//         { icon: getIcon("Scaling"), text: fp.area },
//       ],
//     })) || [];

//   const amenities: Property["amenities"] =
//     data.amenities
//       ?.map((a) => (a as any).amenities1?.data) // Handle Prismic's group field name
//       .filter(Boolean) // Filter out any empty/broken links
//       .map((aData) => ({
//         name: aData.amenity || "Amenity",
//         icon: getIcon(aData.icon),
//       })) || [];

//   const specifications: Property["specifications"] = {
//     Flooring: [],
//     Doors: [],
//     Walls: [],
//     Fittings: [],
//     Others: [],
//   };
//   data.specifications?.forEach((spec: any) => {
//     // Handle rich text 'details' from your test data
//     const items = spec.details?.map((d: any) => d.text) || [];
//     const category = spec.type || "Others"; // 'type' is the category name in your data
//     if (specifications[category as keyof typeof specifications]) {
//       specifications[category as keyof typeof specifications].push(...items);
//     } else {
//       specifications.Others.push(...items);
//     }
//   });

//   // Handle 'salient_features' from your test data
//   const salientFeatures: string[] =
//     data.salient_features
//       ?.map((f: any) => f.feature) // 'feature' is the field name
//       .filter(Boolean) || [];

//   return {
//     id: parseInt(property.id, 36), // Convert string ID to a unique number
//     name: data.full_name || "Untitled Property",
//     developer: data.builder_name?.data?.builder_name || "Home Konnect",
//     developerId: data.builder_name?.id ? parseInt(data.builder_name.id, 36) : 0,
//     location: data.location || "Unknown Location",
//     price: data.price_range_minimum,
//     priceRange: formatPriceRange(
//       data.price_range_minimum,
//       data.price_range_maximum,
//       data.currency || "₹"
//     ),
//     images: data.images?.map((img) => img.image_link.url) || [
//       "/properties/property.jpg",
//     ],
//     mapImage: (data as any).map_image?.url || "/maps/map.png",
//     tag: getTagFromStatus(data.status),
//     specs: specs,
//     overview: {
//       pricePerSqFt: (data as any).overview_price_per_sqft || "N/A",
//       totalUnits: (data as any).overview_total_units || 0,
//       projectRera: data.rera_number || "N/A",
//       zoning: (data as any).overview_zoning || "Residential",
//       propertyType: propType?.property_type || "Apartment",
//       status: data.status || "N/A",
//       landExtent: (data as any).overview_land_extent || "N/A",
//     },
//     description: asText(data.description) || "No description available.",
//     salientFeatures: salientFeatures,
//     specifications: specifications,
//     floorplans: floorplans,
//     amenities: amenities,
//   };
// }

// services/prismicTransformers.ts

import {
  PrismicProperty,
  PrismicBuilder,
  PrismicRichTextBlock,
} from "@/app/data/prismic";
import { Property, Developer } from "@/app/data/properties";

// ❌ WE DON'T IMPORT LUCIDE-REACT ICONS HERE ANYMORE

// --- Icon Mapper ---
// This maps string names from Prismic to a *standardized* string name
// that our new <IconMapper> component will understand.
const iconNameMap: Record<string, string> = {
  Building2: "Building2",
  BedDouble: "BedDouble",
  Scaling: "Scaling",
  Wrench: "Wrench",
  Trees: "Trees",
  Dumbbell: "Dumbbell",
  ToyBrick: "ToyBrick",
  Sprout: "Sprout",
  // Prismic-named icons
  apartment: "Building2",
  gym: "Dumbbell",
  tree: "Trees",
  plant: "Sprout",
  kids: "ToyBrick",
  paper: "Newspaper",
  officer: "Shield",
  restart: "RefreshCw",
  elevator: "ArrowUpDown",
  // Add any other icon names you use in Prismic
  default: "Wrench",
};

// ✅ CHANGED: This function now returns a serializable string
const getIcon = (name: string | null | undefined): string => {
  if (!name) return iconNameMap.default;
  return iconNameMap[name] || iconNameMap.default;
};

// --- Helper Functions --- (Unchanged)
function asText(field: PrismicRichTextBlock[] | null | undefined): string {
  if (!field || field.length === 0) return "";
  return field.map((f) => f.text).join("\n");
}

function formatPriceRange(
  min: number | null,
  max: number | null,
  currency: string
): string {
  const format = (val: number | null | undefined) => {
    if (val === null || val === undefined) {
      return "On Request";
    }
    if (val >= 10000000) return `${(val / 10000000).toFixed(1)} Cr.`;
    if (val >= 100000) return `${(val / 100000).toFixed(1)} L`;
    return val.toLocaleString("en-IN");
  };
  const minPrice = format(min);
  const maxPrice = format(max);
  if (minPrice === "On Request" && maxPrice === "On Request")
    return "Price on Request";
  if (minPrice === "On Request") return `${currency} ${maxPrice}`;
  if (maxPrice === "On Request") return `${currency} ${minPrice}`;
  if (minPrice === maxPrice) return `${currency} ${minPrice}`;
  return `${currency} ${minPrice} - ${maxPrice}`;
}

function getTagFromStatus(
  status: string | null
): { text: string; color: "green" | "yellow" | "blue" } | undefined {
  const s = status?.toLowerCase();
  if (!s) return undefined;
  if (s.includes("ready to move") || s.includes("sold out"))
    return { text: status!, color: "green" };
  if (s.includes("under construction") || s.includes("new launch"))
    return { text: status!, color: "yellow" };
  return { text: status!, color: "blue" };
}

// This simple function converts a Prismic ID string to a pseudo-number
// This is ONLY to match your existing 'Property.id: number' type.
// A better long-term fix is to change 'Property.id' to 'string'.
// services/prismicTransformers.ts

// This function creates a simple numeric hash from a string
// This fixes the "NaN" error.
// function idToNumber(id: string): number {
//   let hash = 0;
//   if (id.length === 0) return hash;
//   for (let i = 0; i < id.length; i++) {
//     const char = id.charCodeAt(i);
//     hash = ((hash << 5) - hash) + char;
//     hash = hash & hash; // Convert to 32bit integer
//   }
//   return Math.abs(hash); // Return the absolute value
// }

// --- Main Transformers ---

export function transformPrismicBuilder(builder: PrismicBuilder): Developer {
  const data = builder.data;
  return {
    id: builder.id, // Use converter
    name: data.builder_name || "Unknown Builder",
    logo: data.logo_link?.url,
    totalProjects: data.total_projects || 0,
    ongoingProjects: data.ongoing_projects || 0,
    yearsOfExperience: data.established_year
      ? new Date().getFullYear() - data.established_year
      : 0,
    description: asText(data.description),
  };
}

export function transformPrismicProperty(property: PrismicProperty): Property {
  const data = property.data;

  // ✅ THIS DATA IS NOW SERIALIZABLE
  const specs: Property["specs"] = [];
  const propType = data.property_type_group?.[0]?.property_type?.data;
  if (propType) {
    // getIcon() now returns a string
    specs.push({
      icon: getIcon(propType.icon),
      text: propType.property_type || "Property",
    });
  }
  const mainBhk = data.floor_plans?.[0]?.bhk;
  if (mainBhk) {
    // getIcon() now returns a string
    specs.push({ icon: getIcon("BedDouble"), text: `${mainBhk} BHK` });
  }
  if (data.unit_size) {
    // getIcon() now returns a string
    specs.push({ icon: getIcon("Scaling"), text: data.unit_size });
  }

  const floorplans: Property["floorplans"] =
    data.floor_plans?.map((fp) => ({
      name: fp.unit_type || `${fp.bhk} BHK`,
      priceRange: formatPriceRange(fp.price, fp.price, data.currency || "₹"),
      image:
        (fp.floor_plan_image_link as any)?.url || "/properties/property.jpg",
      specs: [
        // getIcon() now returns a string
        { icon: getIcon("BedDouble"), text: `${fp.bhk} BHK` },
        { icon: getIcon("Scaling"), text: fp.area },
      ],
    })) || [];

  const amenities: Property["amenities"] =
    data.amenities
      ?.map((a) => (a as any).amenities1?.data)
      .filter(Boolean)
      .map((aData) => ({
        name: aData.amenity || "Amenity",
        // getIcon() now returns a string
        icon: getIcon(aData.icon),
      })) || [];

    const faq = data.faq?.map(f => ({
    question: asText(f.question),
    answer: asText(f.answer),
  })).filter(f => f.question && f.answer) || []; // Filter empty ones

  const specifications: Property["specifications"] = {
    Flooring: [],
    Doors: [],
    Walls: [],
    Fittings: [],
    Others: [],
  };
  data.specifications?.forEach((spec: any) => {
    const items = spec.details?.map((d: any) => d.text) || [];
    const category = spec.type || "Others";
    if (specifications[category as keyof typeof specifications]) {
      specifications[category as keyof typeof specifications].push(...items);
    } else {
      specifications.Others.push(...items);
    }
  });

  const salientFeatures: string[] =
    data.salient_features?.map((f: any) => f.feature).filter(Boolean) || [];

  return {
    id: property.id, // Use converter
    name: data.full_name || "Untitled Property",
    developer: data.builder_name?.data?.builder_name || "Home Konnect",
   developerId: data.builder_name?.id || null,
    location: data.location || "Unknown Location",
    price: data.price_range_minimum || 0, // Ensure price is not null
    priceRange: formatPriceRange(
      data.price_range_minimum,
      data.price_range_maximum,
      data.currency || "₹"
    ),
    images: data.images?.map((img) => img.image_link.url) || [
      "/properties/property.jpg",
    ],
    mapImage: (data as any).map_image?.url || "/maps/map.png",
    tag: getTagFromStatus(data.status),
    featured: data.featured || false,
    specs: specs,
    overview: {
      pricePerSqFt: (data as any).overview_price_per_sqft || "N/A",
      totalUnits: (data as any).overview_total_units || 0,
      projectRera: data.rera_number || "N/A",
      zoning: (data as any).overview_zoning || "Residential",
      propertyType: propType?.property_type || "Apartment",
      status: data.status || "N/A",
      landExtent: (data as any).overview_land_extent || "N/A",
    },
    description: asText(data.description) || "No description available.",
    salientFeatures: salientFeatures,
    specifications: specifications,
    floorplans: floorplans,
    amenities: amenities,
    faq: faq,
  };
}
