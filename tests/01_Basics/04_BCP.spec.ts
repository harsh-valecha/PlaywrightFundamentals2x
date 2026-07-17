import { chromium, Browser, BrowserContext, Page } from 'playwright';

async function run() {
    // level 1 - launch browser
    let browser: Browser = await chromium.launch({ headless: !!process.env.CI });
    console.log("Bowser launched");

    try {
        let context: BrowserContext = await browser.newContext();
        console.log("context created");

        let page: Page = await context.newPage();
        console.log("Page Opened");

        await page.goto('https://app.vwo.com');
        console.log('title: ', await page.title());
    } finally {
        await browser.close();
    }
}

run().catch((err) => {
    console.error(err);
    process.exit(1);
});