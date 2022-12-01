import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
import tslibResolveId from 'rollup-plugin-tslib-resolve-id';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import ts2 from 'rollup-plugin-typescript2';

const extensions = ['.jsx', '.js', '.tsx', '.ts'];
export default [
    {
        input: ['./src/index.ts'],
        output: {
            dir: 'dist',
            format: 'cjs',
            exports: 'named'
        },
        external: ['react', 'react-dom', 'react-router-dom', '@equinor/echo-base', '@azure/msal-browser'],
        plugins: [
            // multi({ preserveModules: true }),
            tslibResolveId(),
            del({ targets: 'dist/*', runOnce: true }),
            ts2(),
            typescriptPaths(),
            babel({
                babelrc: false,
                babelHelpers: 'bundled',
                presets: [['@babel/preset-env', { modules: false }], ['@babel/preset-react']],
                extensions,
                exclude: 'node_modules/**'
            }),
            commonjs(),
            nodeResolve()
        ]
    },
    {
        input: ['./src/logger.ts'],
        output: {
            dir: 'dist',
            format: 'cjs',
            exports: 'named'
        },
        external: ['react', 'react-dom', 'react-router-dom', '@equinor/echo-base', '@azure/msal-browser'],
        plugins: [
            tslibResolveId(),
            ts2(),
            typescriptPaths(),
            babel({
                babelrc: false,
                babelHelpers: 'bundled',
                presets: [['@babel/preset-env', { modules: false }], ['@babel/preset-react']],
                extensions,
                exclude: 'node_modules/**'
            }),
            commonjs(),
            nodeResolve()
        ]
    }
];
