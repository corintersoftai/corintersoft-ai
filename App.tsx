import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ModelsSection } from './components/ModelsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AIChatWidget } from './components/AIChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-[#050b07] text-white overflow-x-hidden selection:bg-green-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ModelsSection />
        <BenefitsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}

export default App;