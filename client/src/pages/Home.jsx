import { useState, useEffect, useRef } from "react";
import "./css/Home.css";
import API from "../api.js"; // adjust path if needed


// import each file so the bundler includes them
import healthfunda from "../assets/client-logos/healthfunda.png";
import ringenius from "../assets/client-logos/ringenious.png";
import technewsmart from "../assets/client-logos/technewsmart.png";
import electrotrack from "../assets/client-logos/electrotrack.jpg";
import TestimonialSlider from "./sections/TestimonialSlider";
import TeamCarousel from "./sections/TeamCarousel";
import Team1 from "../assets/team1.jpg";
import Team2 from "../assets/team2.jpg";
import Team3 from "../assets/team3.jpg";
import Team4 from "../assets/team4.jpg";
import PricingPlans from "./sections/PricingPlans";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";

import webDevelopementIcon from "../assets/icons/Web Development.png";
import digitalMarketingIcon from "../assets/icons/Digital Marketing.png";
import seoOptimizationIcon from "../assets/icons/SEO Optimization.png";
import startupSolutionsIcon from "../assets/icons/Startup Solutions.png";
import appsDevelopmentIcon from "../assets/icons/Apps Development.png";
import socialMarketingIcon from "../assets/icons/Social Marketing Management.png";

import RemoteITAssistance from "../assets/icons/Remote  IT Assistance.png";
import WebServices from "../assets/icons/Web Services.png";
import ManagedITService from "../assets/icons/Managed IT Service.png";
import ITSecurityServices from "../assets/icons/IT Security Services.png";
import SolvingITProblems from "../assets/icons/Solving IT Problems.png";

import ProtectYourBusiness from "../assets/icons/Protect Your Business.png";
import NetworkSecurity from "../assets/icons/Network Security.png";
import DataSecurity from "../assets/icons/Data Security.png";
import SmallBusinessOwners from "../assets/icons/Small Business Owners.png";
import RunningYourBusiness from "../assets/icons/Running Your Business.png";
import NetworkMonitoring from "../assets/icons/Network Monitoring.png";

export default function Home() {
    const fullText = "IT Solutions & Business\nServices Company";
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        API.get("/test") // this will call http://localhost:5000/api/test
            .then((res) => {
                console.log("✅ Backend response:", res.data);
            })
            .catch((err) => {
                console.error("❌ API error:", err);
            });
    }, []);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, i + 1));
            i++;
            if (i === fullText.length) clearInterval(interval);
        }, 70);
        return () => clearInterval(interval);
    }, []);

    //   logo consts

    const logos = [
        { src: healthfunda, alt: "Health Funda" },
        { src: ringenius, alt: "Ringenius Solutions LLP" },
        { src: technewsmart, alt: "Tech News Mart" },
        { src: electrotrack, alt: "ElectroTrack" },
    ];
    const loop = [...logos, ...logos];

    //    services consts 
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("visible");   // triggers fade-up
                    io.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (el) io.observe(el);
        return () => io.disconnect();
    }, []);

    const services = [
        {
            title: "Web Development",
            desc: "We know a powerful website is key to business success. We deliver custom web solutions for all sizes.",
            icon: webDevelopementIcon,
        },
        {
            title: "Social Marketing Management",
            desc: "Build a strong online presence and connect with your audience. We make managing your social simple.",
            icon: socialMarketingIcon,
        },
        {
            title: "Digital Marketing",
            desc: "Boost visibility and reach more customers with data-driven marketing—from local businesses to global brands.",
            icon: digitalMarketingIcon,
        },
        {
            title: "SEO Optimization",
            desc: "Rank higher, attract the right audience, and drive more sales. The key to long-term digital success.",
            icon: seoOptimizationIcon,
        },
        {
            title: "Startup Solutions",
            desc: "Your all-in-one path to launch and grow—turn your entrepreneurial vision into reality with confidence.",
            icon: startupSolutionsIcon,
        },
        {
            title: "Apps Development",
            desc: "Take your business mobile with tailored, user-friendly apps that engage customers anywhere.",
            icon: appsDevelopmentIcon,
        },
    ];


    //   QualitySection consts 

    const ref = useRef(null);

    // Trigger animation when the card enters the viewport
    useEffect(() => {
        const el = ref.current;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("in-view");
                    io.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (el) io.observe(el);
        return () => io.disconnect();
    }, []);

    const items = [
        { label: "Web Development", value: 90 },
        { label: "Web Services", value: 90 },
        { label: "Managed Google Business Listing", value: 80 },
    ];


    //   Why choose us consts 
    const Whyref = useRef(null);

    useEffect(() => {
        const el = Whyref.current;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("in-view");
                    io.disconnect();
                }
            },
            { threshold: 0.25 }
        );
        if (el) io.observe(el);
        return () => io.disconnect();
    }, []);

    const Whyrefitems = [
        { title: "Remote IT Assistance", icon: RemoteITAssistance, },
        { title: "Web Services", icon: WebServices, },
        { title: "Managed IT Service", icon: ManagedITService, },
        { title: "IT Security Services", icon: ITSecurityServices, },
        { title: "Practice IT Management", icon: WebServices, },
        { title: "Solving IT Problems", icon: SolvingITProblems, },
    ];


    // SecuritySection consts 
    const SecuritySectionref = useRef(null);

    // Fade-in on scroll
    useEffect(() => {
        const el = SecuritySectionref.current;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("in-view");
                    io.disconnect();
                }
            },
            { threshold: 0.25 }
        );
        if (el) io.observe(el);
        return () => io.disconnect();
    }, []);

    const cards = [

        { title: "Protect Your Business", icon: ProtectYourBusiness, },
        { title: "Network Security", icon: NetworkSecurity, },
        { title: "Data Security", icon: DataSecurity, },
        { title: "Small Business Owners", icon: SmallBusinessOwners, },
        { title: "Running Your Business", icon: RunningYourBusiness, },
        { title: "Network Monitoring", icon: NetworkMonitoring, },
    ];

    // StatsSection consts 

    const StatsSectionref = useRef(null);
    const [inView, setInView] = useState(false);
    const StatsSectionitems = [
        { value: 20, label: "Experienced Team of Professionals" },
        { value: 2, label: "Years Helping Business" },
        { value: 500, label: "Projects Delivered" },
        { value: 100, label: "Satisfied Customers" },
    ];

    // counters state (match the length of StatsSectionitems)
    const [counts, setCounts] = useState(StatsSectionitems.map(() => 0));

    useEffect(() => {
        const el = StatsSectionref.current;
        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                io.disconnect();
            }
        }, { threshold: 0.25 });
        if (el) io.observe(el);
        return () => io.disconnect();
    }, []);

    // animate numbers once visible
    useEffect(() => {
        if (!inView) return;
        const duration = 1400; // ms
        const start = performance.now();

        const ease = t => 1 - Math.pow(1 - t, 3); // easeOutCubic

        const tick = (now) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = ease(p);
            setCounts(StatsSectionitems.map(i => Math.round(i.value * eased)));
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [inView, StatsSectionitems.length]);


    // testimonial data 
    const testimonials = [
        {
            rating: 5,
            quote:
                "WebSolutionUsa exceeded my expectations in building a sleek, responsive website for my consulting firm. Their professionalism, expertise, and client-focused approach turned my vision into a stunning digital success. Highly recommend!",
            name: "Zahra Burnett",
            role: "Product Manager",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
        },
        {
            rating: 5,
            quote:
                "WebSolutionUsa is outstanding for e-commerce website development. Since launch, our online sales have soared—I highly recommend their team!",
            name: "Jessica Jone",
            role: "Research Director",
            avatar: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=200&h=200&fit=crop",
        },
        {
            rating: 5,
            quote:
                "An amazing job designing and developing my start-up’s website. Detail-oriented and flawless execution!",
            name: "Dawn Moon",
            role: "HR Director",
            avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop",
        },

        // add more if you want
    ];
    //  team data 
    const team = [
        {
            name: "Fahat Khan",
            role: "Sr. developer",
            photo: Team1,
            linkedin: "https://linkedin.com/in/fahat",
        },
        {
            name: "Akshay Rahalkar",
            role: "Director Sales",
            photo: Team2,
            linkedin: "https://linkedin.com/in/akshay",
        },
        {
            name: "Parvez Inamdar",
            role: "Sr. developer",
            photo: Team4,
            linkedin: "https://linkedin.com/in/parvez",
        },
        {
            name: "Sagar Kurapati",
            role: "Developer",
            photo: Team3,
            linkedin: "https://linkedin.com/in/sager",
        },
        // add more…
    ];

    return (
        <div className="page" >

            <div className="banner" id="home">
                <div className="banner-wrap">
                    <h1 className="typewriter">
                        {displayedText.split("\n").map((line, idx, arr) => (
                            <span key={idx}>
                                {line}
                                {idx < arr.length - 1 && <br />}
                            </span>
                        ))}
                        <span className="cursor" />
                    </h1>
                    <p>We deliver innovative IT solutions and business services designed to streamline operations and fuel long-term growth.</p>
                    <div className="banner-btns">
                        <a href="#services"><button className="btn-primary">Get Started</button>  </a>
                        <a href="#pricing"><button className="btn-secondary">Learn More</button></a>
                    </div>
                </div>
            </div>

            <div className="partner-logos" aria-label="Our partners">
                <div className="logos-track">
                    {loop.map((logo, i) => (
                        <div className="logo-item" key={i}>
                            <img src={logo.src} alt={logo.alt} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>

            <section ref={sectionRef} className="our-services reveal" id="services">
                <div className="our-services__head">
                    <span className="small-title">Our Services</span>
                    <h2 className="title">What we provide</h2>
                </div>

                <div className="services-grid">
                    {services.map((s, i) => (
                        <article className="service-card" key={i}>
                            <div className="" aria-hidden="true">
                                <img src={s.icon} alt={`${s.title} icon`} />
                            </div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </article>
                    ))}
                </div>
            </section>


            <section className="quality-wrap">
                <div className="quality-card" ref={ref}>
                    <span className="small-title">We Deliver!</span>
                    <h3 className="title">
                        Providing Your Business With A Quality IT
                        <br /> Service is Our Passion
                    </h3>
                    <div className="quality-grid">
                        {/* Left column */}
                        <div className="quality-copy">


                            <div className="q-progress">
                                {items.map((it, i) => (
                                    <div className="q-row" key={i}>
                                        <span className="q-label">{it.label}</span>
                                        <div className="q-bar-row">
                                            <div className="q-bar">
                                                {/* set target percentage via CSS variable */}
                                                <span
                                                    className="q-fill"
                                                    style={{ "--value": it.value / 100 }}
                                                />
                                            </div>

                                            <span className="q-val">{it.value}%</span> </div>

                                    </div>
                                ))}
                            </div>

                            <a href="#pricing"><button className="q-cta">Learn more</button></a>
                        </div>

                        {/* Right column */}
                        <div className="quality-media">
                            <img
                                src={image1}
                                alt="Team working on analytics"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="choose-wrap" id="why-choose" ref={Whyref}>
                <div className="choose-head">
                    <span className="small-title">Why choose us?</span>
                    <h2 className="title">
                        Professional website built to your <br /> Requirements
                    </h2>
                </div>

                <div className="choose-grid">
                    {/* Left: image */}
                    <div className="choose-media">
                        <img
                            src={image2}  /* put your image in /public/images/ */
                            alt="Team collaborating in the office"
                            loading="lazy"
                        />
                    </div>

                    {/* Right: 2×3 cards */}
                    {/* Right: 2×3 cards */}
                    <div className="choose-cards">
                        {Whyrefitems.map((it, i) => (
                            <article
                                className={`choose-card ${i === 0 ? "is-active" : ""}`}
                                key={it.title}
                                style={{ "--d": `${i * 90}ms` }} /* stagger delay */
                            >
                                <div className="choose-icon" aria-hidden="true">
                                    <img src={it.icon} alt={`${it.title} icon`} />
                                </div>
                                <h3>{it.title}</h3>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="security-wrap" id="security" ref={SecuritySectionref}>
                <div className="security-head">
                    <span className="small-title">Why choose us?</span>
                    <h2 className="title">
                        Safeguard Your Brand with Cyber Security and<br />IT Solutions
                    </h2>
                </div>

                <div className="security-grid">
                    {/* Left: 2×3 cards */}
                    <div className="security-cards">
                        {cards.map((t, i) => (
                            <article
                                className={`security-card ${i === 0 ? "is-active" : ""}`}
                                key={t.title}
                                style={{ "--d": `${i * 90}ms` }} // stagger delay
                            >
                                <div className="security-icon" aria-hidden="true">
                                    <img src={t.icon} alt={`${t.title} icon`} />
                                </div>
                                <h3>{t.title}</h3>
                            </article>
                        ))}
                    </div>

                    {/* Right: tall image */}
                    <div className="security-media">
                        <img
                            src={image3}  /* place your image in /public/images/ */
                            alt="Cyber security monitoring dashboard"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <section className="stats-wrap" ref={StatsSectionref} id="stats">
                <div className="stats-grid">
                    {StatsSectionitems.map((it, i) => (
                        <article className="stats-card" key={i} style={{ "--d": `${i * 80}ms` }}>
                            <div className="stat-number">
                                {(counts[i] ?? 0).toLocaleString()}
                                <span className="plus">+</span>
                            </div>
                            <p className="stat-label">{it.label}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section>
                <TestimonialSlider items={testimonials} autoplayMs={3500} />
            </section>
            {/* 
            <section>
                <TeamCarousel members={team} autoplayMs={4500} />
            </section> */}

            <section>
                <PricingPlans />
            </section>


        </div>
    );
}
