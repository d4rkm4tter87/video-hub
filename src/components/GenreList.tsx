import { HStack, List, ListItem, Image, Button } from "@chakra-ui/react";
import genres from "../data/genres";

interface Props {
  onSelectGenre: (genre: string) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  return (
    <List>
      {genres.map((g) => (
        <ListItem key={g.id} paddingY="5px">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={g.image_background} />
            <Button
              fontSize="lg"
              variant="link"
              onClick={() => onSelectGenre(g.name)}
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
