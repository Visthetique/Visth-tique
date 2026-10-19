/**
 * Pricing calculation engine for Visthétique 3D Design Studio
 */

export type ServiceType =
  | 'architectural-exterior'
  | 'interior-design'
  | 'furniture-modeling'
  | 'game-asset'
  | 'retexture'
  | 'rendering';

export type ComplexityLevel = 'standard' | 'detailed' | 'ultra-high-end';

export type TurnaroundTime = 'standard' | 'express' | 'urgent';

export interface QuoteInputs {
  service: ServiceType;
  complexity: ComplexityLevel;
  renderCount: number; // e.g. 1 to 20
  includeInteractive3D: boolean;
  includeSourceFiles: boolean;
  turnaround: TurnaroundTime;
  currency: 'USD' | 'EUR' | 'TRY';
}

export interface QuoteCalculationResult {
  minPrice: number;
  maxPrice: number;
  estimatedDays: number;
  currencySymbol: string;
  breakdown: {
    baseService: number;
    renders: number;
    interactive3D: number;
    sourceFiles: number;
    turnaroundMultiplier: number;
  };
}

const SERVICE_BASE_PRICES_USD: Record<ServiceType, { min: number; max: number; baseDays: number }> = {
  'architectural-exterior': { min: 450, max: 850, baseDays: 7 },
  'interior-design': { min: 350, max: 700, baseDays: 5 },
  'furniture-modeling': { min: 180, max: 350, baseDays: 3 },
  'game-asset': { min: 220, max: 480, baseDays: 4 },
  'retexture': { min: 120, max: 250, baseDays: 2 },
  'rendering': { min: 200, max: 400, baseDays: 3 },
};

const COMPLEXITY_MULTIPLIERS: Record<ComplexityLevel, number> = {
  standard: 1.0,
  detailed: 1.35,
  'ultra-high-end': 1.75,
};

const TURNAROUND_MULTIPLIERS: Record<TurnaroundTime, { priceMultiplier: number; dayFactor: number }> = {
  standard: { priceMultiplier: 1.0, dayFactor: 1.0 },
  express: { priceMultiplier: 1.3, dayFactor: 0.6 },
  urgent: { priceMultiplier: 1.6, dayFactor: 0.35 },
};

// Rates relative to USD
const CURRENCY_RATES = {
  USD: { rate: 1.0, symbol: '$' },
  EUR: { rate: 0.92, symbol: '€' },
  TRY: { rate: 36.5, symbol: '₺' },
};

export function calculateQuote(inputs: QuoteInputs): QuoteCalculationResult {
  const serviceConfig = SERVICE_BASE_PRICES_USD[inputs.service] || SERVICE_BASE_PRICES_USD['interior-design'];
  const complexityFactor = COMPLEXITY_MULTIPLIERS[inputs.complexity] || 1.0;
  const turnaroundConfig = TURNAROUND_MULTIPLIERS[inputs.turnaround] || TURNAROUND_MULTIPLIERS.standard;

  // Base service cost scaled by complexity
  const baseMin = serviceConfig.min * complexityFactor;
  const baseMax = serviceConfig.max * complexityFactor;

  // Additional renders beyond the 2 included in base
  const extraRenders = Math.max(0, inputs.renderCount - 2);
  const renderCostMin = extraRenders * 45;
  const renderCostMax = extraRenders * 75;

  // Interactive 3D (Sketchfab preparation & optimization)
  const interactiveCost = inputs.includeInteractive3D ? 120 : 0;

  // Source files delivery (Blender / 3ds Max / Maya + 4K PBR textures)
  const sourceCost = inputs.includeSourceFiles ? 90 : 0;

  const preTurnaroundMin = baseMin + renderCostMin + interactiveCost + sourceCost;
  const preTurnaroundMax = baseMax + renderCostMax + interactiveCost + sourceCost;

  const totalMinUSD = Math.round(preTurnaroundMin * turnaroundConfig.priceMultiplier);
  const totalMaxUSD = Math.round(preTurnaroundMax * turnaroundConfig.priceMultiplier);

  const currencyInfo = CURRENCY_RATES[inputs.currency] || CURRENCY_RATES.USD;
  const currencyRate = currencyInfo.rate;

  const finalMin = Math.round(totalMinUSD * currencyRate);
  const finalMax = Math.round(totalMaxUSD * currencyRate);

  const estimatedDays = Math.max(
    1,
    Math.round(serviceConfig.baseDays * complexityFactor * turnaroundConfig.dayFactor)
  );

  return {
    minPrice: finalMin,
    maxPrice: finalMax,
    estimatedDays,
    currencySymbol: currencyInfo.symbol,
    breakdown: {
      baseService: Math.round(baseMin * currencyRate),
      renders: Math.round(renderCostMin * currencyRate),
      interactive3D: Math.round(interactiveCost * currencyRate),
      sourceFiles: Math.round(sourceCost * currencyRate),
      turnaroundMultiplier: turnaroundConfig.priceMultiplier,
    },
  };
}
