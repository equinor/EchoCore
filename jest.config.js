module.exports = {
    coveragePathIgnorePatterns: [
        'packages/echo-core/src/types/*',
        'packages/echo-core/src/index.ts',
        'packages/echo-core/dist/*',
        'packages/echo-core/src/settings/index.ts',
        'packages/echo-core/docs/*',
        'packages/echo-base/src/types/*',
        'packages/echo-base/src/index.ts',
        'packages/echo-base/esm/*',
        'packages/echo-base/lib/*'
    ],
    collectCoverageFrom: ['packages/**/*.{js,jsx,ts,tsx}', '!<rootDir>/node_modules/'],
    coverageThreshold: {
        global: {
            lines: 90,
            statements: 90
        }
    },
    globals: {
        crypto: require('crypto')
    }
};
