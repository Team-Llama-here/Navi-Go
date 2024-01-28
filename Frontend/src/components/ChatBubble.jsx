import React from "react";
import axios from "../axios";

const ChatBubble = ({ role, msg, id, link }) => {
  const userStyle = {
    maxWidth: 300,
    minWidth: 20,
    width: "fit-content",
    padding: 15,
    borderRadius: "20px 20px 5px 20px",
    // float: "right",
    marginLeft: "auto",
    backgroundColor: "rgb(45, 190, 6)",
  };
  const botStyle = {
    maxWidth: 300,
    minWidth: 20,
    width: "fit-content",
    padding: 15,
    borderRadius: "20px 20px 20px 5px",
    // float: "left",
    marginRight: "auto",
    backgroundColor: "rgb(30, 55, 24)",
  };
  return (
    <>
      <div
        className="bubble-chat"
        style={role === "user" ? userStyle : botStyle}
        key={id}
      >
        <div
          className="bubble-text"
          dangerouslySetInnerHTML={{ __html: msg }}
        ></div>
        {link && (
          <a target="_blank" href={link}>
            To Refer Map Click Me
          </a>
        )}
      </div>
    </>
  );
};

export default ChatBubble;
