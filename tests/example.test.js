const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('My First Puppeteer Test',()=>{
    it('should launch the browser', async function() {
        const browser = await puppeteer.launch({
            headless:true, 
            slowMo:250
        })
        const page = await browser.newPage()
        await page.setViewport({ width: 1280, height: 800 })
        await page.goto('https://devexpress.github.io/testcafe/example/')

        const title = await page.title();
        const url   = await page.url();

        const text = await page.$eval('#tried-section > label',el => el.textContent)
        const numOfParagraph = await page.$$eval('p',element => element.length)
     
        expect(title).to.be.a('string','TestCafe Example Page')
        expect(url).to.include('devexpress.github.io')
        expect(text).to.be.a('string','I have tried TestCafe')
        expect(numOfParagraph).to.equal(9)
        await browser.close()
    })
})
