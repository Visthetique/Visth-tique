import React from 'react';
import { ArrowRight, Box, Sparkles, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenModels: () => void;
  onOpenQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModels, onOpenQuote }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background with blurr.jpg and architectural dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(27, 33, 29, 0.75), rgba(27, 33, 29, 0.95)), url('/images/blurr.jpg')`,
        }}
      />

      {/* Decorative ambient lighting elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#525e54]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#f1c50e]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Slogan & Studio Identity */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#343f37]/80 border border-[#4a554c] text-xs font-archivo tracking-wider text-[#f1c50e] uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Founded in 2022 • 3D Design & CGI</span>
            </div>

            {/* Signature Amsterdam script font slogan from original Visthétique site */}
            <h1 className="font-amsterdam text-4xl sm:text-6xl lg:text-7xl text-white leading-tight drop-shadow-md">
              Be inspired by reality, <br />
              <span className="text-[#f1c50e] hover:text-[#ffd633] transition-colors">
                let us shape your dream.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#d6dfd8] max-w-xl font-normal leading-relaxed">
              Mimarlık projelerini, oyun varlıklarını ve gerçek dünya nesnelerini yüksek gerçekçilikte
              dijital dünyaya taşıyan yeni nesil 3D tasarım ve görselleştirme stüdyosu.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#f1c50e] hover:bg-[#d9b10d] text-[#1b211d] font-archivo text-sm uppercase tracking-wider px-7 py-3.5 rounded-xl font-bold shadow-xl shadow-[#f1c50e]/10 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Fiyat Teklifi Al</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenModels}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#262e28] hover:bg-[#343f37] border border-[#4a554c] text-white font-archivo text-sm px-6 py-3.5 rounded-xl transition-all cursor-pointer"
              >
                <Box className="w-4 h-4 text-[#f1c50e]" />
                <span>3D Modelleri Keşfet</span>
              </button>
            </div>

            {/* Micro stats banner */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#343f37]/60 max-w-md mx-auto lg:mx-0">
              <div>
                <span className="block font-archivo text-xl text-white">50+</span>
                <span className="text-[11px] text-[#94aa98] font-archivo-narrow uppercase">Tamamlanan Proje</span>
              </div>
              <div>
                <span className="block font-archivo text-xl text-[#f1c50e]">15+</span>
                <span className="text-[11px] text-[#94aa98] font-archivo-narrow uppercase">Sketchfab 3D Model</span>
              </div>
              <div>
                <span className="block font-archivo text-xl text-white">4K UHD</span>
                <span className="text-[11px] text-[#94aa98] font-archivo-narrow uppercase">Fotogerçekçi CGI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered 3D Render Showcases matching the exact original composition */}
          <div className="lg:col-span-6 relative flex justify-center items-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-[500px] h-[360px] sm:h-[460px] flex items-center justify-center">
              
              {/* Secondary Layered Image (Prerender6-min.png) */}
              <div className="absolute -left-2 sm:left-4 top-4 sm:top-6 w-[240px] sm:w-[320px] aspect-[4/5] rounded-[30px] overflow-hidden shadow-2xl border border-white/10 z-10 transform -rotate-3 hover:rotate-0 transition-all duration-500 hover:z-30 group">
                <img
                  src="/images/Prerender6-min.png"
                  alt="Visthétique 3D Architectural Villa Visualization"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-archivo text-white drop-shadow">Modern Lassa Villa</span>
                </div>
              </div>

              {/* Primary Foreground Image (Render5-min.jpg) */}
              <div className="absolute right-0 sm:right-4 bottom-2 sm:bottom-4 w-[250px] sm:w-[330px] aspect-[4/5] rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-2 border-[#f1c50e]/30 z-20 transform rotate-2 hover:rotate-0 transition-all duration-500 group">
                <img
                  src="/images/Render5-min.jpg"
                  alt="Visthétique 3D Luxury Architectural Concept"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
                  <div className="inline-block px-2 py-0.5 rounded bg-[#f1c50e] text-[#1b211d] text-[10px] font-archivo font-bold uppercase w-fit mb-1">
                    Featured Render
                  </div>
                  <span className="text-sm font-archivo text-white drop-shadow">Coastal Architectural Residence</span>
                </div>
              </div>

              {/* Floating Monogram Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-[#1b211d]/90 backdrop-blur-md border border-[#f1c50e] p-3 rounded-2xl shadow-xl hidden sm:flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#f1c50e] animate-pulse" />
                <span className="font-archivo text-xs text-white">Interactive CGI Studio</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#welcome"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 text-[#94aa98] hover:text-[#f1c50e] flex flex-col items-center transition-colors text-xs font-archivo"
      >
        <span className="text-[10px] uppercase tracking-wider mb-1">Keşfet</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
