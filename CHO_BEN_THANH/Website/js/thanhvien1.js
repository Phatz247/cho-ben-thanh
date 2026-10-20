/* 
===================================================================
THANH VIEN: Thanh vien 1 (Nhom truong - Phu trach Nen tang Website)
TRANG/CHUC NANG: thanhvien1.js - Chuc nang Accordion dong/mo FAQ tai Trang chu (index.html)
MO TA: Xu ly su kien click vao cau hoi thuong gap de bat/tat hien thi cau tra loi tuong ung, giup nguoi dung de dang tra cuu thong tin ve Cho Ben Thanh.
===================================================================
*/

// Cho su kien trang tai xong toan bo HTML roi moi thuc thi code JS
document.addEventListener('DOMContentLoaded', function () {

  // --- Buoc 1: Lay phan tu HTML ---
  // Lay danh sach tat ca cac nut cau hoi trong khu vuc FAQ bang querySelectorAll
  const danhSachNutFaq = document.querySelectorAll('.faq-nut-hoi');

  // --- Buoc 2: Khai bao du lieu hoac bien ---
  // Kiem tra neu trang hien tai khong co khu vuc FAQ thi khong chay tiep de tranh loi
  if (!danhSachNutFaq || danhSachNutFaq.length === 0) {
    return;
  }

  // --- Buoc 3: Gan su kien ---
  // Dung vong lap forEach de duyet qua tung nut cau hoi va lang nghe su kien click
  danhSachNutFaq.forEach(function (nutHoi) {
    nutHoi.addEventListener('click', function () {

      // Lay the cha chua nut nay (chinh la the co class .faq-muc)
      const mucFaqHienTai = this.parentElement;

      // --- Buoc 4: Kiem tra dieu kien ---
      // Kiem tra xem muc nay co dang duoc mo hay khong (thong qua class .dang-mo)
      const dangMo = mucFaqHienTai.classList.contains('dang-mo');

      // --- Buoc 5: Cap nhat giao dien ---
      // Neu muon dong cac cau hoi khac khi mo mot cau hoi moi:
      // Duyet qua tat ca cac the .faq-muc va go bo class .dang-mo
      const tatCaMucFaq = document.querySelectorAll('.faq-muc');
      tatCaMucFaq.forEach(function (muc) {
        muc.classList.remove('dang-mo');
      });

      // Neu muc truoc do chua mo, bay gio them class de mo ra
      if (!dangMo) {
        mucFaqHienTai.classList.add('dang-mo');
      }

      // --- Buoc 6: Xu ly truong hop dac biet ---
      // Neu muc truoc do da mo, viec remove class o tren da giup dong lai hoan toan.
      // Day la co che toggle thong minh giup giao dien luon gon gang, chuyen nghiep.
    });
  });

});
