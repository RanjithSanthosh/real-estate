

import React, { Suspense } from 'react';
import Navbar from '@/components/shared/Navbar';
import DetailedFooter from '@/components/aboutPage/DetailedFooter';
import SiteMapFooter from '@/components/homePage/SiteMapFooter';
import { searchBlogs } from '@/services/api';
import { PrismicBlog } from '@/app/data/prismic';
import BlogClientPage from './BlogClientPage';
import { Loader2 } from 'lucide-react';
import GenericHero from '@/components/shared/GenericHero';
import BlogHeroImage from '@/public/assets/aboutPage/AboutHERO.png'; // Use a suitable image

// A simple loading fallback to show while the client component loads
function Loading() {
  return (
    <div className="flex justify-center items-center py-24">
      <Loader2 className="h-12 w-12 animate-spin text-green-600" />
    </div>
  );
}

// This is a Server Component. It will fetch data.
export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string; q?: string };
}) {
  // Await and destructure searchParams to follow Next.js async API guidelines
  const { page: pageParam = '1', q = '' } = await Promise.resolve(searchParams);
  const page = parseInt(pageParam, 10);
  const query = q;
  const blogsPerPage = 4; // You had 4 in your old component

  // Fetch data on the server (solves all API/CORS errors)
  const blogResponse = await searchBlogs(page, blogsPerPage, query);
  
  const initialBlogs = (blogResponse?.results || []) as PrismicBlog[];
  const totalPages = blogResponse?.total_pages || 1;
  const totalResults = blogResponse?.total_results_size || 0;

  return (
    <div className="bg-gray-50 min-h-screen">
      <GenericHero 
        title="Blog" 
        subtitle="Your Guide to Smarter Property Decisions" 
        backgroundImage={BlogHeroImage}
        activePage="Blog"
      />
      <Suspense fallback={<Loading />}>
        <BlogClientPage
          initialBlogs={initialBlogs}
          initialPage={page}
          totalPages={totalPages}
          totalResults={totalResults}
          initialSearch={query}
        />
      </Suspense>
      <SiteMapFooter />
      <DetailedFooter />
    </div>
  );
}


