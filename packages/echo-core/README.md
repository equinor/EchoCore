![logo](https://raw.githubusercontent.com/equinor/EchoCore/main/doc/ee.png)

# EchoCore

Everything a Echo app needs to communicate with the core.

[![Version](https://img.shields.io/npm/v/@equinor/echo-core.svg)](https://npmjs.org/package/@equinor/echo-core)
[![Downloads/week](https://img.shields.io/npm/dw/@equinor/echo-core.svg)](https://npmjs.org/package/@equinor/echo-core)
[![License](https://img.shields.io/npm/l/@equinor/echo-core.svg)](https://github.com/equinor/echoCore/blob/master/package.json)
[![Sisze](https://img.shields.io/bundlephobia/min/@equinor/echo-core)](https://npmjs.org/package/@equinor/echo-core)

![@equinor/echo-core](https://badgen.net/bundlephobia/minzip/@equinor/echo-core) ![@equinor/echo-core](https://badgen.net/bundlephobia/min/@equinor/echo-core)
![@equinor/echo-core](https://badgen.net/bundlephobia/dependency-count/@equinor/echo-core)

- [EchoCore](#echocore)
- [Install](#install)
    - [NPM](#npm)
- [Development](#development)
    - [NPM build](#npm-build)
    - [NPM build watch](#npm-build-watch)
- [Writing and running tests](#writing-and-running-tests)
- [Link echo-core](#link-echo-core)
  - [YALC Link](#yalc-link)
    - [installation](#installation)
    - [Publish](#publish)
    - [Link / Add](#link--add)
    - [Update](#update)
  - [NPM link](#npm-link)
  - [NPM Unlinking echo-core](#npm-unlinking-echo-core)
- [Echo Modules](#echo-modules)
  - [Register application components with Setup](#register-application-components-with-setup)
    - [Register App](#register-app)
    - [Register with Key](#register-with-key)
    - [Panels](#panels)
    - [Register Page / Route](#register-page--route)
  - [Manifest](#manifest)
- [Global State](#global-state)
  - [Module State / Context](#module-state--context)
    - [Module Context and state](#module-context-and-state)
  - [RegistryState](#registrystate)

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

There are two ways of linking up echo-modules, both described in the section underneath. The preferred wau is using a package called Yalc, but iff you don't feel like installing Yalc on your system the use NPM link.

## YALC Link

### installation

```
npm i yalc -g
```

### Publish

Run yalc publish in your dependency package my-package.

```
yalc publish
```

### Link / Add

```
yalc link @equinor/echo-core or yalc add @equinor/echo-core
```

### Update

```
yalc update
```

## NPM link

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

## NPM Unlinking echo-core

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

# Echo Modules

## Register application components with Setup

Echo is built up around modules, a module can consist of serval applications, It is recommended to keep modules as small as possible preventing long loading times at application/client (Echo) startup. All modules are registered using a setup function exported form the modules entry point. This function is called at Echo startup. The function is called with the `EchoModuleApi`.

### Register App

The api allows for app registration using `registerApp` as shown below. App registration is used for registration of the main application in a module, based on metadata taken from the modules manifest, the optional parameter can help with configuring the application.

### Register with Key

If a module consist of several apps the second app can be registered with the `registerAppWithKey` function.
this lets you manually register an app, so remember some configuration is needed here.

### Panels

`registerPanels` is for registering panels with a provided key. This key must correspond to a path which is registered. The path is used to trigger the loading ot the panels automatically. if not it need to be triggered by the `setActiveModulePanels` Action.Application panels can also be added when using `registerApp`, this can be done trough the AppOptions.

### Register Page / Route

Under the hood `registerRoute` is what `registerApp`, `registerAppWithKey`, and `registerPage`, uses. An app is just a route with a added component. `registerPag` can be used to register pages which needs no direct connection.

```Typescript
import { EchoModuleApi, PanelType } from "@equinor/echo-core"
import { Icon, themeConst } from '@equinor/echo-components';
import TestModule from "./testModule";
import Panel from "./panel";

export function setup(api: EchoModuleApi): void {
    const icon = (): JSX.Element => <Icon color={themeConst.equiGreen1} name='tag' />;

    api.registerApp(TestModule, {
        homeScreen: true,
        panels: { component: Panel, key: 'test', icon, label: 'test', panelType: PanelType.left }
    });
}
```

## Manifest

As you can see in the code sample above, `TestModule` module is registered as an app. The app will register a route and link this using the modules appManifest. here is an example of such manifest.

```Typescript
        {
            name: 'Test',
            requireRef: '',
            key: 'test',
            shortName: 'test',
            path: '/test',
            fileUri: 'echo-test-module.js',
            version: '0.0.1',
        }
```

# Global State

The global state is meant for application related data. Large data sets will slow down the performance of the application / client so keeping this to the minimum is key. Lets take a look at at current global state.

```TS

interface GlobalState {
    app: EchoAppState;
    modules: Array<AppModule>;
    coreComponents: EchoCoreComponents;
    registry: RegistryState;
    ui: Dict<UI>;
    userProfile?: User;
    userPhotoUrl?: string;
    legendOptions: LegendOptions;
    settings: Settings;
    plantsData: PlantsData;
    procosysProjectsData: ProcosysProjectsData;
    moduleState: EchoCustomState<unknown>;
    moduleContext: ModuleContext<unknown>;
}

```

There are three sections which are particularly interesting, the registry, `moduleState` and `moduleContext`. First let's look at module state and context.

## Module State / Context

Echo core provides two ways of utilizing the module state. The first method using just the moduleState. the state can be initialized and retrieve with `useAppModuleState`.

```TS
interface State {
    data: string
    name: string;
    lastName: string
}

const state = {
    data: "This is a module state",
    name: "Tom",
    lastName: "Jones"
}

// This will register the module state
useAppModuleState(state);

// To retrieve the module state with types one can write.
const { name, lastName } = useAppModuleState<State>();

```

There are several ways to update the module state.

```TS

const newState = {
    data: "using the updateModuleState will replace the current state";
    name: "Tom",
    lastName: "Jones",
}

updateModuleState(newState);

// This will update just the name property of the module State.
updateSpecificModuleState("name", "John");

```

### Module Context and state

The state can be use in conjunction with a context the context is wrapping the whole application this can be sean in `EchoContent.tsx` file in `EchoFramework`. The `ModuleContextProvider` is provided form EchoCore, will always provide the current `moduleState`. This will allow you to use regular react context.

```TS
import { ModuleContextProvider } from '@equinor/echo-core';
import React from 'react';
import { LayoutProps } from '../components';
import CorePanelLeft from '../components/panel/corePanelLeft';
import CorePanelRight from '../components/panel/corePanelRight';

interface CorePanelsProps {
    children: React.ReactNode;
    Legend?: React.FC;
}


export const EchoContent: React.FC<CorePanelsProps> = ({ children, Legend }: CorePanelsProps): JSX.Element => {
    return (
        <ModuleContextProvider>
            <CorePanelLeft />
            <CorePanelRight />
            {children}
            {Legend && <Legend />}
        </ModuleContextProvider>
    );
};

```

A context can be registered by using the `registerModuleContext` function provided by EchoCore.

## RegistryState

This is the the Echo global app sub-state container for registering application components. This state is the most important state of the whole application and contains all routes, panels and appLinks.

```TS
interface RegistryState {
    routes: Dict<RouteRegistration;
    panels: Dict<EchoPanel>;
    appLinks: Dict<AppLink>;
}
```

As EchoCore' responsibility is mainly ot provide developers the tools to register and retrieve information form the global state the usage of the `RegistryState` can be found in EchoFramework's documentation which can be found [here](https://github.com/equinor/EchoFramework)
