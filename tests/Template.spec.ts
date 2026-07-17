import { test, expect } from '@playwright/test';

/**
 * Template for writing tests that render fully in the TTA Custom Report.
 *
 * How the report picks things up:
 *  - Wrap logical actions in `test.step('title', async () => { ... })` so each
 *    step shows up as an expandable row with its own duration & video timing.
 *  - Use `console.log(...)` inside a step to show console output for that step.
 *  - Attach a screenshot named `step-<index>-<label>` (index is 0-based and
 *    matches the step order) to pin a screenshot to a specific step.
 *  - Add @tags in the title (e.g. @P0, @P1, @smoke) to drive the report filters.
 */
test('template test @P1 @smoke', async ({ page }, testInfo) => {
  await test.step('Open the example site', async () => {
    console.log('Navigating to https://example.com');
    await page.goto('https://example.com');
    await testInfo.attach('step-0-open', {
      body: await page.screenshot(),
      contentType: 'image/png',
    });
  });

  await test.step('Validate the page title', async () => {
    console.log('Checking the title matches /Example/');
    await expect(page).toHaveTitle(/Example/);
  });

  await test.step('Validate the main heading', async () => {
    console.log('Checking the H1 heading text');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Example Domain');
    await testInfo.attach('step-2-heading', {
      body: await page.screenshot(),
      contentType: 'image/png',
    });
  });
});
