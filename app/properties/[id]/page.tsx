// // app/properties/[id]/page.tsx

// import { notFound } from "next/navigation";
// import { propertiesData, developersData } from "../../data/properties";
// import PropertyDetailClient from "./PropertyDetailClient";
// import { Metadata } from 'next';

// export async function generateMetadata({
//   params
// }: {
//   params: { id: string };
// }): Promise<Metadata> {
//   const property = propertiesData.find(
//     (p) => p.id.toString() === params.id
//   );

//   if (!property) {
//     return {
//       title: "Property Not Found",
//       description: "The requested property could not be found.",
//     };
//   }

//   // ✅ Use the environment variable to get the base URL.
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

//   // If the base URL isn't set, we can't generate absolute URLs.
//   if (!baseUrl) {
//       return {
//           title: "Configuration Error",
//           description: "Base URL is not configured."
//       }
//   }

//   // ✅ Construct a full, absolute URL for the page.
//   const pageUrl = `${baseUrl}/properties/${property.id}`;

//   // ✅ Construct a full, absolute URL for the image.
//   const imageUrl = property.images && property.images.length > 0
//     ? new URL(property.images[0], baseUrl).toString()
//     : `${baseUrl}/default-og-image.png`; // A fallback image in your /public folder

//   const shareDescription = `🏠 Explore ${property.name} in ${property.location}. Price: ${property.priceRange}.`;

//   return {
//     title: `${property.name} - ${property.developer} | Home Konnect`,
//     description: property.description,

//     // --- Open Graph Meta Tags (for WhatsApp, Facebook, etc.) ---
//     openGraph: {
//       type: 'website',
//       url: pageUrl,
//       title: `${property.name} by ${property.developer}`,
//       description: shareDescription,
//       images: [
//         {
//           url: imageUrl, // ✅ This is now an absolute URL
//           width: 1200,
//           height: 630,
//           alt: `Image of ${property.name}`,
//         },
//       ],
//       siteName: 'Home Konnect',
//     },

//     // --- Twitter Card Meta Tags ---
//     twitter: {
//       card: 'summary_large_image',
//       title: `${property.name} by ${property.developer}`,
//       description: shareDescription,
//       images: [imageUrl], // ✅ This is now an absolute URL
//       creator: '@homekonnect',
//     },

//     robots: 'index, follow',
//     alternates: {
//       canonical: pageUrl,
//     },
//   };
// }

// // The rest of your page component remains the same
// export default async function PropertyDetailPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const property = propertiesData.find(
//     (p) => p.id.toString() === params.id
//   );

//   if (!property) {
//     notFound();
//   }

//   const developer = developersData.find((d) => d.id === property.developerId);

//   const serializableProperty = {
//     ...property,
//     specs: property.specs.map(spec => ({
//       ...spec,
//       icon: spec.icon.name,
//     })),
//     floorplans: property.floorplans.map(plan => ({
//       ...plan,
//       specs: plan.specs.map(spec => ({
//         ...spec,
//         icon: spec.icon.name,
//       })),
//     })),
//     amenities: property.amenities.map(amenity => ({
//       ...amenity,
//       icon: amenity.icon.name,
//     })),
//   };

//   return <PropertyDetailClient property={serializableProperty} developer={developer} />;
// }

// app/properties/[id]/page.tsx

import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getPropertyById,
  getBuilderById,
  searchProperties,
} from "@/services/api"; // Ensure path is correct
import {
  transformPrismicProperty,
  transformPrismicBuilder,
  SerializableProperty,
} from "@/services/prismicTransformers"; // Ensure path is correct
import PropertyDetailClient from "./PropertyDetailClient";
import { Developer } from "@/app/data/properties"; // Ensure path is correct

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  // ✅ 1. Fetch live data for metadata
  const prismicProperty = await getPropertyById(params.id);

  if (!prismicProperty) {
    return {
      title: "Property Not Found",
      description: "The requested property could not be found.",
    };
  }

  const data = prismicProperty.data;
  const developerName = data.builder_name?.data?.builder_name || "Home Konnect";
  const propertyName = data.full_name || "Property Details"; // ✅ 2. Use environment variable for base URL

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // ✅ 3. Construct full, absolute URLs

  const pageUrl = `${baseUrl}/properties/${prismicProperty.id}`;
  const imageUrl = data.images?.[0]?.image_link?.url
    ? new URL(data.images[0].image_link.url).toString()
    : `${baseUrl}/default-og-image.png`;

  const priceRange = formatPriceRange(
    data.price_range_minimum,
    data.price_range_maximum,
    data.currency || "₹"
  );
  const shareDescription = `🏠 Explore ${propertyName} in ${data.location}. Price: ${priceRange}.`;

  return {
    title: `${propertyName} - ${developerName} | Home Konnect`,
    description: asText(data.description) || shareDescription, // Use Prismic description // --- Open Graph Meta Tags ---
    openGraph: {
      type: "website",
      url: pageUrl,
      title: `${propertyName} by ${developerName}`,
      description: shareDescription,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `Image of ${propertyName}`,
        },
      ],
      siteName: "Home Konnect",
    }, // --- Twitter Card Meta Tags ---
    twitter: {
      card: "summary_large_image",
      title: `${propertyName} by ${developerName}`,
      description: shareDescription,
      images: [imageUrl],
      creator: "@homekonnect",
    },
    robots: "index, follow",
    alternates: {
      canonical: pageUrl,
    },
  };
}

// Helper functions (could be moved to transformers)
function formatPriceRange(min: number, max: number, currency: string): string {
  const format = (val: number) => {
    if (val >= 10000000) return `${(val / 10000000).toFixed(1)} Cr.`;
    if (val >= 100000) return `${(val / 100000).toFixed(1)} L`;
    return val.toString();
  };
  const minPrice = format(min);
  const maxPrice = format(max);
  if (minPrice === maxPrice) return `${currency} ${minPrice}`;
  return `${currency} ${minPrice} - ${maxPrice}`;
}

function asText(field: any[] | null | undefined): string {
  if (!field || field.length === 0) return "";
  return field.map((f) => f.text).join(" ");
}

// --- ✅ UPDATED: The Page Component ---
export default async function PropertyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // 1. Fetch Main Property
  const prismicProperty = await getPropertyById(params.id);
  if (!prismicProperty) {
    notFound();
  } // 2. Fetch Full Developer Info

  const builderId = prismicProperty.data.builder_name?.id;
  const prismicBuilder = builderId ? await getBuilderById(builderId) : null; // 3. Fetch Related Properties

  const relatedPrismicProperties = builderId
    ? await searchProperties({ builderId: builderId, pageSize: 4 }) // Fetch 4, in case one is the current one
    : null; // 4. Transform Data

  const serializableProperty = transformPrismicProperty(
    prismicProperty,
    prismicBuilder
  );
  const developer: Developer | undefined = prismicBuilder
    ? transformPrismicBuilder(prismicBuilder)
    : undefined;
  const relatedProperties: SerializableProperty[] =
    relatedPrismicProperties?.results
      .filter((p) => p.id !== prismicProperty.id) // Exclude self
      .slice(0, 3) // Take top 3
      .map((p) => transformPrismicProperty(p)) || []; // Transform (without full builder info) // 5. Pass all data to the Client Component

  return (
    <PropertyDetailClient
      property={serializableProperty}
      developer={developer}
      relatedProperties={relatedProperties} // ✅ Pass related properties as a prop
    />
  );
}
