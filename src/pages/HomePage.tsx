import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Ministry from '../components/Ministry';
import Sermons from '../components/Sermons';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Ministry />
      <Sermons />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;