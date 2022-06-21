export interface INaturalistApiResponse {
  total_results: number;
  page: number;
  per_page: number;
  results: Result[];
}

export interface Result {
  count: number;
  taxon: Taxon;
}

export interface Taxon {
  observations_count: number;
  taxon_schemes_count: number;
  is_active: boolean;
  ancestry: string;
  flag_counts: FlagCounts;
  wikipedia_url: string;
  current_synonymous_taxon_ids: null;
  iconic_taxon_id: number;
  rank_level: number;
  taxon_changes_count: number;
  atlas_id: number | null;
  complete_species_count: number | null;
  parent_id: number;
  complete_rank?: string;
  name: string;
  rank: Rank;
  extinct: boolean;
  id: number;
  default_photo: DefaultPhoto;
  ancestor_ids: number[];
  iconic_taxon_name: IconicTaxonName;
  preferred_common_name: string;
  english_common_name: string;
  establishment_means?: EstablishmentMeansClass;
  preferred_establishment_means?: PreferredEstablishmentMeansEnum;
  conservation_status?: ConservationStatus;
}

export interface ConservationStatus {
  user_id: null;
  status_name: string;
  iucn: number;
  authority: string;
  geoprivacy: null;
  source_id: null;
  place_id: null;
  status: string;
}

export interface DefaultPhoto {
  id: number;
  license_code: LicenseCode | null;
  attribution: string;
  url: string;
  original_dimensions: OriginalDimensions;
  flags: any[];
  square_url: string;
  medium_url: string;
}

export enum LicenseCode {
  CcByNc = "cc-by-nc",
  CcByNcNd = "cc-by-nc-nd",
  CcByNcSa = "cc-by-nc-sa",
  CcBySa = "cc-by-sa"
}

export interface OriginalDimensions {
  height: number;
  width: number;
}

export interface EstablishmentMeansClass {
  establishment_means: PreferredEstablishmentMeansEnum;
  id: number;
  place: Place;
}

export enum PreferredEstablishmentMeansEnum {
  Introduced = "introduced",
  Native = "native"
}

export interface Place {
  id: number;
  name: Name;
  display_name: Name;
  ancestry: string;
}

export enum Name {
  UnitedStates = "United States"
}

export interface FlagCounts {
  resolved: number;
  unresolved: number;
}

export enum IconicTaxonName {
  Aves = "Aves",
  Mammalia = "Mammalia",
  Plantae = "Plantae"
}

export enum Rank {
  Species = "species",
  Subfamily = "subfamily"
}
