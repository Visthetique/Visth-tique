export interface ModelItem {
  id: string;
  sketchfabId: string;
  title: string;
  category: 'All' | 'Architecture & Exterior' | 'Interior & Furniture' | 'Game Assets & Weapons' | 'Decor & Props';
  description: string;
  polyCount?: string;
  tags: string[];
  isFeatured?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  behanceUrl: string;
  category: string;
  year: string;
  specs: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconImage: string;
  highlights: string[];
  serviceKey: 'furniture-modeling' | 'interior-design' | 'architectural-exterior' | 'game-asset' | 'retexture' | 'rendering';
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  platform: 'behance' | 'sketchfab' | 'instagram' | 'x' | 'email';
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Behance',
    url: 'https://www.behance.net/bubirmelisama',
    handle: '@bubirmelisama',
    platform: 'behance',
  },
  {
    name: 'Sketchfab',
    url: 'https://sketchfab.com/bubirmelisa',
    handle: '@bubirmelisa',
    platform: 'sketchfab',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/visthetiquer/',
    handle: '@visthetiquer',
    platform: 'instagram',
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/Visthetique',
    handle: '@Visthetique',
    platform: 'x',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'greece-hotel',
    title: 'Greece Modern Hotel',
    subtitle: 'Luxury Mediterranean Hospitality & Coastal Villa Visualization',
    image: '/images/r7.jpg',
    behanceUrl: 'https://www.behance.net/gallery/210569143/Greece-Modern-Hotel',
    category: 'Hospitality Architecture',
    year: '2024',
    specs: '4K Ultra-HD Photorealistic CGI',
  },
  {
    id: 'lassa-villa',
    title: 'Modern Lassa Villa',
    subtitle: 'Brutalist Geometry with Warm Natural Stone & Glass Volumes',
    image: '/images/Prerender6-min.png',
    behanceUrl: 'https://www.behance.net/gallery/210569899/Greece-Modern-Lassa-Villa',
    category: 'Residential Architecture',
    year: '2024',
    specs: 'Exterior & Landscape Lighting',
  },
  {
    id: 'facade-panels',
    title: 'Outside Facade Panels',
    subtitle: 'Parametric Perforated Exterior Metal & Fiber-Concrete Shading Panels',
    image: '/images/R2.jpg',
    behanceUrl: 'https://www.behance.net/gallery/215033863/Outside-Facade-Panels',
    category: 'Commercial Exterior',
    year: '2024',
    specs: 'Architectural Engineering 3D',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'furniture',
    title: 'Furniture Design',
    description: 'We create high-quality 3D furniture models for interior design projects, games, and product visualization, ensuring every detail is accurately represented.',
    iconImage: '/images/5970969-620b45f4.png',
    highlights: ['Bespoke joinery', 'Ergonomic proportions', 'PBR cloth & leather'],
    serviceKey: 'furniture-modeling',
  },
  {
    id: 'interior',
    title: 'Interior Design',
    description: 'From concept to execution, we design immersive and functional interior spaces using 3D modeling and visualization to bring ideas to life.',
    iconImage: '/images/8172542-6ae6a2fd.png',
    highlights: ['Photorealistic lighting', 'Spatial planning', 'Material moodboards'],
    serviceKey: 'interior-design',
  },
  {
    id: 'exterior',
    title: 'Exterior Design',
    description: 'Our architectural exterior designs blend aesthetics and functionality, providing realistic 3D visualizations of buildings and outdoor spaces.',
    iconImage: '/images/1606186-786a3623.png',
    highlights: ['Day & night atmospheres', 'Landscaping integration', 'Urban contexts'],
    serviceKey: 'architectural-exterior',
  },
  {
    id: 'modelling',
    title: '3D Modelling',
    description: 'We specialize in creating highly detailed 3D models for architecture, gaming, and product design, ensuring accuracy and realism in every project.',
    iconImage: '/images/7865241-1f9cff00.png',
    highlights: ['Sub-D high poly', 'Optimized game meshes', 'Clean quad topology'],
    serviceKey: 'game-asset',
  },
  {
    id: 'retexture',
    title: 'Retexture',
    description: 'We enhance and customize textures for existing 3D models, optimizing materials for a more realistic and visually appealing appearance.',
    iconImage: '/images/4931354-2b933188.png',
    highlights: ['PBR 4K textures', 'Substance Painter maps', 'UV re-unwrapping'],
    serviceKey: 'retexture',
  },
  {
    id: 'rendering',
    title: 'Rendering',
    description: 'High-quality rendering services that bring 3D models to life with realistic lighting, materials, and environments for presentations and marketing.',
    iconImage: '/images/15660023-2f599df4.png',
    highlights: ['Unreal Engine 5 & Cycles', 'Post-processing & grade', 'Print-ready resolution'],
    serviceKey: 'rendering',
  },
];

export const SKETCHFAB_MODELS: ModelItem[] = [
  {
    id: 'kitchen-counter',
    sketchfabId: 'd245b006ce1d4e2191daf2df0d6c0e30',
    title: 'Modern Kitchen Counter',
    category: 'Interior & Furniture',
    description: 'Contemporary marble-topped island with fluted wooden finish and built-in brass fixtures.',
    polyCount: '42.5k Triangles',
    tags: ['Architecture', 'Kitchen', 'Modern', 'PBR'],
    isFeatured: true,
  },
  {
    id: 'facade-panels-3d',
    sketchfabId: '90f04a6912644d198cb2d4fff8657788',
    title: 'Outside Facade Panels',
    category: 'Architecture & Exterior',
    description: 'High-end architectural facade panel system designed for luxury exteriors and commercial facades.',
    polyCount: '65.2k Triangles',
    tags: ['Exterior', 'Architecture', 'Facade', 'Modular'],
    isFeatured: true,
  },
  {
    id: 'pillows-basket',
    sketchfabId: '71aa7653f4234514a9431ab9fb464a27',
    title: 'Pillows in a Basket',
    category: 'Decor & Props',
    description: 'Photorealistic woven wicker storage basket filled with natural linen cushions and soft draped blanket.',
    polyCount: '34.8k Triangles',
    tags: ['Interior', 'Decor', 'Cloth Simulation', 'Living'],
  },
  {
    id: 'wood-bookcase',
    sketchfabId: 'a1e1b7cb1cf942449805201d150872e4',
    title: 'Organic Wood Bookcase',
    category: 'Interior & Furniture',
    description: 'Sculptural organic shelving unit with curved solid timber uprights and floating shelves.',
    polyCount: '28.4k Triangles',
    tags: ['Furniture', 'Woodwork', 'Interior', 'Scandinavian'],
  },
  {
    id: 'samsung-fridge',
    sketchfabId: '9440d126a74d4d9f80416b37e8de80ea',
    title: 'Samsung Family Hub Fridge',
    category: 'Interior & Furniture',
    description: 'Precision modeled smart French-door refrigerator with touch display and brushed steel materials.',
    polyCount: '19.1k Triangles',
    tags: ['Appliance', 'Kitchen', 'Hard Surface', 'Modern'],
  },
  {
    id: 'book-stack',
    sketchfabId: '198d3bdc5384426b9695394a82bc3825',
    title: 'Book Stack',
    category: 'Decor & Props',
    description: 'Detailed hardcover architecture and art monograph stack with realistic edge page texturing.',
    polyCount: '12.6k Triangles',
    tags: ['Prop', 'Library', 'Coffee Table', 'Decor'],
  },
  {
    id: 'thinker-girl',
    sketchfabId: 'd722fdf787c44e5cb6f273e3de7929e9',
    title: 'Thinker Golden Girl Decoration',
    category: 'Decor & Props',
    description: 'Elegant golden modern sculpture reflecting ambient architectural lighting in luxury interior rooms.',
    polyCount: '38.0k Triangles',
    tags: ['Sculpture', 'Gold', 'Statue', 'Art'],
  },
  {
    id: 'regina-crucis',
    sketchfabId: '7717807561cf42138569edbcd1adcb01',
    title: 'Regina Crucis Armorset',
    category: 'Game Assets & Weapons',
    description: 'Game-ready fantasy knight armorset with ornate metallic engraving and weathered leather underlayers.',
    polyCount: '54.0k Triangles',
    tags: ['Game Asset', 'Armor', 'Fantasy', 'PBR Metal'],
  },
  {
    id: 'elvish-axe',
    sketchfabId: '5ec9570038894f959915e594851bdafa',
    title: 'Elvish Battle Axe',
    category: 'Game Assets & Weapons',
    description: 'Game-optimized elven battle weapon featuring rune engravings and sculpted bone handle grip.',
    polyCount: '14.2k Triangles',
    tags: ['Weapon', 'Game Asset', 'Fantasy', 'Hero Prop'],
  },
  {
    id: '3d-camera',
    sketchfabId: '918befb4a7774f72a839ce0de290cdf3',
    title: '(3DS-EXP-645) 3D Camera',
    category: 'Decor & Props',
    description: 'Retro-futuristic dual optical camera apparatus with brass fittings and glass lens reflections.',
    polyCount: '31.7k Triangles',
    tags: ['Vintage', 'Optical', 'Gadget', 'Sci-Fi'],
  },
  {
    id: 'geo-wall',
    sketchfabId: '2784fe2a0bb64a0baa39e4ec3cd246ab',
    title: 'Geo Wall Decoration',
    category: 'Architecture & Exterior',
    description: 'Parametric 3D wall acoustic panel assembly with angular facets casting architectural shadows.',
    polyCount: '16.5k Triangles',
    tags: ['Architecture', 'Wall Panel', 'Modern', 'Interior'],
  },
  {
    id: 'modern-fence',
    sketchfabId: '2ce34dc74fb7448e924d8a165669c575',
    title: 'Modern Fence Set',
    category: 'Architecture & Exterior',
    description: 'Modular privacy boundary fencing system combining charcoal powder-coated steel and wood slat panels.',
    polyCount: '22.0k Triangles',
    tags: ['Exterior', 'Landscape', 'Modular', 'Architecture'],
  },
  {
    id: 'rifle-suppressor',
    sketchfabId: '5a04df3acdf0467a89a1420d3a039e2e',
    title: 'Centerfire Rifle Suppressor',
    category: 'Game Assets & Weapons',
    description: 'Milsim precision tactical suppressor with heat shroud texture, knurling, and attachment thread.',
    polyCount: '9.8k Triangles',
    tags: ['Weapon Attachment', 'FPS Game', 'Hard Surface'],
  },
  {
    id: 'shadow-claw-sword',
    sketchfabId: '89a094ed6fa54e3eb852c84ae16bcfc0',
    title: 'Shadow Claw Sword',
    category: 'Game Assets & Weapons',
    description: 'Stylized fantasy double-edged sword with dark obsidian blade and claw crossguard.',
    polyCount: '18.9k Triangles',
    tags: ['Weapon', 'Blade', 'RPG', 'Game Ready'],
  },
  {
    id: 'fleur-de-lis',
    sketchfabId: '7795264233754fcc976d3c447d63c38a',
    title: 'Fleur-de-lis Ornament',
    category: 'Decor & Props',
    description: 'Classic heraldic plaster / cast iron relief crest modeled for classical architectural ornamentation.',
    polyCount: '24.1k Triangles',
    tags: ['Classic', 'Relief', 'Ornament', 'Historic'],
  },
  {
    id: 'shooting-stars-crown',
    sketchfabId: '1f1129acc1794f5d98dd47a91c2c3311',
    title: 'Crown Of Shooting Stars⭐',
    category: 'Game Assets & Weapons',
    description: 'Celestial halo tiara crown with floating starlight gemstones and golden filigree arcs.',
    polyCount: '29.3k Triangles',
    tags: ['Crown', 'Fantasy', 'Accessories', 'Cosmetic'],
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Hangi dosya formatlarında teslimat yapıyorsunuz? (What file formats are delivered?)',
    answer: 'Mimari ve oyun gereksinimlerinize uygun olarak FBX, OBJ, GLTF/GLB, USDZ, STL ve kaynak dosyaları (Blender .blend, 3ds Max, Maya) teslim ediyoruz. Ayrıca web sitenizde doğrudan 3D gezinme için Sketchfab entegrasyonu ve Unreal Engine sahneleri hazırlıyoruz.',
  },
  {
    question: 'Projeyi başlatmak için hangi belgelere veya çizimlere ihtiyaç var?',
    answer: 'Mevcut CAD/DWG planları, PDF çizimleri, 3D taslaklar (SketchUp, Revit), moodboard görselleri veya el çizimleri ile başlayabiliriz. Sıfırdan bir konsept geliştirilecekse referans fotoğraflar ve ölçü gereksinimleri yeterlidir.',
  },
  {
    question: 'Fiyat teklifi nasıl belirlenir ve ne kadar sürede teslim edilir?',
    answer: 'Fiyatlandırma modelin karmaşıklığı, poligon sayısı, istenen render açısı ve teslimat süresine göre şeffaf olarak belirlenir. Standart mobilya modelleri 2-4 günde, kapsamlı villa ve otel mimari görselleştirmeleri ortalama 5-10 gün içerisinde teslim edilir.',
  },
  {
    question: 'Revizyon politikanız nedir?',
    answer: 'Her projede 2 tur kapsamlı revizyon ücretsiz olarak dahildir. İlk aşamada kamera açıları ve kütle doğrulaması yapılır, ikinci aşamada malzeme ve ışık optimizasyonları tamamlanır.',
  },
  {
    question: 'Sketchfab üzerinden interaktif 3D modelleri kendi siteme nasıl entegre edebilirim?',
    answer: 'Hazırladığımız tüm interaktif 3D modeller doğrudan iframe embed kodu veya Sketchfab linki ile herhangi bir web sitesine, portfolyoya veya e-ticaret platformuna tek satır kodla sorunsuz entegre edilebilir.',
  },
];
