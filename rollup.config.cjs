const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');
const terser = require('@rollup/plugin-terser');

const production = process.env.HANAMI_ENV === 'production';

module.exports = {
  input: 'apps/web/assets/src/javascripts/scripts.js',
  output: {
    file: 'apps/web/assets/dist/javascripts/scripts.js',
    format: 'iife',
    sourcemap: true,
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
    production && terser(), // Minify only in prod
  ],
};
