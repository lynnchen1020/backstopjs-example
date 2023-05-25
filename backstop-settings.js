
const story = process.env.STORY

if (!story) {
  console.info("未指定環境參數[STORY]");
  process.exit(1);
}

const { createStory } = require('./config/scenario');

module.exports = createStory(story);
