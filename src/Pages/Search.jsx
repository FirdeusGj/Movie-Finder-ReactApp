import axios from "axios";
import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import { Link, useLocation } from "react-router-dom";

export default function Search() {
  const { state } = useLocation();
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [searchMovie, setSearchMovie] = useState("");

  async function FetchMovies(query) {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=59e995b1&s=${searchMovie || query}`
    ).catch((error) => console.log(error));
    setMovies(data.Search);
    setLoading(false);
  }
  useEffect(() => {
    if (state && state.query) {
      FetchMovies(state.query);
    }
    // eslint-disable-next-line
  }, []);

  const searchEnter = (e) => {
    if (e.key === "Enter") {
      FetchMovies();
    }
  };

  return (
    <>
      <div className="movielist__wrapper">
        <label className="movielist__label">Browse Movies</label>
        <div className="movielist__search">
          <input
            className="movielist__input"
            type="text"
            value={searchMovie}
            placeholder="Enter Your Show's Name..."
            onChange={(event) => setSearchMovie(event.target.value)}
            onKeyUp={searchEnter}
          />
          <button
            className="movielist__btn"
            onClick={() => FetchMovies(searchMovie)}
          >
            <svg
              className="movielist__btn--icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="movies">
        <div className="movies__wrapper">
          {loading
            ? new Array(9).fill(0).map((_, index) => (
                <div className="skeleton">
                  <div className="skeleton__img"></div>
                  <div className="skeleton__title--wrap">
                    <div className="skeleton__title"></div>
                    <div className="skeleton__title"></div>
                  </div>
                </div>
              ))
            : movies.slice(0, 9).map((movie) => (
                <div className="movie">
                  <div className="movie__info">
                    <div className="movie__img--wrapper">
                      <Link to={`/Search/${movie.imdbID}`} state={{title: searchMovie || state.query}}>
                      <img
                        src={movie.Poster}
                        alt="poster"
                        className="movie__img"
                        />
                        </Link>
                    </div>
                    <div className="movie__description">
                      <h1 className="movie__title">{movie.Title}</h1>
                      <h3 className="movie__type">Type : {movie.Type}</h3>
                    </div>
                  </div>
                </div>))}
        </div>
      </div>
    </>
  );
}
