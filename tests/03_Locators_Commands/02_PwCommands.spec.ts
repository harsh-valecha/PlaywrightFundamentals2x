import { test, expect } from '@playwright/test';

test('go to with different waituntil', async ({ page }) => {
    await page.goto('https://example.com', { waitUntil: "commit" });
    /*
    wait until - 
    - commit
    - documentLoaded
    - load
    - NetworkIdle
    */
});
