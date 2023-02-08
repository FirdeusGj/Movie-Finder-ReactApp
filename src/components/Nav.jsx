import React from "react";
import { Link } from "react-router-dom";
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
              <li className="nav__link"><Link className="nav__a" to="/">Home</Link></li>
              <li className="nav__link"><a className="nav__a" href="#movielist">Find Movies</a></li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
