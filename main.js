function moveNoButton() {
    const noButton = document.querySelector('.no-button');
    const containerWidth = 800;
    const containerHeight = 400;

    // Calculate new position within the container boundaries
    const maxX = containerWidth - noButton.clientWidth;
    const maxY = containerHeight - noButton.clientHeight;

    const newX = Math.max(0, Math.min(maxX, randomX() * maxX));
    const newY = Math.max(0, Math.min(maxY, randomY() * maxY));

    // Set the new position
    noButton.style.position = 'absolute';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}

function randomX() {
    return Math.random() * 2 - 1; // Generates a random number between -1 and 1
}

function randomY() {
    return Math.random() * 2 - 1; // Generates a random number between -1 and 1
}

function changeContent() {
    document.getElementById('message').innerText = `Happy 4 Month Anniversary, my sweet Saloni! ✨💖 As we mark another Month of love, giggles, and countless memories, my heart feels like it's dancing in a field of daisies with you by my side. 🌼 You, my dear, are the sparkle in my eye, the twinkle in my smile, and the joy in my soul. 💫 Here's to the giggles we've shared, the dreams we've spun, and the love that grows sweeter with each passing day. 🌟 Thank you for filling my world with endless happiness and love. Cheers to us, my love! 🥂💕`;
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('teddy-bears').style.display = 'none';
}
function showExtendedMessage() {
    // Hide the original message and buttons
    document.getElementById('message').style.display = 'none';
    document.getElementById('buttons').style.display = 'none';

    // Show the extended message section
    document.getElementById('extendedMessage').style.display = 'block';
}

function bigYesButtonClick() {
    // You can add actions for the enlarged "Yes" button click here
    alert(`Happy 4 month Anniversary, my sweet Saloni! ✨💖 As we mark another Month of love, giggles, and countless memories, my heart feels like it's dancing in a field of daisies with you by my side. 🌼 You, my dear, are the sparkle in my eye, the twinkle in my smile, and the joy in my soul. 💫 Here's to the giggles we've shared, the dreams we've spun, and the love that grows sweeter with each passing day. 🌟 Thank you for filling my world with endless happiness and love. Cheers to us, my love! 🥂💕`);
}
function createHearts() {
    const numberOfHearts = 10;

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Set random position
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        heart.style.left = `${randomX}px`;
        heart.style.top = `${randomY}px`;

        // Append heart to the body
        document.body.appendChild(heart);

        // Remove the heart after a certain duration
        setTimeout(() => {
            heart.remove();
        }, 5000); // Adjust the duration as needed
    }
}

// Call createHearts at regular intervals to generate hearts
setInterval(createHearts, 5000); // Adjust the interval as needed
// Function to check if two elements overlap
function overlap(el1, el2) {
    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();

    return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    );
}

// Function to create a couple photo with animation
function createCouplePhoto() {
    const numberOfPhotos = 4;
    const container = document.getElementById('couplePhotosContainer');

    // Create a new photo
    const photo = document.createElement('img');
    photo.src = 'path/to/couple-photo.jpg'; // Replace with the actual path or URL
    photo.alt = 'Couple Photo';
    photo.classList.add('couple-photo');

    // Set random position and check for overlap
    let position;
    do {
        position = getRandomPosition();
    } while (
        overlap(photo, document.getElementById('message')) ||
        overlap(photo, document.getElementById('teddy-bears')) ||
        container.children.length > 0 && Array.from(container.children).some(existingPhoto => overlap(photo, existingPhoto))
    );

    photo.style.left = `${position.x}px`;
    photo.style.top = `${position.y}px`;

    container.appendChild(photo);

    // Add animation class for a nice effect
    setTimeout(() => {
        photo.classList.add('photo-animation');
    }, 100);
}

// Call createCouplePhoto at regular intervals to generate photos
setInterval(createCouplePhoto, 5000); // Adjust the interval as needed
