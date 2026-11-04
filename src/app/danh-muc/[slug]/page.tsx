import Link from 'next/link';

// Component Thẻ Sản Phẩm (Đã dùng ở trang chủ)
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
        href="https://zalo.me/09xxxxxxx" 
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

// Định nghĩa props cho trang động
export default function CategoryPage({ 
  params, 
  searchParams 
}: { 
  params: { slug: string },
  searchParams: { page?: string }
}) {
  // Lấy số trang hiện tại từ URL (mặc định là trang 1)
  const currentPage = Number(searchParams.page) || 1;
  
  // Tạm thời tạo ra 15 sản phẩm giả lập để đổ đầy trang cho bạn xem bố cục
  const mockProducts = Array(15).fill(null).map((_, idx) => ({
    id: `prod-${idx}`,
    name: `Sản phẩm mẫu số ${idx + 1 + (currentPage - 1) * 15} - ${params.slug}`,
    price: 150000 + (idx * 10000),
    old_price: 200000 + (idx * 10000),
    image_url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500"
  }));

  // Định dạng lại tên danh mục từ URL (vd: danh-cho-phu-nu -> Dành cho phụ nữ)
  const formatTitle = (slug: string) => {
    const titles: Record<string, string> = {
      'danh-cho-phu-nu': 'Dành cho phụ nữ',
      'thuc-pham-chuc-nang': 'Thực phẩm chức năng',
      'hong-sam-linh-chi': 'Hồng sâm linh chi'
    };
    return titles[slug] || 'Danh mục sản phẩm';
  };

  const categoryTitle = formatTitle(params.slug);

  return (
    <div className="flex flex-col gap-6 bg-white p-4 rounded shadow-sm">
      
      {/* 1. Thanh điều hướng (Breadcrumb) */}
      <div className="bg-gray-50 border p-2 text-sm text-gray-600 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600 flex items-center gap-1">
          🏠 Trang chủ
        </Link>
        <span>›</span>
        <span className="text-gray-800 font-medium">{categoryTitle}</span>
      </div>

      {/* 2. Tiêu đề danh mục */}
      <h1 className="text-2xl font-bold text-gray-800 border-b pb-2">
        {categoryTitle}
      </h1>

      {/* 3. Lưới 15 Sản phẩm (3 Hàng x 5 Cột) */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* 4. Thanh Phân trang (Pagination) */}
      <div className="flex justify-center items-center gap-2 mt-8 mb-4">
        {/* Nút lùi */}
        {currentPage > 1 && (
          <Link href={`/danh-muc/${params.slug}?page=${currentPage - 1}`} className="w-8 h-8 flex items-center justify-center border text-gray-600 hover:bg-gray-100 rounded">
            ←
          </Link>
        )}
        
        {/* Các trang 1, 2, 3, 4 */}
        {[1, 2, 3, 4].map((pageNum) => (
          <Link 
            key={pageNum}
            href={`/danh-muc/${params.slug}?page=${pageNum}`}
            className={`w-8 h-8 flex items-center justify-center border rounded font-medium transition ${
              currentPage === pageNum 
                ? 'bg-blue-600 text-white border-blue-600' // Trang hiện tại màu xanh dương
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {pageNum}
          </Link>
        ))}

        {/* Nút tiến */}
        <Link href={`/danh-muc/${params.slug}?page=${currentPage + 1}`} className="w-8 h-8 flex items-center justify-center border text-gray-600 hover:bg-gray-100 rounded">
          →
        </Link>
      </div>

    </div>
  );
}