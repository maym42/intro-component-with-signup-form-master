const formSignUp = document.getElementById('form-sign-up');
/*input*/
const inputFeilds = document.querySelectorAll(".input-style");
const email = document.getElementById('input-email');
/*error */
const allErrors = document.querySelectorAll(".error");
const arrErrorText = ['First Name cannot be empty', 'Last Name cannot be empty',
    "Looks like is not an email", "Password cannot be empty"
];



for (let feild of inputFeilds.entries()) {
    feild[1].addEventListener('focusout', function() {
        isWarning(feild[0], feild[1]);
    });
}


formSignUp.addEventListener('submit', function(event) {
    let flag = true;
    for (let input of inputFeilds.entries()) {
        if (isWarning(input[0], input[1])) {
            event.preventDefault();
            flag = false;
        }
    }
    if (flag) {
        alert("Well Done! No error");
    }
});


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isWarning(index, feild) {
    if (feild === email && validateEmail(feild.value) == false) {
        allErrors[index].innerHTML = arrErrorText[index];
        feild.classList.add("input-warning-style");
        return true;

    } else if (feild.value.length === 0) {
        allErrors[index].innerHTML = arrErrorText[index];
        feild.classList.add("input-warning-style");
        return true;

    } else {
        feild.classList.remove("input-warning-style");
        allErrors[index].innerText = "";
        return false;
    }
}