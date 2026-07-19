import { test, expect } from '@playwright/test';

test('Verify finding webtable elements having pagination', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    const row = page.locator('#employees-tbody tr').filter({ hasText: 'Priya Kapoor' });

    const emailId = await row.locator('td[data-col="email"]').innerText();
    const country = await row.locator('td[data-col="country"]').innerText();

    console.log(emailId, country);
    // await page.waitForTimeout(3000);
});