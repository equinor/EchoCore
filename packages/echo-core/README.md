![logo](https://raw.githubusercontent.com/equinor/EchoCore/main/doc/ee.png)

# EchoCore

Everything a Echo app needs to communicate with the core.

[![Version](https://img.shields.io/npm/v/@equinor/echo-core.svg)](https://npmjs.org/package/@equinor/echo-core)
[![Downloads/week](https://img.shields.io/npm/dw/@equinor/echo-core.svg)](https://npmjs.org/package/@equinor/echo-core)
[![License](https://img.shields.io/npm/l/@equinor/echo-core.svg)](https://github.com/equinor/fusion/blob/master/package.json)
[![Sisze](https://img.shields.io/bundlephobia/min/@equinor/echo-core)](https://npmjs.org/package/@equinor/echo-core)

![@equinor/echo-core](https://badgen.net/bundlephobia/minzip/@equinor/echo-core) ![@equinor/echo-core](https://badgen.net/bundlephobia/min/@equinor/echo-core)
![@equinor/echo-core](https://badgen.net/bundlephobia/dependency-count/@equinor/echo-core)

-   [EchoCore](#echocore)
-   [Install](#install)
    -   [NPM](#npm)
-   [Development](#development)
    -   [NPM build](#npm-build)
    -   [NPM build watch](#npm-build-watch)
-   [Writing and running tests](#writing-and-running-tests)
-   [Link echo-core](#link-echo-core)
-   [Unlinking echo-core](#unlinking-echo-core)

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

-   And run this command to not do npm clean install when running tests:

```sh-session
$ npm test-wo-install
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

3. Install npm-local-development if not already done: `npm i -g npm-local-development`

    my-app-to-link-to must have a links.json file with link to react (and other peerDependencies in use), if not you will experience multiple versions of react when running my-app-to-link-to

4. Navigate to cloned echo-core repository and then run `npm install` and `npm start`

```sh-session
cd ~/repos/EchoCore
npm install
npm start
```

5. In link repository run following, `npm-local-development ../EchoCore` should be run in background. open new terminal and run `npm start`

```sh-session
cd ~/repo/my-app-to-link-to
npm-local-development ../EchoCore
```

```sh-session
cd ~/repo/my-app-to-link-to
npm start
```

**Linking of echo-core should now be set up and you can run both builds with watch**

_OBS! Run `npm install` before linking, if not you might have to unlink to be able to install packages_

# Unlinking echo-core

1. Navigate to repository to link to

```sh-session
cd ~/repos/my-app-to-link-to
npm unlink --no-save @equinor/echo-core
```

2. Navigate to cloned echo-core repository

```sh-session
cd ~/repos/EchoCore
npm unlink
```

3. Stop `npm-local-development ../EchoCore` script (it watches for changes to echo-core dependencies)

**Order is important**

_OBS: Errors when switching branches can happen if link is not unlinked properly before linking in the branch switched to. Symlink is unable to find the package after switching branch because the folders don’t exist. When this happens, check out your original branch and start from the beginning with linking the package and the project._
