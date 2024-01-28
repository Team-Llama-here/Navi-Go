import React, { useState, useEffect } from "react";
import axios from "../axios";

const LocationTest = () => {
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
            console.log(addresslst);
            for (const ele of addresslst) {
              if (ele.types.indexOf("locality") != -1) {
                console.log("ele:", ele);
                console.log("short_name:", ele.short_name);
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

  return (
    <div>
      {location ? (
        <p>
          Your current location is: {location.latitude}, {location.longitude}
          <br />
          Place: {placeName}
        </p>
      ) : (
        <p>{error || "Fetching location..."}</p>
      )}
    </div>
  );
};

export default LocationTest;
