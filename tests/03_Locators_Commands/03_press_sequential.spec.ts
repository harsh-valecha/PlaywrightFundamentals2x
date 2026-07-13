import { test, expect } from '@playwright/test';

test('verify sequential press', async ({ page }) => {
    await page.goto('https://awesomeqa.com/practice.html');
    await page.locator('[name="firstname"]').pressSequentially('tototo totoro', { delay: 20 });
    await page.waitForTimeout(3000);
});
