// Get the button element
var returnButton = document.querySelector('.returnButton');

// Add click event listener
returnButton.addEventListener('click', function() {
    // Print a message to the console
    event.preventDefault();
    console.log("Clicked");
    window.location.href = "mainpage.html"; // Change to the desired URL
});


var annonceButton = document.querySelector('.leftRegionLogo');

// Add click event listener
annonceButton.addEventListener('click', function() {
    // Print a message to the console
    event.preventDefault();
    window.location.href = "mainpage.html"; // Change to the desired URL
});

var annonceButton = document.querySelector('.leftRegionRankingUserlistButton');

// Add click event listener
annonceButton.addEventListener('click', function() {
    // Print a message to the console
    event.preventDefault();
    window.location.href = "userList.html"; // Change to the desired URL
});