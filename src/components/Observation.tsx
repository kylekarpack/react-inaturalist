import { FunctionComponent } from "react";
import { Result } from "../types/inaturalist";
import * as styles from "./Observation.module.css";
import { TimeAgo } from "./TimeAgo";

export const Observation: FunctionComponent<{ observation: Result }> = ({ observation }) => {
  const { taxon: species } = observation;
  return (
    <a href={observation.uri} target="_blank" className={styles.card}>
      <img
        className={styles.photo}
        src={species.default_photo?.medium_url}
        alt={species.preferred_common_name}
        loading="lazy"
      />
      <div className={styles.overlay}>
        <div className={styles.text}>
          <div style={{ maxWidth: "100%" }}>
            <div>
              <strong className={styles.title}>{species.preferred_common_name}</strong>
            </div>
            <div className={styles.subtitle}>({species.name})</div>
            <div className={styles.time}>
              <TimeAgo date={observation.observed_on} />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
