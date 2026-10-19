import React, { useState, useEffect } from 'react';
import {
  Box,
  Plus,
  Sparkles,
  ExternalLink,
  Maximize2,
  X,
  RotateCw,
  Search,
  Filter,
  CheckCircle2,
  Trash2,
  Info,
} from 'lucide-react';
import { SKETCHFAB_MODELS, ModelItem } from '../data/visthetiqueData';
import { getResolvedModels } from '../config/my3dModels';
import {
  extractSketchfabModelId,
  buildSketchfabEmbedUrl,
  isValidSketchfabInput,
} from '../utils/sketchfab';

interface ModelsShowcaseSectionProps {
  onOpenQuoteForModel: (modelTitle: string) => void;
}

export const ModelsShowcaseSection: React.FC<ModelsShowcaseSectionProps> = ({
  onOpenQuoteForModel,
}) => {
  const initialConfigModels = getResolvedModels();
  const [models, setModels] = useState<ModelItem[]>(initialConfigModels);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModel, setActiveModel] = useState<ModelItem | null>(null);

  // Custom model addition state
  const [isAddingCustom, setIsAddingCustom] = useState(false);
  const [customInput, setCustomInput] = useState('');
  const [customTitle, setCustomTitle] = useState('');
  const [customCategory, setCustomCategory] = useState<ModelItem['category']>('Architecture & Exterior');
  const [customDesc, setCustomDesc] = useState('');
  const [previewId, setPreviewId] = useState<string | null>(null);
  const [inputError, setInputError] = useState<string | null>(null);

  // Load any saved custom models from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('visthetique_custom_models');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setModels([...parsed, ...initialConfigModels]);
        }
      }
    } catch {
      // LocalStorage error fallback
    }
  }, []);

  const handleCustomInputChange = (val: string) => {
    setCustomInput(val);
    setInputError(null);
    if (!val.trim()) {
      setPreviewId(null);
      return;
    }
    const id = extractSketchfabModelId(val);
    if (id) {
      setPreviewId(id);
    } else {
      setPreviewId(null);
      setInputError('Geçerli bir Sketchfab linki, embed kodu veya 32 karakterlik model ID giriniz.');
    }
  };

  const handleAddCustomModel = (e: React.FormEvent) => {
    e.preventDefault();
    if (!previewId) {
      setInputError('Lütfen geçerli bir Sketchfab modeli sağlayın.');
      return;
    }
    const title = customTitle.trim() || 'Custom 3D Model';
    const newModel: ModelItem = {
      id: `custom-${Date.now()}`,
      sketchfabId: previewId,
      title,
      category: customCategory,
      description: customDesc.trim() || 'Kullanıcı tarafından eklenen özel Sketchfab 3D modeli.',
      polyCount: 'Custom Polycount',
      tags: ['Custom', 'User Upload', customCategory.split(' ')[0]],
      isFeatured: true,
    };

    const updated = [newModel, ...models];
    setModels(updated);

    // Save custom items to localStorage
    try {
      const customs = updated.filter((m) => m.id.startsWith('custom-'));
      localStorage.setItem('visthetique_custom_models', JSON.stringify(customs));
    } catch {}

    // Reset form
    setCustomInput('');
    setCustomTitle('');
    setCustomDesc('');
    setPreviewId(null);
    setIsAddingCustom(false);
    setActiveModel(newModel);
  };

  const handleRemoveCustomModel = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = models.filter((m) => m.id !== id);
    setModels(updated);
    try {
      const customs = updated.filter((m) => m.id.startsWith('custom-'));
      localStorage.setItem('visthetique_custom_models', JSON.stringify(customs));
    } catch {}
    if (activeModel?.id === id) {
      setActiveModel(null);
    }
  };

  // Filtered models
  const categories = [
    'All',
    'Architecture & Exterior',
    'Interior & Furniture',
    'Game Assets & Weapons',
    'Decor & Props',
  ];

  const filteredModels = models.filter((m) => {
    const matchesCategory = selectedCategory === 'All' || m.category === selectedCategory;
    const matchesSearch =
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="models" className="relative py-24 bg-[#1b211d] text-white overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#525e54]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#f1c50e]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro text from original Models.html */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#262e28] border border-[#3b463e] text-xs font-archivo text-[#f1c50e] uppercase tracking-wider">
            <Box className="w-3.5 h-3.5" />
            <span>Interactive 3D Library</span>
          </div>

          <h2 className="font-archivo text-3xl sm:text-5xl text-white tracking-tight">
            The Impact of 3D Models on the Future and Society
          </h2>

          <p className="text-sm sm:text-base text-[#d6dfd8] leading-relaxed max-w-3xl mx-auto">
            3D modeling is revolutionizing the way we design, create, and experience the world.
            As technology advances, 3D models are playing a crucial role in various industries,
            shaping the future and improving lives in ways we never imagined.
          </p>
        </div>

        {/* Top Control Bar: Category Pills + Search + "Add Custom Model" button */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 bg-[#262e28] border border-[#3b463e] rounded-2xl p-4 shadow-lg">
          
          {/* Category Filter Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-archivo transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#f1c50e] text-[#1b211d] font-bold shadow-sm'
                    : 'bg-[#1b211d] text-[#d6dfd8] hover:bg-[#343f37]'
                }`}
              >
                {cat === 'All' ? 'Tümü (All)' : cat}
              </button>
            ))}
          </div>

          {/* Search & Custom Add Button */}
          <div className="flex items-center space-x-3 w-full lg:w-auto justify-end">
            <div className="relative flex-1 lg:w-60">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#94aa98]" />
              <input
                type="text"
                placeholder="Model ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-[#1b211d] border border-[#3b463e] text-xs text-white placeholder-[#94aa98] focus:border-[#f1c50e] focus:outline-none"
              />
            </div>

            <button
              onClick={() => setIsAddingCustom(!isAddingCustom)}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-[#525e54] hover:bg-[#f1c50e] text-white hover:text-[#1b211d] font-archivo text-xs uppercase tracking-wider transition-all font-semibold cursor-pointer shadow"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Sketchfab Embed Ekle</span>
            </button>
          </div>
        </div>

        {/* Custom Model Embed Form (when expanded) */}
        {isAddingCustom && (
          <div className="mb-10 bg-[#262e28] border-2 border-[#f1c50e] rounded-3xl p-6 sm:p-8 shadow-2xl animate-in slide-in-from-top-4 duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-[#3b463e] mb-6">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-[#f1c50e]" />
                <h3 className="font-archivo text-lg sm:text-xl text-white">
                  Kendi Sketchfab 3D Modelini Sergile
                </h3>
              </div>
              <button
                onClick={() => setIsAddingCustom(false)}
                className="p-1.5 rounded-lg bg-[#1b211d] text-[#94aa98] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddCustomModel} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Form Fields */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <label className="block text-xs font-archivo text-[#f1c50e] uppercase mb-1">
                    Sketchfab Model Linki veya Embed Kodu *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="https://sketchfab.com/3d-models/... veya embed iframe veya 32 haneli model ID"
                    value={customInput}
                    onChange={(e) => handleCustomInputChange(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b211d] border border-[#3b463e] text-xs text-white focus:border-[#f1c50e] focus:outline-none"
                  />
                  {inputError && <p className="text-xs text-red-400 mt-1">{inputError}</p>}
                  <p className="text-[11px] text-[#94aa98] mt-1">
                    Örnek: <code className="text-[#f1c50e]">https://sketchfab.com/models/d245b006ce1d4e2191daf2df0d6c0e30/embed</code>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-archivo text-[#d6dfd8] uppercase mb-1">
                      Model Başlığı
                    </label>
                    <input
                      type="text"
                      placeholder="Örn: Özel Villa Cephesi"
                      value={customTitle}
                      onChange={(e) => setCustomTitle(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b211d] border border-[#3b463e] text-xs text-white focus:border-[#f1c50e] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-archivo text-[#d6dfd8] uppercase mb-1">
                      Kategori
                    </label>
                    <select
                      value={customCategory}
                      onChange={(e) => setCustomCategory(e.target.value as ModelItem['category'])}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b211d] border border-[#3b463e] text-xs text-white focus:border-[#f1c50e] focus:outline-none"
                    >
                      <option value="Architecture & Exterior">Architecture & Exterior</option>
                      <option value="Interior & Furniture">Interior & Furniture</option>
                      <option value="Game Assets & Weapons">Game Assets & Weapons</option>
                      <option value="Decor & Props">Decor & Props</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-archivo text-[#d6dfd8] uppercase mb-1">
                    Açıklama (Opsiyonel)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Modelin teknik detayları, poligon sayısı ve kullanım amacı..."
                    value={customDesc}
                    onChange={(e) => setCustomDesc(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b211d] border border-[#3b463e] text-xs text-white focus:border-[#f1c50e] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!previewId}
                  className="w-full flex items-center justify-center space-x-2 bg-[#f1c50e] disabled:opacity-50 hover:bg-[#d9b10d] text-[#1b211d] font-archivo text-xs uppercase tracking-wider py-3 rounded-xl font-bold transition-all shadow-md cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Vitrine Ekle & Kaydet (Add to Showcase)</span>
                </button>
              </div>

              {/* Right Column: Live Instant Embed Preview */}
              <div className="lg:col-span-6 bg-[#1b211d] rounded-2xl border border-[#3b463e] p-3 flex flex-col justify-center min-h-[260px]">
                {previewId ? (
                  <div className="space-y-2">
                    <span className="text-[11px] font-archivo text-[#f1c50e] uppercase block">
                      Canlı 3D Önizleme:
                    </span>
                    <div className="w-full aspect-video rounded-xl overflow-hidden bg-black border border-[#3b463e]">
                      <iframe
                        title="Custom Model Live Preview"
                        src={`https://sketchfab.com/models/${previewId}/embed?ui_theme=dark&autostart=1`}
                        className="w-full h-full border-0"
                        allow="autoplay; fullscreen; xr-spatial-tracking"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-6 space-y-2 text-[#94aa98]">
                    <Box className="w-10 h-10 mx-auto text-[#525e54]" />
                    <p className="text-xs font-archivo text-white">
                      Soldaki alana bir Sketchfab linki yapıştırdığınızda canlı 3D model burada belirecektir.
                    </p>
                    <span className="text-[11px]">
                      Desteklenen: sketchfab.com/models/... veya iframe embed kodları.
                    </span>
                  </div>
                )}
              </div>

            </form>
          </div>
        )}

        {/* 3D Models Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map((item) => {
            const isCustom = item.id.startsWith('custom-');
            return (
              <div
                key={item.id}
                onClick={() => setActiveModel(item)}
                className="group relative bg-[#262e28] hover:bg-[#2e3730] border border-[#3b463e] hover:border-[#f1c50e]/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* 3D Preview Card Container */}
                <div className="relative aspect-[16/11] bg-[#141815] overflow-hidden">
                  <iframe
                    title={item.title}
                    src={`https://sketchfab.com/models/${item.sketchfabId}/embed?ui_theme=dark&ui_watermark=0&ui_controls=0&ui_infos=0`}
                    className="w-full h-full border-0 pointer-events-none group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Gradient overlay for readability and click capture */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-archivo uppercase bg-[#525e54]/90 text-white backdrop-blur-sm border border-white/10">
                      {item.category.split(' ')[0]}
                    </span>

                    <div className="flex items-center space-x-1.5 opacity-90 group-hover:opacity-100">
                      <span className="p-1.5 rounded-lg bg-[#f1c50e] text-[#1b211d] shadow-md group-hover:scale-110 transition-transform">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Custom badge or delete button if user-added */}
                  {isCustom && (
                    <button
                      onClick={(e) => handleRemoveCustomModel(item.id, e)}
                      title="Modeli vitrinden kaldır"
                      className="absolute top-2 right-2 p-1.5 rounded-lg bg-red-600/80 hover:bg-red-600 text-white z-10 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-archivo text-base text-white group-hover:text-[#f1c50e] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#94aa98] mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#343f37] flex items-center justify-between text-xs">
                    <span className="text-[#d6dfd8] text-[11px] font-archivo-narrow">
                      {item.polyCount || 'High-End Geometry'}
                    </span>
                    <span className="font-archivo text-[#f1c50e] text-[11px] group-hover:underline inline-flex items-center space-x-1">
                      <span>3D İncele</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if search finds nothing */}
        {filteredModels.length === 0 && (
          <div className="text-center py-16 bg-[#262e28] rounded-2xl border border-[#3b463e]">
            <Box className="w-10 h-10 text-[#525e54] mx-auto mb-3" />
            <h4 className="font-archivo text-lg text-white">Eşleşen model bulunamadı</h4>
            <p className="text-xs text-[#94aa98] mt-1">
              Farklı bir arama terimi deneyin veya yukarıdaki "Sketchfab Embed Ekle" butonu ile kendi modelinizi sergileyin.
            </p>
          </div>
        )}

      </div>

      {/* Full Interactive 3D Model Modal */}
      {activeModel && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveModel(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#1e2420] border-2 border-[#3b463e] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#262e28] px-6 py-4 border-b border-[#3b463e] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-[#f1c50e] animate-pulse" />
                <div>
                  <h3 className="font-archivo text-lg sm:text-xl text-white">{activeModel.title}</h3>
                  <span className="text-xs text-[#94aa98]">{activeModel.category}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <a
                  href={`https://sketchfab.com/models/${activeModel.sketchfabId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#343f37] text-white hover:text-[#f1c50e] text-xs font-archivo"
                >
                  <span>Sketchfab'ta Aç</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setActiveModel(null)}
                  className="p-2 rounded-lg bg-[#1b211d] text-white/70 hover:text-white hover:bg-[#343f37]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Interactive 3D Embed Iframe */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#141815]">
              <iframe
                title={activeModel.title}
                src={`https://sketchfab.com/models/${activeModel.sketchfabId}/embed?autostart=1&ui_theme=dark&ui_watermark=0`}
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
              />
            </div>

            {/* Modal Footer / Details & Action */}
            <div className="p-6 bg-[#262e28] border-t border-[#3b463e] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-xl">
                <p className="text-xs sm:text-sm text-[#d6dfd8]">{activeModel.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeModel.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-archivo-narrow px-2 py-0.5 rounded bg-[#1b211d] text-[#94aa98] border border-[#3b463e]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    const title = activeModel.title;
                    setActiveModel(null);
                    onOpenQuoteForModel(title);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#f1c50e] hover:bg-[#d9b10d] text-[#1b211d] font-archivo text-xs uppercase px-5 py-3 rounded-xl font-bold shadow-md cursor-pointer"
                >
                  <span>Benzer Model İçin Fiyat Al</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
