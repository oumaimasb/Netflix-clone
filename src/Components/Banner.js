import React, { useState, useEffect } from "react";
import "./Banner.scss";
import { Link } from "react-router-dom";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoIcon from "@material-ui/icons//Info";
import axios from "axios"; // fetching data with axios
import requests from "../Config/Requests";
import Quickview from "./Quickview";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [popup, setPopup] = useState(false);

  function handleClickPopup() {
    // To pop up / close a description
    popup ? setPopup(false) : setPopup(true);
  }
  console.log(popup);

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
    return string?.length > n // so we limit the caractere strings to 100, else : No desciption
      ? string.substr(0, n - 1) + "..."
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
          {truncateText(movie?.overview, 100)}
        </p>
        <div className="banner-buttons">
          <Link to={`/video/${movie?.id}`}>
            <button className="banner-button banner-button-play">
              <PlayArrowIcon /> Lecture
            </button>
          </Link>
          <button className="banner-button" onClick={handleClickPopup}>
            <InfoIcon /> Plus d'infos
          </button>
        </div>
      </div>
      <Quickview
        bannerStyle={bannerStyle}
        movie={movie}
        popup={handleClickPopup}
        popupStatut={popup}
      />
    </header>
  );
}

export default Banner;
