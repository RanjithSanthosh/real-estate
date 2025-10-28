import axios from "axios";
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
} from "../app/data/prismic";

const API_BASE = "https://homekonnectcms.prismic.io/api/v2";

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "x-c": "js-7.20.0",
  },
});

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

// 1. Authorization API
export async function authorization(): Promise<PrismicApiResponse | null> {
  try {
    const response = await api.get<PrismicApiResponse>("");
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
  ref: string,
  integrationFieldsRef: string
): Promise<PrismicSearchResponse<PrismicProperty> | null> {
  try {
    const {
      featured,
      propertyIds = [],
      page = 1,
      pageSize = 100,
      fetch = [
        "properties.images",
        "properties.videos",
        "properties.full_name",
        "properties.rera_number",
        "properties.currency",
        "properties.featured",
        "properties.price_range_minimum",
        "properties.price_range_maximum",
        "properties.city",
        "properties.status",
        "properties.unit_size",
        "properties.offer_available",
        "properties.offer_validity",
        "properties.location",
        "properties.builder_name",
        "properties.property_type_group",
        "properties.floor_plans",
        "properties.alert_text",
      ],
      fetchLinks = [
        "builders.builder_name",
        "city.city_name",
        "property_types.property_type",
        "property_types.icon",
      ],
    } = params;

    const queryParams: string[] = ['[[at(document.type, "properties")]]'];

    if (featured) {
      queryParams.push("[[at(my.properties.featured, true)]]");
    }

    if (propertyIds.length > 0) {
      queryParams.push(
        `[[in(document.id, [${propertyIds.map((id) => `"${id}"`).join(",")}])]]`
      );
    }

    const paramsObj: Record<string, any> = {
      q: queryParams,
      fetch: fetch.join(","),
      fetchLinks: fetchLinks.join(","),
      pageSize,
      page,
      ref,
      integrationFieldsRef,
    };

    const queryString = buildQueryParams(paramsObj);
    const response = await api.get(`/documents/search?${queryString}`);

    return response.data;
  } catch (exception) {
    console.error("Property search failed", exception);
    return null;
  }
}

// Wrapper helpers
export function getFeaturedProperties(
  page: number,
  pageSize: number,
  ref: string,
  integrationFieldsRef: string
) {
  return searchProperties(
    { featured: true, page, pageSize },
    ref,
    integrationFieldsRef
  );
}

export function getPropertiesByIds(
  propertyIds: string[],
  ref: string,
  integrationFieldsRef: string
) {
  return searchProperties({ propertyIds }, ref, integrationFieldsRef);
}

export async function getSiteVariables(
  ref: string,
  integrationFieldsRef: string
) {
  try {
    const params = {
      q: '[[at(document.type, "sitevariables")]]',
      ref,
      integrationFieldsRef,
    };

    const response = await api.get(
      `/documents/search?${buildQueryParams(params)}`
    );
    return response.data;
  } catch (exception) {
    console.error("Site variables error", exception);
    return null;
  }
}

// Repeated Pattern Fixes Applied Below:
export async function getCollections(
  ref: string,
  integrationFieldsRef: string,
  pageSize: number = 100
) {
  try {
    const params = {
      q: '[[at(document.type, "collection")]]',
      pageSize,
      fetchLinks: [
        "builders.builder_name",
        "city.city_name",
        "property_types.property_type",
        "property_types.icon",
      ].join(","),
      orderings: "[my.collection.order]",
      ref,
      integrationFieldsRef,
    };

    const response = await api.get(
      `/documents/search?${buildQueryParams(params)}`
    );
    return response.data;
  } catch (exception) {
    console.error("Collections error", exception);
    return null;
  }
}

export async function getAmenities(
  ref: string,
  integrationFieldsRef: string,
  pageSize: number = 100
) {
  try {
    const params = {
      q: '[[at(document.type, "amenities")]]',
      pageSize,
      fetch: "amenities.amenity,amenities.icon",
      orderings: "[my.amenities.amenity]",
      ref,
      integrationFieldsRef,
    };

    const response = await api.get(
      `/documents/search?${buildQueryParams(params)}`
    );
    return response.data;
  } catch (exception) {
    console.error("Amenities error", exception);
    return null;
  }
}

export async function getPropertyTypes(
  ref: string,
  integrationFieldsRef: string,
  pageSize: number = 100
) {
  try {
    const params = {
      q: '[[at(document.type, "property_types")]]',
      pageSize,
      fetch: "property_types.property_type,property_types.icon",
      ref,
      integrationFieldsRef,
    };

    const response = await api.get(
      `/documents/search?${buildQueryParams(params)}`
    );
    return response.data;
  } catch (exception) {
    console.error("Property types error", exception);
    return null;
  }
}

export async function getBuilders(
  ref: string,
  integrationFieldsRef: string,
  page: number = 1,
  pageSize: number = 100
) {
  try {
    const params = {
      q: '[[at(document.type, "builders")]]',
      pageSize,
      page,
      ref,
      integrationFieldsRef,
    };

    const response = await api.get(
      `/documents/search?${buildQueryParams(params)}`
    );
    return response.data;
  } catch (exception) {
    console.error("Builders error", exception);
    return null;
  }
}

export async function getCities(
  ref: string,
  integrationFieldsRef: string,
  pageSize: number = 100
) {
  try {
    const params = {
      q: '[[at(document.type, "city")]]',
      pageSize,
      ref,
      integrationFieldsRef,
    };

    const response = await api.get(
      `/documents/search?${buildQueryParams(params)}`
    );
    return response.data;
  } catch (exception) {
    console.error("Cities error", exception);
    return null;
  }
}

export async function getPropertyById(
  propertyId: string,
  ref: string,
  integrationFieldsRef: string
) {
  const response = await getPropertiesByIds(
    [propertyId],
    ref,
    integrationFieldsRef
  );
  return response?.results?.[0] || null;
}

export async function getBuilderById(
  builderId: string,
  ref: string,
  integrationFieldsRef: string
) {
  try {
    const params = {
      q: `[[at(document.id, "${builderId}")]]`,
      ref,
      integrationFieldsRef,
    };

    const response = await api.get(
      `/documents/search?${buildQueryParams(params)}`
    );
    return response.data.results?.[0] || null;
  } catch (exception) {
    console.error("Single builder error", exception);
    return null;
  }
}

export async function getCMSMetadata() {
  try {
    const response = await api.get("");
    return response.data;
  } catch (exception) {
    console.error("CMS metadata error", exception);
    return null;
  }
}
