module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-chakra-ui-kbar`
  extends: ["chakra-ui-kbar"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
