import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-check";

const GenreList = () => {
  const { data: genres } = useGenres();
  return (
    <List>
      {genres.map((d) => (
        <ListItem key={d.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(d.image_background)}
            />
            <Text>{d.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
