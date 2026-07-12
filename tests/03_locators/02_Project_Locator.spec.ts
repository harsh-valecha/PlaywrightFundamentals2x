import { test, expect } from '@playwright/test';

test('verify vwo error msg on login', async ({ page }) => {
    await page.goto('https://app.vwo.com/#/login');

    let usernameField = page.locator('#login-username');
    let passwordField = page.locator('#login-password');
    let loginbtn = page.locator('#js-login-btn');

    await usernameField.fill('admin@admin.com');
    await passwordField.fill('pass123');
    await loginbtn.click();

    console.log("All actions complete");

    let error_msg = page.locator('#js-notification-box');
    await expect(error_msg).toContainText("Your email, password, IP address or location did not match");
});
