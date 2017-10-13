const expect = require("chai").expect;
const assert = require("chai").assert;
const puppeteer = require('puppeteer');

describe('Pupppps', function() {
  before(async function() {
    this.browser = await puppeteer.launch({headless: false});
    this.page = await this.browser.newPage();
  });

  describe('Startup', function() {
    it('should start', async function() {
      assert.equal("object", typeof this.browser);
    });
  });

  describe('In Browser', function() {
    it('url should be blank', async function() {
      let url = await this.page.evaluate(() => location.href);
      expect(url).to.include('about:blank')
    });

    it('url should have example.com', async function() {
      await this.page.goto('http://example.com');
      let url = await this.page.evaluate(() => location.href);
      expect(url).to.include('example.com')
    });
  });

  after(async function() {
    await this.browser.close();
    process.exit(0);
  });
});
