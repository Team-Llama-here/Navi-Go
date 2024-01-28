import React from "react";
import "./StatCard.css";
import cloudImg from "../assets/cloud.svg";
import axios from "../axios";

const StatCard = () => {
  return (
    <>
      <div className="stat-card-wrapper">
        <div className="icon-holder">
          <img src={cloudImg} alt="icon" className="stat-icon" />
        </div>
        <div className="stat-title">Total Emissions</div>
        <div className="stat-progress"></div>
        <div className="stat-percent">
          <span>3</span> %
        </div>
        <div className="stat-kgs">
          <span>8</span> Kg
        </div>
      </div>
    </>
  );
};

export default StatCard;
