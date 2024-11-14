"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import HeartFavorite from "./HeartFavorite";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserDetailsType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  return (
    <div className="w-[350px] p-4 bg-white shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <Link href={`/products/${product._id}`} className="flex flex-col gap-3">
        <div className="relative w-full h-[280px]">
          <Image
            src={product.media[0]}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-gray-800 truncate">{product.title}</p>
          <p className="text-sm text-gray-500">{product.category.title}</p>
        </div>
      </Link>

      <div className="flex justify-between items-center mt-3">
        <p className="text-xl font-bold text-gray-900">{product.price} VND</p>

        <div className="flex items-center gap-3">
          <HeartFavorite product={product} updateSignedInUser={updateSignedInUser} />

          <button className="flex items-center gap-1 bg-[#1F2937] text-white py-2 px-4 rounded-lg text-sm font-semibold shadow-md hover:bg-blue-700 transition-all duration-200">
            <FaShoppingCart className="text-base" />
            <span>Thêm giỏ hàng</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
