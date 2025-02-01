document.getElementById('videoUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const video = document.getElementById('videoPreview');
        video.src = URL.createObjectURL(file);
        video.load();
    }
});

document.getElementById('addCaptions').addEventListener('click', function() {
    const captionsDiv = document.getElementById('captions');
    captionsDiv.innerHTML = "<p>[AI Captioning Coming Soon in VidCloud Studio...]</p>";
});

document.getElementById('addMusic').addEventListener('click', function() {
    alert('Background music feature coming soon in VidCloud Studio...');
});

document.getElementById('applyEffects').addEventListener('click', function() {
    alert('Applying basic effects in VidCloud Studio...');
});
