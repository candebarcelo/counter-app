module.exports = {
  presets: [
    // these are to understand jsx in tests with jest too.
    ["@babel/preset-env", { targets: { esmodules: "true" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
