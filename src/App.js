import "./App.css";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./Pages/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
          <Routes>
            <Route exact path='/' element={<><MovieList/><MainPage/></>}/>
            <Route exact path="/search" element={<Search/>}/>
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
