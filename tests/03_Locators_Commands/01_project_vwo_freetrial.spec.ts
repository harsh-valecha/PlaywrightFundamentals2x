import { test, expect } from '@playwright/test';

test('verify error message for vwo free trial page', async ({ page }) => {
    await page.goto('https://vwo.com/free-trial/');
    let email = page.getByRole("textbox", { name: "email" });
    await email.fill("hkhkjhjkh");

    await page.getByRole("checkbox").check();
    await page.getByRole("button", { name: "Create a Free Trial Account" }).click();


    const errorLocator = page.locator('//div[contains(@class,"invalid-reason")]').first();
    await expect(errorLocator).toContainText("The email address you entered is incorrect.");

    await page.waitForTimeout(3000);

});
