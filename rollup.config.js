import babel from '@rollup/plugin-babel';
import pkg from './package.json';

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";

export default [{
        input: 'index.d.ts',
        output: {
            file: 'dist/index.d.ts',
            format: 'es'
        },
        plugins: [dts()]
    },
    // browser-friendly UMD build
    {
        input: 'src/main.js',
        output: {
            name: 'passHashGenerator',
            file: pkg.browser,
            format: 'umd'
        },
        plugins: [
            terser()
        ]
    },

    // CommonJS (for Node) and ES module (for bundlers) build.
    // (We could have three entries in the configuration array
    // instead of two, but it's quicker to generate multiple
    // builds from a single configuration where possible, using
    // an array for the `output` option, where we can specify 
    // `file` and `format` for each target)
    {
        input: 'src/main.js',
        external: ['@babel/runtime'],
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' }
        ],
        plugins: [
            babel({
                babelrc: false,
                exclude: 'node_modules/**',
                babelHelpers: 'runtime',
                presets: ['@babel/preset-env'],
                plugins: [
                    ['@babel/plugin-transform-runtime', { useESModules: true }]
                ]
            }),
            resolve(), // so Rollup can find external dependencies
            commonjs(), // so Rollup can convert external dependencies to ES modules
            terser() // minifies generated bundles
        ]
    }
];