// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
const postcss = require('rollup-plugin-postcss');

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      })
    );
    return config;
  },
};
