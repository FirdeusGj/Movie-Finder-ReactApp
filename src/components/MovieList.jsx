import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieList() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState();

  function onSearch() {
    console.log(searchMovie);
    fetchMovies(searchMovie);
  }

  async function fetchMovies(movieId) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${movieId}&apikey=b9e1eec5`
    );
    setMovies(data.Search);
  }

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
      <div>
        <label>Search by Id</label>
        <input
          type="text"
          value={searchMovie}
          onChange={(event) => setSearchMovie(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter'){
                onSearch();
            }
          }}
        />
        <button onClick={() => onSearch()}>Enter</button>
      </div>
      {movies.map((movie) => (
        <div className="border">{movie.Title}</div>
      ))}
    </div>
  );
}
