import { test, expect } from '@playwright/test';


test('verify webtable test ', async ({ page }) => {
    // await page.goto("https://app.thetestingacademy.com/playwright/webtable");
    // https://awesomeqa.com/webtable.html
    // https://awesomeqa.com/webtable1.html
    await page.goto("https://awesomeqa.com/webtable.html");
    // find helen bennett , which country she belongs to 
    // page.locator("//table[@id='customers']/tbody/tr[5]/td[2]");
    const firstPart = "//table[@id='customers']/tbody/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]";

    const rows = await page.locator("//table[@id='customers']/tbody/tr").count();
    const cols = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();

    for (let i = 2; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            const data = await page.locator(dynamicPath).innerText();
            console.log(data);
            if (data.includes('Helen Bennett')) {
                const countryPath = `${dynamicPath}/following-sibling::td`;
                const countryText = await page.locator(countryPath).innerText();
                console.log('------');
                console.log(`Helen Bennett is In - ${countryText}`);
            }
        }
    }

    // await page.pause();

});

