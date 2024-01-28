import React from "react";
import "./Announcements.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import axios from "../axios";

const Announcements = () => {
  const announcement = [
    {
      date: "2024-01-28",
      title: "This is first announcement",
      link: "https://google.com/",
    },
    {
      date: "2024-01-28",
      title: "This is second announcement",
      link: "https://tesla.com/",
    },
    {
      date: "2024-01-27",
      title: "This is third announcement",
      link: "https://bard.google.com/",
    },
    {
      date: "2024-01-26",
      title: "This is fourth announcement",
      link: "https://wikipedia.com/",
    },
    {
      date: "2024-01-28",
      title: "This is second announcement",
      link: "https://tesla.com/",
    },
    {
      date: "2024-01-27",
      title: "This is third announcement",
      link: "https://bard.google.com/",
    },
    {
      date: "2024-01-26",
      title: "This is fourth announcement",
      link: "https://wikipedia.com/",
    },
    {
      date: "2024-01-28",
      title: "This is second announcement",
      link: "https://tesla.com/",
    },
    {
      date: "2024-01-27",
      title: "This is third announcement",
      link: "https://bard.google.com/",
    },
    {
      date: "2024-01-26",
      title: "This is fourth announcement",
      link: "https://wikipedia.com/",
    },
  ];
  //   var news = [];
  //   announcement.forEach((ele) => {
  //     if (new Date(ele.date) === new Date()) {

  //     }
  //   });

  return (
    <>
      <Header text={"Announcements!"} />
      <div className="announcements-wrapper">
        {announcement.map((ele) => {
          return (
            <a href={ele.link} target="_blank" className="announcement">
              <div className="announcement-title">{ele.title}</div>
              <div className="announcement-date">{ele.date}</div>
            </a>
          );
        })}
      </div>
      <NavBar curPage={"announcement"} />
    </>
  );
};

export default Announcements;
