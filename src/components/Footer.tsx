import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/visthetiqueData';

interface FooterProps {
  onNavClick: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141815] text-[#94aa98] border-t border-[#262e28] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#262e28]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/95 border border-[#f1c50e] p-0.5 shadow-md flex items-center justify-center">
                <img
                  src="/images/logo-v.jpg"
                  alt="Visthétique Logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="font-archivo text-2xl text-white tracking-wide">
                Visthétique
              </span>
            </div>
            
            <p className="font-amsterdam text-2xl text-[#f1c50e] leading-relaxed">
              Be inspired by reality, let us shape your dream.
            </p>

            <p className="text-xs text-[#94aa98] max-w-sm leading-relaxed">
              Founded in 2022. Mimari görselleştirme, mobilya tasarımı, oyun varlıkları ve
              gerçek zamanlı interaktif 3D modelleme stüdyosu.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-archivo text-xs uppercase tracking-wider text-white">
              Navigasyon
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavClick('home')}
                  className="hover:text-[#f1c50e] transition-colors cursor-pointer"
                >
                  HomePage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('about')}
                  className="hover:text-[#f1c50e] transition-colors cursor-pointer"
                >
                  About Visthétique
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('models')}
                  className="hover:text-[#f1c50e] transition-colors cursor-pointer"
                >
                  3D Models & Sketchfab Library
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('quote')}
                  className="hover:text-[#f1c50e] transition-colors cursor-pointer"
                >
                  Fiyat Teklifi Hesaplama (Quote)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('faq')}
                  className="hover:text-[#f1c50e] transition-colors cursor-pointer"
                >
                  FAQ (Sıkça Sorulan Sorular)
                </button>
              </li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-archivo text-xs uppercase tracking-wider text-white">
              Sosyal Ağlar & Portfolyo
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f1c50e] transition-colors flex items-center justify-between group"
                >
                  <span>{s.name}</span>
                  <span className="text-[11px] text-[#525e54] group-hover:text-[#f1c50e]">
                    {s.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright line matching original site: "© Visthétique All rights reserved" */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[#94aa98]">
            © Visthétique All rights reserved
          </p>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 p-2 rounded-xl bg-[#262e28] hover:bg-[#343f37] text-white hover:text-[#f1c50e] transition-colors cursor-pointer"
              title="Yukarı Çık"
            >
              <span className="text-[11px] font-archivo uppercase">Başa Dön</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
