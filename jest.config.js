module.exports = {
  roots: ["<rootDir>/src"],
  // transform: {
  //   "^.+\\.tsx?$": "ts-jest"
  // },
  verbose: true,
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(j|t)sx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      diagnostics: {
        warnOnly: true
      }
    }
  },
  moduleNameMapper: {
    "^.+\\.(scss|css|svg|png|sass)$": "identity-obj-proxy"
  },
  testEnvironment: "jsdom",

  // Setup Enzyme
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupTestFrameworkScriptFile: "<rootDir>/src/setupEnzyme.ts"
};