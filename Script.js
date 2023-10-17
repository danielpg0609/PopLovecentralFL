// Example: Add a click event handler for navigation buttons
document.addEventListener("DOMContentLoaded", function() {
    const headerButtons = document.querySelectorAll(".header-button");
    
    headerButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link behavior
            const targetId = button.getAttribute("href").substring(1); // Extract the target section ID
            scrollToSection(targetId); // Custom function to scroll to the target section
        });
    });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// You can add more JavaScript functionality as needed

