import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const goToPokedex =(navigate)=>{
    navigate("/pokedex")
}

export const goToHome = (navigate)=>{
    navigate("/")
}

export const goToStats = (navigate)=>{
    navigate("/stats")
}