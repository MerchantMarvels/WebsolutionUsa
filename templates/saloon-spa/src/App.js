import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Services from "./components/Services"; 
import About from "./components/About";
import Gallery from "./components/Gallery";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import Offers from "./components/Offers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <About />
      <Gallery />
      <TestimonialsCarousel />
      <Offers />
      <Contact />
      <Footer />
      <main>
        {/* Your page content */}
      </main>
    </>
  );
}

export default App;
