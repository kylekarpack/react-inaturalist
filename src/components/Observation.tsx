import { FunctionComponent } from "react";
import { Taxon } from "../types/inaturalist";
import styles from "./Observation.module.css";

export const Observation: FunctionComponent<{ species: Taxon }> = ({ species }) => {
  return (
    <div className={styles.card}>
      <div className={styles.photo} style={{ backgroundImage: `url("${species.default_photo?.medium_url}")` }}></div>
      <div className={styles.text}>
        <div>
          <strong className={styles.title}>{species.preferred_common_name}</strong>
        </div>
        <div className={styles.subtitle}>({species.name})</div>
      </div>
    </div>
  );
};
