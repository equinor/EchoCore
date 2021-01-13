module.exports = {
    coveragePathIgnorePatterns: ['src/types/*', 'src/index.ts'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!<rootDir>/node_modules/'],
    coverageThreshold: {
        global: {
            lines: 90,
            statements: 90
        }
    }
};
