import { test, expect } from '@playwright/test';


test('verify select dropdown', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dropdown');

    await page.locator('#dropdown').click();
    await page.selectOption('#dropdown', 'Option 2');
    await page.selectOption('#dropdown', '1');
    await page.pause();
});

