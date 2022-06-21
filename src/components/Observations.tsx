import { FunctionComponent, useEffect, useState } from "react";
import { INaturalistApiResponse, Taxon } from "../types/inaturalist";

export const Observations: FunctionComponent = () => {
  const [observedSpecies, setObservedSpecies] = useState<Taxon[]>([]);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://api.inaturalist.org/v1/observations/species_counts?verifiable=any&user_id=kkarpack&locale=en-US&preferred_place_id=1&per_page=50"
      );
      const data: INaturalistApiResponse = await response.json();

      setObservedSpecies(data.results.flatMap((el) => el.taxon));
    })();
  }, []);

  return <>Found: {JSON.stringify(observedSpecies, null, 4)}</>;
};
