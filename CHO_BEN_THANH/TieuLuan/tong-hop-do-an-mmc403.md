# BÁO CÁO TỔNG KẾT ĐỒ ÁN MÔN THIẾT KẾ WEB (MMC403)
## CHỦ ĐỀ: CHỢ BẾN THÀNH – VĂN HÓA VÀ NHỊP SỐNG

---

### 1. BẢNG KHAI BÁO TỔNG HỢP VÀ ĐỐI CHIẾU TIÊU CHÍ CHẤM ĐIỂM

| Tiêu chuẩn bắt buộc từ Giảng viên | Mức độ đáp ứng thực tế trong đồ án | Vị trí minh chứng mã nguồn |
| :--- | :--- | :--- |
| **1. Tối thiểu 9 trang HTML độc lập** | **ĐẠT (9/9 trang):** Mỗi trang có nội dung hoàn chỉnh, không dùng trang trống | `Website/*.html` |
| **2. Nhóm 3 thành viên (3 trang/người)** | **ĐẠT:** TV1 (Trang 1,2,3), TV2 (Trang 4,5,6), TV3 (Trang 7,8,9) | Xem chi tiết bảng phân công |
| **3. Ba chuyên đề văn hóa** | **ĐẠT:** Lịch sử & Kiến trúc; Nhịp sống & Mua sắm; Trải nghiệm & Kết nối | Cấu trúc chuyên đề mạch lạc |
| **4. Hai bài viết nghiên cứu chuyên sâu** | **ĐẠT:**<br>• Bài chuyên sâu 1: `kien-truc.html` (Kiến trúc Đông Dương, Tháp đồng hồ, 4 cổng, Gốm Biên Hòa)<br>• Bài chuyên sâu 2: `am-thuc.html` (Tinh hoa ẩm thực, Bún riêu 40 năm, Bánh xèo, Chè ngũ sắc) | `kien-truc.html`<br>`am-thuc.html` |
| **5. Hành trình khám phá gợi ý** | **ĐẠT:** Lộ trình 5 bước theo khung giờ từ sáng sớm đến đêm muộn | `kham-pha.html` |
| **6. $\ge$ 9 hình ảnh/tư liệu có chú thích** | **ĐẠT (10 tư liệu):** Từ Hình 1.1 đến Hình 3.9, định dạng chuẩn thẻ `<figure>` và `<figcaption>` | `Website/thu-vien.html` |
| **7. $\ge$ 6 câu hỏi FAQ giải đáp** | **ĐẠT:** 6 câu hỏi thực tế kèm câu trả lời chi tiết tại trang chủ | `Website/index.html` |
| **8. Có ít nhất một bảng dữ liệu** | **ĐẠT:** Bảng thông tin tiện ích 6 cột, sơ đồ 4 cửa và kết nối giao thông | `Website/kham-pha.html` |
| **9. Bộ 3 ấn phẩm truyền thông thiết kế riêng** | **ĐẠT:**<br>• Banner website: `images/banner/banner-chinh.jpg` (TV1)<br>• Poster tuyến khám phá: `images/poster/poster-tuyen-kham-pha.jpg` (TV2)<br>• Infographic hành trình: `images/infographic/infographic-hanh-trinh.jpg` (TV3) | `Website/images/*`<br>`ThietKe/*` |
| **10. Tối thiểu 3 chức năng JavaScript thuần** | **ĐẠT (3 chức năng độc lập):**<br>• JS 1: Accordion FAQ đóng/mở (`thanhvien1.js`)<br>• JS 2: Bộ lọc trải nghiệm theo danh mục (`thanhvien2.js`)<br>• JS 3: Kiểm tra hợp lệ Form Validation 5 trường (`thanhvien3.js`) | `Website/js/thanhvien1.js`<br>`Website/js/thanhvien2.js`<br>`Website/js/thanhvien3.js` |
| **11. Form $\ge$ 5 trường kiểm tra dữ liệu** | **ĐẠT (5 trường):** Họ tên, Email, Điện thoại, Chủ đề, Nội dung; có báo lỗi đỏ và hộp thông báo xanh | `Website/lien-he.html` |
| **12. Responsive Desktop & Mobile** | **ĐẠT:** Tối ưu mượt mà tại Desktop 1366px và Mobile 390px | `css/common.css`, `thanhvien*.css` |
| **13. Chạy trực tiếp offline bằng index.html** | **ĐẠT:** Toàn bộ liên kết là đường dẫn tương đối, không cần backend NodeJS hay server | Nhấp đúp chuột vào `index.html` |
| **14. Minh chứng quá trình làm việc độc lập** | **ĐẠT:** Lưu trữ 3 video webp quay màn hình thực tế và hơn 12 ảnh chụp màn hình kiểm thử | `MinhChung/TV1/`<br>`MinhChung/TV2/`<br>`MinhChung/TV3/` |

---

### 2. BẢN KHAI BÁO SỬ DỤNG AI (AI USAGE DISCLOSURE)
- **Mục đích:** Sử dụng Trợ lý AI làm công cụ hỗ trợ tư vấn thiết kế UI/UX, hỗ trợ chuẩn hóa cấu trúc thư mục, đề xuất phương pháp viết code sư phạm sạch đẹp dễ giải thích và hỗ trợ tạo hình ảnh minh họa di sản có độ phân giải cao phục vụ học tập phi thương mại.
- **Cam kết:** Toàn bộ sinh viên trong nhóm đã nắm vững 100% bản chất từng dòng lệnh HTML, CSS và JavaScript, tự tay kiểm thử từng ca thử nghiệm thực tế và có khả năng trả lời mọi câu hỏi vấn đáp trực tiếp từ Giảng viên.

---

### 3. NGUỒN TÀI LIỆU THAM KHẢO VÀ LƯU TRỮ
1. *Địa chí Văn hóa Thành phố Hồ Chí Minh* – Nhà xuất bản Tổng hợp TP.HCM.
2. *Lịch sử Chợ Bến Thành 1914 – 2024* – Ban Quản lý Chợ Bến Thành và Sở Văn hóa & Thể thao TP.HCM.
3. *Tạp chí Du lịch & Ẩm thực Food and Wine* – Chuyên đề Chợ truyền thống Đông Nam Á.
4. *Bộ phù điêu gốm Biên Hòa 1952* – Tư liệu Bảo tàng Lịch sử TP. Hồ Chí Minh.
5. *Chuẩn mã nguồn ngữ nghĩa W3C Semantic HTML5 & CSS Grid Specification*.
