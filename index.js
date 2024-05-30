module.exports = function myPostCSSPlugin() {
  return {
    postcssPlugin: "my-postcss-plugin",
    Rule(rule) {
      if (rule.selector.includes("[hidden]")) {
        console.log(rule);
      }
    },
  };
};

module.exports.postcss = true;
