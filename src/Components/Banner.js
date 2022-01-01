import React, { useState, useEffect } from "react";
import "./Banner.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoIcon from "@material-ui/icons//Info";
import axios from "axios"; // fetching data with axios
import requests from "../Config/Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      //Math.floor return the largest integer(entier) that is less than or equal to x
      //=>we request by this function, getting a single random background
      //image film when someone visits/refreshes the page.

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);

  function truncateText(string, n) {
    // we put this condition to avoid long text's desciption
    return String?.length > n // so we limit the caractere strings to 100, else : No desciption
      ? string.substr(0, (n = 1)) + "..."
      : "No description";
  }
  // we create this const tu put image of each movie we have in banner =>url from documentation API
  //+path of image in console
  const bannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPositions: "center center",
  };
  // The title had 3 path, we put them all;
  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner-content">
        <h1 className="banner-title">
          {movie.title || movie.original_title || movie.name}
        </h1>
        <p className="banner-description">
          {truncateText(movie.overview, 100)}
        </p>
        <div className="banner-buttons">
          <button className="banner-button banner-button-play">
            <PlayArrowIcon /> Lecture
          </button>
          <button className="banner-button">
            <InfoIcon /> Plus d'infos
          </button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
