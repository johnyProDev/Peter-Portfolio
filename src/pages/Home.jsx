import React from 'react';
import Navbar from '../components/Navigation/Navbar';

import "../utils/main";
import Footer from '../components/Footer/Footer';
import Hero from '../components/Sections/Hero/Hero';
import About from '../components/Sections/About/About';
import CoreCompetencies from '../components/Sections/CoreCompetencies/CoreCompetencies';
import Testimonials from '../components/Sections/Testimonials/Testimonials';
import Stats from '../components/Sections/Stats/Stats';
import Services from '../components/Sections/Services/Services';
import Pricing from '../components/Sections/Pricing/Pricing';
import Faqs from '../components/Sections/Faqs/Faqs';
import Contact from '../components/Sections/Contact/Contact';


const Home = () => {
  return (
    <>
      <Navbar />
      <main className="main">

        <section id="hero" className="hero section">
          <Hero />
        </section>

        <section id="about" className="about section">
          <About />
        </section>

        <section id="features" className="features section">
          <CoreCompetencies />
        </section>


        <section id="testimonials" className="testimonials section light-background">
          <Testimonials />
        </section>

        <section id="stats" className="stats section">
          <Stats />
        </section>

        <section id="services" className="services section light-background">
          <Services />
        </section>

        <section id="pricing" className="pricing section light-background">
          <Pricing />
        </section>

        <section className="faq-9 faq section light-background" id="faq">
          <Faqs />
        </section>

        <section id="contact" className="contact section light-background">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
};



export default Home;