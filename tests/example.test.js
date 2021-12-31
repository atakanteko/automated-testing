const puppeteer = require('puppeteer')

describe('My First Puppeteer Test',()=>{
    it('should launch the browser', async function() {
        const browser = await puppeteer.launch({headless:true, slowMo:250})
        const page = await browser.newPage()
        await page.setViewport({ width: 1280, height: 800 })
        await page.goto('https://devexpress.github.io/testcafe/example/')
        const title = await page.title();
        const url   = await page.url();
        console.log(`Title: ${title} Url: ${url}`);
        const text = await page.$eval('#tried-section > label',el => el.textContent)
        console.log('Text in the fieldset:', text);
        //eval with only one $ sign returns single element
        const numOfParagraph = await page.$$eval('p',element => element)
        console.log('numOfParagraph in the div:', numOfParagraph);

        //eval with only one $$ sign returns multiple elements

        await browser.close()
    })
})
