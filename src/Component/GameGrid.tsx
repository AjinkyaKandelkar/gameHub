import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import LoadingGameCard from "./LoadingGameCard";
import GameCardContainer from "./GameCardContainer";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <Text> {error} </Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding={2} gap={3}>
        {isLoading &&
          skeleton.map((sk) => (
            <GameCardContainer>
              
              <LoadingGameCard key={sk}></LoadingGameCard>
            </GameCardContainer>
          ))}
        {data.map((game) => (
          
            <GameCard key={game.id} game={game}></GameCard>
          
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
