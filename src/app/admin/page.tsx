import Link from 'next/link';
import { supabase } from '@/lib/supabase';

// 1. Khai báo kiểu dữ liệu
interface Product {
  id: string;
  name: string;
  price: number;
  stock_quantity: number;
  is_active: boolean;
}

// 2. Hàm gọi dữ liệu từ Supabase (Lấy tất cả, sắp xếp theo tên)
async function getAdminProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    console.error('Lỗi lấy dữ liệu admin:', error);
    return [];
  }
  return data as Product[];
}

export default async function AdminPage() {
  // 3. Lấy dữ liệu
  const products = await getAdminProducts();

  return (
    <div className="max-w-6xl mx-auto py-8">
      {/* Tiêu đề và Nút điều hướng */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Quản lý kho thuốc</h1>
        <div className="flex gap-4">
          <Link href="/" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium">
            ← Về trang chủ
          </Link>
          <Link href="/admin/add" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-sm">
            + Thêm sản phẩm
            </Link>
        </div>
      </div>

      {/* Bảng dữ liệu sản phẩm */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-4 font-semibold text-gray-600">Tên sản phẩm</th>
              <th className="p-4 font-semibold text-gray-600">Giá bán</th>
              <th className="p-4 font-semibold text-gray-600">Tồn kho</th>
              <th className="p-4 font-semibold text-gray-600">Trạng thái</th>
              <th className="p-4 font-semibold text-gray-600 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td className="p-4 text-gray-500 text-center italic" colSpan={5}>
                  Kho chưa có sản phẩm nào.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-4 font-medium text-gray-800">{product.name}</td>
                  <td className="p-4 text-red-600 font-semibold">
                    {product.price.toLocaleString('vi-VN')} đ
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-sm font-semibold ${product.stock_quantity > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {product.stock_quantity}
                    </span>
                  </td>
                  <td className="p-4">
                    {product.is_active ? (
                      <span className="text-blue-600 font-medium">Đang bán</span>
                    ) : (
                      <span className="text-gray-500">Ngừng bán</span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-blue-600 hover:underline mr-4 font-medium">Sửa</button>
                    <button className="text-red-600 hover:underline font-medium">Xóa</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}