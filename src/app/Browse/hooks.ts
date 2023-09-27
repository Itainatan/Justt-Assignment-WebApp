import { useCallback, useEffect, useState } from "react";

export default function useBrowse() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async () => {}, []);

  return { data, isLoading, setSearch };
}
