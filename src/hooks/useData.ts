import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

interface DataResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

const useGames = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .get<DataResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (!(err instanceof CanceledError)) {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};
export default useGames;
