import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";
import Details from "../pages/Details";
import Header from "../components/Header";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<Home />} />

          <Route exact path={"/pokedex"} element={<Pokedex />} />

          <Route exact path={"/details"} element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;