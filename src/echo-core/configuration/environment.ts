export function isDevelopment(): boolean {
    return process.env.NODE_ENV === 'development';
}

export function isProduction(): boolean {
    return !isDevelopment();
}

let environmentVariableInstance: EnvironmentVariables | undefined;

//setupTests.js mocks this variable, if changed, be sure to update here as well
export interface EnvironmentVariables {
    GENERATE_SOURCEMAP: boolean;
    INLINE_RUNTIME_CHUNK: boolean;
    REACT_APP_DEFAULT_CACHE_LOCATION: string;
    REACT_APP_LOGGER_ACTIVE: boolean;
    REACT_APP_API_URL: string;
    REACT_APP_AZURE_AD_TENNANT: string;
    REACT_APP_AZURE_AD_TENNANT_ID: string;
    REACT_APP_AZURE_AD_CLIENT_ID: string;
    REACT_APP_API_CLIENT_ID: string;
    REACT_APP_APPINSIGHTS_INSTRUMENTATIONKEY: string;
    REACT_APP_AZURE_BUILD_NUMBER: string;
}
//seems like window._env_ is not available in a worker
//setupTests.js mocks this variable, if changed, be sure to update here as well
export const env = (): EnvironmentVariables => {
    if (!environmentVariableInstance) {
        environmentVariableInstance = window?._env_ ?? process.env;
    }
    return environmentVariableInstance;
};

export function setEnv(environmentVariables: EnvironmentVariables): void {
    environmentVariableInstance = environmentVariables;
}
