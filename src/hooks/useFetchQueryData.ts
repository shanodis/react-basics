import { useQuery, UseQueryOptions } from "react-query";
import Axios, { AxiosError } from "axios";

export const useFetchQueryData = <T>(url: string, options?: UseQueryOptions<T>) => useQuery<T, AxiosError<T>>(url, {
  queryFn: ({ signal }) =>
    Axios.get<T>(url, { signal })
      .then((res) => res.data)
      .catch((e) => {
        throw e?.response;
      }),
  initialData: options?.initialData,
  select: options?.select,
});