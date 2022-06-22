export interface Props {
  /**
   * Filter by whether `positional_accuracy` is set or not
   */
  acc?: boolean;
  acc_above?: number;
  acc_below?: number;
  acc_below_or_unknown?: number;
  apply_project_rules_for?: string;
  /**
   * Filter by captive / cultivated status
   */
  captive?: boolean;
  created_d1?: string;
  created_d2?: string;
  created_on?: string;
  cs?: string;
  csa?: string;
  csi?: ("LC" | "NT" | "VU" | "EN" | "CR" | "EW" | "EX")[];
  d1?: string;
  d2?: string;
  day?: number[];
  /**
   * Filter by whether the observation is in a place with a check list entry indicating the establishment means is `endemic`
   */
  endemic?: boolean;
  /**
   * Attribute fields to return in the response
   * @example species_guess,observed_on
   */
  fields?: any;
  geo?: boolean;
  geoprivacy?: ("obscured" | "obscured_private" | "open" | "private")[];
  hrank?: (
    | "kingdom"
    | "phylum"
    | "subphylum"
    | "superclass"
    | "class"
    | "subclass"
    | "superorder"
    | "order"
    | "suborder"
    | "infraorder"
    | "superfamily"
    | "epifamily"
    | "family"
    | "subfamily"
    | "supertribe"
    | "tribe"
    | "subtribe"
    | "genus"
    | "genushybrid"
    | "species"
    | "hybrid"
    | "subspecies"
    | "variety"
    | "form"
  )[];
  iconic_taxa?: (
    | "Actinopterygii"
    | "Animalia"
    | "Amphibia"
    | "Arachnida"
    | "Aves"
    | "Chromista"
    | "Fungi"
    | "Insecta"
    | "Mammalia"
    | "Mollusca"
    | "Reptilia"
    | "Plantae"
    | "Protozoa"
    | "unknown"
  )[];
  id?: string[];
  id_above?: number;
  id_below?: number;
  id_please?: boolean;
  identifications?: "most_agree" | "most_disagree" | "some_agree";
  identified?: boolean;
  introduced?: boolean;
  lat?: number;
  license?: ("cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0")[];
  /**
   * Filter by observations where the license attribute is not null, i.e. it is licensed
   */
  licensed?: boolean;
  list_id?: number;
  lng?: number;
  locale?: string;
  lrank?: (
    | "kingdom"
    | "phylum"
    | "subphylum"
    | "superclass"
    | "class"
    | "subclass"
    | "superorder"
    | "order"
    | "suborder"
    | "infraorder"
    | "superfamily"
    | "epifamily"
    | "family"
    | "subfamily"
    | "supertribe"
    | "tribe"
    | "subtribe"
    | "genus"
    | "genushybrid"
    | "species"
    | "hybrid"
    | "subspecies"
    | "variety"
    | "form"
  )[];
  mappable?: boolean;
  month?: number[];
  native?: boolean;
  nelat?: number;
  nelng?: number;
  not_id?: string[];
  not_in_project?: string[];
  not_matching_project_rules_for?: string;
  observed_on?: string;
  only_id?: boolean;
  order?: "desc" | "asc";
  order_by?: "observed_on" | "species_guess" | "votes" | "id" | "created_at";
  out_of_range?: boolean;
  page?: number;
  pcid?: boolean;
  per_page?: number;
  photo_license?: ("cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0")[];
  /**
   * Filter by observations where the license attribute of at least one photo is not null
   */
  photo_licensed?: boolean;
  photos?: boolean;
  place_id?: string[];
  popular?: boolean;
  preferred_place_id?: number;
  project_id?: number[];
  q?: string;
  quality_grade?: ("casual" | "needs_id" | "research")[];
  radius?: number;
  rank?: (
    | "kingdom"
    | "phylum"
    | "subphylum"
    | "superclass"
    | "class"
    | "subclass"
    | "superorder"
    | "order"
    | "suborder"
    | "infraorder"
    | "superfamily"
    | "epifamily"
    | "family"
    | "subfamily"
    | "supertribe"
    | "tribe"
    | "subtribe"
    | "genus"
    | "genushybrid"
    | "species"
    | "hybrid"
    | "subspecies"
    | "variety"
    | "form"
  )[];
  reviewed?: boolean;
  search_on?: "names" | "tags" | "description" | "place";
  site_id?: number[];
  sound_license?: ("cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0")[];
  sounds?: boolean;
  swlat?: number;
  swlng?: number;
  taxon_geoprivacy?: ("obscured" | "obscured_private" | "open" | "private")[];
  taxon_id?: number[];
  taxon_is_active?: boolean;
  taxon_name?: string;
  term_id?: number[];
  term_value_id?: number[];
  /**
   * Filter by whether the observed taxon has a conservation status of "threatened" or worse
   */
  threatened?: boolean;
  ttl?: number;
  unobserved_by_user_id?: string;
  updated_since?: string;
  user_id?: string[];
  user_login?: string[];
  /**
   * Filter by whether observations are 'verifiable' (have quality grades `research` or `needs_id`)
   */
  verifiable?: boolean;
  viewer_id?: number;
  without_taxon_id?: number[];
  without_term_value_id?: number[];
  year?: number[];
}
