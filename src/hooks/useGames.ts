import Game from "../modules/Game";
import { Genres } from "../modules/Genres";
import useData from "./useData";


const useGames = (selectedGenre:Genres | null) => useData<Game>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id])
export default useGames;
