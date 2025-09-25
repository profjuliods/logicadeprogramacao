// Utilitário para tocar sons de acerto/erro e controlar ativação global
let audioAtivo = true;
try {
  const salvo = localStorage.getItem('audioAtivo');
  if (salvo !== null) audioAtivo = salvo === 'true';
} catch {}

export function setAudioAtivo(v) {
  audioAtivo = v;
  try { localStorage.setItem('audioAtivo', v ? 'true' : 'false'); } catch {}
}
export function getAudioAtivo() {
  return audioAtivo;
}

export function playAudio(tipo) {
  if (!audioAtivo) return;
  let audio;
  if (tipo === 'acerto') {
    audio = new window.Audio('/audio/acerto.mp3');
  } else if (tipo === 'erro') {
    audio = new window.Audio('/audio/erro.mp3');
  }
  if (audio) {
    audio.volume = 0.7;
    audio.play();
  }
}
