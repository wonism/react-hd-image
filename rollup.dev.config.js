import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import replace from 'rollup-plugin-replace';
import path from 'path';

import pkg from './package.json';

const config = {
  input: './demo-dev/index.tsx',
  output: [{
    file: './demo/bundle.js',
    format: 'iife',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'styled-components': 'styled',
    },
  }],
  external: [
    ...Object.keys(pkg.peerDependencies),
    'styled-components',
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.dev.json'),
    }),
    babel(),
    commonjs({
      include: /node_modules/,
      sourceMap: false,
    }),
    serve('demo'),
    livereload({
      watch: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'demo'),
        path.resolve(__dirname, 'demo-dev'),
      ],
      exts: ['html', 'js', 'tsx', 'ts'],
      verbose: true,
    }),
  ],
};

export default config;
