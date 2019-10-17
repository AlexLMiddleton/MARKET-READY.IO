// import lighthouse from 'lighthouse'
// import chromeLauncher from 'chrome-launcher'

// function launchChromeAndRunLighthouse(url, opts, config = null) {
//   return chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
//     opts.port = chrome.port;
//     return lighthouse(url, opts, config).then(results => {
//       return chrome.kill().then(() => results.lhr)
//     });
//   });
// }

// const opts = {
//   chromeFlags: ['--show-paint-rects']
// };

// // Usage:
// launchChromeAndRunLighthouse('http://www.examplewebsiteURL.com', opts).then(results => {
//   console.log('Performance: ', results.categories.performance.score * 100)
//   console.log('Accessibility: ', results.categories.accessibility.score * 100)
//   console.log('Best Practices: ', results.categories['best-practices'].score * 100)
//   console.log('SEO: ', results.categories.seo.score * 100)
// });
