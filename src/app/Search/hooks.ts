import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { API_URL } from "../constants";
import { toast } from "react-toastify";

export default function useSearch() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  useEffect(() => {
    id && fetchData();
  }, [id]);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data }: any = await axios.get(`${API_URL}/character/${id}`);

      setData(data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("an error, please try again");
      setIsLoading(false);
    }
  }, [id]);

  return { data, isLoading, setId };
}
