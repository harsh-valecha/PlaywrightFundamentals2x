import { test, expect } from '@playwright/test';

test('Verify finding webtable elements having pagination', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    const pageCount = 3;
    const allEmails: string[] = [];

    for (let p = 1; p <= pageCount; p++) {
        await page.getByTestId(`page-${p}`).click();
        const emails = await page.locator('#employees-tbody tr td[data-col="email"]')
            .allInnerTexts();
        allEmails.push(...emails);
    }

    console.log(allEmails);

});