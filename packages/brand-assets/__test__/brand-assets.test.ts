import { expect, test } from 'vitest';

import { rainxColorBrandBlue } from '../src/brand-assets';

test('Export TS symbol as css variable', () => {
  expect(rainxColorBrandBlue).toMatch(/^var\(--.*\)/);
});
