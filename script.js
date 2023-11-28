let speech = new SpeechSynthesisUtterance();

let add_voices = [];

let voiceSelect = document.querySelector('select');

// speechSynthesis provide speech services or represent a speech request
window.speechSynthesis.onvoiceschanged = () =>{
    add_voices = window.speechSynthesis.getVoices();
    // getVoices provide all the voices in the device
    speech.voice = add_voices[0];
    // index 0 means bydefault it will speak in the first voice available on the device.

    add_voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));

    // i means index number
};

// voice change from option 1 to another
voiceSelect.addEventListener('change', ()=>{
    speech.voice = add_voices[voiceSelect.value];
})



// convert text to speech
let b1 = document.querySelector('button');
b1.addEventListener('click',()=>{
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});