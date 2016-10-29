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

      // update total salary
      updateTotalPayroll(values.employeeSalary);
      function updateTotalPayroll(salary) {
        var totPayroll = parseInt($('#totalPayroll').text());
        totPayroll += parseInt(salary);
        $('#totalPayroll').text(totPayroll);
      }

      // append to DOM
      appendDom(values);
      // console.log($('#employeeTab').children().find('tr').children().last());
    });

    function appendDom(empInfo) {
      var empRow = '<tr class="employee">';
      empRow += '<td>' + empInfo.employeefirstname + '</td>';
      empRow += '<td>' + empInfo.employeelastname + '</td>';
      empRow += '<td>' + empInfo.employeeID + '</td>';
      empRow += '<td>' + empInfo.employeeTitle + '</td>';
      empRow += '<td class="salaryTD">' + empInfo.employeeSalary + '</td>';
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

      var totPayroll = parseInt($('#totalPayroll').text());
      console.log(totPayroll);

      $('.delBox:checked').each(function(i){
        totPayroll -= parseInt($(this).val());
      });
      $('#totalPayroll').text(totPayroll);

      $('.delBox:checked').parent().parent().remove();
    });

  });
