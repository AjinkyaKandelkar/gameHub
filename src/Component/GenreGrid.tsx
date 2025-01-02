import { Text } from "@chakra-ui/react";
import useGenere from "../hooks/useGenere";
import GenereList from "./GenereList";
import GenreSkeleton from "./GenreSkeleton";
import { useState } from "react";
import { Genres } from "../modules/Genres";

interface props {
  getSeletedGenre: (genre: Genres) => void;
}

const GenreGrid = ({ getSeletedGenre }: props) => {
  const { data,isLoading, error } = useGenere();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [selectedGenre, SetSelectedGenre] = useState<Genres | null>(null);

  return (
    <>
      {error && <Text> {error} </Text>}
      {isLoading &&
        skeleton.map((sk) => <GenreSkeleton key={sk}></GenreSkeleton>)}
      <GenereList
        selectedGenre={selectedGenre}
        onSelectGenre={(genre) => {
          SetSelectedGenre(genre);
          getSeletedGenre(genre);
        }}
        Genre={data?.results}
      ></GenereList>
    </>
  );
};
export default GenreGrid;
