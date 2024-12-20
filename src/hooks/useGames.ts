import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import Game from "../modules/Game";
import { CanceledError } from "axios";

interface GameResp {
  count: number;
  results: Game[];
}

const useGames = () => {
  
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<GameResp>("/games", {signal:controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
      });
    return ()=> controller.abort();
  }, []);
  return { games, error };
};
export default useGames;
