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
    document.getElementById('message').innerText = `Happy First Anniversary, my love! 🎉💑 Time has flown by, and in this incredible journey together, my heart has only grown fonder for you. Today marks a year of laughter, shared dreams, and a love that has deepened with every passing moment. From the first day we met to the countless memories we've created, each step with you has been pure joy.

    Thank you for being my anchor, my confidante, and my greatest supporter. Your love has brought warmth to my days and purpose to my life. Here's to the countless tomorrows we'll face hand in hand, navigating the twists and turns with unwavering love. Happy anniversary, my darling. You are my forever and always – the melody in my heart and the sunshine in my soul. Cheers to the beautiful journey we've embarked upon, and to many more years of love, laughter, and endless happiness. I cherish you more than words can express. 💖🥂`;
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
    alert(`Happy First Anniversary, my love! 🎉💑 Time has flown by, and in this incredible journey together, my heart has only grown fonder for you. Today marks a year of laughter, shared dreams, and a love that has deepened with every passing moment. From the first day we met to the countless memories we've created, each step with you has been pure joy.

    Thank you for being my anchor, my confidante, and my greatest supporter. Your love has brought warmth to my days and purpose to my life. Here's to the countless tomorrows we'll face hand in hand, navigating the twists and turns with unwavering love. Happy anniversary, my darling. You are my forever and always – the melody in my heart and the sunshine in my soul. Cheers to the beautiful journey we've embarked upon, and to many more years of love, laughter, and endless happiness. I cherish you more than words can express. 💖🥂`);
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
