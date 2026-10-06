// Kiểm tra đầu vào chỉ cho phép URL http/https, không chuyển hướng nếu URL sai.
function confirmRedirect() {
  var input = document.getElementById("targetUrl");
  var destination;
  try {
    destination = new URL(input.value.trim());
  } catch (error) {
    document.getElementById("status").textContent = "Đường link không hợp lệ.";
    return;
  }

  if (destination.protocol !== "http:" && destination.protocol !== "https:") {
    document.getElementById("status").textContent =
      "Chỉ chấp nhận đường link bắt đầu bằng http:// hoặc https://.";
    return;
  }

  // confirm() trả về true khi chọn OK; Cancel giữ nguyên trang hiện tại.
  if (window.confirm("Bạn có muốn chuyển đến " + destination.href + " không?")) {
    window.location.assign(destination.href);
  }
}

// DOM: ngăn form tự tải lại trang rồi chạy phần xử lý xác nhận.
document.getElementById("redirectForm").addEventListener("submit", function (event) {
  event.preventDefault();
  confirmRedirect();
});

// jQuery: nút thứ hai gọi cùng quy trình để hai cách xử lý cho kết quả nhất quán.
$("#jquerySubmit").on("click", function () {
  if (document.getElementById("redirectForm").reportValidity()) {
    confirmRedirect();
  }
});
