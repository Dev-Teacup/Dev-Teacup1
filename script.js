onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

// Wait for the first user interaction (e.g., a tap or click)
document.addEventListener('click', function startAudio() {
  const audio = document.getElementById('bgMusic');
  audio.play().then(() => {
      // Audio started successfully
      console.log('Audio is playing');
  }).catch(error => {
      // Handle any errors (e.g., user didn’t interact yet)
      console.error('Error playing audio:', error);
  });
  // Remove the event listener after the audio starts to avoid replaying on every click
  document.removeEventListener('click', startAudio);
}, { once: true });