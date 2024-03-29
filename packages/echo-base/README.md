![logo](https://raw.githubusercontent.com/equinor/EchoCore/main/doc/ee.png)

# EchoBase

Everything a Echo web need for enabling micro frontend development.

[![Version](https://img.shields.io/npm/v/@equinor/echo-base.svg)](https://npmjs.org/package/@equinor/echo-base)
[![Downloads/week](https://img.shields.io/npm/dw/@equinor/echo-base.svg)](https://npmjs.org/package/@equinor/echo-base)
[![License](https://img.shields.io/npm/l/@equinor/echo-base.svg)](https://github.com/equinor/fusion/blob/master/package.json)
[![Sisze](https://img.shields.io/bundlephobia/min/@equinor/echo-base)](https://npmjs.org/package/@equinor/echo-base)

![@equinor/echo-base](https://badgen.net/bundlephobia/minzip/@equinor/echo-base) ![@equinor/echo-base](https://badgen.net/bundlephobia/min/@equinor/echo-base)
![@equinor/echo-base](https://badgen.net/bundlephobia/dependency-count/@equinor/echo-base)

## Documentation

# What's new

v0.6.0:

-   Fixed error reporting to application insights, it now properly reports all properties including innerErrorsProperties.
-   Fixed `baseError`, it now properly supports nested innerErrors. Exception/inner Error used to overwrite each others property if they had the same name.
-   `BaseError` now has errorTraceId, either from backEnd, or a unique frontEnd id
-   `BaseError` helper methods added for getting properties or propertyByName

It's recommended to create your own error types, extending BaseError, and decorate it with your own fields:

```TS
    export class PdfError extends BaseError {
        docNo: string;
        constructor(args: { message: string; docNo: string; innerError?: Error }) {
            super({ name: 'PdfError', message: args.message, innerError: args.innerError });
            this.docNo = args.docNo;
        }
    }
```

# Breaking Changes

v0.6.0:

-   Renamed `initializeError` to `initializeNetworkError` and simplified it. It now only takes `NetworkErrorArgs` as argument.
-   `BaseError` now properly support nested (and nested-nested) errors with argument `innerError`.  
    Earlier properties with the same name would overwrite each other.  
    `exception` argument renamed to `innerError`, of type `Record<string, unknown> | Error`
-   `BaseError` doesn't add properties directly onto itself anymore, but uses nested errors with argument `innerError`.
-   Instead of `BaseError.allProperties()["someCustomProperty"]` use `BaseError.findPropertyByName("someCustomProperty")`. Since we now use `innerError` of type `Error` or Record<string, unknown>, the property has been moved from baseError[property] to baseError.innerError[property].
-   Moved `EchoEvents` enum to `EchoCore`.
-   Changed types for `EventHub` event keys in all functions from `string | EchoEvents` to `string` only.

v0.5.0:

-   SubClasses of BaseError will not get the name of the class automatically anymore, but have to specify it. This to avoid name obfuscation/minify to a single letter in appInsight.

Example implementation:

```
export class CustomError extends BaseError {
    constructor(args: ErrorArgs) {
        super({ ...args, name: 'CustomError' });
    }
}
```
