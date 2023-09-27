import { useCallback, useEffect, useState } from "react";

export default function useSearch() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [id, setId] = useState<string>('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async () => {}, []);

  return { data, isLoading, setId };
}
