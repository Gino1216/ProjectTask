// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const playBtn = document.getElementById('playBtn');
    const videoPlayer = document.getElementById('videoPlayer');
    const volumeControl = document.getElementById('volumeControl');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Đóng menu khi kích thước cửa sổ thay đổi
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
        }
    });
    });
