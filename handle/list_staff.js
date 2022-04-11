function List_staff() {
  this.arr = [];
  this.addStaff = function (result_validation) {
    let isRender = true;
    for (let item of result_validation) {
      if (item === false) {
        isRender = false;
        break;
      }
    }
    // console.log(isRender);
    let employee = getInfoEmployee();
    if (isRender) {
      this.arr.push(employee);
      renderDSSV(this.arr);
      setLocalStorage(this.arr);
    }
  };
  this.deleteStaff = function (index) {
    this.arr.splice(index, 1);
    renderDSSV(this.arr);
    setLocalStorage(this.arr);
  };
  this.editStaff = function (index) {
    let employee = list_staff.arr[index];
    dom("#tknv").value = employee.id;
    dom("#tknv").disabled = true;
    dom("#name").value = employee.name;
    dom("#email").value = employee.email;
    dom("#password").value = employee.password;
    dom("#datepicker").value = employee.start_day;
    dom("#luongCB").value = employee.basic_pay;
    dom("#chucvu").value = employee.position;
    dom("#gioLam").value = employee.total_work_hours_in_month;
    // dom("#btnThemNV").disabled = true;
  };
  this.searchNV = () => {
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
    let searchName = removeAscent(dom("#searchName").value);
    let list_staff_search = this.arr.filter(
      (item) =>
        removeAscent(item.rank_employee).toLowerCase().indexOf(searchName) != -1
    );
    renderDSSV(list_staff_search);
  };
}
