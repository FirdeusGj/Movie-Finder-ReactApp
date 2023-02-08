import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function MovieList() {
  // eslint-disable-next-line
  const { id } = useParams();
  // eslint-disable-next-line
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState();
  const navigate = useNavigate();

  function onSearch() {
    fetchMovies(searchMovie);
  }

  const goToSearch = () => {
    navigate("search", { state: { query: searchMovie } });
    onSearch();
  }

  function onSearchKey(event) {
    if (event.key === "Enter") {
      goToSearch();
    }
  }
  async function fetchMovies(movieId) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${movieId}&apikey=b9e1eec5`
    );
    setMovies(data.Search);
  }
  // async function fetchMovies(movieId) {
  //   const { data } = await axios.get(
  //     `https://www.omdbapi.com/?s=${movieId}&apikey=b9e1eec5`
  //   );
  //   setMovies(data.Search);
  // }
  // useEffect(() => {
  //   fetchMovies();
  // }, []);
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
      <div id="movielist">
        <div className="movielist__wrapper">
          <label className="movielist__label">Search Any Movie</label>
          <div className="movielist__search">
            <input
              className="movielist__input"
              type="text"
              value={searchMovie}
              placeholder="Enter Your Show's Name..."
              onChange={(event) => setSearchMovie(event.target.value)}
              onKeyDown={onSearchKey}
            />
            <button className="movielist__btn" onClick={goToSearch}>
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
      </div>
    </div>
  );
}