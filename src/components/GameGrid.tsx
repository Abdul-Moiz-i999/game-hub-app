// import React, { useEffect, useState } from "react";
// import apiClient, { CanceledError } from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
// import gameServiceGeneral from "../services/game-service-general";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameItemContainer from "./GameItemContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data: games, error, isLoading } = useGames(gameQuery);

  const skeleton = [1, 2, 3, 4, 5, 6];

  // useEffect(() => {
  //   const { response, cancel } = gameService.getGames();

  //   response
  //     .then((res) => setGames(res.data.results))
  //     .catch((err) => {
  //       if (!(err instanceof CanceledError)) setError(err.message);
  //     });

  //   return () => cancel();
  // }, []);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const { response, cancel } = gameServiceGeneral.getAll<GamesResponse>();

  //   response
  //     .then((res) => {
  //       setGames(res.data.results);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       if (!(err instanceof CanceledError)) {
  //         setError(err.message);
  //         setIsLoading(false);
  //       }
  //     });

  //   return () => cancel();
  // }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding={10}
      >
        {isLoading &&
          skeleton.map((number) => (
            <GameItemContainer key={number}>
              <GameCardSkeleton />
            </GameItemContainer>
          ))}
        {games.map((game) => (
          <GameItemContainer key={game.id}>
            <GameCard game={game} />
          </GameItemContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
