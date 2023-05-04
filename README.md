# airbnb
Lưu ý khi cài đặt TailwindCSS:
1. Thực hiện theo cú pháp trên trang TailwindCSS
2. Tạo file postcss.config.cjs
3. Ghi vào file vừa tạo nội dung này:
    module.exports = {
        plugins: {
        tailwindcss: {},
        autoprefixer: {},
        },
    }

1. Cài mongodb: vào folder api
2. Lên trang mongodb tạo database
3. Cấu hình trong file index.js
4. Cài thêm dotenv: yarn add dotenv
5. Duy trì đăng nhập dùng cookie: yarn add jsonwebtoken
6. Cài cookies vào folder api: npm install cookie-parser
7. Cài thư viện hỗ trợ download ảnh vào folder api: npm install image-downloader
8. Cài thêm thư viện hỗ trợ upload ảnh từ máy tính, cụ thể là middleware, chỉ định nơi lưu trữ: yarn add multer
9. Cài thêm thư viện hỗ trợ xử lý ngày tháng vào folder client: npm install date-fns