import { useEffect, useState } from "react";
import { INaturalistApiResponse, Result } from "../types/inaturalist";
import { Props } from "../types/props";

const useINaturalistApi = (props: Props) => {
  const [observations, setObservations] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchObservations = async () => {
    try {
      setLoading(true);
      setError(null);

      const queryProps = { ...props };

      // Get the observations from iNaturalist
      const url = new URL("https://api.inaturalist.org/v1/observations");

      // Set some sensible defaults
      queryProps.per_page = props.per_page ?? 10;
      queryProps.rank = queryProps.rank ?? ["species"];
      queryProps.order_by = queryProps.order_by ?? "observed_on";

      for (const key in queryProps) {
        url.searchParams.set(key, queryProps[key as keyof Props]);
      }

      const response = await window.fetch(url.toString());
      const data: INaturalistApiResponse = await response.json();
      setObservations(data.results);
    } catch (err: unknown) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!props.user_id) {
      return;
    }
    fetchObservations();
  }, [props]);

  return { observations, loading, error };
};

export default useINaturalistApi;
