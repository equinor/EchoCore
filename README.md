![logo](https://raw.githubusercontent.com/equinor/EchoCore/main/doc/ee.png)

# EchoCore

A monorepo with all tools needed to communicate with echo framework. the repo contains two packages.
You can read more about them in the links below.

**Breaking changes** (new readme section since v0.5.0), see:

-   [@equinor/echo-base](https://github.com/equinor/EchoCore/blob/main/packages/echo-base)
-   [@equinor/echo-core](https://github.com/equinor/EchoCore/blob/main/packages/echo-core)

---

## Introduction

The Echo Web project consist a collection of different tools and repositories. Everything a Echo needs to
communicate with the echo core echo framework and other modules. There are a few repositories associated with
Echo Web the main repo is EchopediaWeb which to day is the project main code source, All other repo's are
made to support the development.

-   [EchopediaWeb](https://github.com/equinor/EchopediaWeb)
-   [EchoCore](https://github.com/equinor/EchoCore)
-   [EchoFramework](https://github.com/equinor/EchoFramework)
-   [EchoComponents](https://github.com/equinor/EchoComponents)
-   [EchoUtils](https://github.com/equinor/EchoUtils)
-   [EchoSearch](https://github.com/equinor/EchoSearch)
-   [EchoCli](https://github.com/equinor/EchoCli)

## Publishing new versions of echo-core and echo-base

Note: You need sufficient permissions to the @equinor npm group to do this.

### If you have made changes to **only** echo-core, do the following:

First, bump the version number in `packages/echo-core/package.json`.

Afterwards, build and release the package by running the following commands from the `packages/echo-core` directory:

```
npm run build
npm run echo-publish
```

## If you made changes to echo-base as well, do the following:

You will need to release a new version of **both** echo-base and echo-core.

First, bump the version number in `packages/echo-base/package.json`.

Afterwards, build and release the package by running the following commands from the `packages/echo-base` directory:

```
npm run build
npm run echo-publish
```

After releasing echo-base, update the echo-base version that echo-core is using, and follow the same process as above to release a new echo-core version.
