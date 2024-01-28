import React from "react";
import axios from "../axios";

const Header = ({ text }) => {
  const styleHead = {
    boxSizing: "border-box",
    width: "100%",
    height: "10%",
    fontSize: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    padding: "30px",
    backgroundColor: "var(--nav-bg)",
    gap: "10px",
    borderRadius: "0 0 30px 30px",
  };
  return (
    <div className="dash-header" style={styleHead}>
      <div className="dash-header-text">
        {/* <span id="greetings">Morning!</span>{" "}
        <span id="userNameDisp">Abinash</span>
         */}
        {text}
      </div>
    </div>
  );
};

export default Header;
