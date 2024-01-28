import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import axios from "../axios";

const SpeechRecogTest = () => {
  const [value, setValue] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
      console.log("result:", result);
    },
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        onMouseDown={() => {
          listen();
          console.log("Listening");
        }}
        onMouseUp={() => {
          stop();
          console.log("Over", value);
        }}
      >
        🎤
      </button>
      {listening && <div>Go ahead I'm listening</div>}
    </div>
  );
};

export default SpeechRecogTest;
