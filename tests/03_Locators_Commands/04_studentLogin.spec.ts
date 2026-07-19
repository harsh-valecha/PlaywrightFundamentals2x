import { test, expect } from '@playwright/test';


test('Verify student login ', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    let email = 'test123@gmail.com';
    let pswd = 'test123';
    page.locator('#email').fill(email);
    page.locator('#password').fill(pswd);
    page.locator('//input[@name="remember"]').click();
    page.locator('button[data-testid="login-button"]').click();


    let emailName, emailDomain = email.split('@');

    expect(page.url,
        `https://app.thetestingacademy.com/playwright/multiple_element_filter?email=${emailName}%40${emailDomain}&password=${pswd}&remember=yes#login-success`)

    await page.waitForTimeout(3000);
});

