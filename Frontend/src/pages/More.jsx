import React from "react";
import "./More.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router";
import axios from "../axios";

const More = () => {
  const nav = useNavigate();
  const moreDet = [
    {
      title: "Complaints",
      description:
        "View your complaints regarding any transit related issues that occured to you.",
    },
    {
      title: "Awareness",
      description: "Cross-Lingual Environmental Impact awareness",
    },
  ];
  return (
    <>
      <Header text={"Additional Actions"} />
      <div className="more-wrapper">
        {moreDet.map((ele) => {
          return (
            <div
              className="more"
              onClick={() => nav("/" + ele.title.toLowerCase())}
            >
              <div className="more-title">{ele.title}</div>
              <div className="more-description">{ele.description}</div>
            </div>
          );
        })}
      </div>
      <NavBar curPage={"more"} />
    </>
  );
};

export default More;
