import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import Sidebar from '@/components/Sidebar';
import BannerCarousel from '@/components/BannerCarousel';

// Khai báo kiểu dữ liệu
interface Product {
  id: string;
  name: string;
  price: number;
  stock_quantity: number;
  image_url: string;
}

// Hàm lấy dữ liệu
async function getProducts() {
  const { data } = await supabase.from('products').select('*').eq('is_active', true);
  return (data as Product[]) || [];
}

// ----------------------------------------------------------------------
// 1. COMPONENT MỚI: Dàn khung 3 cột (Hero Section)
// ----------------------------------------------------------------------
const HeroSection = () => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
    
    {/* CỘT TRÁI (3/12): Danh mục sản phẩm dọc */}
    <div className="lg:col-span-3">
      <Sidebar />
    </div>

    {/* CỘT GIỮA (6/12): Khu vực Banner Quảng cáo */}
    <div className="lg:col-span-6 flex flex-col gap-4">
      {/* Banner Lớn tự động trượt */}
      <BannerCarousel />
      {/* 3 Banner Nhỏ */}
      <div className="grid grid-cols-3 gap-4 h-32 md:h-40">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center text-xs text-gray-400 text-center p-2">Banner Phụ 1</div>
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center text-xs text-gray-400 text-center p-2">Banner Phụ 2</div>
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center text-xs text-gray-400 text-center p-2">Banner Phụ 3</div>
      </div>
    </div>

    {/* CỘT PHẢI (3/12): Chính sách, Video & Nhận tin */}
    <div className="lg:col-span-3 flex flex-col gap-4">
      {/* Khối 1: Chính sách */}
      <div className="shadow-sm">
        <div className="bg-blue-600 text-white font-bold uppercase px-4 py-2 text-center">
          CHÍNH SÁCH BÁN HÀNG
        </div>
        <div className="bg-white border border-t-0 p-4 space-y-4 text-sm font-medium text-gray-700">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 text-white w-6 h-6 rounded flex items-center justify-center">🚚</div> 
            Giao hàng tận nơi
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 text-white w-6 h-6 rounded flex items-center justify-center">💲</div> 
            Thanh toán khi nhận hàng
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 text-white w-6 h-6 rounded flex items-center justify-center">🔄</div> 
            Đổi trả miễn phí trong 7 ngày
          </div>
        </div>
      </div>

      {/* Khối 2: Logo thương hiệu (Để trống) */}
      <div className="bg-white border p-2 flex items-center justify-center text-gray-400 text-sm h-24 border-dashed shadow-sm text-center">
        [Logo Đối Tác Y Tế] <br/> (Pfizer, GSK, Roche...)
      </div>

      {/* Khối 3: Video Thumbnail */}
      <div className="bg-gray-200 border p-2 flex items-center justify-center text-gray-500 text-sm h-32 border-dashed relative shadow-sm">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-12 h-8 bg-red-600 text-white flex items-center justify-center rounded shadow-lg">
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
          </div>
        </div>
        <span className="opacity-50">[Ảnh Thumbnail Video Bác Sĩ]</span>
      </div>

      {/* Khối 4: Form Đăng ký nhận tin */}
      <div className="bg-orange-500 p-4 rounded text-center shadow-md">
        <div className="text-white font-bold mb-3 uppercase text-lg">ĐĂNG KÝ NHẬN TIN</div>
        <div className="flex flex-col gap-2">
          <input type="email" placeholder="Nhập địa chỉ email..." className="w-full px-3 py-2 text-sm rounded outline-none text-gray-800" />
          <button className="bg-red-700 text-white px-3 py-2 text-sm font-bold rounded hover:bg-red-800 transition uppercase shadow-sm">
            ĐĂNG KÝ
          </button>
        </div>
      </div>
    </div>

  </div>
);


// ----------------------------------------------------------------------
// 2. CÁC COMPONENT TÁI SỬ DỤNG (Đã làm ở bước trước)
// ----------------------------------------------------------------------
const ProductCard = ({ product }: { product: any }) => (
  <div className="bg-white border rounded hover:shadow-lg transition-shadow duration-300 p-3 flex flex-col items-center text-center h-full">
    <div className="w-full h-40 mb-3 flex items-center justify-center overflow-hidden">
      {product.image_url ? (
        <img src={product.image_url} alt={product.name} className="max-h-full object-contain" />
      ) : (
        <div className="text-gray-300 text-sm">[Chưa có ảnh]</div>
      )}
    </div>
    <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2 h-10">{product.name}</h3>
    <div className="mt-auto w-full">
      {product.old_price && (
        <p className="text-gray-400 line-through text-xs">{product.old_price.toLocaleString('vi-VN')} đ</p>
      )}
      <p className="text-red-600 font-bold text-lg mb-3">{product.price.toLocaleString('vi-VN')} đ</p>
      <a 
        href="https://zalo.me/0904089796" 
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition text-sm flex items-center justify-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        LIÊN HỆ
      </a>
    </div>
  </div>
);

const SectionHeader = ({ title, link = "#" }: { title: string, link?: string }) => (
  <div className="bg-blue-600 text-white flex justify-between items-center px-4 py-2 rounded-t mb-4">
    <h2 className="font-bold uppercase flex items-center gap-2">
      <span className="text-yellow-300 text-xl leading-none">★</span> {title}
    </h2>
    <Link href={link} className="text-sm font-medium hover:text-yellow-300 flex items-center gap-1">
      <span className="bg-white text-blue-600 w-4 h-4 flex items-center justify-center rounded-sm text-xs font-bold">+</span> Xem thêm
    </Link>
  </div>
);

// ----------------------------------------------------------------------
// 3. MAIN COMPONENT (Giao diện chính)
// ----------------------------------------------------------------------
export default async function Home() {
  const realProducts = await getProducts();
  const mockProducts = Array(5).fill({
    name: "Sản phẩm minh họa",
    price: 150000,
    old_price: 180000,
    image_url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500"
  });

  return (
    <div className="flex flex-col gap-8">
      
      {/* 🚀 CHÈN KHỐI HERO SECTION (3 CỘT) LÊN ĐẦU TIÊN Ở ĐÂY */}
      <HeroSection />

      {/* CÁC KHỐI SẢN PHẨM BÊN DƯỚI (Giữ nguyên) */}
      <section>
        <SectionHeader title="SẢN PHẨM BÁN CHẠY" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {realProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {mockProducts.slice(realProducts.length).map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="SẢN PHẨM KHUYẾN MẠI" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {mockProducts.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </section>

      {/* 1. KHỐI: THỰC PHẨM CHỨC NĂNG */}
      <section>
        <SectionHeader title="THỰC PHẨM CHỨC NĂNG" link="/danh-muc/thuc-pham-chuc-nang" />
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/5 min-h-[400px] bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 rounded p-4 text-center">
            <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span className="font-bold text-gray-500">Banner Cột Dọc</span>
            <span className="text-sm">(280x600px)</span>
          </div>
          <div className="w-full md:w-4/5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockProducts.slice(0, 4).map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 2. KHỐI: DÀNH CHO PHỤ NỮ */}
      <section>
        <SectionHeader title="DÀNH CHO PHỤ NỮ" link="/danh-muc/danh-cho-phu-nu" />
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/5 min-h-[400px] bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 rounded p-4 text-center">
            <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span className="font-bold text-gray-500">Banner Phụ Nữ</span>
            <span className="text-sm">(280x600px)</span>
          </div>
          <div className="w-full md:w-4/5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockProducts.slice(0, 4).map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. KHỐI: HỒNG SÂM LINH CHI */}
      <section>
        <SectionHeader title="HỒNG SÂM LINH CHI" link="/danh-muc/hong-sam-linh-chi" />
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/5 min-h-[400px] bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 rounded p-4 text-center">
            <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span className="font-bold text-gray-500">Banner Hồng Sâm</span>
            <span className="text-sm">(280x600px)</span>
          </div>
          <div className="w-full md:w-4/5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockProducts.slice(0, 4).map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. KHỐI: CAO, DẦU GIẢM ĐAU */}
      <section>
        <SectionHeader title="CAO, DẦU GIẢM ĐAU" link="/danh-muc/cao-dau-giam-dau" />
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/5 min-h-[400px] bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 rounded p-4 text-center">
            <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span className="font-bold text-gray-500">Banner Dầu Nóng</span>
            <span className="text-sm">(280x600px)</span>
          </div>
          <div className="w-full md:w-4/5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockProducts.slice(0, 4).map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}