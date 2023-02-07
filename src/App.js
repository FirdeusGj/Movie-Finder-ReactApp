import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import MovieList from './components/MovieList';
import Nav from './components/Nav';

function App() {
 
  return (
    <div className="App">
      <Nav/>
      <MovieList/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
