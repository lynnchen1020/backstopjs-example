const BackStopDefaultConfig = require("./base.config");
const { getPathUrl } = require('../paths');

function createStory(group) {
  const scenarios = getPathUrl(group)
  const configuration = Object.assign(BackStopDefaultConfig, {
    scenarios,
    paths: {
      bitmaps_reference: "backstop_data/bitmaps_reference/" + group,
      bitmaps_test: "backstop_data/bitmaps_test/" + group,
      engine_scripts: "backstop_data/engine_scripts",
      html_report: "backstop_data/html_report/" + group,
      ci_report: "backstop_data/ci_report",
    },
  });

  console.log('configuration===>', configuration)

  return configuration;
}

module.exports = {
  createStory,
};
