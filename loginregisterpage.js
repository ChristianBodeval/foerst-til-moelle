/*

// Get the button element
var registerRedirectButton = document.querySelector('.createAnnonceButton');

// Add click event listener
annonceButton.addEventListener('click', function() {
    // Print a message to the console
    console.log('Button clicked!');
});


*/
function CheckRegistrationAndRedirect() {
    let usernameInput       = document.getElementById('registerUsername').value;
    let emailInput          = document.getElementById('registerEmail').value;
    let passwordInput       = document.getElementById('registerPassword').value;
    let passwordRepeatInput = document.getElementById('registerPasswordRepeat').value;

    let emailPattern             = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; /* is "x then @ then . then y -> OK"?*/
    let passwordPatternLength    = /.{8,}/;
    let passwordPatternLowercase = /[a-z]+/;
    let passwordPatternUppercase = /[A-Z]+/;
    let passwordPatternDigit     = /\d+/;

    let alertMessage = '';
    let alerting = false;

    if (usernameInput == '') {
        alerting = true;
        alertMessage += 'Brugernavn skal udfyldes.\n';
    }
    if (!emailPattern.test(emailInput)) {
        alerting = true;
        alertMessage += 'Email skal udfyldes (med en gyldig email).\n';
    }
    if (!passwordPatternLength.test(passwordInput)) {
        alerting = true;
        alertMessage += 'Kodeordet skal indeholde mindst 8 tegn.\n';
    }
    if (!passwordPatternLowercase.test(passwordInput)) {
        alerting = true;
        alertMessage += 'Kodeordet skal indeholde mindst 1 lille bogstav.\n'
    }
    if (!passwordPatternUppercase.test(passwordInput)) {
        alerting = true;
        alertMessage += 'Kodeordet skal indeholde mindst 1 stort bogstav.\n';
    }
    if (!passwordPatternDigit.test(passwordInput)) {
        alerting = true;
        alertMessage += 'Kodeordet skal indeholde mindst 1 tal.\n';
    }
    if (passwordInput != passwordRepeatInput) {
        alerting = true;
        alertMessage += 'Kodeord passer ikke med 2. indtastning.';
    }
    if (alerting) {
        alert(alertMessage);
    } else {
        location.href = "mainpage.html";
    }

}

function Test() {
    console.log('test');
}
function CheckLoginAndRedirect() {
    let usernameInput = document.getElementById('loginUsername').value;
    let passwordInput = document.getElementById('loginPassword').value;

    let alertMessage = '';
    let alerting = false;

    if (usernameInput == '') {
        alerting = true;
        alertMessage += 'Brugernavn skal udfyldes.\n';
    }
    if (passwordInput == '') {
        alerting = true;
        alertMessage += 'Kodeord skal udfyldes.\n';
    }
    if (alerting) {
        alert(alertMessage);
    } else {
        location.href = "mainpage.html";
    }

}