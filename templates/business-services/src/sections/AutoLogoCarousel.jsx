import { useEffect, useRef, useState } from "react";
import logo1 from "../assests/demo-logo.png";
import "../styles/auto-logo-carousel.css";

/**
 * LogoAutoCarousel
 *  speed: pixels per second
 *  gap: px space between logos
 *  height: strip height in px
 *  fade: edge fade width in px
 */
export default function LogoAutoCarousel({}) {
  
   const logos = [
          { src: logo1, alt: "Health Funda" },
          { src: logo1, alt: "Ringenius Solutions LLP" },
          { src: logo1, alt: "Tech News Mart" },
          { src: logo1, alt: "ElectroTrack" },
      ];
      const loop = [...logos, ...logos];


  return (
       <div className="partner-logos" aria-label="Our partners">
        <p className="partner-logos__title">Partnering with the world’s leading enterprises</p>
                <div className="logos-track">
                    {loop.map((logo, i) => (
                        <div className="logo-item" key={i}>
                            <img src={logo.src} alt={logo.alt} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
  );
}
