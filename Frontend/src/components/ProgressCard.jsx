import React, { useState } from "react";
import "./ProgressCard.css";
import axios from "../axios";

const ProgressCard = ({
  percentage = 10,
  // colour = "red",
  // type = "Positives",
}) => {
  let colour = "rgb(63, 249, 6)";
  percentage = Math.floor(percentage);
  // console.log(percentage);
  let circleWidth = 300;
  //   let percentage = 60;
  //   let colour = "red";
  //   let type = "Positives";
  const radius = 130;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <>
      <div className="progress-card">
        <div className="progress-bar">
          <svg
            width={circleWidth}
            height={circleWidth}
            viewBox={`0 0 ${circleWidth} ${circleWidth}`}
          >
            <circle
              cx={circleWidth / 2}
              cy={circleWidth / 2}
              strokeWidth={"20px"}
              r={radius}
              className="circle-background"
              style={{
                stroke: "rgba(1,1,1,0.35)",
              }}
            />
            <circle
              cx={circleWidth / 2}
              cy={circleWidth / 2}
              strokeWidth={"20px"}
              r={radius}
              className="circle-progress"
              style={{
                strokeDasharray: dashArray,
                strokeDashoffset: dashOffset,
                stroke: colour,
              }}
              transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
            />
            <text
              x="50%"
              y="43%"
              dy="0.3em"
              textAnchor="middle"
              className="circle-text"
              // style={{ fill: colour }}
              //   color={colour}
            >
              {Math.floor(percentage)}%
            </text>
            <text
              x="50%"
              y="58%"
              dy="0.3em"
              textAnchor="middle"
              style={{ fill: "#fff" }}
            >
              So far this month
            </text>
          </svg>
        </div>
        {/* <div className="progress-card-type">{type}</div> */}
      </div>
    </>
  );
};

export default ProgressCard;
