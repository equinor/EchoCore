# EchoCore

Everything a Echo app needs to communicate with the core.

[![Version](https://img.shields.io/npm/v/@equinor/echo-core.svg)](https://npmjs.org/package/@equinor/echo-core)
[![Downloads/week](https://img.shields.io/npm/dw/@equinor/echo-core.svg)](https://npmjs.org/package/@equinor/echo-core)
[![License](https://img.shields.io/npm/l/@equinor/echo-core.svg)](https://github.com/equinor/fusion/blob/master/package.json)
[![Sisze](https://img.shields.io/bundlephobia/min/@equinor/echo-core)](https://npmjs.org/package/@equinor/echo-core)

/bundlephobia/:format/:packageName

-   [EchoCore](#echocore)
-   [Install](#install)
    -   [NPM](#npm)

# Install

### NPM

```sh-session
$ npm install @equinor/echo-core --save
```

# Development

First time usage, run following command first:

```sh-session
$ npm install
```

### NPM build

```sh-session
$ npm run build
```

### NPM build watch

```sh-session
$ npm run start
```

# Writing and running tests

First time usage, run following command first:

```sh-session
$ npm install
```

1. Install jest globally
2. Run tests:

-   Run this command for running test with watch:

```sh-session
$ npm test
```

-   And run this command for test coverage:

```sh-session
$ npm test-coverage
```

# Link echo-core

1. Navigate to cloned echo-core repository

```sh-session
cd ~/repos/EchoCore
npm link
```

2. Navigate to repository to link to

```sh-session
cd ~/repo/my-app-to-link-to
npm link @equinor/echo-core
```

# Unlinking echo-core

1. Navigate to repository to link to

```sh-session
cd ~/repo/my-app-to-link-to
npm unlink --no-save @equinor/echo-core
```

2. Navigate to cloned echo-core repository

```sh-session
cd ~/repos/EchoCore
npm unlink
```

**Order is important**

_OBS: Errors when switching branches can happen if link is not unlinked properly before linking in the branch switched to. Symlink is unable to find the package after switching branch because the folders don’t exist. When this happens, check out your original branch and start from the beginning with linking the package and the project._
