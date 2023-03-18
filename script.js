const drumKit = document.getElementById('drum-kit');
const drums = document.querySelectorAll('.drum');
const cymbals = document.querySelectorAll('.cymbal');
const pads = document.querySelectorAll('.pad');
const disco = document.querySelectorAll('.disco');
const hiphop = document.querySelectorAll('.hiphop');
const tribal = document.querySelectorAll('.tribal');

drums.forEach(drum => {
  drum.addEventListener('click', () => {
    playSound('./music/bbbb.wav');
  });
});

cymbals.forEach(cymbal => {
  cymbal.addEventListener('click', () => {
    playSound('./music/mixkit-achievement.wav');
  });
});

pads.forEach(pad => {
  pad.addEventListener('click', () => {
    playSound('./music/mixkit-drum-deep-impact-563.wav');
  });
});

disco.forEach(disco => {
  disco.addEventListener('click', () => {
    playSound('./music/mixkit-tribal-ritual-drums-567.wav');
  });
});

hiphop.forEach(hiphop => {
  hiphop.addEventListener('click', () => {
    playSound('./music/mixkit-losing-drums-2023.wav');
  });
});


tribal.forEach(tribal => {
  tribal.addEventListener('click', () => {
    playSound('./music/mixkit-tribal-drum-echoes-574.wav');
  });
});

function playSound(soundFile) {
  const sound = new Audio(soundFile);
  sound.play();
}
