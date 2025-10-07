import React from "react";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Services from "./components/Services";
import Barbers from "./components/Barbers";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import BeforeAfterGallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./css/styles.css";

export default function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Services />
      <Barbers />
      <Pricing />
      <Testimonials  />
      <BeforeAfterGallery />
      <Contact />
      <Footer />
    </>
  );
}
