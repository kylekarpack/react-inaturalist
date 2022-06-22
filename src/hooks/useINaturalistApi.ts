import { useEffect, useState } from "react";
import { INaturalistApiResponse, Taxon } from "../types/inaturalist";
import { Props } from "../types/props";

const useINaturalistApi = (props: Props) => {
  const [observations, setObservations] = useState<Taxon[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchObservations = async () => {
    try {
      setLoading(true);
      setError(null);

      // Get the observations from iNaturalist
      const url = new URL("https://api.inaturalist.org/v1/observations");
      url.searchParams.set("per_page", "10"); // Set a sensible default

      for (const key in props) {
        url.searchParams.set(key, props[key as keyof Props]);
      }

      const response = await window.fetch(url.toString());
      const data: INaturalistApiResponse = await response.json();
      setObservations(data.results.flatMap((el) => el.taxon));
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
