import { Grid, GridItem, Stack } from "@chakra-ui/react";
import Navbar from "./Component/Navbar";
const App = () => {
  return (
    <>
      <Grid templateAreas={{
        base:`" nav" " main"`,
        lg:`" nav nav" " aside main"`
      }}>
        <GridItem area="nav">
          <Navbar></Navbar>
        </GridItem>
        <Stack hideBelow={"lg"}>

          <GridItem area="aside" bg={"gold"}>
            
            Aside
          </GridItem>
        </Stack>
        
        <GridItem area="main" bg={"dodgerblue"}>
          
          Main
        </GridItem>
      </Grid>
    </>
  );
};
export default App;
