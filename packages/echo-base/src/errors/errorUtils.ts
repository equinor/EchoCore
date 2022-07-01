import { BaseError, findPropertyByName, getAllProperties } from './BaseError';
import { BackendError, ForbiddenError, NetworkError, NotFoundError, UnauthorizedError } from './NetworkError';
import { toError } from './toError';

const is = {
    error: isError,
    baseError: isBaseError,
    networkError: isNetworkError,
    backendError: isBackendError,
    notFoundError: isNotFoundError,
    forbiddenError: isForbiddenError,
    unauthorizedError: isUnauthorizedError
};

export const errorUtils = {
    toError,
    is,
    findPropertyByName,
    getAllProperties
};

// instanceOf does not work if the error was thrown in another module, instead we compare by known properties such as httpStatusCode or errorClass.name
// also see: https://medium.com/@samjwright/why-is-instanceof-my-object-returning-false-in-typescript-fec74df5c2a8

function isError(err: Error): err is Error {
    return typeof err === 'object' && !!err && 'message' in err && 'name' in err;
}

function isBaseError(error: Error): error is BaseError {
    const hasBeenLoggedValue = findPropertyByName(error, 'hasBeenLogged');
    return isError(error) && hasBeenLoggedValue !== undefined;
}

function isNetworkError(error: Error): error is NetworkError {
    const httpStatusCode = findPropertyByName(error, 'httpStatusCode');
    return isNetworkErrorByHttpCode(httpStatusCode) || error.name === NetworkError.name;
}

function isBackendError(error: Error): error is BackendError {
    const httpStatusCode = findPropertyByName(error, 'httpStatusCode');
    return isServerResponseByHttpCode(httpStatusCode) || error.name === BackendError.name;
}

function isForbiddenError(error: Error): error is ForbiddenError {
    const httpStatusCode = findPropertyByName(error, 'httpStatusCode');
    return httpStatusCode === 403 || error.name === ForbiddenError.name;
}

function isUnauthorizedError(error: Error): error is UnauthorizedError {
    const httpStatusCode = findPropertyByName(error, 'httpStatusCode');
    return httpStatusCode === 401 || error.name === UnauthorizedError.name;
}

function isNotFoundError(error: Error): error is NotFoundError {
    const httpStatusCode = findPropertyByName(error, 'httpStatusCode');
    return httpStatusCode === 404 || error.name === NotFoundError.name;
}

function isServerResponseByHttpCode(httpStatusCode: number | unknown): boolean {
    return httpStatusCode > 0;
}

function isNetworkErrorByHttpCode(httpStatusCode: number | unknown): boolean {
    return httpStatusCode >= 0;
}
