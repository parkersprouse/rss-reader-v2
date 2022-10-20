import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'apps/web/assets/src/javascripts/scripts.js',
  output: {
    file: 'apps/web/assets/dist/javascripts/scripts.js',
    format: 'iife',
  },
  plugins: [nodeResolve(), commonjs(), terser()],
};
