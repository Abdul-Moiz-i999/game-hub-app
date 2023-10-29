import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

interface Genre {
  id: number;
  name: string;
}

interface GenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<GenresResponse>("/genres", { signal: controller.signal })
      .then((res) => setGenres(res.data.results))
      .catch((err) => {
        if (!(err instanceof CanceledError)) setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, setError };
};
export default useGenres;
