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

          const nodes = rule.nodes;

          // update style for divide-y
          if (rule.selector.includes("divide-y")) {
            const bottomIndex = nodes.findIndex((node) => node.prop === "border-bottom-width");
            const topIndex = nodes.findIndex((node) => node.prop === "border-top-width");

            if (bottomIndex !== -1) {
              rule.nodes[bottomIndex].prop = "border-top-width";
            }

            if (topIndex !== -1) {
              rule.nodes[topIndex].prop = "border-bottom-width";
            }
          }

          // update style for divide-x
          if (rule.selector.includes("divide-x")) {
            const endIndex = nodes.findIndex((node) => node.prop === "border-left-width");
            const startIndex = nodes.findIndex((node) => node.prop === "border-right-width");

            if (endIndex !== -1) {
              rule.nodes[endIndex].prop = "border-right-width";
            }

            if (startIndex !== -1) {
              rule.nodes[startIndex].prop = "border-left-width";
            }
          }

          // update style for row-gap
          if (rule.selector.includes("row-gap")) {
            console.log("***");
            const endIndex = nodes.findIndex((node) => node.prop === "margin-right");
            const startIndex = nodes.findIndex((node) => node.prop === "margin-left");

            if (endIndex !== -1) {
              rule.nodes[endIndex].prop = "margin-left";
            }

            if (startIndex !== -1) {
              rule.nodes[startIndex].prop = "margin-right";
            }
          }

          // update style for column-gap
          if (rule.selector.includes("column-gap")) {
            console.log("###");
            const bottomIndex = nodes.findIndex((node) => node.prop === "margin-bottom");
            const topIndex = nodes.findIndex((node) => node.prop === "margin-top");

            if (bottomIndex !== -1) {
              rule.nodes[bottomIndex].prop = "margin-top";
            }

            if (topIndex !== -1) {
              rule.nodes[topIndex].prop = "margin-bottom";
            }
          }

          if (rule.selector.includes("space-y")) {
            console.log(rule.selector, rule.nodes);
          }
        }
      });
    },
  };
};

module.exports.postcss = true;
