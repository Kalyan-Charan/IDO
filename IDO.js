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

const domain = "https://artcrew.store/";  // Replace this with your actual domain

document.addEventListener('mouseup', function () {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    const socialIcons = document.getElementById('social-icons');

    // Show social icons if there's selected text
    if (selectedText.length > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        // Position social icons near the selected text
        socialIcons.style.top = `${rect.top + window.scrollY - socialIcons.offsetHeight - 10}px`;
        socialIcons.style.left = `${rect.left + (rect.width / 2) - (socialIcons.offsetWidth / 2)}px`;
        socialIcons.style.display = 'block';

        // Set sharing links with selected text
        document.getElementById('share-facebook').href = `https://www.facebook.com/sharer/sharer.php?u=${domain}&quote=${encodeURIComponent(selectedText)}`;
        document.getElementById('share-linkedin').href = `https://www.linkedin.com/sharing/share-offsite/?url=${domain}&summary=${encodeURIComponent(selectedText)}`;
        document.getElementById('share-twitter').href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedText)}&url=${domain}`;
    } else {
        // Hide social icons when no text is selected
        socialIcons.style.display = 'none';
    }
});

// Hide social icons when clicking outside
document.addEventListener('mousedown', function (event) {
    const socialIcons = document.getElementById('social-icons');
    if (!socialIcons.contains(event.target)) {
        socialIcons.style.display = 'none';
    }
});







//Color: (light-green: rgba(44,97,69,255))
       //(heavy-green: rgba(0,121,49,255))
       //(lighty-black: rgb(26,26,26,255))
