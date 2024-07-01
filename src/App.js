import logo from './logo.svg';
import './App.css';
import TrackList from "./components/TrackList/TrackList";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Volume from "./components/Footer/Volume/Volume";
import Footer from "./components/Footer/Footer";
import {useState} from "react";

function App() {
    let MainAudio = {
        audio : new Audio(),
        trackAuthor : "-",
        trackName : "-",
        trackTitle : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9g0fRdKqqDBtVDkCbY1y6-f12akg1FWQfug&s"
    }
    MainAudio.audio.volume = 0.1;

  return (
      <BrowserRouter>
          <div className="App">
              <div className="wrapper">
                  <Header/>
                  <Routes>
                      <Route path="" element={<TrackList all="true" audio={MainAudio}/>}/>
                      <Route path="/powerwolf" element={<TrackList author="Powerwolf" audio={MainAudio}/>}/>
                      <Route path="/serega_pirat" element={<TrackList author="Серёга пират" audio={MainAudio}/>}/>
                  </Routes>
                  <Footer audio={MainAudio}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
