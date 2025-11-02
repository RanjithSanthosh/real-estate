

import axios from 'axios';
import {
  PrismicApiResponse,
  PrismicSearchResponse,
  PrismicProperty,
  PrismicSiteVariables,
  PrismicCollection,
  PrismicAmenity,
  PrismicPropertyType,
  PrismicBuilder,
  PrismicCity,
  PrismicBlog
} from '../app/data/prismic';

const API_BASE = "https://homekonnectcms.prismic.io/api/v2";
const INTEGRATION_FIELDS_REF = "homekonnectcms~6e16b01a-1b51-4c1e-a58f-ee604fcec60e";

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "x-c": "js-7.20.0",
  },
});

// ---  1. FUNCTION TO DYNAMICALLY GET THE MASTER REF ---
let masterRef: string | null = null;
async function getMasterRef(): Promise<string> {
  // If we already fetched it during this server session, return the cached one
  if (masterRef) {
    return masterRef;
  }

  try {
    const response = await api.get<PrismicApiResponse>('');
    const ref = response.data.refs.find(r => r.isMasterRef)?.ref;
    if (!ref) {
      throw new Error("Master ref not found in Prismic response");
    }
    masterRef = ref; // Cache the ref
    return ref;
  } catch (exception) {
    console.error("Error Occurred while fetching master ref", exception);
    throw new Error("Could not connect to Prismic API");
  }
}

const buildQueryParams = (params: Record<string, any>): string => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      if (Array.isArray(value)) {
        value.forEach((v) => searchParams.append(key, v));
      } else {
        searchParams.append(key, value.toString());
      }
    }
  });

  return searchParams.toString();
};

// 1. Authorization API (Used by getMasterRef)
export async function authorization(): Promise<PrismicApiResponse | null> {
  try {
    const response = await api.get<PrismicApiResponse>('');
    return response.data;
  } catch (exception) {
    console.error("Authorization error", exception);
    return null;
  }
}

// 2. Search Properties
export interface SearchPropertiesParams {
  featured?: boolean;
  propertyIds?: string[];
  page?: number;
  pageSize?: number;
  fetch?: string[];
  fetchLinks?: string[];
}

export async function searchProperties(
  params: SearchPropertiesParams = {},
): Promise<PrismicSearchResponse<PrismicProperty> | null> {
  try {
    const ref = await getMasterRef(); 
    const {
      featured,
      propertyIds = [],
      page = 1,
      pageSize = 100,
      fetch = [
        'properties.images', 'properties.videos', 'properties.full_name', 'properties.rera_number',
        'properties.currency', 'properties.featured', 'properties.price_range_minimum',
        'properties.price_range_maximum', 'properties.city', 'properties.status', 'properties.unit_size',
        'properties.offer_available', 'properties.offer_validity', 'properties.location',
        'properties.builder_name', 'properties.property_type_group', 'properties.floor_plans', 'properties.alert_text'
      ],
      fetchLinks = [
        'builders.builder_name', 'city.city_name', 'property_types.property_type', 'property_types.icon'
      ],
    } = params;

    const queryParams: string[] = ['[[at(document.type, "properties")]]'];
    if (featured) {
      queryParams.push("[[at(my.properties.featured, true)]]");
    }
    if (propertyIds.length > 0) {
      queryParams.push(`[[in(document.id, [${propertyIds.map((id) => `"${id}"`).join(",")}])]]`);
    }

    const paramsObj: Record<string, any> = {
      q: queryParams,
      fetch: fetch.join(","),
      fetchLinks: fetchLinks.join(","),
      pageSize,
      page,
      ref,
      integrationFieldsRef: INTEGRATION_FIELDS_REF,
    };

    const queryString = buildQueryParams(paramsObj);
    const response = await api.get(`/documents/search?${queryString}`);
    return response.data;
  } catch (exception) {
    console.error("Property search failed", exception);
    return null;
  }
}

// --- Wrapper Functions (Refactored) ---

export function getFeaturedProperties(
  page: number = 1,
  pageSize: number = 100
) {
  return searchProperties({ featured: true, page, pageSize });
}

export function getPropertiesByIds(
  propertyIds: string[],
  page: number = 1,
  pageSize: number = 1000
) {
  return searchProperties({ propertyIds, page, pageSize });
}

export async function getSiteVariables() {
  try {
    const ref = await getMasterRef();
    const params = {
      q: '[[at(document.type, "sitevariables")]]',
      ref,
      integrationFieldsRef: INTEGRATION_FIELDS_REF,
    };
    const response = await api.get(`/documents/search?${buildQueryParams(params)}`);
    return response.data;
  } catch (exception) {
    console.error("Site variables error", exception);
    return null;
  }
}

export async function getCollections(pageSize: number = 100) {
  try {
    const ref = await getMasterRef(); 
    const params = {
      q: '[[at(document.type, "collection")]]',
      pageSize,
      fetchLinks: [
        "builders.builder_name", "city.city_name", "property_types.property_type",
        "property_types.icon", "properties.full_name", "properties.rera_number",
        // ... all other fetchLinks
      ].join(","),
      orderings: "[my.collection.order]",
      ref,
      integrationFieldsRef: INTEGRATION_FIELDS_REF,
    };
    const response = await api.get(`/documents/search?${buildQueryParams(params)}`);
    return response.data;
  } catch (exception) {
    console.error("Collections error", exception);
    return null;
  }
}

export async function getAmenities(pageSize: number = 100) {
  try {
    const ref = await getMasterRef();
    const params = {
      q: '[[at(document.type, "amenities")]]',
      pageSize,
      fetch: "amenities.amenity,amenities.icon",
      orderings: "[my.amenities.amenity]",
      ref,
      integrationFieldsRef: INTEGRATION_FIELDS_REF,
    };
    const response = await api.get(`/documents/search?${buildQueryParams(params)}`);
    return response.data;
  } catch (exception) {
    console.error("Amenities error", exception);
    return null;
  }
}

export async function getPropertyTypes(pageSize: number = 100) {
  try {
    const ref = await getMasterRef(); 
    const params = {
      q: '[[at(document.type, "property_types")]]',
      pageSize,
      fetch: "property_types.property_type,property_types.icon",
      ref,
      integrationFieldsRef: INTEGRATION_FIELDS_REF,
    };
    const response = await api.get(`/documents/search?${buildQueryParams(params)}`);
    return response.data;
  } catch (exception) {
    console.error("Property types error", exception);
    return null;
  }
}

export async function getBuilders(page: number = 1, pageSize: number = 100) {
  try {
    const ref = await getMasterRef(); 
    const params = {
      q: '[[at(document.type, "builders")]]',
      pageSize,
      page,
      ref,
      integrationFieldsRef: INTEGRATION_FIELDS_REF,
    };
    const response = await api.get(`/documents/search?${buildQueryParams(params)}`);
    return response.data;
  } catch (exception) {
    console.error("Builders error", exception);
    return null;
  }
}

export async function getCities(pageSize: number = 100) {
  try {
    const ref = await getMasterRef(); 
    const params = {
      q: '[[at(document.type, "city")]]',
      pageSize,
      ref,
      integrationFieldsRef: INTEGRATION_FIELDS_REF,
      fetch: 'city.city_name,city.location'
    };
    const response = await api.get(`/documents/search?${buildQueryParams(params)}`);
    return response.data;
  } catch (exception) {
    console.error("Cities error", exception);
    return null;
  }
}

export async function getPropertyById(propertyId: string) {
  const response = await getPropertiesByIds([propertyId], 1, 1);
  return response?.results?.[0] || null;
}

export async function getBuilderById(builderId: string) {
  try {
    const ref = await getMasterRef();
    const params = {
      q: `[[at(document.id, "${builderId}")]]`,
      ref,
      integrationFieldsRef: INTEGRATION_FIELDS_REF,
    };
    const response = await api.get(`/documents/search?${buildQueryParams(params)}`);
    return response.data.results?.[0] || null;
  } catch (exception) {
    console.error("Single builder error", exception);
    return null;
  }
}



// 13. NEW FUNCTION: Search Blogs
export async function searchBlogs(
  page: number = 1,
  pageSize: number = 10,
  query: string = ""
): Promise<PrismicSearchResponse<PrismicBlog> | null> {
  try {
    const ref = await getMasterRef(); // Get the valid, dynamic ref
    const queryParams: string[] = ['[[at(document.type, "blogs")]]'];

    if (query) {
      // Search by matching text in the 'blogs.title' field
      queryParams.push(`[[fulltext(my.blogs.title, "${query}")]]`);
    }

    const paramsObj: Record<string, any> = {
      q: queryParams,
      orderings: '[my.blogs.date desc]', // Order by date descending
      pageSize,
      page,
      // Fetch only the fields needed for the list page
      fetch: 'blogs.title,blogs.link_title,blogs.date,blogs.image_link',
      ref: ref,
      integrationFieldsRef: INTEGRATION_FIELDS_REF
    };

    const queryString = buildQueryParams(paramsObj);
    const response = await api.get(`/documents/search?${queryString}`);
    return response.data as PrismicSearchResponse<PrismicBlog>;
  } catch (exception) {
    console.error("Error Occurred while searching blogs", exception);
    return null;
  }
}

// 14. NEW FUNCTION: Get Single Blog by UID (for the detail page)
export async function getBlogByUID(uid: string): Promise<PrismicBlog | null> {
  try {
    const ref = await getMasterRef();
    const paramsObj: Record<string, any> = {
      q: `[[at(my.blogs.uid, "${uid}")]]`, // Query by the UID (slug)
      ref: ref,
      integrationFieldsRef: INTEGRATION_FIELDS_REF
      // No 'fetch' param means we get the FULL document
    };

    const queryString = buildQueryParams(paramsObj);
    const response = await api.get(`/documents/search?${queryString}`);
    return (response.data.results[0] || null) as PrismicBlog | null;
  } catch (exception) {
    console.error(`Error Occurred while fetching blog ${uid}`, exception);
    return null;
  }
}

export interface TeamMember {
  id: string;
  name: string;
  department: string;
  image: string;
  designation?: string;
  about?: any[];
}

export interface PrismicOrdering {
  field: string;
  direction: string;
}

/**
 * Fetches entries from Prismic CMS
 */
export async function GetEntriesPrismic(contentType: string, ordering?: PrismicOrdering): Promise<TeamMember[] | null> {
  try {
    // Step 1: Fetch the API metadata to get ref and integrationFieldsRef
    const apiResponse = await fetch(API_BASE);
    const apiData = await apiResponse.json();
    
    // Get the master ref and integrationFieldsRef
    const masterRef = apiData.refs.find((ref: any) => ref.isMasterRef)?.ref;
    const integrationFieldsRef = apiData.integrationFieldsRef;

    if (!masterRef || !integrationFieldsRef) {
      throw new Error('Could not fetch required API references');
    }

    // Step 2: Construct the search URL with all required parameters
    const searchParams = new URLSearchParams({
      q: `[[at(document.type, "${contentType}")]]`,
      orderings: ordering ? `[${ordering.field} ${ordering.direction}]` : '',
      pageSize: '100',
      ref: masterRef,
      integrationFieldsRef: integrationFieldsRef,
      'x-c': 'js-7.20.0'
    });

    const searchUrl = `${API_BASE}/documents/search?${searchParams}`;
    
    // Step 3: Fetch the actual data
    const results = await fetch(searchUrl);
    const data = await results.json();

    if (data && data.results) {
      const outputs = data.results.map((p: any) => {
        const memberData = p.data;
        const uid = p.uid;
        return { 
          ...memberData, 
          id: uid,
          // Map the Prismic data to match your TeamMember interface
          name: memberData.name?.[0]?.text || 'Unknown',
          department: memberData.job_title || 'General',
          image: memberData.image_link?.url || '/assets/placeholder.jpg',
          designation: memberData.designation || ''
        };
      });
      return outputs;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching data from Prismic:', error);
    return null;
  }
}

// 13. NEW FUNCTION: Search Blogs
export async function searchBlogsByTitle(
  page: number = 1,
  pageSize: number = 10,
  query: string = "",
  linkTitle?: string,
  fetchAllFields: boolean = false
): Promise<{ 
  data: PrismicSearchResponse<PrismicBlog> | null;
  hrefResponse?: any;
} | null> {
  try {
    const ref = await getMasterRef(); // Get the valid, dynamic ref
    const queryParams: string[] = ['[[at(document.type, "blogs")]]'];

    if (query) {
      // Search by matching text in the 'blogs.title' field
      queryParams.push(`[[fulltext(my.blogs.title, "${query}")]]`);
    }

    if (linkTitle) {
      // Search by specific link_title
      queryParams.push(`[[at(my.blogs.link_title, "${linkTitle}")]]`);
    }

    const paramsObj: Record<string, any> = {
      q: queryParams,
      orderings: linkTitle ? '[my.blogs.uid desc]' : '[my.blogs.date desc]',
      pageSize,
      page,
      ref: ref,
      integrationFieldsRef: INTEGRATION_FIELDS_REF
    };

    // Conditionally include fetch and fetchLinks based on fetchAllFields flag
    if (fetchAllFields) {
      paramsObj.fetch = 'blogs.title,blogs.minutes,blogs.date,blogs.contents,blogs.image_link,blogs.preview_paragraph,blogs.author,blogs.tags,blogs.faq';
      paramsObj.fetchLinks = 'team_members.name,team_members.image_link,team_members.hide';
    } else {
      // Fetch only the fields needed for the list page
      paramsObj.fetch = 'blogs.title,blogs.link_title,blogs.date,blogs.image_link';
    }

    const queryString = buildQueryParams(paramsObj);
    const response = await api.get(`/documents/search?${queryString}`);
    const responseData = response.data;
    
    // Make second API call to the href URL
    
    let hrefResponseData: any = null;
    
    if (responseData.results && responseData.results.length > 0 && responseData.results[0].href) {
      try {
        console.log("Fetching href data...");
        let hreflink = responseData.results[0].href;
        console.log("responseData.results[0].href:", hreflink);

        const hrefResponse = await api.get(hreflink);
        console.log(hrefResponse.data.faq,"Href Response Data:", hrefResponse.data);
         hrefResponseData = hrefResponse.data;
      } catch (hrefError) {
        console.error("Error fetching href data:", hrefError);
      }
    }

    return {
      data: hrefResponseData,
      hrefResponse: hrefResponseData
    };
  } catch (exception) {
    console.error("Error Occurred while searching blogs", exception);
    return null;
  }
}

/**
 * Fetches team members data (no static fallback)
 */
export async function fetchTeamData(): Promise<TeamMember[]> {
  const prismicResults = await GetEntriesPrismic('team_members', { 
    field: 'team_members.uid', 
    direction: 'desc' 
  });
  
  return prismicResults || []; // Return empty array if null
}