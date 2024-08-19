module.exports = {
  // testEnv to be able to read jsx files
  testEnvironment: "jest-environment-jsdom",
  // this to be able to use the fetch command, with an imported library
  setupFiles: ["./jest.setup.js"],
};
