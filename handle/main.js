function dom(element) {
  return document.querySelector(element);
}
let list_staff = new List_staff();
list_staff.arr = getLocalStorage() || [];
let result_validation;
// handle "Thêm người dùng"
dom("#btnThemNV").addEventListener("click", function () {
  result_validation = validation("add");
  list_staff.addStaff(result_validation);
});
// handle "Thêm nhân viên"
// dom("#btnThem").addEventListener("click", function () {
//   dom("#btnCapNhat").disabled = true;
// });
// set LocalStorage
function setLocalStorage(arr) {
  localStorage.setItem("list_staff", JSON.stringify(arr));
}
// get LocalStorage
function getLocalStorage() {
  let list_staff = JSON.parse(localStorage.getItem("list_staff"));
  if (list_staff) {
    renderDSSV(list_staff);
  }
  return list_staff;
}
function getInfoEmployee() {
  let id = dom("#tknv").value;
  let name = dom("#name").value;
  let email = dom("#email").value;
  let password = dom("#password").value;
  let start_day = dom("#datepicker").value;
  let basic_pay = dom("#luongCB").value * 1;
  let position = dom("#chucvu").value;
  let total_work_hours_in_month = dom("#gioLam").value * 1;
  let staff = new Staff(
    id,
    name,
    email,
    password,
    start_day,
    basic_pay,
    position,
    total_work_hours_in_month
  );
  staff.gross_salary(); // tính tổng lương
  staff.rank_employee(); // xếp loại nhân viên
  return staff;
}
// xóa nhân viên
function deleteStaff(index) {
  list_staff.deleteStaff(index);
}
// sửa thông tin nhân viên
let indexEdit = -1;
function editStaff(index) {
  indexEdit = index;
  list_staff.editStaff(indexEdit);
}
dom("#btnCapNhat").addEventListener("click", function () {
  console.log(indexEdit);
  let isRender = true;
  let result_validationUpdate = validation("update");
  for (let i = 1; i < result_validationUpdate.length; i++) {
    if (result_validationUpdate[i] === false) {
      isRender = false;
      break;
    }
  }
  list_staff.arr[indexEdit] = getInfoEmployee();
  isRender ? renderDSSV(list_staff.arr) : "";
  setLocalStorage(list_staff.arr);
  dom("#btnThemNV").disabled = false;
  dom("#tknv").disabled = false;
  // resetForm();
});
// reset Form
function resetForm() {
  dom("#myForm").reset();
}
// search Nhân viên
dom("#searchName").addEventListener("keyup", function () {
  list_staff.searchNV();
});

// render danh sách nhân viên
function renderDSSV(arr) {
  const tableDanhSach = dom("#tableDanhSach");
  let html = "";
  arr.forEach((item, index) => {
    html += `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.start_day}</td>
        <td>${item.position}</td>
        <td>${item.gross_salary}</td>
        <td>${item.rank_employee}</td>
        <td>
           <button class="btn btn-danger" onclick="deleteStaff(${index})">Xóa</button>
          <button class="btn btn-warning" onclick="editStaff(${index})" data-toggle="modal"
          data-target="#myModal">Sửa</button>
        </td>
      </tr>
    `;
  });
  tableDanhSach.innerHTML = html;
}
