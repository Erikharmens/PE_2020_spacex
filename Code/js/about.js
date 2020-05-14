// Makes sure input value is greater than 0
function checkInputValue(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    }
}

function checkMessageValue(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 9) {
        return true;
    } else {
        return false;
    }
}

const form = document.querySelector("#form");

form.addEventListener("submit", formValidation);

function formValidation(event) {
    event.preventDefault();
    // console.log("The form was submitted");

    // FIRST NAME SECTION
    const firstName = document.querySelector("#firstname");
    console.log("firstName: " + firstName);
    const firstNameError = document.querySelectorAll("#firstNameError");
    console.log("firstNameError: " + firstNameError);
    const firstNameValue = firstName.value;
    console.log("firstNameValue: " + firstNameValue);

    // EMAIL SECTION
    const email = document.querySelector("#emailaddress");
    console.log("email: " + email);
    const emailError = document.querySelector("#emailError");
    console.log("emailError: " + emailError);
    const emailInvalidError = document.querySelector("#invalidEmailError");
    console.log("emailInvalidError: " + emailInvalidError);
    const emailValue = email.value;
    console.log("emailValue: " + emailValue);

    // MESSAGE SECTION
    const message = document.querySelector("#message");
    const messageError = document.querySelector("#messageError");
    const messageValue = message.value;

    // // Check input value for first name is > 0
    // if (checkInputValue(firstNameValue) === true) {
    //     firstNameError.style.display = "none";
    // } else {
    //     firstNameError.style.display = "block";
    // }

    let hasTrueValues = true;


    // Check input value for email is > 0
    if (checkInputValue(emailValue) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        hasTrueValues = false;
    }

    // Check
    if (validateEmail(emailValue) === true) {
        emailInvalidError.style.display = "none";
    } else {
        emailInvalidError.style.display = "block";
        hasTrueValues = false;
    }

    if (checkMessageValue(messageValue) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
        hasTrueValues = false;
    }

    // let allGood = true;
    // allGood - TESTING - REMOVE?
    // if (firstNameValue === true) {
    //     console.log("YaY")
    // } else {
    //     console.log("nay")
    //     allGood = false
    // }


    // if (emailValue === true) {
    //     console.log("YaY")
    // } else {
    //     console.log("nay")
    //     allGood = false
    // }

    // if (messageValue === true) {
    //     console.log("YaY")
    // } else {
    //     console.log("nay")
    //     allGood = false
    // }

    // if (allGood === true){
    //     alert("Everything submitted correctly")
    // } else {
    //     alert("Something is not correct")
    // }


    if (hasTrueValues) {

        document.querySelector("#form").reset();
        // TODO - SOMETHING ELSE THAN ALERT?
        alert("Your form was submitted successfully! Don't worry, this is doesn't send anything or store any data. If you want to contact SpaceX directly, go to their website: https://www.spacex.com/about ");
    }
}


function hideErrorMessage(firstNameValue, emailValue, messageValue) {
    document.querySelector("#firstNameError") = "block";
}


function validateEmail(email) {
    event.preventDefault();
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}

//  function showErrorMessage(){
//      const errorMessage = document.querySelector(".form-error")
//      if (errorMessage.style.display === "none") {
//        errorMessage.style.display = "block";
//      } else {
//        errorMessage.style.display = "none";
//      }
//    }