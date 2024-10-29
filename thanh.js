function toggleExtraContent() {
  const extraContent = document.getElementById("extraContent1");
  if (extraContent.classList.contains("hidden1")) {
    extraContent.classList.remove("hidden1");
    document.getElementById("showMoreBtn").innerText = "Thu gọn";
  } else {
    extraContent.classList.add("hidden1");
    document.getElementById("showMoreBtn").innerText = "Hiển thị thêm";
  }
}