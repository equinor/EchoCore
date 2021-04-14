module.exports = {
    coveragePathIgnorePatterns: ['packages/types/*', 'packages/index.ts', 'packages/settings/index.ts'],
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
