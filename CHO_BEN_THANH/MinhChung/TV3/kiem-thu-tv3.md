# BIÊN BẢN KIỂM THỬ THỰC TẾ – GIAI ĐOẠN 3 (THÀNH VIÊN 3)
**Học phần:** Thiết kế Web (MMC403)  
**Người thực hiện:** Thành viên 3  
**Phạm vi:** `kham-pha.html`, `thu-vien.html`, `lien-he.html`, `css/thanhvien3.css`, `js/thanhvien3.js`  
**Ngày kiểm thử:** 17/10/2026  
**Môi trường kiểm thử:** Google Chrome (Desktop 1366x768 & Mobile 390x844 DevTools)

---

### BẢNG KỊCH BẢN KIỂM THỬ VÀ KẾT QUẢ THỰC TẾ

| Mã KT | Chức năng / Thành phần | Dữ liệu thử / Thao tác | Kết quả mong đợi | Kết quả thực tế | Trạng thái | Lỗi & Cách khắc phục |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| **TC3-01** | Tải trang Khám phá | Mở `kham-pha.html` | Hiển thị Infographic lộ trình 5 bước và Bảng dữ liệu tiện ích 4 cửa | Giao diện hiển thị sắc nét, infographic khổ dọc đẹp mắt | **ĐẠT** | Không có |
| **TC3-02** | Bảng dữ liệu tiện ích | Kiểm tra thẻ `<table>`, `<thead>`, `<tbody>` | Bảng hiển thị 6 cột thông tin, xen kẽ màu nền kem nhẹ, có nhãn Đang Mở | Bảng chuẩn HTML Semantic, hỗ trợ thanh cuộn ngang trên mobile | **ĐẠT** | Không có |
| **TC3-03** | Tải trang Thư viện | Mở `thu-vien.html` | Hiển thị lưới hình ảnh di sản có gắn nhãn chú thích Hình 3.2 đến 3.9 | Lưới 3 cột Desktop chia đều, hover phóng to ảnh nhẹ nhàng | **ĐẠT** | Không có |
| **TC3-04** | Tải trang Liên hệ | Mở `lien-he.html` | Hiển thị khối địa chỉ, điện thoại, email và biểu mẫu góp ý 5 trường | Bố cục 2 cột cân đối, các ô input chuẩn kích thước | **ĐẠT** | Không có |
| **TC3-05** | Tương thích Navbar & Logo | Kiểm tra header trên cả 3 trang TV3 | Có logo chính thức mới, menu điều hướng chỉ đúng trang đang mở | Chuẩn 100% đồng bộ toàn hệ thống | **ĐẠT** | Không có |
| **TC3-06** | Responsive Desktop (1366px) | Kiểm tra ở độ phân giải 1366px | Bố cục gọn gàng trong khung tối đa 1200px | Khung canh giữa chuẩn xác | **ĐẠT** | Không có |
| **TC3-07** | Responsive Mobile (390px) | Bật F12 mô phỏng iPhone (390px) | Form và bảng dữ liệu không bị tràn ngang | Bảng có khung cuộn cảm ứng tiện lợi, form xếp 1 cột dọc | **ĐẠT** | Không có |
| **FRM-01** | Kiểm tra form rỗng (Validation) | Để trống toàn bộ 5 trường và nhấn nút *"Gửi Ý Kiến Đóng Góp Ngay"* | Ngăn chặn submit, viền ô chuyển màu đỏ `#D93025` và hiển thị thông báo lỗi dưới từng ô | Toàn bộ 5 trường hiển thị câu nhắc lỗi tiếng Việt rõ ràng | **ĐẠT** | Không có |
| **FRM-02** | Kiểm tra Email & SĐT sai định dạng | Nhập Email: `abc` (thiếu @ và tên miền), SĐT: `12345` (chưa đủ 10 số) | Báo lỗi định dạng email và số điện thoại Việt Nam (10 số bắt đầu bằng 0) | Thông báo lỗi xuất hiện ngay dưới trường nhập sai | **ĐẠT** | Không có |
| **FRM-03** | Gửi form thành công (Dữ liệu chuẩn) | Nhập: Tên "Nguyễn Hoàng Nam", Email "hoangnam@gmail.com", SĐT "0909123456", chọn chủ đề "Văn hóa", nội dung > 10 ký tự | Hiển thị hộp thông báo màu xanh ghi nhận ý kiến, tự cuộn tới thông báo và reset form | Hộp thông báo màu xanh xuất hiện trang trọng, form được làm mới | **ĐẠT** | Không có |

---

### TỔNG HỢP MINH CHỨNG ĐÃ THU THẬP
1. `MinhChung/TV3/minh-chung-01-form-loi.png`: Ảnh chụp màn hình khi form phát hiện dữ liệu rỗng/sai.
2. `MinhChung/TV3/minh-chung-02-form-thanh-cong.png`: Ảnh chụp màn hình khi gửi biểu mẫu hợp lệ thành công.
3. `MinhChung/TV3/minh-chung-03-bang-du-lieu-infographic.png`: Ảnh chụp Bảng dữ liệu tiện ích và Infographic.
4. `MinhChung/TV3/minh-chung-04-thu-vien-anh.png`: Ảnh chụp Thư viện ảnh di sản kèm chú thích học thuật.
5. `MinhChung/TV3/video-quay-kiem-thu-tv3.webp`: Video quay toàn bộ quy trình kiểm thử form và duyệt các trang TV3.
