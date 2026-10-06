// DOM: selectedIndex chỉ mục đang chọn; xóa option ở đúng vị trí đó.
document.getElementById("domRemove").addEventListener("click", function () {
  var select = document.getElementById("colorSelect");
  if (select.selectedIndex <= 0) {
    document.getElementById("status").textContent = "Hãy chọn một màu trước.";
    return;
  }

  var removedColor = select.options[select.selectedIndex].text;
  select.remove(select.selectedIndex);
  document.getElementById("status").textContent = "Đã xóa màu " + removedColor + ".";
});

// jQuery: :selected tìm option được chọn; remove() xóa option khỏi danh sách.
$("#jqueryRemove").on("click", function () {
  var $selected = $("#colorSelect option:selected");
  if (!$selected.val()) {
    $("#status").text("Hãy chọn một màu trước.");
    return;
  }

  var removedColor = $selected.text();
  $selected.remove();
  $("#status").text("Đã xóa màu " + removedColor + ".");
});
