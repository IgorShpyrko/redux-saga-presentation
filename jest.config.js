const { defaults } = require('jest-config');

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
// The paths to modules that run some code to configure
// or set up the testing environment before each test
  setupFiles: ['<rootDir>/enzyme.config.js'],
  roots: [
    "<rootDir>/src",
  ],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.css$': 'jest-transform-css'
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleNameMapper": {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  },
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    "ts",
    "tsx",
  ],
};
