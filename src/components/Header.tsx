import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Box, Calculator, Info, HelpCircle, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { SOCIAL_LINKS } from '../data/visthetiqueData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQuote: (preselectedService?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HomePage', icon: Layers },
    { id: 'about', label: 'About', icon: Info },
    { id: 'models', label: 'Models', icon: Box },
    { id: 'quote', label: 'Fiyat Teklifi', icon: Calculator },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
  ];

  const handleItemClick = (id: string) => {
    setMobileMenuOpen(false);
    setActiveTab(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1b211d]/90 backdrop-blur-md border-b border-[#343f37] py-2.5 shadow-lg shadow-black/25'
          : 'bg-gradient-to-b from-black/85 via-black/45 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with User's Official Floral Botanical "V" Logo */}
        <button
          onClick={() => handleItemClick('home')}
          className="group text-left flex items-center space-x-3 focus:outline-none cursor-pointer"
        >
          <div className="w-11 h-11 rounded-2xl overflow-hidden bg-white/95 border-2 border-[#f1c50e] p-0.5 shadow-md group-hover:scale-105 group-hover:border-[#ffd633] transition-all">
            <img
              src="/images/logo-v.jpg"
              alt="Visthétique Official Floral V Logo"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div>
            <span className="font-archivo text-xl sm:text-2xl text-white tracking-wide block leading-none group-hover:text-[#f1c50e] transition-colors">
              Visthétique
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#94aa98] font-archivo-narrow font-semibold">
              3D Design Studio
            </span>
          </div>
        </button>

        {/* Desktop Navigation with Animated Yellow Slider Box */}
        <nav className="hidden md:flex items-center space-x-1 bg-[#262e28]/90 border border-[#3b463e] rounded-full p-1.5 backdrop-blur-md shadow-inner relative">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`relative px-4 py-2 rounded-full text-xs lg:text-sm font-archivo transition-colors duration-200 cursor-pointer z-10 ${
                  isActive ? 'text-[#1b211d] font-bold' : 'text-[#d6dfd8] hover:text-[#f1c50e]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    className="absolute inset-0 bg-[#f1c50e] rounded-full shadow-md z-[-1]"
                  />
                )}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Button & Social Links */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Compact Social Media Links */}
          <div className="flex items-center space-x-1 border-r border-[#3b463e] pr-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${social.name} (${social.handle})`}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#94aa98] hover:text-[#f1c50e] hover:bg-[#262e28] transition-colors text-xs font-archivo"
              >
                {social.platform === 'behance' && 'Be'}
                {social.platform === 'sketchfab' && '3D'}
                {social.platform === 'instagram' && 'Ig'}
                {social.platform === 'x' && '𝕏'}
              </a>
            ))}
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="flex items-center space-x-1.5 bg-[#f1c50e] hover:bg-[#d9b10d] text-[#1b211d] font-archivo text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Teklif Al</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <button
            onClick={() => onOpenQuote()}
            className="bg-[#f1c50e] text-[#1b211d] font-archivo text-xs uppercase px-3 py-2 rounded-lg font-bold"
          >
            Teklif
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-white bg-[#262e28] border border-[#3b463e] rounded-lg hover:text-[#f1c50e] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1b211d] border-b border-[#3b463e] px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-left font-archivo text-sm transition-all ${
                  activeTab === item.id
                    ? 'bg-[#f1c50e] text-[#1b211d] font-bold shadow-sm'
                    : 'text-[#d6dfd8] hover:bg-[#262e28]'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Social Links inside Mobile Drawer */}
          <div className="pt-3 border-t border-[#343f37] flex items-center justify-between">
            <span className="text-xs text-[#94aa98] font-archivo">Sosyal Medya:</span>
            <div className="flex space-x-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-xs font-archivo bg-[#262e28] text-[#d6dfd8] hover:text-[#f1c50e] rounded-md border border-[#3b463e]"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
