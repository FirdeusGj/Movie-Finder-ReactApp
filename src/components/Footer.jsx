import React from 'react'
import movieLogo from "../imgs/movieLogo.png";

export default function Footer() {
  return (
    <>
    <footer className="footer__wrapper">
        <div className="footer__logo">
            <img className="footer__logo" src={movieLogo}/>
        </div>
        <div className="footer__links">
            <ul>
                <li>Home</li>
                <li>Find Your Movies</li>
                <li>About</li>
            </ul>
        </div>
    </footer>
    </>
  )
}
