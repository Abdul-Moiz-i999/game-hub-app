import apiClient from "./api-client";

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

class GameService {
  getGames() {
    const controller = new AbortController();
    const response = apiClient.get<GamesResponse>("/games", {
      signal: controller.signal,
    });

    return { response, cancel: () => controller.abort() };
  }
}

export default new GameService();
