import React from 'react';
import { ExternalLink, Share2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/visthetiqueData';

export const SocialWidget: React.FC = () => {
  return (
    <section id="social" className="relative py-12 bg-[#f1c50e] text-[#1b211d] overflow-hidden">
      {/* Original decorative corner assets: 033.png & 034.png from original index.html section 6 */}
      <div className="absolute -top-10 -left-10 w-44 h-44 opacity-25 pointer-events-none">
        <img src="/images/033.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute -bottom-10 -right-10 w-44 h-44 opacity-25 pointer-events-none">
        <img src="/images/034.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left Title */}
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#1b211d] text-[#f1c50e] flex items-center justify-center shrink-0">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-archivo text-lg sm:text-xl text-[#1b211d]">
                Bizi Sosyal Medyada Takip Edin
              </h3>
              <p className="text-xs text-[#29332b] font-medium">
                Yeni 3D renderlar, Sketchfab modelleri ve stüdyo güncellemeleri
              </p>
            </div>
          </div>

          {/* Social Links matching original index.html */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.platform}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${item.name} (${item.handle})`}
                className="group inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#1b211d] hover:bg-[#29332b] text-white transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <span className="font-archivo text-xs text-[#f1c50e] group-hover:text-white">
                  {item.platform === 'behance' && 'Behance'}
                  {item.platform === 'sketchfab' && 'Sketchfab'}
                  {item.platform === 'instagram' && 'Instagram'}
                  {item.platform === 'x' && 'X (Twitter)'}
                </span>
                <span className="text-[11px] text-[#94aa98] hidden md:inline">
                  {item.handle}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-[#94aa98] group-hover:text-[#f1c50e]" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
