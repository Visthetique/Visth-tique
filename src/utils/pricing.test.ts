import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateQuote } from './pricing.ts';

test('calculates base quote for standard interior design in USD', () => {
  const result = calculateQuote({
    service: 'interior-design',
    complexity: 'standard',
    renderCount: 2,
    includeInteractive3D: false,
    includeSourceFiles: false,
    turnaround: 'standard',
    currency: 'USD',
  });

  assert.equal(result.currencySymbol, '$');
  assert.equal(result.minPrice, 350);
  assert.equal(result.maxPrice, 700);
  assert.equal(result.estimatedDays, 5);
});

test('adds cost for extra renders, interactive 3D, and source files', () => {
  const result = calculateQuote({
    service: 'furniture-modeling',
    complexity: 'detailed',
    renderCount: 4, // 2 extra renders
    includeInteractive3D: true,
    includeSourceFiles: true,
    turnaround: 'standard',
    currency: 'USD',
  });

  // Base min = 180 * 1.35 = 243
  // 2 extra renders min = 2 * 45 = 90
  // interactive = 120
  // source files = 90
  // total min = 243 + 90 + 120 + 90 = 543
  assert.equal(result.minPrice, 543);
  assert.ok(result.maxPrice > result.minPrice);
});

test('converts currency properly to EUR and TRY', () => {
  const resultEUR = calculateQuote({
    service: 'architectural-exterior',
    complexity: 'standard',
    renderCount: 2,
    includeInteractive3D: false,
    includeSourceFiles: false,
    turnaround: 'standard',
    currency: 'EUR',
  });
  assert.equal(resultEUR.currencySymbol, '€');
  assert.ok(resultEUR.minPrice < 450); // EUR rate is 0.92

  const resultTRY = calculateQuote({
    service: 'architectural-exterior',
    complexity: 'standard',
    renderCount: 2,
    includeInteractive3D: false,
    includeSourceFiles: false,
    turnaround: 'standard',
    currency: 'TRY',
  });
  assert.equal(resultTRY.currencySymbol, '₺');
  assert.ok(resultTRY.minPrice > 10000); // TRY rate is 36.5
});
