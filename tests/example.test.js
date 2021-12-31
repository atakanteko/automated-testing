const puppeteer = require('puppeteer')

describe('My First Puppeteer Test',()=>{
    it('should launch the browser', async function() {
        const browser = await puppeteer.launch({headless:false, slowMo:250})
        const page = await browser.newPage()
        await page.goto('https://devexpress.github.io/testcafe/example/')
        await page.type('#developer-name', 'Atakan')
        await page.waitForTimeout(3000) // pausing the test 
        await browser.close()
    })
})
