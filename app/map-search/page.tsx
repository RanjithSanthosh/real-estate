import { Suspense } from 'react';
import { getCities } from '@/services/api';
import { PrismicCity } from '@/app/data/prismic';
import MapClient from './MapClient';
import { Loader2 } from 'lucide-react';

// This is the loading fallback for the client component
function Loading() {
  return (
    <div className="fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center">
      <Loader2 className="h-12 w-12 animate-spin" />
      <p className="mt-4 text-lg">Loading Map...</p>
    </div>
  );
}

// This is a Server Component
export default async function MapSearchPage() {
  // Fetch data on the server (solves CORS)
  const cityData = await getCities();
  
  // Filter for cities that actually have location data
  const cities = cityData?.results.filter(
    city => city.data.location && city.data.location.latitude
  ) as PrismicCity[] || []; // Ensure it's an array

  return (
    <Suspense fallback={<Loading />}>
      {/* Pass the server-fetched data to the client component */}
      <MapClient cities={cities} />
    </Suspense>
  );
}