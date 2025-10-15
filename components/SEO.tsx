// components/SEO.tsx
import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  image: string;
  url: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export function generateSEOMetadata({
  title,
  description,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
}: SEOProps): Metadata {
  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      type,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      url,
      siteName: 'Home Konnect',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@homekonnect',
    },
    alternates: {
      canonical: url,
    },
    robots: 'index, follow',
  };

  return metadata;
}