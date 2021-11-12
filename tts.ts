export const speak = (value: string, language:string) => {
    let synth = window.speechSynthesis;
    let voices = synth.getVoices().filter((voice)=>voice.lang == language);
  if (synth.speaking) {
      synth.cancel();
      console.error('speechSynthesis.speaking');
      return;
    }
    var utterThis = new SpeechSynthesisUtterance(value);
    utterThis.onend = function (_event) {
      console.log('SpeechSynthesisUtterance.onend');
    };
    utterThis.onerror = function (_event) {
      console.error('SpeechSynthesisUtterance.onerror');
    };
    // var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  
    utterThis.voice = voices[0];
  
    // utterThis.pitch = pitch.value;
     utterThis.rate = 0.7;
    synth.speak(utterThis);
  };
