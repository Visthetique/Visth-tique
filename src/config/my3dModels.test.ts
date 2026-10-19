import test from 'node:test';
import assert from 'node:assert/strict';
import { MY_SKETCHFAB_MODELS, getResolvedModels } from './my3dModels.ts';

test('resolves all configured Sketchfab models with valid IDs', () => {
  const resolved = getResolvedModels();
  assert.equal(resolved.length, MY_SKETCHFAB_MODELS.length);
  assert.ok(resolved.length >= 15);

  for (const m of resolved) {
    assert.ok(m.sketchfabId, `Model ${m.title} must have a resolved sketchfabId`);
    assert.equal(m.sketchfabId.length, 32, `Model ${m.title} ID must be 32 characters hex`);
    assert.ok(m.title, 'Model must have a title');
    assert.ok(m.category, 'Model must have a category');
  }
});
