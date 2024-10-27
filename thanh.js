// script.js
function toggleContent() {
    const extraContent = document.getElementById("extraContent");
    const button = document.querySelector("button");
  
    if (extraContent.classList.contains("hidden")) {
      extraContent.classList.remove("hidden");
      button.textContent = "Ẩn bớt";
    } else {
      extraContent.classList.add("hidden");
      button.textContent = "Hiển thị thêm";
    }
  }
  