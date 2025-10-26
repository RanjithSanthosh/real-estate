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
  PrismicCity
} from '../app/data/prismic';

const API_BASE = "https://homekonnectcms.prismic.io/api/v2";
const REF = "aPIf3hIAACsAvUYR";
const INTEGRATION_FIELDS_REF = "homekonnectcms~6e16b01a-1b51-4c1e-a58f-ee634fcec60e";

// Base API configuration
const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'x-c': 'js-7.20.0'
  }
});

// Utility function to build query parameters
const buildQueryParams = (params: Record<string, any>): string => {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      if (Array.isArray(value)) {
        value.forEach(v => searchParams.append(key, v));
      } else {
        searchParams.append(key, value.toString());
      }
    }
  });
  
  return searchParams.toString();
};

// 1. Authorization API
export async function authorization(): Promise<PrismicApiResponse | null> {
  try {
    const response = await api.get<PrismicApiResponse>('');
    console.log("Authorization response", response.data);
    return response.data;
  } catch (exception) {
    console.error("Error Occurred while fetching data for Authorization", exception);
    return null;
  }
}

// 2. Search Properties with Filters
export interface SearchPropertiesParams {
  featured?: boolean;
  propertyIds?: string[];
  page?: number;
  pageSize?: number;
  fetch?: string[];
  fetchLinks?: string[];
}

export async function searchProperties(params: SearchPropertiesParams = {}): Promise<PrismicSearchResponse<PrismicProperty> | null> {
  try {
    const {
      featured,
      propertyIds = [],
      page = 1,
      pageSize = 100,
      fetch = [
        'properties.images', 'properties.videos', 'properties.full_name', 'properties.rera_number',
        'properties.currency', 'properties.featured', 'properties.price_range_minimum',
        'properties.price_range_maximum', 'properties.city', 'properties.status', 'properties.unit_size',
        'properties.offer_available', 'properties.offer_validity', 'properties.location', 'properties.images',
        'properties.builder_name', 'properties.property_type_group', 'properties.floor_plans', 'properties.alert_text'
      ],
      fetchLinks = [
        'builders.builder_name', 'city.city_name', 'property_types.property_type', 'property_types.icon'
      ]
    } = params;

    const queryParams: string[] = ['[[at(document.type, "properties")]]'];

    if (featured) {
      queryParams.push('[[at(my.properties.featured, true)]]');
    }

    if (propertyIds.length > 0) {
      queryParams.push(`[[in(document.id, [${propertyIds.map(id => `"${id}"`).join(',')}])]]`);
    }

    const paramsObj: Record<string, any> = {
      q: queryParams,
      fetch: fetch.join(','),
      fetchLinks: fetchLinks.join(','),
      pageSize,
      page,
      ref: REF,
      integrationFieldsRef: INTEGRATION_FIELDS_REF
    };

    const queryString = buildQueryParams(paramsObj);
    const response = await api.get<PrismicSearchResponse<PrismicProperty>>(`/documents/search?${queryString}`);
    
    console.log("Properties search response", response.data);
    return response.data;
  } catch (exception) {
    console.error("Error Occurred while searching properties", exception);
    return null;
  }
}

// 3. Get Featured Properties
export async function getFeaturedProperties(page: number = 1, pageSize: number = 100): Promise<PrismicSearchResponse<PrismicProperty> | null> {
  return searchProperties({ featured: true, page, pageSize });
}

// 4. Get Properties by IDs
export async function getPropertiesByIds(propertyIds: string[], page: number = 1, pageSize: number = 1000): Promise<PrismicSearchResponse<PrismicProperty> | null> {
  return searchProperties({ propertyIds, page, pageSize });
}

// 5. Get Site Variables
export async function getSiteVariables(): Promise<PrismicSearchResponse<PrismicSiteVariables> | null> {
  try {
    const params = {
      q: '[[at(document.type, "sitevariables")]]',
      ref: REF,
      integrationFieldsRef: INTEGRATION_FIELDS_REF
    };

    const queryString = buildQueryParams(params);
    const response = await api.get<PrismicSearchResponse<PrismicSiteVariables>>(`/documents/search?${queryString}`);
    
    console.log("Site variables response", response.data);
    return response.data;
  } catch (exception) {
    console.error("Error Occurred while fetching site variables", exception);
    return null;
  }
}

// 6. Get Collections
export async function getCollections(pageSize: number = 100): Promise<PrismicSearchResponse<PrismicCollection> | null> {
  try {
    const fetchLinks = [
      'builders.builder_name', 'city.city_name', 'property_types.property_type', 'property_types.icon',
      'properties.full_name', 'properties.rera_number', 'properties.currency', 'properties.featured',
      'properties.price_range_minimum', 'properties.price_range_maximum', 'properties.city', 'properties.status',
      'properties.unit_size', 'properties.offer_available', 'properties.offer_validity', 'properties.location',
      'properties.images', 'properties.builder_name', 'properties.property_type_group', 'properties.floor_plans',
      'properties.faq'
    ];

    const params = {
      q: '[[at(document.type, "collection")]]',
      pageSize,
      fetchLinks: fetchLinks.join(','),
      orderings: '[my.collection.order]',
      ref: REF,
      integrationFieldsRef: INTEGRATION_FIELDS_REF
    };

    const queryString = buildQueryParams(params);
    const response = await api.get<PrismicSearchResponse<PrismicCollection>>(`/documents/search?${queryString}`);
    
    console.log("Collections response", response.data);
    return response.data;
  } catch (exception) {
    console.error("Error Occurred while fetching collections", exception);
    return null;
  }
}

// 7. Get Amenities
export async function getAmenities(pageSize: number = 100): Promise<PrismicSearchResponse<PrismicAmenity> | null> {
  try {
    const params = {
      q: '[[at(document.type, "amenities")]]',
      pageSize,
      fetch: 'amenities.amenity,amenities.icon',
      orderings: '[my.amenities.amenity]',
      ref: REF,
      integrationFieldsRef: INTEGRATION_FIELDS_REF
    };

    const queryString = buildQueryParams(params);
    const response = await api.get<PrismicSearchResponse<PrismicAmenity>>(`/documents/search?${queryString}`);
    
    console.log("Amenities response", response.data);
    return response.data;
  } catch (exception) {
    console.error("Error Occurred while fetching amenities", exception);
    return null;
  }
}

// 8. Get Property Types
export async function getPropertyTypes(pageSize: number = 100): Promise<PrismicSearchResponse<PrismicPropertyType> | null> {
  try {
    const params = {
      q: '[[at(document.type, "property_types")]]',
      pageSize,
      fetch: 'property_types.property_type,property_types.icon',
      ref: REF,
      integrationFieldsRef: INTEGRATION_FIELDS_REF
    };

    const queryString = buildQueryParams(params);
    const response = await api.get<PrismicSearchResponse<PrismicPropertyType>>(`/documents/search?${queryString}`);
    
    console.log("Property types response", response.data);
    return response.data;
  } catch (exception) {
    console.error("Error Occurred while fetching property types", exception);
    return null;
  }
}

// 9. Get Builders
export async function getBuilders(page: number = 1, pageSize: number = 100): Promise<PrismicSearchResponse<PrismicBuilder> | null> {
  try {
    const params = {
      q: '[[at(document.type, "builders")]]',
      pageSize,
      page,
      ref: REF,
      integrationFieldsRef: INTEGRATION_FIELDS_REF
    };

    const queryString = buildQueryParams(params);
    const response = await api.get<PrismicSearchResponse<PrismicBuilder>>(`/documents/search?${queryString}`);
    
    console.log("Builders response", response.data);
    return response.data;
  } catch (exception) {
    console.error("Error Occurred while fetching builders", exception);
    return null;
  }
}

// 10. Get Cities
export async function getCities(pageSize: number = 100): Promise<PrismicSearchResponse<PrismicCity> | null> {
  try {
    const params = {
      q: '[[at(document.type, "city")]]',
      pageSize,
      ref: REF,
      integrationFieldsRef: INTEGRATION_FIELDS_REF
    };

    const queryString = buildQueryParams(params);
    const response = await api.get<PrismicSearchResponse<PrismicCity>>(`/documents/search?${queryString}`);
    
    console.log("Cities response", response.data);
    return response.data;
  } catch (exception) {
    console.error("Error Occurred while fetching cities", exception);
    return null;
  }
}

// 11. Get Single Property by ID
export async function getPropertyById(propertyId: string): Promise<PrismicProperty | null> {
  try {
    const response = await getPropertiesByIds([propertyId], 1, 1);
    return response?.results[0] || null;
  } catch (exception) {
    console.error(`Error Occurred while fetching property with ID ${propertyId}`, exception);
    return null;
  }
}

// 12. Get Single Builder by ID
export async function getBuilderById(builderId: string): Promise<PrismicBuilder | null> {
  try {
    // This would require a specific query by ID
    const params = {
      q: `[[at(document.id, "${builderId}")]]`,
      ref: REF,
      integrationFieldsRef: INTEGRATION_FIELDS_REF
    };

    const queryString = buildQueryParams(params);
    const response = await api.get<PrismicSearchResponse<PrismicBuilder>>(`/documents/search?${queryString}`);
    
    return response.data.results[0] || null;
  } catch (exception) {
    console.error(`Error Occurred while fetching builder with ID ${builderId}`, exception);
    return null;
  }
}