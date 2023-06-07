// import styled from "styled-components";
// import Contact from "./components/Contact";
import { Navigate, Route, Routes } from "react-router-dom"

import './Views/Hero2/Hero2'

import { Hero } from "./Views/Hero/Hero";
import { Navbar } from "./Views/Navbar/Navbar";
import { We } from "./Views/We/We";
import { Feature } from "./Views/Feature/Feature";
import { Rec } from "./Views/Rec/Rec";
import { Hero2 } from "./Views/Hero2/Hero2";
import { Category } from "./Views/Category/Category";
import { End } from "./Views/end/End";
import { Footer } from "./Views/footer/Footer";

// import { Cita } from "./Views/Cita/Cita";

function App() {
  return (
    <>
    <div className="contenedor">
    
    <div className="hero">
        <Navbar/>
        <Hero/>
        <Hero2/> 
    </div>

    <div className="we">
      <We/>
    </div>

    <div className="feature">
      <Feature/>
    </div>

    <div className="rec">
      <Rec/>
    </div>

    <div className="category">
      <Category/>
    </div>

    <div className="end">
      <End/>
  
    </div>

    <div className="footer">
      <Footer/>
    </div>


    </div>
    </>
    // <Container>
    // </Container>
  );
}

export default App;
