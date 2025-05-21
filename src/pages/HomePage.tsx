import React from 'react';
import Hero from '../components/Hero';
import ValueProposition from '../components/ValueProposition';
import Features from '../components/Features';
import IdealFor from '../components/IdealFor';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Features />
      <IdealFor />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage;