import { List, SimpleGrid, Text } from "@chakra-ui/react";

import GameCard from "./GameCard";
import LoadingGameCard from "./LoadingGameCard";
import GameCardContainer from "./GameCardContainer";
import useGames from "../hooks/useGames";
import { GameQuery } from "../App";
import { EmptyState } from "../components/ui/empty-state";
import { HiColorSwatch } from "react-icons/hi";
import PagesC from "./PagesC";
import Game from "../modules/Game";

interface props {
  gameQuery: GameQuery;
  selectedPage:(pagenumber:number)=>void;
}

const GameGrid = ({ gameQuery, selectedPage }: props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  if (error) return <Text> {error} </Text>;
  if (data?.results.length == 0 && !isLoading) {
    return (
      <>
        <EmptyState
          icon={<HiColorSwatch />}
          title="No results found"
          description="Try adjusting your search"
        >
          <List.Root variant="marker">
            <List.Item>Try removing filters</List.Item>
            <List.Item>Try different keywords</List.Item>
          </List.Root>
        </EmptyState>
      </>
    );
  }
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={2} gap={3}>
        {isLoading &&
          skeleton.map((sk) => (
            <GameCardContainer key={sk}>
              <LoadingGameCard></LoadingGameCard>
            </GameCardContainer>
          ))}

        {data?.results.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
      <PagesC onSelectPage={(pagenumber)=> selectedPage(pagenumber)} data={data} />
    </>
  );
};
export default GameGrid;
