"use client";

import { useState } from 'react';

export default function Sidebar() {
  // Quản lý trạng thái mở/đóng của từng danh mục
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    thucpham: true, // Mặc định mở mục đầu tiên cho đẹp
    phunu: false,
    hongsam: false,
    caodau: false,
  });

  const toggle = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Dữ liệu danh mục dựa trên thực tế nhà thuốc
  const categories = [
    {
      id: 'thucpham',
      title: 'Thực phẩm chức năng',
      items: ['Vitamin, khoáng chất', 'Hỗ trợ sinh lý nam', 'Sản phẩm cho bà bầu', 'Tăng cân, giảm cân', 'Cơ, xương, khớp', 'Tim mạch và tuần hoàn', 'Hỗ trợ trí não', 'Tiểu đường, mỡ máu', 'Hỗ trợ điều trị ung thư']
    },
    {
      id: 'phunu',
      title: 'Dành cho phụ nữ',
      items: ['Nở mông, nở ngực', 'Bổ sung nội tiết tố nữ', 'Hỗ trợ sinh lý nữ']
    },
    {
      id: 'hongsam',
      title: 'Hồng sâm linh chi',
      items: ['Cao hồng sâm', 'An cung ngưu hoàn', 'Đông trùng hạ thảo']
    },
    {
      id: 'caodau',
      title: 'Cao, dầu giảm đau',
      items: ['Cao, dầu Hàn Quốc', 'Cao, dầu Nhật Bản']
    }
  ];

  return (
    <div className="w-full shadow-sm">
      <div className="bg-orange-500 text-white font-bold uppercase px-4 py-3 flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        DANH MỤC SẢN PHẨM
      </div>
      
      <div className="bg-white border border-t-0 p-2 text-sm text-gray-700">
        {categories.map((cat) => (
          <div key={cat.id} className="mb-1">
            <button 
              onClick={() => toggle(cat.id)}
              className="w-full flex items-center font-bold text-gray-800 p-2 hover:bg-gray-50 rounded transition"
            >
              <span className="flex items-center gap-2">
                <span className="text-[10px] w-3">{openSections[cat.id] ? '▼' : '▶'}</span> 
                {cat.title}
              </span>
            </button>
            
            {/* Hiển thị danh sách con nếu mục này đang mở */}
            {openSections[cat.id] && (
              <ul className="pl-7 space-y-1 mt-1 pb-2">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="hover:text-blue-600 cursor-pointer py-1.5 flex items-center gap-2 transition">
                    <span className="text-gray-400 text-[10px]">▸</span> {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Các nút mở rộng/đóng danh mục */}
        <div className="border-t mt-2 pt-3 pb-2 px-2 space-y-4">
          <button 
            onClick={() => setOpenSections({ thucpham: true, phunu: true, hongsam: true, caodau: true })}
            className="w-full text-left text-gray-800 font-bold flex items-center gap-2 hover:text-blue-600 transition"
          >
            <span className="text-[10px] w-3 text-center">▼</span> Xem chi tiết các danh mục
          </button>
          
          <button 
            onClick={() => setOpenSections({ thucpham: false, phunu: false, hongsam: false, caodau: false })}
            className="w-full text-left text-orange-500 font-bold flex items-center gap-2 hover:text-orange-600 transition"
          >
            <span className="border border-orange-500 w-3 h-3 flex items-center justify-center text-[10px]">-</span> Đóng danh mục
          </button>
        </div>
      </div>
    </div>
  );
}