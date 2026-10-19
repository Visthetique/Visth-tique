/**
 * Sketchfab URL and embed parser utilities for Visthétique
 */

export interface SketchfabEmbedOptions {
  autostart?: boolean;
  ui_theme?: 'dark' | 'light';
  ui_controls?: boolean;
  ui_infos?: boolean;
  transparent?: boolean;
}

/**
 * Extracts a 32-character Sketchfab model ID from various input formats:
 * - Direct ID: "d245b006ce1d4e2191daf2df0d6c0e30"
 * - Full Model URL: "https://sketchfab.com/3d-models/modern-kitchen-counter-d245b006ce1d4e2191daf2df0d6c0e30"
 * - Embed URL: "https://sketchfab.com/models/d245b006ce1d4e2191daf2df0d6c0e30/embed"
 * - Full <iframe> code: '<iframe src="https://sketchfab.com/models/d245b006ce1d4e2191daf2df0d6c0e30/embed"></iframe>'
 */
export function extractSketchfabModelId(input: string): string | null {
  if (!input || typeof input !== 'string') return null;
  const trimmed = input.trim();

  // Case 1: Raw 32-character hex ID
  const directIdMatch = trimmed.match(/^[a-f0-9]{32}$/i);
  if (directIdMatch) {
    return directIdMatch[0].toLowerCase();
  }

  // Case 2: Embed URL format /models/<id>/embed
  const embedUrlMatch = trimmed.match(/\/models\/([a-f0-9]{32})/i);
  if (embedUrlMatch && embedUrlMatch[1]) {
    return embedUrlMatch[1].toLowerCase();
  }

  // Case 3: Public model page format /3d-models/[slug-]<id>
  const pageUrlMatch = trimmed.match(/\/3d-models\/(?:[a-z0-9-_]+-)?([a-f0-9]{32})/i);
  if (pageUrlMatch && pageUrlMatch[1]) {
    return pageUrlMatch[1].toLowerCase();
  }

  // Case 4: Any 32-char hex token in iframe code
  const iframeSrcMatch = trimmed.match(/src=["']https?:\/\/sketchfab\.com\/(?:models\/|show\/)?([a-f0-9]{32})/i);
  if (iframeSrcMatch && iframeSrcMatch[1]) {
    return iframeSrcMatch[1].toLowerCase();
  }

  // Generic fallback: check if any 32-char hex string exists in the input
  const anyHexMatch = trimmed.match(/\b([a-f0-9]{32})\b/i);
  if (anyHexMatch && anyHexMatch[1]) {
    return anyHexMatch[1].toLowerCase();
  }

  return null;
}

/**
 * Builds a secure, sandboxed Sketchfab embed URL with desired UI options
 */
export function buildSketchfabEmbedUrl(
  modelIdOrInput: string,
  options: SketchfabEmbedOptions = {}
): string | null {
  const modelId = extractSketchfabModelId(modelIdOrInput);
  if (!modelId) return null;

  const {
    autostart = false,
    ui_theme = 'dark',
    ui_controls = true,
    ui_infos = true,
    transparent = false,
  } = options;

  const params = new URLSearchParams();
  if (autostart) params.set('autostart', '1');
  params.set('ui_theme', ui_theme);
  if (!ui_controls) params.set('ui_controls', '0');
  if (!ui_infos) params.set('ui_infos', '0');
  if (transparent) params.set('transparent', '1');

  return `https://sketchfab.com/models/${modelId}/embed?${params.toString()}`;
}

export function isValidSketchfabInput(input: string): boolean {
  return extractSketchfabModelId(input) !== null;
}
