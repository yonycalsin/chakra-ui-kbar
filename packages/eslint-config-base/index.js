module.exports = {
  extends: ['next', 'prettier', 'plugin:@yonycalsin/import-sort/react'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
  },
}
