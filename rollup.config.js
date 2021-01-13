import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import del from 'rollup-plugin-delete';
import dt from 'rollup-plugin-dts';
import resolve from 'rollup-plugin-node-resolve';
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
        external: ['react', 'react-dom'],
        plugins: [
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
                    '@dbeining/react-atom': ['Atom', 'useAtom', 'deref', 'swap']
                }
            }),
            resolve()
        ]
    },
    {
        input: pkg.source,
        output: [
            {
                file: pkg.types,
                format: 'es'
            }
        ],
        plugins: [dt()]
    }
];
