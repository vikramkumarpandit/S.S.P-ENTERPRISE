// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function () {
    
    // --- Mobile Menu Logic ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = mobileMenuButton.querySelector('i');

    mobileMenuButton.addEventListener('click', function () {
        // Toggle the 'hidden' class on the mobile menu
        mobileMenu.classList.toggle('hidden');

        // Change the icon from bars to times (X) and back
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenuIcon.classList.remove('fa-times');
            mobileMenuIcon.classList.add('fa-bars');
        } else {
            mobileMenuIcon.classList.remove('fa-bars');
            mobileMenuIcon.classList.add('fa-times');
        }
    });

    // Close the mobile menu when a navigation link is clicked
    const mobileMenuLinks = mobileMenu.getElementsByTagName('a');
    for (let link of mobileMenuLinks) {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            // Reset the icon to bars
            mobileMenuIcon.classList.remove('fa-times');
            mobileMenuIcon.classList.add('fa-bars');
        });
    }

    // --- Video Modal Logic ---
    const videoModal = document.getElementById('video-modal');
    const videoIframe = document.getElementById('video-iframe');
    const closeModalButton = document.getElementById('video-modal-close');

    // Make the openVideoModal function globally accessible
    window.openVideoModal = function(videoUrl) {
        // Set the video source and display the modal
        videoIframe.src = videoUrl;
        videoModal.style.display = 'flex';
    }

    // Function to close the video modal
    function closeVideoModal() {
        // Hide the modal and clear the video source to stop playback
        videoModal.style.display = 'none';
        videoIframe.src = ''; 
    }

    // Add event listeners for closing the modal
    closeModalButton.addEventListener('click', closeVideoModal);

    // Also close the modal if the user clicks on the background overlay
    videoModal.addEventListener('click', function(event) {
        if (event.target === videoModal) {
            closeVideoModal();
        }
    });
});
