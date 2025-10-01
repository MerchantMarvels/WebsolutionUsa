import Hero from "../sections/Hero";
import AboutUs from "../sections/AboutUs";
import OurStory from "../sections/OurStory";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import Pricing from "../sections/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurStory />
      <Services />
      <Testimonials />
      <Pricing />
      {/* add the rest of your page sections below */}
    </>
  );
}
