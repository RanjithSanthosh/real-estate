

//   'use client';

// import React, { useState, useEffect, useMemo } from 'react';
// import dynamic from 'next/dynamic';
// import { useSearchParams } from 'next/navigation';
// import { PrismicCity } from '@/app/data/prismic';
// import { Loader2, Layers } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import MapHeader from './MapHeader';
// import 'leaflet/dist/leaflet.css';
// const ZoomControl = dynamic(() => import('react-leaflet').then(mod => mod.ZoomControl), { ssr: false });

// // --- Types ---
// type MapCity = Pick<PrismicCity, 'id' | 'data'>;

// // --- Dynamic Imports for Leaflet (Client-Side Only) ---
// const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
// const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
// const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
// const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
// const MarkerClusterGroup = dynamic(() => import('react-leaflet-markercluster'), { ssr: false });

// // --- Main Component ---
// export default function MapClient({ cities }: { cities: MapCity[] }) {
//   const [mapTheme, setMapTheme] = useState<'dark' | 'light'>('dark');
//   const [LeafletIcon, setLeafletIcon] = useState<any>(null);
//   const searchParams = useSearchParams();
//   const query = searchParams.get('q') || '';

//   const defaultCenter: [number, number] = [13.059, 80.280];

//   const tileLayers = {
//     dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
//     light: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//   };

//   const attribution = {
//     dark: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
//     light: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//   };

//   const toggleMapTheme = () => {
//     setMapTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
//   };

//   useEffect(() => {
//     import('leaflet').then(L => {
//       setLeafletIcon(
//         new L.Icon({
//           iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//           iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//           shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//           iconSize: [25, 41],
//           iconAnchor: [12, 41],
//           popupAnchor: [1, -34],
//           shadowSize: [41, 41]
//         })
//       );
//     });
//   }, []);

//   const filteredCities = useMemo(() => {
//     const lowerQuery = query.toLowerCase();
//     if (!lowerQuery) return cities;
//     return cities.filter(city =>
//       city.data.city_name.toLowerCase().includes(lowerQuery)
//     );
//   }, [cities, query]);

//   return (
//     <div className="h-screen w-screen relative">
//       <MapHeader />

//       {/* ✅ Toggle Theme Button - outside MapContainer for reliable re-render */}
//       <div className="absolute top-20 right-5 z-[1000]">
//         <Button
//           onClick={toggleMapTheme}
//           className="bg-white text-gray-800 hover:bg-gray-100 shadow-lg mt-32"
//         >
//           <Layers size={18} className="mr-2" />
//           Toggle Map Theme
//         </Button>
//       </div>

//       <MapContainer
//         key={mapTheme} // force full re-render of map when theme changes
//         center={defaultCenter}
//         zoom={10}
//         className="h-full w-full z-0"
//         scrollWheelZoom={true}
//         zoomControl={false}
//       >
//         <TileLayer
//           url={tileLayers[mapTheme]}
//           attribution={attribution[mapTheme]}
//         />
// <ZoomControl position="bottomleft" />
//         {LeafletIcon && (
//           <MarkerClusterGroup>
//             {filteredCities.map(city => (
//               <Marker
//                 key={city.id}
//                 position={[
//                   city.data.location.latitude,
//                   city.data.location.longitude
//                 ]}
//                 icon={LeafletIcon}
//               >
//                 <Popup>
//                   <strong>{city.data.city_name}</strong>
//                 </Popup>
//               </Marker>
//             ))}
//           </MarkerClusterGroup>
//         )}
//       </MapContainer>
//     </div>
//   );
// }



'use client';

import React, { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { PrismicCity } from '@/app/data/prismic';
import { Loader2, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MapHeader from './MapHeader';
import 'leaflet/dist/leaflet.css';

// --- Types ---
type MapCity = Pick<PrismicCity, 'id' | 'data'>;

// --- Dynamic Imports for Leaflet (Client-Side Only) ---
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { 
  ssr: false,
  loading: () => <div className="h-full w-full flex items-center justify-center bg-gray-100">Loading map...</div>
});

const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
const ZoomControl = dynamic(() => import('react-leaflet').then(mod => mod.ZoomControl), { ssr: false });
const MarkerClusterGroup = dynamic(() => import('react-leaflet-markercluster'), { 
  ssr: false,
  loading: () => null
});

// Custom hook to safely use search params
function useSafeSearchParams() {
  try {
    return useSearchParams();
  } catch (error) {
    return null;
  }
}

// --- Main Component ---
export default function MapClient({ cities }: { cities: MapCity[] }) {
  const [mapTheme, setMapTheme] = useState<'dark' | 'light'>('dark');
  const [leafletIcon, setLeafletIcon] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);
  
  const searchParams = useSafeSearchParams();
  
  // Default center for India
  const defaultCenter: [number, number] = [20.5937, 78.9629];
  const cityCenters: { [key: string]: [number, number] } = {
    'CHENNAI': [13.0827, 80.2707],
    'BENGALURU': [12.9716, 77.5946],
    'HYDERABAD': [17.3850, 78.4867],
    'DELHI': [28.6139, 77.2090],
    'MUMBAI': [19.0760, 72.8777]
  };

  const tileLayers = {
    dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    light: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  };

  const attribution = {
    dark: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
    light: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  };

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMapTheme = () => {
    setMapTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Initialize Leaflet icon
  useEffect(() => {
    if (isClient) {
      import('leaflet')
        .then(L => {
          try {
            const proto = (L.Icon.Default as any)?.prototype;
            if (proto && typeof proto === 'object') {
              // Safely remove legacy _getIconUrl if present
              try {
                if (Object.prototype.hasOwnProperty.call(proto, '_getIconUrl')) {
                  delete proto._getIconUrl;
                }
              } catch (e) {
                // ignore
              }

              // Merge default icon options
              if (L.Icon && L.Icon.Default && typeof L.Icon.Default.mergeOptions === 'function') {
                L.Icon.Default.mergeOptions({
                  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
                  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                });
              }

              // Try to set an instance of the default icon; fallback to constructor
              try {
                setLeafletIcon(new (L.Icon.Default as any)());
              } catch (e) {
                setLeafletIcon(L.Icon.Default);
              }
            } else {
              console.warn('Leaflet Icon.Default prototype not available', L);
            }
          } catch (err) {
            console.warn('Error initializing Leaflet icons', err);
          }
        })
        .catch(err => {
          console.warn('Failed to import leaflet dynamically', err);
        });
    }
  }, [isClient]);

  // Get search parameters safely
  const query = useMemo(() => {
    if (!searchParams) return '';
    return searchParams.get('q') || '';
  }, [searchParams]);

  const cityFilter = useMemo(() => {
    if (!searchParams) return 'ALL';
    return searchParams.get('city') || 'ALL';
  }, [searchParams]);

  // Filter cities based on search query and city filter
  const filteredCities = useMemo(() => {
    if (!cities.length) return [];

    let filtered = cities;

    // Filter by selected city (only if not "ALL")
    if (cityFilter && cityFilter !== 'ALL') {
      filtered = filtered.filter(city => {
        const cityName = (city.data.city_name || '').toUpperCase();
        return cityName.includes(cityFilter.toUpperCase());
      });
    }

    // Filter by search query
    if (query.trim()) {
      const lowerQuery = query.toLowerCase().trim();
      filtered = filtered.filter(city => {
        const cityName = (city.data.city_name || '').toLowerCase();
        const location = (city.data.location?.address || '').toLowerCase();
        const builderName = (city.data.builder_name || '').toLowerCase();
        const projectName = (city.data.project_name || '').toLowerCase();
        
        return cityName.includes(lowerQuery) || 
               location.includes(lowerQuery) ||
               builderName.includes(lowerQuery) ||
               projectName.includes(lowerQuery);
      });
    }

    console.log('Filtered cities:', filtered.length, 'out of', cities.length);
    return filtered;
  }, [cities, query, cityFilter]);

  // Get map center based on selected city
  const getMapCenter = (): [number, number] => {
    if (cityFilter && cityFilter !== 'ALL' && cityCenters[cityFilter.toUpperCase()]) {
      return cityCenters[cityFilter.toUpperCase()];
    }
    
    // If we have filtered cities, calculate bounds, else use default center
    if (filteredCities.length > 0) {
      const lats = filteredCities.map(city => city.data.location?.latitude).filter(Boolean);
      const lngs = filteredCities.map(city => city.data.location?.longitude).filter(Boolean);
      
      if (lats.length > 0 && lngs.length > 0) {
        const avgLat = lats.reduce((a, b) => a + b, 0) / lats.length;
        const avgLng = lngs.reduce((a, b) => a + b, 0) / lngs.length;
        return [avgLat, avgLng];
      }
    }
    
    return defaultCenter;
  };

  // Get appropriate zoom level
  const getZoomLevel = (): number => {
    if (cityFilter && cityFilter !== 'ALL') {
      return 11;
    }
    if (filteredCities.length <= 5) {
      return 10;
    }
    if (filteredCities.length <= 20) {
      return 8;
    }
    return 6;
  };

  if (!isClient) {
    return (
      <div className="h-screen w-screen relative flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-green-600" />
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen relative">
      <MapHeader />

      {/* Toggle Theme Button */}
      <div className="absolute top-20 right-5 z-[1000]">
        <Button
          onClick={toggleMapTheme}
          className="bg-white text-gray-800 hover:bg-gray-100 shadow-lg mt-32 flex items-center gap-2"
          size="sm"
        >
          <Layers size={16} />
          {mapTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </div>

      {/* Results Counter */}
      {isClient && (
        <div className="absolute top-32 left-5 z-[1000] bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
          <p className="text-sm font-medium text-gray-700">
            Showing {filteredCities.length} of {cities.length} properties
            {query && ` for "${query}"`}
            {cityFilter !== 'ALL' && ` in ${cityFilter}`}
          </p>
        </div>
      )}

      <MapContainer
        key={`${mapTheme}-${cityFilter}-${query}`}
        center={getMapCenter()}
        zoom={getZoomLevel()}
        className="h-full w-full z-0"
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          url={tileLayers[mapTheme]}
          attribution={attribution[mapTheme]}
        />
        
        <ZoomControl position="bottomleft" />
        
        {leafletIcon && filteredCities.length > 0 && (
          <MarkerClusterGroup
            chunkedLoading
            maxClusterRadius={50}
            spiderfyOnMaxZoom={true}
            showCoverageOnHover={true}
          >
            {filteredCities.map((city) => {
              const lat = city.data.location?.latitude;
              const lng = city.data.location?.longitude;
              
              // Skip markers without valid coordinates
              if (typeof lat !== 'number' || typeof lng !== 'number' || isNaN(lat) || isNaN(lng)) {
                console.warn(`Skipping city ${city.data.city_name} - invalid coordinates:`, { lat, lng });
                return null;
              }

              return (
                <Marker
                  key={city.id}
                  position={[lat, lng]}
                  icon={leafletIcon}
                >
                  <Popup>
                    <div className="min-w-[200px]">
                      <h3 className="font-bold text-lg mb-2">
                        {city.data.project_name || city.data.city_name || 'Unknown Property'}
                      </h3>
                      {city.data.builder_name && (
                        <p className="text-sm text-gray-600 mb-1">
                          <strong>Builder:</strong> {city.data.builder_name}
                        </p>
                      )}
                      {city.data.city_name && (
                        <p className="text-sm text-gray-600 mb-1">
                          <strong>City:</strong> {city.data.city_name}
                        </p>
                      )}
                      {city.data.location?.address && (
                        <p className="text-sm text-gray-600 mb-2">
                          {city.data.location.address}
                        </p>
                      )}
                      {city.data.price && (
                        <p className="text-sm font-semibold text-green-600">
                          ₹{city.data.price.toLocaleString()}
                        </p>
                      )}
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MarkerClusterGroup>
        )}

        {/* No Results Message */}
        {filteredCities.length === 0 && isClient && (
          <div className="absolute inset-0 flex items-center justify-center z-[500] pointer-events-none">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-4 shadow-xl max-w-md mx-4 text-center">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                No properties found
              </h3>
              <p className="text-gray-600 mb-4">
                {query || cityFilter !== 'ALL' 
                  ? `No properties found for your search criteria.` 
                  : 'No properties available.'}
              </p>
              {cities.length > 0 && (
                <p className="text-sm text-gray-500">
                  Try adjusting your search terms or select a different city.
                </p>
              )}
            </div>
          </div>
        )}
      </MapContainer>
    </div>
  );
}