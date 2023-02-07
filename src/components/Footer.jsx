import React from 'react'
import { Link } from 'react-router-dom';
import movieLogo from "../imgs/movieLogo.png";

export default function Footer() {
  return (
    <>
    <footer className="footer__wrapper">
        <div className="footer__logo--wrapper">
            <img src={movieLogo} className="nav__logo footer__logo"/>
        </div>
        <div className="footer__links--wrapper">
            <ul className='footer__links'>
                <li className='footer__link'><Link className='footer__a' to="/">Home</Link></li>
                <li className='footer__link'><Link className='footer__a' to="/">Find Your Movies</Link></li>
                <li className='footer__link'><Link className='footer__a' to="/">About</Link></li>
            </ul>
        </div>
        <p className='footer__para'>Copyright © Firdeus Gjepali</p>
    </footer>
    </>
  )
}
