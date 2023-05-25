// 網域設定
const ref_host = 'http://localhost:3001'; // 參照
const test_host = 'http://localhost:3001' // 比對


function getPathUrl(group) {
  try {
    // const urls = require('../urls/' + group);
    const path = `../urls/${group}`;
    const routes = path.trim();
    const urls = require(routes);
    let scenarios = [];

    urls.routes.map(config => {
      scenarios.push({
        label: `${config.route}`,
        referenceUrl: `${ref_host}/${config.route}.html`,
        url: `${test_host}/${config.route}.html`,
        readySelector: "",
        delay: 100,
        hideSelectors: [],
        removeSelectors: [],
        hoverSelectors: [],
        selectors: [],
        misMatchThreshold: 0.001,
        requireSameDimendions: true,
      })
    });
    return scenarios;
  } catch(err) {
    console.log('err', err)
  }
}

module.exports = {
  getPathUrl,
};