var localeOpts = {
  style: "currency",
  currency: "USD"
};

$(document).ready(function () {

    var array = [];
    // submission of employee input
    $('#employeeinfo').on('submit', function (event) {
      event.preventDefault();

      var values = {};
      var fields = $('#employeeinfo').serializeArray();

      fields.forEach(function (element, index, array) {
        values[element.name] = element.value;
      });

      // clear out inputs
      $('#employeeinfo').find('input[type=text]').val('');
      $('#employeeinfo').find('input[type=number]').val('');

      // set total salary
      setTotalPayroll(values.employeeSalary);

      // append to DOM
      appendDom(values);
    });

    function appendDom(empInfo) {

      var empRow = '<tr class="employee">';
      empRow += '<td>' + empInfo.employeefirstname + '</td>';
      empRow += '<td>' + empInfo.employeelastname + '</td>';
      empRow += '<td>' + empInfo.employeeID + '</td>';
      empRow += '<td>' + empInfo.employeeTitle + '</td>';
      empRow += '<td class="salaryTD">' + parseInt(empInfo.employeeSalary).toLocaleString("en-US", localeOpts) + '</td>';
      empRow += '<td class="deleteTD"><input type="checkbox" class="delBox" value="' + empInfo.employeeSalary + '" name="delBox" /></td>';
      empRow += '</tr>';
      $('#employeeTab').append(empRow);
    }

    // Generation of employee input
    $('#employeeinfo').find('#genBtn').on('click', function (event) {
      event.preventDefault();

      var genEmp = genEmployee();

      var fields = $('#employeeinfo').serializeArray();

      // put generated employee into input fields
      $('#employeeinfo').find('#employeefirstname').val(genEmp.firstName);
      $('#employeeinfo').find('#employeelastname').val(genEmp.lastName);
      $('#employeeinfo').find('#employeeID').val(genEmp.empNum);
      $('#employeeinfo').find('#employeeTitle').val(genEmp.title);
      $('#employeeinfo').find('#employeeSalary').val(genEmp.salary);
    });

    // Deletion of employees
    $('#employeeTab').on('click', '.delBtn', function (event) {
      event.preventDefault();

      var totPayroll = getTotalPayroll();
      $('.delBox:checked').each(function(i){
        totPayroll -= parseInt($(this).val());
      });
      totPayroll = totPayroll.toLocaleString("en-US", localeOpts);
      $('#totalPayroll').text(totPayroll);

      $('.delBox:checked').parent().parent().remove();
    });

  });

  function getTotalPayroll() {
    var totPayroll = $('#totalPayroll').text();
    return Number(totPayroll.replace(/[^0-9\.]+/g,""));
  }

  function setTotalPayroll(salary) {
    var totPayroll = getTotalPayroll();
    totPayroll += parseInt(salary);
    $('#totalPayroll').text(totPayroll.toLocaleString("en-US", localeOpts));
  }
