import { Grid, GridItem, Stack } from "@chakra-ui/react";
import Navbar from "./Component/Navbar";
import GameGrid from "./Component/GameGrid";
import GenreGrid from "./Component/GenreGrid";
import { useState } from "react";
import { Genres } from "./modules/Genres";
const App = () => {
  const [selectedGenre, SetSelectedGenre] = useState<Genres | null>(null);
  
  return (
    <>
      <Grid
        templateAreas={{
          base: `" nav" " main"`,
          lg: `" nav nav" " aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar></Navbar>
        </GridItem>
        <Stack hideBelow={"lg"}>
          <GridItem area="aside" paddingX={1}>
            <GenreGrid getSeletedGenre={(genre)=> SetSelectedGenre(genre) }></GenreGrid>
          </GridItem>
        </Stack>

        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
};
export default App;
