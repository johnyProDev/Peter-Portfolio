import React from 'react';
import Navbar from '../components/Navigation/Navbar';

import "../utils/main";
import Footer from '../components/Footer/Footer';
import Hero from '../components/Sections/Hero/Hero';
import About from '../components/Sections/About/About';
import Features from '../components/Sections/Features/Features';
import Clients from '../components/Sections/Clients/Clients';
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
          <Features />
        </section>

        <section id="clients" className="clients section">
          <Clients />
        </section>

        <section id="testimonials" class="testimonials section light-background">
          <Testimonials />
        </section>

        <section id="stats" class="stats section">
          <Stats />
        </section>

        <section id="services" class="services section light-background">
          <Services />
        </section>

        <section id="pricing" class="pricing section light-background">
          <Pricing />
        </section>

        <section class="faq-9 faq section light-background" id="faq">
          <Faqs />
        </section>

        <section id="contact" class="contact section light-background">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
};



export default Home;