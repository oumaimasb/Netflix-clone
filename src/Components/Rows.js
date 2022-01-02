import React, { useState, useEffect } from "react";
import "./Rows.scss";
import axios from "axios";

function Rows({ title, fetchUrl, isPoster }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-images">
        {movies.map((movie) => (
          <div key={movie.id}>
            {isPoster ? (
              <img
                src={`${baseUrl}${movie.poster_path}`}
                className="row-image"
                alt={movie.title || movie.original_title || movie.name}
              />
            ) : (
              <img
                src={`${baseUrl}${movie.backdrop_path}`}
                className="row-image"
                alt={movie.title || movie.original_title || movie.name}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rows;
