$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("#backend").fadeIn();
    } else {
      $("#backend").fadeOut();
    }
  });
  $("#backend").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
  function randomPosition() {
    const banner = document.querySelector(".content_part4 a img");
    banner.style.transition = "none";
    let randomX = Math.random() * 100 - 50; // Giới hạn di chuyển theo X (-50px đến 50px)
    let randomY = Math.random() * 100 - 50; // Giới hạn di chuyển theo Y (-50px đến 50px)
    banner.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }

  setInterval(randomPosition, 3000); // Thay đổi vị trí ngẫu nhiên mỗi 3 giây
});

function searchFunction() {
  // Lấy từ khóa người dùng nhập vào
  let query = document.getElementById("search_text").value.toLowerCase();

  // Tìm kiếm các phần tử bài viết (hoặc bất kỳ nội dung nào bạn muốn tìm kiếm)
  let articles = document.querySelectorAll(
    ".content_part1_title, .content_part2_para, .content_part3_para, .content_part4"
  );

  let found = false;
  articles.forEach((article) => {
    let text = article.innerText.toLowerCase();

    if (text.includes(query)) {
      // Hiển thị các kết quả có chứa từ khóa
      article.style.display = "block";
      found = true;
    } else {
      // Ẩn các kết quả không chứa từ khóa
      article.style.display = "none";
    }
  });

  // Nếu không có kết quả, hiện thông báo
  if (!found) {
    alert("No results found.");
  }

  // Ngăn trang load lại
  return false;
}

const menu = [
  {
    label: "HOME",
    href: "/index",
  },
  {
    label: "ABOUT US",
    href: "/about us",
  },
  {
    label: "TODAY",
    href: "/today in world",
  },
  {
    label: "CHECK",
    href: "/project/check",
  },
  {
    label: "CONTACT US",
    href: "/contact us",
  },
];

function getMenuMobile() {
  const containerMenuMobileElement = document.querySelector("#wrapper");
  const iconMenuMobileElement = document.querySelector(".parent-icon");
  const iconMenuOpenElement = document.querySelector(".icon-menu-open");
  const iconMenuCloseElement = document.querySelector(".icon-menu-close");

  const navElement = document.createElement("nav");
  navElement.classList.add("nav-list-menu-mobile");
  const ulElement = document.createElement("ul");
  ulElement.classList.add("list-menu-mobile");

  menu.forEach((item) => {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    liElement.classList.add("primary-nav");
    liElement.classList.add("secondary-nav");
    aElement.href = item.href + ".html";
    aElement.textContent = item.label;
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
  });

  navElement.appendChild(ulElement);
  containerMenuMobileElement.appendChild(navElement);

  function toggleMenuMobile() {
    const navElement = document.querySelector(".nav-list-menu-mobile");
    if (containerMenuMobileElement.classList.contains("showMenu")) {
      containerMenuMobileElement.style.backgroundColor = "transparent";
      containerMenuMobileElement.style.height = "0";
      iconMenuOpenElement.style.display = "block";
      iconMenuCloseElement.style.display = "none";
      containerMenuMobileElement.classList.remove("showMenu");
    } else {
      containerMenuMobileElement.style.backgroundColor = "white";
      containerMenuMobileElement.style.height = "100%";
      iconMenuOpenElement.style.display = "none";
      iconMenuCloseElement.style.display = "block";
      containerMenuMobileElement.classList.add("showMenu");
      navElement.style.height = "100%";
      navElement.style.display = "block"
    }
  }
  iconMenuMobileElement.addEventListener("click", toggleMenuMobile);
}
getMenuMobile();
