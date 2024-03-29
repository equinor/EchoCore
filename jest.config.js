module.exports = {
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        'index.ts',
        'packages/echo-core/src/types/*',
        'packages/echo-core/src/index.ts',
        'packages/echo-core/dist/*',
        'packages/echo-core/src/settings/index.ts',
        'packages/echo-core/docs/*',
        'packages/echo-base/src/types/*',
        'packages/echo-base/src/index.ts',
        'packages/echo-base/docs/*',
        'packages/echo-base/esm/*',
        'packages/echo-base/lib/*',
        'packages/echo-base/src/errors/network*'
    ],
    modulePathIgnorePatterns: ['.yalc'],
    collectCoverageFrom: ['packages/**/*.{js,jsx,ts,tsx}', '!<rootDir>/node_modules/'],
    coverageThreshold: {
        global: {
            lines: 90,
            statements: 90
        }
    },
    setupFilesAfterEnv: ['./packages/echo-core/setupTests.js'],
    globals: {
        crypto: require('crypto'),
        _babelPluginPolyfillCorejs2: require('babel-plugin-polyfill-corejs3'),
        _babelPluginPolyfillRegenerator: require('babel-plugin-polyfill-regenerator')
    }
};
