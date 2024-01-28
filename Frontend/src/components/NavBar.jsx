import React from "react";
import homeImg from "../assets/home.svg";
import speakerImg from "../assets/announcement.png";
import stellaImg from "../assets/stella.png";
import upImg from "../assets/up.png";
import userImg from "../assets/user.png";
import { useNavigate } from "react-router-dom";
import micImg from "../assets/mic50.png";
import axios from "../axios";

const NavBar = ({ curPage, startFunc = null, stopFunc = null }) => {
  const navigate = useNavigate();
  const styleNav = {
    marginTop: 10,
    boxSizing: "border-box",
    width: "100%",
    height: "10%",
    fontSize: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "30px",
    backgroundColor: "var(--nav-bg)",
    gap: "10px",
    borderRadius: "30px 30px 0 0",
  };
  const circleStyle = {
    padding: "10px",
    borderRadius: "50%",
    cursor: "pointer",
  };
  const circleActiveStyle = {
    padding: "10px",
    // height: 34,
    // width: 34,
    cursor: "pointer",
    borderRadius: "50%",
    backgroundColor: "rgb(63, 249, 6)",
  };
  return (
    <>
      <div className="nav-wrapper" style={styleNav}>
        <div className="nav-home">
          <div
            className="nav-circle"
            style={curPage === "home" ? circleActiveStyle : circleStyle}
            onClick={() => navigate("/")}
          >
            <img
              src={homeImg}
              alt="home icon"
              style={{ height: 24, width: 34 }}
            />
          </div>
        </div>
        <div className="nav-announcement">
          <div
            className="nav-circle"
            style={curPage === "announcement" ? circleActiveStyle : circleStyle}
            onClick={() => navigate("/announcements")}
          >
            <img
              src={speakerImg}
              alt="speaker icon"
              style={{ height: 24, width: 34 }}
            />
          </div>
        </div>
        <div className="nav-stella-chat">
          {curPage !== "stella-voice" ? (
            <div
              className="nav-circle"
              style={curPage === "stella" ? circleActiveStyle : circleStyle}
              onClick={() => navigate("/chat")}
            >
              <img src={stellaImg} alt="stella icon" />
            </div>
          ) : (
            <div
              className="nav-circle"
              style={
                curPage === "stella-voice" ? circleActiveStyle : circleStyle
              }
              onMouseDown={startFunc}
              onMouseUp={stopFunc}
              onTouchStart={startFunc}
              onTouchEnd={stopFunc}
            >
              <img src={micImg} alt="mic icon" />
            </div>
          )}
        </div>
        <div className="nav-more">
          <div
            className="nav-circle"
            style={curPage === "more" ? circleActiveStyle : circleStyle}
            onClick={() => navigate("/more")}
          >
            <img src={upImg} alt="up icon" style={{ height: 24, width: 34 }} />
          </div>
        </div>
        <div className="nav-profile">
          <div
            className="nav-circle"
            style={curPage === "profile" ? circleActiveStyle : circleStyle}
            onClick={() => navigate("/profile")}
          >
            <img
              src={userImg}
              alt="user icon"
              style={{ height: 24, width: 34 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
