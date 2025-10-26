export interface PrismicRef {
  id: string;
  ref: string;
  label: string;
  isMasterRef: boolean;
}

export interface PrismicLanguage {
  id: string;
  name: string;
}

export interface PrismicFormField {
  type: string;
  multiple: boolean;
  default?: string;
}

export interface PrismicForm {
  method: string;
  enctype: string;
  action: string;
  fields: Record<string, PrismicFormField>;
}

export interface PrismicExperiments {
  draft: any[];
  running: any[];
}

export interface PrismicApiResponse {
  refs: PrismicRef[];
  integrationFieldsRef: string;
  bookmarks: Record<string, any>;
  types: Record<string, string>;
  languages: PrismicLanguage[];
  tags: any[];
  forms: Record<string, PrismicForm>;
  oauth_initiate: string;
  oauth_token: string;
  version: string;
  experiments: PrismicExperiments;
  license: string;
}

// Base Prismic Types
export interface PrismicRef {
  id: string;
  ref: string;
  label: string;
  isMasterRef: boolean;
}

export interface PrismicLanguage {
  id: string;
  name: string;
}

export interface PrismicFormField {
  type: string;
  multiple: boolean;
  default?: string;
}

export interface PrismicForm {
  method: string;
  enctype: string;
  action: string;
  fields: Record<string, PrismicFormField>;
}

export interface PrismicExperiments {
  draft: any[];
  running: any[];
}

export interface PrismicApiResponse {
  refs: PrismicRef[];
  integrationFieldsRef: string;
  bookmarks: Record<string, any>;
  types: Record<string, string>;
  languages: PrismicLanguage[];
  tags: any[];
  forms: Record<string, PrismicForm>;
  oauth_initiate: string;
  oauth_token: string;
  version: string;
  experiments: PrismicExperiments;
  license: string;
}

// Image Types
export interface PrismicImageLink {
  url: string;
  embed_url: string;
  type: string;
  version: string;
  title: string | null;
  author_name: string | null;
  author_url: string | null;
  provider_name: string;
  provider_url: string | null;
  cache_age: string | null;
  thumbnail_url: string;
  thumbnail_width: number | null;
  thumbnail_height: number | null;
  html: string;
  height?: number;
  width?: number;
}

export interface PrismicImage {
  image_link: PrismicImageLink;
  caption: string | null;
  type: string;
  virtual_tour_link: string | null;
}

export interface PrismicVideo {
  youtube_video: string;
}

// Linked Document Types
export interface PrismicLinkedDocument {
  id: string;
  type: string;
  tags: string[];
  lang: string;
  slug: string;
  first_publication_date: string;
  last_publication_date: string;
  data: {
    property_type?: string;
    icon?: string;
    city_name?: string;
    builder_name?: string;
  };
  link_type: string;
  key: string;
  isBroken: boolean;
}

// Property Types
export interface PrismicFloorPlan {
  bhk: string;
  unit_type: string;
  area: string;
  floor_plan_image_link: PrismicImageLink | {};
  price: number;
}

export interface PrismicFAQ {
  question: any[];
  answer: any[];
}

export interface PrismicPropertyData {
  full_name: string;
  rera_number: string | null;
  property_type_group: Array<{
    property_type: PrismicLinkedDocument;
  }>;
  city: PrismicLinkedDocument;
  location: string;
  builder_name: PrismicLinkedDocument;
  unit_size: string;
  price_range_minimum: number;
  price_range_maximum: number;
  currency: string;
  status: string;
  videos: PrismicVideo[];
  images: PrismicImage[];
  floor_plans: PrismicFloorPlan[];
  featured: boolean;
  offer_available: boolean;
  offer_validity: string | null;
  alert_text: string;
  faq?: PrismicFAQ[];
}

export interface PrismicProperty {
  id: string;
  uid: string | null;
  url: string | null;
  type: string;
  href: string;
  tags: string[];
  first_publication_date: string;
  last_publication_date: string;
  slugs: string[];
  linked_documents: any[];
  lang: string;
  alternate_languages: any[];
  data: PrismicPropertyData;
}

// Site Variables Types
export interface PrismicTestimonialVideo {
  youtube_link: PrismicImageLink;
}

export interface PrismicPartner {
  partner_name: string;
  partner_website_link: string;
  partner_logo_link: PrismicImageLink;
}

export interface PrismicSiteVariablesData {
  g_tag_id: string;
  rera_id: string;
  email: string;
  phone_number: string;
  whatsapp_number: string;
  whatsappbot: string;
  properties_listed: string;
  number_of_locations: string;
  number_of_expert_agents: string;
  number_of_properties_sold: string;
  testimonial_video_links: PrismicTestimonialVideo[];
  facebook_link: string;
  instagram_link: string;
  linkedin_link: string;
  youtube_link: string;
  twitter_link: string;
  pinterest_link: string;
  our_partners: PrismicPartner[];
}

export interface PrismicSiteVariables {
  id: string;
  uid: string | null;
  url: string | null;
  type: string;
  href: string;
  tags: string[];
  first_publication_date: string;
  last_publication_date: string;
  slugs: string[];
  linked_documents: any[];
  lang: string;
  alternate_languages: any[];
  data: PrismicSiteVariablesData;
}

// Collection Types
export interface PrismicCollectionData {
  order: number;
  name: string;
  description: Array<{
    type: string;
    text: string;
    spans: any[];
  }>;
  image_link: PrismicImageLink;
  filter_status: Array<{
    item: string | null;
  }>;
  filter_property_type: Array<{
    item: string | null;
  }>;
  filter_min_budget: number | null;
  filter_max_budget: number | null;
  manual_mode: boolean | null;
  properties: Array<{
    item: {
      link_type: string;
      id?: string;
      type?: string;
      tags?: string[];
      lang?: string;
      slug?: string;
      first_publication_date?: string;
      last_publication_date?: string;
      data?: PrismicPropertyData;
    };
  }>;
}

export interface PrismicCollection {
  id: string;
  uid: string | null;
  url: string | null;
  type: string;
  href: string;
  tags: string[];
  first_publication_date: string;
  last_publication_date: string;
  slugs: string[];
  linked_documents: any[];
  lang: string;
  alternate_languages: any[];
  data: PrismicCollectionData;
}

// Amenities Types
export interface PrismicAmenityData {
  amenity: string;
  icon: string;
}

export interface PrismicAmenity {
  id: string;
  uid: string | null;
  url: string | null;
  type: string;
  href: string;
  tags: string[];
  first_publication_date: string;
  last_publication_date: string;
  slugs: string[];
  linked_documents: any[];
  lang: string;
  alternate_languages: any[];
  data: PrismicAmenityData;
}

// Property Types
export interface PrismicPropertyTypeData {
  property_type: string;
  icon: string;
}

export interface PrismicPropertyType {
  id: string;
  uid: string | null;
  url: string | null;
  type: string;
  href: string;
  tags: string[];
  first_publication_date: string;
  last_publication_date: string;
  slugs: string[];
  linked_documents: any[];
  lang: string;
  alternate_languages: any[];
  data: PrismicPropertyTypeData;
}

// Builders Types
export interface PrismicBuilderData {
  builder_name: string;
  logo_link: {
    link_type: string;
    key: string;
    url?: string;
    kind?: string;
    id?: string;
    name?: string;
    size?: string;
    width?: string;
    height?: string;
  };
  website_link: {
    link_type: string;
    key: string;
    url?: string;
  };
  banner_image: string | null;
  banner_logo_link: {
    link_type: string;
    key: string;
    url?: string;
  };
  description: Array<{
    type: string;
    text: string;
    spans: any[];
    direction?: string;
  }>;
  total_projects: number;
  ongoing_projects: number | null;
  established_year: number;
}

export interface PrismicBuilder {
  id: string;
  uid: string | null;
  url: string | null;
  type: string;
  href: string;
  tags: string[];
  first_publication_date: string;
  last_publication_date: string;
  slugs: string[];
  linked_documents: any[];
  lang: string;
  alternate_languages: any[];
  data: PrismicBuilderData;
}

// City Types
export interface PrismicCityData {
  city_name: string;
  banner_image: PrismicImageLink;
  description: Array<{
    type: string;
    text: string;
    spans: any[];
    direction?: string;
  }>;
  location: {
    latitude: number;
    longitude: number;
  };
  loan_interest_minimum: number | null;
  loan_interest_maximum: number | null;
}

export interface PrismicCity {
  id: string;
  uid: string | null;
  url: string | null;
  type: string;
  href: string;
  tags: string[];
  first_publication_date: string;
  last_publication_date: string;
  slugs: string[];
  linked_documents: any[];
  lang: string;
  alternate_languages: any[];
  data: PrismicCityData;
}

// Search Response Types
export interface PrismicSearchResponse<T> {
  page: number;
  results_per_page: number;
  results_size: number;
  total_results_size: number;
  total_pages: number;
  next_page: string | null;
  prev_page: string | null;
  results: T[];
  version?: string;
  license?: string;
}