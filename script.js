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
    });

    function appendDom(empInfo) {
      $('#employeeTab').append('<tr class="employee"></tr>');
      var $el = $('#employeeTab').children().last();
      $el.append('<td>' + empInfo.employeefirstname + '</td>');
      $el.append('<td>' + empInfo.employeelastname + '</td>');
      $el.append('<td>' + empInfo.employeeID + '</td>');
      $el.append('<td>' + empInfo.employeeTitle + '</td>');
      $el.append('<td>' + empInfo.employeeSalary + '</td>');
      $el.append('<td class="deleteBtn">' +
        '<input type="checkbox" name="delete" value="delete">' +
        '</td>');
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

  });
