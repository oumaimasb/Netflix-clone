import React from "react";
import "./Banner.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoIcon from "@material-ui/icons//Info";

function Banner() {
  return (
    <header className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Titre</h1>
        <p className="banner-description">Lorem ipsum dolor sit....</p>
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
