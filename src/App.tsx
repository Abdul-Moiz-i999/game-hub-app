import "./App.css";
import { createContext, useState, useMemo } from "react";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: string;
  search: string;
}

export type HeadingProps = Omit<GameQuery, "search" | "sort">;

export interface ContextProps {
  onSearchSubmit: (search: string) => void;
}
export const SearchContext = createContext<ContextProps | null>(null);
// export const SearchContext = createContext<ContextProps>({
//   onSearchSubmit: () => null,
// });

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const gameQueryForHeading = useMemo(() => {
    return {
      platform: gameQuery.platform || null,
      genre: gameQuery.genre || null,
    };
  }, [gameQuery.platform, gameQuery.genre]);

  const onSearchSubmit = (search: string) => {
    setGameQuery({ ...gameQuery, search });
  };

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: " 1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <SearchContext.Provider value={{ onSearchSubmit }}>
          <Navbar />
        </SearchContext.Provider>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={9}>
          <GameHeading gameQuery={gameQueryForHeading} />
          <HStack spacing={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              onSelectSort={(sort) =>
                setGameQuery({ ...gameQuery, sort: sort })
              }
              sortingBy={gameQuery.sort}
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
