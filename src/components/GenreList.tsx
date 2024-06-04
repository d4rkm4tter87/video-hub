import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import genres from "../data/genres";

interface Props {
  onSelectGenre: (genre: string) => void;
  selectedGenre: string | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List>
        {genres.map((g) => (
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={g.image_background}
                objectFit="cover"
              />
              <Button
                fontSize="lg"
                variant="link"
                fontWeight={g.name === selectedGenre ? "bold" : "normal"}
                onClick={() => onSelectGenre(g.name)}
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
