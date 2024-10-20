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

const domain = "https://artcrew.store/";  // Replace with your actual domain

document.addEventListener('mouseup', function () {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    const socialIcons = document.getElementById('social-icons');

    if (selectedText.length > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        // Calculate the position to place the social icons above the text
        const topPosition = rect.top + window.scrollY - socialIcons.offsetHeight - 50; 
        let leftPosition = rect.left + (rect.width / 2) - (socialIcons.offsetWidth / 2);

        // Move 20px to the right (change to -20 to move left)
        leftPosition -= 60;  // Adjust this value to move right or left

        // Ensure the social icons don't go off-screen horizontally
        const viewportWidth = window.innerWidth;
        const adjustedLeft = Math.max(10, Math.min(leftPosition, viewportWidth - socialIcons.offsetWidth - 10));

        // Apply calculated top and left positions
        socialIcons.style.top = `${topPosition}px`;
        socialIcons.style.left = `${adjustedLeft}px`;
        socialIcons.classList.add('show');  // Show the icons with fade-in animation

        // Update sharing links
        document.getElementById('share-facebook').href = `https://www.facebook.com/sharer/sharer.php?u=${domain}&quote=${encodeURIComponent(selectedText)}`;
        document.getElementById('share-linkedin').href = `https://www.linkedin.com/sharing/share-offsite/?url=${domain}&summary=${encodeURIComponent(selectedText)}`;
        document.getElementById('share-twitter').href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedText)}&url=${domain}`;
    } else {
        socialIcons.classList.remove('show');  // Hide the icons if no text is selected
    }
});

// Hide social icons when clicking outside
document.addEventListener('mousedown', function (event) {
    const socialIcons = document.getElementById('social-icons');
    if (!socialIcons.contains(event.target)) {
        socialIcons.classList.remove('show');
    }
});









//Color: (light-green: rgba(44,97,69,255))
       //(heavy-green: rgba(0,121,49,255))
       //(lighty-black: rgb(26,26,26,255))