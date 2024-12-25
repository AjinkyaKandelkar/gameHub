import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import Navbar from "./Component/Navbar";
import GameGrid from "./Component/GameGrid";
import GenreGrid from "./Component/GenreGrid";
import { useState } from "react";
import { Genres } from "./modules/Genres";
import PlatformSlector from "./Component/PlatformSelector";
import { platform } from "./modules/Platform";
const App = () => {
  const [selectedGenre, SetSelectedGenre] = useState<Genres | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<platform|null>  (null);
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
          {/* { selectedGenre && <Text> </Text> } */}
          <PlatformSlector selectedPlatform={selectedPlatform} getSelectedPlatform={(platform)=>setSelectedPlatform(platform)}></PlatformSlector>
          <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
};
export default App;
