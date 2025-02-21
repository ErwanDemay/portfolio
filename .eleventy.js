module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/css/styles.css");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/script.js"); // Ajout du script
  eleventyConfig.addCollection("projets", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/**/index.md");
  });
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist",
      data: "_data",
    },
  };
};
