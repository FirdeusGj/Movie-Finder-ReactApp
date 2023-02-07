import React from "react";
import movieLogo from "../imgs/movieLogo.png";

export default function Nav() {
  return (
      <nav>
        <div className="nav__section">
          <div className="nav__logo--wrapper">
            <img src={movieLogo} className="nav__logo"/>
          </div>
          <div className="nav__links--wrapper">
            <ul className="nav__links">
              <li className="nav__link"><a href="/">Home</a></li>
              <li className="nav__link"><a href="/">Find Movies</a></li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
