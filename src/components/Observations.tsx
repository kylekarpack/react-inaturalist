import { FunctionComponent } from "react";
import useINaturalistApi from "../hooks/useINaturalistApi";
import { Props } from "../types/props";
import { Observation } from "./Observation";
import styles from "./Observations.module.css";

export const Observations: FunctionComponent<Props> = (props) => {
  const { loading, observations, error } = useINaturalistApi(props);

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Error: {error.message}</>;
  }

  return (
    <div className={styles.observations}>
      {observations.map((el) => {
        return <Observation key={el.id} observation={el} />;
      })}
    </div>
  );
};
