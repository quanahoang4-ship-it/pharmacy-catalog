import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white">
      {/* 1. Top Bar - Thanh menu nhỏ trên cùng */}
      <div className="bg-blue-600 text-white text-sm py-1.5">
        <div className="container mx-auto px-4 flex gap-4 font-medium">
          <Link href="/" className="hover:text-yellow-300 transition">Trang chủ</Link>
          <span>|</span>
          <Link href="#" className="hover:text-yellow-300 transition">Giới thiệu</Link>
          <span>|</span>
          <Link href="#" className="hover:text-yellow-300 transition">Tin tức</Link>
          <span>|</span>
          <Link href="#" className="hover:text-yellow-300 transition">Liên hệ</Link>
        </div>
      </div>

      {/* 2. Middle Bar - Chứa Logo, Hotline và Chính sách / Giỏ hàng */}
      <div className="container mx-auto px-4 py-5 flex flex-wrap justify-between items-center gap-4">
        
        {/* Cụm Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* Biểu tượng chữ thập giả lập Logo */}
          <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-3xl shadow-sm">
            +
          </div>
          <div>
            <div className="text-4xl font-extrabold text-blue-600 tracking-tight">
              Thuốc<span className="text-orange-500">118</span><span className="text-lg text-blue-600">.vn</span>
            </div>
            <div className="text-sm text-orange-500 font-semibold italic mt-0.5">
              Thuốc tốt - Giá tốt - Giao nhanh
            </div>
          </div>
        </Link>

        {/* Cụm Hotline nổi bật */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-orange-500 font-bold text-2xl uppercase leading-none">Hotline</div>
            <div className="text-sm text-gray-500 mt-1">Tư vấn, đặt hàng 24/24</div>
          </div>
          <div className="bg-orange-500 text-white font-extrabold text-2xl px-4 py-2 rounded shadow-md">
            0904089796
          </div>
        </div>

        {/* Cụm Chính sách và Giỏ hàng (Ẩn trên mobile cho gọn) */}
        <div className="flex items-center gap-8 hidden lg:flex">
          <div className="text-sm font-semibold text-gray-700 space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-blue-600 text-lg">🚚</span> Giao nhanh - Miễn phí
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600 text-lg">✔️</span> Uy tín - Chất lượng
            </div>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 shadow-md transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            Giỏ hàng (0)
          </button>
        </div>
      </div>

      {/* 3. Main Navigation - Thanh menu danh mục ngang */}
      <div className="bg-blue-700 text-white">
        <div className="container mx-auto px-4 flex items-center space-x-8 py-3 text-sm font-bold uppercase overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-yellow-300 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
          </Link>
          <Link href="#" className="hover:text-yellow-300 transition flex items-center gap-1">Thực phẩm chức năng ▾</Link>
          <Link href="#" className="hover:text-yellow-300 transition flex items-center gap-1">Nam giới ▾</Link>
          <Link href="#" className="hover:text-yellow-300 transition flex items-center gap-1">Phụ nữ ▾</Link>
          <Link href="#" className="hover:text-yellow-300 transition flex items-center gap-1">Mẹ & Bé ▾</Link>
          <Link href="#" className="hover:text-yellow-300 transition flex items-center gap-1">Hồng sâm linh chi ▾</Link>
        </div>
      </div>

      {/* 4. Search Bar - Thanh tìm kiếm & Từ khóa */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-3 flex items-center gap-4">
          <div className="flex w-full max-w-xl border-2 border-blue-600 rounded overflow-hidden bg-white">
            <input 
              type="text" 
              placeholder="Nhập từ khóa ..." 
              className="w-full px-4 py-2 outline-none text-gray-700" 
            />
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 font-bold flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              TÌM KIẾM
            </button>
          </div>
          <div className="text-sm hidden lg:block">
            <span className="font-bold text-gray-700">★ Tìm nhiều nhất:</span>
            <span className="text-gray-500 ml-2 hover:text-blue-600 cursor-pointer">Ung thư, Nội tiết nữ, Bồi bổ, Collagen ...</span>
          </div>
        </div>
      </div>
    </header>
  );
}