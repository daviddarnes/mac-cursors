module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/svg/**.*");
  eleventyConfig.addPassthroughCopy("src/png/**.*");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");
  eleventyConfig.addPassthroughCopy("src/background.jpg");

  return {
    dir: {
      input: "src",
      output: "dist"
    },
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
