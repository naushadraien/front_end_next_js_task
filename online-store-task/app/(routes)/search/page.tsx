"use client";
import Product from "@/components/product";
import { ProductType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const SearchPage = () => {
  const query = useSearchParams().get("q");
  const { data, isLoading } = useQuery<ProductType[]>({
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

  useEffect(() => {
    if (!data) {
      redirect("/");
    }
  }, [data]);

  const filteredProducts = data?.filter((product) =>
    product.title.toLowerCase().includes(query!?.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-center items-center mt-10 font-bold text-xl">
        <p>
          Search Result for: <span className="text-purple-700"> {query}</span>
        </p>
      </div>
      <div className="flex justify-center items-center max-lg:flex-col flex-wrap">
        {filteredProducts && filteredProducts.length === 0 ? (
          <p className="my-20 font-bold text-xl text-red-500">
            No Results Found!
          </p>
        ) : isLoading ? (
          <div className="flex min-h-full min-w-full items-center justify-center my-10 md:mx-64 p-4">
            <div className="mx-auto max-w-3xl rounded bg-orange-500 p-10">
              <div className="h-8 w-8 rounded-full border-4 border-dashed border-white animate-spin" />
            </div>
          </div>
        ) : (
          filteredProducts?.map((product) => (
            <div key={product.id} className="flex justify-between mx-5 my-8">
              <Product data={product} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default SearchPage;
