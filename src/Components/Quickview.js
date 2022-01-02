import React from "react";
import "./Quickview.scss";
import CloseIcon from "@material-ui/icons/Close";

function Quickview({ bannerStyle, movie, popup, popupStatut }) {
  return (
    <div className={`quickview ${popupStatut && "open"}`}>
      <div className="quickview-banner" style={bannerStyle}>
        <div className="quickview-content">
          <h3 className="quickview-title">
            {movie.title || movie.original_title || movie.name}
          </h3>
          <p>{movie?.overview}</p>
          <button className="quickview-close " onClick={popup}>
            <CloseIcon fontSize="large" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quickview;
