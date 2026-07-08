import { test, expect } from '@playwright/test';

test("Verify the logo", async ({ page }) => {
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");
    const logo_img = page.locator("#vow-login-logo"); // in quotes we have to provide xpath or css selector
    await expect(logo_img).toBeVisible();
})