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

# Breaking Changes

-   v0.5.0: SubClasses of NetworkError will not get the name of the class automatically anymore, but will instead get the parentName if the optional name field is not specified. This to avoid name obfuscation/minify to a single letter in appInsight.
