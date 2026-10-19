import React from 'react';
import { Target, Compass, Sparkles, Palette } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-[#1e2420] text-white overflow-hidden border-t border-[#343f37]">
      {/* Background architectural glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#525e54]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#f1c50e]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Main About Hero Block matching original About.html */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#343f37] border border-[#4a554c] text-xs font-archivo text-[#f1c50e] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Heritage & Philosophy</span>
            </div>

            <h2 className="font-archivo text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              About Visthétique
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#d6dfd8] leading-relaxed">
              <p className="font-medium text-white/90">
                Founded in 2022, <strong className="text-[#f1c50e]">Visthétique</strong> is a 3D design studio
                specializing in architectural visualization, game asset creation, and digital modeling of
                real-world objects. Our mission is to bridge the gap between imagination and reality by
                crafting highly detailed, realistic, and interactive 3D models.
              </p>
              <p className="text-sm sm:text-base text-[#94aa98]">
                With expertise in architectural design, interior and exterior visualization, furniture modeling,
                game assets, texturing, and high-quality rendering, we bring ideas to life with precision and
                creativity. Whether you're looking to showcase a property, develop immersive game environments,
                or create photorealistic product models, Visthétique delivers innovative solutions tailored to
                your needs.
              </p>
            </div>

            {/* Core credentials */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#343f37]">
              <div className="p-3 bg-[#262e28] rounded-xl border border-[#3b463e]">
                <span className="font-archivo text-xl text-[#f1c50e] block">2022</span>
                <span className="text-[11px] text-[#94aa98] font-archivo-narrow uppercase">Kuruluş Yılı</span>
              </div>
              <div className="p-3 bg-[#262e28] rounded-xl border border-[#3b463e]">
                <span className="font-archivo text-xl text-white block">100%</span>
                <span className="text-[11px] text-[#94aa98] font-archivo-narrow uppercase">Özgün Modelleme</span>
              </div>
              <div className="p-3 bg-[#262e28] rounded-xl border border-[#3b463e]">
                <span className="font-archivo text-xl text-[#f1c50e] block">4K UHD</span>
                <span className="text-[11px] text-[#94aa98] font-archivo-narrow uppercase">Doku ve Işık</span>
              </div>
              <div className="p-3 bg-[#262e28] rounded-xl border border-[#3b463e]">
                <span className="font-archivo text-xl text-white block">Global</span>
                <span className="text-[11px] text-[#94aa98] font-archivo-narrow uppercase">Müşteri Portföyü</span>
              </div>
            </div>
          </div>

          {/* Right Visual Composition with user's official floral botanical V logo & 480.png artifact */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl bg-gradient-to-br from-[#262e28] to-[#171c19] border-2 border-[#f1c50e]/40 p-6 shadow-2xl flex flex-col items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-[#f1c50e]/5 backdrop-blur-3xl" />
              
              {/* User Official Botanical Logo Card */}
              <div className="relative z-10 w-44 h-44 rounded-3xl overflow-hidden bg-white/95 border-2 border-[#f1c50e] p-2 shadow-2xl group-hover:scale-105 transition-transform duration-500 mb-3">
                <img
                  src="/images/logo-v.jpg"
                  alt="Visthétique Official Floral V Logo"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <span className="relative z-10 font-archivo text-base text-white tracking-wide">
                Visthétique Design Studio
              </span>
              <span className="relative z-10 text-xs text-[#f1c50e] font-archivo-narrow tracking-widest uppercase">
                Floral & Architectural Visual Arts
              </span>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-50 pointer-events-none">
                <img src="/images/433.png" alt="" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

        </div>

        {/* Artistic Banner Showcase featuring user's abstract artwork */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#3b463e] shadow-2xl group">
          <div className="aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden bg-[#171c19]">
            <img
              src="/images/banner-artistic.jpg"
              alt="Visthétique Abstract Artistic Banner Design"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 sm:p-8 justify-between">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#f1c50e] text-[#1b211d] text-xs font-archivo uppercase font-bold mb-1">
                <Palette className="w-3.5 h-3.5" />
                <span>Visual Identity</span>
              </div>
              <h3 className="font-archivo text-xl sm:text-2xl text-white">
                Visthétique Artistic Expression
              </h3>
              <p className="text-xs sm:text-sm text-[#d6dfd8]">
                Doğadan, mimariden ve organik formlardan beslenen estetik tasarım vizyonumuz.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards matching Section 2 & 3 in About.html */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="relative bg-[#262e28] border border-[#3b463e] rounded-3xl p-8 sm:p-10 shadow-xl overflow-hidden group hover:border-[#f1c50e]/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#525e54]/20 rounded-full blur-2xl pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-[#525e54] text-[#f1c50e] flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>

            <h3 className="font-archivo text-2xl sm:text-3xl text-white mb-4">
              Mission
            </h3>

            <p className="text-sm sm:text-base text-[#d6dfd8] leading-relaxed">
              “Our mission is to transform ideas into stunning 3D realities. We strive to push the boundaries of digital design, offering high-quality and immersive experiences for industries ranging from architecture to gaming. By blending creativity with cutting-edge technology, we aim to deliver solutions that inspire and elevate visual storytelling.”
            </p>

            <div className="mt-6 pt-4 border-t border-[#343f37] flex items-center justify-between text-xs text-[#94aa98]">
              <span>İlham & Yüksek Gerçekçilik</span>
              <img src="/images/433.png" alt="" className="w-8 h-8 object-contain opacity-60" />
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative bg-[#262e28] border border-[#3b463e] rounded-3xl p-8 sm:p-10 shadow-xl overflow-hidden group hover:border-[#f1c50e]/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f1c50e]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-[#f1c50e] text-[#1b211d] flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>

            <h3 className="font-archivo text-2xl sm:text-3xl text-white mb-4">
              Vision
            </h3>

            <p className="text-sm sm:text-base text-[#d6dfd8] leading-relaxed">
              “We envision a world where digital and physical design seamlessly merge. Our goal is to be a leading force in 3D visualization, setting new standards in realism and interactivity. Through innovation, collaboration, and attention to detail, we aspire to redefine how people experience and interact with digital spaces.”
            </p>

            <div className="mt-6 pt-4 border-t border-[#343f37] flex items-center justify-between text-xs text-[#94aa98]">
              <span>Fiziksel & Dijital Tasarım Uyumu</span>
              <img src="/images/396.png" alt="" className="w-8 h-8 object-contain opacity-60" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
