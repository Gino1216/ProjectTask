const chatBubble = document.getElementById("chat-bubble");
const chatBox = document.getElementById("chat-box");
const closeChat = document.getElementById("close-chat");
const chatInput = document.getElementById("chat-input");
const chatContent = document.getElementById("chat-content");

// Câu trả lời tự động
const automatedResponses = {
    "xin chào": "Xin chào! Tôi là trợ lý ảo về bảo vệ trẻ em. Tôi có thể giúp gì cho bạn?",
    "quyền trẻ em": "Trẻ em có quyền được bảo vệ, chăm sóc và giáo dục an toàn. Bạn muốn biết chi tiết về quyền nào không?",
    
    "bạo hành trẻ em": "Nếu bạn biết về trường hợp bạo hành, hãy liên hệ cơ quan chức năng hoặc tổ chức bảo vệ trẻ em. Bạn cần thêm thông tin hỗ trợ về các tổ chức hay đường dây nóng không?",
    "cần hỗ trợ về tổ chức": "Hiện có nhiều tổ chức hỗ trợ trẻ em, như UNICEF, Save the Children, và ChildFund. Bạn muốn liên hệ với tổ chức nào?",
    
    "giáo dục trẻ em": "Chúng tôi có tài liệu về phương pháp giáo dục phù hợp cho trẻ em ở nhiều độ tuổi. Bạn quan tâm đến độ tuổi nào?",
    "độ tuổi 5-12": "Ở độ tuổi này, trẻ phát triển nhanh chóng về ngôn ngữ và tư duy. Các phương pháp học tập mang tính tương tác cao và giáo dục cảm xúc sẽ rất hữu ích. Bạn có muốn thêm thông tin về các hoạt động giáo dục cụ thể không?",
    
    "dinh dưỡng cho trẻ": "Dinh dưỡng đóng vai trò quan trọng trong phát triển của trẻ em. Bạn cần tìm hiểu về chế độ ăn uống cho độ tuổi nào?",
    "độ tuổi 2-5": "Ở độ tuổi này, chế độ ăn cần nhiều chất xơ, protein và các vitamin. Các bữa ăn nên đầy đủ nhóm chất để hỗ trợ tăng trưởng. Bạn muốn biết thêm về thực đơn hoặc món ăn cụ thể không?",
    
    "phát triển tâm lý": "Sức khỏe tâm lý của trẻ là rất quan trọng. Tôi có thể cung cấp tài liệu về các dấu hiệu và cách hỗ trợ tâm lý cho trẻ. Bạn quan tâm đến độ tuổi nào?",
    "độ tuổi 13-18": "Đây là độ tuổi nhạy cảm, trẻ thường có nhiều biến động về tâm lý. Hỗ trợ tốt nhất là xây dựng môi trường an toàn, lắng nghe và không áp đặt. Bạn muốn tìm hiểu thêm về cách nói chuyện hoặc can thiệp khi cần không?",
    
    "trẻ em đường phố": "Các tổ chức xã hội hiện có nhiều chương trình hỗ trợ trẻ em đường phố. Bạn muốn biết thêm về chương trình nào không?",
    "các chương trình giáo dục": "Các chương trình giáo dục giúp trẻ em đường phố tiếp cận tri thức, phát triển kỹ năng sống và hoà nhập xã hội. Bạn có muốn tìm hiểu về các chương trình cụ thể không?",
    
    "phòng chống bắt cóc": "Đây là vấn đề nghiêm trọng. Giáo dục cho trẻ về cách ứng phó và nhận biết nguy hiểm là rất quan trọng. Bạn có muốn thêm thông tin về các kỹ năng tự bảo vệ không?",
    "kỹ năng tự bảo vệ": "Hãy dạy trẻ nhớ các số điện thoại khẩn cấp, không đi theo người lạ và cách nhận diện nguy hiểm. Bạn có cần tài liệu chi tiết để hướng dẫn cho trẻ không?",
    
    "chăm sóc sức khỏe": "Chúng tôi có thông tin về các dịch vụ chăm sóc sức khỏe cho trẻ em. Bạn cần thông tin về dịch vụ nào cụ thể?",
    "tiêm chủng": "Tiêm chủng giúp trẻ phòng ngừa các bệnh nguy hiểm. Độ tuổi phù hợp sẽ khác nhau tuỳ loại vắc xin. Bạn cần thêm thông tin về lịch tiêm chủng cụ thể không?",
    
    "đường dây nóng": "Nếu cần báo cáo hoặc hỗ trợ khẩn cấp về trẻ em, bạn có thể liên hệ với các đường dây nóng của tổ chức bảo vệ trẻ. Bạn có muốn tôi cung cấp số điện thoại liên hệ không?",
    "cung cấp số liên hệ": "Bạn có thể gọi số 111 tại Việt Nam để báo cáo các vấn đề bảo vệ trẻ em. Nếu bạn cần thêm thông tin, tôi luôn sẵn sàng hỗ trợ.",
    
    "hoạt động ngoài trời": "Hoạt động ngoài trời giúp trẻ phát triển toàn diện. Bạn muốn biết về các hoạt động phù hợp cho trẻ ở độ tuổi nào?",
    "trẻ từ 6-12 tuổi": "Những hoạt động như chơi thể thao, cắm trại, và khám phá thiên nhiên giúp trẻ học hỏi và rèn luyện thể chất. Bạn muốn có thêm thông tin về các hoạt động cụ thể không?",
    
    "phát triển ngôn ngữ": "Chúng tôi có tài liệu về các phương pháp phát triển ngôn ngữ cho trẻ theo từng độ tuổi. Bạn quan tâm đến độ tuổi nào?",
    "độ tuổi 3-5": "Độ tuổi này rất phù hợp để khuyến khích trẻ giao tiếp và học từ mới. Bạn muốn biết thêm về các hoạt động phát triển ngôn ngữ không?",
    
    "an toàn trực tuyến": "An toàn trên mạng là rất quan trọng với trẻ em. Hãy giáo dục trẻ cách sử dụng Internet an toàn. Bạn có muốn thêm tài liệu hướng dẫn về vấn đề này không?",
    "tài liệu an toàn trực tuyến": "Tài liệu này bao gồm cách thiết lập quyền riêng tư, nhận diện trang web độc hại và phòng tránh bắt nạt trên mạng. Bạn cần thêm thông tin chi tiết không?",
    
    "bảo vệ trẻ em ở trường": "Trường học là nơi an toàn cho trẻ. Bạn có cần thông tin về các biện pháp bảo vệ trẻ em ở trường không?",
    "các biện pháp an toàn": "Các biện pháp bao gồm hệ thống giám sát, quy định nghiêm ngặt và chương trình giáo dục. Bạn có cần hướng dẫn chi tiết cho trường học của mình không?",
    
    "tư vấn pháp lý": "Chúng tôi có thể cung cấp thông tin về quyền và luật pháp liên quan đến trẻ em. Bạn có cần tư vấn về lĩnh vực nào cụ thể?",
    "luật bảo vệ trẻ em": "Luật bảo vệ trẻ em nêu rõ các quyền cơ bản và nghĩa vụ của các tổ chức bảo vệ trẻ. Bạn muốn tôi cung cấp một bản tóm tắt về các điều khoản cụ thể không?",
    
    "các tổ chức từ thiện": "Nhiều tổ chức từ thiện hỗ trợ trẻ em khó khăn. Bạn cần tìm hiểu về tổ chức nào hoặc hỗ trợ liên hệ không?",
    "liên hệ tổ chức": "Các tổ chức lớn như UNICEF, ChildFund, và Save the Children đều có chương trình tại Việt Nam. Bạn cần thông tin liên hệ của tổ chức nào không?",
    
    "trẻ em khuyết tật": "Có nhiều dịch vụ hỗ trợ trẻ em khuyết tật trong giáo dục và chăm sóc sức khỏe. Bạn cần tìm hiểu về dịch vụ nào cụ thể không?",
    "giáo dục hòa nhập": "Giáo dục hòa nhập giúp trẻ khuyết tật học chung với các trẻ khác và phát triển kỹ năng xã hội. Bạn cần thêm tài liệu về các chương trình giáo dục này không?",
    
    "tư vấn gia đình": "Gia đình đóng vai trò quan trọng trong sự phát triển của trẻ. Bạn cần tư vấn hoặc tài liệu về cách hỗ trợ và đồng hành cùng trẻ không?",
    "xây dựng môi trường an toàn": "Tạo môi trường an toàn là nền tảng giúp trẻ phát triển khỏe mạnh. Bạn muốn biết thêm về các cách xây dựng môi trường tích cực cho trẻ không?",
    
    "hỗ trợ học tập": "Chúng tôi có thông tin về các phương pháp hỗ trợ học tập và chương trình giáo dục đặc biệt cho trẻ. Bạn muốn biết thêm chi tiết về chương trình nào không?",
    "các phương pháp hỗ trợ": "Các phương pháp học tập như gia sư, các lớp học kỹ năng và công cụ hỗ trợ học tập đều rất hữu ích. Bạn muốn thêm chi tiết về một phương pháp cụ thể nào không?",
    
    "tạm biệt": "Cảm ơn bạn đã sử dụng trợ lý ảo của chúng tôi! Hãy quay lại bất cứ khi nào bạn cần thêm thông tin về bảo vệ trẻ em."
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
            setTimeout(() => addMessage("bot", "Xin Chào oke chưa ? tôi giúp gì được "), 500);
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
