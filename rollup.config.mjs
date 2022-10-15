import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'apps/web/assets/javascripts/index.js',
  output: {
    file: 'apps/web/assets/javascripts/scripts.js',
    format: 'iife',
  },
  plugins: [nodeResolve(), commonjs(), terser()],
};
