import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function MovieInfo() {
  const { id } = useParams();
  const { state } = useLocation();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      const { data } = await axios.get(`
            https://www.omdbapi.com/?apikey=59e995b1&i=${id}`);
      setMovie(data);
      setLoading(false);
    };
    fetchMovie();
  }, []);

  const fetchSimilarMovies = async (name) => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=59e995b1&s=${name}`
    );
    setSimilarMovies(data.Search);
  };

  useEffect(() => {
    if (state.title) {
      fetchSimilarMovies(state.title);
    }
  }, []);

  return (
    <div>
      <div className="movieinfo">
        <div className="movieinfo__wrapper">
          <div className="movieinfo__image">
            <img src={movie.Poster} className="movieinfo__img"/>
          </div>
          <div className="movieinfo__description">
            <h1 className="movieinfo__h1">Title : {movie.Title}</h1>
            <h2 className="movieinfo__h2">About</h2>
            <p className="movieinfo__para">Plot : {movie.Plot}</p>
            <p className="movieinfo__para">Genre : {movie.Genre}</p>
            <p className="movieinfo__para">Year : {movie.Year}</p>
            <p className="movieinfo__para">Released on : {movie.Released}</p>
            <p className="movieinfo__para">Runtime : {movie.Runtime}</p>
            <p className="movieinfo__para">Writer : {movie.Writer}</p>
            <p className="movieinfo__para">Language : {movie.Language}</p>
            <p className="movieinfo__para">Country : {movie.Country}</p>
            <p className="movieinfo__para">Rating : {movie.imdbRating}</p>
          </div>
        </div>
        <div className="movieinfo__recommendations">
          <h1 className="similarmovie__title">Check out similar shows</h1>
          <div className="similar__movies--wrapper">
            {similarMovies
              .filter((elem) => elem.Genre !== id)
              .slice(0, 4)
              .map((recommend) => (
                <div className="similar__movies">
                  <img src={recommend.Poster} alt="" className="similar__img"/>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
