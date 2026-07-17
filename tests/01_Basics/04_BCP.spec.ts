import { chromium, Browser, BrowserContext, Page } from 'playwright';

async function run() {
    // level 1 - launch browser
    let browser: Browser = await chromium.launch({ headless: !!process.env.CI });
    console.log("Bowser launched: ", browser);

    let context: BrowserContext = await browser.newContext();
    console.log("context created: ", context);


    let page: Page = await context.newPage();
    console.log("Page Opened");

    await page.goto('https://app.vwo.com');
    console.log('title: ', await page.title());
}

run();