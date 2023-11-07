import { Heading } from "@chakra-ui/react";
import { GameQuery, HeadingProps } from "../App";
import { memo, useMemo } from "react";

type Props = Omit<GameQuery, "search" | "sort">;

const GameHeading = ({ gameQuery }: { gameQuery: Props }) => {
  console.log(
    `Genre = ${gameQuery.genre} Platform = ${gameQuery.platform?.name} `
  );
  const headingContent = useMemo(
    () =>
      `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`,
    [gameQuery.platform, gameQuery.genre]
  );

  return (
    <Heading as="h1" marginBottom={4}>
      {headingContent}
    </Heading>
  );
};

export default memo(GameHeading);
