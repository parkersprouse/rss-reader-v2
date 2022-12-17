const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');
const terser = require('@rollup/plugin-terser');

const config = {
  input: 'apps/web/assets/src/javascripts/scripts.js',
  output: {
    file: 'apps/web/assets/dist/javascripts/scripts.js',
    format: 'iife',
  },
  plugins: [
    nodeResolve(),
    json(),
    commonjs(),
    replace({
      preventAssignment: true,
      values: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};

if (process.env.HANAMI_ENV === 'production') {
  config.plugins.push(terser({
    sourceMap: {
      url: 'inline',
    },
  }));
}

module.exports = config;
