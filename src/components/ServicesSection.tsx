import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/visthetiqueData';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceKey: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  return (
    <section id="services" className="relative py-24 bg-[#212722] text-white overflow-hidden">
      {/* Original 3D floating decorations from reference repo: 196.png & 13.png */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 opacity-20 pointer-events-none">
        <img src="/images/196.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute -bottom-16 -left-16 w-72 h-72 opacity-20 pointer-events-none">
        <img src="/images/13.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#343f37] border border-[#4a554c] text-xs font-archivo text-[#f1c50e] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="font-archivo text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            What we do
          </h2>
          <p className="text-base sm:text-lg text-[#d6dfd8] leading-relaxed">
            Konsept fikirden fotogerçekçi 4K render ve web tabanlı 3D interaktif modellere kadar
            uçtan uca profesyonel 3D tasarım hizmetleri sunuyoruz.
          </p>
        </div>

        {/* 6 Services Grid matching original site */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-[#262e28] hover:bg-[#2b352e] border border-[#3b463e] hover:border-[#f1c50e]/60 rounded-2xl p-7 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Original Icon Image */}
                <div className="w-16 h-16 rounded-2xl bg-[#343f37] border border-[#4a554c] p-3 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#f1c50e] transition-all duration-300">
                  <img
                    src={service.iconImage}
                    alt={service.title}
                    className="w-full h-full object-contain filter brightness-125"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-archivo text-xl text-white group-hover:text-[#f1c50e] transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-xs font-archivo text-[#94aa98]">0{index + 1}</span>
                </div>

                <p className="text-sm text-[#d6dfd8] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-archivo-narrow px-2.5 py-1 rounded bg-[#1b211d] text-[#94aa98] border border-[#343f37]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectServiceForQuote(service.serviceKey)}
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#343f37] hover:bg-[#f1c50e] text-[#d6dfd8] hover:text-[#1b211d] font-archivo text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Fiyat Teklifi Al</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
