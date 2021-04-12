import { AvailableDependencies } from '@equinor/echo-base';

export const globalDependencies: AvailableDependencies = {
    react: require('react'),
    'react-dom': require('react-dom'),
    '@equinor/echo-core': require('@equinor/echo-core'),
    '@equinor/echo-framework': require('@equinor/echo-framework'),
    '@equinor/echo-components': require('@equinor/echo-components'),
    '@equinor/echo-utils': require('@equinor/echo-utils')
};
