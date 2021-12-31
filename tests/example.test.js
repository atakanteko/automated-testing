const puppeteer = require('puppeteer')

describe('My First Puppeteer Test',()=>{
    it('should launch the browser', async function() {
        const browser = await puppeteer.launch({headless:false, slowMo:250})
        const page = await browser.newPage()
        await page.setViewport({ width: 1280, height: 800 })
        await page.goto('https://devexpress.github.io/testcafe/example/')
        const title = await page.title();
        const url   = await page.url();
        console.log(`Title: ${title} Url: ${url}`);
        await browser.close()
    })
})
