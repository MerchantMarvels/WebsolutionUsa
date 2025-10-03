// App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header';
import AutoLogoCarousel from './sections/AutoLogoCarousel';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
import GrowthSection from './sections/GrowthSection';
import TestimonialsSection from './sections/TestimonialsSection';
import PricingSection from './sections/PricingSection';
import FaqAccordion from './sections/FaqAccordion';

// sections 
import Banner from './sections/Banner';
import SiteFooter from './components/Footer';



function App() {
  return (
    <>
      <Header />
      <Banner />
      <AutoLogoCarousel />
      <ServicesSection />
      <PortfolioSection />
      <GrowthSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqAccordion />
      <SiteFooter />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes> */}
    </>
  );
}

export default App;
