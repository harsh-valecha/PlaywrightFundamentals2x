import { test, expect } from '@playwright/test';


test('Verify HRM Login , find terminate employee , take page screenshot', async ({ page }) => {
    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");

    await page.fill("//input[@name='username']", "admin");
    await page.fill("//input[@name='password']", "Awesomeqa@4321");
    await page.getByRole('button', { name: ' Login ' }).click();
    await page.pause();
    const statusCell = page.locator("//div[contains(@class,'oxd-table-cell') and .//div[normalize-space()='Terminated']]").first();
    await statusCell.locator("xpath=following-sibling::div[3]//button[1]").click();
    await page.screenshot({ path: 'tests/06_Multiple_Element_/OrangeHRMDeletebtn.png' });

});

