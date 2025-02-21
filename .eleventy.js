module.exports = function (eleventyConfig) {
  // Copier les fichiers statiques vers "dist"
  eleventyConfig.addPassthroughCopy("src/assets/css/styles.css");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/script.js");

  // Copier les projets (y compris les images qu'ils contiennent)
  eleventyConfig.addPassthroughCopy("src/projects");

  // Créer une collection "projets" avec les fichiers index.md dans "projects"
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
