let translations = {};

// Tải nội dung từ tệp JSON
function loadTranslations() {
    fetch('translations.json')
        .then(response => response.json())
        .then(data => {
            translations = data;
            // Mặc định hiển thị ngôn ngữ tiếng Việt
            changeLanguage('vi');
        })
        .catch(error => console.error('Error loading translations:', error));
}

// Chuyển đổi ngôn ngữ
function changeLanguage(lang) {
    // Thay đổi nội dung các phần tử có thuộc tính 'data-key'
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT') {
                element.setAttribute('placeholder', translations[lang][key]);
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
}

// Tải ngôn ngữ khi trang tải
window.onload = loadTranslations;
