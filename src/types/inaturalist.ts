/* eslint-disable @typescript-eslint/no-explicit-any */

export interface INaturalistApiResponse {
  total_results: number;
  page: number;
  per_page: number;
  results: Result[];
}
export interface Result {
  quality_grade: string;
  time_observed_at: Date;
  taxon_geoprivacy: null;
  annotations: any[];
  uuid: string;
  observed_on_details: Details;
  id: number;
  cached_votes_total: number;
  identifications_most_agree: boolean;
  created_at_details: Details;
  species_guess: null;
  identifications_most_disagree: boolean;
  tags: any[];
  positional_accuracy: number;
  comments_count: number;
  site_id: number;
  created_time_zone: string;
  license_code: null;
  observed_time_zone: string;
  quality_metrics: QualityMetric[];
  public_positional_accuracy: number;
  reviewed_by: number[];
  oauth_application_id: number;
  flags: any[];
  created_at: Date;
  description: null;
  time_zone_offset: string;
  project_ids_with_curator_id: any[];
  observed_on: Date;
  observed_on_string: string;
  updated_at: Date;
  sounds: any[];
  place_ids: number[];
  captive: boolean;
  taxon: Taxon;
  ident_taxon_ids: number[];
  outlinks: any[];
  faves_count: number;
  ofvs: any[];
  num_identification_agreements: number;
  preferences: ResultPreferences;
  comments: any[];
  map_scale: null;
  uri: string;
  project_ids: any[];
  community_taxon_id: null;
  geojson: Geojson;
  owners_identification_from_vision: boolean;
  identifications_count: number;
  obscured: boolean;
  num_identification_disagreements: number;
  geoprivacy: string;
  location: string;
  votes: any[];
  spam: boolean;
  user: User;
  mappable: boolean;
  identifications_some_agree: boolean;
  project_ids_without_curator_id: any[];
  place_guess: string;
  identifications: Identification[];
  project_observations: any[];
  photos: Photo[];
  observation_photos: ObservationPhoto[];
  faves: any[];
  non_owner_ids: any[];
}

export interface Details {
  date: Date;
  week: number;
  month: number;
  hour: number;
  year: number;
  day: number;
}

export interface Geojson {
  coordinates: number[];
  type: string;
}

export interface Identification {
  hidden: boolean;
  disagreement: null;
  flags: any[];
  created_at: Date;
  taxon_id: number;
  body: null;
  own_observation: boolean;
  uuid: string;
  taxon_change: null;
  moderator_actions: any[];
  vision: boolean;
  current: boolean;
  id: number;
  created_at_details: Details;
  category: string;
  spam: boolean;
  user: User;
  previous_observation_taxon_id: number;
  taxon: Taxon;
  previous_observation_taxon: Taxon;
}

export interface Taxon {
  photos_locked: boolean;
  taxon_schemes_count: number;
  ancestry: string;
  min_species_ancestry: string;
  wikipedia_url: string;
  current_synonymous_taxon_ids: null;
  iconic_taxon_id: number;
  created_at: Date;
  taxon_changes_count: number;
  complete_species_count: null;
  rank: string;
  extinct: boolean;
  id: number;
  universal_search_rank: number;
  ancestor_ids: number[];
  observations_count: number;
  is_active: boolean;
  flag_counts: FlagCounts;
  min_species_taxon_id: number;
  rank_level: number;
  atlas_id: null;
  parent_id: number;
  name: string;
  default_photo: Photo;
  iconic_taxon_name: IconicTaxonName;
  preferred_common_name: string;
  ancestors?: Ancestor[];
  endemic?: boolean;
  threatened?: boolean;
  introduced?: boolean;
  native?: boolean;
}

export interface Ancestor {
  observations_count: number;
  taxon_schemes_count: number;
  is_active: boolean;
  ancestry: string;
  flag_counts: FlagCounts;
  wikipedia_url: null | string;
  current_synonymous_taxon_ids: null;
  iconic_taxon_id: number;
  rank_level: number;
  taxon_changes_count: number;
  atlas_id: null;
  complete_species_count: null;
  parent_id: number;
  complete_rank?: string;
  name: string;
  rank: string;
  extinct: boolean;
  id: number;
  default_photo: Photo;
  ancestor_ids: number[];
  iconic_taxon_name: IconicTaxonName;
  preferred_common_name?: string;
}

export interface Photo {
  id: number;
  license_code: null | string;
  attribution: string;
  url: string;
  original_dimensions: OriginalDimensions;
  flags: any[];
  square_url?: string;
  medium_url?: string;
}

export interface OriginalDimensions {
  height: number;
  width: number;
}

export interface FlagCounts {
  resolved: number;
  unresolved: number;
}

export enum IconicTaxonName {
  Plantae = "Plantae"
}

export interface User {
  id: number;
  login: string;
  spam: boolean;
  suspended: boolean;
  created_at: Date;
  login_autocomplete: string;
  login_exact: string;
  name: string;
  name_autocomplete: string;
  orcid: null;
  icon: null;
  observations_count: number;
  identifications_count: number;
  journal_posts_count: number;
  activity_count: number;
  species_count: number;
  universal_search_rank: number;
  roles: any[];
  site_id: null;
  icon_url: null;
  preferences?: {};
}

export interface ObservationPhoto {
  id: number;
  position: number;
  uuid: string;
  photo: Photo;
}

export interface ResultPreferences {
  prefers_community_taxon: null;
}

export interface QualityMetric {
  user_id: number;
  metric: string;
  id: number;
  agree: boolean;
  user: User;
}
