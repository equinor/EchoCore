# Echo Web

# Echo Core

This repository is a mono repo consisting of several smaller projects, this to be able to provide assets with
as few dependencies as possible.

## Sections

As mentioned echo core consist of different sections, these include. echo-auth, echo-base, echo-core and echo-start.
Echo-build may also be included in the future, so its specs will be described in the following sections.

## MVP

To be able to make the product scalable some of the core functionality must be present.
In this section we will create a list of whats needed. in a priorities manner explaining what and why. The scope of this may seem large but most of the functionality is already in place.

```
  functionality not implemented will be marked with *
  implementation started  will be marked with **
```

### Registration Actions \*

This will consist of alle actions needed to be able to register apps and pages. Enabling app registration and more. This wil be sent in too all modules though the app setup function.

```ts
interface ModuleAPI {
    registerApp: (route: string, appData: AppData) => void;
    registerPage: (route: string, component: Component) => void;
    registerPanel: (key: string, component: Component, options?: PanelOptions) => void;
}
```

An example of use oth the registrations actions, provided trough the setup function can be.

```ts
function setup(api: ModuleAPI) {
    api.registerApp('/media', { appComponent: App, icon: 'media', title: 'Echo Media' });
}
```

### Mock Module Loader \*

This is a temporary functionality for providing all necessary data for module initialization.  
Enabling us to register new modules in new module system and closing the gap to micro frontend architecture.

```ts
interface MockModule {
    name: string;
    version: string;
    setup: (api: ModuleAPI) => void;
}
```

```ts
import setup as mediaSetup from "./module/media"
import setup as documentsSetup from "../module/documents"

function ModuleLoader() {
    return [
      {
        name: "echo-media",
        version: "1.0.0",
        setup: mediaSetup,
      },
      {
        name: "echo-documents",
        version: "1.2.0",
        setup: documentsSetup,
      }
    ];
}
```

### Echo Startup Initializer \*

### Environment \*

### Error \*\*

A global Error handling system, with extendability.

### Settings \*\*

All necessary functionality for handling settings.

### ModuleState Actions \*\*

Actions for manipulation the moduleState, for a module to be able to share data between global components, i.e main application sending data to application panels.

### Authentication

Providing a simple to authenticate toward current and future API's, this to ease future development, not having to write api authenticators

### httpClient

Http client with and without authenticated for fetching data form API's

### Persist

Persisting small data sets to local storage, a simple but handy functionality.
used to persist user settings and filler settings

### GlobalState with base actions

The simple global state system, used for application related data, not data from source systems.
actions wil consist of read and write functionality.

### Panel Actions

Actions for handling panels

### Plants Settings

All necessary functionality for handling plant related settings.

### Utils \*\*

Helper functions made to support the functionality described above.
Ongoing work done when util functionality is needed.

## Echo Base

### Speck

-   Module loader
-   Module Evaluater
-   Dependesis provider
-   Module
-   Persist

## Echo Core

### Speck

-   Error handdeling
-   HttpClient

## Echo Auth

### Speck

## Echo Start

### Speck

-

# Echo Framework

Framework provides all the necessary components to put the echo web client together.

## Speck

## Echo Auth - Speck

## Echo start - Speck

## Echo Base - Speck

Ba

## Glossary

## Core Layout

## Bundling
