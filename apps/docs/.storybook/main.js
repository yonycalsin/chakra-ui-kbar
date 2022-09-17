const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, { configType }) {

    // https://github.com/eirslett/storybook-builder-vite/issues/55
    config.root = path.dirname(require.resolve("@storybook/builder-vite"));

    config.server.fsServe = undefined;
    
    // customize the Vite config here
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@chakra-ui-kbar/core",
            replacement: path.resolve(
              __dirname,
              "../../../packages/chakra-ui-kbar-core/"
            ),
          },
        ],
      },
    };
  },
};
