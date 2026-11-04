"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AddProductPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Hàm xử lý khi người dùng bấm Lưu
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Chặn hành vi load lại trang mặc định
    setIsSubmitting(true);

    // Lấy dữ liệu từ các ô input
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const price = Number(formData.get('price'));
    const stock_quantity = Number(formData.get('stock'));

    // Bắn dữ liệu lên Supabase
    const { error } = await supabase.from('products').insert({
      name,
      price,
      stock_quantity,
      is_active: true,
      // Tạm thời để trống category_id và image_url cho dễ test
    });

    setIsSubmitting(false);

    if (error) {
      alert('Lỗi thêm sản phẩm: ' + error.message);
    } else {
      alert('Thêm sản phẩm thành công!');
      router.push('/admin'); // Chuyển hướng về lại bảng quản trị
      router.refresh(); // Tải lại dữ liệu mới nhất
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin" className="text-gray-500 hover:text-gray-800 font-medium">
          ← Quay lại
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">Thêm sản phẩm mới</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border p-6 space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Tên sản phẩm</label>
          <input 
            type="text" 
            name="name" 
            required 
            placeholder="VD: Vitamin C 500mg..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Giá bán (VNĐ)</label>
            <input 
              type="number" 
              name="price" 
              required 
              min="0"
              placeholder="VD: 50000"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Số lượng tồn kho</label>
            <input 
              type="number" 
              name="stock" 
              required 
              min="0"
              placeholder="VD: 100"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full py-3 rounded-lg font-bold text-white transition mt-6 ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {isSubmitting ? 'Đang lưu dữ liệu...' : 'Lưu sản phẩm'}
        </button>
      </form>
    </div>
  );
}