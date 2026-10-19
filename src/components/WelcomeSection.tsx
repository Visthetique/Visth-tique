import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface WelcomeSectionProps {
  onLearnMore: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="welcome" className="relative py-20 bg-[#f1c50e] text-[#1b211d] overflow-hidden">
      {/* Background geometric accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-black/10 blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* 3D Chrome Sculpture from original site (480.png) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute inset-0 bg-black/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700" />
              <img
                src="/images/480.png"
                alt="Visthétique 3D Sculpture Artifact"
                className="relative z-10 w-64 sm:w-80 lg:w-96 h-auto object-contain filter drop-shadow-[0_25px_25px_rgba(0,0,0,0.35)] transform group-hover:scale-105 group-hover:-rotate-2 transition-all duration-700"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text and Manifesto from original site */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-block px-3 py-1 rounded bg-[#1b211d] text-[#f1c50e] text-xs font-archivo uppercase tracking-widest font-bold">
              About Visthétique Studio
            </div>

            <h2 className="font-archivo text-3xl sm:text-5xl lg:text-6xl text-[#1b211d] tracking-tight leading-none">
              Welcome to <br />
              <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                Design Studio
              </span>
            </h2>

            <blockquote className="text-base sm:text-lg lg:text-xl font-medium text-[#29332b] leading-relaxed border-l-4 border-[#1b211d] pl-4 italic">
              “Visthétique is a 3D design studio that excels in bringing architectural projects, gaming assets and real-world objects into the digital world. With our excellence in realistic modeling and interactive visualizations, we create immersive experiences that bridge the gap between imagination and reality. Whether it's a detailed architectural visualization, a high-quality game asset or a lifelike digital replica, we transform your ideas into stunning 3D creations.”
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm font-semibold text-[#1b211d]">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[#1b211d]" />
                <span>Fotogerçekçi Mimari Modelleme</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[#1b211d]" />
                <span>İnteraktif Web 3D (Sketchfab & WebGL)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[#1b211d]" />
                <span>Oyun Motoru & Unreal Engine 5 Entegrasyonu</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[#1b211d]" />
                <span>Ultra-Hızlı Teslimat & Özel Teklifler</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center space-x-2 bg-[#1b211d] hover:bg-[#29332b] text-white font-archivo text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl font-bold shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Learn more / Hakkımızda</span>
                <ArrowRight className="w-4 h-4 text-[#f1c50e]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
