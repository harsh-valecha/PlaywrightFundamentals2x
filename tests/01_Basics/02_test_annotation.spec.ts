import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle("Playwright");
})

test.skip('skipped test', async ({ page }) => {
    // this test is skipped
}
);


test.only('focused test', async ({ page }) => {
    // only this test runs
});

test.fail('expected to fail', async ({ page }) => {
    // test is expected to fail
});

test.slow('slow test', async ({ page }) => {
    //slow test
});

test('conditional test', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Not supported in firefox')
});