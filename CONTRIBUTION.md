# Contributing to EchoCore

The following is a set of guidelines for contributing to EchoCore.
If a topic is not covered in this document, please follow the established practice in whatever file or project you’re working on.

## Table of content

-   [Contributing to EchoCore](#contributing-to-echocore)
    -   [Table of content](#table-of-content)
    -   [Issues](#issues)
    -   [Reporting issues](#reporting-issues)
        -   [Where to report](#where-to-report)
        -   [Writing a good bug report](#writing-a-good-bug-report)
        -   [Suggested workflow](#suggested-workflow)
        -   [Contributing changes](#contributing-changes)
    -   [Code conventions](#code-conventions)
        -   [VSCode plugins for better code](#vscode-plugins-for-better-code)
        -   [Names](#names)
        -   [null and undefined](#null-and-undefined)
        -   [General Assumptions](#general-assumptions)
        -   [Classes](#classes)
        -   [General Constructs](#general-constructs)
    -   [Development scripts](#development-scripts)
    -   [Testing](#testing)
    -   [License](#license)

## Issues

We use GitHub issues to track public bugs. Please ensure your description is clear and has sufficient instructions to be able to reproduce the issue.

## Reporting issues

We always welcome bug reports and overall feedback. Here are a few
tips on how you can make reporting your issue as effective as possible.

### Where to report

New issues can be reported in our [list of issues](https://github.com/equinor/echocore/issues).

Before filing a new issue, please search the list of issues to make sure it does
not already exist.

If you do find an existing issue for what you wanted to report, please include
your own feedback in the discussion.

### Writing a good bug report

Good bug reports make it easier for maintainers to verify and root cause the
underlying problem.
The better a bug report, the faster the problem will be resolved. Ideally, a bug
report should contain the following information:

-   A high-level description of the problem.
-   A _minimal reproduction_, i.e. the smallest size of code/configuration required
    to reproduce the wrong behavior.
-   A description of the _expected behavior_, contrasted with the _actual behavior_ observed.

### Suggested workflow

We use and recommend the following workflow:

1. Create an issue for your work.
    - You can skip this step for trivial changes.
    - Get agreement from the team that your proposed change is a good one.
    - Clearly state that you are going to take on implementing it, if that's the case.
2. Create a personal fork of the repository on GitHub (if you don't already have one).
3. In your fork, create a branch off of main (`git checkout -b mybranch`).
    - Name the branch so that it clearly communicates your intentions, such as
      "issue-123" or "githubhandle-issue".
4. Make and commit your changes to your branch.
5. Add new tests corresponding to your change, if applicable.
6. Run the relevant scripts in [the section below](#development-scripts) to ensure that your build is clean and all tests are passing.
7. Create a PR against the repository's **main** branch.
    - State in the description what issue or improvement your change is addressing.
8. Wait for feedback or approval of your changes from the code maintainers.
9. When area owners have signed off, and all checks are green, your PR will be merged.

### Contributing changes

Project maintainers will merge accepted code changes from contributors.

## Code conventions

Strive for **clean code** (and what to look for in code reviews/PRs)

**Interfaces / types**

-   Write code in a way that the compiler finds the BUGS! **Avoid ANY**.
-   Define variables as optional/nullable in interfaces where needed, or better:
    -   Parse the data from the api, strip away un-needed data, and cleanup types.
    -   Instead of null/undefined, use: StringOrEmpty, empty array instead of null, etc.
    -   ToDate for date types.
-   Prefer **immutable / readonly** objects/interfaces (prevents us from accidentally changing data)

**Architectural**

-   Use **PURE** functions to avoid hidden side effects. It also makes it a lot easier to add unit tests.
-   Single Responsibility - A function/class should only do one thing. Split into sub functions.
-   One level of abstraction per function.
-   Use as few arguments as possible per function.
-   Try to split UI and logic in different files. Ideally the UI shouldn't contain any logic. Logic also wants to get unit tested.
-   Avoid importing from other modules, eg. TurnAround is not allowed to import from Ayelix. Move common code to Utils, Components, or Framework.

**Style**

-   **Avoid if/else and loops**: Favor functional programming over imperative programming: Use map, filter, find.
-   Use undefined instead of null.

**Naming**

-   Use well defined function/variable names. (A well defined name is much better than comments, which often quickly get outdated/obsolete)
-   Function names should tell what a function does. Bad: onClick()/handleOnClick() **Good: openTag()**
-   Avoid negative names. **Good: IsActive, IsEnabled**. Bad: IsInActive/IsDeactivated IsDisabled. If(IsEnabled) is easier to read than if(!isDisabled) <- (double not)
-   Don't abbreviate names. Abbreviations rely on context you may or may not have.
-   Don't put types in variable names (don't use Hungarian notation like let bIsValid, let iSpeed, let szUserName)
-   Put units in variable name **Good: let delayInSeconds or delaySeconds**. Bad: let delay. Users of your function would not know the unit of time to use without looking into the function implementation.

**Code smells & Other**

-   **Avoid Code smells** like: Code duplication, long method, long class, long parameter list. etc.
-   **No Magic numbers** or strings! Bad: const time = 600000; **Good: const millisecondsInTenMinutes = 10 _ 60 _ 1000;**
-   Avoid premature optimization - benchmark first.
-   **Fix** all **eslint warnings and errors** in your files.
-   Always check-in the code in better shape than you found it, fix/cleanup smaller things as you edit a file.
-   Use readonly arrays in functions, to better communicate that nothing is changed.

### VSCode plugins for better code

We use several extensions that helps keeping the code clean. Visual studio Code will give suggestions on which plugins should be installed with this project.

We have enabled strict eslint rules, which will give errors/warnings if the code doesn't follow our standard guidelines. All these must be fixed before merge to dev.

Must have plugins:

-   Code Spell Checker: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
-   ESLint: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
-   Prettier - Code formatter: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
-   SonarLint: https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode

Other useful plugins:

-   GitHub Pull Requests and Issues: https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github
-   Import Cost: https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost
-   Azure App Service https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice
-   Docker: https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker

### Names

-   Use PascalCase for type names.
-   Do **not use "I"** as a prefix for interface names.
-   Use PascalCase for enum values.
-   Use camelCase for function names.
-   Use camelCase for property names and local variables.
-   Do not use "\_" as a prefix for private properties.
-   Use whole words in names when possible.

### null and undefined

Use **undefined**. Do not use null.

### General Assumptions

Consider objects like Nodes, Symbols, etc. as immutable outside the component that created them. Do not change them.
Consider arrays as immutable by default after creation.

### Classes

For consistency, do not use classes in the core compiler pipeline. Use function closures instead.

### General Constructs

For a variety of reasons, we avoid certain constructs, and use some of our own. Among them:

Do not use for..in statements; instead, use ts.forEach, ts.forEachKey and ts.forEachValue. Be aware of their slightly different semantics.
Try to **use ts.forEach, ts.map, and ts.filter instead of loops** when it is not strongly inconvenient.

Based on:
https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#names

## Development scripts

See [Development](https://github.com/equinor/EchoCore/blob/main/packages/echo-core/README.md#development)

## Testing

See [Writing and running tests](https://github.com/equinor/EchoCore/blob/main/packages/echo-core/README.md#development)

Do not use real data in test mocks! Always use made up values.

## License

By contributing to examples, you agree that your contributions will be licensed under the LICENSE file in the root directory of this source tree.
