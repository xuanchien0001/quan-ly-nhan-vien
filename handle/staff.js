function Staff(
  _id,
  _name,
  _email,
  _password,
  _start_day,
  _basic_pay,
  _position,
  _total_work_hours_in_month
) {
  this.id = _id;
  this.name = _name;
  this.email = _email;
  this.password = _password;
  this.start_day = _start_day;
  this.basic_pay = _basic_pay;
  this.position = _position;
  this.total_work_hours_in_month = _total_work_hours_in_month;
  this.gross_salary = 0;
  this.rank_employee = "";

  this.gross_salary = function () {
    if (this.position == "Giám đốc") {
      this.gross_salary = this.basic_pay * 3;
    } else if (this.position == "Trưởng phòng") {
      this.gross_salary = this.basic_pay * 2;
    } else {
      this.gross_salary = this.basic_pay;
    }
  };
  this.rank_employee = function () {
    if (this.position == "Giám đốc" || this.position == "Trưởng phòng") {
      this.rank_employee = "";
      return;
    }
    switch (true) {
      case this.total_work_hours_in_month >= 192: {
        this.rank_employee = "Xuất xắc";
        break;
      }
      case this.total_work_hours_in_month >= 176: {
        this.rank_employee = "Giỏi";
        break;
      }
      case this.total_work_hours_in_month >= 160: {
        this.rank_employee = "Khá";
        break;
      }
      case this.total_work_hours_in_month < 160: {
        this.rank_employee = "Trung bình";
        break;
      }
      default: {
        this.rank_employee = "";
      }
    }
  };
}
