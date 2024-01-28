import React, { useEffect, useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import "./Stella.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import stellaImg from "../assets/stella.png";
import axios from "../axios";

const Stella = () => {
  //   const [listening, setListening] = useState(true);
  const [value, setValue] = useState(
    "This will be the question area where the asked question or query will be displayed."
  );
  const [answer, setAnswer] = useState();
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
      console.log("result:", result);
    },
  });
  const respObj = {
    query:
      "This will be the question area where the asked question or query will be displayed.",
    answer: "This is the area where I (STELLA) respond to all your queries.",
  };
  //   useEffect(() => {
  //     listen();
  //     return () => {
  //       stop();
  //     };
  //   }, []);
  useEffect(() => {
    const recognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognitionInstance = new recognition();

    // Set the language for speech recognition to Tamil (Indian)
    recognitionInstance.lang = "ta-IN";

    recognitionInstance.addEventListener("end", () => {
      if (listening) {
        recognitionInstance.start();
        console.log("Starting Recog");
      }
    });
    // respObj.query = value;
    console.log("Inside Effect");

    return () => {
      recognitionInstance.stop();
      console.log("Stopping Recog");
    };
  }, [listening]);

  const handleSubmit = async () => {
    const res = await axios.post("/main/", {
      query: value,
      lang: sessionStorage.getItem("lang"),
      location: sessionStorage.getItem("location"),
      mode: 0,
    });
    const dat = await res.data;
    setAnswer(() => dat.msg);
  };
  console.log("Listening Stat: ", listening);
  return (
    <>
      <Header text={"Lets Talk!"} />
      <div className="stella-wrapper">
        {listening ? (
          <div className="listening-wrapper">
            <div className="listening-top">
              <div className="listening-text">Listening</div>
              <div
                className="listening-gif"
                // onClick={() => setListening(() => false)}
              >
                . . .
              </div>
            </div>
            <div className="listening-bottom">
              <div className="stella-img">
                <img
                  src={stellaImg}
                  alt="stella"
                  style={{ width: 100, height: 100 }}
                />
              </div>
              <div className="stella-talk">
                Hey! This is me STELLA. Ask me your queries...
              </div>
            </div>
          </div>
        ) : (
          <div className="response-wrapper">
            <div className="response-top">{value}</div>
            <div className="stella-circle">
              <img src={stellaImg} alt="stella icon" />
            </div>
            <div className="response-bottom">{answer}</div>
          </div>
        )}
      </div>
      <NavBar
        curPage={"stella-voice"}
        startFunc={listen}
        stopFunc={() => {
          stop();
          handleSubmit();
        }}
      />
    </>
  );
};

export default Stella;
