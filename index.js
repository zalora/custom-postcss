module.exports = function myPostCSSPlugin() {
  return {
    postcssPlugin: "my-postcss-plugin",
    Once(root) {
      root.walkRules((rule) => {
        console.log(rule, "****\n");
      });
    },
  };
};

module.exports.postcss = true;
