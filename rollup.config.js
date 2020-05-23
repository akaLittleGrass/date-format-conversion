import resolve from '@rollup/plugin-node-resolve'; 
import typescript from '@rollup/plugin-typescript';
import { uglify } from "rollup-plugin-uglify";

const extensions = ['.ts', '.tsx'];
export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'dateFormatter',
  },
  plugins: [
    resolve({
      extensions
    }),
    typescript(),
    uglify({})
  ],
};