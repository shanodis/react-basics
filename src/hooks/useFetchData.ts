import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import Axios from "axios";

type UseFetchDataReturnType<T> = [T | undefined, boolean, Dispatch<SetStateAction<T | undefined>>];

export const useFetchData = <T>(url: string): UseFetchDataReturnType<T> => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const abortController = new AbortController();
    
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await Axios.get(url, { signal: abortController.signal });
        setData(response.data);
      } catch (error) {
        console.error(`Failed to fetch data: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData().then();

    return () => {
      abortController.abort();
    };
  }, [url]);
  
  return [data, loading, setData];
};