import React, { useRef, useState } from "react";
import "./ChatPage.css";
import { v4 as uuidv4 } from "uuid";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import micImg from "../assets/mic50.png";
import sendImg from "../assets/send.png";
import stellaImg from "../assets/stella.png";
import ChatBubble from "../components/ChatBubble";
import axios from "../axios";

const ChatPage = () => {
  const usrMsgRef = useRef();
  const [chatMsgs, setChatMsgs] = useState([
    // {
    //   role: "",
    //   msg: "",
    //   id: "",
    //   options: [
    //     {
    //       text: "",
    //       resp: "",
    //     },
    //   ],
    // },
    // {
    //   role: "bot",
    //   msg: "Hey! there....",
    //   id: "3432",
    //   options: [
    //     // {
    //     //   text: "hello iadfnoadnfon",
    //     //   resp: "hello is the msg i would lik to send.",
    //     // },
    //     // {
    //     //   text: "hello adskfod",
    //     //   resp: "hello is the msg i would like to send.",
    //     // },
    //     // {
    //     //   text: "hellola adoifj",
    //     //   resp: "hello s the msg i would like to send.",
    //     // },
    //     // {
    //     //   text: "hellola adoifj",
    //     //   resp: "hello is the sg i would like to send.",
    //     // },
    //   ],
    // },
  ]);
  const appendChat = (role, msg, options = []) => {
    setChatMsgs((prev) => [
      ...prev,
      {
        role: role,
        msg: msg,
        id: uuidv4(),
        options: options,
        link: "",
      },
    ]);
  };
  const handleSend = async () => {
    appendChat("user", usrMsgRef.current.value);
    console.log("Send Clicked!", chatMsgs);
    const lang = sessionStorage.getItem("lang");
    var res = null;
    var data = "";
    if (lang === "ta") {
      res = await axios.post(
        "https://89ec-35-154-189-81.ngrok-free.app/forward/",
        {
          text: usrMsgRef.current.value,
          source: "ta",
          dest: "en",
        }
      );
      data = await res.data.text;
    } else {
      data = usrMsgRef.current.value;
    }
    usrMsgRef.current.value = "";
    const resS = await axios.post("/main/", {
      query: data,
      lang: lang,
      location: sessionStorage.getItem("location"),
      mode: 0,
    });
    const dataP = await resS.data;
    if (lang === "en") {
      setChatMsgs((prev) => [...prev, dataP]);
    } else {
      let resB = await axios.post(
        "https://89ec-35-154-189-81.ngrok-free.app/backward/",
        {
          text: dataP.msg,
          source: "en",
          dest: "ta",
        }
      );
      let dataB = await resB.data.text;
      dataP.msg = dataB;
      setChatMsgs((prev) => [...prev, dataP]);
    }
  };
  return (
    <>
      <Header text={"Ask Me!"} />
      <div className="chat-wrapper">
        <div className="chat-history">
          {chatMsgs.length === 0 ? (
            <div className="chat-empty">
              <img src={stellaImg} alt="stella" />
              <h3>
                Hey! Ask me your queries. I'll help you with your transit. You
                don't have to be shy with me. I'm here to help.
              </h3>
            </div>
          ) : (
            chatMsgs.map((ele) => {
              return (
                <>
                  <div
                    className="bubble-wrapper"
                    key={ele.id}
                    style={{ width: "100%" }}
                  >
                    <ChatBubble
                      role={ele.role}
                      msg={ele.msg}
                      id={ele.id}
                      link={ele.link}
                    />
                  </div>
                </>
              );
            })
          )}
        </div>
        <div className="chat-input-wrapper">
          {(
            chatMsgs.length === 0
              ? true
              : chatMsgs[chatMsgs.length - 1].options.length === 0
          ) ? (
            <>
              <div className="chat-mic">
                <img src={micImg} alt="mic" style={{ height: 24, width: 24 }} />
              </div>
              <div className="chat-input">
                <input
                  type="text"
                  placeholder="Type your query here ..."
                  ref={usrMsgRef}
                />
              </div>
              <div className="chat-send" onClick={() => handleSend()}>
                <img src={sendImg} alt="send" />
              </div>
            </>
          ) : (
            <div className="options-wrapper">
              {chatMsgs[chatMsgs.length - 1].options.map((ele) => {
                return (
                  <>
                    <div
                      className="option"
                      onClick={() => appendChat("user", ele.resp)}
                      key={uuidv4()}
                    >
                      {ele.text}
                    </div>
                  </>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <NavBar curPage={"stella"} />
    </>
  );
};

export default ChatPage;
