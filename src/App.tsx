import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/Nav.tsx";
import VideoGrid from "./components/VideoGrid.tsx";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024 wide
      }}
    >
      <GridItem area="nav">
        <Nav />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="pink">
          Navx
        </GridItem>
      </Show>
      <GridItem area="main" bg="red">
        <VideoGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
