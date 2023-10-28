import React, { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";
import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import gameServiceGeneral from "../services/game-service-general";

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

function GameGrid() {
  // const { games, error } = useGames();
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   const { response, cancel } = gameService.getGames();

  //   response
  //     .then((res) => setGames(res.data.results))
  //     .catch((err) => {
  //       if (!(err instanceof CanceledError)) setError(err.message);
  //     });

  //   return () => cancel();
  // }, []);

  useEffect(() => {
    const { response, cancel } = gameServiceGeneral.getAll<GamesResponse>();

    response
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (!(err instanceof CanceledError)) setError(err.message);
      });

    return () => cancel();
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
