module.exports = function myPostCSSPlugin() {
  return {
    postcssPlugin: "my-postcss-plugin",
    Once(root) {
      // Iterate over each rule in the CSS
      root.walkRules((rule) => {
        // Check if the rule selector matches the overrides
        if (rule.selector.includes("[hidden]")) {
          rule.selector = rule.selector.replace(
            ":not([hidden]) ~ :not([hidden])",
            ":not(:last-child)"
          );
        }
      });
    },
  };
};

module.exports.postcss = true;
