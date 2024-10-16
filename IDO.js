// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Add an event listener for the scroll event
    window.addEventListener('scroll', function() {
        var navbar = document.getElementById('navbar'); // Get the navbar element
        
        // Check if user has scrolled down more than 50px
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-small'); // Add the shrinking class
        } else {
            navbar.classList.remove('navbar-small'); // Remove it when at the top
        }
    });
});









//Color: (light-green: rgba(44,97,69,255))
       //(heavy-green: rgba(0,121,49,255))
       //(lighty-black: rgb(26,26,26,255))