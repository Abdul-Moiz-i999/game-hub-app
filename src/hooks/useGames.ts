import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface GamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<GamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (!(err instanceof CanceledError)) setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, setGames, error, setError };
};
export default useGames;
