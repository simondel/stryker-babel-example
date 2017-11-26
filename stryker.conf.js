module.exports = function(config) {
  config.set({
    files: [
      {
        pattern: "lib/**.js",
        mutated: true,
        included: false,
        transpiled: true
      },
      "test/**.js"
    ],
    testRunner: "mocha",
    mutator: "javascript",
    transpilers: ["babel"],
    reporter: ["html", "clear-text", "progress"],
    testFramework: "mocha",
    coverageAnalysis: "off",
    babelrcFile: ".babelrc",
    maxConcurrentTestRunners: 1
  });
};
