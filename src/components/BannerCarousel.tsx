"use client";

import { useState, useEffect } from 'react';

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mảng 5 banner giả lập (đổi màu để dễ nhận biết khi chuyển slide)
  const banners = [
    { id: 1, bg: 'bg-blue-100', text: 'Banner Quảng Cáo 1 (Elevit/Bà bầu)' },
    { id: 2, bg: 'bg-green-100', text: 'Banner Quảng Cáo 2 (Thực phẩm chức năng)' },
    { id: 3, bg: 'bg-yellow-100', text: 'Banner Quảng Cáo 3 (Sâm Hàn Quốc)' },
    { id: 4, bg: 'bg-red-100', text: 'Banner Quảng Cáo 4 (Khuyến mãi giảm giá)' },
    { id: 5, bg: 'bg-purple-100', text: 'Banner Quảng Cáo 5 (Sản phẩm mới)' },
  ];

  // Tự động chuyển slide sau mỗi 3.5 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
    }, 3500);
    
    // Dọn dẹp bộ đếm khi tắt component
    return () => clearInterval(timer);
  }, [banners.length]);

  // Hàm xử lý nút Bấm
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-64 md:h-[320px] rounded overflow-hidden group">
      
      {/* Khối chứa các ảnh trượt */}
      <div 
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className={`min-w-full h-full flex flex-col items-center justify-center text-gray-500 ${banner.bg}`}>
            <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span className="font-bold text-lg text-gray-700">{banner.text}</span>
            <span className="text-sm">(Chèn thẻ img vào đây)</span>
          </div>
        ))}
      </div>

      {/* Nút Lùi (Trái) */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity font-bold text-xl"
      >
        ❮
      </button>

      {/* Nút Tiến (Phải) */}
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity font-bold text-xl"
      >
        ❯
      </button>

      {/* Các chấm báo vị trí ở dưới cùng */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full shadow transition-colors ${currentIndex === idx ? 'bg-blue-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'}`}
          />
        ))}
      </div>

    </div>
  );
}