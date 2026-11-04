"use client";

import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t-4 border-blue-600 mt-12 pt-8 pb-4">
      <div className="container mx-auto px-4">
        
        {/* 1. Thanh Menu Nhanh (Trang chủ, Giới thiệu...) */}
        <div className="flex justify-center items-center gap-4 sm:gap-8 border-b pb-4 text-sm font-semibold text-gray-700">
          <Link href="/" className="hover:text-blue-600 flex items-center gap-1">🏠 Trang chủ</Link>
          <Link href="#" className="hover:text-blue-600 flex items-center gap-1">ℹ️ Giới thiệu</Link>
          <Link href="#" className="hover:text-blue-600 flex items-center gap-1">📰 Tin tức</Link>
          <Link href="#" className="hover:text-blue-600 flex items-center gap-1">👥 Liên hệ</Link>
          <button onClick={scrollToTop} className="text-red-500 hover:text-red-600 flex items-center gap-1">
            ⬆ Lên đầu trang
          </button>
        </div>

        {/* 2. Hotline & Liên kết chính sách */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8 border-b">
          {/* Cột Hotline */}
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <div className="text-red-500 font-bold text-5xl">📞</div>
            <div>
              <div className="text-gray-500 text-sm font-bold flex items-center gap-2">
                HOTLINE <span className="text-xs text-gray-400 font-normal">TƯ VẤN MIỄN PHÍ</span>
              </div>
              <div className="text-red-600 font-extrabold text-3xl sm:text-4xl">090.408.9796</div>
            </div>
          </div>

          {/* Cột Chính sách (Chia làm 3 cột nhỏ) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600 font-medium">
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-blue-600">› Hướng dẫn mua hàng</Link></li>
              <li><Link href="#" className="hover:text-blue-600">› Chính sách vận chuyển</Link></li>
            </ul>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-blue-600">› Chính sách đổi trả</Link></li>
              <li><Link href="#" className="hover:text-blue-600">› Khiếu nại sản phẩm</Link></li>
            </ul>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-blue-600">› Chính sách bảo mật</Link></li>
              <li><Link href="#" className="hover:text-blue-600">› An toàn tài chính</Link></li>
            </ul>
          </div>
        </div>

        {/* 3. Danh sách Cơ sở (Nhường chỗ trống để chèn ảnh cơ sở sau) */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-b">
          {[
            { name: "CƠ SỞ TRẦN TẤT VĂN", addr: "118 Trần Tất Văn, Phù liễn, Hải phòng" },
            
          ].map((branch, idx) => (
            <div key={idx} className="flex gap-3">
              <div className="w-16 h-16 bg-gray-100 border flex-shrink-0 flex items-center justify-center text-xs text-gray-400 text-center p-1 rounded">
                Ảnh<br/>Cơ sở
              </div>
              <div className="text-sm">
                <h4 className="font-bold text-gray-800 uppercase">{branch.name}</h4>
                <p className="text-gray-500 mt-1 leading-snug text-xs">📍 {branch.addr}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Chứng nhận Uy tín & Bản quyền */}
        <div className="py-6 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-md">
              +
            </div>
            <div>
              <h4 className="text-blue-700 font-bold uppercase text-lg">
                TRUNG TÂM PHÂN PHỐI DƯỢC PHẨM CHÍNH HÃNG THUỐC 118
              </h4>
              <p className="text-gray-500 text-sm italic mt-1">
                Chuyên cung cấp dược phẩm chính hãng chất lượng đảm bảo, uy tín bền lâu...
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Giấy phép số: 92387656264 do sở KH&ĐT Hà Nội cấp
              </p>
            </div>
          </div>
          
          {/* Nút Bộ Công Thương giả lập */}
          <div className="flex-shrink-0">
            <div className="bg-blue-600 text-white font-bold px-6 py-2 rounded-lg italic shadow-md border-2 border-white flex items-center gap-2">
              <span className="text-2xl">☑</span> ĐÃ THÔNG BÁO BỘ CÔNG THƯƠNG
            </div>
          </div>
        </div>
        
        {/* Dòng Copyright */}
        <div className="text-center pt-4 text-xs text-gray-400 font-medium">
          Bản quyền © 2026 thuộc về Nhà Thuốc 118.
        </div>
      </div>
    </footer>
  );
}