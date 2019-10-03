module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  "overrides": [
    {
      "files": [
        "**/*.test.js",
        "**/*.test.ts"
      ],
      "env": {
        "jest": true
      }
    }
  ]
}
