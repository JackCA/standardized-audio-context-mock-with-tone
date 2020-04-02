// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const esModules = ["tone", "standardized-audio-context-mock"].join("|");

module.exports = {
  clearMocks: true,
  transformIgnorePatterns: [`./node_modules/(?!${esModules})`],

  moduleNameMapper: {
    "^standardized-audio-context$":
      "<rootDir>/node_modules/standardized-audio-context-mock",
    "^tone$": "<rootDir>/node_modules/tone/build/esm",
  },
};
