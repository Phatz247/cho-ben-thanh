/* 
===================================================================
THANH VIEN: Thanh vien 3 (Le Van C - Phu trach Trai nghiem va Lien he)
TRANG/CHUC NANG: thanhvien3.js - Chuc nang Kiem tra hop le bieu mau gop y (Form Validation)
MO TA: Kiem tra chat che 5 truong du lieu: Ho ten, Email, So dien thoai, Chu de gop y va Noi dung; hien thi thong bao loi ro rang hoac thong bao gui thanh cong.
===================================================================
*/

// Cho trinh duyet load xong DOM
document.addEventListener('DOMContentLoaded', function () {

  // --- Buoc 1: Lay phan tu HTML ---
  // Lay form gop y theo ID
  const formGopY = document.getElementById('formGopY');

  // Kiem tra neu trang khong co form thi dung lai de tranh bao loi Console
  if (!formGopY) {
    return;
  }

  // Lay cac truong nhap lieu
  const truongHoTen = document.getElementById('hoTen');
  const truongEmail = document.getElementById('email');
  const truongDienThoai = document.getElementById('dienThoai');
  const truongChuDe = document.getElementById('chuDe');
  const truongNoiDung = document.getElementById('noiDung');
  const hopThanhCong = document.getElementById('hopThanhCong');

  // --- Buoc 2: Khai bao du lieu hoac bien ---
  // Cac ham kiem tra dinh dang chuoi co ban
  function kiemTraEmailHopLe(email) {
    // Kiem tra email co chua ky tu @ va dau cham . hop le
    const dinhDangEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return dinhDangEmail.test(email);
  }

  function kiemTraSoDienThoaiHopLe(soDienThoai) {
    // So dien thoai Viet Nam: 10 chu so bat dau bang so 0
    const dinhDangSdt = /^0[0-9]{9}$/;
    return dinhDangSdt.test(soDienThoai);
  }

  // Ham hien thi loi cho tung o nhap
  function baoLoi(oNhap, idThongBao, thongDiep) {
    oNhap.classList.add('co-loi');
    oNhap.classList.remove('hop-le');
    const theThongBao = document.getElementById(idThongBao);
    if (theThongBao) {
      theThongBao.textContent = thongDiep;
      theThongBao.classList.add('hien-thi');
    }
  }

  // Ham xoa loi cho tung o nhap khi hop le
  function xoaLoi(oNhap, idThongBao) {
    oNhap.classList.remove('co-loi');
    oNhap.classList.add('hop-le');
    const theThongBao = document.getElementById(idThongBao);
    if (theThongBao) {
      theThongBao.textContent = '';
      theThongBao.classList.remove('hien-thi');
    }
  }

  // --- Buoc 3: Gan su kien ---
  // Lang nghe su kien submit cua bieu mau
  formGopY.addEventListener('submit', function (suKien) {
    // Ngan chan trinh duyet tai lai trang mac dinh
    suKien.preventDefault();

    let formHopLe = true;

    // --- Buoc 4: Kiem tra dieu kien ---
    
    // 1. Kiem tra Ho va Ten (Khong rong, it nhat 3 ky tu)
    const giaTriHoTen = truongHoTen.value.trim();
    if (giaTriHoTen === '') {
      baoLoi(truongHoTen, 'loiHoTen', 'Vui lòng nhập họ và tên của bạn.');
      formHopLe = false;
    } else if (giaTriHoTen.length < 3) {
      baoLoi(truongHoTen, 'loiHoTen', 'Họ và tên phải có ít nhất 3 ký tự.');
      formHopLe = false;
    } else {
      xoaLoi(truongHoTen, 'loiHoTen');
    }

    // 2. Kiem tra Email (Dung dinh dang)
    const giaTriEmail = truongEmail.value.trim();
    if (giaTriEmail === '') {
      baoLoi(truongEmail, 'loiEmail', 'Vui lòng nhập địa chỉ email liên hệ.');
      formHopLe = false;
    } else if (!kiemTraEmailHopLe(giaTriEmail)) {
      baoLoi(truongEmail, 'loiEmail', 'Email không hợp lệ (Ví dụ: tenban@gmail.com).');
      formHopLe = false;
    } else {
      xoaLoi(truongEmail, 'loiEmail');
    }

    // 3. Kiem tra So dien thoai (10 so bat dau bang 0)
    const giaTriSdt = truongDienThoai.value.trim();
    if (giaTriSdt === '') {
      baoLoi(truongDienThoai, 'loiDienThoai', 'Vui lòng nhập số điện thoại.');
      formHopLe = false;
    } else if (!kiemTraSoDienThoaiHopLe(giaTriSdt)) {
      baoLoi(truongDienThoai, 'loiDienThoai', 'Số điện thoại phải gồm 10 chữ số và bắt đầu bằng số 0.');
      formHopLe = false;
    } else {
      xoaLoi(truongDienThoai, 'loiDienThoai');
    }

    // 4. Kiem tra Chu de gop y (Phai chon mot muc)
    const giaTriChuDe = truongChuDe.value;
    if (giaTriChuDe === '') {
      baoLoi(truongChuDe, 'loiChuDe', 'Vui lòng chọn một chủ đề bạn quan tâm.');
      formHopLe = false;
    } else {
      xoaLoi(truongChuDe, 'loiChuDe');
    }

    // 5. Kiem tra Noi dung y kien (It nhat 10 ky tu)
    const giaTriNoiDung = truongNoiDung.value.trim();
    if (giaTriNoiDung === '') {
      baoLoi(truongNoiDung, 'loiNoiDung', 'Vui lòng nhập nội dung ý kiến đóng góp.');
      formHopLe = false;
    } else if (giaTriNoiDung.length < 10) {
      baoLoi(truongNoiDung, 'loiNoiDung', 'Nội dung đóng góp phải có ít nhất 10 ký tự.');
      formHopLe = false;
    } else {
      xoaLoi(truongNoiDung, 'loiNoiDung');
    }

    // --- Buoc 5: Cap nhat giao dien ---
    // Neu tat ca 5 truong deu hop le
    if (formHopLe) {
      // Hien thi hop thong bao gui thanh cong
      hopThanhCong.innerHTML = `<strong>Cảm ơn bạn ${giaTriHoTen}!</strong> Ý kiến đóng góp về chủ đề <em>"${truongChuDe.options[truongChuDe.selectedIndex].text}"</em> đã được ghi nhận thành công vào hệ thống.`;
      hopThanhCong.classList.add('hien-thi');

      // Cuon nhe len phan thong bao
      hopThanhCong.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      // Reset toan bo cac o nhap ve trang thai ban dau
      formGopY.reset();
      [truongHoTen, truongEmail, truongDienThoai, truongChuDe, truongNoiDung].forEach(function (o) {
        o.classList.remove('hop-le');
      });

      // --- Buoc 6: Xu ly truong hop dac biet ---
      // Tu dong an thong bao thanh cong sau 8 giay de giao dien luon gon gang
      setTimeout(function () {
        hopThanhCong.classList.remove('hien-thi');
      }, 8000);
    } else {
      // Neu co loi, an hop thong bao thanh cong
      hopThanhCong.classList.remove('hien-thi');
    }
  });

});
