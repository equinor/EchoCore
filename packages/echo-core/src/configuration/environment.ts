export function isDevelopment(): boolean {
    return process.env.NODE_ENV === 'development';
}

export function isProduction(): boolean {
    return !isDevelopment();
}

let environmentVariableInstance: EnvironmentVariables | undefined;

//setupTests.js mocks this variable, if changed, be sure to update here as well
export interface EnvironmentVariables {
    GENERATE_SOURCEMAP: boolean | string;
    INLINE_RUNTIME_CHUNK: boolean | string;
    REACT_APP_DEFAULT_CACHE_LOCATION: string;
    REACT_APP_LOGGER_ACTIVE: boolean | string;
    REACT_APP_API_URL: string;
    REACT_APP_AZURE_AD_TENNANT: string;
    REACT_APP_AZURE_AD_TENNANT_ID: string;
    REACT_APP_AZURE_AD_CLIENT_ID: string;
    REACT_APP_API_CLIENT_ID: string;
    REACT_APP_APPINSIGHTS_INSTRUMENTATIONKEY: string;
    REACT_APP_AZURE_BUILD_NUMBER: string;
}

const echoEnv = {
    GENERATE_SOURCEMAP: process.env.GENERATE_SOURCEMAP,
    INLINE_RUNTIME_CHUNK: process.env.INLINE_RUNTIME_CHUNK,
    REACT_APP_DEFAULT_CACHE_LOCATION: process.env.REACT_APP_DEFAULT_CACHE_LOCATION,
    REACT_APP_LOGGER_ACTIVE: process.env.REACT_APP_LOGGER_ACTIVE,
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    REACT_APP_AZURE_AD_TENNANT: process.env.REACT_APP_AZURE_AD_TENNANT,
    REACT_APP_AZURE_AD_TENNANT_ID: process.env.REACT_APP_AZURE_AD_TENNANT_ID,
    REACT_APP_AZURE_AD_CLIENT_ID: process.env.REACT_APP_AZURE_AD_CLIENT_ID,
    REACT_APP_API_CLIENT_ID: process.env.REACT_APP_API_CLIENT_ID,
    REACT_APP_APPINSIGHTS_INSTRUMENTATIONKEY: process.env.REACT_APP_APPINSIGHTS_INSTRUMENTATIONKEY,
    REACT_APP_AZURE_BUILD_NUMBER: process.env.REACT_APP_AZURE_BUILD_NUMBER
};

//seems like window._env_ is not available in a worker
//setupTests.js mocks this variable, if changed, be sure to update here as well
export const env = (): EnvironmentVariables => {
    if (!environmentVariableInstance) {
        environmentVariableInstance = window?._env_ ?? echoEnv;
    }
    return environmentVariableInstance;
};

export function setEnv(environmentVariables: EnvironmentVariables): void {
    environmentVariableInstance = environmentVariables;
}