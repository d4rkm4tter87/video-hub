import { Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/Nav.tsx";
import VideoGrid from "./components/VideoGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import { useState } from "react";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
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
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <VideoGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
