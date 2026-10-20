/* 
===================================================================
THANH VIEN: Thanh vien 2 (Tran Thi B - Phu trach Van hoa va Nhip song)
TRANG/CHUC NANG: thanhvien2.js - Chuc nang Loc trai nghiem theo danh muc tai nhip-song.html
MO TA: Cho phep nguoi dung loc cac hoat dong trai nghiem Cho Ben Thanh theo cac chu de: Tat ca, Cho ngay, Cho dem, Am thuc va Mua sam.
===================================================================
*/

// Cho trinh duyet tai hoan tat cay DOM
document.addEventListener('DOMContentLoaded', function () {

  // --- Buoc 1: Lay phan tu HTML ---
  // Lay danh sach cac nut loc trong thanh dieu khien
  const danhSachNutLoc = document.querySelectorAll('.nut-loc');
  // Lay danh sach tat ca cac the trai nghiem can duoc loc
  const danhSachTheTraiNghiem = document.querySelectorAll('.the-trai-nghiem');

  // --- Buoc 2: Khai bao du lieu hoac bien ---
  // Kiem tra neu trang hien tai khong co bo loc thi thoat som de tranh loi Console
  if (!danhSachNutLoc || danhSachNutLoc.length === 0 || !danhSachTheTraiNghiem || danhSachTheTraiNghiem.length === 0) {
    return;
  }

  // --- Buoc 3: Gan su kien ---
  // Duyet qua tung nut loc va lang nghe su kien click
  danhSachNutLoc.forEach(function (nutHienTai) {
    nutHienTai.addEventListener('click', function () {

      // --- Buoc 4: Kiem tra dieu kien ---
      // Lay gia tri danh muc muon loc tu thuoc tinh data-danh-muc cua nut duoc bam
      const danhMucChon = this.getAttribute('data-danh-muc');

      // Cap nhat trang thai active tren thanh nut bam
      danhSachNutLoc.forEach(function (nut) {
        nut.classList.remove('dang-chon');
      });
      this.classList.add('dang-chon');

      // --- Buoc 5: Cap nhat giao dien ---
      // Duyet qua tat ca the trai nghiem de kiem tra xem the nao phu hop
      danhSachTheTraiNghiem.forEach(function (the) {
        const danhMucCuaThe = the.getAttribute('data-danh-muc');

        // Neu chon 'tat-ca' hoac the co danh muc trung voi danh muc duoc chon
        if (danhMucChon === 'tat-ca' || danhMucCuaThe === danhMucChon) {
          the.classList.remove('an'); // Hien thi the card
        } else {
          the.classList.add('an');    // An the card khoi luoi
        }
      });

      // --- Buoc 6: Xu ly truong hop dac biet ---
      // Neu khong tim thay the nao phu hop (truong hop du lieu mo rong sau nay),
      // giao dien van giu su on dinh ma khong gay loi JavaScript.
    });
  });

});
