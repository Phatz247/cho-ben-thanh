# BIÊN BẢN KIỂM THỬ THỰC TẾ – GIAI ĐOẠN 2 (THÀNH VIÊN 2)
**Học phần:** Thiết kế Web (MMC403)  
**Người thực hiện:** Thành viên 2  
**Phạm vi:** `nhip-song.html`, `van-hoa-mua-sam.html`, `am-thuc.html`, `css/thanhvien2.css`, `js/thanhvien2.js`  
**Ngày kiểm thử:** 17/10/2026  
**Môi trường kiểm thử:** Google Chrome (Desktop 1366x768 & Mobile 390x844 DevTools)

---

### BẢNG KỊCH BẢN KIỂM THỬ VÀ KẾT QUẢ THỰC TẾ

| Mã KT | Chức năng / Thành phần | Dữ liệu thử / Thao tác | Kết quả mong đợi | Kết quả thực tế | Trạng thái | Lỗi & Cách khắc phục |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| **TC2-01** | Tải trang Nhịp sống | Mở `nhip-song.html` trên trình duyệt | Hiển thị Header có logo mới, Hero banner, khối giới thiệu, ảnh chợ đêm, bộ lọc và poster | Trang tải trơn tru, đúng bố cục và không có lỗi Console | **ĐẠT** | Không có |
| **TC2-02** | Tải trang Văn hóa mua sắm | Mở `van-hoa-mua-sam.html` | Hiển thị khối chân dung tiểu thương, hộp 4 mẹo mặc cả và 4 nhóm hàng lưu niệm | Giao diện thanh lịch, thẻ mẹo nền sáng viền vàng sang trọng | **ĐẠT** | Không có |
| **TC2-03** | Tải Bài chuyên sâu Ẩm thực | Mở `am-thuc.html` | Hiển thị bàn tiệc ẩm thực có chú thích Hình 2.3 và 3 thẻ món ăn kèm giá tham khảo | Ảnh bàn tiệc sắc nét, thẻ món ăn chia 3 cột thẳng hàng | **ĐẠT** | Không có |
| **TC2-04** | Hiển thị Poster truyền thông | Kiểm tra poster tại `nhip-song.html` | Poster *Khám Phá Chợ Bến Thành* hiển thị ngay ngắn, có chú thích Hình 2.2 | Poster khổ dọc chuẩn tỷ lệ 3:4, màu sắc hoài cổ ấn tượng | **ĐẠT** | Không có |
| **TC2-05** | Tương thích Navbar | Bấm chuyển đổi giữa các trang TV1 và TV2 | Chuyển trang mượt mà, class `.trang-hien-tai` bôi đỏ đúng trang đang xem | Điều hướng chính xác 100% bằng đường dẫn tương đối | **ĐẠT** | Không có |
| **TC2-06** | Hiển thị ảnh và chú thích | Kiểm tra các thẻ `<figure>` và `<figcaption>` | Có đầy đủ Hình 2.1, 2.2, 2.3 đúng quy chuẩn học thuật | Hiển thị chuẩn xác, không bị vỡ khung | **ĐẠT** | Không có |
| **TC2-07** | Responsive Desktop (1366px) | Kiểm tra ở cửa sổ độ rộng 1366px | Lưới thẻ trải nghiệm và món ăn chia 3 cột đều đặn | Không tràn khung, canh giữa hoàn hảo | **ĐẠT** | Không có |
| **TC2-08** | Responsive Mobile (390px) | Bật F12 mô phỏng iPhone (390px) | Lưới tự co lại thành 1 cột dọc, các nút lọc ngắt dòng tự nhiên | Trải nghiệm mượt mà, không xuất hiện thanh cuộn ngang | **ĐẠT** | Không có |
| **FLT-01** | Lọc theo danh mục Chợ Ngày | Nhấp nút *"☀️ Chợ Ngày Truyền Thống"* | Chỉ hiển thị các thẻ có `data-danh-muc="cho-ngay"`, các thẻ khác ẩn đi | Thẻ sạp vải và đồ thủ công hiển thị, các thẻ khác biến mất | **ĐẠT** | Không có |
| **FLT-02** | Lọc theo danh mục Chợ Đêm | Nhấp nút *"🌙 Chợ Đêm Lung Linh"* | Chỉ hiển thị các thẻ có `data-danh-muc="cho-dem"` | Thẻ phố đi bộ và hải sản nướng đêm hiển thị chính xác | **ĐẠT** | Không có |
| **FLT-03** | Khôi phục Tất cả hoạt động | Nhấp nút *"Tất Cả Hoạt Động"* | Toàn bộ 6 thẻ trải nghiệm xuất hiện trở lại đầy đủ | Toàn bộ danh sách card xuất hiện tức thì, không bị giật lag | **ĐẠT** | Không có |

---

### TỔNG HỢP MINH CHỨNG ĐÃ THU THẬP
1. `MinhChung/TV2/minh-chung-01-nhip-song.png`: Ảnh chụp giao diện Nhịp sống và Bộ lọc.
2. `MinhChung/TV2/minh-chung-02-mua-sam.png`: Ảnh chụp trang Văn hóa mua sắm và tiểu thương.
3. `MinhChung/TV2/minh-chung-03-am-thuc.png`: Ảnh chụp bài nghiên cứu chuyên sâu Ẩm thực Nam Bộ.
4. `MinhChung/TV2/video-quay-kiem-thu-tv2.webp`: Video quay toàn bộ quy trình kiểm thử bộ lọc trải nghiệm trên trình duyệt.
