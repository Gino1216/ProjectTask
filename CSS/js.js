<script>
    function getRandomPosition() {
        const x = window.innerWidth - 200; // Subtracting width of element
        const y = window.innerHeight - 100; // Subtracting height of element
        return {
            x: Math.floor(Math.random() * x),
            y: Math.floor(Math.random() * y)
        };
    }

    function animateBannerItem(item) {
        const { x, y } = getRandomPosition();
        item.style.transform = `translate(${x}px, ${y}px)`;
        item.style.opacity = 1;
    }

    function createBannerItem(text) {
        const item = document.createElement('div');
        item.className = 'banner-item';
        item.textContent = text;
        document.querySelector('.banner').appendChild(item);

        // Initial position off-screen
        item.style.transform = 'translate(-100px, -100px)';

        // Animate item
        animateBannerItem(item);

        // Fade out item after 5 seconds
        setTimeout(() => {
            item.style.opacity = 0;
        }, 5000);

        // Remove item after animation
        setTimeout(() => {
            item.remove();
        }, 6000);
    }

    function startBannerAnimation() {
        const texts = [
            'Chào Mừng Đến Với Bảo Vệ Trẻ Em!',
            'Khám Phá Các Tài Nguyên Mới!',
            'Theo Dõi Tin Tức Mới Nhất!',
            'Bảo Vệ Trẻ Em Ngay Hôm Nay!'
        ];

        setInterval(() => {
            const randomText = texts[Math.floor(Math.random() * texts.length)];
            createBannerItem(randomText);
        }, 3000); // New item every 3 seconds
    }

    // Start the banner animation
    document.addEventListener('DOMContentLoaded', startBannerAnimation);
</script>