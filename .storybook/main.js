module.exports = {
  stories: [
    "../src/**/*.stories.(js|mdx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/components/*.stories.(js|mdx)",
    "../src/styles/*.stories.(js|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/addon-viewport",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
