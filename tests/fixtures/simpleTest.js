module.exports = {
  'Github Repositories Navigation': function (browser) {
    browser
      .url('https://github.com/mezderman')
      .saveScreenshot('reports/screenshots/github.png', function (data) {
        console.log('image saved')
        browser.url('http://www.google.com')
      })

    browser.perform((browser, done) => {
      console.log('end')
      browser.end()
      done()
    })
  }
}
