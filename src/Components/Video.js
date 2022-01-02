import React from "react";
import "./Video.scss";
// import { useParams } from "react-router-dom";

function Video() {
  //   let { id } = useParams(); ==> for a real database

  let id = "8hly31xKli0";
  console.log(id);

  return (
    <div className="video">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="video"
        frameborder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
