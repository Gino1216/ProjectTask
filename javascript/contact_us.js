function CheckFirstName() {
    var regName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
    var el = document.getElementById('feedback1');
    var elname = document.getElementById('firstname').value;
    if(!elname.length > 0){
        el.textContent = 'Unable to empty, please enter back.';
    } 
    else { 
        
        if(!regName.test(elname)) {
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
    if(!elname1.length > 0){
        el.textContent = 'Unable to empty, please enter back.';
    } 
    else { 
        
        if(!regName.test(elname1)) {
            el.textContent = 'Invalid character,please re-enter.';
        }
        else 
             el.textContent = ''
        
    }
}

function  Checkemail() {
    var email = document.getElementById('email').value;
    var el = document.getElementById('feedback3');
    var mailformat = /^[A-Za-z0-9_.]{6,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$/;
    if (!email.length > 0){
        el.textContent = 'Unable to empty, please enter back.';
    } else {
        if (!mailformat.test(email)) {
        el.textContent = 'Invalid email, please re-enter.';
       
        }else
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
        if(!telformat.test(phone)) {
            el.textContent = 'Invalid character, please re-enter.';
        }
        else
        el.textContent = '';
    }
}

function CheckMessage() {
    var el = document.getElementById('feedback5');
    var message = document.getElementById('message').value;
    if(message.length <= 0) {
        el.textContent = 'Please re-enter.';
    }
    else
        el.textContent = ''
}




function checksend() {
    var name = document.getElementById('firstname');
    var name2 = document.getElementById('lastname');
    var email1 = document.getElementById('email');
    var phone2 = document.getElementById('phone');
    var message0 = document.getAnimations('message');

    var firstname = name.value;
    var lastname = name2.value;
    var email = email1.value;
    var phone = phone2.value;
    var message = message0.value;
    if(firstname == "" || lastname == "" || email == "" || phone == "" || message == "") {
        alert("Please enter enough.");
        return;
    }
    else
        alert("Successful");
}



