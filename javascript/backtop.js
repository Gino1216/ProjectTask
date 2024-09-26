$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#backend').fadeIn();
        } else {
            $('#backend').fadeOut();
        }
    });
    $("#backend").click(function(){
        $('html, body').animate({scrollTop: 0},1000);
    });
  function randomPosition() {
    const banner = document.querySelector('.content_part4 a img');
    let randomX = Math.random() * 100 - 50; // Giới hạn di chuyển theo X (-50px đến 50px)
    let randomY = Math.random() * 100 - 50; // Giới hạn di chuyển theo Y (-50px đến 50px)
    banner.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }

  setInterval(randomPosition, 3000); // Thay đổi vị trí ngẫu nhiên mỗi 3 giây
});