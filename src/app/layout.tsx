import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nhà Thuốc 118 - Danh mục sản phẩm",
  description: "Hệ thống quản lý và giới thiệu sản phẩm của Nhà Thuốc 118",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="bg-gray-50 min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        
        {/* Nút Zalo nổi góc màn hình */}
        <a
          href="https://zalo.me/0904089796"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 hover:scale-110 transition-all z-50 flex items-center justify-center"
          aria-label="Chat Zalo"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.4 11.6c0-4.8-4.5-8.8-9.8-8.8-5.4 0-9.8 3.9-9.8 8.8 0 2.5 1.2 4.7 3.2 6.3-.2 1.3-1.1 3-1.2 3.1-.1.2-.1.3 0 .5.1.1.2.2.4.2.3 0 1.9-.3 3.3-1.2 1.2.4 2.6.7 4 .7 5.4 0 9.8-3.9 9.8-8.8zM14.6 15c-.2.2-.4.3-.7.3h-3.4c-.1 0-.2-.1-.2-.2v-.9c0-.1.1-.2.2-.2h2.5l-2.6-3.2c-.1-.1-.1-.2 0-.3v-.1h3.3c.1 0 .2.1.2.2v.9c0 .1-.1.2-.2.2h-2.3l2.5 3c.1.1.1.2.1.3v.1h.1zM17.5 14.8c0 .2-.1.3-.3.3h-1.5c-.2 0-.3-.1-.3-.3v-4.5c0-.2.1-.3.3-.3h1.5c.2 0 .3.1.3.3v4.5zm-8.8.2c-.2.2-.4.3-.7.3H6.5c-.1 0-.2-.1-.2-.2v-.9c0-.1.1-.2.2-.2h2.5L6.4 10.8c-.1-.1-.1-.2 0-.3v-.1h3.3c.1 0 .2.1.2.2v.9c0 .1-.1.2-.2.2H7.6l2.5 3c.1.1.1.2.1.3v.1h.1z"/>
          </svg>
        </a>
      
        
      </body> 
    </html>
  );
}