import { useEffect, useState, useContext } from 'react';
import WhisperRecognizer from 'whisper-recognizer';

function GetContractList(props) {
  const [recognizedText, setRecognizedText] = useState('');
  const recognizer = new WhisperRecognizer({ language: 'en-US' });

  const recognizeSpeech = async (audioData) => {
    try {
      const text = await recognizer.recognize(audioData);
      setRecognizedText(text);
    } catch (error) {
      console.error(error);
    }
  };

  const handleStartRecording = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const result = event.results[event.results.length - 1];
      if (result.isFinal) {
        const text = result[0].transcript;
        recognizeSpeech(text);
      }
    };

    recognition.start();
  };

  return (
    <div>
      <h1>Voice test</h1>
      <button onClick={handleStartRecording}>Start Recording</button>
      <p>Recognized Text: {recognizedText}</p>
    </div>
  );
}

export default GetContractList;
