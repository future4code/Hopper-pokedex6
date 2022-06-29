import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/HomePage"
import Pokedex from "../Pages/PokedexPage"
import Stats from "../Pages/StatsPage"

const Router = () => {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/pokedex"} element={<Pokedex />} />
            <Route path={"/stats"} element={<Stats />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  };
  
  export default Router;