import { Grid, GridItem, Show } from "@chakra-ui/react";
import VideoGrid from "../components/VideoGrid.tsx";
import GenreList from "../components/GenreList.tsx";
import SortSelector from "../components/SortSelector";
import VideoHeading from "../components/VideoHeading";
import { useState } from "react";

const HomePage = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [sorted, setSorted] = useState<string | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`, //1024 wide
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <VideoHeading genre={selectedGenre} sortOrder={sorted} />

        <SortSelector
          sortOrder={sorted}
          onSelectSortOrder={(sortOrder) => setSorted(sortOrder)}
        />
        <VideoGrid selectedGenre={selectedGenre} sortOrder={sorted} />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
