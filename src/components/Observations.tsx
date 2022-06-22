import { FunctionComponent, useEffect, useState } from "react";
import { INaturalistApiResponse, Taxon } from "../types/inaturalist";
import { Observation } from "./Observation";
import styles from "./Observations.module.css";

export const Observations: FunctionComponent = () => {
  const [observedSpecies, setObservedSpecies] = useState<Taxon[]>([]);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://api.inaturalist.org/v1/observations/species_counts?verifiable=any&user_id=kkarpack&order_by=created_at&locale=en-US&preferred_place_id=1&per_page=50"
      );
      const data: INaturalistApiResponse = await response.json();

      setObservedSpecies(data.results.flatMap((el) => el.taxon));
    })();
  }, []);

  return (
    <>
      Recently Observed Species:{" "}
      <div className={styles.observations}>
        {observedSpecies.map((el) => {
          return <Observation key={el.id} species={el} />;
        })}
      </div>
    </>
  );
};
