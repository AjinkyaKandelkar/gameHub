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
  const [isLoading, setLoading]= useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<GameResp>("/games", {signal:controller.signal})
      .then((res) => {
        setGames(res.data.results)
        setLoading(false);
  })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return ()=> controller.abort();
  }, []);
  return { games, error, isLoading };
};
export default useGames;
