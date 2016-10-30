var localeOpts = {  // contains options for toLocaleString formatting
  style: "currency",
  currency: "USD"
};
var totPayroll = 0;

$(document).ready(function () {

    // submission of employee input
    $('#employeeinfo').on('submit', function (event) {
      event.preventDefault();

      var employeeValues = {};
      var fields = $('#employeeinfo').serializeArray();

      fields.forEach(function (element, index, array) {
        employeeValues[element.name] = element.value;
      });

      // clear out inputs
      $('#employeeinfo').find('input[type=text]').val('');
      $('#employeeinfo').find('input[type=number]').val('');

      // set total salary
      setTotalPayroll(employeeValues.employeeSalary);

      // append to employee row to table
      appendEmployeeRow(employeeValues);
    });

    // Generate new employee input data
    $('#employeeinfo').find('#genBtn').on('click', function (event) {
      event.preventDefault();

      fillEmployeeData();
    });

    // Deletion of employees
    $('#employeeTab').on('click', '.delBtn', function (event) {
      event.preventDefault();

      deleteCheckedEmployees();
    });

  });

function setTotalPayroll(salary) {
    totPayroll += parseInt(salary);
    $('#totalPayroll').text(totPayroll.toLocaleString("en-US", localeOpts));
  }

function appendEmployeeRow(empInfo) {

    var empRow = '<tr class="employee">';
    empRow += '<td class="nameTD">' + empInfo.employeeFirstName + '</td>';
    empRow += '<td class="nameTD">' + empInfo.employeeLastName + '</td>';
    empRow += '<td class="empIDTD"> ' + empInfo.employeeID + '</td>';
    empRow += '<td class="titleTD">' + empInfo.employeeTitle + '</td>';
    empRow += '<td class="salaryTD">' + parseInt(empInfo.employeeSalary).toLocaleString("en-US", localeOpts) + '</td>';
    empRow += '<td class="deleteTD"><input type="checkbox" class="deleteBox" value="' + empInfo.employeeSalary + '" name="deleteBox" /></td>';
    empRow += '</tr>';
    $('#employeeTab').append(empRow);
  }

function fillEmployeeData() {
    var genEmp = genEmployee();
    var fields = $('#employeeinfo').serializeArray();

    // put generated employee into input fields
    $('#employeeinfo').find('#employeeFirstName').val(genEmp.firstName);
    $('#employeeinfo').find('#employeeLastName').val(genEmp.lastName);
    $('#employeeinfo').find('#employeeID').val(genEmp.empNum);
    $('#employeeinfo').find('#employeeTitle').val(genEmp.title);
    $('#employeeinfo').find('#employeeSalary').val(genEmp.salary);
  }

function deleteCheckedEmployees() {
    $('.deleteBox:checked').each(function(i){
      totPayroll -= parseInt($(this).val());
    });
    $('#totalPayroll').text(totPayroll.toLocaleString("en-US", localeOpts));

    $('.deleteBox:checked').parent().parent().remove();
  }
