$(document).ready(function () {
    var array = [];
    $('#employeeinfo').on('submit', function (event) {
      event.preventDefault();

      var values = {};
      var fields = $('#employeeinfo').serializeArray();

      fields.forEach(function (element, index, array) {
        values[element.name] = element.value;
      });

      console.log(values);

      // clear out inputs
      $('#employeeinfo').find('input[type=text]').val('');

      // append to DOM
      appendDom(values);
    });

    console.log($('#employeeTab').children());
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

  });
