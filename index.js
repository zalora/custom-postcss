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

          // const nodes = rule.nodes;

          // // update style for divide-y
          // if (rule.selector.includes("divide-y")) {
          //   const bottomIndex = nodes.findIndex((node) => node.prop === "border-bottom-width");
          //   const topIndex = nodes.findIndex((node) => node.prop === "border-top-width");

          //   if (bottomIndex !== -1) {
          //     rule.nodes[bottomIndex].prop = "border-top-width";
          //   }

          //   if (topIndex !== -1) {
          //     rule.nodes[topIndex].prop = "border-bottom-width";
          //   }
          // }

          // // update style for divide-x
          // if (rule.selector.includes("divide-x")) {
          //   const endIndex = nodes.findIndex((node) => node.prop === "border-inline-end-width");
          //   const startIndex = nodes.findIndex((node) => node.prop === "border-inline-start-width");

          //   if (endIndex !== -1) {
          //     rule.nodes[endIndex].prop = "border-inline-start-width";
          //   }

          //   if (startIndex !== -1) {
          //     rule.nodes[startIndex].prop = "border-inline-end-width";
          //   }
          // }

          // // update style for space-x
          // if (rule.selector.includes("space-x")) {
          //   const endIndex = nodes.findIndex((node) => node.prop === "margin-inline-end");
          //   const startIndex = nodes.findIndex((node) => node.prop === "margin-inline-start");

          //   if (endIndex !== -1) {
          //     rule.nodes[endIndex].prop = "margin-inline-start";
          //   }

          //   if (startIndex !== -1) {
          //     rule.nodes[startIndex].prop = "margin-inline-end";
          //   }
          // }

          // // update style for space-y
          // if (rule.selector.includes("space-y")) {
          //   const bottomIndex = nodes.findIndex((node) => node.prop === "margin-bottom");
          //   const topIndex = nodes.findIndex((node) => node.prop === "margin-top");

          //   if (bottomIndex !== -1) {
          //     rule.nodes[bottomIndex].prop = "margin-top";
          //   }

          //   if (topIndex !== -1) {
          //     rule.nodes[topIndex].prop = "margin-bottom";
          //   }
          // }
        }
      });
    },
  };
};

module.exports.postcss = true;
