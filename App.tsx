import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Customers } from './components/Customers';
import { BlindSpots } from './components/BlindSpots';
import { Difference } from './components/Difference';
import { CaseStudies } from './components/CaseStudies';
import { Process } from './components/Process';
import { Personas } from './components/Personas';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ThankYou } from './components/ThankYou';
import { CookieBar } from './components/CookieBar';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Customers />
        <BlindSpots />
        <Process />
        <Difference />
        <Personas />
        <CaseStudies />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans selection:bg-digica-red selection:text-white">
        <CookieBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;