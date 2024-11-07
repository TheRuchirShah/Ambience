// // Define the sounds with their URLs
// const sounds = {
//     river: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Rain.mp3'),
//     waves: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Birds.mp3') // Placeholder for testing
// };

// // Initialize each sound's volume to 50% and set it to loop
// Object.keys(sounds).forEach(soundName => {
//     sounds[soundName].loop = true;
//     sounds[soundName].volume = 0.5; // Default to 50% volume
// });

// // Function to play/pause the sound and toggle the active class
// function toggleSound(cardElement, soundName) {
//     const sound = sounds[soundName];

//     // Check if the sound is already playing
//     if (sound.paused) {
//         sound.play();
//         cardElement.classList.add('active');
//     } else {
//         sound.pause();
//         cardElement.classList.remove('active');
//     }
// }

// // Function to adjust the volume of the specific sound
// function adjustVolume(soundName, volume) {
//     const sound = sounds[soundName];
//     sound.volume = volume / 100; // Adjust volume between 0 and 1
// }

// // Event listener for each card to handle play/pause and volume control
// document.querySelectorAll('.sound-card').forEach(card => {
//     const soundName = card.dataset.sound;
    
//     // Toggle play/pause when clicking the card (excluding the volume slider)
//     card.addEventListener('click', (e) => {
//         if (e.target.tagName !== 'INPUT') { // Ignore clicks on the volume slider
//             toggleSound(card, soundName);
//         }
//     });

//     // Adjust volume based on the range slider input
//     const volumeSlider = card.querySelector('input[type="range"]');
//     volumeSlider.addEventListener('input', (e) => {
//         adjustVolume(soundName, e.target.value);
//         e.stopPropagation(); // Prevent the card's click event from firing
//     });
// });


// //

// // Define the sounds with URLs for playlists
// const sounds = {
//     lofi: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Drums.mp3'),
//     jazz: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Train.mp3'),
//     // Add more as needed
// };

// // Set all sounds to loop
// Object.keys(sounds).forEach(soundName => {
//     sounds[soundName].loop = true;
//     sounds[soundName].volume = 0.5; // Initial volume
// });

// // Function to play/pause a playlist item
// function togglePlaylistSound(cardElement, soundName) {
//     const sound = sounds[soundName];
//     if (sound.paused) {
//         sound.play();
//         cardElement.classList.add('active');
//     } else {
//         sound.pause();
//         cardElement.classList.remove('active');
//     }
// }

// // Event listener for each playlist card
// document.querySelectorAll('.playlist-card').forEach(card => {
//     const soundName = card.dataset.sound;
//     card.addEventListener('click', () => togglePlaylistSound(card, soundName));
// });


// Define the sounds and playlists with their URLs
const sounds = {
    river: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Rain.mp3'),
    waves: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Birds.mp3') // Placeholder for testing
};

const playlists = {
    lofi: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Drums.mp3'),
    jazz: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Train.mp3'),
    // Add more as needed
};

// Set each sound and playlist to loop and default volume
Object.keys(sounds).forEach(soundName => {
    sounds[soundName].loop = true;
    sounds[soundName].volume = 0.5;
});

Object.keys(playlists).forEach(playlistName => {
    playlists[playlistName].loop = true;
    playlists[playlistName].volume = 0.5;
});

// Function to stop all sounds in a group (either sounds or playlists)
function stopAll(group) {
    Object.keys(group).forEach(itemName => {
        group[itemName].pause();
        group[itemName].currentTime = 0; // Reset to start
    });
    // Remove active class from all cards
    document.querySelectorAll('.sound-card.active, .playlist-card.active').forEach(card => {
        card.classList.remove('active');
    });
}

// Function to play/pause the sound and toggle the active class for sound cards
function toggleSound(cardElement, soundName) {
    const sound = sounds[soundName];

    // Stop all playlists if a sound card is clicked
    stopAll(playlists);

    if (sound.paused) {
        sound.play();
        cardElement.classList.add('active');
    } else {
        sound.pause();
        cardElement.classList.remove('active');
    }
}

// Function to play/pause the sound and toggle the active class for playlist cards
function togglePlaylistSound(cardElement, playlistName) {
    const playlist = playlists[playlistName];

    // Stop all sounds if a playlist card is clicked
    stopAll(sounds);

    if (playlist.paused) {
        playlist.play();
        cardElement.classList.add('active');
    } else {
        playlist.pause();
        cardElement.classList.remove('active');
    }
}

// Function to adjust the volume of a specific sound
function adjustVolume(soundName, volume) {
    const sound = sounds[soundName];
    sound.volume = volume / 100;
}

// Event listener for each sound card to handle play/pause and volume control
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

// Event listener for each playlist card
document.querySelectorAll('.playlist-card').forEach(card => {
    const playlistName = card.dataset.sound;

    // Toggle play/pause when clicking the card
    card.addEventListener('click', () => togglePlaylistSound(card, playlistName));
});



