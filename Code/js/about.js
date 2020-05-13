

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
    const firstNameError = document.querySelectorAll("#firstNameError");
    const firstNameValue = firstName.value;

    // EMAIL SECTION
    const email = document.querySelector("#emailaddress");
    const emailError = document.querySelector("#emailError");
    const emailInvalidError = document.querySelector("#invalidEmailError");
    const emailValue = email.value;

    // MESSAGE SECTION
    const message = document.querySelector("#message");
    const messageError = document.querySelector("#messageError");
    const messageValue = message.value;

    // // Check input value for first name is > 0
    // if (checkInputValue(firstNameValue) === true) {
    //       firstNameError.style.display = "none";
    //  } else {
    //       firstNameError.style.display = "block";
    //  }

    // Check input value for email is > 0
    if (checkInputValue(emailValue) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    // Check
    if (validateEmail(emailValue) === true) {
        emailInvalidError.style.display = "none";
    } else {
        emailInvalidError.style.display = "block";
    }

    if (checkMessageValue(messageValue) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
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

}

function hideErrorMessage(firstNameValue, emailValue, messageValue){
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
