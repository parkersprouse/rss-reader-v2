import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'apps/web/assets/src/javascripts/input.js',
  output: {
    file: 'apps/web/assets/dist/javascripts/output.js',
    format: 'iife',
  },
  plugins: [nodeResolve(), commonjs(), terser()],
};
