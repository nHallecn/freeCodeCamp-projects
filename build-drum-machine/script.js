** start of index.html **



** end of index.html **

** start of styles.css **

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: #9a9797;
  min-height: 100vh;
  font-family: Arial, san-serif;
}

#drum-machine{
  background-color: #cb1717;
  margin: 30px auto;
  width: 100%;
  max-width: 600px;
  padding: 20px 0 5px 0;
  border-radius: 5px;
  color: white;
  border: 2px solid #201c1c;
}

#display{
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px;
}

#pad-bank{
  border: 2px solid #201c1c;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  gap: 5px;
  padding: 10px 0;
  background-color: #000000;
}

.drum-pad{
  background-color: #2c2c28;
  padding: 50px 15px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.5rem;
  transition: background ease;
}

.drum-pad:hover{
  background-color: #cb1717;
  color: #2c2c28;
}

** end of styles.css **

** start of script.js **

const audioClips = [
    { key: 'Q', id: 'Heater 1', fileName: 'Heater-1.mp3' },
    { key: 'W', id: 'Heater 2', fileName: 'Heater-2.mp3' },
    { key: 'E', id: 'Heater 3', fileName: 'Heater-3.mp3' },
    { key: 'A', id: 'Heater 4', fileName: 'Heater-4_1.mp3' },
    { key: 'S', id: 'Clap', fileName: 'Heater-6.mp3' },
    { key: 'D', id: 'Open-HH', fileName: 'Dsc_Oh.mp3' },
    { key: 'Z', id: 'Kick-n-Hat', fileName: 'Kick_n_Hat.mp3' },
    { key: 'X', id: 'Kick', fileName: 'RP4_KICK_1.mp3' },
    { key: 'C', id: 'Closed-HH', fileName: 'Cev_H2.mp3' }
];

const audioBaseURL = 'https://cdn.freecodecamp.org/curriculum/drum/';
const padBank = document.getElementById('pad-bank');
const display = document.getElementById('display');

function playClip(key, clipName) {
    const audio = document.getElementById(key);
    
    if (audio) {
        audio.currentTime = 0;
        audio.play();

        display.innerText = clipName;

        const drumPad = audio.parentElement;
        drumPad.classList.add('active');
        setTimeout(() => {
            drumPad.classList.remove('active');
        }, 100);
    }
}

audioClips.forEach(clip => {
    const drumPad = document.createElement('div');
    drumPad.className = 'drum-pad';
    drumPad.id = clip.id;
    drumPad.innerText = clip.key;

    const audio = document.createElement('audio');
    audio.className = 'clip';
    audio.id = clip.key;
    audio.src = audioBaseURL + clip.fileName;

    drumPad.appendChild(audio);

    drumPad.addEventListener('click', () => {
        playClip(clip.key, clip.id);
    });

    padBank.appendChild(drumPad);
});


document.addEventListener('keydown', (event) => {
    const pressedKey = event.key.toUpperCase();
    
    const validClip = audioClips.find(clip => clip.key === pressedKey);
    
    if (validClip) {
        playClip(validClip.key, validClip.id);
    }
});

** end of script.js **

