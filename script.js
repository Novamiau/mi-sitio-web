// En el script de tu sitio
document.body.addEventListener('click', () => {
  const audio = document.getElementById('background-audio');

  if (audio.paused) {
    // Desactivar mute y reproducir
    audio.muted = false;
    audio.play().catch(error => {
      console.error("Error al reproducir:", error);
      showToast("Haz clic en la página para activar el audio", "warning", 5000);
    });
  }
}, { once: true }); // Solo se ejecuta una vez



