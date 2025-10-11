import React from "react";
import {useRef} from "react";
import {useEffect} from "react";  
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import MenuSection from "./components/MenuSection";
import TruckDiaries from "./components/TruckDiaries";
import LocationsSection from "./components/LocationsSection";
import OurStory from "./components/OurStory";
import ConnectedSection from "./components/ConnectedSection";
import Footer from "./components/Footer";
import ReviewsSection from "./components/ReviewsSection";

function App() {

  const aosInit = useRef(false);

  useEffect(() => {
    if (aosInit.current) return;

    AOS.init({
      duration: 1000,        // animation speed
      easing: "ease-in-out", // smooth easing
      once: false,           // trigger every time you scroll
      mirror: true,          // animate back out when scrolling up
      offset: 100,           // distance before triggering
    });

    aosInit.current = true;
  }, []);

  return (
    <>
      <Header />
      <HeroBanner />
      <MenuSection />
      <TruckDiaries />
      <LocationsSection />
      <OurStory />
      <ReviewsSection />
      <ConnectedSection />
      <Footer />
    </>
  );
}

export default App;
