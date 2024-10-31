
function CheckFirstName() {
    var regName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
    var el = document.getElementById('feedback1');
    var elname = document.getElementById('firstname').value;
    if (!elname.length > 0) {
        el.textContent = 'Unable to empty, please enter back.';
    }
    else {

        if (!regName.test(elname)) {
            el.textContent = 'Invalid character,please re-enter.';
        }
        else
            el.textContent = ''

    }
}

function CheckLastName() {
    var regName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
    var el = document.getElementById('feedback2');
    var elname1 = document.getElementById('lastname').value;
    if (!elname1.length > 0) {
        el.textContent = 'Unable to empty, please enter back.';
    }
    else {

        if (!regName.test(elname1)) {
            el.textContent = 'Invalid character,please re-enter.';
        }
        else
            el.textContent = ''

    }
}

function Checkemail() {
    var email = document.getElementById('email').value;
    var el = document.getElementById('feedback3');
    var mailformat = /^[A-Za-z0-9_.]{6,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$/;
    if (!email.length > 0) {
        el.textContent = 'Unable to empty, please enter back.';
    } else {
        if (!mailformat.test(email)) {
            el.textContent = 'Invalid email, please re-enter.';

        } else
            el.textContent = '';
    }
}



function Checkphone() {
    var phone = document.getElementById('phone').value;
    var el = document.getElementById('feedback4');
    var telformat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (phone.length < 10) {
        el.textContent = 'Invalid character length, please re-enter.';

    }
    else {
        if (!telformat.test(phone)) {
            el.textContent = 'Invalid character, please re-enter.';
        }
        else
            el.textContent = '';
    }
}

function CheckMessage() {
    var el = document.getElementById('feedback5');
    var message = document.getElementById('message').value;
    if (message.length <= 0) {
        el.textContent = 'Please re-enter.';
    }
    else
        el.textContent = ''
}

function toggleDateField() {
    const requestType = document.getElementById('requestType').value;
    const dateField = document.getElementById('dateField');
    if (requestType === 'appointment') {
        dateField.style.display = 'block';
    } else {
        dateField.style.display = 'none';
    }
}




function checksend() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var requestType = document.getElementById('requestType').value;
    var appointmentDate = document.getElementById('appointmentDate').value;
    var appointmentTime = document.getElementById('appointmentTime').value;

    if (firstname === "" || lastname === "" || email === "" || phone === "" || message === "") {
        alert("Please enter enough information.");
        return;
    }

    // Dữ liệu cần gửi
    const data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        message: message,
        requestType: requestType,        // Thêm loại yêu cầu
        appointmentDate: requestType === 'appointment' ? appointmentDate : null,
        appointmentTime: requestType === "appointment" ? appointmentTime : null // Chỉ thêm ngày hẹn nếu yêu cầu là đặt lịch
    };

    // Gửi thông tin lên JSON server
    fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            alert("Thông tin đã được gửi thành công!");
            // Reset form sau khi gửi thành công
            document.querySelector('form').reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error sending message. Please try again later.");
        });
}

const menu = [
    {
      label: "Trang Chủ",
      href: "/index",
    },
    {
      label: "Về Chúng Tôi",
      href: "/about us",
    },
    {
      label: "Quyên Góp",
      href: "/ACTIVITI",
    },
    {
      label: "Thông Tin",
      href: "/check",
    },
    {
      label: "Liên Hệ",
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
         navElement.style.display = "none"
      } else {
        containerMenuMobileElement.style.backgroundColor = "white";
        containerMenuMobileElement.style.height = "100%";
        iconMenuOpenElement.style.display = "none";
        iconMenuCloseElement.style.display = "block";
        containerMenuMobileElement.classList.add("showMenu");
         navElement.style.display = "none"
        navElement.style.height = "100%";
        navElement.style.display = "block"
      }
    }
    iconMenuMobileElement.addEventListener("click", toggleMenuMobile);
  }
  getMenuMobile();
  



