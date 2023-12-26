import Link from "next/link";
import ProductImage from "@/components/product-image";
import { AiOutlineStar } from "react-icons/ai";
import { ProductType } from "@/types";

interface ProductProps {
  data: ProductType;
}
function Product({ data }: ProductProps) {
  return (
    <>
      <Link
        href={`/product/${data.id}`}
        className="h-96 flex flex-col p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200"
      >
        <div className="relative max-h-72 flex-1">
          <ProductImage image={data.image} title={data.title} fill />
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
            <p className="text-gray-400 font-semibold ml-1">
              ({data.rating.count})
            </p>
          </div>
          <p className="text-lg font-bold">
            <span>Rs. </span>
            {data.price}
          </p>
        </div>
      </Link>
    </>
  );
}

export default Product;
