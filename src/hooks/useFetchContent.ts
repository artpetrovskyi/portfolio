import { useState, useEffect } from "react";
import axios from "axios";

export type FetchStatus = "idle" | "loading" | "error" | "success";

export function useFetchContent<T>(path: string) {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<FetchStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      setStatus("loading");
      setError(null);

      try {
        // Optional delay for demo/testing purpose TODO: remove
        // await new Promise((resolve) => setTimeout(resolve, 1000));

        const res = await axios.get(import.meta.env.VITE_API_URL + path);

        if (!cancelled) {
          setData(res.data);
          setStatus("success");
        }
      } catch (err: unknown) {
        if (!cancelled) {
          let message = "Error fetching data";
          if (axios.isAxiosError(err)) {
            message = err.message;
          }
          setError(message);
          setStatus("error");
        }
      }
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [path]);

  return {
    data,
    status,
    error,
  };
}
