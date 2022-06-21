import { FunctionComponent } from "react";
import { Taxon } from "../types/inaturalist";
import styles from "./Observation.module.css";

export const Observation: FunctionComponent<{ species: Taxon }> = ({ species }) => {
  return (
    <div className={styles.card}>
      <div>image</div>
      <div>{species.preferred_common_name}</div>
    </div>
  );
};
