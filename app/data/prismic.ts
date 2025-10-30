// data/prismic.ts

// Basic Prismic Types (unchanged)
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

// Rich Text Type
export interface PrismicRichTextSpan {
  start: number;
  end: number;
  type: string; // Add other span properties if needed (e.g., data for links)
}

export interface PrismicRichTextBlock {
  type: string;
  text: string;
  spans: PrismicRichTextSpan[];
  direction?: string; // Add properties for lists, images, embeds etc. if used
}

// Image Types (unchanged)
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
export interface PrismicLinkField {
  link_type: "Document" | "Web" | "Media" | "Any";
  id?: string;
  type?: string;
  tags?: string[];
  lang?: string;
  slug?: string;
  uid?: string;
  isBroken?: boolean;
  url?: string; // For Web links
  kind?: string; // For Media links
  name?: string;
  size?: string;
  height?: string;
  width?: string; // For Content Relationships with fetched data:
  data?: Record<string, any>;
}

// Property Types
export interface PrismicFloorPlan {
  bhk: string;
  unit_type: string;
  area: string;
  floor_plan_image_link: PrismicImageLink | {}; // Can be empty object
  price: number;
}

export interface PrismicFAQ {
  question: PrismicRichTextBlock[]; // Rich text
  answer: PrismicRichTextBlock[]; // Rich text
}

// ✅ ADDED: Type for the linked amenity document
export interface PrismicLinkedAmenityData {
  amenity: string;
  icon: string;
}

export interface PrismicLinkedAmenity extends PrismicLinkField {
  data?: PrismicLinkedAmenityData;
}

// ✅ ADDED: Type for a single specification item
export interface PrismicSpecificationItem {
  category: string;
  specification_item: PrismicRichTextBlock[];
}

// ✅ ADDED: Type for a single salient feature item
export interface PrismicSalientFeatureItem {
  feature: PrismicRichTextBlock[];
}

// ✅ UPDATED: PrismicPropertyData with all fields used in transformers
export interface PrismicPropertyData {
  full_name: string;
  rera_number: string | null;
  property_type_group: Array<{
    property_type: PrismicLinkField & {
      data?: { property_type: string; icon: string };
    }; // Content Relationship
  }>;
  city: PrismicLinkField & { data?: { city_name: string } }; // Content Relationship
  location: string;
  builder_name: PrismicLinkField & { data?: { builder_name: string } }; // Content Relationship
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
  alert_text: string | null;
  description?: PrismicRichTextBlock[]; // Rich text field
  faq?: PrismicFAQ[];
  amenities?: Array<{ amenity: PrismicLinkedAmenity }>; // Group of Content Relationships
  specifications?: PrismicSpecificationItem[]; // Group field
  salient_features?: PrismicSalientFeatureItem[]; // Group field
  map_image?: PrismicImageLink; // Image link // Overview fields (assuming they are simple text/number fields in Prismic)
  overview_price_per_sqft?: string;
  overview_total_units?: number;
  overview_zoning?: string;
  overview_land_extent?: string;
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

// Site Variables Types (unchanged)
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
  id: string; // ... other fields
  data: PrismicSiteVariablesData;
}

// Collection Types (unchanged)
export interface PrismicCollectionData {
  order: number;
  name: string;
  description: PrismicRichTextBlock[];
  image_link: PrismicImageLink;
  filter_status: Array<{ item: string | null }>;
  filter_property_type: Array<{ item: string | null }>;
  filter_min_budget: number | null;
  filter_max_budget: number | null;
  manual_mode: boolean | null;
  properties: Array<{ item: PrismicLinkField }>; // Array of Content Relationships
}

export interface PrismicCollection {
  id: string; // ... other fields
  data: PrismicCollectionData;
}

// Amenities Types (unchanged)
export interface PrismicAmenityData {
  amenity: string;
  icon: string;
}

export interface PrismicAmenity {
  id: string; // ... other fields
  data: PrismicAmenityData;
}

// Property Types (document type, unchanged)
export interface PrismicPropertyTypeData {
  property_type: string;
  icon: string;
}

export interface PrismicPropertyType {
  id: string; // ... other fields
  data: PrismicPropertyTypeData;
}

// Builders Types (unchanged)
export interface PrismicBuilderData {
  builder_name: string;
  logo_link: PrismicLinkField;
  website_link: PrismicLinkField;
  banner_image: string | null; // Assuming URL string, adjust if Image field
  banner_logo_link: PrismicLinkField;
  description: PrismicRichTextBlock[];
  total_projects: number;
  ongoing_projects: number | null;
  established_year: number;
}

export interface PrismicBuilder {
  id: string; // ... other fields
  data: PrismicBuilderData;
}

// City Types (unchanged)
export interface PrismicCityData {
  city_name: string;
  banner_image: PrismicImageLink;
  description: PrismicRichTextBlock[];
  location: {
    latitude: number;
    longitude: number;
  };
  loan_interest_minimum: number | null;
  loan_interest_maximum: number | null;
}

export interface PrismicCity {
  id: string; // ... other fields
  data: PrismicCityData;
}

// Search Response Types (unchanged)
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

// Blog Types (unchanged)
export interface PrismicBlogData {
  title: PrismicRichTextBlock[];
  link_title: string; // Assuming Key Text
  date: string; // Assuming Date field
  image_link: PrismicImageLink; // Assuming Image field
  content: PrismicRichTextBlock[]; // Assuming Rich Text field
  faq: PrismicFAQ[]; // Group field // Add any other fields you fetch
}

export interface PrismicBlog {
  id: string;
  uid: string; // Blogs usually have a UID for the slug
  type: "blogs";
  tags: string[]; // ... other standard Prismic fields
  data: PrismicBlogData;
}
