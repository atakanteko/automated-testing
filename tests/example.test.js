const puppeteer = require('puppeteer')

describe('My First Puppeteer Test',()=>{
    it('should launch the browser', async function() {
        const browser = await puppeteer.launch({headless:false, slowMo:250})
        const page = await browser.newPage()
        await page.setViewport({ width: 1280, height: 800 })
        await page.goto('https://devexpress.github.io/testcafe/example/')
        await page.type('#developer-name', 'Atakan')
        await page.click('#tried-test-cafe',{clickCount:1})
        await page.select('select#preferred-interface','JavaScript API')
        await page.type('#comments','Hello Puppeteer')
        await page.click('#submit-button')
        await page.waitForSelector('.result-content')
        await page.waitForTimeout(3000)
        await browser.close()
    })
})
