import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/visthetiqueData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#1b211d] text-white overflow-hidden border-t border-[#343f37]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#262e28] border border-[#3b463e] text-xs font-archivo text-[#f1c50e] uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Sıkça Sorulan Sorular</span>
          </div>
          <h2 className="font-archivo text-3xl sm:text-5xl text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#94aa98]">
            3D modelleme, render teslimatları ve Sketchfab interaktif entegrasyonu hakkında merak edilenler.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#262e28] border border-[#3b463e] rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#2e3730] transition-colors cursor-pointer"
                >
                  <span className="font-archivo text-base sm:text-lg text-white">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#1b211d] flex items-center justify-center shrink-0 text-[#f1c50e] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#f1c50e] text-[#1b211d]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-[#d6dfd8] leading-relaxed border-t border-[#343f37]/50 pt-4 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
