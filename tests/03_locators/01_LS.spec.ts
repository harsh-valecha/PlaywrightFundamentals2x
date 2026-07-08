import { test, expect } from '@playwright/test';

test('verify', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart');
});