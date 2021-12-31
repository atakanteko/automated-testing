const puppeteer = require('puppeteer')

describe('My First Puppeteer Test',()=>{
    it('should launch the browser', async function() {
        const browser = await puppeteer.launch({headless:false, slowMo:500})
        const page = await browser.newPage()
        await page.goto('https://www.youtube.com/')
        await page.waitForSelector('span')
        await page.waitForTimeout(1000) // pausing the test 
        await browser.close()     
    })
})
