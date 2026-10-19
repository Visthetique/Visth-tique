function extractModelId(input: string): string | null {
  if (!input || typeof input !== 'string') return null;
  const trimmed = input.trim();
  const hex = trimmed.match(/\b([a-f0-9]{32})\b/i);
  return hex ? hex[1].toLowerCase() : null;
}

export interface SketchfabModelConfig {
  /** Benzersiz kimlik (slug) */
  id: string;
  /**
   * Sketchfab linki, embed iframe kodu veya doğrudan 32 haneli model ID'si.
   * Desteklenen formatlar:
   * - "https://sketchfab.com/3d-models/model-adi-d245b006ce1d4e2191daf2df0d6c0e30"
   * - "https://sketchfab.com/models/d245b006ce1d4e2191daf2df0d6c0e30/embed"
   * - "d245b006ce1d4e2191daf2df0d6c0e30"
   */
  sketchfabIdOrUrl: string;
  /** Sitede görünecek model başlığı */
  title: string;
  /**
   * Model kategorisi:
   * 'Architecture & Exterior' | 'Interior & Furniture' | 'Game Assets & Weapons' | 'Decor & Props'
   */
  category: 'Architecture & Exterior' | 'Interior & Furniture' | 'Game Assets & Weapons' | 'Decor & Props';
  /** Modelin kısa açıklaması */
  description: string;
  /** Poligon / geometri detayı (opsiyonel) */
  polyCount?: string;
  /** Etiketler */
  tags: string[];
  /** Ana sayfada veya vitrinde öne çıkarılsın mı? */
  isFeatured?: boolean;
}

/**
 * ============================================================================
 * VİSTHÉTIQUE — SKETCHFAB 3D MODELLER LİSTESİ
 * ============================================================================
 * 
 * Yeni bir 3D model yaptığınızda aşağıdaki listeye yeni bir kayıt ekleyin
 * veya var olan modelleri düzenleyin. Siteniz anında güncellenecektir!
 * ============================================================================
 */
export const MY_SKETCHFAB_MODELS: SketchfabModelConfig[] = [
  // --- 1. ÖNE ÇIKAN MODEL (FEATURED HERO MODEL) ---
  {
    id: 'kitchen-counter',
    sketchfabIdOrUrl: 'https://sketchfab.com/models/d245b006ce1d4e2191daf2df0d6c0e30/embed',
    title: 'Modern Kitchen Counter',
    category: 'Interior & Furniture',
    description: 'Contemporary marble-topped island with fluted wooden finish and built-in brass fixtures.',
    polyCount: '42.5k Triangles',
    tags: ['Architecture', 'Kitchen', 'Modern', 'PBR'],
    isFeatured: true,
  },

  // --- 2. DIŞ CEPHE VE MİMARİ MODELLER (ARCHITECTURE & EXTERIOR) ---
  {
    id: 'facade-panels-3d',
    sketchfabIdOrUrl: '90f04a6912644d198cb2d4fff8657788',
    title: 'Outside Facade Panels',
    category: 'Architecture & Exterior',
    description: 'High-end architectural facade panel system designed for luxury exteriors and commercial facades.',
    polyCount: '65.2k Triangles',
    tags: ['Exterior', 'Architecture', 'Facade', 'Modular'],
    isFeatured: true,
  },
  {
    id: 'geo-wall',
    sketchfabIdOrUrl: '2784fe2a0bb64a0baa39e4ec3cd246ab',
    title: 'Geo Wall Decoration',
    category: 'Architecture & Exterior',
    description: 'Parametric 3D wall acoustic panel assembly with angular facets casting architectural shadows.',
    polyCount: '16.5k Triangles',
    tags: ['Architecture', 'Wall Panel', 'Modern', 'Interior'],
  },
  {
    id: 'modern-fence',
    sketchfabIdOrUrl: '2ce34dc74fb7448e924d8a165669c575',
    title: 'Modern Fence Set',
    category: 'Architecture & Exterior',
    description: 'Modular privacy boundary fencing system combining charcoal powder-coated steel and wood slat panels.',
    polyCount: '22.0k Triangles',
    tags: ['Exterior', 'Landscape', 'Modular', 'Architecture'],
  },

  // --- 3. İÇ MEKAN VE MOBİLYA (INTERIOR & FURNITURE) ---
  {
    id: 'wood-bookcase',
    sketchfabIdOrUrl: 'a1e1b7cb1cf942449805201d150872e4',
    title: 'Organic Wood Bookcase',
    category: 'Interior & Furniture',
    description: 'Sculptural organic shelving unit with curved solid timber uprights and floating shelves.',
    polyCount: '28.4k Triangles',
    tags: ['Furniture', 'Woodwork', 'Interior', 'Scandinavian'],
  },
  {
    id: 'samsung-fridge',
    sketchfabIdOrUrl: '9440d126a74d4d9f80416b37e8de80ea',
    title: 'Samsung Family Hub Fridge',
    category: 'Interior & Furniture',
    description: 'Precision modeled smart French-door refrigerator with touch display and brushed steel materials.',
    polyCount: '19.1k Triangles',
    tags: ['Appliance', 'Kitchen', 'Hard Surface', 'Modern'],
  },

  // --- 4. OYUN VARLIKLARI VE SİLAHLAR (GAME ASSETS & WEAPONS) ---
  {
    id: 'regina-crucis',
    sketchfabIdOrUrl: '7717807561cf42138569edbcd1adcb01',
    title: 'Regina Crucis Armorset',
    category: 'Game Assets & Weapons',
    description: 'Game-ready fantasy knight armorset with ornate metallic engraving and weathered leather underlayers.',
    polyCount: '54.0k Triangles',
    tags: ['Game Asset', 'Armor', 'Fantasy', 'PBR Metal'],
  },
  {
    id: 'elvish-axe',
    sketchfabIdOrUrl: '5ec9570038894f959915e594851bdafa',
    title: 'Elvish Battle Axe',
    category: 'Game Assets & Weapons',
    description: 'Game-optimized elven battle weapon featuring rune engravings and sculpted bone handle grip.',
    polyCount: '14.2k Triangles',
    tags: ['Weapon', 'Game Asset', 'Fantasy', 'Hero Prop'],
  },
  {
    id: 'shadow-claw-sword',
    sketchfabIdOrUrl: '89a094ed6fa54e3eb852c84ae16bcfc0',
    title: 'Shadow Claw Sword',
    category: 'Game Assets & Weapons',
    description: 'Stylized fantasy double-edged sword with dark obsidian blade and claw crossguard.',
    polyCount: '18.9k Triangles',
    tags: ['Weapon', 'Blade', 'RPG', 'Game Ready'],
  },
  {
    id: 'rifle-suppressor',
    sketchfabIdOrUrl: '5a04df3acdf0467a89a1420d3a039e2e',
    title: 'Centerfire Rifle Suppressor',
    category: 'Game Assets & Weapons',
    description: 'Milsim precision tactical suppressor with heat shroud texture, knurling, and attachment thread.',
    polyCount: '9.8k Triangles',
    tags: ['Weapon Attachment', 'FPS Game', 'Hard Surface'],
  },
  {
    id: 'shooting-stars-crown',
    sketchfabIdOrUrl: '1f1129acc1794f5d98dd47a91c2c3311',
    title: 'Crown Of Shooting Stars⭐',
    category: 'Game Assets & Weapons',
    description: 'Celestial halo tiara crown with floating starlight gemstones and golden filigree arcs.',
    polyCount: '29.3k Triangles',
    tags: ['Crown', 'Fantasy', 'Accessories', 'Cosmetic'],
  },

  // --- 5. DEKORASYON VE REKVİZİT (DECOR & PROPS) ---
  {
    id: 'pillows-basket',
    sketchfabIdOrUrl: '71aa7653f4234514a9431ab9fb464a27',
    title: 'Pillows in a Basket',
    category: 'Decor & Props',
    description: 'Photorealistic woven wicker storage basket filled with natural linen cushions and soft draped blanket.',
    polyCount: '34.8k Triangles',
    tags: ['Interior', 'Decor', 'Cloth Simulation', 'Living'],
  },
  {
    id: 'book-stack',
    sketchfabIdOrUrl: '198d3bdc5384426b9695394a82bc3825',
    title: 'Book Stack',
    category: 'Decor & Props',
    description: 'Detailed hardcover architecture and art monograph stack with realistic edge page texturing.',
    polyCount: '12.6k Triangles',
    tags: ['Prop', 'Library', 'Coffee Table', 'Decor'],
  },
  {
    id: 'thinker-girl',
    sketchfabIdOrUrl: 'd722fdf787c44e5cb6f273e3de7929e9',
    title: 'Thinker Golden Girl Decoration',
    category: 'Decor & Props',
    description: 'Elegant golden modern sculpture reflecting ambient architectural lighting in luxury interior rooms.',
    polyCount: '38.0k Triangles',
    tags: ['Sculpture', 'Gold', 'Statue', 'Art'],
  },
  {
    id: '3d-camera',
    sketchfabIdOrUrl: '918befb4a7774f72a839ce0de290cdf3',
    title: '(3DS-EXP-645) 3D Camera',
    category: 'Decor & Props',
    description: 'Retro-futuristic dual optical camera apparatus with brass fittings and glass lens reflections.',
    polyCount: '31.7k Triangles',
    tags: ['Vintage', 'Optical', 'Gadget', 'Sci-Fi'],
  },
  {
    id: 'fleur-de-lis',
    sketchfabIdOrUrl: '7795264233754fcc976d3c447d63c38a',
    title: 'Fleur-de-lis Ornament',
    category: 'Decor & Props',
    description: 'Classic heraldic plaster / cast iron relief crest modeled for classical architectural ornamentation.',
    polyCount: '24.1k Triangles',
    tags: ['Classic', 'Relief', 'Ornament', 'Historic'],
  },
];

/**
 * Normalizes user configurations into clean ModelItems with resolved 32-character Sketchfab IDs
 */
export function getResolvedModels(): Array<{
  id: string;
  sketchfabId: string;
  title: string;
  category: SketchfabModelConfig['category'];
  description: string;
  polyCount?: string;
  tags: string[];
  isFeatured?: boolean;
}> {
  return MY_SKETCHFAB_MODELS.map((item) => {
    const resolvedId = extractModelId(item.sketchfabIdOrUrl) || item.sketchfabIdOrUrl;
    return {
      id: item.id,
      sketchfabId: resolvedId,
      title: item.title,
      category: item.category,
      description: item.description,
      polyCount: item.polyCount,
      tags: item.tags,
      isFeatured: item.isFeatured,
    };
  });
}
