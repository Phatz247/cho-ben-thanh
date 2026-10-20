# ĐỒ ÁN MÔN THIẾT KẾ WEB (MMC403)
## CHỦ ĐỀ: CHỢ BẾN THÀNH – VĂN HÓA VÀ NHỊP SỐNG

### 1. THÔNG TIN NHÓM THỰC HIỆN
- **Đề tài:** Website Văn hóa & Di sản Chợ Bến Thành - Thành phố Hồ Chí Minh
- **Phong cách thiết kế:** Modern Vietnamese Cultural Magazine (Tạp chí di sản văn hóa Việt Nam đương đại)
- **Công nghệ sử dụng:** HTML5, CSS3 thuần (Flexbox & Grid), JavaScript thuần (ES6)

---

### 2. PHÂN CÔNG NHIỆM VỤ CHI TIẾT

| Thành viên | Trang phụ trách | File CSS & JS | Chức năng JS & Sản phẩm truyền thông |
| :--- | :--- | :--- | :--- |
| **Thành viên 1 (Trưởng nhóm)** | 1. `index.html` (Trang chủ)<br>2. `lich-su.html` (Lịch sử)<br>3. `kien-truc.html` (Kiến trúc chuyên sâu) | • `css/common.css`<br>• `css/thanhvien1.css`<br>• `js/thanhvien1.js` | • **JS:** Accordion FAQ hỏi đáp đóng mở<br>• **Media:** Banner nhận diện thương hiệu website |
| **Thành viên 2** | 4. `nhip-song.html` (Nhịp sống ngày & đêm)<br>5. `van-hoa-mua-sam.html` (Văn hóa mua sắm)<br>6. `am-thuc.html` (Ẩm thực chuyên sâu) | • `css/thanhvien2.css`<br>• `js/thanhvien2.js` | • **JS:** Bộ lọc trải nghiệm danh mục (Filter tabs)<br>• **Media:** Poster quảng bá tuyến khám phá |
| **Thành viên 3** | 7. `kham-pha.html` (Hành trình & Bảng số liệu)<br>8. `thu-vien.html` (Thư viện hình ảnh)<br>9. `lien-he.html` (Liên hệ & Góp ý) | • `css/thanhvien3.css`<br>• `js/thanhvien3.js` | • **JS:** Kiểm tra tính hợp lệ biểu mẫu (Form Validation 5 trường)<br>• **Media:** Infographic hướng dẫn hành trình |

---

### 3. CẤU TRÚC THƯ MỤC DỰ ÁN
```text
CHO_BEN_THANH/
├── Website/
│   ├── index.html
│   ├── lich-su.html
│   ├── kien-truc.html
│   ├── nhip-song.html
│   ├── van-hoa-mua-sam.html
│   ├── am-thuc.html
│   ├── kham-pha.html
│   ├── thu-vien.html
│   ├── lien-he.html
│   ├── css/
│   │   ├── common.css
│   │   ├── thanhvien1.css
│   │   ├── thanhvien2.css
│   │   └── thanhvien3.css
│   ├── js/
│   │   ├── thanhvien1.js
│   │   ├── thanhvien2.js
│   │   └── thanhvien3.js
│   └── images/
├── ThietKe/
├── MinhChung/
│   ├── TV1/
│   ├── TV2/
│   └── TV3/
├── TieuLuan/
└── README.md
```

---

### 4. HƯỚNG DẪN CHẠY VÀ KIỂM THỬ WEBSITE
1. Mở thư mục `CHO_BEN_THANH/Website/`.
2. Nhấp đúp chuột vào file `index.html` để mở trực tiếp trên trình duyệt (Google Chrome, Microsoft Edge, Firefox, Cốc Cốc, Safari...).
3. Website hoàn toàn sử dụng đường dẫn tương đối, không cần cài đặt Node.js hay Web Server backend.
