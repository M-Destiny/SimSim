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
    document.getElementById('message').innerText = 'Love you, yay!';
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
    alert("You clicked the big Yes button!");
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
