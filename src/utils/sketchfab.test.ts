import test from 'node:test';
import assert from 'node:assert/strict';
import { extractSketchfabModelId, buildSketchfabEmbedUrl, isValidSketchfabInput } from './sketchfab.ts';

test('extracts direct 32-hex model ID correctly', () => {
  const id = 'd245b006ce1d4e2191daf2df0d6c0e30';
  assert.equal(extractSketchfabModelId(id), 'd245b006ce1d4e2191daf2df0d6c0e30');
});

test('extracts model ID from Sketchfab model URL', () => {
  const url = 'https://sketchfab.com/3d-models/modern-kitchen-counter-d245b006ce1d4e2191daf2df0d6c0e30';
  assert.equal(extractSketchfabModelId(url), 'd245b006ce1d4e2191daf2df0d6c0e30');
});

test('extracts model ID from Sketchfab embed iframe code', () => {
  const iframe = '<iframe title="Modern Kitchen Counter" src="https://sketchfab.com/models/d245b006ce1d4e2191daf2df0d6c0e30/embed?ui_theme=dark"></iframe>';
  assert.equal(extractSketchfabModelId(iframe), 'd245b006ce1d4e2191daf2df0d6c0e30');
});

test('builds secure embed URL with parameters', () => {
  const embed = buildSketchfabEmbedUrl('d245b006ce1d4e2191daf2df0d6c0e30', {
    autostart: true,
    ui_theme: 'dark',
  });
  assert.ok(embed?.includes('https://sketchfab.com/models/d245b006ce1d4e2191daf2df0d6c0e30/embed'));
  assert.ok(embed?.includes('autostart=1'));
  assert.ok(embed?.includes('ui_theme=dark'));
});

test('validates valid and invalid Sketchfab inputs', () => {
  assert.equal(isValidSketchfabInput('d245b006ce1d4e2191daf2df0d6c0e30'), true);
  assert.equal(isValidSketchfabInput('https://sketchfab.com/models/71aa7653f4234514a9431ab9fb464a27/embed?ui_theme=dark'), true);
  assert.equal(isValidSketchfabInput('not-a-valid-url'), false);
  assert.equal(isValidSketchfabInput(''), false);
});
