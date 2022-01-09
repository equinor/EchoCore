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

# Breaking Changes

v0.6.0:

-   Renamed `initializeError` to `initializeNetworkError` and simplified it. It now only takes `NetworkErrorArgs` as argument.
-   `BaseError` now properly support nested (and nested-nested) errors with argument `innerError`.  
    Earlier properties with the same name would overwrite each other.  
    `exception` argument renamed to `innerError`, of type `Record<string, unknown> | Error`

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
