// Mỗi ảnh lưu đường dẫn, chiều rộng và chiều cao theo đề bài.
var images = [
  {
    src: "https://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    width: 240,
    height: 160,
  },
  {
    src: "https://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    width: 320,
    height: 195,
  },
  {
    src: "https://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
    width: 500,
    height: 343,
  },
];

// Math.random() chọn một chỉ số hợp lệ; hàm này dùng chung cho hai cách hiển thị.
function chooseRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

// DOM: tạo thẻ img, gán thuộc tính rồi thay nội dung vùng chứa.
document.getElementById("domShow").addEventListener("click", function () {
  var imageData = chooseRandomImage();
  var image = document.createElement("img");
  image.src = imageData.src;
  image.width = imageData.width;
  image.height = imageData.height;
  image.alt = "Hình ảnh được chọn ngẫu nhiên";
  var container = document.getElementById("imageContainer");
  container.replaceChildren(image);
});

// jQuery: tạo img bằng $, đặt thuộc tính bằng attr() rồi thay nội dung bằng empty/append.
$("#jqueryShow").on("click", function () {
  var imageData = chooseRandomImage();
  var $image = $("<img>").attr({
    src: imageData.src,
    width: imageData.width,
    height: imageData.height,
    alt: "Hình ảnh được chọn ngẫu nhiên",
  });
  $("#imageContainer").empty().append($image);
});
