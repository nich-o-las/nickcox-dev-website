module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    dir: {
      input: "pages",
    },
    pathPrefix: "/nickcox-dev-website/",
  };
};
