import React, { useState, useEffect } from "react";
import "./Banner.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoIcon from "@material-ui/icons//Info";
import axios from "axios";
import requests from "../Config/Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);

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
    return String?.length > n
      ? string.substr(0, (n = 1)) + "..."
      : "No description";
  }

  const bannerStyle = {
    backgroundImage: `url("https://api.themoviedb.org/3${movie.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPositions: "center center",
  };

  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.original_title}
        </h1>
        <p className="banner-description">
          {truncateText(movie?.overview, 100)}
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
