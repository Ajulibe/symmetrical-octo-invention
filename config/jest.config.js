module.exports = {
  rootDir: "../",
  setupFilesAfterEnv: ["./config/jest.setup.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/styles/__mocks__/styleMock.js",
    "^@pages/(.*)$": "<rootDir>/pages/$1",
    "^@components/(.*)$": "<rootDir>/components/$1"
  },
  verbose: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: ["<rootDir>/test/test-utils.js"]
};
