"use client";
import ProductImage from "@/components/product-image";
import IconButton from "@/components/ui/icon-button";
import { addToCart } from "@/lib/redux/slices/cartSlice";
import { openModal } from "@/lib/redux/slices/modalSlice";
import { RootState } from "@/lib/redux/store/store";
import { ProductType } from "@/types";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

interface ProductProps {
  data: ProductType;
}
function Product({ data }: ProductProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.cartItems);
  const filteredItem = items.find((item: ProductType) => item.id === data.id);
  const handleCLick = () => {
    router.push(`/products/${data.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation(); //stops the bubbling of an event to parent elements, preventing any parent event handlers from being executed.
    dispatch(openModal(data));
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation(); //stops the bubbling of an event to parent elements, preventing any parent event handlers from being executed.
    if (filteredItem?.quantity ?? 0 > 0) {
      toast.error("Item already in Cart!");
    } else {
      dispatch(addToCart(data));
      toast.success("Item Added to Cart!");
    }
  };

  return (
    <div
      className="h-96 flex flex-col p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200"
      onClick={handleCLick}
    >
      <div className="relative max-h-72 flex-1">
        <ProductImage image={data.image} title={data.title} fill />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>

      <div className="font-semibold flex items-center justify-between flex-col mt-4 mb-1">
        <p className="w-44 truncate text-purple-700">{data.title}</p>
        <p className="italic text-sm w-64 line-clamp-2 text-gray-600 my-1">
          {data.description}
        </p>
        <div className="flex">
          <p className="bg-green-700 text-slate-50 flex justify-center items-center px-1 rounded-lg text-xs py-1">
            {data.rating.rate}{" "}
            <span className="ml-1 text-sm">
              <AiOutlineStar />
            </span>
          </p>
          <p className="text-blue-700 font-semibold ml-1">
            ({data.rating.count})
          </p>
        </div>
        <p className="text-lg font-bold">
          <span>Rs. </span>
          {data.price}
        </p>
      </div>
    </div>
  );
}

export default Product;
