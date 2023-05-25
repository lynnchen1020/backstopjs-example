
module.exports = {
  id: "",
  viewports: [
    {
      label: "phone",
      width: 320,
      height: 480
    },
    {
      label: "tablet",
      width: 1024,
      "height": 768
    },
    {
      name: "xlarge",
      width: 1440,
      height: 900,
    },
  ],
  scenarios: [],
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
    engine_scripts: "backstop_data/engine_scripts",
    html_report: "backstop_data/html_report",
    ci_report: "backstop_data/ci_report",
  },
  onBeforeScript: "puppet/onBefore.js",
  onReadyScript: "puppet/onReady.js",
  engine: "puppeteer",
  engineOptions: {
    ignoreHTTPSErrors: true,
    args: ["--no-sandbox"]
  },
  report: ["browser"],
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
  scenarioLogsInReports: false,
  openReport: true
};
