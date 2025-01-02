import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface fetchResponceData<T> {
  count: number;
  next:string;
  previous:string;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  depes?: any[]
) => {
 
  const [data, setData] = useState<fetchResponceData<T>>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);

      apiClient
        .get<fetchResponceData<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((resp) => {
          setData(resp.data);
          
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
      return () => controller.abort();
    },
    depes ? [...depes] : []
  );
  return { data, error, isLoading };
};
export default useData;
