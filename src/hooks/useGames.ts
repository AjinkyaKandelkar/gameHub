import { GameQuery } from "../App";
import Game from "../modules/Game";

import useData from "./useData";

const useGames = (
  gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    { params: { 
        genres: gameQuery.genre?.id, 
        platforms: gameQuery.platform?.id, 
        ordering: gameQuery.sortOrder,
        search:gameQuery.searchText,
    } },
    [//dependencies array
      gameQuery
    ]
  );
export default useGames;
