// Makes sure input value is greater than 0
function checkInputValue(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    }
}
// Make sure message field contains atleast 10 characters
function checkMessageValue(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 9) {
        return true;
    } else {
        return false;
    }
}

// Selecting div in html
const form = document.querySelector("#form");

// Adding eventlistner to submit button and validation function
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


    // ----- This one bugged out... ----- //

    // // Check input value for first name is > 0
    // if (checkInputValue(firstNameValue) === true) {
    //     firstNameError.style.display = "none";
    // } else {
    //     firstNameError.style.display = "block";
    // }

    // Making sure the input values are correctly to create a validation confirmation
    let hasTrueValues = true;

    // Check input value for email is > 0
    if (checkInputValue(emailValue) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        hasTrueValues = false;
    }

    // Check if email follows regex
    if (validateEmail(emailValue) === true) {
        emailInvalidError.style.display = "none";
    } else {
        emailInvalidError.style.display = "block";
        hasTrueValues = false;
    }

    // Check if message field have any value/inputs
    if (checkMessageValue(messageValue) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
        hasTrueValues = false;
    }

    // If confirmation is success - display/alert something and also reset the contact form
    if (hasTrueValues) {

        document.querySelector("#form").reset();
        // TODO - SOMETHING ELSE THAN ALERT?
        alert("Your form was submitted successfully! Don't worry, this is doesn't send anything or store any data. If you want to contact SpaceX directly, go to their website: https://www.spacex.com/about ");
    }
}

// Making sure form-error text appears when it needs to
function hideErrorMessage(firstNameValue, emailValue, messageValue) {
    document.querySelector("#firstNameError") = "block";
}


// Making sure email follows the correct regex
function validateEmail(email) {
    event.preventDefault();
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}
