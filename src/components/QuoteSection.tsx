import React, { useState } from 'react';
import {
  Calculator,
  Check,
  Clock,
  Sparkles,
  Send,
  FileCheck,
  ShieldCheck,
  Copy,
  CheckCheck,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import {
  calculateQuote,
  QuoteInputs,
  ServiceType,
  ComplexityLevel,
  TurnaroundTime,
} from '../utils/pricing';

interface QuoteSectionProps {
  initialService?: ServiceType;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ initialService }) => {
  const [inputs, setInputs] = useState<QuoteInputs>({
    service: initialService || 'interior-design',
    complexity: 'standard',
    renderCount: 3,
    includeInteractive3D: true,
    includeSourceFiles: false,
    turnaround: 'standard',
    currency: 'USD',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
    fileUrl: '',
  });

  const [submittedQuote, setSubmittedQuote] = useState<{
    referenceId: string;
    date: string;
    minPrice: number;
    maxPrice: number;
    currencySymbol: string;
    days: number;
  } | null>(null);

  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Real-time calculation
  const quoteResult = calculateQuote(inputs);

  const servicesList: { id: ServiceType; label: string; desc: string }[] = [
    { id: 'interior-design', label: 'Interior Design', desc: 'İç mekan, konsept ve aydınlatma görselleştirmesi' },
    { id: 'architectural-exterior', label: 'Exterior Design', desc: 'Villa, bina ve peyzaj dış cephe mimarisi' },
    { id: 'furniture-modeling', label: 'Furniture Design', desc: 'Bespoke mobilya ve ürün 3D modelleme' },
    { id: 'game-asset', label: 'Game Assets / 3D Modeller', desc: 'Oyun motoru uyumlu düşük/yüksek poligon modeller' },
    { id: 'rendering', label: 'Photorealistic Rendering', desc: 'Mevcut 3D modeller için 4K ultra-gerçekçi render' },
    { id: 'retexture', label: 'Retexture & PBR Materials', desc: 'Mevcut modellere PBR 4K doku ve malzeme optimizasyonu' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Lütfen adınızı ve e-posta adresinizi giriniz.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      const refId = `VIST-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedQuote({
        referenceId: refId,
        date: new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }),
        minPrice: quoteResult.minPrice,
        maxPrice: quoteResult.maxPrice,
        currencySymbol: quoteResult.currencySymbol,
        days: quoteResult.estimatedDays,
      });
      setSubmitting(false);
    }, 600);
  };

  const handleCopySummary = () => {
    if (!submittedQuote) return;
    const summary = `Visthétique Fiyat Teklifi Özeti
Referans: ${submittedQuote.referenceId}
Tarih: ${submittedQuote.date}
Hizmet: ${servicesList.find((s) => s.id === inputs.service)?.label}
Karmaşıklık: ${inputs.complexity}
Render Sayısı: ${inputs.renderCount} açı
İnteraktif 3D: ${inputs.includeInteractive3D ? 'Evet' : 'Hayır'}
Kaynak Dosyalar: ${inputs.includeSourceFiles ? 'Evet' : 'Hayır'}
Tahmini Fiyat Aralığı: ${submittedQuote.currencySymbol}${submittedQuote.minPrice} - ${submittedQuote.currencySymbol}${submittedQuote.maxPrice}
Tahmini Teslimat: ${submittedQuote.days} iş günü`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="quote" className="relative py-24 bg-[#1e2420] text-white overflow-hidden border-t border-[#343f37]">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#f1c50e]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#525e54]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#343f37] border border-[#4a554c] text-xs font-archivo text-[#f1c50e] uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Şeffaf & Hızlı Teklif Hesaplama</span>
          </div>
          <h2 className="font-archivo text-3xl sm:text-5xl text-white tracking-tight">
            Fiyat Teklifi ve Proje Talebi
          </h2>
          <p className="text-base text-[#d6dfd8] leading-relaxed">
            3D tasarım, mimari görselleştirme veya oyun varlığı projenizin parametrelerini seçin,
            anında tahmini maliyet aralığını görün ve doğrudan bize iletin.
          </p>
        </div>

        {submittedQuote ? (
          /* Submission Success State */
          <div className="max-w-2xl mx-auto bg-[#262e28] border-2 border-[#f1c50e] rounded-3xl p-8 shadow-2xl text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#f1c50e]/20 border-2 border-[#f1c50e] flex items-center justify-center mx-auto text-[#f1c50e]">
              <FileCheck className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-archivo text-[#94aa98] uppercase tracking-widest">
                Referans Kodu: {submittedQuote.referenceId}
              </span>
              <h3 className="font-archivo text-2xl sm:text-3xl text-white">
                Teklif Talebiniz Başarıyla Alındı!
              </h3>
              <p className="text-sm text-[#d6dfd8]">
                Sayın <span className="text-[#f1c50e] font-semibold">{formData.name}</span>, projenizin detayları
                Visthétique ekibine ulaştı. 24 saat içinde detaylı resmi teklif ile dönüş yapacağız.
              </p>
            </div>

            {/* Itemized summary */}
            <div className="bg-[#1b211d] rounded-2xl p-5 border border-[#3b463e] text-left space-y-3">
              <div className="flex justify-between items-center border-b border-[#343f37] pb-2 text-sm">
                <span className="text-[#94aa98]">Seçilen Hizmet:</span>
                <span className="font-archivo text-white">{servicesList.find((s) => s.id === inputs.service)?.label}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#343f37] pb-2 text-sm">
                <span className="text-[#94aa98]">Tahmini Fiyat Aralığı:</span>
                <span className="font-archivo text-lg text-[#f1c50e]">
                  {submittedQuote.currencySymbol}{submittedQuote.minPrice} – {submittedQuote.currencySymbol}{submittedQuote.maxPrice}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#94aa98]">Tahmini Teslimat:</span>
                <span className="font-archivo text-white">{submittedQuote.days} İş Günü</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleCopySummary}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#343f37] hover:bg-[#414b43] text-white px-5 py-3 rounded-xl font-archivo text-xs uppercase cursor-pointer"
              >
                {copied ? <CheckCheck className="w-4 h-4 text-[#f1c50e]" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Kopyalandı!' : 'Teklifi Kopyala'}</span>
              </button>

              <button
                onClick={() => setSubmittedQuote(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#f1c50e] hover:bg-[#d9b10d] text-[#1b211d] px-6 py-3 rounded-xl font-archivo text-xs uppercase font-bold cursor-pointer"
              >
                <span>Yeni Bir Teklif Hesapla</span>
              </button>
            </div>
          </div>
        ) : (
          /* Calculator & Proposal Form */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: Calculator Configuration Controls */}
            <div className="lg:col-span-7 bg-[#262e28] border border-[#3b463e] rounded-3xl p-6 sm:p-8 space-y-8 shadow-xl">
              
              {/* Step 1: Service Type Selection */}
              <div className="space-y-3">
                <label className="block text-xs font-archivo text-[#f1c50e] uppercase tracking-wider">
                  1. Hizmet Türünü Seçin
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {servicesList.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setInputs({ ...inputs, service: srv.id })}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        inputs.service === srv.id
                          ? 'bg-[#525e54]/50 border-[#f1c50e] shadow-md'
                          : 'bg-[#1b211d]/70 border-[#343f37] hover:border-[#4a554c]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-archivo text-sm text-white">{srv.label}</span>
                        {inputs.service === srv.id && <Check className="w-4 h-4 text-[#f1c50e]" />}
                      </div>
                      <p className="text-xs text-[#94aa98] mt-1 leading-snug">{srv.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Complexity & Render Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#343f37]">
                
                {/* Complexity */}
                <div className="space-y-3">
                  <label className="block text-xs font-archivo text-[#f1c50e] uppercase tracking-wider">
                    2. Detay & Karmaşıklık Düzeyi
                  </label>
                  <div className="flex flex-col space-y-2">
                    {[
                      { id: 'standard', label: 'Standart', desc: 'Optimum detay, temiz geometri' },
                      { id: 'detailed', label: 'Detaylı (Tavsiye Edilen)', desc: 'İleri düzey PBR malzeme, zengin çevre' },
                      { id: 'ultra-high-end', label: 'Ultra High-End', desc: 'Fotogerçekçi 4K/8K, kusursuz mikroyapı' },
                    ].map((comp) => (
                      <button
                        key={comp.id}
                        type="button"
                        onClick={() => setInputs({ ...inputs, complexity: comp.id as ComplexityLevel })}
                        className={`text-left px-3.5 py-2.5 rounded-xl border text-xs transition-colors cursor-pointer ${
                          inputs.complexity === comp.id
                            ? 'bg-[#525e54]/60 border-[#f1c50e] text-white font-semibold'
                            : 'bg-[#1b211d]/70 border-[#343f37] text-[#d6dfd8] hover:border-[#4a554c]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{comp.label}</span>
                          {inputs.complexity === comp.id && <Check className="w-3.5 h-3.5 text-[#f1c50e]" />}
                        </div>
                        <span className="text-[10px] text-[#94aa98] block mt-0.5">{comp.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Render Count Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-archivo text-[#f1c50e] uppercase tracking-wider">
                      3. İstenen Render / Kamera Açısı
                    </label>
                    <span className="px-2.5 py-0.5 rounded bg-[#f1c50e] text-[#1b211d] font-archivo text-xs font-bold">
                      {inputs.renderCount} Açı
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={inputs.renderCount}
                    onChange={(e) => setInputs({ ...inputs, renderCount: parseInt(e.target.value) || 1 })}
                    className="w-full accent-[#f1c50e] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#94aa98] font-archivo-narrow">
                    <span>1 Açı (Minimal)</span>
                    <span>4-6 Açı (İdeal)</span>
                    <span>12+ Açı (Tam Kapsam)</span>
                  </div>
                  <p className="text-[11px] text-[#94aa98] bg-[#1b211d] p-2.5 rounded-lg border border-[#343f37]">
                    İlk 2 kamera açısı baz fiyata dahildir. İlave açılar paket indirimiyle eklenir.
                  </p>
                </div>
              </div>

              {/* Step 3: Add-on Options */}
              <div className="pt-2 border-t border-[#343f37] space-y-3">
                <label className="block text-xs font-archivo text-[#f1c50e] uppercase tracking-wider">
                  4. Ek Teslimatlar & Seçenekler
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#1b211d]/70 border border-[#343f37] hover:border-[#4a554c] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={inputs.includeInteractive3D}
                      onChange={(e) => setInputs({ ...inputs, includeInteractive3D: e.target.checked })}
                      className="mt-1 accent-[#f1c50e]"
                    />
                    <div>
                      <span className="text-xs font-archivo text-white block">İnteraktif Sketchfab 3D Embed</span>
                      <span className="text-[11px] text-[#94aa98]">Web sitesi için 360° döndürülebilir canlı 3D entegrasyonu</span>
                    </div>
                  </label>

                  <label className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#1b211d]/70 border border-[#343f37] hover:border-[#4a554c] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={inputs.includeSourceFiles}
                      onChange={(e) => setInputs({ ...inputs, includeSourceFiles: e.target.checked })}
                      className="mt-1 accent-[#f1c50e]"
                    />
                    <div>
                      <span className="text-xs font-archivo text-white block">Kaynak Dosyalar (.blend / .max)</span>
                      <span className="text-[11px] text-[#94aa98]">Düzenlenebilir 3D model, ışık sahnesi ve 4K doku haritaları</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Step 4: Turnaround & Currency */}
              <div className="pt-2 border-t border-[#343f37] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="w-full sm:w-auto">
                  <label className="block text-xs font-archivo text-[#f1c50e] uppercase tracking-wider mb-2">
                    Teslimat Hızı
                  </label>
                  <div className="flex space-x-2">
                    {[
                      { id: 'standard', label: 'Standart' },
                      { id: 'express', label: 'Express (%30 Hızlı)' },
                      { id: 'urgent', label: 'Acil (48 Saat)' },
                    ].map((turn) => (
                      <button
                        key={turn.id}
                        type="button"
                        onClick={() => setInputs({ ...inputs, turnaround: turn.id as TurnaroundTime })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-archivo transition-colors cursor-pointer ${
                          inputs.turnaround === turn.id
                            ? 'bg-[#f1c50e] text-[#1b211d] font-bold'
                            : 'bg-[#1b211d] text-[#d6dfd8] hover:bg-[#343f37]'
                        }`}
                      >
                        {turn.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="w-full sm:w-auto flex flex-col items-end">
                  <label className="block text-xs font-archivo text-[#f1c50e] uppercase tracking-wider mb-2">
                    Para Birimi
                  </label>
                  <div className="flex space-x-1.5 bg-[#1b211d] p-1 rounded-lg border border-[#343f37]">
                    {(['USD', 'EUR', 'TRY'] as const).map((curr) => (
                      <button
                        key={curr}
                        type="button"
                        onClick={() => setInputs({ ...inputs, currency: curr })}
                        className={`px-2.5 py-1 rounded text-xs font-archivo cursor-pointer ${
                          inputs.currency === curr
                            ? 'bg-[#525e54] text-[#f1c50e] font-bold'
                            : 'text-[#94aa98] hover:text-white'
                        }`}
                      >
                        {curr}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Live Price Summary & Direct Proposal Form */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Real-time Estimate Card */}
              <div className="bg-gradient-to-br from-[#262e28] to-[#1b211d] border-2 border-[#f1c50e] rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f1c50e]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between pb-4 border-b border-[#3b463e]">
                  <span className="text-xs uppercase font-archivo tracking-wider text-[#94aa98]">
                    Tahmini Bütçe Aralığı
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-[#f1c50e] font-archivo">
                    <Clock className="w-3.5 h-3.5" />
                    <span>~{quoteResult.estimatedDays} Gün</span>
                  </div>
                </div>

                <div className="py-6 text-center">
                  <div className="font-archivo text-4xl sm:text-5xl text-white tracking-tight">
                    <span className="text-[#f1c50e]">{quoteResult.currencySymbol}</span>
                    {quoteResult.minPrice} – {quoteResult.currencySymbol}{quoteResult.maxPrice}
                  </div>
                  <span className="text-xs text-[#94aa98] mt-2 block">
                    KDV hariç, 2 tur revizyon dahil tahmini fiyat aralığıdır.
                  </span>
                </div>

                <div className="space-y-2 text-xs border-t border-[#343f37] pt-4 text-[#d6dfd8]">
                  <div className="flex justify-between">
                    <span className="text-[#94aa98]">Hizmet Tabanı:</span>
                    <span className="font-archivo">{quoteResult.currencySymbol}{quoteResult.breakdown.baseService}</span>
                  </div>
                  {quoteResult.breakdown.renders > 0 && (
                    <div className="flex justify-between">
                      <span className="text-[#94aa98]">İlave Renderlar:</span>
                      <span className="font-archivo">+{quoteResult.currencySymbol}{quoteResult.breakdown.renders}</span>
                    </div>
                  )}
                  {quoteResult.breakdown.interactive3D > 0 && (
                    <div className="flex justify-between">
                      <span className="text-[#94aa98]">Sketchfab 3D Entegrasyon:</span>
                      <span className="font-archivo">+{quoteResult.currencySymbol}{quoteResult.breakdown.interactive3D}</span>
                    </div>
                  )}
                  {quoteResult.breakdown.sourceFiles > 0 && (
                    <div className="flex justify-between">
                      <span className="text-[#94aa98]">3D Kaynak Dosyalar (.blend):</span>
                      <span className="font-archivo">+{quoteResult.currencySymbol}{quoteResult.breakdown.sourceFiles}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Direct Request Form */}
              <div className="bg-[#262e28] border border-[#3b463e] rounded-3xl p-6 sm:p-7 shadow-xl space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f1c50e]" />
                  <h3 className="font-archivo text-base text-white">Teklifi Bize Gönderin</h3>
                </div>
                <p className="text-xs text-[#94aa98]">
                  Proje detaylarınızı girin, bu hesaplamayı doğrudan stüdyomuza iletin.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3 pt-1">
                  <div>
                    <label className="block text-[11px] font-archivo text-[#d6dfd8] uppercase mb-1">
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Örn: Melisa Stein"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b211d] border border-[#3b463e] focus:border-[#f1c50e] text-white text-sm focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-archivo text-[#d6dfd8] uppercase mb-1">
                        E-posta Adresi *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="adiniz@sirket.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b211d] border border-[#3b463e] focus:border-[#f1c50e] text-white text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-archivo text-[#d6dfd8] uppercase mb-1">
                        Telefon / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+90 5XX XXX XX XX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b211d] border border-[#3b463e] focus:border-[#f1c50e] text-white text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-archivo text-[#d6dfd8] uppercase mb-1">
                      Proje Dosya Linki (Drive, Dropbox, WeTransfer)
                    </label>
                    <input
                      type="url"
                      placeholder="https://drive.google.com/..."
                      value={formData.fileUrl}
                      onChange={(e) => setFormData({ ...formData, fileUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b211d] border border-[#3b463e] focus:border-[#f1c50e] text-white text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-archivo text-[#d6dfd8] uppercase mb-1">
                      Proje Notları & Açıklama
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tasarım tarzı, metrekare veya oyun motoru beklentileriniz..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b211d] border border-[#3b463e] focus:border-[#f1c50e] text-white text-sm focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center space-x-2 bg-[#f1c50e] hover:bg-[#d9b10d] text-[#1b211d] font-archivo text-xs uppercase tracking-wider py-3.5 rounded-xl font-bold shadow-lg transition-all cursor-pointer"
                  >
                    {submitting ? (
                      <span>Gönderiliyor...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Resmi Teklif Talebini Gönder</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center space-x-1.5 text-[11px] text-[#94aa98] pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#f1c50e]" />
                    <span>Bilgileriniz ve 3D taslaklarınız gizlilik sözleşmesiyle korunur.</span>
                  </div>
                </form>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
