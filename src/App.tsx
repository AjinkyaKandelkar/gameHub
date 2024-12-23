import { Grid, GridItem, Stack } from "@chakra-ui/react";
import Navbar from "./Component/Navbar";
import GameGrid from "./Component/GameGrid";
import GenereList from "./Component/GenereList";
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
          <GridItem area="aside">
            <GenereList></GenereList>

          </GridItem>
        </Stack>

        <GridItem area="main">
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
};
export default App;
