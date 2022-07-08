# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## v0.6.12

### Fix

- findPropertyByName & getAllProperties now correctly preserve array. A bug in last version returned is as a dictionary instead. 

## v0.6.11

### Fix

- findPropertyByName & getAllProperties now correctly preserve null/undefined values

## v0.6.10

### Added

- Added echoUtils which contains helper functions:

```TS
const errorUtils: {
    toError: (error: unknown) => BaseError | Error;
    is: {
        error: (err: Error) => err is Error;
        baseError: (error: Error) => error is BaseError;
        networkError: (error: Error) => error is NetworkError;
        backendError: (error: Error) => error is BackendError;
        notFoundError: (error: Error) => error is NotFoundError;
        forbiddenError: (error: Error) => error is ForbiddenError;
        unauthorizedError: (error: Error) => error is UnauthorizedError;
    };
    findPropertyByName: (object: Error | Record<string, unknown>, propertyName: string, deepSearch?: boolean) => unknown;
    getAllProperties: (objectWithProperties: object | Record<string, unknown>, args?: { ignoreEquals?: string[]; ignoreIncludes?: string[] 
    }) => Record<string, unknown>;
}
```

## v0.6.9

### Fix

- findPropertyByName: will now also find negative values as empty string and boolean which is set to false.
- findPropertyByName & getAllProperties: can now take an object as argument, not just error.

## 0.2.105 (2021-06-15)



## 0.2.105 (2021-06-15)

**Note:** Version bump only for package @equinor/echo-base





## 0.2.105 (2021-06-15)



## 0.2.105 (2021-06-15)

**Note:** Version bump only for package @equinor/echo-base





## 0.2.105 (2021-06-15)



## 0.2.105 (2021-06-15)

**Note:** Version bump only for package @equinor/echo-base





## 0.2.105 (2021-06-11)



## 0.2.105 (2021-06-11)

**Note:** Version bump only for package @equinor/echo-base





## 0.2.105 (2021-06-11)



## 0.2.105 (2021-06-11)

**Note:** Version bump only for package @equinor/echo-base





## 0.3.1 (2021-06-11)



# 0.3.0 (2021-06-11)

**Note:** Version bump only for package @equinor/echo-base





# 0.3.0 (2021-06-11)



## 0.2.105 (2021-06-11)


### Features

* **#43369:** Add procosys project functionality ([#43](https://github.com/equinor/EchoCore/issues/43)) ([90eab7f](https://github.com/equinor/EchoCore/commit/90eab7f549a05ebf27a4ffdf54ff8f16abedfac9)), closes [#43369](https://github.com/equinor/EchoCore/issues/43369)





## 0.2.100 (2021-06-09)



## 0.2.100 (2021-06-09)


### Bug Fixes

* version ([#42](https://github.com/equinor/EchoCore/issues/42)) ([f4f484b](https://github.com/equinor/EchoCore/commit/f4f484b5fcf4c34014d7d503caef438114adf138))





## 0.2.99 (2021-06-09)



## 0.2.100 (2021-06-09)


### Bug Fixes

* update echo-base version ([#41](https://github.com/equinor/EchoCore/issues/41)) ([e3c0228](https://github.com/equinor/EchoCore/commit/e3c022898af693fcd00eeb2f555da927ef5c1fa6))





## 0.2.98 (2021-06-09)



## 0.2.100 (2021-06-09)


### Bug Fixes

* **#42583:** Upload to STID Media ([#40](https://github.com/equinor/EchoCore/issues/40)) ([8044457](https://github.com/equinor/EchoCore/commit/8044457e8150b3fdfa97afd117111be2017f39cb)), closes [#42583](https://github.com/equinor/EchoCore/issues/42583)





## 0.1.2 (2021-04-16)

## 0.1.4 (2021-04-16)

**Note:** Version bump only for package @equinor/echo-base

## 0.1.1 (2021-04-16)
