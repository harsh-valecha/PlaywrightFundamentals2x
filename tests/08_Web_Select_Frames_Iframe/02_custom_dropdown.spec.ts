import { test, expect } from '@playwright/test';


test('verify custom dropdown', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');
    await page.getByTestId('lang-trigger').click();
    // finding javascript
    await page.getByRole('option', { name: 'JavaScript' }).click();
    await page.pause();
});

test('verify custom experience dropdown', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');
    await page.getByTestId('experience-trigger').click();
    // finding javascript
    await page.getByText("Mid-level (4-6 years)", { exact: true }).click();
    await page.pause();
});

test('verify Advance single and searchable dropdown', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');
    await page.locator('#rs-single').click();
    await page.getByText("Cypress").click();
    await page.pause();
});

test('verify multiple chips', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');
    await page.getByTestId('rs-multi').click();
    await page.getByText("Pytest", { exact: true }).click();
    await page.keyboard.press('Escape');
    await page.getByTestId('rs-multi').click();
    await page.getByText("JUnit", { exact: true }).click();
    await page.keyboard.press('Escape');
    await page.pause();
});


test('verify async dropdown', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');
    await page.getByTestId('rs-async').click();
    await page.getByTestId('rs-async-input').fill('pun');
    await expect(page.getByTestId('rs-async-menu')).toContainText('Pune');
    await page.getByRole('option', { name: 'Pune' }).click();
    await page.pause();
});
