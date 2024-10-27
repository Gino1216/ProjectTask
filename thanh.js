// script.js
function toggleContent() {
    const extraContent = document.getElementById("extraContent1");
    const button = document.querySelector("buttoncuathanh");
  
    if (extraContent.classList.contains("hidden1")) {
      extraContent.classList.remove("hidden1");
      button.textContent = "Ẩn bớt";
    } else {
      extraContent.classList.add("hidden1");
      button.textContent = "Hiển thị thêm";
    }
  }
  