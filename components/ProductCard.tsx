"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import HeartFavorite from "./HeartFavorite";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserDetailsType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps ) => {
  return (
    <div className="w-[280px] p-4 bg-white shadow-lg rounded-xl transition-transform duration-200 hover:scale-105">
      <Link href={`/products/${product._id}`} className="flex flex-col gap-3">
        <Image
          src={product.media[0]}
          alt="product"
          width={280}
          height={350}
          className="h-[280px] rounded-lg object-cover"
        />
        
        <div>
          <p className="text-lg font-semibold text-gray-800">{product.title}</p>
          <p className="text-sm font-medium text-gray-500">{product.category.title}</p>
        </div>
      </Link>

      <div className="flex justify-between items-center mt-2">
        <p className="text-xl font-bold text-gray-900">${product.price}</p>
        
        <div className="flex items-center gap-2">
          <HeartFavorite product={product} updateSignedInUser={updateSignedInUser} />

          <button className="flex items-center gap-1 bg-blue-600 text-white py-1 px-3 rounded-full text-sm font-semibold shadow hover:bg-blue-700 transition">
            <FaShoppingCart className="text-base" /> Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
