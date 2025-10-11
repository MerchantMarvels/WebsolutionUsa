import React from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Transformation from "./components/Transformation";
import AboutGreen from "./components/AboutGreen";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Transformation />
      <AboutGreen />
      <TestimonialsCarousel />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
