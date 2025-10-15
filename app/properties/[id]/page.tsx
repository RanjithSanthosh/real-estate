// app/properties/[id]/page.tsx

import { notFound } from "next/navigation";
import { propertiesData, developersData } from "../../data/properties";
import PropertyDetailClient from "./PropertyDetailClient";
import { Metadata } from 'next';

export async function generateMetadata({
  params
}: {
  params: { id: string };
}): Promise<Metadata> {
  const property = propertiesData.find(
    (p) => p.id.toString() === params.id
  );

  if (!property) {
    return {
      title: "Property Not Found",
      description: "The requested property could not be found.",
    };
  }

  // ✅ Use the environment variable to get the base URL.
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // If the base URL isn't set, we can't generate absolute URLs.
  if (!baseUrl) {
      return {
          title: "Configuration Error",
          description: "Base URL is not configured."
      }
  }

  // ✅ Construct a full, absolute URL for the page.
  const pageUrl = `${baseUrl}/properties/${property.id}`;

  // ✅ Construct a full, absolute URL for the image.
  const imageUrl = property.images && property.images.length > 0
    ? new URL(property.images[0], baseUrl).toString()
    : `${baseUrl}/default-og-image.png`; // A fallback image in your /public folder

  const shareDescription = `🏠 Explore ${property.name} in ${property.location}. Price: ${property.priceRange}.`;

  return {
    title: `${property.name} - ${property.developer} | Home Konnect`,
    description: property.description,
    
    // --- Open Graph Meta Tags (for WhatsApp, Facebook, etc.) ---
    openGraph: {
      type: 'website',
      url: pageUrl,
      title: `${property.name} by ${property.developer}`,
      description: shareDescription,
      images: [
        {
          url: imageUrl, // ✅ This is now an absolute URL
          width: 1200,
          height: 630,
          alt: `Image of ${property.name}`,
        },
      ],
      siteName: 'Home Konnect',
    },
    
    // --- Twitter Card Meta Tags ---
    twitter: {
      card: 'summary_large_image',
      title: `${property.name} by ${property.developer}`,
      description: shareDescription,
      images: [imageUrl], // ✅ This is now an absolute URL
      creator: '@homekonnect',
    },
    
    robots: 'index, follow',
    alternates: {
      canonical: pageUrl,
    },
  };
}


// The rest of your page component remains the same
export default async function PropertyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const property = propertiesData.find(
    (p) => p.id.toString() === params.id
  );

  if (!property) {
    notFound();
  }

  const developer = developersData.find((d) => d.id === property.developerId);

  const serializableProperty = {
    ...property,
    specs: property.specs.map(spec => ({
      ...spec,
      icon: spec.icon.name,
    })),
    floorplans: property.floorplans.map(plan => ({
      ...plan,
      specs: plan.specs.map(spec => ({
        ...spec,
        icon: spec.icon.name,
      })),
    })),
    amenities: property.amenities.map(amenity => ({
      ...amenity,
      icon: amenity.icon.name,
    })),
  };

  return <PropertyDetailClient property={serializableProperty} developer={developer} />;
}