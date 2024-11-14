"use client";

import { useState } from "react";
import HeartFavorite from "./HeartFavorite";
import { MinusCircle, PlusCircle } from "lucide-react";

import useCart from "@/lib/hooks/useCart";

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState<string>(productInfo.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(productInfo.sizes[0]);
  const [quantity, setQuantity] = useState<number>(1);

  const cart = useCart();

  return (
    <div className="max-w-[450px] flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold text-gray-900">{productInfo.title}</p>
        <HeartFavorite product={productInfo} />
      </div>

      <div className="flex gap-2 items-center">
        <p className="text-base text-gray-500">Danh mục:</p>
        <p className="text-lg font-medium text-gray-800">{productInfo.category.title}</p>
      </div>

      <p className="text-3xl font-bold text-gray-900">{productInfo.price} VND</p>

      <div className="flex flex-col gap-4">
        <p className="text-base text-gray-500">Mô tả:</p>
        <p className="text-sm text-gray-600">{productInfo.description}</p>
      </div>

      {productInfo.colors.length > 0 && (
        <div className="flex flex-col gap-3">
          <p className="text-base text-gray-500">Màu sắc:</p>
          <div className="flex gap-3">
            {productInfo.colors.map((color, index) => (
              <p
                key={index}
                className={`border-2 border-gray-300 px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
                  selectedColor === color ? "bg-black text-white border-transparent" : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </p>
            ))}
          </div>
        </div>
      )}

      {productInfo.sizes.length > 0 && (
        <div className="flex flex-col gap-3">
          <p className="text-base text-gray-500">Kích thước:</p>
          <div className="flex gap-3">
            {productInfo.sizes.map((size, index) => (
              <p
                key={index}
                className={`border-2 border-gray-300 px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
                  selectedSize === size ? "bg-black text-white border-transparent" : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3">
        <p className="text-base text-gray-500">Số lượng:</p>
        <div className="flex gap-5 items-center">
          <MinusCircle
            className="hover:text-red-500 cursor-pointer"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          />
          <p className="text-lg font-semibold">{quantity}</p>
          <PlusCircle
            className="hover:text-red-500 cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
      </div>

      <button
        className="bg-[#1F2937] text-white text-lg font-semibold py-3 rounded-lg mt-4 hover:bg-[#FDAB04] transition-colors duration-300 ease-in-out"
        onClick={() => {
          cart.addItem({
            item: productInfo,
            quantity,
            color: selectedColor,
            size: selectedSize,
          });
        }}
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};

export default ProductInfo;
