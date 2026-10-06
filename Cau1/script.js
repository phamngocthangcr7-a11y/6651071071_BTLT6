// DOM: truy cập phần tử rồi gán trực tiếp các thuộc tính CSS.
document.getElementById("domSubmit").addEventListener("click", function () {
  var paragraph = document.getElementById("sampleParagraph");
  paragraph.style.fontSize = "24px";
  paragraph.style.fontFamily = "Georgia, serif";
  paragraph.style.color = "#c026d3";
});

// jQuery: chọn phần tử bằng $, rồi dùng css() để cập nhật nhiều kiểu cùng lúc.
$("#jquerySubmit").on("click", function () {
  $("#sampleParagraph").css({
    fontSize: "24px",
    fontFamily: "Georgia, serif",
    color: "#c026d3",
  });
});
