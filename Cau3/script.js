// DOM: tạo tr, tạo hai td, thêm nội dung rồi chèn hàng vào cuối tbody.
document.getElementById("domInsert").addEventListener("click", function () {
  var tableBody = document.querySelector("#sampleTable tbody");
  var rowNumber = tableBody.rows.length + 1;
  var row = tableBody.insertRow(-1);
  row.insertCell(0).textContent = "Row" + rowNumber + " cell1";
  row.insertCell(1).textContent = "Row" + rowNumber + " cell2";
});

// jQuery: tạo các phần tử, dùng text() đặt chữ và append() nối chúng vào tbody.
$("#jqueryInsert").on("click", function () {
  var $tableBody = $("#sampleTable tbody");
  var rowNumber = $tableBody.find("tr").length + 1;
  var $row = $("<tr>");
  $row.append($("<td>").text("Row" + rowNumber + " cell1"));
  $row.append($("<td>").text("Row" + rowNumber + " cell2"));
  $tableBody.append($row);
});
