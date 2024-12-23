import { Grid, GridItem, Stack } from "@chakra-ui/react";
import Navbar from "./Component/Navbar";
import GameGrid from "./Component/GameGrid";
const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `" nav" " main"`,
          lg: `" nav nav" " aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar></Navbar>
        </GridItem>
        <Stack hideBelow={"lg"}>
          <GridItem area="aside">Aside</GridItem>
        </Stack>

        <GridItem area="main">
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
};
export default App;
