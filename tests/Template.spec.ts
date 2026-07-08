import { test, expect } from '@playwright/test';

test('template test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
