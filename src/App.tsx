/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WelcomeSection } from './components/WelcomeSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { FeaturedModelSection } from './components/FeaturedModelSection';
import { ModelsShowcaseSection } from './components/ModelsShowcaseSection';
import { QuoteSection } from './components/QuoteSection';
import { FAQSection } from './components/FAQSection';
import { SocialWidget } from './components/SocialWidget';
import { Footer } from './components/Footer';
import { ServiceType } from './utils/pricing';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [quoteService, setQuoteService] = useState<ServiceType | undefined>(undefined);
  const isNavigatingRef = useRef(false);

  // Scrollspy to automatically move the yellow highlight to the active section
  useEffect(() => {
    const handleScroll = () => {
      if (isNavigatingRef.current) return;

      const scrollY = window.scrollY;

      // Top edge snap
      if (scrollY < 120) {
        setActiveTab('home');
        return;
      }

      // Bottom edge snap
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveTab('faq');
        return;
      }

      const sections = [
        { id: 'home', el: document.getElementById('home') },
        { id: 'about', el: document.getElementById('about') },
        { id: 'models', el: document.getElementById('models') },
        { id: 'quote', el: document.getElementById('quote') },
        { id: 'faq', el: document.getElementById('faq') },
      ];

      const triggerPoint = scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const item = sections[i];
        if (item.el) {
          const top = item.el.offsetTop;
          if (triggerPoint >= top) {
            setActiveTab(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    isNavigatingRef.current = true;

    if (tabId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(tabId);
      if (el) {
        // Account for fixed header offset
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }

    // Release scroll lock after animation
    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 800);
  };

  const handleOpenQuote = (serviceKey?: string) => {
    if (serviceKey) {
      setQuoteService(serviceKey as ServiceType);
    }
    handleNavClick('quote');
  };

  const handleOpenModels = () => {
    handleNavClick('models');
  };

  const handleOpenAbout = () => {
    handleNavClick('about');
  };

  return (
    <div className="min-h-screen bg-[#1e2420] text-[#f4f5f4] flex flex-col selection:bg-[#f1c50e] selection:text-black">
      {/* Fixed Header with Animated Active Yellow Slider Box */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleNavClick}
        onOpenQuote={() => handleOpenQuote()}
      />

      <main className="flex-1">
        {/* 1. HomePage Sections Container (id="home") */}
        <div id="home">
          <HeroSection
            onOpenModels={handleOpenModels}
            onOpenQuote={() => handleOpenQuote()}
          />
          <WelcomeSection onLearnMore={handleOpenAbout} />
          <PortfolioSection />
          <ServicesSection onSelectServiceForQuote={(srv) => handleOpenQuote(srv)} />
        </div>

        {/* 2. About Section (id="about") with Heritage, Mission, Vision, Floral Logo & Artistic Banner */}
        <AboutSection />

        {/* 3. Models Showcase & Custom Embed Section (id="models") */}
        <div>
          <FeaturedModelSection onOpenAllModels={handleOpenModels} />
          <ModelsShowcaseSection
            onOpenQuoteForModel={(modelTitle) => {
              handleOpenQuote('furniture-modeling');
            }}
          />
        </div>

        {/* 4. Fiyat Teklifi / Price Quote Calculator & Form (id="quote") */}
        <QuoteSection initialService={quoteService} />

        {/* 5. FAQ Section (id="faq") */}
        <FAQSection />

        {/* 6. Compact Social Media Link Section */}
        <SocialWidget />
      </main>

      {/* 7. Footer with authentic copyright, logo, and quick links */}
      <Footer onNavClick={handleNavClick} />
    </div>
  );
}
