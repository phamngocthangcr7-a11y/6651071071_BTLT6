// DOM: duyệt danh sách option để lấy cả số lượng và tên từng màu, sau đó alert.
document.getElementById("domCount").addEventListener("click", function () {
  var options = document.getElementById("colorSelect").options;
  var colors = [];
  for (var index = 0; index < options.length; index += 1) {
    colors.push(options[index].text);
  }
  alert("Số mục: " + options.length + "\nCác mục: " + colors.join(", "));
});

// jQuery: lấy toàn bộ option bằng find(), map() tên màu và hiển thị trong cửa sổ báo.
$("#jqueryCount").on("click", function () {
  var $options = $("#colorSelect").find("option");
  var colors = $options
    .map(function () {
      return $(this).text();
    })
    .get();
  alert("Số mục: " + $options.length + "\nCác mục: " + colors.join(", "));
});
