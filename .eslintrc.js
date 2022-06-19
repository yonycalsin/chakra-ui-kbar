module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@chakra-ui-kbar/eslint-config-base`
  extends: ['@chakra-ui-kbar/base'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
