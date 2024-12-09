// sounds.js

// Get audio element
const audio = document.getElementById('audio-player');
const progressBar = document.getElementById('progress');

// Update progress bar as audio plays
audio.addEventListener('timeupdate', function() {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = percent + '%';
});

// Seek audio when progress bar is clicked
progressBar.addEventListener('click', function(event) {
    const rect = progressBar.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percent = (x / progressBar.offsetWidth) * 100;
    const seekTime = (percent / 100) * audio.duration;
    audio.currentTime = seekTime;
});
