"use client";

import useCart from "@/lib/hooks/useCart";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart, Heart, Home, ClipboardList, Shirt } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="sticky top-0 z-20 py-3 px-10 flex gap-4 justify-between items-center bg-[#1F2937] text-gray-300 shadow-xl max-sm:px-4">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={130} height={100} />
      </Link>

      {/* Main Navigation Links */}
      <div className="flex gap-6 items-center text-body-medium max-lg:hidden">
        <Link
          href="/"
          className={`flex items-center gap-2 hover:text-white transition-colors ${
            pathname === "/" ? "text-[#FDAB04]" : "text-gray-300"
          }`}
        >
          <Home className="w-5 h-5" />
          Trang chủ
        </Link>
        <Link
          href="/products"
          className={`flex items-center gap-2 hover:text-white transition-colors ${
            pathname === "/products" ? "text-[#FDAB04]" : "text-gray-300"
          }`}
        >
          <Shirt className="w-5 h-5" />
          Sản phẩm
        </Link>
        <Link
          href={user ? "/wishlist" : "/sign-in"}
          className={`flex items-center gap-2 hover:text-white transition-colors ${
            pathname === "/wishlist" ? "text-[#FDAB04]" : "text-gray-300"
          }`}
        >
          <Heart className="w-5 h-5" />
          Yêu thích
        </Link>
        <Link
          href={user ? "/orders" : "/sign-in"}
          className={`flex items-center gap-2 hover:text-white transition-colors ${
            pathname === "/orders" ? "text-[#FDAB04]" : "text-gray-300"
          }`}
        >
          <ClipboardList className="w-5 h-5" />
          Đơn hàng
        </Link>
      </div>

      <div className="flex gap-2 items-center px-3 py-1 border border-gray-600 rounded-lg bg-white">
        <input
          className="w-full bg-transparent outline-none text-black placeholder-gray-500"
          placeholder="Tìm sản phẩm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          disabled={query === ""}
          onClick={() => router.push(`/search/${query}`)}
          className="text-gray-400 hover:text-[#FDAB04] transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>


      <div className="relative flex gap-4 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-2 border border-gray-600 px-3 py-1 rounded-lg hover:bg-[#FDAB04] hover:text-gray-900 transition-colors max-md:hidden"
        >
          <ShoppingCart />
          <p>Giỏ hàng ({cart.cartItems.length})</p>
        </Link>

        <Menu
          className="cursor-pointer lg:hidden text-gray-400 hover:text-[#FDAB04] transition-colors"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {/* Dropdown Menu for Mobile */}
        {dropdownMenu && (
          <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border border-gray-600 bg-[#1F2937] shadow-lg text-gray-300 lg:hidden">
            <Link href="/" className="flex items-center gap-2 hover:text-[#FDAB04]">
              <Home className="w-5 h-5" />
              Trang chủ
            </Link>
            <Link href="/products" className="flex items-center gap-2 hover:text-[#FDAB04]">
              <Home className="w-5 h-5" />
              Sản phẩm
            </Link>
            <Link
              href={user ? "/wishlist" : "/sign-in"}
              className="flex items-center gap-2 hover:text-[#FDAB04]"
            >
              <Heart className="w-5 h-5" />
              Yêu thích
            </Link>
            <Link
              href={user ? "/orders" : "/sign-in"}
              className="flex items-center gap-2 hover:text-[#FDAB04]"
            >
              <ClipboardList className="w-5 h-5" />
              Đơn hàng
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-2 border border-gray-600 px-2 py-1 rounded-lg hover:bg-[#FDAB04] hover:text-gray-900"
            >
              <ShoppingCart />
              <p>Giỏ hàng ({cart.cartItems.length})</p>
            </Link>
          </div>
        )}

        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in" className="hover:text-[#FDAB04] transition-colors">
            <CircleUserRound className="w-6 h-6" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
