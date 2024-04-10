import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';
import pkg from './package.json' assert { type: 'json' };
import scss from 'rollup-plugin-scss';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { dts } from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const fontFileExtensions = ['**/*.woff', '**/*.woff2'];

const globals = {
  classnames: 'classnames',
  react: 'react',
  'react-dom': 'react-dom',
  'react/jsx-runtime': 'jsxRuntime',
};

// Variable name in the iife
const name = 'ReactPokemonCard';

export default [
  {
    input: './src/index.ts',
    plugins: [
      peerDepsExternal(),

      scss({
        processor: () => postcss([autoprefixer()]),
        fileName: pkg.css,
        failOnError: true,
        // prefix: '@use "./src/styles";',
      }),

      // By default, @rollup/plugin-url will not handle font files
      url({
        include: fontFileExtensions,
        // setting infinite limit will ensure that the files
        // are always bundled with the code, not copied to /dist
        limit: Infinity,
      }),

      // Allows node_modules resolution
      resolve({
        extensions,
        browser: true,
        dedupe: ['react', 'react-dom'],
      }),

      // Allow bundling cjs modules. Rollup doesn't understand cjs
      commonjs(),

      // Converts .json files to ES6 modules
      json(),

      // Compile TypeScript/JavaScript files
      typescript({ tsconfig: './tsconfig.json' }),

      // Copy package.json to dist for module bundle
      copy({
        targets: [
          { src: 'package.json', dest: 'dist' },
          { src: 'README.md', dest: 'dist' },
          { src: 'src/assets/*', dest: 'dist/assets' },
          { src: 'src/common/scss/*', dest: 'dist/scss' },
        ],
      }),
    ],

    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        name: 'bootstrap-ui-kit',
        globals,
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.scss$/],
    plugins: [image(), dts()],
  },
];
