import React from 'react'
import { Link } from 'react-router-dom';
import movieLogo from "../imgs/movieLogo.png";

export default function Footer() {
  return (
    <>
    <footer className="footer__wrapper">
        <div className="footer__logo--wrapper">
          <Link to='/'>
            <img src={movieLogo} className="footer__logo" alt='logo'/>
          </Link>
        </div>
        <div className="footer__links--wrapper">
            <ul className='footer__links'>
                <li className='footer__link'><a className='footer__a' href='#nav'>Home</a></li>
                <li className='footer__link'><a className='footer__a' href='#movielist'>Find Your Movies</a></li>
                <li className='footer__link'><a className='footer__a' href='#mainpage'>About</a></li>
            </ul>
        </div>
        <p className='footer__para'>Copyright © Firdeus Gjepali</p>
    </footer>
    </>
  )
}
