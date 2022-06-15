import React from "react"
import Header from './Components/Header/Header';
import Home from "./Components/Homescreen/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Detail from "./Components/Detail/Detail";
import Movies from "./Components/Pages/Movies";
import Search from "./Components/Pages/Search";
import Series from "./Components/Pages/Series";
import Original from "./Components/Pages/Original";
function App() {
  return (
    <div>   
    <BrowserRouter>
    <Header/>
      <Routes>

        <Route path="/" element={<Home  />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/Original" element={<Original />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
