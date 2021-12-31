const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('My First Puppeteer Test',()=>{
    let browser
    let page

    before(async function() {
        browser = await puppeteer.launch({
            headless:false, 
            slowMo:250,

        })
        page = await browser.newPage()
        await page.setViewport({ width: 1280, height: 800 })
    })

    after(async function() {
        await browser.close()
    })

    it('should launch the browser', async function() {
        
        //await page.goto('https://devexpress.github.io/testcafe/example/')

        //const title = await page.title();
        //const url   = await page.url();

        //const text = await page.$eval('#tried-section > label',el => el.textContent)
        //const numOfParagraph = await page.$$eval('p',element => element.length)
     
        //expect(title).to.be.a('string','TestCafe Example Page')
        //expect(url).to.include('devexpress.github.io')
        //expect(text).to.be.a('string','I have tried TestCafe')
        //expect(numOfParagraph).to.equal(9)

        //await page.goto('https://www.sahibinden.com/')
        //await page.type('#searchText','opel')
        //await page.keyboard.press('Enter', {delay:10})
        //await page.waitForTimeout(3000)

        await page.goto('https://devexpress.github.io/testcafe/example/')
        await page.waitForSelector('#developer-name')
        await page.type('#developer-name','Ata')
        await page.waitForSelector('#tried-test-cafe')
        await page.click('#tried-test-cafe')
        await page.waitForSelector('#comments')
        await page.type('#comments','Hello puppeteer!')
        await page.click('#submit-button')
        await page.waitForSelector('#submit-button',{hidden:true,timeout:3000})
        
    })
})
