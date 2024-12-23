import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { Genres } from "../modules/Genres";
import { fetchGenres } from "../modules/FetchGenres";
import { CanceledError } from "axios";

const useGenere = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<fetchGenres>("/genres", { signal: controller.signal })
      .then((resp) => {
        setGenres(resp.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};
export default useGenere;
