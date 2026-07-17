import { test, expect } from '@playwright/test';

test('example test @smoke @P0', async ({ page }, testInfo) => {
  await test.step('Navigate to Playwright homepage', async () => {
    console.log('Opening https://playwright.dev/');
    await page.goto('https://playwright.dev/');
    await testInfo.attach('step-0-home', {
      body: await page.screenshot(),
      contentType: 'image/png',
    });
  });

  await test.step('Verify page title', async () => {
    console.log('Asserting the page title contains "Playwright"');
    await expect(page).toHaveTitle(/Playwright/);
  });

  await test.step('Click the Get Started link', async () => {
    console.log('Clicking the "Get started" link');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    await testInfo.attach('step-2-getstarted', {
      body: await page.screenshot(),
      contentType: 'image/png',
    });
  });
});
