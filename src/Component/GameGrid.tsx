import { SimpleGrid, Span, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import LoadingGameCard from "./LoadingGameCard";
import GameCardContainer from "./GameCardContainer";
import useGames from "../hooks/useGames";
import { GameQuery } from "../App";

interface props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return <Text> {error} </Text>;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={2} gap={3}>
      {isLoading &&
        skeleton.map((sk) => (
          <GameCardContainer key={sk}>
            <LoadingGameCard></LoadingGameCard>
          </GameCardContainer>
        ))}

      {data.map((game) => (
        <GameCard key={game.id} game={game}></GameCard>
      ))}
    </SimpleGrid>
  );
};
export default GameGrid;
