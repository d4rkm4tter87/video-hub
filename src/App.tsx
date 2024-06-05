import { Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/Nav.tsx";
import VideoGrid from "./components/VideoGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import SortSelector from "./components/SortSelector";
import VideoHeading from "./components/VideoHeading";
import VideoForm from "./components/VideoForm";
import { useState } from "react";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [sorted, setSorted] = useState<string | null>(null);
  const [updated, setUpdated] = useState<number>(0);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024 wide
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Nav />
      </GridItem>
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
        <VideoGrid
          selectedGenre={selectedGenre}
          sortOrder={sorted}
          setUpdated={(u) => setUpdated(u)}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
