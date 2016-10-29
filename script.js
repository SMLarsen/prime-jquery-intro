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
      var empRow = '<tr class="employee">';
      empRow += '<td>' + empInfo.employeefirstname + '</td>';
      empRow += '<td>' + empInfo.employeelastname + '</td>';
      empRow += '<td>' + empInfo.employeeID + '</td>';
      empRow += '<td>' + empInfo.employeeTitle + '</td>';
      empRow += '<td>' + empInfo.employeeSalary + '</td>';
      empRow += '<td class="deleteBox">' +
        '<input type="checkbox" name="deleteBox"' +
        ' value="deleteBox" id="deleteBox">' +
        '</td>';
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
    $('#employeeTab').find('#delBtn').on('click', function (event) {
      event.preventDefault();

      console.log($('#employeeTab').find('#deleteBox', ':checked').parent());
      console.log($('#employeeTab').find('#employee').parent());

      // $('#employeeTab').find('#deleteBox', ':checked').parent().css('background-color: red;')
// console.log($('.employee').find('#deleteBox').parent().siblings().last().val());
      // $('#employeeinfo').find('deleteBox').checked.remove();
    });

  });
