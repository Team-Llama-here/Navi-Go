import React from "react";
import "./Awareness.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import shareImg from "../assets/ext-link.png";
import axios from "../axios";

const Awareness = () => {
  const awarenessLst = [
    {
      title: "First Awareness",
      description: "This is the first among a lot of awareness initiatives.",
      link: "https://instagram.com",
    },
    {
      title: "Second Awareness",
      description: "This is the second among a lot of awareness initiatives.",
      link: "https://twitter.com",
    },
  ];
  return (
    <>
      <Header text={"Awareness Section"} />
      <div className="awareness-wrapper">
        {awarenessLst.map((ele) => {
          return (
            <a href={ele.link} target="_blank" className="awareness">
              <div className="awareness-left">
                <div className="awareness-title">{ele.title}</div>
                <div className="awareness-description">{ele.description}</div>
              </div>
              <div className="awareness-right">
                <img src={shareImg} alt="share" />
              </div>
            </a>
          );
        })}
      </div>
      <NavBar />
    </>
  );
};

export default Awareness;
