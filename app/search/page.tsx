// app/search/page.tsx
import { Suspense } from 'react';
import SearchResultsClient from './SearchResultsClient'; // We'll create this next

// A simple loading UI as a fallback for Suspense
function Loading() {
    return <div className="text-center p-24">Loading search results...</div>;
}

// This is the main Server Component for the /search route
export default function SearchPage() {
  return (
    <Suspense fallback={<Loading />}>
      <SearchResultsClient />
    </Suspense>
  );
}