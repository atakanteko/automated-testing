const puppeteer = require('puppeteer')

describe('My First Puppeteer Test',()=>{
    it('should launch the browser', async function() {
        const browser = await puppeteer.launch({headless:false, slowMo:250})
        const page = await browser.newPage()
        await page.goto('https://www.youtube.com/')
        await page.waitForSelector('span')
        await page.goto('https://www.sahibinden.com/')
        await page.waitForSelector('span')
        await page.goBack()
        await page.waitForSelector('h1')
        await page.goForward()
        await page.waitForSelector('span')
        await browser.close()     
    })
})
