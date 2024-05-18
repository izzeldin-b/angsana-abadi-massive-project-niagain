// Get all elements with the class "profile-page-right-container-header-parts"
const parts = document.querySelectorAll('.myorders-page-right-container-header-parts');

parts.forEach(part => {
    part.addEventListener('click', () => {
        // Remove the "selected" ID from any currently selected part
        parts.forEach(otherPart => {
            otherPart.removeAttribute('id'); 
        });

        // Add the "selected" ID to the clicked part
        part.id = 'myorders-page-right-container-header-parts-selected';
    });
});