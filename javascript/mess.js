const chatBubble = document.getElementById("chat-bubble");
const chatBox = document.getElementById("chat-box");
const closeChat = document.getElementById("close-chat");
const chatInput = document.getElementById("chat-input");
const chatContent = document.getElementById("chat-content");

// Câu trả lời tự động
const automatedResponses = {
    "xin chào": "Xin chào! Tôi có thể giúp gì cho bạn?",
    "giá sản phẩm": "Chúng tôi có nhiều sản phẩm với mức giá khác nhau. Bạn muốn tìm hiểu thêm về sản phẩm nào?",
    "cảm ơn": "Rất vui được hỗ trợ bạn! Nếu cần thêm trợ giúp, hãy cho chúng tôi biết."
};

// Mở/đóng khung chat khi nhấp vào bong bóng chat
chatBubble.addEventListener("click", () => {
    if (!isDragging) {  // Chỉ mở khung chat nếu không đang kéo
        chatBox.classList.toggle("hidden");
    }
});

// Đóng khung chat khi nhấp vào nút "X"
closeChat.addEventListener("click", () => {
    chatBox.classList.add("hidden");
});

// Gửi tin nhắn và nhận phản hồi tự động
chatInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && chatInput.value.trim() !== "") {
        const message = chatInput.value.toLowerCase().trim();
        addMessage("user", message);
        chatInput.value = "";

        // Trả lời tự động
        if (automatedResponses[message]) {
            setTimeout(() => addMessage("bot", automatedResponses[message]), 500);
        } else {
            setTimeout(() => addMessage("bot", "Xin lỗi, tôi chưa hiểu câu hỏi của bạn."), 500);
        }
    }
});

// Hàm thêm tin nhắn vào khung chat
function addMessage(sender, text) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerText = text;
    chatContent.appendChild(messageElement);
    chatContent.scrollTop = chatContent.scrollHeight; // Tự động cuộn xuống cuối khi có tin nhắn mới
}

// Tính năng kéo thả bong bóng chat
let isDragging = false;

chatBubble.addEventListener("mousedown", function(event) {
    isDragging = true; // Bắt đầu kéo
    let shiftX = event.clientX - chatBubble.getBoundingClientRect().left;
    let shiftY = event.clientY - chatBubble.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        chatBubble.style.left = pageX - shiftX + "px";
        chatBubble.style.top = pageY - shiftY + "px";
    }

    function onMouseMove(event) {
        if (isDragging) {
            moveAt(event.pageX, event.pageY);
        }
    }

    document.addEventListener("mousemove", onMouseMove);

    document.addEventListener("mouseup", function() {
        isDragging = false; // Ngừng kéo
        document.removeEventListener("mousemove", onMouseMove);
    }, { once: true });
});

// Ngăn sự kiện kéo mặc định của trình duyệt
chatBubble.ondragstart = function() {
    return false;
};
