
import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';

const Index: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <Services />
      <About />
      <Contact />
    </MainLayout>
  );
};

export default Index;
