import { FunctionComponent } from "react";
import { Result } from "../types/inaturalist";
import styles from "./Observation.module.css";

export const Observation: FunctionComponent<{ observation: Result }> = ({ observation }) => {
  const { taxon: species } = observation;
  return (
    <a href={observation.uri} target="_blank" className={styles.card}>
      <div className={styles.photo} style={{ backgroundImage: `url("${species.default_photo?.medium_url}")` }}></div>
      <div className={styles.text}>
        <div>
          <strong className={styles.title}>{species.preferred_common_name}</strong>
        </div>
        <div className={styles.subtitle}>({species.name})</div>
      </div>
    </a>
  );
};
