"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function Home() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return <div>Hello</div>;
}
