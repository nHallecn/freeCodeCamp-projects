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
