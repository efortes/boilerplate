const path = require("path");
const webpackConfig = require("./webpack.config");

module.exports = (env, args) => {
    const config = webpackConfig(env, args);

    // also output test file for testing
    Object.assign(config.entry, {
        preview: path.resolve(__dirname, "src/preview.js")
    });

    // re-use parent project modules
    config.externals = {};

    // remove output module.export / common js output
    delete config.output.libraryTarget;

    return config;
};
