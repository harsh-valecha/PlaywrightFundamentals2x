import { test, expect } from '@playwright/test';


test('Verify student login ', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    let email = 'test123@gmail.com';
    let pswd = 'test123';
    await page.fill("#email", email);
    await page.fill("#password", pswd);
    page.locator('button[data-testid="login-button"]').click();

    let [emailName, emailDomain] = email.split('@');
    console.log(emailName, emailDomain);
    await expect(page).toHaveURL(`https://app.thetestingacademy.com/playwright/multiple_element_filter?email=${emailName}%40${emailDomain}&password=${pswd}#login-success`);
    await page.waitForTimeout(3000);
});

