// components/Footer.tsx

import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">Về chúng tôi</h2>
            <p className="text-gray-400">
              N2 Men Store là cửa hàng quần áo nam cung cấp nhiều mẫu mã đa dạng, phù hợp mọi lứa tuổi, phong cách.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">Liên kết nhanh</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-white">Sản phẩm</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">Giới thiệu</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">Liên hệ</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white">Điều khoản</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">Liên hệ</h2>
            <p className="text-gray-400">Địa chỉ Email: info@n2menstore.com</p>
            <p className="text-gray-400">Điện thoại: +84 93552342</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} className="hover:text-gray-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter size={24} className="hover:text-gray-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} className="hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400">© 2024 N2 Men Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
