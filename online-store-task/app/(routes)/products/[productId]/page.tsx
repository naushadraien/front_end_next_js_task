"use client";

import ProductImage from "@/components/product-image";
import Button from "@/components/ui/button";
import { addToCart } from "@/lib/redux/slices/cartSlice";
import { RootState } from "@/lib/redux/store/store";
import { ProductType } from "@/types";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

interface SingleProductProps {
  params: {
    productId: number;
  };
}

const SingleProduct: React.FC<SingleProductProps> = ({ params }) => {
  const items = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery<ProductType>({
    queryKey: ["data"],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/${params.productId}`
        );
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const filteredItem = items.find((item: ProductType) => item.id === data?.id);

  const onAddToCart = () => {
    if (filteredItem?.quantity ?? 0 > 0) {
      toast.error("Item already in Cart!");
    } else {
      dispatch(addToCart(data!));
      toast.success("Item added to Cart!");
    }
  };

  useEffect(() => {
    if (data?.title) {
      document.title = `${data.title} - Buy Online at OnlineStore | Best Price & Quality`;
    }
  }, [data?.title]);

  return (
    <>
      <div className="min-h-full mt-10 p-2 md:p-10">
        <div className="flex items-center justify-center p-4">
          <div className="mx-auto max-w-5xl rounded bg-white p-10">
            <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-8">
              {isLoading || !data ? (
                <div className="flex min-h-full min-w-full items-center justify-center my-10 md:mx-64 p-4">
                  <div className="mx-auto max-w-3xl rounded bg-orange-500 p-10">
                    <div className="h-8 w-8 rounded-full border-4 border-dashed border-white animate-spin" />
                  </div>
                </div>
              ) : (
                <>
                  <div className="relative w-full h-80 md:h-96">
                    <ProductImage image={data.image} title={data.title} fill />
                  </div>
                  <div>
                    <div>
                      <h4 className="font-bold text-lg md:text-2xl text-purple-700">
                        {data?.title}
                      </h4>
                      <p className="line-clamp-5 text-lg font-semibold py-1">
                        {data?.description}
                      </p>
                      <p className="text-sm text-orange-500 font-bold p-1">
                        Category:{" "}
                        <span className="text-purple-700">
                          {data?.category}
                        </span>
                      </p>

                      <div className="flex items-center text-sm my-2">
                        <p>{data?.rating.rate}</p>
                        {data?.rating.rate && (
                          <div className="flex items-center ml-2 mr-6">
                            {/* Display 5 stars but display the rate ones as StarIconOutline  */}
                            {Array.from(
                              { length: Math.floor(data.rating.rate) },
                              (_, i) => (
                                <StarIcon
                                  key={i}
                                  className="h-4 w-4 text-green-700"
                                />
                              )
                            )}

                            {/* Display the rest of the stars as StarIconOutline  */}
                            {Array.from(
                              { length: 5 - Math.floor(data.rating.rate) },
                              (_, i) => (
                                <StarIconOutline
                                  key={i}
                                  className="h-4 w-4 text-green-700"
                                />
                              )
                            )}
                          </div>
                        )}
                        <p className="text-blue-600 hover:underline cursor-pointer text-xs">
                          See all {data?.rating.count} reviews
                        </p>
                      </div>
                      <p className="font-medium text-lg">
                        <span>Rs. </span>
                        {data?.price}
                      </p>
                    </div>

                    <div className="text-sm">
                      <Button
                        className="bg-purple-700 hover:bg-purple-800 hover:shadow-lg transition-all duration-300 text-white rounded-md px-2 py-2 mt-4"
                        onClick={onAddToCart}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
