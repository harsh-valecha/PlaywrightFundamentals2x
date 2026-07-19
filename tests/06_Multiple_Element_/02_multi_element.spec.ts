import { test, expect } from '@playwright/test';


test('basic verify multiple elements ', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    // await page.pause();
    await page.getByTestId('forgotten-password-link').click();
    // await page.waitForTimeout(2000);

});

