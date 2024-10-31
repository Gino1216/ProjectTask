// Danh sách mẫu ngắn để demo
const people = [
    {
        name: "Trần Thị Bích",
        region: "Miền Trung (Hà Tĩnh)",
        address: " Số 123, Đường Trường Chinh, Hà Nội ",
        dob: "02/02/1985",
        job: "Nông dân",
        description: "Lao động trẻ em ở Nghệ An vẫn còn là một vấn đề nhức nhối. Ở các vùng nông thôn, không hiếm thấy hình ảnh những em nhỏ phải ra đồng làm việc từ sáng sớm, hay phụ giúp gia đình trong các công việc nặng nhọc như làm nương, chăn nuôi gia súc. Do hoàn cảnh kinh tế khó khăn, nhiều gia đình phải để con cái nghỉ học sớm để phụ giúp việc mưu sinh. Điều này gây ra sự mất mát lớn về mặt giáo dục, khiến các em không có đủ kiến thức và kỹ năng để tìm kiếm các cơ hội phát triển tốt hơn trong tương lai. Tôi mong rằng các tổ chức từ thiện và chính quyền địa phương sẽ có nhiều chương trình hỗ trợ để giảm bớt gánh nặng tài chính cho các gia đình nghèo, giúp trẻ em có cơ hội quay lại trường học",
        tags: ["Lao động trẻ em"]
    },

{
        name: " Nguyễn Văn Tiến ",
        region: "Miền Bắc (Hà Nội)",
        address: "Không có địa chỉ",
        dob: "15/06/2000",
        job: " Sinh viên ",
        description: "Tôi đã chứng kiến không ít các trường hợp trẻ em trở thành nạn nhân của bạo lực gia đình. Thậm chí, ngay trong khu phố tôi sống, có nhiều đứa trẻ thường xuyên bị cha mẹ mắng chửi, đánh đập vì những lý do nhỏ nhặt như điểm kém hay không làm việc nhà. Những hành vi bạo lực này không chỉ để lại tổn thương thể chất mà còn ảnh hưởng sâu sắc đến tâm lý của các em. Nhiều em bắt đầu có dấu hiệu trầm cảm, tự ti, và thiếu sự tự tin trong giao tiếp xã hội. Tôi nghĩ rằng cần có thêm các trung tâm hỗ trợ, tư vấn tâm lý để giúp đỡ trẻ em và gia đình họ vượt qua các vấn đề này, đồng thời cần tăng cường hơn nữa sự giáo dục để thay đổi nhận thức về bạo lực trong gia đình",
        tags: ["Bạo lực gia đình "]
    },

{
        name: " Lê Hoàng Châu ",
        region: "Miền Nam (TP.HCM)",
        address: "Không có địa chỉ",
        dob: "03/03/2005",
        job: " Học sinh ",
        description: "Bạo lực học đường là một thực trạng đáng buồn tại nhiều trường học ở TP.HCM. Tôi đã thấy các bạn bị bắt nạt, từ những lời trêu chọc, chửi bới cho đến việc bị đánh đập ngay trong trường. Điều này không chỉ ảnh hưởng đến việc học của các bạn mà còn khiến họ cảm thấy sợ hãi, không muốn đến trường. Nhiều người trong số họ giữ im lặng vì sợ rằng nếu nói ra, họ sẽ bị trả đũa hoặc không được ai giúp đỡ. Tôi nghĩ nhà trường và phụ huynh cần có sự hợp tác chặt chẽ hơn, cần có những biện pháp xử lý nghiêm khắc để chấm dứt tình trạng bạo lực học đường này",
        tags: ["Bắt nạt và bạo lực học đường"]
    },


{
        name: " Phạm Văn Đạt ",
        region: "Miền Bắc (Hải Phòng)",
        address: " Buôn Ma Thuột, Đắk Lắk ",
        dob: "19/11/1999",
        job: " Lao động tự do ",
        description: "Tây Nguyên là một khu vực mà lao động trẻ em vẫn là một vấn đề cần được quan tâm. Các em nhỏ thường phải ra nương, làm việc từ sáng đến chiều để giúp đỡ gia đình. Công việc nặng nhọc không chỉ ảnh hưởng đến sức khỏe thể chất của các em, mà còn cản trở việc học tập, khiến các em không có cơ hội tiếp cận kiến thức cần thiết để cải thiện tương lai. Nhiều gia đình khó khăn không đủ tiền để mua sách vở hay trả các khoản học phí. Để thay đổi điều này, tôi nghĩ rằng cần có thêm nhiều tổ chức phi chính phủ hỗ trợ học bổng, cung cấp tài liệu học tập miễn phí, và chính sách khuyến học từ chính quyền địa phương",
        tags: ["Lao động trẻ em"]
    },

{
        name: " Hoàng Thị Linh ",
        region: "Miền Bắc (Lào Cai)",
        address: "Không có địa chỉ",
        dob: "07/08/2001",
        job: " Hướng dẫn viên du lịch ",
        description: "Tảo hôn vẫn còn là một vấn đề nghiêm trọng ở các khu vực vùng sâu vùng xa tại Lào Cai, đặc biệt là trong cộng đồng các dân tộc thiểu số. Nhiều em gái chưa đầy 15 tuổi đã bị buộc phải kết hôn, bỏ học giữa chừng và bước vào cuộc sống gia đình khi chưa thực sự sẵn sàng. Điều này không chỉ gây ra những khó khăn trong việc chăm sóc con cái mà còn làm giảm đi những cơ hội phát triển bản thân của các em. Tảo hôn còn liên quan mật thiết đến các vấn đề như sinh con sớm, sức khỏe yếu và những khó khăn về tài chính trong gia đình. Cần có nhiều chương trình tuyên truyền nâng cao nhận thức về tác hại của tảo hôn, cũng như các biện pháp pháp lý mạnh mẽ hơn để bảo vệ quyền lợi của trẻ em gái",
        tags: ["Tảo hôn và hôn nhân ép buộc "]
    },

{
        name: " Nguyễn Văn Trường ",
        region: "Miền Trung (Huế)",
        address: "Không có địa chỉ",
        dob: "15/10/1996",
        job: " Kinh doanh",
        description: "Ở các làng chài quanh Huế, nhiều trẻ em phải ra khơi từ khi còn rất nhỏ để kiếm tiền phụ giúp gia đình. Hầu hết các em đều không được đi học đầy đủ, điều này khiến các em thiếu hụt kỹ năng và kiến thức cần thiết cho tương lai. Thêm vào đó, làm việc trên biển luôn đi kèm với những rủi ro, không ít trường hợp đã gặp phải tai nạn hoặc sự cố nguy hiểm. Tôi nghĩ rằng cần có những chương trình hỗ trợ việc làm cho các gia đình khó khăn, để trẻ em không phải làm việc sớm và có thể tập trung vào việc học tập",
        tags: ["Thiếu tiếp cận giáo dục "]
    },

{
        name: " Đỗ Thị Giang ",
        region: "Miền Nam (Cần Thơ)",
        address: "Không có địa chỉ",
        dob: "30/04/2004",
        job: "Học sinh",
        description: "Nhiều trẻ em ở các vùng quê tại Đồng bằng sông Cửu Long không được tiếp cận với dịch vụ chăm sóc y tế tốt, đặc biệt là ở những vùng ngập lụt hoặc xa trung tâm. Có những trường hợp trẻ bị bệnh nhưng không được chữa trị kịp thời vì bệnh viện quá xa, hoặc chi phí quá cao đối với gia đình các em. Điều này dẫn đến những hậu quả nghiêm trọng cho sức khỏe và sự phát triển của các em. Tôi mong rằng chính quyền sẽ cải thiện hệ thống y tế ở nông thôn, đặc biệt là việc mở rộng mạng lưới các trạm y tế xã và cung cấp thuốc men miễn phí cho các trường hợp khó khăn",
        tags: ["Lao động trẻ em"]
    },

{
        name: " Bùi Văn Hiếu ",
        region: "Miền Bắc (Sơn La)",
        address: "Không có địa chỉ",
        dob: "25/07/1997",
        job: " Giáo viên ",
        description: "Là một giáo viên dạy ở vùng cao Sơn La, tôi đã chứng kiến nhiều trẻ em phải nghỉ học giữa chừng vì gia đình không có đủ tiền đóng học phí hay mua sách vở. Thực tế, nhiều em phải giúp gia đình làm nương, chăm sóc gia súc từ rất nhỏ, điều này khiến cho việc học tập bị gián đoạn. Những đứa trẻ này đều rất ham học nhưng hoàn cảnh buộc chúng phải lựa chọn giữa việc học và việc kiếm tiền. Chính quyền cần có các chính sách hỗ trợ học phí, cấp học bổng và cung cấp dụng cụ học tập miễn phí cho những em có hoàn cảnh khó khăn để đảm bảo rằng tất cả trẻ em đều có cơ hội đến trường",
        tags: ["Khó khăn kinh tế và thiếu tiếp cận dịch vụ "]
    },

{
        name: " Vũ Thị Linh",
        region: "Miền Bắc(Quảng Ninh)",
        address: "không có địa chỉ",
        dob: "14/01/2003",
        job: " Sinh viên",
        description: "Việc buôn bán trẻ em qua biên giới ở Quảng Ninh là một vấn đề thực sự đáng lo ngại. Nhiều em bị lừa đưa qua biên giới để làm lao động cưỡng bức hoặc bị cưỡng ép kết hôn với người nước ngoài. Các em thường là nạn nhân của các đường dây buôn người, và rất khó để có thể giải cứu các em trở về an toàn. Tôi hy vọng chính quyền sẽ tăng cường kiểm soát các khu vực biên giới và triển khai nhiều chương trình giáo dục để cảnh báo trẻ em và gia đình về nguy cơ này",
        tags: ["Bắt cóc và buôn bán trẻ em "]
    },
{
        name: "Nguyễn Hoàng Long",
        region: "Miền Trung(Quảng Bình)",
        address: "Không có địa chỉ",
        dob: "05/12/2000",
        job: "Công nhân",
        description: "Ở Quảng Bình, trẻ em thường phải làm những công việc lao động tay chân như làm gạch, phụ hồ, hay làm việc tại các xưởng chế biến thủy sản. Điều kiện làm việc rất khắc nghiệt và nguy hiểm, ảnh hưởng nghiêm trọng đến sức khỏe và sự phát triển của các em. Cần có những biện pháp mạnh mẽ hơn từ phía chính quyền để kiểm soát và xử lý những cơ sở sử dụng lao động trẻ em trái phép, cũng như hỗ trợ các gia đình nghèo để giảm bớt áp lực về kinh tế",
        tags: ["Khó khăn kinh tế và thiếu tiếp cận dịch vụ"]
    },

{
        name: " Lê Thị Kim Ngân ",
        region: "Miền Bắc(Hải Phòng)",
        address: "Không có địa chỉ",
        dob: "05/12/2000",
        job: " Công nhân ",
        description: " Bắt nạt học đường là một vấn đề nghiêm trọng tại các trường học ở Hải Phòng. Nhiều học sinh phải chịu đựng những lời nói miệt thị, lăng mạ, hay thậm chí bị đánh đập bởi bạn bè cùng lớp. Các em cảm thấy lo lắng và sợ hãi, không dám chia sẻ với thầy cô hay cha mẹ vì sợ bị trả thù. Tôi nghĩ rằng nhà trường cần có các biện pháp giáo dục, phòng ngừa và xử lý nghiêm ngặt các hành vi này để tạo ra một môi trường học tập an toàn và lành mạnh cho tất cả học sinh",
        tags: ["Bắt nạt và bạo lực học đường"]
    },
{
        name: " Phan Văn Long ",
        region: "Miền Trung (Đà Nẵng)",
        address: "Không có địa chỉ",
        dob: "10/03/2001",
        job: " Nhân viên IT ",
        description: "Xâm hại tình dục trẻ em là một vấn đề cần phải được đưa ra ánh sáng. Nhiều trẻ em bị xâm hại nhưng không dám lên tiếng vì sợ hãi hoặc xấu hổ. Ở Đà Nẵng, các tổ chức xã hội đã có những bước tiến trong việc cung cấp dịch vụ tư vấn tâm lý và pháp lý cho các nạn nhân, nhưng chúng ta cần nhiều hơn nữa. Tôi mong rằng sẽ có thêm nhiều chiến dịch giáo dục cộng đồng để nâng cao nhận thức, giúp trẻ em và phụ huynh hiểu rõ về các quyền của mình và không sợ hãi khi lên tiếng tố giác",
        tags: ["Xâm hại tình dục trẻ em"]
    },

{
        name: " Đặng Thị My ",
        region: "Miền Nam (Vũng Tàu)",
        address: "Không có địa chỉ",
        dob: "08/09/1996",
        job: " Nhân viên nhà hàng",
        description: "Ở các làng chài quanh Vũng Tàu, trẻ em thường phải theo cha mẹ ra khơi từ rất sớm, thậm chí từ 5, 6 tuổi. Các em không có cơ hội được học hành đầy đủ vì phải dành hầu hết thời gian trên biển để kiếm sống. Điều này ảnh hưởng không chỉ đến việc học mà còn đến sự phát triển thể chất và tinh thần của các em. Tôi mong rằng sẽ có các chương trình giáo dục linh hoạt, tạo cơ hội học tập cho trẻ em làng chài, để các em có thể vừa học vừa làm mà không bị bỏ lại phía sau",
        tags: ["Thiếu tiếp cận giáo dục"]
    },

{
        name: " Trịnh Văn Nguyên",
        region: "Miền Bắc (Yên Bái)",
        address: "Không có địa chỉ",
        dob: "22/11/2004",
        job: " Học sinh ",
        description: "Ở các bản làng vùng cao như Yên Bái, rất nhiều trẻ em phải bỏ học sớm để phụ giúp gia đình trong việc nương rẫy, chăn nuôi. Điều này khiến cho họ không có cơ hội để học tập và phát triển bản thân, dẫn đến việc nghèo khó kéo dài qua các thế hệ. Cần có thêm các chính sách khuyến học, cung cấp học bổng và các chương trình giáo dục miễn phí để giúp đỡ những em nhỏ này",
        tags: ["Chênh lệch về sắc tộc và vùng miền"]
    },

{
        name: " Dương Thị Oanh",
        region: "Miền Trung (Phú Yên)",
        address: "456 Đường DEF, Đà Nẵng",
        dob: "06/05/2003",
        job: " Sinh viên ",
        description: "Trẻ em ở các vùng ven biển như Phú Yên thường gặp khó khăn trong việc tiếp cận các dịch vụ chăm sóc sức khỏe tốt. Những dịch vụ y tế cần thiết, như tiêm chủng và khám sức khỏe định kỳ, thường không có sẵn hoặc quá đắt đỏ đối với các gia đình nghèo. Điều này dẫn đến tình trạng suy dinh dưỡng và bệnh tật ở trẻ em. Tôi hy vọng rằng các trạm y tế sẽ được đầu tư tốt hơn và các chương trình chăm sóc sức khỏe miễn phí sẽ được mở rộng đến các khu vực này",
        tags: ["Thiếu tiếp cận chăm sóc y tế"]
    },

{
        name: " Nguyễn Văn Phong ",
        region: "Miền Nam (Bình Dương)",
        address: "Không có địa chỉ",
        dob: "17/04/1999",
        job: " Công nhân nhà máy",
        description: "Tôi từng làm việc ở một nhà máy nơi có rất nhiều trẻ em phải đi làm cùng cha mẹ vì gia đình quá khó khăn. Điều này không chỉ khiến các em không được học hành đầy đủ mà còn phải chịu đựng các điều kiện làm việc nguy hiểm. Chính phủ cần có những biện pháp nghiêm ngặt để ngăn chặn việc sử dụng lao động trẻ em trong các nhà máy, và đồng thời hỗ trợ tài chính cho các gia đình khó khăn để các em có thể tập trung vào việc học",
        tags: ["Khó khăn kinh tế và thiếu tiếp cận dịch vụ"]
    },

{
        name: " Đỗ Thị Quỳnh ",
        region: "Miền Trung (Thái Nguyên)",
        address: "Không có địa chỉ",
        dob: "11/08/2001",
        job: " Nhân viên xã hội ",
        description: "Công việc của tôi là làm việc với những trẻ em bị bạo lực gia đình. Nhiều em đến từ các vùng nông thôn xa xôi, nơi mà các dịch vụ hỗ trợ còn hạn chế. Điều đáng buồn là nhiều em phải chịu đựng bạo lực từ người thân trong gia đình mà không có nơi nào để trốn tránh. Tôi nghĩ cần có thêm các trung tâm bảo vệ trẻ em và các chương trình tư vấn tâm lý để giúp đỡ những nạn nhân này vượt qua nỗi đau và xây dựng cuộc sống mới",
        tags: ["Bạo lực gia đình "]
    },

{
        name: " Bùi Văn Dũng ",
        region: "Miền Bắc (Gia Lai)",
        address: "Không có địa chỉ",
        dob: "02/02/1985",
        job: " Lái xe tải",
        description: "Tôi đã thấy nhiều em nhỏ phải làm việc trên các nương rẫy từ khi còn rất nhỏ ở Gia Lai. Các em làm những công việc nặng nhọc như trồng cà phê, chăm sóc cây trồng mà không được bảo hộ đầy đủ. Điều này không chỉ gây hại cho sức khỏe mà còn làm mất người lớn. Chính phủ cần tăng cường thực thi các chính sách chống lao động trẻ em, đồng thời triển khai các chương trình hỗ trợ cho các gia đình để trẻ em không phải bỏ học sớm",
        tags: ["Lao động trẻ em "]
    },

];


// Hàm hiển thị danh sách người
function displayPeople(personList) {
    const personContainer = document.getElementById("person-list");
    personContainer.innerHTML = ""; 

    personList.forEach(person => {
        const personCard = document.createElement("div");
        personCard.className = "person-card";

        const tags = person.tags.map(tag => `<span class="tags">${tag}</span>`).join(" ");
        
        personCard.innerHTML = `
            <h2>${person.name}</h2>
            <ul class="person-info">
                <li><span>Vùng miền:</span> ${person.region}</li>
                <li><span>Địa chỉ:</span> ${person.address}</li>
                <li><span>Ngày sinh:</span> ${person.dob}</li>
                <li><span>Công việc:</span> ${person.job}</li>
            </ul>
            <p class="person-description">${person.description}</p>
            <div>${tags}</div>
        `;

        personCard.setAttribute("data-region", person.region);
        personCard.setAttribute("data-tags", person.tags.join(","));
        personContainer.appendChild(personCard);
    });
}

function filterByRegion(region) {
    const personCards = document.querySelectorAll(".person-card");
    personCards.forEach(card => {
        const cardRegion = card.getAttribute("data-region");
        card.style.display = (region === "all" || cardRegion.includes(region)) ? "block" : "none";
    });
}

function filterByIssue(issue) {
    const personCards = document.querySelectorAll(".person-card");
    personCards.forEach(card => {
        const cardTags = card.getAttribute("data-tags");
        card.style.display = (issue === "all" || cardTags.includes(issue)) ? "block" : "none";
    });
}

// Hiển thị tất cả người dùng
function showAll() {
    const personCards = document.querySelectorAll(".person-card");
    personCards.forEach(card => {
        card.style.display = "block";
    });
}

// Ẩn tất cả người dùng
function hideAll() {
    const personCards = document.querySelectorAll(".person-card");
    personCards.forEach(card => {
        card.style.display = "none";
    });
}

document.getElementById("region-select").addEventListener("change", (e) => {
    filterByRegion(e.target.value);
});

document.getElementById("issue-select").addEventListener("change", (e) => {
    filterByIssue(e.target.value);
});

document.getElementById("show-all-btn").addEventListener("click", showAll);
document.getElementById("hide-all-btn").addEventListener("click", hideAll);

// Sự kiện cho nút "Gửi Ý Kiến" để hiển thị hoặc ẩn khung báo cáo
document.getElementById("submit-opinion-btn").addEventListener("click", function () {
    const reportSection = document.querySelector(".report-section");
    reportSection.style.display = reportSection.style.display === "none" ? "block" : "none";
});

// Sự kiện khi gửi biểu mẫu báo cáo
document.getElementById("report-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Lấy dữ liệu từ biểu mẫu
    const name = document.getElementById("name").value;
    const region = document.getElementById("region").value;
    const address = document.getElementById("address").value;
    const dob = document.getElementById("dob").value;
    const job = document.getElementById("job").value;
    const issue = document.getElementById("issue").value;
    const details = document.getElementById("details").value;

    if (!name) {
        alert("Vui lòng nhập tên.");
        return;
    }
    if (!region) {
        alert("Vui lòng chọn vùng miền.");
        return;
    }
    if (!address) {
        alert("Vui lòng nhập địa chỉ.");
        return;
    }
    if (!dob) {
        alert("Vui lòng nhập ngày sinh.");
        return;
    }
    if (!job) {
        alert("Vui lòng nhập công việc.");
        return;
    }
    if (!issue) {
        alert("Vui lòng chọn vấn đề.");
        return;
    }
    if (!details) {
        alert("Vui lòng nhập chi tiết.");
        return;
    }

    people.push({
        name: name,
        region: region,
        address: address,
        dob: dob,
        job: job,
        description: details,
        tags: [issue]
    });

    displayPeople(people);

    alert("Thông tin của bạn đã được tiếp nhận");

    // Xóa dữ liệu biểu mẫu và ẩn khung báo cáo
    document.getElementById("report-form").reset();
    document.querySelector(".report-section").style.display = "none";
});

// Hiển thị danh sách người khi tải trang
displayPeople(people);
