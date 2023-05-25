module.exports = async (page, scenario, viewport, isReference, browserContext) => {
  await require('./clickAndHoverHelper')(page, scenario);

  // add more ready handlers here...
};
