// JavaScript to enable smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scroll({
            top: targetSection.offsetTop - 60, // Adjust the offset if needed
            behavior: 'smooth'
        });
    });
});

