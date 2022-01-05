export interface BaseErrorArgs extends ErrorArgs {
    name: string;
}

export interface ErrorArgs {
    message: string;
    innerError?: Record<string, unknown> | Error;
}

export interface CommonErrorArgs {
    [key: string]: unknown;
}

export interface BaseErrorProps extends Error {
    hasBeenLogged: boolean;
}
