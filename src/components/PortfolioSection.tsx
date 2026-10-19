import React, { useState } from 'react';
import { ExternalLink, Maximize2, X, Eye } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/visthetiqueData';

export const PortfolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  return (
    <section id="portfolio" className="relative py-24 bg-[#1b211d] text-white overflow-hidden">
      {/* Subtle background graphics */}
      <div className="absolute top-10 right-0 w-96 h-96 opacity-15 pointer-events-none">
        <img src="/images/019.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-10 left-0 w-80 h-80 opacity-15 pointer-events-none">
        <img src="/images/26.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#343f37] pb-6">
          <div>
            <div className="text-xs uppercase font-archivo tracking-widest text-[#f1c50e] mb-2">
              Featured Case Studies
            </div>
            <h2 className="font-archivo text-3xl sm:text-5xl text-white tracking-tight">
              Project Portfolio
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#94aa98] max-w-md font-sans">
            Mimari görselleştirme ve parametrik cephe tasarımlarımızın Behance üzerinde sergilenen öne çıkan projeleri.
          </p>
        </div>

        {/* Portfolio Grid Layout matching original composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Hero Card: Greece Modern Hotel (r7.jpg) */}
          <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden bg-[#262e28] border border-[#3b463e] shadow-2xl min-h-[420px] lg:min-h-[520px] flex flex-col justify-end">
            <img
              src={PORTFOLIO_PROJECTS[0].image}
              alt={PORTFOLIO_PROJECTS[0].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300" />
            
            <div className="relative z-10 p-6 sm:p-8 space-y-3">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-archivo uppercase bg-[#f1c50e] text-[#1b211d] font-bold">
                  {PORTFOLIO_PROJECTS[0].category}
                </span>
                <span className="text-xs text-[#d6dfd8] font-archivo-narrow">{PORTFOLIO_PROJECTS[0].year}</span>
              </div>
              <h3 className="font-archivo text-2xl sm:text-3xl text-white group-hover:text-[#f1c50e] transition-colors">
                {PORTFOLIO_PROJECTS[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#d6dfd8] max-w-lg">
                {PORTFOLIO_PROJECTS[0].subtitle}
              </p>
              
              <div className="flex items-center space-x-3 pt-2">
                <a
                  href={PORTFOLIO_PROJECTS[0].behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#525e54] hover:bg-[#f1c50e] hover:text-[#1b211d] text-white text-xs font-archivo uppercase px-4 py-2.5 rounded-lg transition-all font-semibold"
                >
                  <span>Behance Projesi</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setSelectedProject(PORTFOLIO_PROJECTS[0])}
                  className="p-2.5 rounded-lg bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-colors"
                  title="Tam Ekran Görüntüle"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Stacked Projects */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Project 2: Modern Lassa Villa */}
            <div className="group relative rounded-2xl overflow-hidden bg-[#262e28] border border-[#3b463e] shadow-xl min-h-[240px] flex-1 flex flex-col justify-end">
              <img
                src={PORTFOLIO_PROJECTS[1].image}
                alt={PORTFOLIO_PROJECTS[1].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="relative z-10 p-5 space-y-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-archivo uppercase bg-[#525e54] text-white font-bold">
                  {PORTFOLIO_PROJECTS[1].category}
                </span>
                <h3 className="font-archivo text-xl text-white group-hover:text-[#f1c50e] transition-colors">
                  {PORTFOLIO_PROJECTS[1].title}
                </h3>
                <div className="flex items-center space-x-3 pt-1">
                  <a
                    href={PORTFOLIO_PROJECTS[1].behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-archivo text-[#f1c50e] hover:underline"
                  >
                    <span>Detayları İncele</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setSelectedProject(PORTFOLIO_PROJECTS[1])}
                    className="text-xs text-white/70 hover:text-white"
                  >
                    Büyüt
                  </button>
                </div>
              </div>
            </div>

            {/* Project 3: Outside Facade Panels */}
            <div className="group relative rounded-2xl overflow-hidden bg-[#262e28] border border-[#3b463e] shadow-xl min-h-[240px] flex-1 flex flex-col justify-end">
              <img
                src={PORTFOLIO_PROJECTS[2].image}
                alt={PORTFOLIO_PROJECTS[2].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="relative z-10 p-5 space-y-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-archivo uppercase bg-[#525e54] text-white font-bold">
                  {PORTFOLIO_PROJECTS[2].category}
                </span>
                <h3 className="font-archivo text-xl text-white group-hover:text-[#f1c50e] transition-colors">
                  {PORTFOLIO_PROJECTS[2].title}
                </h3>
                <div className="flex items-center space-x-3 pt-1">
                  <a
                    href={PORTFOLIO_PROJECTS[2].behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-archivo text-[#f1c50e] hover:underline"
                  >
                    <span>Detayları İncele</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setSelectedProject(PORTFOLIO_PROJECTS[2])}
                    className="text-xs text-white/70 hover:text-white"
                  >
                    Büyüt
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Explore More on Behance Button */}
        <div className="mt-12 text-center">
          <a
            href="https://www.behance.net/bubirmelisama"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#262e28] hover:bg-[#343f37] border-2 border-[#525e54] hover:border-[#f1c50e] text-white px-8 py-4 rounded-xl font-archivo text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl group"
          >
            <span>Explore More on Behance</span>
            <ExternalLink className="w-4 h-4 text-[#f1c50e] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#1b211d] rounded-2xl overflow-hidden border border-[#3b463e] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-[#343f37]">
              <div>
                <h4 className="font-archivo text-lg text-white">{selectedProject.title}</h4>
                <p className="text-xs text-[#94aa98]">{selectedProject.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-white/70 hover:text-white rounded-lg bg-[#262e28]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 bg-black flex justify-center">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>
            <div className="p-4 flex items-center justify-between bg-[#262e28]">
              <span className="text-xs text-[#d6dfd8]">{selectedProject.specs}</span>
              <a
                href={selectedProject.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-archivo text-[#f1c50e] hover:underline"
              >
                <span>Behance'te Aç</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
