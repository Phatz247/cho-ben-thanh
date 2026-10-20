# Chợ Bến Thành – Văn hóa và Nhịp sống

Bài tập nhóm môn **Thiết kế Web (MMC403)**.

Nhóm xây dựng một website giới thiệu Chợ Bến Thành qua ba mảng nội dung: lịch sử – kiến trúc, văn hóa – nhịp sống và trải nghiệm tham quan. Website được làm bằng **HTML, CSS và JavaScript thuần**, không dùng framework hay cơ sở dữ liệu.

## Các trang của website

| Trang | Nội dung |
| --- | --- |
| `index.html` | Trang chủ, giới thiệu đề tài và mục hỏi đáp (FAQ) |
| `lich-su.html` | Lịch sử Chợ Bến Thành |
| `kien-truc.html` | Kiến trúc và các chi tiết đặc trưng |
| `nhip-song.html` | Hoạt động chợ ngày, chợ đêm và bộ lọc trải nghiệm |
| `van-hoa-mua-sam.html` | Văn hóa mua sắm, tiểu thương và các nhóm hàng |
| `am-thuc.html` | Một số món ăn gắn với khu vực chợ |
| `kham-pha.html` | Gợi ý lịch trình và bảng thông tin tiện ích |
| `thu-vien.html` | Thư viện hình ảnh |
| `lien-he.html` | Biểu mẫu góp ý |

## Phân công nhóm

| Thành viên | Phần thực hiện | File chính |
| --- | --- | --- |
| **Thành viên 1 (trưởng nhóm)** | Trang chủ, Lịch sử, Kiến trúc; giao diện chung; FAQ đóng/mở | `index.html`, `lich-su.html`, `kien-truc.html`, `css/common.css`, `css/thanhvien1.css`, `js/thanhvien1.js` |
| **Thành viên 2** | Nhịp sống, Văn hóa mua sắm, Ẩm thực; bộ lọc danh mục | `nhip-song.html`, `van-hoa-mua-sam.html`, `am-thuc.html`, `css/thanhvien2.css`, `js/thanhvien2.js` |
| **Thành viên 3** | Khám phá, Thư viện, Liên hệ; kiểm tra dữ liệu biểu mẫu | `kham-pha.html`, `thu-vien.html`, `lien-he.html`, `css/thanhvien3.css`, `js/thanhvien3.js` |

Ngoài phần code, mỗi thành viên thực hiện một ấn phẩm: thành viên 1 làm banner trang chủ, thành viên 2 làm poster giới thiệu tuyến khám phá và thành viên 3 làm infographic lịch trình.

## Cấu trúc thư mục

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

- `Website/`: mã nguồn các trang và hình ảnh dùng trên website.
- `ThietKe/`: file thiết kế banner, poster và infographic.
- `MinhChung/`: ảnh chụp, video hoặc biên bản kiểm thử của từng thành viên.
- `TieuLuan/`: báo cáo nhóm.

## Cách chạy

1. Giải nén thư mục dự án (nếu đang ở dạng `.zip`).
2. Mở thư mục `CHO_BEN_THANH/Website/`.
3. Nhấp đúp `index.html` để xem trên trình duyệt. Có thể dùng Chrome hoặc Edge.
4. Chọn các mục trên thanh menu để chuyển trang.

Các trang HTML liên kết bằng đường dẫn tương đối, nên **không cần cài Node.js hay chạy máy chủ** để xem bản website tĩnh này.

## Những chức năng cần xem thử

- **FAQ ở trang chủ:** bấm một câu hỏi để mở phần trả lời, bấm tiếp để đóng.
- **Bộ lọc ở trang Nhịp sống:** chọn nhóm hoạt động để xem các thẻ tương ứng; chọn “Tất cả hoạt động” để hiện lại toàn bộ.
- **Form ở trang Liên hệ:** thử để trống trường bắt buộc, nhập sai email hoặc số điện thoại rồi bấm gửi để xem thông báo lỗi.

**Lưu ý:** Form hiện được dùng để minh họa việc kiểm tra dữ liệu bằng JavaScript phía trình duyệt. Dự án chưa có backend để nhận và lưu thông tin góp ý.

## Khi bàn giao

Mỗi thành viên kiểm tra các trang mình phụ trách, giữ nguyên tên file và đường dẫn đã thống nhất, sau đó lưu ảnh hoặc video minh chứng vào thư mục `MinhChung/TV1`, `TV2` hoặc `TV3`. Trước khi nộp, cả nhóm cần mở lại `index.html`, kiểm tra menu qua đủ 9 trang và xem có ảnh hoặc file CSS/JS nào bị thiếu đường dẫn không.

Dự án được thực hiện phục vụ học tập trong học phần MMC403.
