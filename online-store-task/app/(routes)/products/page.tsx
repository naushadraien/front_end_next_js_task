"use client";
import Loader from "@/components/Loader";
import Product from "@/components/product";
import { ProductType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Products = () => {
  const { isLoading, data } = useQuery<ProductType[]>({
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
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-32">
      <section className="flex flex-col space-y-12 pb-10">
        <h1 className="text-5xl font-bold text-center text-purple-800 -mt-24">
          Products
        </h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {isLoading || !data
            ? Array.from({ length: 20 }, (_, index) => <Loader key={index} />)
            : data.map((product: ProductType) => (
                <Product key={product.id} data={product} />
              ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
