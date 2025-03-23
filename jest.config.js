module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/coverage",
    "<rootDir>/dist"
  ],
  moduleDirectories: ["<rootDir>/node_modules", "<rootDir>/src"],
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
    "@lib/(.*)$": "<rootDir>/lib/$1",
    "@utils/(.*)$": "<rootDir>/utils/$1",
    "@styles/(.*)$": "<rootDir>/src/styles/$1",
    "@pages/(.*)$": "<rootDir>/pages/$1",
    "@config/(.*)$": "<rootDir>/config/$1",
    "@assets/(.*)$": "<rootDir>/assets/$1",
    "@framework/*": "<rootDir>/framework/$1",
    "@components/(.*)$": "<rootDir>/src/components/$1",
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$": "<rootDir>/__mocks__/fileMock.js"
  },
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  verbose: true,
  collectCoverage: true
};
