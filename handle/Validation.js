function validation(chucNang) {
  let result = [false, true, true, true, true, true, true, true];
  let result_update = [true, true, true, true, true, true, true, true];
  // check tài khoản
  let id = document.getElementById("tknv");
  if (chucNang !== "update") {
    let isValid = true;
    const regexNumber = /^[0-9]+$/;
    if (
      id.value.length >= 4 &&
      id.value.length <= 6 &&
      id.value.match(regexNumber)
    ) {
      for (item of list_staff.arr) {
        if (item.id == id.value) {
          document.getElementById("tbTKNV").innerHTML = "Tài khoản đã tồn tại!";
          document.getElementById("tbTKNV").style.display = "block";
          isValid = false;
          break;
        } else {
          document.getElementById("tbTKNV").innerHTML = "";
          document.getElementById("tbTKNV").style.display = "none";
          isValid = true;
        }
      }
    } else {
      document.getElementById("tbTKNV").innerHTML =
        "Tài khoản phải có từ 4 đến 6 ký tự số!";
      document.getElementById("tbTKNV").style.display = "block";
      isValid = false;
    }
    result[0] = isValid;
    result_update[0] = isValid;
  }
  // check tên
  let name = document.getElementById("name");
  if (true) {
    let isValid = true;
    let tbTen = document.getElementById("tbTen");
    function removeAscent(str) {
      if (str === null || str === undefined) return str;
      str = str.toLowerCase();
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/đ/g, "d");
      return str;
    }
    let regexName = /^[a-zA-Z ]{2,}$/g;
    let value_name = removeAscent(name.value);
    if (regexName.test(value_name)) {
      tbTen.innerHTML = "";
      tbTen.style.display = "none";
      isValid = true;
    } else {
      tbTen.innerHTML = "Tên không hợp lệ!";
      tbTen.style.display = "block";
      isValid = false;
    }
    result[1] = isValid;
    result_update[1] = isValid;
  }
  // check email
  let email = document.getElementById("email");
  if (true) {
    let regexEmail =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let isValid = true;
    let tbEmail = document.getElementById("tbEmail");
    if (regexEmail.test(email.value)) {
      tbEmail.innerHTML = "";
      tbEmail.style.display = "none";
      isValid = true;
    } else {
      tbEmail.innerHTML = "Email không hợp lệ!";
      tbEmail.style.display = "block";
      isValid = false;
    }
    result[2] = isValid;
    result_update[2] = isValid;
  }

  // check password
  let password = document.getElementById("password");
  if (true) {
    let isValid = true;
    let tbMatKhau = document.getElementById("tbMatKhau");
    let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,10}$/;
    if (password.value.length < 6 || password.value.length > 10) {
      tbMatKhau.innerHTML = "Mật khẩu phải có từ 6 đến 10 ký tự!";
      tbMatKhau.style.display = "block";
      isValid = false;
      result[3] = isValid;
      result_update[3] = isValid;
      return;
    }
    if (regexPassword.test(password.value)) {
      tbMatKhau.innerHTML = "";
      tbMatKhau.style.display = "none";
      isValid = true;
    } else {
      tbMatKhau.innerHTML =
        "Mật khẩu phải có số, chữ hoa, chữ thường, ký tự đặc biệt";
      tbMatKhau.style.display = "block";
      isValid = false;
    }
    result[3] = isValid;
    result_update[3] = isValid;
  }
  // check ngày bắt đầu làm việc
  let start_day = document.getElementById("datepicker");
  if (true) {
    let isValid = true;
    let tbNgayBatDau = document.getElementById("tbNgay");
    let isValidDate = Date.parse(start_day.value);
    if (isNaN(isValidDate)) {
      tbNgayBatDau.innerHTML =
        "Ngày bắt đầu làm việc không hợp lệ!(mm/dd/yyyy)";
      tbNgayBatDau.style.display = "block";
      isValid = false;
    } else {
      tbNgayBatDau.innerHTML = "";
      isValid = true;
    }
    result[4] = isValid;
    result_update[4] = isValid;
  }
  // check lương cơ bản
  let basic_pay = document.getElementById("luongCB");
  if (true) {
    let tbLuongCB = document.getElementById("tbLuongCB");
    let isValid = true;
    if (isNaN(basic_pay.value)) {
      tbLuongCB.innerHTML = "Lương cơ bản phải là số!";
      tbLuongCB.style.display = "block";
      isValid = false;
      result[5] = isValid;
      result_update[5] = isValid;
      return;
    }
    if (basic_pay.value <= 20000000 && basic_pay.value >= 1000000) {
      tbLuongCB.innerHTML = "";
      isValid = true;
    } else {
      tbLuongCB.innerHTML = "Lương cơ bản phải từ 1.000.000 đến 20.000.000!";
      tbLuongCB.style.display = "block";
      isValid = false;
    }
    result[5] = isValid;
    result_update[5] = isValid;
  }
  // check chức vụ
  let position = document.getElementById("chucvu");
  if (true) {
    let tbChucVu = document.getElementById("tbChucVu");
    let isValid = true;
    if (position.value == "") {
      tbChucVu.innerHTML = "Chức vụ không được để trống!";
      tbChucVu.style.display = "block";
      isValid = false;
    } else {
      tbChucVu.innerHTML = "";
      isValid = true;
    }
    result[6] = isValid;
    result_update[6] = isValid;
  }
  // check tổng giờ làm trong tháng
  let total_work_hours_in_month = document.getElementById("gioLam");
  if (true) {
    let tbGioLam = document.getElementById("tbGiolam");
    let isValid = true;
    if (isNaN(total_work_hours_in_month.value * 1)) {
      tbGioLam.innerHTML = "Tổng giờ làm phải là số!";
      tbGioLam.style.display = "block";
      isValid = false;
      result[7] = isValid;
      result_update[7] = isValid;
      return;
    }
    if (
      total_work_hours_in_month.value * 1 <= 200 &&
      total_work_hours_in_month.value * 1 >= 80
    ) {
      tbGioLam.innerHTML = "";
      isValid = true;
    } else {
      tbGioLam.innerHTML = "Tổng giờ làm phải từ 80 đến 200!";
      tbGioLam.style.display = "block";
      isValid = false;
    }
    result[7] = isValid;
    result_update[7] = isValid;
  }
  if (chucNang === "update") {
    return result_update;
  } else {
    return result;
  }
}
