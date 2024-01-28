import React from "react";
import "./Account.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import axios from "../axios";

const Account = () => {
  const profile = {
    name: "Abinash Lingan.K",
    username: "abinashlingan.k.leader",
    email: "abinashlingan.ceo@company.com",
    eco: 500,
    contrib: 20,
  };
  return (
    <>
      <Header text={"Profile Section"} />
      <div className="account-wrapper">
        <div className="account-inner-wrapper">
          <div className="account-name">{profile.name}</div>
          <div className="account-username">
            <div className="account-head">Username:</div>{" "}
            <div className="account-description">{profile.username}</div>
          </div>
          <div className="account-email">
            <div className="account-head">Email:</div>{" "}
            <div className="account-description">{profile.email}</div>
          </div>
          <div className="account-eco">
            <div className="account-head">Eco Points:</div>{" "}
            <div className="account-description">{profile.eco}</div>
          </div>
          <div className="account-contrib">
            <div className="account-head">Complaints Number:</div>{" "}
            <div className="account-description">{profile.contrib}</div>
          </div>
        </div>
      </div>
      <NavBar curPage={"profile"} />
    </>
  );
};

export default Account;
