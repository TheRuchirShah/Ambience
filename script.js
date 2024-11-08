// // // // Define the sounds with their URLs
// // // const sounds = {
// // //     river: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Rain.mp3'),
// // //     waves: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Birds.mp3') // Placeholder for testing
// // // };

// // // // Initialize each sound's volume to 50% and set it to loop
// // // Object.keys(sounds).forEach(soundName => {
// // //     sounds[soundName].loop = true;
// // //     sounds[soundName].volume = 0.5; // Default to 50% volume
// // // });

// // // // Function to play/pause the sound and toggle the active class
// // // function toggleSound(cardElement, soundName) {
// // //     const sound = sounds[soundName];

// // //     // Check if the sound is already playing
// // //     if (sound.paused) {
// // //         sound.play();
// // //         cardElement.classList.add('active');
// // //     } else {
// // //         sound.pause();
// // //         cardElement.classList.remove('active');
// // //     }
// // // }

// // // // Function to adjust the volume of the specific sound
// // // function adjustVolume(soundName, volume) {
// // //     const sound = sounds[soundName];
// // //     sound.volume = volume / 100; // Adjust volume between 0 and 1
// // // }

// // // // Event listener for each card to handle play/pause and volume control
// // // document.querySelectorAll('.sound-card').forEach(card => {
// // //     const soundName = card.dataset.sound;
    
// // //     // Toggle play/pause when clicking the card (excluding the volume slider)
// // //     card.addEventListener('click', (e) => {
// // //         if (e.target.tagName !== 'INPUT') { // Ignore clicks on the volume slider
// // //             toggleSound(card, soundName);
// // //         }
// // //     });

// // //     // Adjust volume based on the range slider input
// // //     const volumeSlider = card.querySelector('input[type="range"]');
// // //     volumeSlider.addEventListener('input', (e) => {
// // //         adjustVolume(soundName, e.target.value);
// // //         e.stopPropagation(); // Prevent the card's click event from firing
// // //     });
// // // });


// // // //

// // // // Define the sounds with URLs for playlists
// // // const sounds = {
// // //     lofi: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Drums.mp3'),
// // //     jazz: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Train.mp3'),
// // //     // Add more as needed
// // // };

// // // // Set all sounds to loop
// // // Object.keys(sounds).forEach(soundName => {
// // //     sounds[soundName].loop = true;
// // //     sounds[soundName].volume = 0.5; // Initial volume
// // // });

// // // // Function to play/pause a playlist item
// // // function togglePlaylistSound(cardElement, soundName) {
// // //     const sound = sounds[soundName];
// // //     if (sound.paused) {
// // //         sound.play();
// // //         cardElement.classList.add('active');
// // //     } else {
// // //         sound.pause();
// // //         cardElement.classList.remove('active');
// // //     }
// // // }

// // // // Event listener for each playlist card
// // // document.querySelectorAll('.playlist-card').forEach(card => {
// // //     const soundName = card.dataset.sound;
// // //     card.addEventListener('click', () => togglePlaylistSound(card, soundName));
// // // });





// // // Define the sounds and playlists with their URLs
// // const sounds = {
// //     river: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Rain.mp3'),
// //     waves: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Birds.mp3'),
// //     // Add more sounds as needed
// // };

// // const playlists = {
// //     lofi: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Drums.mp3'),
// //     jazz: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Train.mp3'),
// //     // Add more playlists as needed
// // };

// // // Set each sound and playlist to loop and default volume
// // Object.keys(sounds).forEach(soundName => {
// //     sounds[soundName].loop = true;
// //     sounds[soundName].volume = 0.5;
// // });

// // Object.keys(playlists).forEach(playlistName => {
// //     playlists[playlistName].loop = true;
// //     playlists[playlistName].volume = 0.5;
// // });

// // // Function to stop all playlists
// // function stopAllPlaylists() {
// //     Object.keys(playlists).forEach(playlistName => {
// //         playlists[playlistName].pause();
// //         playlists[playlistName].currentTime = 0; // Reset to start
// //     });
// // }

// // // Function to remove the active class from all playlist cards
// // function removePlaylistActiveClass() {
// //     document.querySelectorAll('.playlist-card.active').forEach(card => {
// //         card.classList.remove('active');
// //     });
// // }

// // // Function to stop all sound cards
// // function stopAllSounds() {
// //     Object.keys(sounds).forEach(soundName => {
// //         sounds[soundName].pause();
// //     });
// // }

// // // Function to play/pause a sound card
// // function toggleSound(cardElement, soundName) {
// //     const sound = sounds[soundName];

// //     // Stop any playing playlist card if a sound card is activated
// //     stopAllPlaylists();
// //     removePlaylistActiveClass();

// //     // Toggle play/pause for the sound card
// //     if (sound.paused) {
// //         sound.play();
// //         cardElement.classList.add('active');
// //     } else {
// //         sound.pause();
// //         cardElement.classList.remove('active');
// //     }
// // }

// // // Function to play/pause a playlist card (only one playlist can play at a time)
// // function togglePlaylistSound(cardElement, playlistName) {
// //     const playlist = playlists[playlistName];

// //     // Stop all sounds if a playlist card is activated
// //     stopAllSounds();

// //     // Stop any other playlist currently playing
// //     stopAllPlaylists();
// //     removePlaylistActiveClass();

// //     // Play the selected playlist
// //     playlist.play();
// //     cardElement.classList.add('active');
// // }

// // // Function to adjust the volume of a specific sound
// // function adjustVolume(soundName, volume) {
// //     const sound = sounds[soundName];
// //     sound.volume = volume / 100;
// // }

// // // Event listener for each sound card to handle play/pause and volume control
// // document.querySelectorAll('.sound-card').forEach(card => {
// //     const soundName = card.dataset.sound;

// //     // Toggle play/pause when clicking the card (excluding the volume slider)
// //     card.addEventListener('click', (e) => {
// //         if (e.target.tagName !== 'INPUT') { // Ignore clicks on the volume slider
// //             toggleSound(card, soundName);
// //         }
// //     });

// //     // Adjust volume based on the range slider input
// //     const volumeSlider = card.querySelector('input[type="range"]');
// //     volumeSlider.addEventListener('input', (e) => {
// //         adjustVolume(soundName, e.target.value);
// //         e.stopPropagation(); // Prevent the card's click event from firing
// //     });
// // });

// // // Event listener for each playlist card
// // document.querySelectorAll('.playlist-card').forEach(card => {
// //     const playlistName = card.dataset.sound;

// //     // Toggle play/pause when clicking the card
// //     card.addEventListener('click', () => togglePlaylistSound(card, playlistName));
// // });





// // Define the sounds and playlists with their URLs
// const sounds = {
//     river: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Rain.mp3'),
//     waves: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Birds.mp3'),
//     // Add more sounds as needed
// };

// const playlists = {
//     lofi: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Drums.mp3'),
//     jazz: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Train.mp3'),
//     // Add more playlists as needed
// };

// // Set each sound and playlist to loop and default volume
// Object.keys(sounds).forEach(soundName => {
//     sounds[soundName].loop = true;
//     sounds[soundName].volume = 0.5;
// });

// Object.keys(playlists).forEach(playlistName => {
//     playlists[playlistName].loop = true;
//     playlists[playlistName].volume = 0.5;
// });

// // Function to stop all playlists
// function stopAllPlaylists() {
//     Object.keys(playlists).forEach(playlistName => {
//         playlists[playlistName].pause();
//         playlists[playlistName].currentTime = 0; // Reset to start
//     });
// }

// // Function to remove the active class from all playlist cards
// function removePlaylistActiveClass() {
//     document.querySelectorAll('.playlist-card.active').forEach(card => {
//         card.classList.remove('active');
//     });
// }

// // Function to stop all sound cards
// function stopAllSounds() {
//     Object.keys(sounds).forEach(soundName => {
//         sounds[soundName].pause();
//     });
// }

// // Function to play/pause a sound card
// function toggleSound(cardElement, soundName) {
//     const sound = sounds[soundName];

//     // Stop any playing playlist card if a sound card is activated
//     stopAllPlaylists();
//     removePlaylistActiveClass();

//     // Toggle play/pause for the sound card
//     if (sound.paused) {
//         sound.play();
//         cardElement.classList.add('active');
//     } else {
//         sound.pause();
//         cardElement.classList.remove('active');
//     }
// }

// // Function to play/pause a playlist card (only one playlist can play at a time)
// function togglePlaylistSound(cardElement, playlistName) {
//     const playlist = playlists[playlistName];

//     // Stop all sounds if a playlist card is activated
//     stopAllSounds();

//     // Stop any other playlist currently playing
//     stopAllPlaylists();
//     removePlaylistActiveClass();

//     // Play the selected playlist
//     playlist.play();
//     cardElement.classList.add('active');
// }

// // Function to adjust the volume of a specific sound
// function adjustVolume(soundName, volume) {
//     const sound = sounds[soundName];
//     sound.volume = volume / 100;
// }

// // Event listener for each sound card to handle play/pause and volume control
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

// // Event listener for each playlist card
// document.querySelectorAll('.playlist-card').forEach(card => {
//     const playlistName = card.dataset.sound;

//     // Toggle play/pause when clicking the card
//     card.addEventListener('click', () => togglePlaylistSound(card, playlistName));
// });









// UP TO THIS IT IS ALL OK

// Define the sounds with their URLs
const sounds = {
    river: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Rain.mp3'),
    waves: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Birds.mp3')
};

// Playlist sounds
const playlists = {
    lofi: new Audio('https://theruchirshah.github.io/My-Files/files/audio/Indian-Classical.mp3'),
    jazz: new Audio('src/sound/Birds.mp3')
};

// Initialize each sound's volume to 50% and set to loop
Object.keys(sounds).forEach(soundName => {
    sounds[soundName].loop = true;
    sounds[soundName].volume = 0.5;
});
Object.keys(playlists).forEach(playlistName => {
    playlists[playlistName].loop = true;
    playlists[playlistName].volume = 0.5;
});

let currentPlaylist = null;

// Function to play/pause sound card
function toggleSound(cardElement, soundName) {
    const sound = sounds[soundName];
    if (sound.paused) {
        sound.play();
        cardElement.classList.add('active');
    } else {
        sound.pause();
        cardElement.classList.remove('active');
    }
}

// Function to play/pause playlist card with the desired toggle behavior
function togglePlaylist(cardElement, playlistName) {
    const playlist = playlists[playlistName];

    // Stop currently playing playlist if it exists and is not the current one
    if (currentPlaylist && currentPlaylist !== playlist) {
        currentPlaylist.pause();
        document.querySelector('.playlist-card.active')?.classList.remove('active');
    }

    // Toggle the current playlist
    if (playlist.paused) {
        playlist.play();
        cardElement.classList.add('active');
        currentPlaylist = playlist;
    } else {
        playlist.pause();
        cardElement.classList.remove('active');
        currentPlaylist = null;
    }

    // Stop all sound cards when a playlist is active
    if (currentPlaylist) {
        stopAllSounds();
    }
}

// Stop all sound cards when a playlist is playing
function stopAllSounds() {
    Object.keys(sounds).forEach(soundName => {
        sounds[soundName].pause();
        document.querySelector(`.sound-card[data-sound="${soundName}"]`)?.classList.remove('active');
    });
}

// Event listener for sound cards
document.querySelectorAll('.sound-card').forEach(card => {
    const soundName = card.dataset.sound;

    card.addEventListener('click', (e) => {
        if (e.target.tagName !== 'INPUT') { // Ignore volume slider clicks
            toggleSound(card, soundName);
            if (currentPlaylist) {
                currentPlaylist.pause();
                document.querySelector('.playlist-card.active')?.classList.remove('active');
                currentPlaylist = null;
            }
        }
    });

    // Volume control
    const volumeSlider = card.querySelector('input[type="range"]');
    volumeSlider.addEventListener('input', (e) => {
        sounds[soundName].volume = e.target.value / 100;
        e.stopPropagation();
    });
});

// Event listener for playlist cards
document.querySelectorAll('.playlist-card').forEach(card => {
    const playlistName = card.dataset.sound;

    card.addEventListener('click', () => togglePlaylist(card, playlistName));
});


// UP TO THIS IT IS ALL OK

