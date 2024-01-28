import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import StatCard from "../components/StatCard";
import ProgressCard from "../components/ProgressCard";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import pinImg from "../assets/pin.png";
import micImg from "../assets/mic100.png";
import leafImg from "../assets/leaf.png";
import rightImg from "../assets/right.png";
import { useNavigate } from "react-router";
import axios from "../axios";

const Dashboard = () => {
  const nav = useNavigate();
  const [langSel, setLangSel] = useState();
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [placeName, setPlaceName] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        // Reverse geocoding using Google Maps Geocoding API
        const apiKey = "AIzaSyC0QHdh0hJktODiBlAVbWOXYGW3hp1wvWo";
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

        axios
          .get(apiUrl)
          .then((response) => {
            const addresslst = response.data.results[0].address_components;
            // console.log(addresslst);
            for (const ele of addresslst) {
              if (ele.types.indexOf("locality") != -1) {
                // console.log("ele:", ele);
                // console.log("short_name:", ele.short_name);
                setPlaceName(ele.short_name);
              }
            }
          })
          .catch((error) => {
            setError(`Error fetching place name: ${error.message}`);
          });
      },
      (err) => {
        setError(`Error getting location: ${err.message}`);
      }
    );
  }, []);

  useEffect(() => {
    sessionStorage.setItem("lang", langSel);
  }, [langSel]);

  useEffect(() => {
    sessionStorage.setItem("location", placeName);
  }, [placeName]);

  // function translateWebsite(lang) {
  //   // Specify the target language code (e.g., 'es' for Spanish)
  //   var targetLanguage = lang;

  //   // Translate the entire page
  //   google.translate.translatePage(
  //     "en",
  //     targetLanguage,
  //     function (translation) {
  //       // Update the content of the entire page with the translated content
  //       document.documentElement.innerHTML = translation.translatedHtml;
  //     }
  //   );
  // }

  // function translateNode(node, targetLanguage) {
  //   if (node.nodeType === Node.TEXT_NODE) {
  //     // Translate text content of the text node
  //     google.translate.TranslateService.translate(
  //       node.textContent,
  //       "en",
  //       targetLanguage,
  //       function (translation) {
  //         node.textContent = translation.translation;
  //       }
  //     );
  //   } else if (node.nodeType === Node.ELEMENT_NODE) {
  //     // Recursively translate child nodes of element nodes
  //     for (var i = 0; i < node.childNodes.length; i++) {
  //       translateNode(node.childNodes[i], targetLanguage);
  //     }
  //   }
  // }

  // function translateWebsite(lang) {
  //   // Specify the target language code (e.g., 'es' for Spanish)
  //   var targetLanguage = lang;

  //   // Translate each text node in the entire page
  //   var bodyNode = document.body;
  //   translateNode(bodyNode, targetLanguage);
  // }

  return (
    <>
      <Header text={"Morning! Abinash"} />
      <div className="dashboard-wrapper">
        <div className="top-elems">
          <div className="lang-select">
            <div id="langSelector">
              <a href="#Weglot-en" onClick={() => setLangSel(() => "en")}>
                {/* <option value="English" onClick={() => nav("/#Weglot-en")}> */}
                English
                {/* </option> */}
              </a>
              <a href="#Weglot-ta" onClick={() => setLangSel(() => "ta")}>
                {/* <option value="Tamil" onClick={() => nav("/#Weglot-ta")}> */}
                Tamil
                {/* </option> */}
              </a>
              {/* <option value="Hindi">Hindi</option> */}
            </div>
          </div>
          <div className="location">
            <img src={pinImg} alt="location" />
            <span>{location ? placeName : error || "Fetching..."}</span>
          </div>
        </div>
        <div className="stella-area">
          <div className="stella-mic">
            <div className="mic-circle" onClick={() => nav("/stella")}>
              <img src={micImg} alt="stella mic" />
            </div>
          </div>
          <div className="stella-desc">Talk with STELLA.AI</div>
        </div>
        <div className="bottom-elems">
          <div className="bottom-left">
            <img src={leafImg} alt="leaf" />
            <div className="leaf-right">
              <div style={{ fontSize: 25, fontWeight: 500 }}>60</div>
              <div>Eco Points</div>
            </div>
          </div>
          <div className="bottom-right">
            <div className="traffic-nav">
              <div>About Me</div>
              <img src={rightImg} alt="right" />
            </div>
            {/* <div className="weather-nav">
              <div>Weather Near Me</div>
              <img src={rightImg} alt="right" />
            </div> */}
          </div>
        </div>
      </div>
      <NavBar curPage={"home"} />
    </>
  );
};

export default Dashboard;
