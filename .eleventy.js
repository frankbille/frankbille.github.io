const CleanCSS = require("clean-css");
const moment = require("moment");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const emojiReadTime = require("@11tyrocks/eleventy-plugin-emoji-readtime");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(emojiReadTime, { showEmoji: false, wpm: 200 });

  eleventyConfig.addLayoutAlias("main", "layouts/main.njk");
  eleventyConfig.addLayoutAlias("index", "layouts/index.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("keybase.txt");

  eleventyConfig.addFilter("debug", function (json) {
    return JSON.stringify(json, null, 4);
  });
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({ level: 2 }).minify(code).styles;
  });
  eleventyConfig.addFilter("dateIso", (date) => {
    return moment(date).format("YYYY-MM-DD");
  });
  eleventyConfig.addFilter("dateReadable", (date) => {
    return moment(date).utc().format("LL");
  });
};
