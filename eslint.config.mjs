import rcPreset from '@rightcapital/eslint-config';

const { config } = rcPreset.utils;

export default config(
  {
    ignores: [
      // build output
      'packages/*/lib',
      // Bun script will be linted by bun lint
      'internal-packages/scripts',
    ],
  },
  ...rcPreset.configs.recommended,
);
