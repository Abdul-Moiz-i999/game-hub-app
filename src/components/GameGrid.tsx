import React, { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import gameServiceGeneral from "../services/game-service-general";
import GameCard from "./GameCard";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
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
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
