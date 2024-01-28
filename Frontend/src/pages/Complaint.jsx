import React from "react";
import "./Complaint.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import axios from "../axios";

const Complaint = () => {
  const complaintLst = [
    {
      title: "First Complaint",
      description:
        "This is your first complaint, regarding your inconvinience with your transit.",
    },
    {
      title: "Second Complaint",
      description:
        "This is your second complaint, regarding your inconvinience with your transit.",
    },
  ];
  return (
    <>
      <Header text={"Complaints"} />
      <div className="complaint-wrapper">
        {complaintLst.map((ele) => {
          return (
            <div className="complaint">
              <div className="complaint-title">{ele.title}</div>
              <div className="complaint-description">{ele.description}</div>
            </div>
          );
        })}
      </div>
      <NavBar />
    </>
  );
};

export default Complaint;
