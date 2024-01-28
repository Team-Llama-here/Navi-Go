import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import ChatPage from "./pages/ChatPage";
import Announcements from "./pages/Announcements";
import More from "./pages/More";
import Complaint from "./pages/Complaint";
import Awareness from "./pages/Awareness";
import { requestPermission } from "./firebase";
import Account from "./pages/Account";
import Stella from "./pages/Stella";
import LocationTest from "./pages/LocationTest";
import SpeechSynthTest from "./pages/SpeechSynthTest";
import SpeechRecogTest from "./pages/SpeechRecogTest";
import Translate from "./components/Translate";

function App() {
  useEffect(() => {
    if (Notification.permission != "granted") {
      requestPermission();
    }
    const contextmenuEventHandler =  (e)=>{
      e.preventDefault();
      e.stopPropagation();
    }
    document.addEventListener('contextmenu', contextmenuEventHandler)
    return ()=>{
      document.removeEventListener('contextmenu', contextmenuEventHandler)
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/more" element={<More />} />
        <Route path="/complaints" element={<Complaint />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/profile" element={<Account />} />
        <Route path="/stella" element={<Stella />} />
        <Route path="/locationtest" element={<LocationTest />} />
        <Route path="/speechsynthtest" element={<SpeechSynthTest />} />
        <Route path="/speechrecogtest" element={<SpeechRecogTest />} />
        <Route
          path="*"
          element={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <h1>Looks like you are lost!</h1>
            </div>
          }
        />
      </Routes>
      {/* <Translate /> */}
    </>
  );
}

export default App;
