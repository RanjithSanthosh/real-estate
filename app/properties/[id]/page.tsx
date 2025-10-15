// // app/properties/[id]/page.tsx

// import { notFound } from "next/navigation";
// import { propertiesData, developersData } from "../../data/properties";
// import PropertyDetailClient from "./PropertyDetailClient"; // We will create this component next

// import { Metadata } from 'next';

// // ✅ generateMetadata STAYS HERE in the Server Component
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

//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com';
//   const pageUrl = `${baseUrl}/properties/${property.id}`;
//   const imageUrl = new URL(property.images[0], baseUrl).toString();
//   const shareDescription = `🏠 ${property.name} in ${property.location} | ${property.priceRange} | ${property.specs.map(spec => spec.text).join(' • ')}`;

//   return {
//     title: `${property.name} - ${property.developer} | Home Konnect`,
//     description: property.description,
//     keywords: `real estate, property, ${property.location}, ${property.developer}, home for sale`,
//     openGraph: {
//       type: 'website',
//       title: `${property.name} - ${property.developer}`,
//       description: shareDescription,
//       images: [
//         {
//           url: imageUrl,
//           width: 1200,
//           height: 630,
//           alt: `Image of ${property.name}`,
//         },
//       ],
//       url: pageUrl,
//       siteName: 'Home Konnect',
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: `${property.name} - ${property.developer}`,
//       description: shareDescription,
//       images: [imageUrl],
//       creator: '@homekonnect',
//     },
//     authors: [{ name: property.developer }],
//     publisher: 'Home Konnect',
//     robots: 'index, follow',
//     alternates: {
//       canonical: pageUrl,
//     },
//   };
// }

// // This is the main page component, now a Server Component
// export default async function PropertyDetailPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   // Fetch data on the server
//   const property = propertiesData.find(
//     (p) => p.id.toString() === params.id
//   );

//   if (!property) {
//     notFound();
//   }
  
//   const developer = developersData.find((d) => d.id === property.developerId);

//   // Pass the fetched data as props to the Client Component
//   return <PropertyDetailClient property={property} developer={developer} />;
// }




// app/properties/[id]/page.tsx
// app/properties/[id]/page.tsx

import { notFound } from "next/navigation";
import { propertiesData, developersData } from "../../data/properties";
import PropertyDetailClient from "./PropertyDetailClient";
import { Metadata } from 'next';

// This function generates metadata for SEO
export async function generateMetadata({
  params,
}: {
  // Accept params as possibly a Promise (Next.js may pass a Promise)
  params: { id: string } | Promise<{ id: string }>;
}): Promise<Metadata> {
  // Await params in case it's a Promise to follow Next.js async dynamic API guidance
  const resolvedParams = (await params) as { id: string };

  const property = propertiesData.find(
    (p) => p.id.toString() === resolvedParams.id
  );

  if (!property) {
    return {
      title: "Property Not Found",
      description: "The requested property could not be found.",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com';
  const pageUrl = `${baseUrl}/properties/${property.id}`;
  const imageUrl = new URL(property.images[0], baseUrl).toString();
  const shareDescription = `🏠 ${property.name} in ${property.location} | ${property.priceRange} | ${property.specs.map(spec => spec.text).join(' • ')}`;

  return {
    title: `${property.name} - ${property.developer} | Home Konnect`,
    description: property.description,
    keywords: `real estate, property, ${property.location}, ${property.developer}, home for sale`,
    openGraph: {
      type: 'website',
      title: `${property.name} - ${property.developer}`,
      description: shareDescription,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `Image of ${property.name}`,
        },
      ],
      url: pageUrl,
      siteName: 'Home Konnect',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${property.name} - ${property.developer}`,
      description: shareDescription,
      images: [imageUrl],
      creator: '@homekonnect',
    },
    authors: [{ name: property.developer }],
    publisher: 'Home Konnect',
    robots: 'index, follow',
    alternates: {
      canonical: pageUrl,
    },
  };
}

// This is the main server component for the page
export default async function PropertyDetailPage({
  params,
}: {
  // ✅ Corrected Type: 'params' is a plain object, not a Promise
  params: { id: string };
}) {
  // Now you can use params.id directly
  const property = propertiesData.find(
    (p) => p.id.toString() === params.id
  );

  if (!property) {
    notFound();
  }

  const developer = developersData.find((d) => d.id === property.developerId);

  // Create a serializable version of the property object to pass to the client
  const serializableProperty = {
    ...property,
    specs: property.specs.map(spec => ({
      ...spec,
      // Icons can be React components; serialize to a string safely
      icon: (spec.icon as any)?.name || (spec.icon as any)?.displayName || String(spec.icon),
    })),
    floorplans: property.floorplans.map(plan => ({
      ...plan,
      specs: plan.specs.map(spec => ({
        ...spec,
        icon: (spec.icon as any)?.name || (spec.icon as any)?.displayName || String(spec.icon),
      })),
    })),
    amenities: property.amenities.map(amenity => ({
      ...amenity,
      icon: (amenity.icon as any)?.name || (amenity.icon as any)?.displayName || String(amenity.icon),
    })),
  };

  // Pass the clean, serializable object to the Client Component
  return <PropertyDetailClient property={serializableProperty} developer={developer} />;
}