var webpack = require("webpack");

module.exports = require("./webpack.config.js");

delete module.exports.devtool;

module.exports.plugins.push(
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify("production")
  })
);

module.exports.module.rules.forEach(rule => {
  delete rule.exclude;
  return rule;
});
