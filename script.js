// Define the sounds with their URLs
const sounds = {
    river: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Rain.mp3'),
    waves: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Birds.mp3') // Placeholder for testing
};

// Initialize each sound's volume to 50% and set it to loop
Object.keys(sounds).forEach(soundName => {
    sounds[soundName].loop = true;
    sounds[soundName].volume = 0.5; // Default to 50% volume
});

// Function to play/pause the sound and toggle the active class
function toggleSound(cardElement, soundName) {
    const sound = sounds[soundName];

    // Check if the sound is already playing
    if (sound.paused) {
        sound.play();
        cardElement.classList.add('active');
    } else {
        sound.pause();
        cardElement.classList.remove('active');
    }
}

// Function to adjust the volume of the specific sound
function adjustVolume(soundName, volume) {
    const sound = sounds[soundName];
    sound.volume = volume / 100; // Adjust volume between 0 and 1
}

// Event listener for each card to handle play/pause and volume control
document.querySelectorAll('.sound-card').forEach(card => {
    const soundName = card.dataset.sound;
    
    // Toggle play/pause when clicking the card (excluding the volume slider)
    card.addEventListener('click', (e) => {
        if (e.target.tagName !== 'INPUT') { // Ignore clicks on the volume slider
            toggleSound(card, soundName);
        }
    });

    // Adjust volume based on the range slider input
    const volumeSlider = card.querySelector('input[type="range"]');
    volumeSlider.addEventListener('input', (e) => {
        adjustVolume(soundName, e.target.value);
        e.stopPropagation(); // Prevent the card's click event from firing
    });
});