document.getElementById('videoUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const video = document.getElementById('videoPreview');
        video.src = URL.createObjectURL(file);
        video.load();
    }
});

// Generate AI Captions (Simulated for Now)
document.getElementById('addCaptions').addEventListener('click', function() {
    const captionsDiv = document.getElementById('captions');
    captionsDiv.innerHTML = "<p>Generating AI captions...</p>";

    // Simulate AI Captioning (Replace this with real API call)
    setTimeout(() => {
        captionsDiv.innerHTML = "<p>[Example Caption] This is a sample AI-generated caption.</p>";
    }, 2000);
});

// Add Background Music
document.getElementById('addMusic').addEventListener('click', function() {
    const audio = new Audio('background-music.mp3'); // Replace with uploaded file
    audio.play();
    alert('Background music added!');
});

// Apply Basic Video Effects
document.getElementById('applyEffects').addEventListener('click', function() {
    const video = document.getElementById('videoPreview');
    video.style.filter = "grayscale(100%)"; // Example effect
    alert('Grayscale effect applied!');
});
