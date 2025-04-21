// Page load animation
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

// Play sound when the button with class 'btn' is clicked
document.querySelector('.btn').addEventListener('click', function() {
  const audio = document.getElementById('btnSound');
  audio.play().then(() => {
    console.log('Button sound is playing');
  }).catch(error => {
    console.error('Error playing button sound:', error);
  });
});