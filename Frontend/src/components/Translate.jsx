import React from "react";
// import "google";
import axios from "../axios";

const Translate = () => {
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: "en" }, "root");
  }

  function translateWebsite(lang) {
    // Specify the target language code (e.g., 'es' for Spanish)
    var targetLanguage = lang;

    // Translate the entire page
    google.translate.translatePage(
      "en",
      targetLanguage,
      function (translation) {
        // Update the content of the entire page with the translated content
        document.documentElement.innerHTML = translation.translatedHtml;
      }
    );
  }
  googleTranslateElementInit();
  return (
    <>
      <script type="text/javascript">{translateWebsite("ta")}</script>

      <script
        type="text/javascript"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit&key=AIzaSyC0QHdh0hJktODiBlAVbWOXYGW3hp1wvWo"
      ></script>
    </>
  );
};

export default Translate;
