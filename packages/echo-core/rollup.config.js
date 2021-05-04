import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import del from 'rollup-plugin-delete';
import tslibResolveId from 'rollup-plugin-tslib-resolve-id';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import ts2 from 'rollup-plugin-typescript2';
import pkg from './package.json';

const extensions = ['.jsx', '.js', '.tsx', '.ts'];
export default [
    {
        input: pkg.source,
        output: {
            file: pkg.main,
            format: 'cjs',
            exports: 'named'
        },
        external: ['react', 'react-dom', 'react-router', '@equinor/echo-base', '@azure/msal-browser'],
        plugins: [
            tslibResolveId(),
            del({ targets: 'dist/*', runOnce: true }),
            ts2(),
            typescriptPaths(),
            babel({
                babelrc: false,
                presets: [['@babel/preset-env', { modules: false }], ['@babel/preset-react']],
                extensions,
                exclude: 'node_modules/**'
            }),
            commonjs({
                namedExports: {
                    '@dbeining/react-atom': ['Atom', 'useAtom', 'deref', 'swap'],
                    tslib: ['__awaiter', '__rest']
                }
            }),
            nodeResolve()
        ]
    }
    // {
    //     input: pkg.source,
    //     output: [
    //         {
    //             file: pkg.types,
    //             format: 'es'
    //         }
    //     ],
    //     plugins: [dt()]
    // }
];
