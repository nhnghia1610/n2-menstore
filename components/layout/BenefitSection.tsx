import { Truck, RefreshCw, Shield, Gift, Shirt } from "lucide-react";

const BenefitSection = () => {
  return (
    <div className="py-16 px-4 lg:px-8">
      <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

      <div className="relative flex flex-col items-center text-center p-8 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-[#1F2937]">
          <Shirt size={56} className="text-primary mb-4" />
          <h3 className="text-2xl font-semibold mb-1 text-gray-800">Mẫu mã đa dạng</h3>
          <p className="text-gray-700 text-lg">Nhiều sản phẩm cho bạn lựa chọn</p>
          <div className="absolute -bottom-3 -right-3 opacity-10 text-gray-300">
            <Shirt size={80} />
          </div>
        </div>
        
        <div className="relative flex flex-col items-center text-center p-8 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-[#1F2937]">
          <Truck size={56} className="text-primary mb-4" />
          <h3 className="text-2xl font-semibold mb-1 text-gray-800">Miễn phí vận chuyển</h3>
          <p className="text-gray-700 text-lg">Mọi đơn hàng trên 500,000 VNĐ đều được miễn phí vận chuyển</p>
          <div className="absolute -bottom-3 -right-3 opacity-10 text-gray-300">
            <Truck size={80} />
          </div>
        </div>
        
        <div className="relative flex flex-col items-center text-center p-8 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-[#1F2937]">
          <RefreshCw size={56} className="text-primary mb-4" />
          <h3 className="text-2xl font-semibold mb-1 text-gray-800">Chính sách đổi trả</h3>
          <p className="text-gray-700 text-lg">Nếu có vấn đề với sản phẩm, bạn thoải mái đổi trả trong tuần đầu tiên</p>
          <div className="absolute -bottom-3 -right-3 opacity-10 text-gray-300">
            <RefreshCw size={80} />
          </div>
        </div>
        
        <div className="relative flex flex-col items-center text-center p-8 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-[#1F2937]">
          <Shield size={56} className="text-primary mb-4" />
          <h3 className="text-2xl font-semibold mb-1 text-gray-800">Thanh toán nhanh chóng</h3>
          <p className="text-gray-700 text-lg">Thanh toán online hoặc COD</p>
          <div className="absolute -bottom-3 -right-3 opacity-10 text-gray-300">
            <Shield size={80} />
          </div>
        </div>
        
        <div className="relative flex flex-col items-center text-center p-8 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-[#1F2937]">
          <Gift size={56} className="text-primary mb-4" />
          <h3 className="text-2xl font-semibold mb-1 text-gray-800">Quà tặng hấp dẫn</h3>
          <p className="text-gray-700 text-lg">Chính sách quà tặng hấp dẫn</p>
          <div className="absolute -bottom-3 -right-3 opacity-10 text-gray-300">
            <Gift size={80} />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BenefitSection;
