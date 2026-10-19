import React, { useState } from 'react';
import { Box, ExternalLink, RotateCw, Maximize2, Sparkles, Layers } from 'lucide-react';

interface FeaturedModelSectionProps {
  onOpenAllModels: () => void;
}

export const FeaturedModelSection: React.FC<FeaturedModelSectionProps> = ({ onOpenAllModels }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [autostart, setAutostart] = useState(true);

  return (
    <section className="relative py-24 bg-[#1b211d] text-white overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#525e54]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Floating original thumbnail thumbnails around the featured viewer */}
      <div className="hidden xl:block absolute top-24 left-8 w-28 h-28 rounded-2xl overflow-hidden border border-[#3b463e] shadow-xl rotate-6 opacity-70 hover:opacity-100 transition-opacity">
        <img src="/images/CasaModern.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="hidden xl:block absolute bottom-24 left-12 w-32 h-32 rounded-2xl overflow-hidden border border-[#3b463e] shadow-xl -rotate-6 opacity-70 hover:opacity-100 transition-opacity">
        <img src="/images/r2-1.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="hidden xl:block absolute top-28 right-8 w-28 h-28 rounded-2xl overflow-hidden border border-[#3b463e] shadow-xl -rotate-3 opacity-70 hover:opacity-100 transition-opacity">
        <img src="/images/r4.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="hidden xl:block absolute bottom-28 right-10 w-32 h-32 rounded-2xl overflow-hidden border border-[#3b463e] shadow-xl rotate-6 opacity-70 hover:opacity-100 transition-opacity">
        <img src="/images/R8.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#262e28] border border-[#3b463e] text-xs font-archivo text-[#f1c50e] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured 3D Showcase</span>
          </div>
          <h2 className="font-archivo text-3xl sm:text-5xl text-white tracking-tight">
            Explore 3D Models
          </h2>
          <p className="text-sm sm:text-base text-[#94aa98] max-w-xl mx-auto">
            WebGL ve Sketchfab entegrasyonu sayesinde tarayıcınızda 360 derece döndürülebilir,
            yakınlaştırılabilir ve gerçek zamanlı incelenebilir interaktif 3D modeller.
          </p>
        </div>

        {/* macOS style Window Frame matching original nicepage design */}
        <div className="bg-[#262e28] border-2 border-[#3b463e] rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
          
          {/* Window Titlebar */}
          <div className="bg-[#1e2420] px-4 py-3 border-b border-[#3b463e] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {/* Traffic light dots from original design */}
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-archivo text-xs text-[#d6dfd8] hidden sm:inline">
                Modern Kitchen Counter — Sketchfab Real-Time 3D Viewer
              </span>
            </div>

            <div className="flex items-center space-x-3 text-xs text-[#94aa98] font-archivo">
              <span className="hidden md:inline px-2 py-0.5 rounded bg-[#343f37] text-[11px] text-[#f1c50e]">
                Interaktif 3D
              </span>
              <a
                href="https://sketchfab.com/3d-models/modern-kitchen-counter-d245b006ce1d4e2191daf2df0d6c0e30"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center space-x-1"
              >
                <span>Sketchfab'ta Aç</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Interactive 3D Canvas / iframe */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#141815]">
            <iframe
              title="Modern Kitchen Counter"
              src={`https://sketchfab.com/models/d245b006ce1d4e2191daf2df0d6c0e30/embed?autostart=${autostart ? '1' : '0'}&ui_theme=dark&ui_watermark=0`}
              className="w-full h-full border-0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
              onLoad={() => setIsLoaded(true)}
            />
          </div>

          {/* Bottom Bar inside window */}
          <div className="p-4 sm:p-5 bg-[#262e28] flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#3b463e]">
            <div className="flex items-center space-x-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#525e54] flex items-center justify-center text-[#f1c50e]">
                <Box className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-archivo text-sm sm:text-base text-white">Modern Kitchen Counter</h4>
                <p className="text-xs text-[#94aa98]">Modeled & Rendered by Visthétique Studio</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                onClick={onOpenAllModels}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#f1c50e] hover:bg-[#d9b10d] text-[#1b211d] font-archivo text-xs uppercase px-5 py-2.5 rounded-xl font-bold transition-all shadow-md cursor-pointer"
              >
                <Layers className="w-4 h-4" />
                <span>Take a look at our other models (Tüm Modeller)</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
