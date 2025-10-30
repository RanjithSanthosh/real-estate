// // app/search/page.tsx
// import { Suspense } from 'react';
// import SearchResultsClient from './SearchResultsClient'; // We'll create this next

// // A simple loading UI as a fallback for Suspense
// function Loading() {
//     return <div className="text-center p-24">Loading search results...</div>;
// }

// // This is the main Server Component for the /search route
// export default function SearchPage() {
//   return (
//     <Suspense fallback={<Loading />}>
//       <SearchResultsClient />
//     </Suspense>
//   );
// }

// app/search/page.tsx
import { Suspense } from "react";
import SearchResultsClient from "./SearchResultsClient";
import { searchProperties, getBuilders } from "@/services/api"; // Adjust path if needed
import {
  transformPrismicProperty,
  transformPrismicBuilder,
} from "@/services/prismicTransformers"; // Adjust path if needed
import { Property, Developer } from "@/app/data/properties"; // For types

// A simple loading UI as a fallback for Suspense
function Loading() {
  return <div className="text-center p-24">Loading search results...</div>;
}

// This function now runs on the server
async function fetchSearchData() {
  try {
    // 1. Fetch all properties and builders in parallel
    const [propertiesResponse, buildersResponse] = await Promise.all([
      searchProperties({ pageSize: 1000 }), // Get all properties
      getBuilders({ pageSize: 100 }), // Get all builders
    ]);

    // 2. Transform the data into the simple types our components use
    const properties: Property[] =
      propertiesResponse?.results.map(transformPrismicProperty) || [];

    const developers: Developer[] =
      buildersResponse?.results.map(transformPrismicBuilder) || [];

    return { properties, developers };
  } catch (error) {
    console.error("Failed to fetch search data:", error);
    return { properties: [], developers: [] }; // Return empty arrays on error
  }
}

// This is now an async Server Component
export default async function SearchPage() {
  // 3. Fetch data on the server
  const { properties, developers } = await fetchSearchData();

  return (
    <Suspense fallback={<Loading />}>
      {/* 4. Pass the data as props to the Client Component */}
      
      <SearchResultsClient properties={properties} developers={developers} />   {" "}
    </Suspense>
  );
}
