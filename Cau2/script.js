// DOM: đọc value của hai input, ghép thành họ tên rồi hiển thị bằng textContent.
document.getElementById("domSubmit").addEventListener("click", function () {
  var firstName = document.getElementById("firstName").value.trim();
  var lastName = document.getElementById("lastName").value.trim();
  document.getElementById("result").textContent =
    "Họ và tên: " + firstName + " " + lastName;
});

// jQuery: val() lấy dữ liệu nhập; text() hiển thị kết quả an toàn dưới dạng chữ.
$("#jquerySubmit").on("click", function () {
  var firstName = $("#firstName").val().trim();
  var lastName = $("#lastName").val().trim();
  $("#result").text("Họ và tên: " + firstName + " " + lastName);
});
