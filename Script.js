document.addEventListener('DOMContentLoaded', function () {
    // Lightbox effect for images
    const images = document.querySelectorAll('.gallery img, .flavors img');

    images.forEach(img => {
        img.addEventListener('click', function () {
            // Create a lightbox container
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';

            // Create an image element inside the lightbox
            const lightboxImg = document.createElement('img');
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;

            // Append the image to the lightbox
            lightbox.appendChild(lightboxImg);

            // Append the lightbox to the body
            document.body.appendChild(lightbox);

            // Close the lightbox when clicked
            lightbox.addEventListener('click', function () {
                document.body.removeChild(lightbox);
            });
        });
    });
});

