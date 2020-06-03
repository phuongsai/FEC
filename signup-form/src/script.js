/**
 * validate input email
 * @param string
 * @return boolean
 * */
function validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

function submitForm() {
    first_name = document.getElementById('first_name').value;
    last_name = document.getElementById('last_name').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    error_icon_1 = document.getElementById('error--icon_1');
    error_msg_1 = document.getElementById('error--msg_1');
    error_icon_2 = document.getElementById('error--icon_2');
    error_msg_2 = document.getElementById('error--msg_2');
    error_icon_3 = document.getElementById('error--icon_3');
    error_msg_3 = document.getElementById('error--msg_3');
    error_icon_4 = document.getElementById('error--icon_4');
    error_msg_4 = document.getElementById('error--msg_4');

    // check input Frist name
    if (first_name === '') {
        error_icon_1.style.display = 'block';
        error_msg_1.style.display = 'block';
        error_msg_1.innerHTML = 'First Name can not be empty!';
        document.getElementById('first_name').style.border = '2px solid hsl(0, 100%, 74%)';
    } else {
        error_icon_1.style.display = 'none';
        error_msg_1.style.display = 'none';
        document.getElementById('first_name').style.border = '1px solid hsl(248, 32%, 49%)';
    }

    // check input Last name
    if (last_name === '') {
        error_icon_2.style.display = 'block';
        error_msg_2.style.display = 'block';
        error_msg_2.innerHTML = 'Last Name cannot be empty!';
        document.getElementById('last_name').style.border = '2px solid hsl(0, 100%, 74%)';
    } else {
        error_icon_2.style.display = 'none';
        error_msg_2.style.display = 'none';
        document.getElementById('last_name').style.border = '1px solid hsl(248, 32%, 49%)';
    }

    // check input email
    if (email === '') {
        error_icon_3.style.display = 'block';
        error_msg_3.style.display = 'block';
        error_msg_3.innerHTML = 'Email Address cannot be empty!';
        document.getElementById('email').style.border = '2px solid hsl(0, 100%, 74%)';
    } else if (!validateEmail(email)) {
        error_icon_3.style.display = 'block';
        error_msg_3.style.display = 'block';
        error_msg_3.innerHTML = 'Look like this is not an email!';
        document.getElementById('email').style.border = '2px solid hsl(0, 100%, 74%)';
    } else {
        error_icon_3.style.display = 'block';
        error_msg_3.style.display = 'block';
        document.getElementById('email').style.border = '1px solid hsl(248, 32%, 49%)';
    }

    // check input password
    if (password === '') {
        error_icon_4.style.display = 'block';
        error_msg_4.style.display = 'block';
        error_msg_4.innerHTML = 'Password cannot be empty!';
        document.getElementById('password').style.border = '2px solid hsl(0, 100%, 74%)';
    } else {
        error_icon_4.style.display = 'block';
        error_msg_4.style.display = 'block';
        document.getElementById('password').style.border = '1px solid hsl(248, 32%, 49%)';
    }
}