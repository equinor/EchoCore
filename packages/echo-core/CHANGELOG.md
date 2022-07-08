# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## v0.6.19

- Updated to use latest echo-base 0.6.12.
- Updated nuget packages

## v0.6.18

- Updated to use latest echo-base 0.6.11.

## v0.6.8

### Fix

- Handle rejected echo modules

## v0.6.7

### Added
- Added support for Extensions: now specific, core application components can be extended by Echo Modules during the module setup phase.

## v0.6.0
### Added
-   `setLegendOption()` now also emits `LegendTypeChanged` event on EventHub if the legend type has been changed.
-   `analytics.createAnalyticsModule` now supports static event or error properties
### Breaking changes
See breaking changes for errors in: [@equinor/echo-base](https://github.com/equinor/EchoCore/blob/main/packages/echo-base)
## v0.5.0

### Breaking changes
See breaking changes for errors in: [@equinor/echo-base](https://github.com/equinor/EchoCore/blob/main/packages/echo-base)

-   Errors are not exported through echo-core anymore, but from echo-base. Exporting them from both caused type errors when using instanceof, which caused difficult bug to debug. Import all error types from echo-base instead, BaseError, ToError, NetworkError, etc.

```
import { BaseError, NetworkError, toError } from '@equinor/echo-base';
```

-   BaseClient.fetchWithToken throws error as before if response.ok is false. But the error.message was changed to 'failed response' or 'uncaught exception response' to easier distinguish the error types.


## 0.2.105 (2021-06-15)



## 0.2.105 (2021-06-15)

**Note:** Version bump only for package @equinor/echo-core





## 0.2.105 (2021-06-15)



## 0.2.105 (2021-06-15)

**Note:** Version bump only for package @equinor/echo-core





## 0.2.105 (2021-06-15)



## 0.2.105 (2021-06-15)

**Note:** Version bump only for package @equinor/echo-core





## 0.2.105 (2021-06-11)



## 0.2.105 (2021-06-11)

**Note:** Version bump only for package @equinor/echo-core





## 0.2.105 (2021-06-11)



## 0.2.105 (2021-06-11)

**Note:** Version bump only for package @equinor/echo-core





## 0.3.1 (2021-06-11)



# 0.3.0 (2021-06-11)

**Note:** Version bump only for package @equinor/echo-core





# 0.3.0 (2021-06-11)



## 0.2.105 (2021-06-11)


### Features

* **#43369:** Add procosys project functionality ([#43](https://github.com/equinor/EchoCore/issues/43)) ([90eab7f](https://github.com/equinor/EchoCore/commit/90eab7f549a05ebf27a4ffdf54ff8f16abedfac9)), closes [#43369](https://github.com/equinor/EchoCore/issues/43369)





## 0.2.103 (2021-06-09)



## 0.2.100 (2021-06-09)


### Bug Fixes

* version ([#42](https://github.com/equinor/EchoCore/issues/42)) ([f4f484b](https://github.com/equinor/EchoCore/commit/f4f484b5fcf4c34014d7d503caef438114adf138))





## 0.2.102 (2021-06-09)



## 0.2.100 (2021-06-09)


### Bug Fixes

* update echo-base version ([#41](https://github.com/equinor/EchoCore/issues/41)) ([e3c0228](https://github.com/equinor/EchoCore/commit/e3c022898af693fcd00eeb2f555da927ef5c1fa6))





## 0.2.101 (2021-06-09)



## 0.2.100 (2021-06-09)


### Bug Fixes

* **#42583:** Upload to STID Media ([#40](https://github.com/equinor/EchoCore/issues/40)) ([8044457](https://github.com/equinor/EchoCore/commit/8044457e8150b3fdfa97afd117111be2017f39cb)), closes [#42583](https://github.com/equinor/EchoCore/issues/42583)





## 0.1.4 (2021-04-16)



## 0.1.4 (2021-04-16)

**Note:** Version bump only for package @equinor/echo-core





## 0.1.4 (2021-04-16)



## 0.1.4 (2021-04-16)

**Note:** Version bump only for package @equinor/echo-core
