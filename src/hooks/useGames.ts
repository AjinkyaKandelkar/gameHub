import Game from "../modules/Game";
import { Genres } from "../modules/Genres";
import { platform } from "../modules/Platform";
import useData from "./useData";

const useGames = (
  selectedGenre: Genres | null,
  selectedPlatform: platform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [
      selectedGenre?.id,
      selectedPlatform?.id, //dependencies array
    ]
  );
export default useGames;
