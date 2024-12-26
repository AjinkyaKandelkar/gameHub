import { Box, Grid, GridItem, HStack, Stack, Text } from "@chakra-ui/react";
import Navbar from "./Component/Navbar";
import GameGrid from "./Component/GameGrid";
import GenreGrid from "./Component/GenreGrid";
import { useState } from "react";
import { Genres } from "./modules/Genres";
import PlatformSlector from "./Component/PlatformSelector";
import { platform } from "./modules/Platform";
import SortSlector from "./Component/SortSelector";
import GameHeading from "./Component/GameHeading";

export interface GameQuery {
  genre: Genres | null;
  platform: platform | null;
  sortOrder: string;
  searchText: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          ></Navbar>
        </GridItem>
        <Stack hideBelow={"lg"}>
          <GridItem area="aside" paddingX={1}>
            <GenreGrid
              getSeletedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            ></GenreGrid>
          </GridItem>
        </Stack>

        <GridItem area="main">
          {/* { selectedGenre && <Text> </Text> } */}
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery}></GameHeading>
            <HStack spaceX={5} marginBottom={5}>
              <SortSlector
                selectedSortOrder={gameQuery.sortOrder}
                getSelectedSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              ></SortSlector>
              <PlatformSlector
                selectedPlatform={gameQuery.platform}
                getSelectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              ></PlatformSlector>
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
};
export default App;
