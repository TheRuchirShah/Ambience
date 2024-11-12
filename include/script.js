// UP TO THIS IT IS ALL OK

// Define the sounds with their URLs
const sounds = {
    // Nature Sounds
    river: new Audio('./src/sound/River.mp3'),
    waves: new Audio('./src/sound/Waves.mp3'),
    campfire: new Audio('./src/sound/Campfire.mp3'),
    wind: new Audio('./src/sound/Wind.mp3'),
    trees: new Audio('./src/sound/Trees.mp3'),
    snow: new Audio('./src/sound/Snow.mp3'),
    autumnleaves: new Audio('./src/sound/Autumn-Leaves.mp3'),
    forest: new Audio('./src/sound/Forest.mp3'),
    frogandinsects: new Audio('./src/sound/Frog-and-Insects.mp3'),
    
    // Rain Sounds
    lightrain: new Audio('./src/sound/Light-Rain.mp3'),
    heavyrain: new Audio('./src/sound/Heavy-Rain.mp3'),
    thunder: new Audio('./src/sound/Thunder.mp3'),
    rainonroof: new Audio('./src/sound/Rain-on-Roof.mp3'),
    rainonwindow: new Audio('./src/sound/Rain-on-Window.mp3'),
    rainontent: new Audio('./src/sound/Rain-on-Tent.mp3'),

    // Creature Sounds
    birds: new Audio('./src/sound/Birds.mp3'),
    seagulls: new Audio('./src/sound/Seagull.mp3'),
    crickets: new Audio('./src/sound/Crickets.mp3'),
    wolfhowl: new Audio('./src/sound/Wolf.mp3'),
    owl: new Audio('./src/sound/Owl.mp3'),
    frog: new Audio('./src/sound/Frog.mp3'),
    horse: new Audio('./src/sound/Horse.mp3'),
    cat: new Audio('./src/sound/Cat.mp3'),
    cattle: new Audio('./src/sound/Cattle.mp3'),

    // Urban Sounds
    traffic: new Audio('./src/sound/Traffic.mp3'),
    road: new Audio('./src/sound/Road.mp3'),
    busystreet: new Audio('./src/sound/Busy-Street.mp3'),
    mareket: new Audio('./src/sound/Market.mp3'),
    gathering: new Audio('./src/sound/Gathering.mp3'),
    park: new Audio('./src/sound/Park.mp3'),

    // Place Sounds
    cafebar: new Audio('./src/sound/Cafe-Bar.mp3'),
    temple: new Audio('./src/sound/Temple.mp3'),
    church: new Audio('./src/sound/Church.mp3'),
    construction: new Audio('./src/sound/Construction.mp3'),
    village: new Audio('./src/sound/Village.mp3'),
    farm: new Audio('./src/sound/Farm.mp3'),
    office: new Audio('./src/sound/Office.mp3'),

    // Transport Sounds
    airport: new Audio('./src/sound/Airport.mp3'),
    trainstation: new Audio('./src/sound/Train-Station.mp3'),
    airplane: new Audio('./src/sound/Airplane.mp3'),
    train: new Audio('./src/sound/Train.mp3'),
    boat: new Audio('./src/sound/Boat.mp3'),
    car: new Audio('./src/sound/Car.mp3'),
    
    // Object Sounds
    keyboard: new Audio('./src/sound/Keyboard.mp3'),
    typewriter: new Audio('./src/sound/Typewriter.mp3'),
    clock: new Audio('./src/sound/Clock.mp3'),
    windchime: new Audio('./src/sound/Wind-Chime.mp3'),
    spinningbowl: new Audio('./src/sound/Spinning-Bowl.mp3'),
    fan: new Audio('./src/sound/Fan.mp3'),
    bubble: new Audio('./src/sound/Bubble.mp3'),
    shower: new Audio('./src/sound/Shower.mp3'),
    radio: new Audio('./src/sound/Radio.mp3'),
    book: new Audio('./src/sound/Book.mp3'),
    waterdrop: new Audio('./src/sound/Water-Drop.mp3'),
    
    // Noise Sounds
    whitenoise: new Audio('./src/sound/White-Noise.mp3'),
    pinknoise: new Audio('./src/sound/Pink-Noise.mp3'),
    brownnoise: new Audio('./src/sound/Brown-Noise.mp3')
};

// Playlist sounds
const playlists = {
    lofi: new Audio('https://theruchirshah.github.io/Music-Streamer/files/audio/LoFi-Beats.mp3'),
    jazz: new Audio('https://theruchirshah.github.io/Music-Streamer/files/audio/Jazz.mp3'),
    meditation: new Audio('https://theruchirshah.github.io/Music-Streamer/files/audio/Meditation.mp3'),
    dinner: new Audio('https://theruchirshah.github.io/Music-Streamer/files/audio/Dinner.mp3'),
    longdrive: new Audio('https://theruchirshah.github.io/Music-Streamer/files/audio/Long-Drive.mp3'),
    bollywood: new Audio('https://theruchirshah.github.io/Music-Streamer/files/audio/Bollywood.mp3'),
    cozysunday: new Audio('https://theruchirshah.github.io/Music-Streamer/files/audio/Cozy-Sunday.mp3'),
    productivity: new Audio('https://theruchirshah.github.io/Music-Streamer/files/audio/Productivity.mp3'),
    gym: new Audio('https://theruchirshah.github.io/Music-Streamer/files/audio/Gym.mp3'),
    indianclassical: new Audio('https://theruchirshah.github.io/Music-Streamer/files/audio/Indian-Classical.mp3'),
    morning: new Audio('https://theruchirshah.github.io/Music-Streamer/files/audio/Morning.mp3'),
    rainymood: new Audio('https://theruchirshah.github.io/Music-Streamer/files/audio/Rainy-Mood.mp3'),
    sleep: new Audio('https://theruchirshah.github.io/Music-Streamer/files/audio/Sleep.mp3'),
    nordic: new Audio('https://theruchirshah.github.io/Music-Streamer/files/audio/Nordic.mp3')
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
        document.querySelector('.playlist-card.active') ?.classList.remove('active');
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
        document.querySelector(`.sound-card[data-sound="${soundName}"]`) ?.classList.remove('active');
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
                document.querySelector('.playlist-card.active') ?.classList.remove('active');
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