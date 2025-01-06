module.exports = {
  extends: ['@commitlint/config-conventional'],
  /**
   * example: https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional/index.js
   * rules: https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md
   */
  rules: {
    'body-max-line-length': [2, 'always', Infinity],
  },
  ignores: [
    (message) =>
      message.startsWith('Change files') ||
      message.startsWith('applying package updates'),
  ],
};
