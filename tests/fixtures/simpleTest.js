module.exports = {
  'Github Repositories Navigation': function (browser) {
    browser
      .url('https://github.com/mezderman', function () {
        console.log('go to url')
      })
      .getValue('body', function (result) {
        console.log('got body')
      })
      .saveScreenshot('reports/screenshots/github.png', function (data) {
        console.log('image saved')
        browser.url('http://www.google.com')
      })
      .perform((browser, done) => {
        console.log('end')
        browser.end()
        done()
      })
  }
}
