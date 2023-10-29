// Get the button element
var returnButton = document.querySelector('.returnButton');

// Add click event listener
returnButton.addEventListener('click', function() {
    // Print a message to the console
    event.preventDefault();
    console.log("Clicked");
    window.location.href = "mainpage.html"; // Change to the desired URL
});
